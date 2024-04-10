import React from "react";

interface PricingPlan {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  description: string;
  cardBgClass: string;
  buttonClass: string;
  features: string[];
  unavailableFeatures: string[];
}

const PricingTable: React.FC = () => {
  const pricingPlans: PricingPlan[] = [
    {
      name: "Starter Pack",
      monthlyPrice: "15",
      annualPrice: "8",
      description:
        "This plan is ideal for individual users and hobbyists who are looking for essential functionalities to support their projects.",
      cardBgClass: "bg-black/20 backdrop-blur-3xl",
      buttonClass: "text-white bg-white/10 hover:bg-white/5 ",
      features: ["5 mb/PDF", "75 pages/PDF", "10 messages/Day", "Up to 3 PDFs"],
      unavailableFeatures: ["Gpt-3.5-turbo model", "Test mode", "Doc summary"],
    },
    {
      name: "Silver Surfer",
      monthlyPrice: "25",
      annualPrice: "20",
      description:
        "If you're a small business or a startup, this plan is designed to cater to your needs. It offers a balance of essential features.",
      cardBgClass: "bg-black/50 backdrop-blur-3xl",
      buttonClass: "text-black bg-white hover:bg-white/5 hover:text-white ",
      features: [
        "10 mb/PDF",
        "150 pages/PDF",
        "25 messages/Day",
        "Up to 5 PDFs",
        "Gpt-3.5-turbo model",
      ],
      unavailableFeatures: ["Test mode", "Doc summary"],
    },
    {
      name: "Golden Unicorn",
      monthlyPrice: "50",
      annualPrice: "40",
      description:
        "Tailored for medium-sized businesses, this plan offers advanced tools and features to support your growing demands.",
      cardBgClass: "bg-black/20 backdrop-blur-3xl",
      buttonClass: "text-white bg-white/10 hover:bg-white/5 ",
      features: [
        "32 mb/PDF",
        "1500 pages/PDF",
        "1000 messages/Day",
        "Up to 50 PDFs",
        "Gpt-3.5-turbo-16k model",
        "Test mode",
        "Doc summary",
      ],
      unavailableFeatures: [],
    },
  ];

  return (
    <section className="relative  no-scrollbar flex flex-col overflow-hidden overflow-y-auto h-svh items-center justify-center bg-[#4D453E]">
      {/* Background image */}
      <img
        className="absolute w-full h-full lg:w-auto lg:h-auto"
        src="/images/blueBlob.svg"
        alt="Background"
      />
      {/* Pricing plans */}
      <div className="prose text-white prose-sm prose-headings:font-normal prose-headings:text-xl mx-auto relative">
        <div>
          <h1 className="text-white">Animated images on hover</h1>
          <p className="text-balance">
            Hover over the images to see the animation.
          </p>
        </div>
      </div>
      <div className="relative items-center px-8 py-12 mx-auto md:px-12 max-w-7xl">
        {/* Pricing plans */}
        <div className="md:max-w-sm mx-auto">
          <div className="inline-flex w-full border rounded-full mt-6 overflow-hidden border-white/20 p-0.5 z-0">
            {/* Toggle buttons */}
            <button
              className="font-medium rounded-full transition h-12 w-full py-2 block px-8 text-xs bg-black/50 text-white"
              type="button"
            >
              Monthly
            </button>
            <button
              className="font-medium rounded-full transition h-12 w-full py-2 block px-8 text-xs border-white text-white"
              type="button"
            >
              Annual
            </button>
          </div>
        </div>
        {/* Pricing plan cards */}
        <div className="grid grid-cols-1 gap-2 mt-12 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between p-8 shadow-2xl  rounded-3xl ${plan.cardBgClass} backdrop-blur-3xl shadow-gray-900/50`}
            >
              {/* Plan details */}
              <div>
                <div className="flex flex-col justify-between gap-3">
                  <p className="text-xl font-medium tracking-tight text-white">
                    {plan.name}
                  </p>
                  <p className="text-white">
                    <span className="text-2xl tracking-tight">
                      {plan.monthlyPrice}
                    </span>
                    <span className="text-base font-medium">/m</span>
                  </p>
                </div>
                <p className="mt-8 text-xs text-white/80">{plan.description}</p>
                {/* Features */}
                <ul className="flex flex-col order-last mt-8 text-sm text-white gap-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="inline-flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-circle-check"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M0 0h24v24H0z" stroke="none" />
                        <circle cx="12" cy="12" r="9" />
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                  {plan.unavailableFeatures.map((feature, i) => (
                    <li key={i} className="inline-flex items-center gap-2 opacity-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-circle-x"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M0 0h24v24H0z" stroke="none" />
                        <circle cx="12" cy="12" r="9" />
                        <path d="M10 10l4 4m0 -4l-4 4" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Get started button */}
              <div className="flex mt-6">
                <a
                  href="#_"
                  title={plan.name}
                  aria-label="get started"
                  className={`flex items-center justify-center w-full  h-12 px-4 py-2 text-base font-medium transition-all duration-200 rounded-xl ${plan.buttonClass}`}
                >
                  Get started
                </a>
              </div>
            </div>
          ))}
        </div>
      



      </div>
    </section>
  );
};

export default PricingTable;
