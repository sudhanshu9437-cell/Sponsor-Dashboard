import React from "react";
function StatCard({tier, setTier, sponsors}){

 const amt = sponsors.reduce((sum, sponsor) => {
    return sum + Number(sponsor.contribution)
  }, 0);

 const formatCurrency = (amount) => {
      return new Intl.NumberFormat('en-IN', {
          style: 'currency',
          currency: 'INR',
          maximumFractionDigits: 0,
      }).format(amount);
  };

    return(
    <>
<div className="flex flex-col md:flex-row md:justify-between md:items-center px-4 py-2 gap-4">
  
  
  <div className="p-3 ">
    <div className="flex items-center space-x-3 ">
      <img
        src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
        alt="Hackathon Logo"
        className="w-10 h-10 mt-1"
      />
      <h1 className="text-2xl md:text-4xl font-bold text-white">HackFest 2026</h1>
    </div>
    <p className="text-gray-400 mt-1 ml-1 font-medium text-sm md:text-lg">
      Sponsor management dashboard
    </p>
  </div>

  
  <div className="hidden md:flex space-x-10 mr-10">
    <button className="text-white hover:text-orange-400 font-medium text-lg cursor-pointer">Home</button>
    <button className="text-white hover:text-orange-400 font-medium text-lg cursor-pointer">Contact</button>
    <button className="text-white hover:text-orange-400 font-medium text-lg cursor-pointer">About</button>
    <button className="text-white hover:text-orange-400 font-medium text-lg cursor-pointer">GitHub</button>
  </div>

  
  <div className="flex space-x-3 md:mr-10">
    <button className="text-white font-medium cursor-pointer bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm md:text-base">
      Log In
    </button>
    <button className="text-white font-medium cursor-pointer bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm md:text-base">
      Sign Up
    </button>
  </div>

  
  <div className="flex md:hidden space-x-6 pb-2">
    <button className="text-white hover:text-orange-400 font-medium text-sm cursor-pointer">Home</button>
    <button className="text-white hover:text-orange-400 font-medium text-sm cursor-pointer">Contact</button>
    <button className="text-white hover:text-orange-400 font-medium text-sm cursor-pointer">About</button>
    <button className="text-white hover:text-orange-400 font-medium text-sm cursor-pointer">GitHub</button>
  </div>
</div>
<div className="flex flex-col justify-center items-center">
  <div className="flex flex-col md:flex-row justify-center items-stretch bg-gray-700 rounded-lg p-4 drop-shadow-2xl mx-4 mb-6 w-full md:w-auto gap-4 md:gap-0">
    
    <div className="bg-gray-800 rounded-lg p-6 md:m-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer w-full md:w-72">
      <div className="text-gray-400 mt-2 font-medium text-base md:text-lg">
        ₹ Total funds secured
      </div>
      <div className="text-2xl md:text-3xl font-medium text-blue-400">
        {formatCurrency(amt)}
      </div>
    </div>

    <div className="bg-gray-800 rounded-lg p-6 md:m-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer w-full md:w-72">
      <div className="text-gray-400 mt-2 font-medium text-base md:text-lg">
        Sponsors shown
      </div>
      <div className="text-2xl md:text-3xl font-medium text-white">
        {sponsors.length}
      </div>
    </div>

    <div className="bg-gray-800 rounded-lg p-6 md:m-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer w-full md:w-72">
      <div className="text-gray-400 mt-2 font-medium text-base md:text-lg">
        Active filter
      </div>
      <div className="text-2xl md:text-3xl font-medium text-white">
        {tier}
      </div>
    </div>

  </div>
</div>

</>
    )
}
export default StatCard;