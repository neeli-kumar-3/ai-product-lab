import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  concepts: string[];
  href: string;
};

export default function ProjectCard({
  title,
  description,
  concepts,
  href,
}: ProjectCardProps) {
  return (
    <Link href={href} className="block">
      <div className="cursor-pointer rounded-2xl border border-gray-800 bg-[#111111] p-8 transition hover:border-gray-700 hover:bg-[#151515]">
        <h3 className="text-base font-semibold text-white">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-400">
  {description}
</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {concepts.map((concept) => (
            <span
              key={concept}
              className="rounded-full border border-gray-800 px-2.5 py-1 text-xs text-gray-300"
            >
              {concept}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}