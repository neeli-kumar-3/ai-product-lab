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
    <Link href={href}>
      <div className="cursor-pointer rounded-2xl border border-gray-800 bg-[#111111] p-8 transition hover:border-gray-700 hover:bg-[#151515]">
        <h3 className="text-2xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-gray-300">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {concepts.map((concept) => (
            <span
              key={concept}
              className="rounded-full border border-gray-700 px-3 py-1 text-sm text-gray-300"
            >
              {concept}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}