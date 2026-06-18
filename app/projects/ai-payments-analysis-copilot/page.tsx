import Navbar from "@/components/Navbar";
import ConceptCard from "@/components/ConceptCard";
import ExpandableSection from "@/components/ExpandableSection";

export default function AIPaymentsAnalysisCopilotPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-10 pb-6">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gray-500">
          AI System Case Study
        </p>

        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
          AI Payments Analysis Copilot
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-300">
          AI-powered payments intelligence system that helps product managers
          and operations teams investigate payment failures, identify root
          causes, monitor reliability trends, and accelerate operational
          decision-making through agentic workflows.
        </p>

        <div className="mt-5 flex flex-wrap gap-2 text-xs text-gray-400">
          <span className="rounded-full border border-gray-800 px-3 py-1">
            Multi-Agent Orchestration
          </span>

          <span className="rounded-full border border-gray-800 px-3 py-1">
            LangGraph
          </span>

          <span className="rounded-full border border-gray-800 px-3 py-1">
            Tool Calling
          </span>

          <span className="rounded-full border border-gray-800 px-3 py-1">
            Human-in-the-Loop
          </span>

          <span className="rounded-full border border-gray-800 px-3 py-1">
            Claude API
          </span>

          <span className="rounded-full border border-gray-800 px-3 py-1">
            Operational AI
          </span>
        </div>

        <div className="mt-5 flex gap-3">
          <a
            href="https://github.com/neeli-kumar-3/ai-payments-reliability-copilot"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-700 bg-[#111111] px-5 py-2.5 text-sm text-gray-200 transition hover:border-gray-500 hover:bg-[#1a1a1a]"
          >
            View GitHub
          </a>

          <a
            href="https://ai-payments-reliability-copilot.vercel.app/"
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
          summary="Investigating payment failures and operational reliability workflows."
          defaultOpen={false}
        >
          <p className="max-w-3xl text-base leading-7 text-gray-300">
            Modern payment systems generate large volumes of operational data
            across multiple failure types including insufficient funds, bank
            connectivity issues, fraud signals, mandate failures, merchant
            errors, and payment processor outages.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-7 text-gray-300">
            Product managers, reliability teams, and payment operations teams
            spend significant effort investigating failures, understanding
            trends, identifying root causes, and determining appropriate
            corrective actions.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-7 text-gray-300">
            While dashboards provide visibility into what happened, they rarely
            explain why failures occurred, what actions should be taken, or
            which issues require immediate human attention.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-7 text-gray-300">
            The goal of this project was to build an AI-powered payments
            analysis system capable of investigating failures, identifying root
            causes, surfacing reliability trends, recommending actions, and
            orchestrating operational workflows through specialized AI agents.
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
                Claude, Anthropic SDK, structured outputs, reasoning workflows,
                AI-powered investigation and recommendation generation
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-[#111111] p-5">
              <h3 className="text-base font-semibold">
                Orchestration & Reliability
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-300">
                LangGraph, multi-agent orchestration, tool calling,
                workflow state management, human approval workflows
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
          summary="Multi-agent investigation workflow with tool calling and human approval."
          defaultOpen={false}
        >
          <p className="mb-5 text-base text-gray-400">
            Multi-agent investigation workflow coordinating classification,
            root cause analysis, decisioning, customer communication,
            and human review.
          </p>

          <div className="rounded-2xl border border-gray-800 bg-[#111111] p-6">
            <div className="space-y-2 text-base text-gray-300">
              <p>Transaction Data</p>

              <p className="text-sm text-gray-600">↓</p>

              <p className="font-medium text-white">
                Orchestrator Agent
              </p>

              <p className="text-sm text-gray-600">↓</p>

              <p>Classification Agent</p>

              <p className="text-sm text-gray-600">↓</p>

              <p>Investigation Agent</p>

              <p className="text-sm text-gray-600">↓</p>

              <p>Decision Agent</p>

              <p className="text-sm text-gray-600">↓</p>

              <p>Communication Agent</p>

              <p className="text-sm text-gray-600">↓</p>

              <p className="font-medium text-white">
                Human Review Agent
              </p>

              <p className="text-sm text-gray-600">↓</p>

              <p>Structured Operational Output</p>
            </div>
          </div>
        </ExpandableSection>
      </div >
      {/* AI Concepts */}
      <div className="mx-auto max-w-5xl px-6">
        <ExpandableSection
          title="Key AI Concepts Demonstrated"
          summary="Core AI systems patterns implemented across the investigation workflow."
          defaultOpen={false}
        >
          <p className="mb-5 text-base text-gray-400">
            Core AI systems patterns implemented across the payments analysis platform.
          </p>

          <div className="grid gap-3 md:grid-cols-2">
            <ConceptCard
              title="Multi-Agent Orchestration"
              description="Designed a network of specialized AI agents collaborating across investigation, decision making, escalation, and communication workflows."
            />

            <ConceptCard
              title="LangGraph Workflows"
              description="Used stateful workflow orchestration to manage agent coordination, routing decisions, retries, and approval paths."
            />

            <ConceptCard
              title="Tool Calling"
              description="Enabled agents to invoke operational tools such as transaction lookup, customer history retrieval, fraud checks, and bank diagnostics."
            />

            <ConceptCard
              title="Human-in-the-Loop"
              description="Introduced approval workflows for fraud investigations, large-value transactions, and low-confidence decisions."
            />

            <ConceptCard
              title="Structured Outputs"
              description="Used structured JSON outputs to support downstream workflows, automation, and operational consistency."
            />

            <ConceptCard
              title="Root Cause Analysis"
              description="Built workflows to classify payment failures and identify the most likely cause using transaction context."
            />

            <ConceptCard
              title="Operational AI Systems"
              description="Applied AI beyond content generation to support operational decision making and reliability workflows."
            />

            <ConceptCard
              title="Agent Collaboration"
              description="Specialized agents exchange context and decisions while maintaining workflow state."
            />

            <ConceptCard
              title="Reliability Intelligence"
              description="Generated insights into payment failure patterns and operational trends."
            />

            <ConceptCard
              title="Stateful Workflow Execution"
              description="Managed investigation progress, approvals, escalations, and agent handoffs through workflow state."
            />
          </div>
        </ExpandableSection>
      </div>
      {/* Product Decisions */}
      <div className="mx-auto max-w-5xl px-6">
        <ExpandableSection
          title="Product Decisions"
          summary="Design tradeoffs behind agent orchestration and operational workflows."
          defaultOpen={false}
        >
          <div className="grid gap-3 md:grid-cols-2">
            <ConceptCard
              title="Why Agents?"
              description="Payment investigations involve multiple decision points that are better handled through specialized agents than a single prompt."
            />

            <ConceptCard
              title="Why Tool Calling?"
              description="Reliable operational decisions require access to transaction and customer data beyond prompt context."
            />

            <ConceptCard
              title="Why Human Approval?"
              description="Fraud reviews, large-value transactions, and low-confidence decisions require human oversight before action."
            />

            <ConceptCard
              title="Why Structured Outputs?"
              description="Structured outputs improve reliability and enable downstream workflow automation."
            />

            <ConceptCard
              title="Why LangGraph?"
              description="State management becomes critical when coordinating multiple agents, tools, and approval steps."
            />

            <ConceptCard
              title="Why Investigation Workflows?"
              description="Operations teams need explanations, root causes, and recommended actions rather than simple failure notifications."
            />
          </div>
        </ExpandableSection>
      </div>
      {/* Agent Workflow Design */}
      <div className="mx-auto max-w-5xl px-6">
        <ExpandableSection
          title="Agent Workflow Design"
          summary="Specialized agents coordinating investigation, decision making, and operational workflows."
          defaultOpen={false}
        >
          <div className="grid gap-3 md:grid-cols-2">
            <ConceptCard
              title="Orchestrator Agent"
              description="Coordinates workflow execution, manages state, routes investigations, and determines the next agent in the workflow."
            />

            <ConceptCard
              title="Classification Agent"
              description="Analyzes transaction signals and classifies failures into categories such as insufficient funds, fraud, bank errors, mandate failures, or merchant issues."
            />

            <ConceptCard
              title="Investigation Agent"
              description="Performs root cause analysis by combining transaction context, operational signals, and historical patterns."
            />

            <ConceptCard
              title="Decision Agent"
              description="Determines recommended actions including retries, customer communication, refunds, escalations, or manual intervention."
            />

            <ConceptCard
              title="Communication Agent"
              description="Generates customer-facing explanations and operational summaries tailored to the identified failure cause."
            />

            <ConceptCard
              title="Human Review Agent"
              description="Introduces approval workflows for high-risk investigations, fraud cases, and low-confidence AI decisions."
            />
          </div>
        </ExpandableSection>
      </div>
      {/* Key Learnings */}
      <div className="mx-auto max-w-5xl px-6">
        <ExpandableSection
          title="Key Learnings"
          summary="Operational and technical insights from building agentic payment investigation workflows."
          defaultOpen={false}
        >
          <div className="grid gap-3 md:grid-cols-2">
            <ConceptCard
              title="Agent Specialization Improves Reliability"
              description="Breaking complex investigations into specialized agents produced more predictable and maintainable workflows than relying on a single general-purpose agent."
            />

            <ConceptCard
              title="Tool Calling Grounds AI Decisions"
              description="Access to transaction history, customer context, and operational signals significantly improved investigation quality and recommendation accuracy."
            />

            <ConceptCard
              title="Human Oversight Remains Critical"
              description="Certain payment decisions require approval workflows because financial risk and customer impact cannot be delegated entirely to AI."
            />

            <ConceptCard
              title="Structured Outputs Enable Automation"
              description="Consistent machine-readable outputs simplified downstream workflow execution, reporting, and operational automation."
            />

            <ConceptCard
              title="Operational Context Improves AI Quality"
              description="Providing transaction, customer, and reliability context dramatically improved root cause analysis and decision quality."
            />

            <ConceptCard
              title="Reliability Operations Are Strong AI Use Cases"
              description="Investigation, triage, escalation, and operational decision support proved to be natural applications for agentic AI systems."
            />
          </div>
        </ExpandableSection>
      </div>
      {/* Screenshots & Demo Visuals */}
      <div className="mx-auto max-w-5xl px-6">
        <ExpandableSection
          title="Screenshots & Demo Visuals"
          summary="Investigation workflows, agent orchestration, and operational intelligence views."
          defaultOpen={false}
        >
          <div className="rounded-2xl border border-gray-800 bg-[#111111] p-8">
            <h3 className="text-base font-semibold text-white">
              Coming Soon
            </h3>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-400">
              This section will showcase investigation workflows, root cause
              analysis views, agent orchestration pipelines, human approval
              workflows, operational dashboards, and reliability intelligence
              visualizations as the system evolves.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-gray-400">
              <li>• Investigation Queue</li>
              <li>• Root Cause Analysis Workspace</li>
              <li>• Multi-Agent Workflow Pipeline</li>
              <li>• Human Approval Flows</li>
              <li>• Reliability Trend Analysis</li>
              <li>• Operational Intelligence Dashboard</li>
            </ul>
          </div>
        </ExpandableSection>
      </div>
    </main >
  );
}