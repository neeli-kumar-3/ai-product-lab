import MetricCard from "@/components/MetricCard";
import InvestigationQueue from "@/components/InvestigationQueue";
import InvestigationDetails from "@/components/InvestigationDetails";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-8 py-10">

        {/* Header */}

        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-sm text-zinc-500 mb-3 tracking-wide uppercase">
              AI Operations Copilot
            </p>

            <h1 className="text-5xl font-semibold tracking-tight mb-4">
              AI Payments Reliability Copilot
            </h1>

            <p className="text-zinc-400 max-w-3xl leading-7">
              Investigate failed payment transactions using AI-powered
              orchestration workflows, operational reasoning, and
              human-in-the-loop reliability systems.
            </p>
          </div>

          <div className="border border-zinc-800 bg-zinc-900 rounded-2xl px-5 py-4">
            <p className="text-xs text-zinc-500 mb-1">
              SYSTEM STATUS
            </p>

            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />

              <p className="text-sm text-zinc-300">
                Operational
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

  <MetricCard
    title="Failed Transactions"
    value="1,284"
    subtitle="+12% anomaly spike"
  />

  <MetricCard
    title="Retry Recovery Rate"
    value="68%"
    subtitle="AI-guided retries"
  />

  <MetricCard
    title="Human Escalations"
    value="42"
    subtitle="Awaiting review"
  />

</div>

        {/* Main Workflow Area */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left Panel */}

          <div className="lg:col-span-2 border border-zinc-800 bg-zinc-900 rounded-2xl p-8">

            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  Reliability Workflow Engine
                </h3>

                <p className="text-zinc-400">
                  Upload transaction data to begin AI investigation workflows.
                </p>
              </div>

              <div className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">
                LangGraph Ready
              </div>
            </div>

            <div className="border-2 border-dashed border-zinc-700 rounded-2xl p-16 text-center">
            <p className="text-xl mb-3">
                Upload Payments CSV
              </p>

              <p className="text-zinc-500">
                AI orchestration workflow will begin automatically
              </p>
            </div>

            <div className="mt-6">
  <InvestigationQueue />
</div>

          </div>

          {/* Right Panel */}

          <div className="border border-zinc-800 bg-zinc-900 rounded-2xl p-8">

          <div className="space-y-6">

<InvestigationDetails />

<div className="border border-zinc-800 bg-zinc-900 rounded-2xl p-8">

  <h3 className="text-xl font-semibold mb-6">
    Workflow Pipeline
  </h3>

  <div className="space-y-4">
    {[
      "Failure Classification",
      "Root Cause Analysis",
      "Tool Invocation",
      "Retry Decision Engine",
      "Human Approval",
      "Customer Communication",
    ].map((step, index) => (
      <div
        key={step}
        className="flex items-center gap-4"
      >
        <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-sm text-zinc-400">
          {index + 1}
        </div>

        <p className="text-zinc-300">
          {step}
        </p>
      </div>
    ))}
  </div>

</div>

</div>

          </div>

        </div>
      </div>
    </main>
  );
}