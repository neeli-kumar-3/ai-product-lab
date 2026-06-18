import Navbar from "@/components/Navbar";
import ConceptCard from "@/components/ConceptCard";
import ExpandableSection from "@/components/ExpandableSection";

export default function PMInterviewCopilotPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

            {/* Hero */}
            <section className="mx-auto max-w-5xl px-6 pt-10 pb-6">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gray-500">
          AI System Case Study
        </p>

        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
          PM Interview Copilot
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-300">
          
  AI-powered PM interview preparation system designed around
  orchestration workflows, eval-driven reliability, retry systems,
  and structured AI outputs.
</p>

<div className="mt-5 flex flex-wrap gap-2 text-xs text-gray-400">
  <span className="rounded-full border border-gray-800 px-3 py-1">
    Claude API
  </span>

  <span className="rounded-full border border-gray-800 px-3 py-1">
    Eval Systems
  </span>

  <span className="rounded-full border border-gray-800 px-3 py-1">
    Workflow Orchestration
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
</div>
<div className="mt-5 flex gap-3">
<a
  href="https://github.com/neeli-kumar-3/pm-interview-copilot"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-lg border border-gray-700 bg-[#111111] px-5 py-2.5 text-sm text-gray-200 transition hover:border-gray-500 hover:bg-[#1a1a1a]"
>
  View GitHub
</a>

<a
  href="https://pm-interview-copilot.vercel.app"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-lg border border-gray-700 bg-[#111111] px-5 py-2.5 text-sm text-gray-200 transition hover:border-gray-500 hover:bg-[#1a1a1a]"
>
  Open App
</a>
</div>
      </section>

      <div className="mx-auto max-w-5xl px-6">
      <ExpandableSection
  title="Problem Statement"
  summary="Challenges with generic PM interview preparation workflows."
  defaultOpen={false}
>
          <p className="max-w-3xl text-base leading-7 text-gray-300">
            PM candidates struggle to tailor interview preparation to
            specific roles and company expectations. Existing preparation
            workflows are generic and fail to map resume strengths,
            competency gaps, and job-description-specific preparation
            guidance.
          </p>
        </ExpandableSection>
      </div>
      {/* Tech Stack */}
      <div className="mx-auto max-w-5xl px-6">
        <ExpandableSection
          title="Tech Stack"
          summary="Frameworks, AI tooling, orchestration components, and development infrastructure."
          defaultOpen={false}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-800 bg-[#111111] p-5">
              <h3 className="text-base font-semibold">
                Frontend
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-300">
                Next.js, React, Tailwind CSS, TypeScript
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-[#111111] p-5">
              <h3 className="text-base font-semibold">
                AI / LLM Layer
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-300">
                Claude, Anthropic SDK, structured prompting workflows
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-[#111111] p-5">
              <h3 className="text-base font-semibold">
                Orchestration & Reliability
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-300">
                Retry logic, eval systems, workflow orchestration,
                structured outputs, telemetry tracking
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-[#111111] p-5">
              <h3 className="text-base font-semibold">
                Developer Tooling
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-300">
                Cursor, GitHub, Vercel, local workflow testing
              </p>
            </div>
          </div>
        </ExpandableSection>
      </div>
            {/* Architecture Section */}
            <div className="mx-auto max-w-5xl px-6">
            <ExpandableSection
  title="System Architecture"
  summary="Multi-stage orchestration workflow with evaluation and retry loops."
  defaultOpen={false}
>
          <p className="mb-5 text-base text-gray-400">
            Orchestrated AI workflow with evaluation and retry loops.
          </p>

          <div className="rounded-2xl border border-gray-800 bg-[#111111] p-6">
  <div className="space-y-2 text-base text-gray-300">
    <p>Resume + Job Description Input</p>

    <p className="text-sm text-gray-600">↓</p>

    <p>Resume/JD Analysis Engine</p>

    <p className="text-sm text-gray-600">↓</p>

    <p>PM Competency Extraction</p>

    <p className="text-sm text-gray-600">↓</p>

    <p>AI Interview Guidance Generation</p>

    <p className="text-sm text-gray-600">↓</p>

    <p className="font-medium text-white">
  LLM + Rule-Based Evaluation Layer
</p>

    <p className="text-sm text-gray-600">↓</p>

    <p>Retry Decision Engine</p>

    <p className="text-sm text-gray-600">↓</p>

    <p className="font-medium text-white">
  Autonomous Refinement Loop
</p>

    <p className="text-sm text-gray-600">↓</p>

    <p>Final Structured Output</p>
  </div>
</div>
        </ExpandableSection>
      </div>
                 {/* AI Concepts */}
      <div className="mx-auto max-w-5xl px-6">
      <ExpandableSection
  title="Key AI Concepts Demonstrated"
  summary="Core AI systems patterns implemented across the workflow."
  defaultOpen={false}
>
          <p className="mb-5 text-base text-gray-400">
            Core AI systems patterns implemented in the workflow architecture.
          </p>

          <div className="grid gap-3 md:grid-cols-2">
            <ConceptCard
              title="LLM-as-a-Judge Evals"
              description="Used Claude-generated evaluation scoring to assess interview guidance quality, relevance, and competency alignment before final output delivery."
            />

            <ConceptCard
              title="Rule-Based Evaluation"
              description="Implemented deterministic validation checks for structure, formatting, and completeness to reduce unreliable AI responses."
            />

            <ConceptCard
              title="Retry Decision Engine"
              description="Built logic that triggered regeneration workflows when evaluation scores failed predefined quality thresholds."
            />

            <ConceptCard
              title="Autonomous Refinement Loops"
              description="Created iterative retry workflows that refined outputs automatically instead of relying on single-pass generation."
            />

            <ConceptCard
              title="Structured AI Outputs"
              description="Used structured JSON-style response formatting to stabilize frontend rendering and reduce markdown inconsistencies."
            />

            <ConceptCard
              title="Prompt/Eval Coupling"
              description="Observed that evaluation logic and prompt design were tightly connected, requiring coordinated iteration across both systems."
            />

            <ConceptCard
              title="Telemetry & Observability"
              description="Tracked retry behavior, evaluation outcomes, and workflow stages to improve debugging and AI system visibility."
            />

            <ConceptCard
              title="Adaptive Prompting"
              description="Adjusted generation instructions dynamically based on evaluation feedback and workflow stage requirements."
            />

            <ConceptCard
              title="AI Workflow Orchestration"
              description="Designed multi-stage AI pipelines coordinating generation, evaluation, retry logic, and final response assembly."
            />

            <ConceptCard
              title="Frontend/Backend Separation"
              description="Separated orchestration logic from UI rendering to keep workflow complexity isolated from presentation layers."
            />
          </div>
        </ExpandableSection>
      </div>
            {/* Product Decisions */}
            <div className="mx-auto max-w-5xl px-6">
            <ExpandableSection
  title="Product Decisions"
  summary="Design tradeoffs behind orchestration and reliability choices."
  defaultOpen={false}
>
          <div className="grid gap-3 md:grid-cols-2">
            <ConceptCard
              title="Why Structured Outputs?"
              description="Used structured response formatting to reduce frontend rendering inconsistencies and stabilize downstream UI behavior."
            />

            <ConceptCard
              title="Why Retry Logic?"
              description="Single-pass generation quality varied significantly, so retry workflows improved consistency while balancing latency and token cost."
            />

            <ConceptCard
              title="Why Evaluation Layers?"
              description="Generation quality alone was insufficient. Evaluation layers created measurable quality thresholds before final response delivery."
            />

            <ConceptCard
              title="Why Telemetry?"
              description="Workflow visibility became important for debugging retries, failed evaluations, and orchestration bottlenecks."
            />

            <ConceptCard
              title="Why Orchestration?"
              description="Complex PM interview guidance required multiple workflow stages instead of relying on a single prompt response."
            />

            <ConceptCard
              title="Why Frontend/Backend Separation?"
              description="Keeping orchestration logic separate from UI rendering reduced frontend complexity and improved maintainability."
            />
          </div>
        </ExpandableSection>
      </div>
            {/* Reliability & Evaluation */}
            <div className="mx-auto max-w-5xl px-6">
            <ExpandableSection
  title="Reliability & Evaluation Layer"
  summary="Evaluation thresholds, retries, telemetry, and quality validation."
  defaultOpen={false}
>
          <div className="grid gap-3 md:grid-cols-2">
            <ConceptCard
              title="Evaluation Scoring"
              description="Generated quality scoring workflows to assess relevance, competency alignment, and response usefulness before final delivery."
            />

            <ConceptCard
              title="Retry Thresholds"
              description="Defined score thresholds that triggered automatic regeneration when output quality failed predefined evaluation criteria."
            />

            <ConceptCard
              title="Failure Detection"
              description="Implemented checks for incomplete outputs, weak competency coverage, and structurally inconsistent responses."
            />

            <ConceptCard
              title="Telemetry Tracking"
              description="Tracked workflow stages, retry frequency, evaluation outcomes, and orchestration behavior for debugging visibility."
            />

            <ConceptCard
              title="Quality Validation"
              description="Combined LLM evaluation with deterministic validation logic to improve output reliability across workflow stages."
            />

            <ConceptCard
              title="Latency vs Quality Tradeoffs"
              description="Observed that additional evaluation and retry stages improved quality while increasing orchestration latency and token usage."
            />
          </div>
        </ExpandableSection>
      </div>
            {/* Key Learnings */}
            <div className="mx-auto max-w-5xl px-6">
            <ExpandableSection
  title="Key Learnings"
  summary="Operational insights discovered while building AI workflows."
  defaultOpen={false}
>
          <div className="grid gap-3 md:grid-cols-2">
            <ConceptCard
              title="Prompts & Evals Are Tightly Coupled"
              description="Improving prompts often required updating evaluation logic because both systems directly influenced overall workflow quality."
            />

            <ConceptCard
              title="Latency Compounds Quickly"
              description="Multi-stage orchestration workflows improved reliability but introduced meaningful latency across retries and evaluation passes."
            />

            <ConceptCard
              title="Structured Outputs Reduce Fragility"
              description="Frontend rendering became significantly more stable after moving away from inconsistent free-form markdown responses."
            />

            <ConceptCard
              title="Observability Becomes Essential"
              description="Workflow debugging became difficult without visibility into retries, scoring behavior, and orchestration stage transitions."
            />

            <ConceptCard
              title="Single-Pass Generation Is Unreliable"
              description="Generation quality varied substantially across runs, reinforcing the need for evaluation and refinement loops."
            />

            <ConceptCard
              title="AI Systems Need Operational Thinking"
              description="Building reliable AI workflows required thinking beyond prompting into orchestration, validation, reliability, and monitoring."
            />
          </div>
        </ExpandableSection>
      </div>
                  {/* Screenshots */}
      <div className="mx-auto max-w-5xl px-6">
        <ExpandableSection
          title="Screenshots & Demo Visuals"
          summary="Workflow stages, evaluation systems, and AI orchestration UI."
          defaultOpen={false}
        >
          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-800 bg-[#111111] p-4">
              <p className="mb-4 text-sm leading-6 text-gray-400">
                Resume and job-description analysis workflow highlighting
                fit summary generation, candidate strengths, and competency
                gap identification.
              </p>

              <img
                src="/screenshots/analysis-reasoning.png"
                alt="Analysis and reasoning layer"
                className="rounded-xl border border-gray-800"
              />
            </div>

            <div className="rounded-2xl border border-gray-800 bg-[#111111] p-4">
              <p className="mb-4 text-sm leading-6 text-gray-400">
                AI-generated PM interview guidance layer producing tailored
                interview questions and preparation workflows.
              </p>

              <img
                src="/screenshots/generation-layer.png"
                alt="Generation layer"
                className="rounded-xl border border-gray-800"
              />
            </div>

            <div className="rounded-2xl border border-gray-800 bg-[#111111] p-4">
              <p className="mb-4 text-sm leading-6 text-gray-400">
                Evaluation and orchestration telemetry layer tracking
                quality scores, retry logic, relevance evaluation, and
                workflow reliability signals.
              </p>

              <img
                src="/screenshots/evaluation-layer.png"
                alt="Evaluation layer"
                className="rounded-xl border border-gray-800"
              />
            </div>
          </div>
        </ExpandableSection>
      </div>
    </main>
  );
}