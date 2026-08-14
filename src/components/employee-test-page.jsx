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
import { Loader2, ChevronRight } from "lucide-react";
import questionsData from "@/lib/employee-test-questions.json";

// ── Reliable Fisher-Yates shuffle ──
function getShuffledQuestions(count = 40) {
  const allQuestions = questionsData.sections.flatMap((section) => section.questions);
  if (allQuestions.length === 0) return [];
  if (allQuestions.length < count) return [...allQuestions];

  const shuffled = [...allQuestions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

export default function EmployeeTestPage() {
  const searchParams = useSearchParams();
  const tempId = searchParams?.get("temp") || Date.now().toString();

  const TOTAL_QUESTIONS = 40;
  const BASE_TIME = 120 * 60; 
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
  const [showThankYou, setShowThankYou] = useState(false);

  // Employee details
  const [employeeName, setEmployeeName] = useState("");
  const [employeePhone, setEmployeePhone] = useState("");
  const [employeeCode, setEmployeeCode] = useState("");
  const [employeeDesignation, setEmployeeDesignation] = useState("");
  const [teamLeaderName, setTeamLeaderName] = useState("");

  const timerRef = useRef(null);
  const cheatLockRef = useRef(false);

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
            if (remaining <= 0) handleAutoSubmit();
          }
        }
      } catch (e) {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    setIsLoading(false);
  }, [tempId]);

  useEffect(() => {
    if (showForm || !startTime) return;
    const state = { tempId, employeeName, employeePhone, employeeCode, employeeDesignation, teamLeaderName, questions, answers, currentQuesIndex, cheatCount, startTime };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [tempId, employeeName, employeePhone, employeeCode, employeeDesignation, teamLeaderName, questions, answers, currentQuesIndex, cheatCount, startTime, showForm]);

  useEffect(() => {
    if (showForm || questions.length === 0) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [showForm, questions.length]);

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
      toast.error(`Cheating detected! 10 min penalty & test reset.`);
    };
    const onVisibilityChange = () => { if (document.hidden) handleCheat("Tab switch"); };
    const onBlur = () => handleCheat("Focus lost");
    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("blur", onBlur);
    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("blur", onBlur);
    };
  }, [showForm, questions.length]);

  const handleStartTest = () => {
    if (!employeeName.trim() || !employeePhone.trim() || !employeeCode.trim() || !employeeDesignation.trim() || !teamLeaderName.trim()) 
      return toast.error("Please fill all fields");
    const now = Date.now();
    const selectedQuestions = getShuffledQuestions(TOTAL_QUESTIONS);
    setStartTime(now);
    setQuestions(selectedQuestions);
    setShowForm(false);
  };

  const handleAnswerChange = (answer) => {
    const currentQuestion = questions[currentQuesIndex];
    if (!currentQuestion) return;
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: answer }));
  };

  const handleNext = () => {
    if (currentQuesIndex < TOTAL_QUESTIONS - 1) {
      setCurrentQuesIndex((prev) => prev + 1);
    } else {
      handleAutoSubmit();
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
      await fetch("/api/employee-test-results", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tempId, answers: formattedAnswers, cheatCount, timeTaken: BASE_TIME - timeLeft, name: employeeName, phone: employeePhone, employeeCode, designation: employeeDesignation, teamLeaderName }),
      });
      setShowThankYou(true);
      localStorage.removeItem(STORAGE_KEY);
      setTimeout(() => { window.location.href = "/"; }, 2000);
    } catch (err) {
      toast.error("Submission failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="h-12 w-12 animate-spin text-primary" /></div>;

  if (showThankYou) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
        <p className="text-gray-600">Your test has been submitted successfully.</p>
        <Loader2 className="h-6 w-6 animate-spin mx-auto mt-6" />
      </Card>
    </div>
  );

  if (showForm) return (
    <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
      <Card className="max-w-md w-full p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Employee Assessment</h2>
        <div className="space-y-4">
          <div><Label>Full Name *</Label><Input value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} /></div>
          <div><Label>Phone Number *</Label><Input value={employeePhone} onChange={(e) => setEmployeePhone(e.target.value)} /></div>
          <div><Label>Employee Code *</Label><Input value={employeeCode} onChange={(e) => setEmployeeCode(e.target.value)} /></div>
          <div><Label>Designation *</Label><Input value={employeeDesignation} onChange={(e) => setEmployeeDesignation(e.target.value)} /></div>
          <div><Label>Team Leader Name *</Label><Input value={teamLeaderName} onChange={(e) => setTeamLeaderName(e.target.value)} /></div>
          <Button onClick={handleStartTest} className="w-full bg-green-600 hover:bg-green-700 mt-4">Start Test</Button>
        </div>
      </Card>
    </div>
  );

  const currentQuestion = questions[currentQuesIndex];
  const isQuestionAnswered = currentQuestion ? !!answers[currentQuestion.id] : false;

  return (
    <>
      <Toaster />
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-5xl mx-auto mb-4 p-4 bg-white border rounded-lg shadow-sm flex flex-wrap justify-between items-center gap-4">
          <div>
            <p className="text-sm font-bold">{employeeName} ({employeeCode})</p>
            <p className="text-xs text-gray-500">{employeeDesignation} | TL: {teamLeaderName}</p>
          </div>
          <div className="flex gap-4 text-sm font-mono">
             <span className="bg-red-50 text-red-600 px-2 py-1 rounded">⏱ {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}</span>
             <span className="bg-gray-100 px-2 py-1 rounded">📝 {currentQuesIndex + 1}/{TOTAL_QUESTIONS}</span>
          </div>
        </div>

        <Card className="max-w-5xl mx-auto overflow-hidden">
          <Progress value={((currentQuesIndex + 1) / TOTAL_QUESTIONS) * 100} className="h-2 rounded-none" />
          <div className="p-6 md:p-10">
            {currentQuestion ? (
              <div className="min-h-[300px]">
                <h3 className="text-xl font-semibold mb-8 leading-snug">
                  <span className="text-primary mr-2">Q{currentQuesIndex + 1}.</span>
                  {currentQuestion.question}
                </h3>

                <RadioGroup value={answers[currentQuestion.id] || ""} onValueChange={handleAnswerChange} className="space-y-3">
                  {Object.entries(currentQuestion.options).map(([key, value]) => (
                    <Label key={key} className={`flex items-center space-x-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${answers[currentQuestion.id] === key ? "border-primary bg-primary/5" : "border-gray-100 hover:border-gray-300"}`}>
                      <RadioGroupItem value={key} />
                      <span className="flex-1 text-base"><b className="mr-2">{key}.</b> {value}</span>
                    </Label>
                  ))}
                </RadioGroup>
              </div>
            ) : <Loader2 className="animate-spin mx-auto" />}

            <div className="flex justify-end mt-12 border-t pt-6">
              <Button 
                onClick={handleNext} 
                disabled={!isQuestionAnswered || isSubmitting} 
                className={`px-8 h-12 text-lg ${currentQuesIndex === TOTAL_QUESTIONS - 1 ? "bg-green-600 hover:bg-green-700" : "bg-primary"}`}
              >
                {currentQuesIndex === TOTAL_QUESTIONS - 1 ? (isSubmitting ? "Submitting..." : "Finish Test") : "Next Question"}
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </Card>
        
        {!isQuestionAnswered && (
          <p className="text-center text-sm text-orange-600 mt-4 animate-pulse">
            Please select an option to enable the Next button
          </p>
        )}
      </div>
    </>
  );
}