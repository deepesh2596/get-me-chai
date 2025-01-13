import React from 'react';

export default function PrivacyPolicy() {
    return (
        <div className="bg-gradient-to-b from-[#270D0D] via-[#20101C] to-[#111027] min-h-screen flex flex-col items-center py-12 px-6">
            {/* Header */}
            <h1 className="text-white text-4xl font-bold mb-6 text-center">
                Privacy Policy
            </h1>
            <p className="text-gray-300 text-lg text-center max-w-4xl mb-12">
                Your privacy is important to us. This Privacy Policy explains how we
                collect, use, and protect your information when you use our platform.
            </p>

            {/* Privacy Policy Content */}
            <div className="bg-gradient-to-r from-[#2D2A4A] via-[#373243] to-[#1C1B29] rounded-lg shadow-md p-8 text-gray-300 max-w-4xl">
                {/* Introduction */}
                <section className="mb-8">
                    <h2 className="text-white text-2xl font-semibold mb-4">
                        1. Information We Collect
                    </h2>
                    <p className="text-gray-400 mb-2">
                        We may collect the following types of information:
                    </p>
                    <ul className="list-disc list-inside text-gray-400">
                        <li>Personal details like name and email address.</li>
                        <li>Usage data, such as pages visited and time spent on the platform.</li>
                        <li>Payment information when you subscribe or make a donation.</li>
                    </ul>
                </section>

                {/* How We Use Information */}
                <section className="mb-8">
                    <h2 className="text-white text-2xl font-semibold mb-4">
                        2. How We Use Your Information
                    </h2>
                    <p className="text-gray-400">
                        The information we collect is used to:
                    </p>
                    <ul className="list-disc list-inside text-gray-400">
                        <li>Provide and improve our services.</li>
                        <li>Process transactions securely.</li>
                        <li>Communicate updates, promotions, and important notices.</li>
                    </ul>
                </section>

                {/* Data Sharing */}
                <section className="mb-8">
                    <h2 className="text-white text-2xl font-semibold mb-4">
                        3. Data Sharing
                    </h2>
                    <p className="text-gray-400">
                        We do not share your personal information with third parties, except:
                    </p>
                    <ul className="list-disc list-inside text-gray-400">
                        <li>To comply with legal requirements.</li>
                        <li>When working with trusted partners to provide our services.</li>
                        <li>To protect the rights and safety of our users and platform.</li>
                    </ul>
                </section>

                {/* Your Rights */}
                <section className="mb-8">
                    <h2 className="text-white text-2xl font-semibold mb-4">
                        4. Your Rights
                    </h2>
                    <p className="text-gray-400">
                        You have the right to:
                    </p>
                    <ul className="list-disc list-inside text-gray-400">
                        <li>Access the personal data we hold about you.</li>
                        <li>Request corrections to your data.</li>
                        <li>Delete your data by contacting our support team.</li>
                    </ul>
                </section>

                {/* Changes to This Policy */}
                <section className="mb-8">
                    <h2 className="text-white text-2xl font-semibold mb-4">
                        5. Changes to This Privacy Policy
                    </h2>
                    <p className="text-gray-400">
                        We may update this policy from time to time. Changes will be posted
                        on this page, and the updated policy will include the date of the
                        latest revision.
                    </p>
                </section>

                {/* Contact Information */}
                <section>
                    <h2 className="text-white text-2xl font-semibold mb-4">
                        6. Contact Us
                    </h2>
                    <p className="text-gray-400">
                        If you have any questions about this Privacy Policy or your data,
                        please contact us at:
                    </p>
                    <p className="text-gray-400 mt-2">
                        Email: <span className="text-blue-400">privacy@getmechai.com</span>
                    </p>
                    <p className="text-gray-400">Phone: +1 123-456-7890</p>
                </section>
            </div>
        </div>
    );
}

// either Static metadata
export const metadata = {
    title: 'Privacy Policy- Get Me A Chai',
  }