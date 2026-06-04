import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* About */}
<section className="mx-auto max-w-5xl px-6 pt-12 pb-8">
  <h2 className="text-2xl font-semibold tracking-tight">
    About
  </h2>

  <p className="mt-4 max-w-3xl text-base leading-7 text-gray-400">
  This portfolio combines AI initiatives from my professional experience with hands-on AI product development and experimentation.
  </p>

  <ul className="mt-4 space-y-2 text-gray-400">
    <li>
      • Enterprise AI initiatives delivered across customer and product teams
    </li>
    <li>
      • Personal AI prototypes exploring agentic workflows, copilots,
      reliability systems, evaluations, and AI-assisted decision making
    </li>
  </ul>

  <p className="mt-4 max-w-3xl text-base leading-7 text-gray-400">
  The goal is to showcase real-world applications of AI, the concepts behind them, and the tools and workflows used to build them.
  </p>
</section>

{/* Enterprise AI Experience */}

<section className="mx-auto max-w-5xl px-6 pb-8">
  <div className="mb-6">
    <h2 className="text-2xl font-semibold tracking-tight">
      Professional AI Experience
    </h2>
    <p className="mt-2 text-sm text-gray-500">
    Selected examples only. Details and prototypes are intentionally limited due to customer confidentiality, privacy, and proprietary considerations.
</p>
  </div>

  <div className="space-y-4">

<details className="rounded-xl border border-gray-800 bg-[#111111] p-5">
<summary className="cursor-pointer text-base font-semibold text-white">
    UiPath (2024–2026)
  </summary>

  <div className="mt-5 space-y-5 text-sm text-gray-300">

    <div>
    <div className="pl-4">
      <p className="font-medium text-white">
        • Dynamic API Connector Generation - Autopilot
      </p>
      <p className="mt-1 ml-2 text-gray-400">
        Built AI agent to create and configure enterprise connectors (API integrations) on the fly, reducing integration effort across business systems.
      </p>
    </div>
    </div>

    <div>
    <div className="pl-4">
      <p className="font-medium text-white">
        • Automatic Sales Lead Assignment
      </p>
      <p className="mt-1 ml-2 text-gray-400">
        Designed an agentic workflow to automatically route incoming sales leads to the most appropriate seller based on territory, workload, and business rules.
      </p>
    </div>
    </div>

    <div>
    <div className="pl-4">
      <p className="font-medium text-white">
        • AI-Powered Payroll Automation
      </p>
      <p className="mt-1 ml-2 text-gray-400">
        Built an agentic workflow for a multi-location restaurant operator to automate payroll processing across fragmented HR systems.
      </p>
    </div>
    </div>

    <div>
    <div className="pl-4">
      <p className="font-medium text-white">
        • Data Fabric as AI Context Layer
      </p>
      <p className="mt-1 ml-2 text-gray-400">
        Designed unified business entities by connecting systems such as Workday, Bamboo HR, Salesforce, and other enterprise applications.
      </p>
    </div>
    </div>

    <div>
    <div className="pl-4">
      <p className="font-medium text-white">
        • AI-Assisted Business Analysis
      </p>
      <p className="mt-1 ml-2 text-gray-400">
        Leveraged AI agents and Data Fabric context to accelerate operational analysis and business reviews.
      </p>
    </div>
    </div>

  </div>
  <div className="mt-6 border-t border-gray-800 pt-4 text-xs text-gray-500">
  Technologies: UiPath Maestro, Agent Builder, RPA, API Connectors, Data Fabric, OpenAI, Claude
</div>
</details>

<details className="rounded-xl border border-gray-800 bg-[#111111] p-5">
<summary className="cursor-pointer text-base font-semibold text-white">
    Amazon Pay (2023–2024)
  </summary>

  <div className="mt-5 text-sm text-gray-300">
  <div className="pl-4">
    <p className="font-medium text-white">
      • AI-Assisted Product Development
    </p>
    <p className="mt-1 ml-2 text-gray-400">
      Leveraged approved AI capabilities to improve BRDs, product write-ups, requirement clarity, and stakeholder communication.
    </p>
  </div>
  </div>
</details>

<details className="rounded-xl border border-gray-800 bg-[#111111] p-5">
<summary className="cursor-pointer text-base font-semibold text-white">

    Voice AI Startup / Co-Founder (2021–2022)
  </summary>

  <div className="mt-5 text-sm text-gray-300">
  <div className="pl-4">
    <p className="font-medium text-white">
      • AI-Powered Patient Helpline
    </p>
    <p className="mt-1 ml-2 text-gray-400">
      Built an AI-powered voice solution using Google Dialogflow and telephony integrations to automate patient helplines before the current LLM wave.
    </p>
  </div>
  </div>
</details>


  </div>
</section>

      {/* Featured Projects */}
      <section className="mx-auto max-w-5xl px-6 pb-14">
      <div className="mb-6">
  <h2 className="text-2xl font-semibold tracking-tight">
    AI Product Lab
  </h2>
</div>
<div className="space-y-4">
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
        <ProjectCard
  title="AI Payments Reliability Copilot (In Progress)"
  href="/"
  description="Currently building. Agentic investigation workflow for payment failures, incident triage, root-cause analysis, and reliability operations."
  concepts={[
    "Agentic Workflows",
    "Root Cause Analysis",
    "Human-in-the-Loop",
    "Reliability",
  ]}
       />
</div>
      </section>

      <footer className="mx-auto max-w-5xl px-6 py-10 text-xs text-gray-500">
  <div className="border-t border-gray-800 pt-6">
    <p>
      Built with Next.js, Cursor, Claude Code, and OpenAI APIs.
    </p>
<div className="mt-2 flex gap-4">
  <a
    href="https://www.linkedin.com/in/neelikumar3"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-gray-300"
  >
    LinkedIn
  </a>

  <a
    href="https://github.com/neeli-kumar-3"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-gray-300"
  >
    GitHub
  </a>
</div>

  </div>
</footer>

    </main>
  );
}