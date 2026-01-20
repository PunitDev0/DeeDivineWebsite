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

// ── Reliable Fisher-Yates shuffle ── always returns exactly requested count or all available
function getShuffledQuestions(count = 40) {
  const allQuestions = questionsData.sections.flatMap((section) => section.questions);

  console.log(`Total available questions: ${allQuestions.length}`);

  if (allQuestions.length === 0) {
    console.error("No questions found in JSON!");
    return [];
  }

  if (allQuestions.length < count) {
    console.warn(`Not enough questions! Only ${allQuestions.length} available, returning all.`);
    return [...allQuestions];
  }

  // Fisher-Yates shuffle (most reliable & unbiased)
  const shuffled = [...allQuestions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  const selected = shuffled.slice(0, count);

  // Final safety check
  if (selected.length !== count) {
    console.error("Shuffle failed to produce correct count!", selected.length);
    // Ultimate fallback: just take first N
    return allQuestions.slice(0, count);
  }

  console.log(`Successfully selected ${selected.length} questions`);
  return selected;
}

export default function EmployeeTestPage() {
  const searchParams = useSearchParams();
  const tempId = searchParams?.get("temp") || Date.now().toString();

  const TOTAL_QUESTIONS = 40;
  const BASE_TIME = 120 * 60; // 2 hours in seconds
  const CHEAT_PENALTY = 10 * 60; // 10 minutes penalty
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

  const [showThankYou, setShowThankYou] = useState(false);

  // Employee details
  const [employeeName, setEmployeeName] = useState("");
  const [employeePhone, setEmployeePhone] = useState("");
  const [employeeCode, setEmployeeCode] = useState("");
  const [employeeDesignation, setEmployeeDesignation] = useState("");
  const [teamLeaderName, setTeamLeaderName] = useState("");

  const timerRef = useRef(null);
  const cheatLockRef = useRef(false);

  // Load saved state on mount
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
          setTeamLeaderName(savedState.teamLeaderName || "");

          if (savedState.startTime && savedState.questions?.length > 0) {
            setQuestions(savedState.questions);
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
        console.error("Failed to load saved state, clearing...", e);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    setIsLoading(false);
  }, [tempId]);

  // Auto-save progress
  useEffect(() => {
    if (showForm || !startTime) return;

    const state = {
      tempId,
      employeeName,
      employeePhone,
      employeeCode,
      employeeDesignation,
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
    teamLeaderName,
    questions,
    answers,
    currentQuesIndex,
    cheatCount,
    startTime,
    showForm,
  ]);

  // Timer logic
  useEffect(() => {
    if (showForm || questions.length === 0) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          toast.error("Time's up! Auto-submitting...");
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

      const newQuestions = getShuffledQuestions(TOTAL_QUESTIONS);
      setQuestions(newQuestions);
      setCurrentQuesIndex(0);
      setAnswers({});

      toast.error(`Cheating detected (${reason})! 10 min penalty & new questions.`);
    };

    const onVisibilityChange = () => {
      if (document.hidden) handleCheat("Tab/Window switch");
    };

    const onBlur = () => handleCheat("Window lost focus");

    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("blur", onBlur);

    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("blur", onBlur);
    };
  }, [showForm, questions.length]);

  const handleStartTest = () => {
    if (!employeeName.trim()) return toast.error("Please enter your Name");
    if (!employeePhone.trim()) return toast.error("Please enter Phone Number");
    if (!employeeCode.trim()) return toast.error("Please enter Employee Code");
    if (!employeeDesignation.trim()) return toast.error("Please enter Designation");
    if (!teamLeaderName.trim()) return toast.error("Please enter Team Leader Name");

    const now = Date.now();
    const selectedQuestions = getShuffledQuestions(TOTAL_QUESTIONS);

    setStartTime(now);
    setQuestions(selectedQuestions);
    setShowForm(false);

    // Save initial state
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        tempId,
        employeeName,
        employeePhone,
        employeeCode,
        employeeDesignation,
        teamLeaderName,
        questions: selectedQuestions,
        answers: {},
        currentQuesIndex: 0,
        cheatCount: 0,
        startTime: now,
      })
    );
  };

  const handleAnswerChange = (answer) => {
    const currentQuestion = questions[currentQuesIndex];
    if (!currentQuestion) return;

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answer,
    }));
  };

  const handlePrevious = () => {
    if (currentQuesIndex > 0) {
      setCurrentQuesIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentQuesIndex < TOTAL_QUESTIONS - 1) {
      setCurrentQuesIndex((prev) => prev + 1);
    } else {
      handleFinalSubmit();
    }
  };

  const handleAutoSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

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
          teamLeaderName,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      setShowThankYou(true);
      localStorage.removeItem(STORAGE_KEY);

      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("Failed to submit test. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFinalSubmit = () => {
    handleAutoSubmit();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (showThankYou) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <div className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
            <p className="text-gray-600 mb-6">Your test has been submitted successfully.</p>
            <p className="text-sm text-gray-500">Redirecting to home page...</p>
            <div className="mt-6 flex justify-center">
              <Loader2 className="h-6 w-6 animate-spin" />
            </div>
          </div>
        </Card>
      </div>
    );
  }

  if (showForm) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
        <Card className="max-w-md w-full">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-center mb-6">Employee Assessment</h2>
            <p className="text-center text-gray-600 mb-8">
              Please fill in your details to begin the test
            </p>

            <div className="space-y-5">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={employeeName}
                  onChange={(e) => setEmployeeName(e.target.value)}
                  placeholder="Your full name"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={employeePhone}
                  onChange={(e) => setEmployeePhone(e.target.value)}
                  placeholder="10-digit mobile number"
                />
              </div>

              <div>
                <Label htmlFor="employeeCode">Employee Code *</Label>
                <Input
                  id="employeeCode"
                  value={employeeCode}
                  onChange={(e) => setEmployeeCode(e.target.value)}
                  placeholder="Your employee ID/code"
                />
              </div>

              <div>
                <Label htmlFor="designation">Designation *</Label>
                <Input
                  id="designation"
                  value={employeeDesignation}
                  onChange={(e) => setEmployeeDesignation(e.target.value)}
                  placeholder="e.g. Sales Executive, Broker"
                />
              </div>

              <div>
                <Label htmlFor="teamLeaderName">Team Leader Name *</Label>
                <Input
                  id="teamLeaderName"
                  value={teamLeaderName}
                  onChange={(e) => setTeamLeaderName(e.target.value)}
                  placeholder="Your reporting manager / TL"
                />
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Button
                onClick={handleStartTest}
                className="bg-green-600 hover:bg-green-700 px-10"
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
    );
  }

  const currentQuestion = questions[currentQuesIndex];
  const answeredCount = Object.keys(answers).length;

  return (
    <>
      <Toaster />
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-5xl mx-auto mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm">
          <p className="font-medium">Current Candidate:</p>
          <p>
            <strong>{employeeName}</strong> ({employeeCode})
          </p>
          <p>
            <strong>Designation:</strong> {employeeDesignation} •{" "}
            <strong>TL:</strong> {teamLeaderName}
          </p>
        </div>

        <Card className="max-w-5xl mx-auto">
          <div className="p-6">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Haryana Real Estate Assessment (2026 Updated)
            </h1>

            <div className="text-center text-sm text-gray-600 mb-4 space-x-4">
              <span>
                ⏱ <b>
                  {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
                </b>
              </span>
              <span>🚨 Cheats: {cheatCount}</span>
              <span>Answered: {answeredCount}/{TOTAL_QUESTIONS}</span>
            </div>

            <Progress value={(answeredCount / TOTAL_QUESTIONS) * 100} className="mb-6" />

            <div className="text-right text-sm text-gray-500 mb-4">
              Question {currentQuesIndex + 1} of {TOTAL_QUESTIONS}
            </div>

            {currentQuestion ? (
              <>
                <p className="text-lg font-medium mb-6 leading-relaxed">
                  {currentQuestion.question}
                </p>

                <RadioGroup
                  value={answers[currentQuestion.id] || ""}
                  onValueChange={handleAnswerChange}
                >
                  {Object.entries(currentQuestion.options).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition mb-2 border border-gray-200"
                    >
                      <RadioGroupItem value={key} id={`${currentQuestion.id}-${key}`} />
                      <Label
                        htmlFor={`${currentQuestion.id}-${key}`}
                        className="cursor-pointer flex-1"
                      >
                        <strong>{key}.</strong> {value}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </>
            ) : (
              <p className="text-red-600 text-center">No question loaded</p>
            )}

            <div className="flex justify-between items-center mt-10">
              <Button
                onClick={handlePrevious}
                disabled={currentQuesIndex === 0 || isSubmitting}
                variant="outline"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>

              <Button
                onClick={handleNext}
                disabled={isSubmitting}
                className={currentQuesIndex === TOTAL_QUESTIONS - 1 ? "bg-green-600 hover:bg-green-700" : ""}
              >
                {currentQuesIndex === TOTAL_QUESTIONS - 1 ? (
                  isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Submitting...
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