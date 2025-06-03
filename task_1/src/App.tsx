import React from "react";
import PricingCard from "./components/PricingCard";
import Dashboard from "./components/Dashboard";

function App() {
  const pricingPlans = [
    {
      plan: "Standard",
      price: "$100",
      features: [
        "50000 Requests",
        "4 contributors",
        "Up to 3 GB storage space",
      ],
      isFeatured: false,
    },
    {
      plan: "Pro",
      price: "$200",
      features: [
        "100000 Requests",
        "7 contributors",
        "Up to 6 GB storage space",
      ],
      isFeatured: true,
    },
    {
      plan: "Expert",
      price: "$500",
      features: [
        "200000 Requests",
        "11 contributors",
        "Up to 10 GB storage space",
      ],
      isFeatured: false,
    },
  ];

  return (
    // <div className="min-h-screen bg-black py-12 px-4">
    //   <div className="max-w-7xl mx-auto">
    //     <h1 className="text-3xl font-bold text-center text-white mb-12">
    //       Pricing
    //     </h1>
    //     <div className="flex justify-center">
    //       <div className="flex flex-col sm:flex-row gap-6 sm:gap-0">
    //         {pricingPlans.map((plan, index) => (
    //           <PricingCard
    //             key={index}
    //             plan={plan.plan}
    //             price={plan.price}
    //             features={plan.features}
    //             isFeatured={plan.isFeatured}
    //           />
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Dashboard />
  );
}

export default App;
