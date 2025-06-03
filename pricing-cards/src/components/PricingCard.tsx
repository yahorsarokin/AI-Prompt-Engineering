interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  features,
  isFeatured = false,
}) => {
  const textColor = isFeatured ? "text-white" : "text-slate-600";
  const cardStyles = {
    base: "w-72 p-6 flex flex-col items-center shadow-lg transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-400 focus-within:ring-offset-2 focus-within:ring-offset-black hover:sm:-translate-y-2",
    featured: isFeatured ? "bg-slate-600 sm:-mt-6 sm:-mb-3 py-10" : "bg-white",
  };

  return (
    <div className={`${cardStyles.base} ${cardStyles.featured}`}>
      <h2 className={`text-xl font-bold ${textColor} mb-2`}>{plan}</h2>
      <div className="mb-6">
        <span className={`text-5xl font-bold ${textColor}`}>{price}</span>
      </div>

      <div className="w-full h-px bg-slate-200 mb-3" />

      <ul className="w-full space-y-3 mb-3">
        {features.map((feature, index) => (
          <>
            <li
              key={index}
              className={`flex justify-center items-center font-semibold ${textColor}`}
            >
              {feature}
            </li>
            <div className="w-full h-px bg-slate-200" />
          </>
        ))}
      </ul>

      <button
        className={`w-full py-2 px-4 uppercase font-bold ${textColor} transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-inherit`}
      >
        Subscribe
      </button>
    </div>
  );
};

export default PricingCard;
