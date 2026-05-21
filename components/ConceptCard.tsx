"use client";

import { useState } from "react";

type ConceptCardProps = {
  title: string;
  description: string;
};

export default function ConceptCard({
  title,
  description,
}: ConceptCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="cursor-pointer rounded-xl border border-gray-800 bg-[#111111] px-4 py-3 transition hover:border-gray-700"
    >
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-300">
          {title}
        </p>

        <div className="text-xs text-gray-500">
          {open ? "−" : "+"}
        </div>
      </div>

      {open && (
        <div className="mt-3 border-t border-gray-800 pt-3 text-sm leading-6 text-gray-400">
          {description}
        </div>
      )}
    </div>
  );
}