import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#030712] text-white flex justify-between items-start p-8 h-[25vh]">
      {/* Left Section */}
      <div className="space-y-4"> {/* Adjusted space-y for better spacing */}
        <div className="space-y-16">
          <p>Copyright &copy; 2024 Get Me A Chai | All rights reserved !</p>
          <span className="text-[#6B7280] text-base">Made by Deepesh Chauhan</span>
        </div>
        <nav className="flex gap-4">
          <a href="/about-us" className="hover:underline">
            About Us
          </a>
          <a href="/contact-us" className="hover:underline">
            Contact Us
          </a>
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline">
            Terms & Conditions
          </a>
          <a href="/refund" className="hover:underline">
            Cancellation/Refund Policies
          </a>
        </nav>
      </div>

      {/* Right Section */}
      <div className="space-y-4 text-center">
        <p className="font-bold">Follow Me On</p>
        <div className="flex space-x-4">
          <a href="https://github.com/deepesh2596" target="_blank" rel="noopener noreferrer"
            className="bg-[#F59E0B] hover:bg-[#D97706] text-[#000000] font-semibold py-2 px-4 rounded"
          >
            GitHub
          </a>
          <a href="www.linkedin.com/in/deepesh2596" target="_blank" rel="noopener noreferrer"
            className="bg-[#F59E0B] hover:bg-[#D97706] text-[#000000] font-semibold py-2 px-4 rounded">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
