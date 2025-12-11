"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle2, XCircle, Eye, User, Mail, Calendar } from "lucide-react";

export default function AdminResultsPage() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedResult, setSelectedResult] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    axios
      .get("/api/test-results")
      .then((res) => {
        if (res.data.success) setResults(res.data.results);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const openAnswers = (result) => {
    setSelectedResult(result);
    setIsDialogOpen(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
        <span className="ml-4 text-xl">Loading...</span>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
        <Card className="p-12 text-center">
          <p className="text-2xl font-bold text-gray-600">No Results Yet</p>
        </Card>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
            Test Results ({results.length})
          </h1>

          {/* Compact Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {results.map((r) => (
              <Card
                key={r.id}
                className="p-5 hover:shadow-lg transition-shadow border"
              >
                <div className="space-y-3">
                  {/* Name & Score */}
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg text-gray-800 line-clamp-1">
                      {r.candidate.name}
                    </h3>
                    <div className={`text-3xl font-black ${
                      r.score >= 80 ? "text-green-600" :
                      r.score >= 60 ? "text-amber-600" : "text-red-600"
                    }`}>
                      {r.score}%
                    </div>
                  </div>

                  {/* Email */}
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <Mail className="w-4 h-4" /> {r.candidate.email}
                  </p>

                  {/* Score Details */}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {r.correct}/{r.total} correct
                    </span>
                    <Badge variant={r.score >= 70 ? "default" : "destructive"}>
                      {r.score >= 80 ? "Excellent" : r.score >= 70 ? "Pass" : "Fail"}
                    </Badge>
                  </div>

                  {/* Date */}
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {r.date}
                  </p>

                  {/* View Answers Button */}
                  <Button
                    onClick={() => openAnswers(r)}
                    size="sm"
                    variant="outline"
                    className="w-full mt-2"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Answers
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Dialog for Detailed Answers */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {selectedResult?.candidate.name} - Test Answers
            </DialogTitle>
          </DialogHeader>

          {selectedResult && (
            <div className="mt-6 space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <p><strong>Email:</strong> {selectedResult.candidate.email}</p>
                <p><strong>Score:</strong> {selectedResult.score}% ({selectedResult.correct}/{selectedResult.total})</p>
                <p><strong>Job Title:</strong> {selectedResult.candidate.jobTitle}</p>
                <p><strong>Date:</strong> {selectedResult.date}</p>
              </div>

              <hr />

              <h3 className="text-xl font-semibold mt-6 mb-4">All Answers:</h3>
              <div className="space-y-4">
                {selectedResult.answers.map((ans, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-lg border-2 ${
                      ans.isCorrect ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"
                    }`}
                  >
                    <p className="font-medium">
                      Q{ans.questionId}: {ans.question}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3 items-center">
                      <span>
                        <strong>Your Answer:</strong>{" "}
                        <span className={`px-3 py-1 rounded font-bold ${
                          ans.isCorrect ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                        }`}>
                          {ans.selectedAnswer}
                        </span>
                      </span>
                      {!ans.isCorrect && (
                        <span>
                          <strong>Correct:</strong>{" "}
                          <span className="px-3 py-1 rounded bg-green-200 text-green-800 font-bold">
                            {ans.correctAnswer}
                          </span>
                        </span>
                      )}
                      {ans.isCorrect ? (
                        <CheckCircle2 className="w-8 h-8 text-green-600 ml-auto" />
                      ) : (
                        <XCircle className="w-8 h-8 text-red-600 ml-auto" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}