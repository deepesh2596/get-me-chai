import React from 'react';

export default function ContactUs() {
    return (
        <div className="bg-gradient-to-b from-[#270D0D] via-[#20101C] to-[#111027] min-h-screen flex flex-col items-center py-12 px-4">
            {/* Page Header */}
            <h1 className="text-white text-4xl font-bold mb-8 text-center">
                Contact Us
            </h1>
            <p className="text-gray-300 text-lg text-center max-w-2xl mb-12">
                Got questions, feedback, or just want to say hi? We'd love to hear from you!
                Fill out the form below or use the contact details to reach us.
            </p>

            {/* Contact Section */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-4xl">
                {/* Contact Form */}
                <div className="bg-[#1A1A1A] w-full md:w-1/2 p-6 rounded-lg shadow-md">
                    <form className="flex flex-col gap-4">
                        <label className="text-gray-400 text-sm">Your Name</label>
                        <input
                            type="text"
                            className="p-3 rounded-md bg-[#2B2B2B] text-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name"
                        />

                        <label className="text-gray-400 text-sm">Your Email</label>
                        <input
                            type="email"
                            className="p-3 rounded-md bg-[#2B2B2B] text-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />

                        <label className="text-gray-400 text-sm">Your Message</label>
                        <textarea
                            rows="5"
                            className="p-3 rounded-md bg-[#2B2B2B] text-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Type your message here"
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-[#3B82F6] hover:bg-[#2563EB] text-[#FFFFFF] font-semibold py-2 px-4 rounded"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Details */}
                <div className="w-full md:w-1/2 text-gray-300 text-sm">
                    <div className="flex flex-col gap-6">
                        <div>
                            <h2 className="text-white text-lg font-semibold mb-2">Email</h2>
                            <p className="text-gray-400">support@getmechai.com</p>
                        </div>
                        <div>
                            <h2 className="text-white text-lg font-semibold mb-2">Phone</h2>
                            <p className="text-gray-400">+1 123-456-7890</p>
                        </div>
                        <div>
                            <h2 className="text-white text-lg font-semibold mb-2">Address</h2>
                            <p className="text-gray-400">
                                123 Chai Lane, Masala City, Spice Country
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// either Static metadata
export const metadata = {
    title: 'Contact us- Get Me A Chai',
  }