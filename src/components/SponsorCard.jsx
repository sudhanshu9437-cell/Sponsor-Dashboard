import React from "react";

function SponsorCard({ name, branch, contribution, tier }) {
  const tierStyles = {
    Platinum: {
      badge: "bg-purple-100 text-purple-800",
      initials: "bg-purple-200 text-purple-800",
    },
    Gold: {
      badge: "bg-yellow-100 text-yellow-800",
      initials: "bg-yellow-200 text-yellow-800",
    },
    Silver: {
      badge: "bg-gray-200 text-gray-700",
      initials: "bg-gray-300 text-gray-700",
    },
    'In-Kind': {
      badge: "bg-green-100 text-green-800",
      initials: "bg-green-200 text-green-800",
    },
  };


  const formatCurrency = (amount) => {
      return new Intl.NumberFormat('en-IN', {
          style: 'currency',
          currency: 'INR',
          maximumFractionDigits: 0,
      }).format(amount);
  };
  
  const style = tierStyles[tier] || tierStyles['In-Kind'];

  return (
    <div className="bg-[#1e1e1e] rounded-2xl p-4 w-full">

      
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-medium text-sm ${style.initials}`}>
          {name.charAt(0)}
        </div>
        <span className={`text-sm px-3 py-1 rounded-full font-medium capitalize ${style.badge}`}>
          {tier}
        </span>
      </div>

     
      <p className="text-white font-semibold text-base">{name}</p>
      <p className="text-gray-400 text-sm mt-1 flex items-center gap-1">
        <span>🏷</span> {branch}
      </p>

      
      <hr className="border-gray-700 my-3" />

      
      <p className="text-gray-400 text-xs mb-1">Contribution</p>
      <p className="text-white text-xl font-semibold">
        {contribution === 0 ? "In-kind" : formatCurrency(contribution)}
      </p>

    </div>
  );
}

export default SponsorCard;



