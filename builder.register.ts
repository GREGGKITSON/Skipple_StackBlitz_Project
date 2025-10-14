"use client";
import { Builder } from "@builder.io/react";
import SupplierLanding from "./components/sections/SupplierLanding";
import CTA_ready2findbin from "./components/CTA_ready2findbin";
import HowItWorks from "./components/HowItWorks";
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
    { name: "arrow", type: "string", defaultValue: "➝" },
    { name: "fontSize", type: "number", defaultValue: 20 },
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
          subFields: [
            { name: "title", type: "string" },
            { name: "description", type: "string" },
          ],
        },
      ],
      defaultValue: [
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
            { title: "Transparent Pricing", description: "Clear pricing, no hidden fees." },
            { title: "Verified Suppliers", description: "Trusted, licensed, vetted providers." },
          ],
        },
        {
          heading: "The Skipple Solution (continued)",
          content: "For skip owners:",
          listItems: [
            {
              title: "More Jobs",
              description: "Increase bookings and reduce downtime.",
            },
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
    },
  ],
});
