"use client";

import React from "react";

type RawItem =
  | string
  | { text?: string; title?: string; description?: string | null }
  | null
  | undefined;

interface AboutSection {
  heading: string;
  content: string;
  listItems?: RawItem[];
}

interface AboutPageProps {
  title?: string;
  sections?: AboutSection[];
}

function normalizeListItems(items?: RawItem[]) {
  if (!items || !Array.isArray(items)) return [];
  return items
    .map((it) => {
      if (!it) return null;

      // string -> { title, description: "" }
      if (typeof it === "string") {
        return { title: it, description: "" };
      }

      // object with "text" (old schema)
      if (typeof it === "object" && it.text && !it.title) {
        return { title: String(it.text), description: it.description ? String(it.description) : "" };
      }

      // object with "title" (+ optional description)
      if (typeof it === "object" && it.title) {
        return { title: String(it.title), description: it.description ? String(it.description) : "" };
      }

      return null;
    })
    .filter(Boolean) as { title: string; description: string }[];
}

export default function AboutPage({
  title = "About Skipple",
  sections = [
    {
      heading: "Skip Hire, Simplified.",
      content:
        "Skipple was born out of a simple frustration in 2025, when founders Gregg and Tanya were building their dream home. Clearing out the old house should have been easy—but finding a skip turned into days of phone calls and confusing quotes. That’s when the idea for Skipple was born: a smarter, digital way to hire skips.",
    },
    {
      heading: "The Vision",
      content:
        "Skipple is the Airbnb of skip bins. We don’t own skips—we connect the people who need them with the legends who do. Our mission is to transform skip hire into a fast, transparent, and hassle-free experience.",
    },
    {
      heading: "The Problem We Solve",
      content:
        "The skip hire industry is full of reliable, hardworking suppliers—but most are family-run businesses with limited digital presence. Customers now expect instant booking and upfront pricing, but suppliers are often stuck juggling phone calls, admin, and outdated websites.",
      listItems: [
        { title: "Customers", description: "Want speed, transparency, and convenience." },
        { title: "Suppliers", description: "Want more business without drowning in admin." },
      ],
    },
    {
      heading: "The Skipple Solution",
      content: "For customers:",
      listItems: [
        { title: "Instant Quotes", description: "No waiting, upfront pricing." },
        { title: "Easy Online Booking", description: "Fast, simple, digital." },
        { title: "Transparent Pricing", description: "Clear pricing with no hidden fees." },
        { title: "Verified Local Suppliers", description: "Trusted, licensed, and vetted providers." },
      ],
    },
    {
      heading: "The Skipple Solution (continued)",
      content: "For skip owners:",
      listItems: [
        { title: "More Jobs", description: "Increase bookings and reduce downtime." },
        { title: "Automated Bookings", description: "Manage payments and jobs seamlessly." },
        { title: "No Upfront Costs", description: "We only take a small margin per job." },
        { title: "Digital Visibility", description: "Get seen online without tech headaches." },
      ],
    },
    {
      heading: "Meet the Skip People",
      content:
        "We’re not just building a platform—we’re building a community. Skipple empowers local skip businesses while making waste removal smarter, cleaner, and more human. Because skip hire shouldn’t be a headache. It should be simple.",
    },
  ],
}: AboutPageProps) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 font-nunito">
      {/* Page Title */}
      <h1 className="text-3xl font-extrabold text-center mb-12">{title}</h1>

      {sections.map((section, index) => {
        const items = normalizeListItems(section.listItems);

        return (
          <div key={index} className="mb-16">
            {/* Section Heading */}
            <h2 className="text-2xl font-bold text-white bg-black px-6 py-3 rounded text-center tracking-tight">
              {section.heading}
            </h2>

            {/* Orange line */}
            <div className="w-24 h-1 bg-[#ff914d] mx-auto my-6 rounded"></div>

            {/* Section content */}
            <p className="text-lg text-center mb-8 leading-relaxed">{section.content}</p>

            {/* Cards */}
            {items.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {items.map((item, i) => (
                  <div
                    key={i}
                    className="bg-[#fff7f0] border border-[#ff914d] rounded-xl p-6 shadow-sm text-center"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    {item.description ? (
                      <p className="text-base text-gray-700 leading-snug">{item.description}</p>
                    ) : null}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        );
      })}
    </section>
  );
}
