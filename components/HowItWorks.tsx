type Step = {
  label: string;
  icon: string; // path to the SVG in /public/icons
};

type HowItWorksProps = {
  title?: string;
  steps?: Step[];
  arrow?: string; // customizable arrow, can be text (➝) or an SVG
};

export default function HowItWorks({
  title = "How It Works",
  steps = [
    { label: "Enter your postcode", icon: "/icons/mapicon.svg" },
    { label: "Choose your skip size", icon: "/icons/skipicon.svg" },
    { label: "Compare quotes", icon: "/icons/dollaricon.svg" },
    { label: "Book online", icon: "/icons/bookicon.svg" },
  ],
  arrow = "➝", // default arrow
}: HowItWorksProps) {
  return (
    <div className="bg-white text-center py-10">
      <h2 className="text-2xl font-bold mb-8 font-[Nunito]">{title}</h2>

      {/* Flex: vertical on mobile, horizontal on desktop */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            {/* Step block */}
            <div className="flex flex-col items-center">
              <div className="bg-[#ff914d] w-20 h-20 rounded-full flex items-center justify-center mb-2">
                <img
                  src={step.icon}
                  alt={step.label}
                  className="w-16 h-16"
                />
              </div>
              <span className="text-[20px] font-bold font-[Nunito]">
                {step.label}
              </span>
            </div>

            {/* Arrow: only show on desktop and not after last step */}
            {index < steps.length - 1 && (
              <span className="hidden sm:block text-2xl">{arrow}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
