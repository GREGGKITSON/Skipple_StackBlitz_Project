import { CheckCircle2 } from "lucide-react";

type CTAProps = {
  headline?: string;
  buttonText?: string;
  items?: { text: string }[];
};

export default function CTA_ready2findbin({
  headline = "Ready to Find Your Skip Bin?",
  buttonText = "BOOK MY SKIP",
  items = [
    { text: "Book online today" },
    { text: "Get a quote in 60 seconds" },
  ],
}: CTAProps) {
  return (
    <div className="bg-[#ff914d] p-6 sm:p-10 rounded-2xl text-center">
      <h2 className="text-white font-bold text-xl sm:text-2xl mb-6">
        {headline}
      </h2>

      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-center gap-2 mb-3 last:mb-6"
        >
          <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-[#ff914d] bg-white rounded-full" />
          <span className="text-black text-base sm:text-lg">{item.text}</span>
        </div>
      ))}

      <button className="bg-black text-white font-bold px-6 py-3 rounded-lg hover:bg-neutral-800">
        {buttonText}
      </button>
    </div>
  );
}
