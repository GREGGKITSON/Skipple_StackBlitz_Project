type Step = {
  label: string;
  icon: string; // path to the SVG in /public/icons
};

type HowItWorksProps = {
  title?: string;
  steps?: Step[];
};

export default function HowItWorks({
  title = "How It Works",
  steps = [
    { label: "Enter your postcode", icon: "/icons/mapicon.svg" },
    { label: "Choose your skip size", icon: "/icons/skipicon.svg" },
    { label: "Compare quotes", icon: "/icons/dollaricon.svg" },
    { label: "Book online", icon: "/icons/bookicon.svg" },
  ],
}: HowItWorksProps) {
  return (
    <div className="bg-white text-center py-10">
      <h2 className="text-2xl font-bold mb-8">{title}</h2>

      {/* Flex: vertical on mobile, horizontal on desktop */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-[#ff914d] w-16 h-16 rounded-full flex items-center justify-center mb-2">
              <img src={step.icon} alt={step.label} className="w-8 h-8" />
            </div>
            <span className="text-sm font-medium">{step.label}</span>
            {index < steps.length - 1 && (
              <span className="hidden sm:block text-2xl mx-4">➝</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
