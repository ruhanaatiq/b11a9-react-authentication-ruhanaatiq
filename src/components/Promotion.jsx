import React from 'react';

const promotions = [
  {
    id: 1,
    title: "10% Off Internet Bill",
    description: "Pay your monthly internet bill with us and get 10% cashback instantly!",
    provider: "FiberNet Ltd.",
    bg: "bg-blue-100",
  },
  {
    id: 2,
    title: "Free Month for Advance Payment",
    description: "Pay 3 months in advance for your gas service and receive 1 extra month free!",
    provider: "National Gas Co.",
    bg: "bg-green-100",
  },
  {
    id: 3,
    title: "Electricity Saver Plan",
    description: "Get a discount when your monthly usage is below 300 kWh.",
    provider: "City Electric Corp.",
    bg: "bg-yellow-100",
  },
];

const Promotion = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Special Promotions</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {promotions.map((promo) => (
          <div
            key={promo.id}
            className={`rounded-xl p-6 shadow hover:shadow-md transition-all duration-200 ${promo.bg}`}
          >
            <h3 className="text-lg font-semibold mb-2">{promo.title}</h3>
            <p className="text-sm text-gray-700 mb-3">{promo.description}</p>
            <span className="text-sm font-medium text-gray-500">Offered by: {promo.provider}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Promotion;
