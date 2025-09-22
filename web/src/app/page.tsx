export default function Home() {
  return (
    <div className="min-h-screen p-8 sm:p-16">
      <main className="mx-auto max-w-4xl flex flex-col gap-10">
        <section className="flex flex-col gap-4">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Domain-Specific AI Agents, Provisioned and Hosted for Your Business
          </h1>
          <p className="text-base sm:text-lg text-black/80 dark:text-white/80">
            Request an agent that automates a workflow inside your business. We auto-build, host, and monitor it. You integrate via API keys and connectors. Billing is monthly (subscription + usage).
          </p>
          <div className="flex gap-3">
            <a href="/request" className="h-10 px-5 rounded-full bg-foreground text-background text-sm flex items-center justify-center">
              Request an Agent
            </a>
            <a href="#how-it-works" className="h-10 px-5 rounded-full border border-black/10 dark:border-white/20 text-sm flex items-center justify-center">
              How it works
            </a>
          </div>
        </section>

        <section id="how-it-works" className="grid gap-6">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base">
            <li>Submit an Agent Request with your goal, data sources, and connectors.</li>
            <li>Our provisioning pipeline generates prompts, ingests knowledge, and configures tools.</li>
            <li>We validate with smoke tests, then deploy an isolated runtime with API keys.</li>
            <li>Integrate via REST API, webhooks, or OAuth connectors. Monitor logs and usage.</li>
            <li>Billing combines subscription and usage (tokens, tool calls, external APIs).</li>
          </ol>
        </section>

        <section className="grid gap-4">
          <h2 className="text-2xl font-semibold">Key capabilities</h2>
          <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
            <li>Multi-tenant isolation with per-org API keys.</li>
            <li>Versioned agent configs: prompts, tools, policies.</li>
            <li>Knowledge ingestion with embeddings and vector index.</li>
            <li>Pluggable LLMs, vector DBs, and connectors.</li>
            <li>Observability, safety, and RBAC controls.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
