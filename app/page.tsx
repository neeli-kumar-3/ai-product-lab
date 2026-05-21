import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="mx-auto max-w-5xl px-6 pt-12 pb-12">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gray-500">
          AI Product Lab
        </p>

        <h1 className="max-w-4xl text-2xl font-bold tracking-tight md:text-4xl">
          Designing AI Systems Beyond Prompting
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-300">
          Portfolio of AI workflow systems exploring orchestration,
          eval-driven reliability, structured outputs, retry logic,
          telemetry, and operational AI product design.
        </p>

        <div className="mt-5 flex flex-wrap gap-2 text-xs text-gray-400">
          <span className="rounded-full border border-gray-800 px-3 py-1">
            Orchestration
          </span>

          <span className="rounded-full border border-gray-800 px-3 py-1">
            Eval Systems
          </span>

          <span className="rounded-full border border-gray-800 px-3 py-1">
            Retry Logic
          </span>

          <span className="rounded-full border border-gray-800 px-3 py-1">
            Structured Outputs
          </span>

          <span className="rounded-full border border-gray-800 px-3 py-1">
            Telemetry
          </span>

          <span className="rounded-full border border-gray-800 px-3 py-1">
            AI Reliability
          </span>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mx-auto max-w-5xl px-6 pb-14">
      <div className="mb-6">
  <h2 className="text-2xl font-semibold tracking-tight">
    Featured Projects
  </h2>
</div>

        <ProjectCard
          title="PM Interview Copilot"
          href="/projects/pm-interview-copilot"
          description="AI-powered PM interview preparation workflow using orchestration systems, eval layers, retry logic, structured outputs, and telemetry."
          concepts={[
            "LLM Evals",
            "Orchestration",
            "Retry Logic",
            "Structured Outputs",
            "Telemetry",
            "Workflow Design",
          ]}
        />
      </section>

      {/* Philosophy */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="mb-6">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gray-500">
            Philosophy
          </p>

          <h2 className="text-2xl font-semibold tracking-tight">
            Reliable AI systems require more than prompting.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-800 bg-[#111111] p-5">
            <h3 className="text-base font-semibold">
              Orchestration Over Prompting
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-300">
              Reliable AI products require workflows, retries,
              evaluation systems, and orchestration layers —
              not just single prompts.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-[#111111] p-5">
            <h3 className="text-base font-semibold">
              Evals Drive Reliability
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-300">
              AI quality becomes scalable when prompts are paired
              with systematic evaluation and refinement workflows.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-[#111111] p-5">
            <h3 className="text-base font-semibold">
              Structured Outputs Matter
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-300">
              Structured outputs reduce frontend fragility and
              improve deterministic AI workflow behavior.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-[#111111] p-5">
            <h3 className="text-base font-semibold">
              Observability Is Essential
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-300">
              AI systems require telemetry, retry visibility,
              and operational insight to debug failures effectively.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}