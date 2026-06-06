import React from "react";

function Footer(){
    return(
        <>
        <footer className="bg-black  text-white px-6 py-10 mt-auto">
  
  <h2 className="text-3xl font-bold mx-auto text-orange-400 mb-8 text-center ">
    HackFest
  </h2>

  <div className="flex flex-col justify-around  md:flex-row gap-10 md:gap-20 mb-8">
    
    
    <div>
      <h3 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4">
        Contact Info
      </h3>
      <p className="text-gray-300 text-sm mb-2">📞 +91 7381671818</p>
      <p className="text-gray-300 text-sm">✉️ sudhanshu9437@gmail.com</p>
    </div>

    
    <div>
      <h3 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4">
        Follow Us
      </h3>
      <div className="flex space-x-5 text-2xl">
        <a href="https://github.com/sudhanshu9437-cell" target="_blank" rel="noreferrer"
           className="text-gray-400 hover:text-white transition-colors duration-200">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/sudhanshu-ranjan-8a82b4372" target="_blank" rel="noreferrer"
           className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://x.com/Sudhanshu9437" target="_blank" rel="noreferrer"
           className="text-gray-400 hover:text-white transition-colors duration-200">
          <i className="fa-brands fa-square-x-twitter"></i>
        </a>
        <a href="https://www.instagram.com/kashyappp9" target="_blank" rel="noreferrer"
           className="text-gray-400 hover:text-pink-400 transition-colors duration-200">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>

  
  <div className="border-t border-gray-800 pt-6">
    <p className="text-gray-500 text-xs text-center">
      © 2025 HackFest. This website is a student project and is not affiliated with any Hackathon.
    </p>
  </div>

</footer>
        </>
    )
}

export default Footer;