"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Upload,
  Loader2,
  FileText,
  X,
  Send,
  ShieldCheck,
  EyeOff,
  BadgeCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export default function UploadResumePage() {
  const [file, setFile] = useState(null);
  const [isFresher, setIsFresher] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [jobTitleFromUrl, setJobTitleFromUrl] = useState("");
  const [isApplyForJob, setIsApplyForJob] = useState(false);

  const [form, setForm] = useState({
    name: "",
    fathersName: "",
    email: "",
    phone: "",
    highestQualification: "",
    jobTitle: "",
    aim: "",
    vision: "",
    expectedSalary: "",
    lastSalary: "",
    lastCompanyName: "",
    makePublic: true,
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const job = params.get("job");
    if (job) {
      setJobTitleFromUrl(job);
      setForm((prev) => ({ ...prev, jobTitle: job }));
      setIsApplyForJob(true);
    } else {
      setIsApplyForJob(false);
    }
  }, []);

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (!selected) return;
    if (selected.type !== "application/pdf") {
      toast.error("Only PDF files are allowed.");
      return;
    }
    if (selected.size > 1024 * 1024) {
      toast.error("Resume must be under 1MB.");
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
    const required = ["name", "fathersName", "email", "phone", "highestQualification", "jobTitle"];
    for (const field of required) {
      if (!form[field]?.trim()) {
        toast.error(`Please fill in ${field.replace(/([A-Z])/g, " $1").toLowerCase()}`);
        return;
      }
    }
    if (!isFresher) {
      if (!form.lastCompanyName?.trim()) {
        toast.error("Please fill in last company name");
        return;
      }
    }
    if (!file) {
      toast.error("Please upload your resume (PDF)");
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("isFresher", String(isFresher));

    Object.entries(form).forEach(([k, v]) => {
      if (isFresher && (k === "lastSalary" || k === "lastCompanyName")) {
        formData.append(k, "");
      } else {
        formData.append(k, String(v));
      }
    });

    try {
      const res = await fetch("/api/quick-upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        if (isApplyForJob) {
          toast.success("Resume uploaded successfully! Redirecting to skill test...");
          window.location.href = `/test?candidate=${data.candidateId}`;
        } else {
          toast.success("Resume submitted successfully!");
          
          setFile(null);
          setIsFresher(false);
          setForm({
            name: "",
            fathersName: "",
            email: "",
            phone: "",
            highestQualification: "",
            jobTitle: "",
            aim: "",
            vision: "",
            expectedSalary: "",
            lastSalary: "",
            lastCompanyName: "",
            makePublic: true,
          });

          setTimeout(() => {
            window.location.href = "/career";
          }, 2000);
        }
      } else {
        toast.error(data.error || "Upload failed. Please try again.");
      }
    } catch {
      toast.error("Network error. Please check your connection.");
    } finally {
      setIsUploading(false);
    }
  };

  const steps = isApplyForJob
    ? [
        { num: 1, title: "Complete your profile", sub: "Add your details & upload resume" },
        { num: 2, title: "Take a 10-min skill test", sub: "Role-specific questions, instant result", active: true },
        { num: 3, title: "Get matched to jobs", sub: "Employers reach out to you directly" },
      ]
    : [
        { num: 1, title: "Complete your profile", sub: "Add your details & upload resume", active: true },
        { num: 2, title: "Submit Application", sub: "Submit details for review" },
      ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-8">
      <Card className="w-full max-w-5xl shadow-xl overflow-hidden rounded-2xl border-0">
        <div className="grid md:grid-cols-[1fr_380px]">

          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="p-8 md:p-10"
          >
            {/* Progress */}
            <div className="flex gap-2 mb-8">
              <div className="h-1 flex-1 rounded-full bg-indigo-600" />
              {isApplyForJob ? (
                <>
                  <div className="h-1 flex-1 rounded-full bg-indigo-300" />
                  <div className="h-1 flex-1 rounded-full bg-gray-200" />
                </>
              ) : (
                <div className="h-1 flex-1 rounded-full bg-gray-200" />
              )}
            </div>

            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-2xl font-semibold text-gray-900">
                Upload your resume
              </h1>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100">
                {isApplyForJob ? "Step 2 of 3" : "General Application"}
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-8 leading-relaxed">
              Complete your profile and upload a PDF resume to apply. Takes under 2 minutes.
            </p>

            {/* Personal Information */}
            <SectionLabel>Personal information</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Field label="Full name" required>
                <Input
                  placeholder="Rahul Sharma"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </Field>
              <Field label="Father's name" required>
                <Input
                  placeholder="Suresh Sharma"
                  value={form.fathersName}
                  onChange={(e) => setForm({ ...form, fathersName: e.target.value })}
                />
              </Field>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Field label="Email address" required>
                <Input
                  type="email"
                  placeholder="rahul@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </Field>
              <Field label="Phone number" required>
                <Input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </Field>
            </div>

            {/* Professional Details */}
            <SectionLabel>Professional details</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Field label="Highest qualification" required>
                <Input
                  placeholder="B.Tech Computer Science"
                  value={form.highestQualification}
                  onChange={(e) => setForm({ ...form, highestQualification: e.target.value })}
                />
              </Field>
              <Field label="Desired job title" required>
                <Input
                  placeholder="Frontend Developer"
                  value={form.jobTitle}
                  onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
                />
              </Field>
            </div>

            {/* Fresher Option */}
            <div className="flex items-center gap-3 mb-4 bg-indigo-50/40 p-4 rounded-xl border border-indigo-100/50">
              <Checkbox
                id="isFresher"
                checked={isFresher}
                onCheckedChange={(c) => {
                  setIsFresher(!!c);
                  if (c) {
                    setForm((prev) => ({ ...prev, lastSalary: "", lastCompanyName: "" }));
                  }
                }}
              />
              <Label htmlFor="isFresher" className="text-sm font-medium text-indigo-950 cursor-pointer">
                I am a fresher (No previous experience)
              </Label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Field label="Expected salary (₹ LPA)">
                <Input
                  type="number"
                  placeholder="12"
                  value={form.expectedSalary}
                  onChange={(e) => setForm({ ...form, expectedSalary: e.target.value })}
                />
              </Field>
              <Field label="Last drawn salary (₹ LPA)">
                <Input
                  type="number"
                  placeholder={isFresher ? "N/A" : "8.5"}
                  value={form.lastSalary}
                  disabled={isFresher}
                  onChange={(e) => setForm({ ...form, lastSalary: e.target.value })}
                />
              </Field>
            </div>

            {!isFresher && (
              <div className="mb-4">
                <Field label="Last Company Name" required>
                  <Input
                    placeholder="e.g. Google India"
                    value={form.lastCompanyName}
                    onChange={(e) => setForm({ ...form, lastCompanyName: e.target.value })}
                  />
                </Field>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Field label="Career aim">
                <Textarea
                  rows={3}
                  placeholder="Short-term career goal…"
                  value={form.aim}
                  onChange={(e) => setForm({ ...form, aim: e.target.value })}
                />
              </Field>
              <Field label="Long-term vision">
                <Textarea
                  rows={3}
                  placeholder="Where do you see yourself in 5 years?"
                  value={form.vision}
                  onChange={(e) => setForm({ ...form, vision: e.target.value })}
                />
              </Field>
            </div>

            {/* Resume Upload */}
            <SectionLabel>Resume</SectionLabel>
            {!file ? (
              <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                onClick={() => document.getElementById("resume-input")?.click()}
                className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center cursor-pointer hover:border-indigo-400 hover:bg-indigo-50/40 transition-all duration-200 bg-gray-50"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center mx-auto mb-3">
                  <Upload className="w-5 h-5 text-indigo-500" />
                </div>
                <p className="text-sm text-gray-600">
                  Drag & drop your resume or{" "}
                  <label className="text-indigo-600 font-medium cursor-pointer hover:underline">
                    browse file
                    <input
                      id="resume-input"
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </p>
                <p className="text-xs text-gray-400 mt-1">PDF only · max 1 MB</p>
              </div>
            ) : (
              <div className="flex items-center gap-3 border border-green-200 bg-green-50 rounded-xl px-4 py-3">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-green-800 truncate">{file.name}</p>
                  <p className="text-xs text-green-600">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <button
                  onClick={() => setFile(null)}
                  className="text-green-500 hover:text-red-500 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            <div className="flex items-center gap-3 mt-5">
              <Checkbox
                id="makePublic"
                checked={form.makePublic}
                onCheckedChange={(c) => setForm({ ...form, makePublic: !!c })}
              />
              <Label htmlFor="makePublic" className="text-sm text-gray-500 cursor-pointer">
                Make my resume <span className="font-semibold text-gray-700">public</span> for employers to discover
              </Label>
            </div>

            <Button
              onClick={handleSubmit}
              disabled={isUploading || !file}
              className={cn(
                "w-full mt-6 h-11 text-sm font-medium rounded-xl gap-2",
                "bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-40"
              )}
            >
              {isUploading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Uploading…
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  {isApplyForJob ? "Submit & take skill test" : "Submit Resume"}
                </>
              )}
            </Button>
          </motion.div>

          {/* Right: Info Panel */}
          <div className="hidden md:flex flex-col justify-between bg-[#1e1b4b] p-10 text-white">
            <div>
              <span className="inline-block text-xs px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 mb-5">
                🚀 Career Portal
              </span>
              <h2 className="text-xl font-semibold text-white leading-snug mb-3">
                {isApplyForJob
                  ? "Get hired 3× faster with a verified skill score"
                  : "Submit your resume for future opportunities"}
              </h2>
              <p className="text-sm text-white/50 leading-relaxed">
                {isApplyForJob
                  ? "Top employers check skill scores before shortlisting. Completing your profile puts you ahead of 90% of applicants."
                  : "We review every submission carefully and will contact you as soon as a matching position opens up."}
              </p>

              <div className="mt-7 space-y-5">
                {steps.map((s) => (
                  <div key={s.num} className="flex items-start gap-3">
                    <div
                      className={cn(
                        "w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium shrink-0 mt-0.5",
                        s.active
                          ? "bg-indigo-500/40 border border-indigo-400/60 text-indigo-100"
                          : "bg-indigo-500/15 border border-indigo-500/25 text-indigo-400"
                      )}
                    >
                      {s.num}
                    </div>
                    <div>
                      <p className={cn("text-sm font-medium", s.active ? "text-indigo-200" : "text-white/70")}>
                        {s.title}
                      </p>
                      <p className="text-xs text-white/35 mt-0.5">{s.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-5 border-t border-white/10 mt-6">
              <TrustBadge icon={<ShieldCheck className="w-3.5 h-3.5" />}>Data secure</TrustBadge>
              <TrustBadge icon={<EyeOff className="w-3.5 h-3.5" />}>No spam</TrustBadge>
              <TrustBadge icon={<BadgeCheck className="w-3.5 h-3.5" />}>Verified employers</TrustBadge>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

/* Helper Components */
function SectionLabel({ children }) {
  return (
    <p className="text-[11px] font-semibold tracking-widest text-gray-400 uppercase mb-3 mt-1">
      {children}
    </p>
  );
}

function Field({ label, required, children }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs text-gray-500 font-medium">
        {label}
        {required && <span className="text-red-400 ml-0.5">*</span>}
      </Label>
      {children}
    </div>
  );
}

function TrustBadge({ icon, children }) {
  return (
    <div className="flex items-center gap-1.5 text-xs text-white/40">
      <span className="text-indigo-400">{icon}</span>
      {children}
    </div>
  );
}