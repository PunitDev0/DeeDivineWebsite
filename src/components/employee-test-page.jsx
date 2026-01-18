"use client";

import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { Toaster, toast } from "sonner";
import { Loader2, ChevronLeft, ChevronRight } from "lucide-react";
import questionsData from "@/lib/employee-test-questions.json";

function getRandom40Questions() {
  // Combine ALL questions from ALL sections
  const allQuestions = questionsData.sections.flatMap((section) => section.questions);

  // Shuffle the entire pool
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);

  // Take first 40
  return shuffled.slice(0, 40);
}

export default function EmployeeTestPage() {
  const searchParams = useSearchParams();
  const tempId = searchParams?.get("temp") || Date.now().toString();

  const TOTAL = 40;
  const BASE_TIME = 120 * 60; // 2 hours
  const CHEAT_PENALTY = 10 * 60;
  const CHEAT_LOCK_MS = 2000;
  const STORAGE_KEY = "employee_test_state";

  const [questions, setQuestions] = useState([]);
  const [currentQuesIndex, setCurrentQuesIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(BASE_TIME);
  const [cheatCount, setCheatCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(true);
  const [startTime, setStartTime] = useState(null);

  // Employee details
  const [employeeName, setEmployeeName] = useState("");
  const [employeePhone, setEmployeePhone] = useState("");
  const [employeeCode, setEmployeeCode] = useState("");
  const [employeeDesignation, setEmployeeDesignation] = useState("");

  // ✅ NEW: Team Leader Name
  const [teamLeaderName, setTeamLeaderName] = useState("");

  const timerRef = useRef(null);
  const cheatLockRef = useRef(false);

  // Load saved state once on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const savedState = JSON.parse(saved);
        if (savedState.tempId === tempId) {
          setEmployeeName(savedState.employeeName || "");
          setEmployeePhone(savedState.employeePhone || "");
          setEmployeeCode(savedState.employeeCode || "");
          setEmployeeDesignation(savedState.employeeDesignation || "");

          // ✅ NEW: Load Team Leader Name
          setTeamLeaderName(savedState.teamLeaderName || "");

          if (savedState.startTime) {
            setQuestions(savedState.questions || []);
            setAnswers(savedState.answers || {});
            setCurrentQuesIndex(savedState.currentQuesIndex || 0);
            setCheatCount(savedState.cheatCount || 0);
            setStartTime(savedState.startTime);

            const elapsed = Math.floor((Date.now() - savedState.startTime) / 1000);
            const remaining = BASE_TIME - elapsed;
            setTimeLeft(remaining > 0 ? remaining : 0);
            setShowForm(false);

            if (remaining <= 0) {
              handleAutoSubmit();
            }
          }
        }
      } catch (e) {
        console.error("Corrupted storage, clearing...", e);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    setIsLoading(false);
  }, [tempId]);

  // Save state whenever relevant values change (after test starts)
  useEffect(() => {
    if (showForm || !startTime) return;

    const state = {
      tempId,
      employeeName,
      employeePhone,
      employeeCode,
      employeeDesignation,

      // ✅ NEW: save Team Leader Name
      teamLeaderName,

      questions,
      answers,
      currentQuesIndex,
      cheatCount,
      startTime,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [
    tempId,
    employeeName,
    employeePhone,
    employeeCode,
    employeeDesignation,
    teamLeaderName, // ✅ NEW dependency
    questions,
    answers,
    currentQuesIndex,
    cheatCount,
    startTime,
    showForm,
  ]);

  // Timer
  useEffect(() => {
    if (showForm || questions.length === 0) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          toast.error("Time over! Auto-submitting...");
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [showForm, questions.length]);

  // Cheat detection
  useEffect(() => {
    if (showForm || questions.length === 0) return;

    const handleCheat = (reason) => {
      if (cheatLockRef.current) return;
      cheatLockRef.current = true;
      setTimeout(() => (cheatLockRef.current = false), CHEAT_LOCK_MS);

      setCheatCount((prev) => prev + 1);
      setTimeLeft((prev) => Math.max(prev - CHEAT_PENALTY, 0));
      setQuestions(getRandom40Questions()); // ← fresh random 40 questions
      setCurrentQuesIndex(0);
      setAnswers({});

      toast.error(`Cheating detected (${reason}) ❌ 10 min penalty & questions reset!`);
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
  }, [showForm, questions.length]);

  const handleStartTest = () => {
    if (!employeeName.trim()) return toast.error("Please enter your Name");
    if (!employeePhone.trim()) return toast.error("Please enter your Phone Number");
    if (!employeeCode.trim()) return toast.error("Please enter your Employee Code");
    if (!employeeDesignation.trim()) return toast.error("Please enter your Designation");

    // ✅ NEW Validation: Team Leader Name
    if (!teamLeaderName.trim()) return toast.error("Please enter Team Leader Name");

    const now = Date.now();

    const initialState = {
      tempId,
      employeeName,
      employeePhone,
      employeeCode,
      employeeDesignation,

      // ✅ NEW: save Team Leader Name
      teamLeaderName,

      questions: [],
      answers: {},
      currentQuesIndex: 0,
      cheatCount: 0,
      startTime: now,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialState));

    setStartTime(now);
    setQuestions(getRandom40Questions());
    setShowForm(false);
  };

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
    if (currentQuesIndex < TOTAL - 1) {
      setCurrentQuesIndex((prev) => prev + 1);
    } else {
      handleFinalSubmit();
    }
  };

  const handleAutoSubmit = async () => {
    try {
      const formattedAnswers = Object.entries(answers).map(([questionId, answer]) => ({
        questionId: parseInt(questionId),
        answer,
      }));

      const res = await fetch("/api/employee-test-results", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tempId,
          answers: formattedAnswers,
          cheatCount,
          timeTaken: BASE_TIME - timeLeft,
          name: employeeName,
          phone: employeePhone,
          employeeCode,
          designation: employeeDesignation,

          // ✅ NEW: send Team Leader Name
          teamLeaderName,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      toast.success("Test submitted successfully!");
      localStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      console.error("Submission failed:", err);
      toast.error("Failed to submit. Please try again.");
    }
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    await handleAutoSubmit();
    setIsSubmitting(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (showForm) {
    return (
      <>
        <Toaster />
        <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
          <Card className="max-w-md w-full">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-center mb-6">Enter Your Details</h2>
              <p className="text-center text-gray-600 mb-8">
                Fill once — saved automatically. No need to re-enter on refresh.
              </p>

              <div className="space-y-5">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={employeeName}
                    onChange={(e) => setEmployeeName(e.target.value)}
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={employeePhone}
                    onChange={(e) => setEmployeePhone(e.target.value)}
                    placeholder="Enter your phone"
                  />
                </div>

                <div>
                  <Label htmlFor="employeeCode">Employee Code *</Label>
                  <Input
                    id="employeeCode"
                    value={employeeCode}
                    onChange={(e) => setEmployeeCode(e.target.value)}
                    placeholder="Enter your employee code"
                  />
                </div>

                <div>
                  <Label htmlFor="designation">Designation *</Label>
                  <Input
                    id="designation"
                    value={employeeDesignation}
                    onChange={(e) => setEmployeeDesignation(e.target.value)}
                    placeholder="e.g., Sales Manager, Broker, etc."
                  />
                </div>

                {/* ✅ NEW FIELD: Team Leader Name */}
                <div>
                  <Label htmlFor="teamLeaderName">Team Leader Name *</Label>
                  <Input
                    id="teamLeaderName"
                    value={teamLeaderName}
                    onChange={(e) => setTeamLeaderName(e.target.value)}
                    placeholder="Enter team leader name"
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Button
                  onClick={handleStartTest}
                  className="bg-green-600 hover:bg-green-700 px-8"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Starting...
                    </>
                  ) : (
                    "Start Test"
                  )}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </>
    );
  }

  const currentQuestion = questions[currentQuesIndex];
  const answeredCount = Object.keys(answers).length;
  const isFirst = currentQuesIndex === 0;
  const isLastQuestion = currentQuesIndex === TOTAL - 1;

  return (
    <>
      <Toaster />
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-5xl mx-auto mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm">
          <p className="font-medium">Logged in as:</p>
          <p><strong>Name:</strong> {employeeName}</p>
          <p>
            <strong>Code:</strong> {employeeCode} |{" "}
            <strong>Designation:</strong> {employeeDesignation}
          </p>

          {/* ✅ NEW */}
          <p><strong>Team Leader:</strong> {teamLeaderName}</p>
        </div>

        <Card className="max-w-5xl mx-auto">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-2">
              Haryana Real Estate Quiz - DDJAY, AHP 2013, RERA & Gurugram (Updated 2026)
            </h1>

            <div className="text-center text-sm text-gray-600 mb-4">
              ⏱ Time Left:{" "}
              <b>
                {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
              </b>
              {" | "}🚨 Cheats: {cheatCount}
              {" | "}Progress: {answeredCount}/{TOTAL}
            </div>

            <Progress value={(answeredCount / TOTAL) * 100} className="mb-6" />

            <div className="text-right text-sm text-gray-500 mb-2">
              Question {currentQuesIndex + 1} of {TOTAL}
            </div>

            {currentQuestion && (
              <>
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
                      <Label
                        htmlFor={`${currentQuestion.id}-${key}`}
                        className="cursor-pointer flex-1"
                      >
                        <b>{key}.</b> {val}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </>
            )}

            <div className="flex justify-between items-center mt-10">
              <Button onClick={handlePrevious} disabled={isFirst} variant="outline">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>

              <Button onClick={handleNext} disabled={isSubmitting}>
                {isLastQuestion ? (
                  isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Submitting…
                    </>
                  ) : (
                    "Submit Test"
                  )
                ) : (
                  "Next"
                )}
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
