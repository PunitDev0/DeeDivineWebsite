// app/test/page.jsx
"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Toaster, toast } from "sonner";
import { Loader2 } from "lucide-react";
import questionsData from "@/lib/questions.json";

// 100 mein se 20 random questions nikaalta hai
function get20RandomQuestions() {
  const all = questionsData.sections.flatMap(s => s.questions);
  const shuffled = [...all].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 20);
}

export default function TestPage() {
  const searchParams = useSearchParams();
  const candidateId = searchParams.get("candidate");

  const [questions, setQuestions] = useState([]);     // sirf 20 questions
  const [currentQuesIndex, setCurrentQuesIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const TOTAL = 20;
  const currentQuestion = questions[currentQuesIndex];
  const answeredCount = Object.keys(answers).length;

  useEffect(() => {
    if (!candidateId) {
      toast.error("Invalid candidate ID. Please go back and upload resume.");
      return;
    }
    setQuestions(get20RandomQuestions());
  }, [candidateId]);

  const handleAnswerChange = (answer) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: answer }));
  };

  const handleNext = () => {
    if (currentQuesIndex < TOTAL - 1) {
      setCurrentQuesIndex(currentQuesIndex + 1);
    }
  };

  const handleSubmit = async () => {
    if (answeredCount < TOTAL) {
      toast.error(`Please answer all 20 questions first. Answered: ${answeredCount}/20`);
      return;
    }

    setIsSubmitting(true);

    const testData = {
      candidateId,
      answers: Object.entries(answers).map(([qId, ans]) => ({
        questionId: parseInt(qId),
        answer: ans
      })),
      completedAt: new Date().toISOString(),
    };

    try {
      const res = await fetch("/api/test-results", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(testData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Test submitted successfully!");
        setTimeout(() => window.location.href = `/`, 1500);
      } else {
        toast.error(data.error || "Failed to submit");
      }
    } catch (err) {
      toast.error("Network error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (questions.length === 0) return <div className="text-center p-10">Loading your test...</div>;

  const isLast = currentQuesIndex === TOTAL - 1;

  return (
    <>
      <Toaster />
      <div className="min-h-screen bg-gray-50 p-4">
        <Card className="max-w-4xl mx-auto">
          <div className="p-6">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold mb-2">Real Estate Knowledge Test</h1>
              <p className="text-gray-600 mb-4">
                Question {currentQuesIndex + 1} of 20
              </p>
              <Progress value={(answeredCount / TOTAL) * 100} className="w-full mb-4" />
              <p className="text-sm text-gray-500">Progress: {answeredCount}/20 answered</p>
            </div>

            <div className="space-y-4 mb-8">
              <p className="text-lg">{currentQuestion.question}</p>
              <RadioGroup value={answers[currentQuestion.id] || ""} onValueChange={handleAnswerChange}>
                {Object.entries(currentQuestion.options).map(([key, value]) => (
                  <div key={key} className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50">
                    <RadioGroupItem value={key} id={`${currentQuestion.id}-${key}`} />
                    <Label htmlFor={`${currentQuestion.id}-${key}`} className="cursor-pointer">
                      <span className="font-medium">{key}.</span> {value}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="flex justify-between">
              <div></div> {/* left empty for alignment */}

              <Button 
                onClick={isLast ? handleSubmit : handleNext}
                disabled={!answers[currentQuestion.id] && !isLast}
                className={isLast ? "bg-green-600 hover:bg-green-700" : ""}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : isLast ? (
                  answeredCount === 20 ? "Submit Test" : "Complete All Questions"
                ) : (
                  "Next"
                )}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}