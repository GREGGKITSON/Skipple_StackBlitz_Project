import { ArrowRight, CheckCircle } from "lucide-react";

type Benefit = { text: string };

export default function SupplierLanding({
  headline = "Grow Your Skip Business",
  subhead = "You’ve got skips. We’ve got customers.",
  cta = "Register free",
  benefits = [
    { text: "More bookings, less downtime" },
    { text: "Automated quotes & invoicing" },
    { text: "Expand your reach without big ad spend" },
  ],
}: {
  headline?: string;
  subhead?: string;
  cta?: string;
  benefits?: Benefit[];
}) {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            {headline}
          </h1>
          <p className="mt-4 text-lg text-gray-600">{subhead}</p>
          <ul className="mt-6 space-y-3 text-gray-800">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-brand" />
                <span>{b.text}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <a
              href="#signup"
              className="inline-flex items-center gap-2 rounded-2xl bg-brand px-6 py-3 text-white font-medium shadow hover:bg-brand-dark"
            >
              {cta} <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="md:pl-8">
          <div className="rounded-3xl border-2 border-dashed border-gray-300 bg-white p-6 shadow-sm">
            <div className="h-8 w-40 rounded bg-gray-200" />
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-24 rounded-xl border border-dashed border-gray-300" />
              ))}
            </div>
            <div className="mt-6 h-40 rounded-2xl border border-dashed border-gray-300" />
          </div>
          <p className="mt-3 text-xs text-gray-500 text-center">
            (Wireframe preview of supplier dashboard)
          </p>
        </div>
      </div>
    </section>
  );
}
