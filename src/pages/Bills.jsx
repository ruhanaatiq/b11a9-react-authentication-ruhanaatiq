import React, { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import Electricity from '../assets/electricity.png';
import Gas from '../assets/gas.png';
import Water from '../assets/wasa.jpg';
import Internet from '../assets/internet.jpg';
import Telephone from '../assets/telephone.png';

const getBillIcon = (type) => {
  switch (type.toLowerCase()) {
    case 'electricity': return Electricity;
    case 'gas': return Gas;
    case 'water': return Water;
    case 'internet': return Internet;
    case 'telephone': return Telephone;
    default: return Electricity;
  }
};

const Bills = () => {
  const [bills, setBills] = useState([]);
  const [paidBills, setPaidBills] = useState([]);
  const [balance, setBalance] = useState(10000); // Initial balance

  useEffect(() => {
    fetch("/client-data.json")
      .then((res) => res.json())
      .then((data) => setBills(data))
      .catch((err) => console.error("Error loading bills:", err));
  }, []);

  const handlePay = (id) => {
    const bill = bills.find(b => b.id === id);
    if (!bill || paidBills.includes(id)) return;

    if (balance < bill.amount) {
      toast.error("Insufficient balance to pay this bill.");
      return;
    }

    setPaidBills([...paidBills, id]);
    setBalance(prev => prev - bill.amount);
    toast.success(`${bill.bill_type.toUpperCase()} bill of ${bill.amount} BDT paid successfully`);
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">Your Bills</h1>
      <div className="mb-4 text-right text-lg font-bold text-green-600">
        Balance: {balance} BDT
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {bills.map((bill) => (
          <div
            key={bill.id}
            className="card bg-white shadow p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={getBillIcon(bill.bill_type)} alt={bill.bill_type} className="w-12 h-12" />
              <div>
                <p className="font-bold capitalize">{bill.bill_type}</p>
                <p className="text-sm text-gray-600">{bill.organization}</p>
                <p className="text-sm text-gray-500">
                  Due: {new Date(bill["due-date"]).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold">{bill.amount} BDT</p>
              <button
                className={`btn btn-sm mt-2 ${
                  paidBills.includes(bill.id)
                    ? "btn-disabled"
                    : "btn-primary"
                }`}
                onClick={() => handlePay(bill.id)}>
                {paidBills.includes(bill.id) ? "Paid" : "Pay"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bills;
