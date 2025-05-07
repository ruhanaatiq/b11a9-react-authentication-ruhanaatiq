import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Electricity from "../assets/electricity.png";
import Gas from "../assets/gas.png";
import Water from "../assets/wasa.jpg";
import Internet from "../assets/internet.jpg";
import Telephone from "../assets/telephone.png";

const iconMap = {
  electricity: Electricity,
  gas: Gas,
  water: Water,
  internet: Internet,
  telephone: Telephone,
};

const BillDetails = () => {
  const { id } = useParams();
  const [bill, setBill] = useState(null);
  const { balance, setBalance } = useContext(UserContext);
  const [paid, setPaid] = useState(false);

  useEffect(() => {
    fetch("/client-data.json")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((b) => b.id === parseInt(id));
        setBill(selected);
      })
      .catch((err) => console.error("Error loading bill:", err));
  }, [id]);

  const handlePay = () => {
    if (!bill || paid || balance < bill.amount) return;
    setBalance((prev) => prev - bill.amount);
    setPaid(true);
  };

  if (!bill) return <p className="text-center mt-10">Loading bill...</p>;

  const billIcon = iconMap[bill.bill_type.toLowerCase()];

  return (
    <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Column */}
      <div className="relative">
        <img
          src={bill.icon}
          alt={bill.organization}
          className="w-full h-64 object-contain border rounded-lg"
        />
        <img
          src={billIcon}
          alt={bill.bill_type}
          className="w-16 h-16 absolute bottom-4 right-4 border bg-white p-1 rounded-full"
        />
      </div>

      {/* Right Column */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">{bill.organization}</h2>
        <p className="text-lg capitalize">Type: {bill.bill_type}</p>
        <p className="text-lg">Amount: {bill.amount} BDT</p>
        <p className="text-gray-600">
  Due Date: {new Date(bill["due-date"]).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })}
</p>
        <button
          className={`btn ${paid ? "btn-disabled" : "btn-success"} mt-4`}
          onClick={handlePay}>
          {paid ? "Paid" : "Pay Bill"}
        </button>

        {paid && <p className="text-green-600 font-medium">Bill has been paid!</p>}
        {!paid && balance < bill.amount && (
          <p className="text-red-500">Insufficient balance.</p>
        )}
      </div>
    </div>
  );
};

export default BillDetails;
