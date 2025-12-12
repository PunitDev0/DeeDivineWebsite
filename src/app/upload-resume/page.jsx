"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Upload,
  CheckCircle2,
  Loader2,
  FileText,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function UploadResumePage() {


  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [candidateId, setCandidateId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    jobTitle: "",
    makePublic: true,
  });

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    if (selected.type !== "application/pdf") {
      toast.toast({
        title: "Invalid file",
        description: "Only PDF files are allowed.",
        variant: "destructive",
      });
      return;
    }

    if (selected.size > 1024 * 1024) {
      toast.toast({
        title: "File too large",
        description: "Resume must be under 1MB.",
        variant: "destructive",
      });
      return;
    }

    setFile(selected);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      const fakeEvent = { target: { files: [droppedFile] } };
      handleFileChange(fakeEvent);
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      toast.toast({ title: "Missing file", description: "Please upload your resume.", variant: "destructive" });
      return;
    }
    if (!form.name || !form.email || !form.phone || !form.jobTitle) {
      toast.toast({ title: "Missing info", description: "All fields are required.", variant: "destructive" });
      return;
    }

    setIsUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("jobTitle", form.jobTitle);

    try {
      const res = await fetch("/api/quick-upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log(data);
      

      if (data.success == true) {
        // Store candidate ID and show dialog
        setCandidateId(data.candidateId);
        setShowSuccessDialog(true);

        // Reset form
        setFile(null);
        setForm({ name: "", email: "", phone: "", jobTitle: "", makePublic: true });
      } else {
        toast.toast({
          title: "Upload failed",
          description: data.error || "Try again.",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast.toast({
        title: "Error",
        description: "Network error. Try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const goToTest = () => {
    if (candidateId) {
      window.location.href = `/test?candidate=${candidateId}`;
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-5xl shadow-xl">
          <div className="grid md:grid-cols-2">
            {/* Left - Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-8 md:p-12"
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Upload Your Resume
              </h1>
              <p className="text-gray-600 mb-8">
                Fill in your details and upload your resume (PDF only).
              </p>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Phone</Label>
                    <Input
                      placeholder="+1 (555) 123-4567"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Desired Job Title</Label>
                  <Input
                    placeholder="e.g. Frontend Developer"
                    value={form.jobTitle}
                    onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
                  />
                </div>

                {/* File Upload */}
                <div className="space-y-3">
                  <Label>Resume (PDF, max 1MB)</Label>

                  {!file ? (
                    <div
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={handleDrop}
                      className="border-2 border-dashed rounded-lg p-10 text-center hover:border-blue-500 transition bg-gray-50 cursor-pointer"
                    >
                      <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                      <p className="text-sm text-gray-600">
                        Drag & drop or{" "}
                        <label className="text-blue-600 font-medium cursor-pointer">
                          browse
                          <input
                            type="file"
                            accept=".pdf"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                        </label>
                      </p>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between bg-green-50 border border-green-300 rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <FileText className="w-10 h-10 text-green-600" />
                        <div>
                          <p className="font-medium">{file.name}</p>
                          <p className="text-xs text-gray-500">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button onClick={() => setFile(null)} className="text-red-600">
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="public"
                    checked={form.makePublic}
                    onCheckedChange={(c) => setForm({ ...form, makePublic: c })}
                  />
                  <Label htmlFor="public" className="text-sm cursor-pointer">
                    Make resume <span className="font-bold">public</span> for employers
                  </Label>
                </div>
              </div>

              <Button
                onClick={handleSubmit}
                disabled={isUploading || !file}
                className="w-full mt-8 h-12 text-lg font-semibold"
                size="lg"
              >
                {isUploading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  "Upload & Continue"
                )}
              </Button>
            </motion.div>

            {/* Right Panel */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-10 text-white flex flex-col justify-center items-center text-center rounded-r-2xl">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <EnvelopeIllustration />
              </motion.div>
              <h2 className="text-2xl font-bold mb-6">
                You're almost there!
              </h2>
              <p className="text-white/90 max-w-xs">
                After uploading, take a quick 5-minute skill test to boost your chances by 3x.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              Congratulations!
            </DialogTitle>
            <DialogDescription className="text-center text-base mt-4">
              Your resume has been uploaded successfully.
              <br />
              <span className="font-semibold text-green-600">
                Now take a quick skill test to stand out!
              </span>
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col items-center gap-6 py-6">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
            >
              <CheckCircle2 className="w-20 h-20 text-green-500" />
            </motion.div>

            <div className="space-y-3 w-full">
              <Button
                onClick={goToTest}
                className="w-full h-12 text-lg bg-green-600 hover:bg-green-700"
              >
                Start Skill Test Now
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowSuccessDialog(false)}
                className="w-full"
              >
                Maybe Later
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

// Animated Envelope
function EnvelopeIllustration() {
  return (
    <svg width="180" height="180" viewBox="0 0 120 120">
      <rect x="15" y="30" width="90" height="60" rx="8" fill="white" opacity="0.95" />
      <path d="M15 48 L60 75 L105 48" fill="none" stroke="#93c5fd" strokeWidth="5" />
      <path d="M15 90 L60 63 L105 90" fill="white" />
      <path d="M15 90 L60 63 L105 90" fill="none" stroke="#93c5fd" strokeWidth="5" />

      <motion.rect
        x="35"
        y="15"
        width="50"
        height="60"
        rx="4"
        fill="white"
        stroke="#60a5fa"
        strokeWidth="3"
        initial={{ y: -80 }}
        animate={{ y: -35 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2.8,
          ease: "easeInOut",
        }}
      />
      <rect x="40" y="35" width="40" height="4" fill="#e0e7ff" />
      <rect x="40" y="45" width="35" height="4" fill="#e0e7ff" />
      <rect x="40" y="55" width="30" height="4" fill="#e0e7ff" />
    </svg>
  );
}