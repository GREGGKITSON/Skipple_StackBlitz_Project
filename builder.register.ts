"use client";
import { Builder } from "@builder.io/react";
import SupplierLanding from "./components/sections/SupplierLanding";
import CTA_ready2findbin from "./components/CTA_ready2findbin";
import HowItWorks from "./components/HowItWorks"; // 👈 new import
import AboutPage from "./components/AboutPage";

// Supplier landing section
Builder.registerComponent(SupplierLanding, {
  name: "SupplierLanding",
  inputs: [
    { name: "headline", type: "string" },
    { name: "subhead", type: "string" },
    { name: "cta", type: "string", defaultValue: "Register free" },
    {
      name: "benefits",
      type: "list",
      defaultValue: [{ text: "More bookings, less downtime" }],
      subFields: [{ name: "text", type: "string" }],
    },
  ],
});

// CTA box
Builder.registerComponent(CTA_ready2findbin, {
  name: "CTA_ready2findbin",
  inputs: [
    {
      name: "headline",
      type: "string",
      defaultValue: "Ready to Find Your Skip Bin?",
    },
    {
      name: "buttonText",
      type: "string",
      defaultValue: "BOOK MY SKIP",
    },
    {
      name: "items",
      type: "list",
      defaultValue: [
        { text: "Book online today" },
        { text: "Get a quote in 60 seconds" },
      ],
      subFields: [{ name: "text", type: "string" }],
    },
  ],
});

// How It Works section

Builder.registerComponent(HowItWorks, {
  name: "HowItWorks",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "How It Works",
    },
    {
      name: "steps",
      type: "list",
      defaultValue: [
        { label: "Enter your postcode", icon: "/icons/mapicon.svg" },
        { label: "Choose your skip size", icon: "/icons/skipicon.svg" },
        { label: "Compare quotes", icon: "/icons/dollaricon.svg" },
        { label: "Book online", icon: "/icons/bookicon.svg" },
      ],
      subFields: [
        { name: "label", type: "string" },
        {
          name: "icon",
          type: "file",
          allowedFileTypes: ["svg", "png"],
        },
      ],
    },
    {
      name: "arrow",
      type: "string",
      defaultValue: "➝",
    },
    {
      name: "fontSize",
      type: "number",
      defaultValue: 20,
    },
  ],
});

// About Page section

Builder.registerComponent(AboutPage, {
  name: "AboutPage",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "About Skipple",
    },
    {
      name: "sections",
      type: "list",
      subFields: [
        { name: "heading", type: "string" },
        { name: "content", type: "longText" },
        {
          name: "listItems",
          type: "list",
          subFields: [{ name: "text", type: "string" }],
        },
      ],
      defaultValue: [
        {
          heading: "Skip Hire, Simplified.",
          content:
            "Skipple was born out of a simple frustration in 2025, when founders Gregg and Tanya were building their dream home...\n\nThat’s when the idea for Skipple was born: a smarter, digital way to hire skips.",
        },
        {
          heading: "The Vision",
          content:
            "Skipple is the Airbnb of skip bins. We don’t own skips—we connect the people who need them with the legends who do.\n\nOur mission is to transform skip hire into a fast, transparent, and hassle-free experience...",
        },
        {
          heading: "The Problem We Solve",
          content:
            "The skip hire industry is full of reliable, hardworking suppliers—but most are family-run businesses with limited digital presence...",
          listItems: [
            "Customers want speed, transparency, and convenience.",
            "Suppliers want more business without drowning in admin or marketing costs."
          ],
        },
        {
          heading: "The Skipple Solution",
          content: "For customers:",
          listItems: [
            "Instant quotes, no waiting",
            "Easy online booking",
            "Transparent pricing",
            "Clear bin size guides",
            "Verified local suppliers"
          ],
        },
        {
          heading: "The Skipple Solution (continued)",
          content: "For skip owners:",
          listItems: [
            "More jobs, less downtime",
            "Automated bookings and payments",
            "No upfront costs—just a small margin per job",
            "Tools to streamline operations",
            "Digital visibility without the tech headaches"
          ],
        },
        {
          heading: "Meet the Skip People",
          content:
            "We’re not just building a platform—we’re building a community. Skipple empowers local skip businesses while making waste removal smarter, cleaner, and more human.\n\nBecause skip hire shouldn’t be a headache. It should be simple."
        }
      ],
    },
  ],
});
