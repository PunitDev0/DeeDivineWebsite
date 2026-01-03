"use client";

import React, { useEffect, useRef, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { Toaster, toast } from "sonner";
import { Loader2, ChevronLeft, ChevronRight } from "lucide-react";
import questionsData from "@/lib/employee-test-questions.json";

function getBalanced40Questions() {
  const selected = [];
  questionsData.sections.forEach((section) => {
    const shuffled = [...section.questions].sort(() => Math.random() - 0.5);
    selected.push(...shuffled.slice(0, 10));
  });
  return selected.sort(() => Math.random() - 0.5).slice(0, 40);
}

export default function TestPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tempId = searchParams?.get("temp") || Date.now().toString(); // Temporary ID if no employee yet

  const TOTAL = 40;
  const BASE_TIME = 120 * 60; // 2 hours
  const CHEAT_PENALTY = 10 * 60;
  const CHEAT_LOCK_MS = 2000;

  const [questions, setQuestions] = useState([]);
  const [currentQuesIndex, setCurrentQuesIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(BASE_TIME);
  const [cheatCount, setCheatCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Employee details - filled only at the end
  const [employeeName, setEmployeeName] = useState("");
  const [employeePhone, setEmployeePhone] = useState("");
  const [employeeDesignation, setEmployeeDesignation] = useState("");
  const [showEmployeeForm, setShowEmployeeForm] = useState(false);

  const timerRef = useRef(null);
  const cheatLockRef = useRef(false);

  useEffect(() => {
    const qs = getBalanced40Questions();
    setQuestions(qs);
  }, []);

  useEffect(() => {
    if (questions.length === 0) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          toast.error("Time over! Submitting test...");
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [questions]);

  useEffect(() => {
    if (questions.length === 0) return;

    const handleCheat = (reason) => {
      if (cheatLockRef.current) return;
      cheatLockRef.current = true;
      setTimeout(() => (cheatLockRef.current = false), CHEAT_LOCK_MS);

      setCheatCount((prev) => prev + 1);
      setTimeLeft((prev) => Math.max(prev - CHEAT_PENALTY, 0));
      setQuestions(getBalanced40Questions());
      setCurrentQuesIndex(0);
      setAnswers({});
      setShowEmployeeForm(false);

      toast.error(`Cheating detected (${reason}) ❌ 10 min deducted & Questions reset`);
    };

    const onVisibilityChange = () => {
      if (document.hidden) handleCheat("Tab switched");
    };

    const onBlur = () => handleCheat("Window focus lost");

    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("blur", onBlur);

    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("blur", onBlur);
    };
  }, [questions]);

  const handleAnswerChange = (answer) => {
    const q = questions[currentQuesIndex];
    if (!q) return;

    setAnswers((prev) => ({
      ...prev,
      [q.id]: answer,
    }));
  };

  const handlePrevious = () => {
    if (currentQuesIndex > 0) setCurrentQuesIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentQuesIndex < TOTAL - 1) setCurrentQuesIndex((prev) => prev + 1);
    else setShowEmployeeForm(true); // All questions done → show form
  };

  const handleAutoSubmit = async () => {
    try {
      const formattedAnswers = Object.entries(answers).map(([questionId, answer]) => ({
        questionId: parseInt(questionId),
        answer,
      }));

      await fetch("/api/employee-test-results", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tempId,
          answers: formattedAnswers,
          cheatCount,
          timeTaken: BASE_TIME - timeLeft,
          name: employeeName || "Not Provided",
          phone: employeePhone || "Not Provided",
          designation: employeeDesignation || "Not Provided",
        }),
      });
    } catch (err) {
      console.error("Auto submit failed", err);
    }
  };

  const handleFinalSubmit = async () => {
    if (!employeeName.trim()) {
      toast.error("Please enter your Name");
      return;
    }
    if (!employeePhone.trim()) {
      toast.error("Please enter your Phone Number");
      return;
    }
    if (!employeeDesignation.trim()) {
      toast.error("Please enter your Designation");
      return;
    }

    setIsSubmitting(true);
    await handleAutoSubmit();
    toast.success("Test submitted successfully!");
    setTimeout(() => router.push("/"), 2000);
  };

  if (questions.length === 0) {
    return <div className="p-10 text-center">Loading your test…</div>;
  }

  const currentQuestion = questions[currentQuesIndex];
  const answeredCount = Object.keys(answers).length;
  const isFirst = currentQuesIndex === 0;
  const isLastQuestion = currentQuesIndex === TOTAL - 1;

  // If employee form is shown
  if (showEmployeeForm) {
    return (
      <>
        <Toaster />
        <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
          <Card className="max-w-md w-full">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-center mb-6">
                Complete Your Details
              </h2>
              <p className="text-center text-gray-600 mb-8">
                You have completed all 40 questions. Please fill in your details to submit the test.
              </p>

              <div className="space-y-5">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={employeeName}
                    onChange={(e) => setEmployeeName(e.target.value)}
                    placeholder="Enter your name"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={employeePhone}
                    onChange={(e) => setEmployeePhone(e.target.value)}
                    placeholder="Enter your phone"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="designation">Designation *</Label>
                  <Input
                    id="designation"
                    value={employeeDesignation}
                    onChange={(e) => setEmployeeDesignation(e.target.value)}
                    placeholder="e.g., Sales Manager, Broker, etc."
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Button
                  onClick={handleFinalSubmit}
                  disabled={isSubmitting}
                  className="bg-green-600 hover:bg-green-700 px-8"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Submitting…
                    </>
                  ) : (
                    "Submit Test"
                  )}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </>
    );
  }

  // Main Test UI
  return (
    <>
      <Toaster />
      <div className="min-h-screen bg-gray-50 p-4">
        <Card className="max-w-5xl mx-auto">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-2">
              Real Estate Knowledge Test - 40 Questions
            </h1>

            <div className="text-center text-sm text-gray-600 mb-4">
              ⏱ Time Left:{" "}
              <b>
                {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
              </b>
              {" | "}🚨 Cheats: {cheatCount} {" | "}
              Progress: {answeredCount}/{TOTAL}
            </div>

            <Progress value={(answeredCount / TOTAL) * 100} className="mb-6" />

            <div className="text-right text-sm text-gray-500 mb-2">
              Question {currentQuesIndex + 1} of {TOTAL}
            </div>

            <p className="text-lg font-medium mb-6">{currentQuestion.question}</p>

            <RadioGroup
              value={answers[currentQuestion.id] || ""}
              onValueChange={handleAnswerChange}
            >
              {Object.entries(currentQuestion.options).map(([key, val]) => (
                <div
                  key={key}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition mb-2"
                >
                  <RadioGroupItem value={key} id={`${currentQuestion.id}-${key}`} />
                  <Label htmlFor={`${currentQuestion.id}-${key}`} className="cursor-pointer flex-1">
                    <b>{key}.</b> {val}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex justify-between items-center mt-10">
              <Button onClick={handlePrevious} disabled={isFirst} variant="outline">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>

              <Button onClick={handleNext} disabled={!answers[currentQuestion.id]}>
                {isLastQuestion ? "Finish & Enter Details" : "Next"}
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}