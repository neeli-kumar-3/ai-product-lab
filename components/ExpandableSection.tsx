"use client";

import { useState } from "react";

type ExpandableSectionProps = {
  title: string;
  summary: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

export default function ExpandableSection({
  title,
  summary,
  children,
  defaultOpen = false,
}: ExpandableSectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="border-b border-gray-900 py-5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left"
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              {title}
            </h2>

            <p className="mt-1 text-sm leading-6 text-gray-500">
              {summary}
            </p>
          </div>

          <span className="pt-1 text-sm text-gray-500">
            {open ? "−" : "+"}
          </span>
        </div>
      </button>

      {open && (
        <div className="pt-5">
          {children}
        </div>
      )}
    </section>
  );
}