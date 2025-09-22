"use client";

import { useState } from "react";
import Link from "next/link";

export default function RequestAgentPage() {
  const [businessName, setBusinessName] = useState("");
  const [agentGoal, setAgentGoal] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Placeholder submit. Wire to Rails backend when ready.
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen p-8 sm:p-16">
      <main className="mx-auto max-w-3xl">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-6">Request an AI Agent</h1>
        <p className="text-sm text-black/70 dark:text-white/70 mb-8">
          Tell us your business and workflow goal. We will provision an agent and follow up with integration steps and API keys.
        </p>
        {submitted ? (
          <div className="rounded-md border border-green-500/30 bg-green-500/10 p-4 text-sm">
            Thanks! Your request has been recorded locally. Hook this form to your Rails endpoint (e.g., POST /agent_requests) to persist.
          </div>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-5">
            <label className="grid gap-2">
              <span className="text-sm">Business name</span>
              <input
                type="text"
                required
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="h-10 px-3 rounded-md border border-black/10 dark:border-white/15 bg-transparent"
                placeholder="Acme Corp"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm">Contact email</span>
              <input
                type="email"
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="h-10 px-3 rounded-md border border-black/10 dark:border-white/15 bg-transparent"
                placeholder="ops@acme.com"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm">Agent goal</span>
              <textarea
                required
                value={agentGoal}
                onChange={(e) => setAgentGoal(e.target.value)}
                className="min-h-28 p-3 rounded-md border border-black/10 dark:border-white/15 bg-transparent"
                placeholder="E.g., triage inbound support tickets and draft responses"
              />
            </label>
            <div className="flex gap-3">
              <button type="submit" className="h-10 px-5 rounded-full bg-foreground text-background text-sm">
                Submit Request
              </button>
              <Link href="/" className="h-10 px-5 rounded-full border border-black/10 dark:border-white/20 text-sm flex items-center">
                Cancel
              </Link>
            </div>
          </form>
        )}
      </main>
    </div>
  );
}


