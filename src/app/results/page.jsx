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
import { Eye, Mail, Calendar, FileText } from "lucide-react";

export default function AdminResultsPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedResult, setSelectedResult] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const ADMIN_EMAIL = "admin@company.com";
  const ADMIN_PASSWORD = "admin123";

  // -----------------------------------------------------
  // AUTO LOGIN USING LOCAL STORAGE
  // -----------------------------------------------------
  useEffect(() => {
    const saved = localStorage.getItem("adminLoggedIn");
    if (saved === "true") setIsLoggedIn(true);
  }, []);

  const handleLogin = () => {
    if (loginEmail === ADMIN_EMAIL && loginPassword === ADMIN_PASSWORD) {
      localStorage.setItem("adminLoggedIn", "true");
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Invalid email or password!");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    setIsLoggedIn(false);
  };

  // -----------------------------------------------------
  // FETCH RESULTS
  // -----------------------------------------------------
  useEffect(() => {
    if (!isLoggedIn) return;

    axios
      .get("/api/test-results")
      .then((res) => {
        if (res.data.success) setResults(res.data.results);
      })
      .finally(() => setLoading(false));
  }, [isLoggedIn]);

  const openAnswers = (r) => {
    setSelectedResult(r);
    setIsDialogOpen(true);
  };

  const handlePrint = () => {
    setIsDialogOpen(false);
    setTimeout(() => window.print(), 300);
  };

  // -----------------------------------------------------
  // LOGIN UI
  // -----------------------------------------------------
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <Card className="p-10 w-full max-w-md shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded mb-4"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded mb-4"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />

          {loginError && (
            <p className="text-red-500 text-sm mb-3">{loginError}</p>
          )}

          <Button className="w-full" onClick={handleLogin}>
            Login
          </Button>
        </Card>
      </div>
    );
  }

  // -----------------------------------------------------
  // LOADING
  // -----------------------------------------------------
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin h-12 w-12 border-t-4 border-blue-500 rounded-full"></div>
        <span className="ml-4 text-lg">Loading...</span>
      </div>
    );
  }

  // -----------------------------------------------------
  // EMPTY STATE
  // -----------------------------------------------------
  if (results.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center p-10">
        <Card className="p-12 text-center">
          <p className="text-xl font-bold text-gray-600">No Results Found</p>
        </Card>
      </div>
    );
  }

  // -----------------------------------------------------
  // MAIN RESULTS PAGE
  // -----------------------------------------------------
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Test Results</h1>

            <Button variant="destructive" onClick={handleLogout}>
              Logout
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {results.map((r) => (
              <Card key={r.id} className="p-5 border shadow hover:shadow-lg">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <h3 className="font-bold text-lg">{r.candidate.name}</h3>

                    <div
                      className={`text-3xl font-extrabold ${
                        r.score >= 80
                          ? "text-green-600"
                          : r.score >= 60
                          ? "text-yellow-600"
                          : "text-red-600"
                      }`}
                    >
                      {r.score}%
                    </div>
                  </div>

                  <p className="text-sm flex items-center gap-1 text-gray-600">
                    <Mail className="w-4 h-4" /> {r.candidate.email}
                  </p>

                  <div className="flex justify-between text-sm">
                    <span>
                      {r.correct}/{r.total} correct
                    </span>
                    <Badge variant={r.score >= 70 ? "default" : "destructive"}>
                      {r.score >= 80
                        ? "Excellent"
                        : r.score >= 70
                        ? "Pass"
                        : "Fail"}
                    </Badge>
                  </div>

                  <p className="text-xs flex items-center gap-1 text-gray-500">
                    <Calendar className="w-3 h-3" /> {r.date}
                  </p>

                  <Button className="w-full" variant="outline" onClick={() => openAnswers(r)}>
                    <Eye className="w-4 h-4 mr-2" /> View Full Report
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* -----------------------------------------------------
          DIALOG (SHOW RESUME + ALL Q/A)
      ----------------------------------------------------- */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto">

          <DialogHeader className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-bold">
              {selectedResult?.candidate.name} — Report
            </DialogTitle>

            <Button variant="outline" onClick={handlePrint}>
              Print Answers
            </Button>
          </DialogHeader>

          {/* Candidate Info */}
          <div className="p-3 bg-gray-100 rounded-md mb-4 space-y-2">
            <p><strong>Email:</strong> {selectedResult?.candidate.email}</p>
            <p><strong>Phone:</strong> {selectedResult?.candidate.phone}</p>
            <p><strong>Job Title:</strong> {selectedResult?.candidate.jobTitle}</p>

            {/* Resume Preview */}
            {selectedResult?.candidate.resume && (
              <div className="mt-3">
                <p className="font-semibold mb-1">Resume (PDF Preview):</p>

                <iframe
                  src={selectedResult.candidate.resume}
                  className="w-full h-64 border rounded"
                ></iframe>

                <a
                  href={selectedResult.candidate.resume}
                  target="_blank"
                  className="text-blue-600 underline flex items-center gap-1 mt-2"
                >
                  <FileText className="w-4 h-4" /> Open Full Resume
                </a>
              </div>
            )}
          </div>

          {/* Questions & Answers */}
          <h2 className="text-xl font-semibold mb-3">Questions & Answers</h2>

          <div className="space-y-4">
            {selectedResult?.answers.map((ans, i) => (
              <div key={i} className="border p-4 rounded bg-gray-50">
                <p className="font-bold mb-2">
                  Q{ans.questionId}: {ans.question}
                </p>

                {Object.entries(ans.options).map(([key, value]) => {
                  const isCorrect = key === ans.correctAnswer;
                  const isSelected = key === ans.selectedAnswer;

                  return (
                    <p
                      key={key}
                      className={`
                        ml-4 text-sm
                        ${isCorrect ? "text-green-700 font-bold" : ""}
                        ${
                          isSelected && !isCorrect
                            ? "text-red-600 font-bold"
                            : ""
                        }
                      `}
                    >
                      {key}: {value}
                    </p>
                  );
                })}
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* -----------------------------------------------------
          PRINT ONLY ANSWERS
      ----------------------------------------------------- */}
      {selectedResult && (
        <div id="printable-content" className="hidden p-6 bg-white">
          <h1 className="text-3xl font-bold text-center mb-6">
            {selectedResult.candidate.name} — Test Answers Report
          </h1>

          <div className="print-columns">
            {selectedResult.answers.map((ans, idx) => (
              <div key={idx} className="q-box border p-2 rounded mb-3">
                <p className="font-bold mb-1">
                  Q{ans.questionId}: {ans.question}
                </p>

                {Object.entries(ans.options).map(([key, val]) => {
                  const isCorrect = key === ans.correctAnswer;
                  const isSelected = key === ans.selectedAnswer;

                  return (
                    <p
                      key={key}
                      className={`
                        text-sm ml-2
                        ${isCorrect ? "text-green-700 font-bold" : ""}
                        ${
                          isSelected && !isCorrect
                            ? "text-red-600 font-bold"
                            : ""
                        }
                      `}
                    >
                      {key}: {val}
                    </p>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* PRINT CSS */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 5mm;
          }

          body * {
            visibility: hidden !important;
          }

          #printable-content,
          #printable-content * {
            visibility: visible !important;
            display: block !important;
          }

          #printable-content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            zoom: 0.78;
          }

          .print-columns {
            column-count: 2;
            column-gap: 16px;
          }

          .print-columns .q-box {
            break-inside: avoid;
            page-break-inside: avoid;
          }
        }
      `}</style>
    </>
  );
}
