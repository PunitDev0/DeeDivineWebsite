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
    <div className="min-h-screen bg-[#FDFDFD] font-sans relative overflow-hidden pt-32 pb-24 px-4 md:px-8">
      {/* GLOBAL BACKGROUND GLOW */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(181,31,59,0.03),transparent_60%)] blur-3xl" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(229,45,79,0.02),transparent_60%)] blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="bg-white/80 backdrop-blur-[16px] border border-white/65 rounded-[28px] shadow-[0_8px_40px_rgba(0,0,0,0.04)] overflow-hidden">
          
          <div className="flex flex-col lg:grid lg:grid-cols-[minmax(0,1.65fr)_minmax(320px,1fr)]">
            
            {/* Left: Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="p-8 md:p-12"
            >
              {/* Progress */}
              <div className="flex gap-2 mb-8">
                <div className="h-1.5 flex-1 rounded-full bg-gradient-to-r from-[#B51F3B] to-[#FF5364]" />
                {isApplyForJob ? (
                  <>
                    <div className="h-1.5 flex-1 rounded-full bg-neutral-200" />
                    <div className="h-1.5 flex-1 rounded-full bg-neutral-100" />
                  </>
                ) : (
                  <div className="h-1.5 flex-1 rounded-full bg-neutral-200" />
                )}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#0c0d12]">
                  Upload your resume
                </h1>
                <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200 self-start sm:self-auto">
                  {isApplyForJob ? "Step 2 of 3" : "General Application"}
                </span>
              </div>
              <p className="text-sm text-neutral-500 font-medium mb-10 leading-relaxed">
                Complete your profile and upload a PDF resume to apply. Takes under 2 minutes.
              </p>

              {/* Personal Information */}
              <SectionLabel>Personal information</SectionLabel>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <Field label="Full name" required>
                  <Input
                    placeholder="Rahul Sharma"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-white/60 border-neutral-200 focus:border-[#B51F3B] focus:ring-[#B51F3B]/20 transition-all rounded-xl"
                  />
                </Field>
                <Field label="Father's name" required>
                  <Input
                    placeholder="Suresh Sharma"
                    value={form.fathersName}
                    onChange={(e) => setForm({ ...form, fathersName: e.target.value })}
                    className="bg-white/60 border-neutral-200 focus:border-[#B51F3B] focus:ring-[#B51F3B]/20 transition-all rounded-xl"
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                <Field label="Email address" required>
                  <Input
                    type="email"
                    placeholder="rahul@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-white/60 border-neutral-200 focus:border-[#B51F3B] focus:ring-[#B51F3B]/20 transition-all rounded-xl"
                  />
                </Field>
                <Field label="Phone number" required>
                  <Input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="bg-white/60 border-neutral-200 focus:border-[#B51F3B] focus:ring-[#B51F3B]/20 transition-all rounded-xl"
                  />
                </Field>
              </div>

              {/* Professional Details */}
              <SectionLabel>Professional details</SectionLabel>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <Field label="Highest qualification" required>
                  <Input
                    placeholder="B.Tech Computer Science"
                    value={form.highestQualification}
                    onChange={(e) => setForm({ ...form, highestQualification: e.target.value })}
                    className="bg-white/60 border-neutral-200 focus:border-[#B51F3B] focus:ring-[#B51F3B]/20 transition-all rounded-xl"
                  />
                </Field>
                <Field label="Desired job title" required>
                  <Input
                    placeholder="Frontend Developer"
                    value={form.jobTitle}
                    onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
                    className="bg-white/60 border-neutral-200 focus:border-[#B51F3B] focus:ring-[#B51F3B]/20 transition-all rounded-xl"
                  />
                </Field>
              </div>

              {/* Fresher Option */}
              <div className={cn("flex items-center gap-3 mb-5 p-4 rounded-xl border transition-all duration-300", isFresher ? "bg-[#B51F3B]/5 border-[#B51F3B]/20" : "bg-neutral-50/50 border-neutral-100")}>
                <Checkbox
                  id="isFresher"
                  checked={isFresher}
                  onCheckedChange={(c) => {
                    setIsFresher(!!c);
                    if (c) {
                      setForm((prev) => ({ ...prev, lastSalary: "", lastCompanyName: "" }));
                    }
                  }}
                  className="data-[state=checked]:bg-[#B51F3B] data-[state=checked]:border-[#B51F3B]"
                />
                <Label htmlFor="isFresher" className="text-sm font-semibold text-[#0c0d12] cursor-pointer">
                  I am a fresher (No previous experience)
                </Label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <Field label="Expected salary (₹ LPA)">
                  <Input
                    type="number"
                    placeholder="12"
                    value={form.expectedSalary}
                    onChange={(e) => setForm({ ...form, expectedSalary: e.target.value })}
                    className="bg-white/60 border-neutral-200 focus:border-[#B51F3B] focus:ring-[#B51F3B]/20 transition-all rounded-xl"
                  />
                </Field>
                <Field label="Last drawn salary (₹ LPA)">
                  <Input
                    type="number"
                    placeholder={isFresher ? "N/A" : "8.5"}
                    value={form.lastSalary}
                    disabled={isFresher}
                    onChange={(e) => setForm({ ...form, lastSalary: e.target.value })}
                    className="bg-white/60 border-neutral-200 focus:border-[#B51F3B] focus:ring-[#B51F3B]/20 transition-all rounded-xl disabled:bg-neutral-100/50"
                  />
                </Field>
              </div>

              {!isFresher && (
                <div className="mb-5">
                  <Field label="Last Company Name" required>
                    <Input
                      placeholder="e.g. Google India"
                      value={form.lastCompanyName}
                      onChange={(e) => setForm({ ...form, lastCompanyName: e.target.value })}
                      className="bg-white/60 border-neutral-200 focus:border-[#B51F3B] focus:ring-[#B51F3B]/20 transition-all rounded-xl"
                    />
                  </Field>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                <Field label="Career aim">
                  <Textarea
                    rows={3}
                    placeholder="Short-term career goal…"
                    value={form.aim}
                    onChange={(e) => setForm({ ...form, aim: e.target.value })}
                    className="bg-white/60 border-neutral-200 focus:border-[#B51F3B] focus:ring-[#B51F3B]/20 transition-all rounded-xl resize-none"
                  />
                </Field>
                <Field label="Long-term vision">
                  <Textarea
                    rows={3}
                    placeholder="Where do you see yourself in 5 years?"
                    value={form.vision}
                    onChange={(e) => setForm({ ...form, vision: e.target.value })}
                    className="bg-white/60 border-neutral-200 focus:border-[#B51F3B] focus:ring-[#B51F3B]/20 transition-all rounded-xl resize-none"
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
                  className="border-2 border-dashed border-neutral-200 rounded-2xl p-10 text-center cursor-pointer hover:border-[#B51F3B]/40 hover:bg-[#B51F3B]/[0.02] transition-all duration-300 bg-neutral-50/50 group"
                >
                  <div className="w-14 h-14 rounded-full bg-white shadow-sm border border-neutral-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                    <Upload className="w-6 h-6 text-[#B51F3B]" />
                  </div>
                  <p className="text-sm font-semibold text-[#0c0d12] mb-1">
                    Drag & drop your resume or{" "}
                    <label className="text-[#B51F3B] font-bold cursor-pointer hover:underline">
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
                  <p className="text-xs text-neutral-400 font-medium">PDF only · max 1 MB</p>
                </div>
              ) : (
                <div className="flex items-center gap-4 border border-[#B51F3B]/20 bg-white rounded-2xl p-5 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-[#B51F3B]/5 border border-[#B51F3B]/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-[#B51F3B]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-[#0c0d12] truncate">{file.name}</p>
                    <p className="text-xs text-neutral-500 font-medium">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <button
                    onClick={() => setFile(null)}
                    className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 hover:text-white hover:bg-red-500 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              <div className="flex items-center gap-3 mt-6 mb-8">
                <Checkbox
                  id="makePublic"
                  checked={form.makePublic}
                  onCheckedChange={(c) => setForm({ ...form, makePublic: !!c })}
                  className="data-[state=checked]:bg-[#B51F3B] data-[state=checked]:border-[#B51F3B]"
                />
                <Label htmlFor="makePublic" className="text-sm text-neutral-500 font-medium cursor-pointer">
                  Make my resume <span className="font-bold text-[#0c0d12]">public</span> for employers to discover
                </Label>
              </div>

              <Button
                onClick={handleSubmit}
                disabled={isUploading || !file}
                className={cn(
                  "w-full h-14 text-xs font-black uppercase tracking-[0.15em] rounded-full gap-2 transition-all duration-300",
                  "bg-gradient-to-r from-[#B51F3B] to-[#FF5364] hover:shadow-[0_8px_20px_rgba(229,45,79,0.3)] text-white hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none"
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
            <div className="flex flex-col justify-between bg-[#0C0D12] p-10 md:p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-[20%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(181,31,59,0.25),transparent_60%)] blur-2xl" />
              </div>
              
              <div className="relative z-10">
                <span className="inline-block text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 mb-6">
                  🚀 Career Portal
                </span>
                
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-snug mb-4">
                  {isApplyForJob
                    ? "Get hired 3× faster with a verified skill score"
                    : "Submit your resume for future opportunities"}
                </h2>
                
                <p className="text-sm text-neutral-400 font-medium leading-relaxed mb-10">
                  {isApplyForJob
                    ? "Top employers check skill scores before shortlisting. Completing your profile puts you ahead of 90% of applicants."
                    : "We review every submission carefully and will contact you as soon as a matching position opens up."}
                </p>

                <div className="space-y-6">
                  {steps.map((s) => (
                    <div key={s.num} className="flex items-start gap-4">
                      <div
                        className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-black shrink-0 mt-0.5 shadow-sm",
                          s.active
                            ? "bg-gradient-to-br from-[#B51F3B] to-[#FF5364] text-white shadow-[0_4px_12px_rgba(229,45,79,0.3)]"
                            : "bg-white/5 border border-white/10 text-neutral-400"
                        )}
                      >
                        {s.num}
                      </div>
                      <div>
                        <p className={cn("text-sm font-bold uppercase tracking-wider", s.active ? "text-white" : "text-neutral-400")}>
                          {s.title}
                        </p>
                        <p className="text-xs text-neutral-500 font-medium mt-1 leading-relaxed">{s.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex flex-wrap gap-5 pt-8 border-t border-white/10 mt-12">
                <TrustBadge icon={<ShieldCheck className="w-4 h-4" />}>Data secure</TrustBadge>
                <TrustBadge icon={<EyeOff className="w-4 h-4" />}>No spam</TrustBadge>
                <TrustBadge icon={<BadgeCheck className="w-4 h-4" />}>Verified employers</TrustBadge>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

/* Helper Components */
function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-5 mt-4">
      <div className="w-4 h-[2px] bg-gradient-to-r from-[#B51F3B] to-[#FF5364]" />
      <h3 className="text-[11px] font-black tracking-[0.2em] text-neutral-400 uppercase">
        {children}
      </h3>
    </div>
  );
}

function Field({ label, required, children }) {
  return (
    <div className="space-y-2">
      <Label className="text-[11px] font-bold uppercase tracking-wider text-[#0c0d12]">
        {label}
        {required && <span className="text-[#B51F3B] ml-1">*</span>}
      </Label>
      {children}
    </div>
  );
}

function TrustBadge({ icon, children }) {
  return (
    <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400">
      <span className="text-[#FF5364]">{icon}</span>
      {children}
    </div>
  );
}