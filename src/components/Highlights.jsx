import React from "react";
import { Link } from "react-router-dom";

const highlights = [
  {
    id: 1,
    title: "How to Save on Electricity Bills",
    description: "Simple tips to reduce your monthly electricity consumption and save money.",
    img: "https://i.ibb.co.com/wNBK82bB/utility.jpg",
    link: "https://energysavingtrust.org.uk/hub/quick-tips-to-save-energy/"
  },
  {
    id: 2,
    title: "Understanding Gas Tariffs",
    description: "Everything you need to know about your gas bill and how it's calculated.",
    img: "https://i.ibb.co.com/yctbmvjm/gas-bill.png",
    link: "https://termina.io/blog/what-are-gas-and-electricity-tariffs"
  },
  {
    id: 3,
    title: "Why You Should Pay Water Bills On Time",
    description: "Timely payment of water bills ensures uninterrupted services. Learn why it matters.",
    img: "https://i.ibb.co.com/CKBB8876/water.jpg",
    link: "https://www.epa.gov/watersense/understanding-your-water-bill"
  },
  {
    id: 4,
    title: "Best Internet Plans for Families",
    description: "Explore budget-friendly internet plans suited for heavy home usage.",
    img: "https://i.ibb.co.com/ZR7HHjSq/net-bill.png",
    link: "https://www.amberit.com.bd/home-internet"
  },
  {
    id: 5,
    title: "Landline Still Useful?",
    description: "Find out if keeping a landline telephone still makes sense in 2025.",
    img: "https://i.ibb.co.com/Kxq7JPhd/landline.jpg",
    link: "https://www.cnet.com/tech/mobile/you-may-still-need-your-landline-in-2025-heres-why/"
  },
  {
    id: 6,
    title: "Budgeting Your Monthly Utility Bills",
    description: "A quick guide to organize your utility expenses smartly.",
    img: "https://i.ibb.co.com/chC6WQ32/bills-payment-lower.jpg",
    link: "https://www.cnet.com/home/energy-and-utilities/how-budget-billing-makes-your-utility-bills-predictable/"
  }
];

const Highlights = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-8">Tips & Highlights</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition-all">
            <img src={item.img} alt={item.title} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              <Link to={item.link} className="text-blue-600 hover:underline font-medium">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
