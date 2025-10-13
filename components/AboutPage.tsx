"use client";

import React from "react";

interface AboutSection {
  heading: string;
  content: string;
  listItems?: { title: string; description: string }[];
}

interface AboutPageProps {
  title?: string;
  sections?: AboutSection[];
}

export default function AboutPage({
  title = "About Skipple", // ✅ default sample title
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
        {
          title: "Customers",
          description: "Want speed, transparency, and convenience.",
        },
        {
          title: "Suppliers",
          description: "Want more business without drowning in admin.",
        },
      ],
    },
    {
      heading: "The Skipple Solution",
      content: "For customers:",
      listItems: [
        { title: "Instant Quotes", description: "No waiting, upfront pricing." },
        { title: "Easy Online Booking", description: "Fast, simple, digital." },
        {
          title: "Transparent Pricing",
          description: "Clear pricing with no hidden fees.",
        },
        {
          title: "Verified Local Suppliers",
          description: "Trusted, licensed, and vetted providers.",
        },
      ],
    },
    {
      heading: "The Skipple Solution (continued)",
      content: "For skip owners:",
      listItems: [
        { title: "More Jobs", description: "Increase bookings and reduce downtime." },
        {
          title: "Automated Bookings",
          description: "Manage payments and jobs seamlessly.",
        },
        {
          title: "No Upfront Costs",
          description: "We only take a small margin per job.",
        },
        {
          title: "Digital Visibility",
          description: "Get seen online without tech headaches.",
        },
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
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold text-center mb-10">{title}</h1>

      {sections.map((section, index) => (
        <div key={index} className="mb-12">
          {/* Section Heading with dark background */}
          <h2 className="text-2xl font-bold text-white bg-neutral-800 px-6 py-3 rounded text-center">
            {section.heading}
          </h2>

          {/* Orange separator line */}
          <div className="w-16 h-1 bg-orange-400 mx-auto my-6 rounded"></div>

          {/* Content */}
          <p className="text-lg text-center mb-6">{section.content}</p>

          {/* Cards (instead of bullet points) */}
          {section.listItems && (
            <div className="grid md:grid-cols-2 gap-6">
              {section.listItems.map((item, i) => (
                <div
                  key={i}
                  className="bg-orange-100 rounded-lg p-6 shadow-sm text-center"
                >
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
