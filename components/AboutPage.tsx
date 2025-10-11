"use client";

interface AboutSection {
  heading: string;
  content: string;
  listItems?: string[];
}

interface AboutPageProps {
  title: string;
  sections: AboutSection[];
}

export default function AboutPage({ title, sections }: AboutPageProps) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 font-[Nunito,sans-serif] text-center">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-black mb-8">{title}</h1>

      {/* Sections */}
      <div className="space-y-16 text-left">
        {sections.map((section, i) => (
          <div key={i}>
            {/* Section Heading */}
            <h2 className="text-2xl font-bold text-[#ff914d] mb-4 text-center">
              {section.heading}
            </h2>

            {/* Section Content */}
            <p className="max-w-3xl mx-auto text-lg leading-relaxed text-[#111] whitespace-pre-line text-center">
              {section.content}
            </p>

            {/* Optional list */}
            {section.listItems && (
              <ul className="max-w-3xl mx-auto mt-4 space-y-2 text-lg text-[#111] list-disc list-inside">
                {section.listItems.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            )}

            {/* Divider */}
            {i !== sections.length - 1 && (
              <div className="my-10 h-[3px] bg-[#ff914d] w-4/5 mx-auto rounded"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
