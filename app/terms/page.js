import React from 'react';

export default function TermsAndConditions() {
    return (
        <div className="bg-gradient-to-b from-[#270D0D] via-[#20101C] to-[#111027] min-h-screen flex flex-col items-center py-12 px-6">
            {/* Header */}
            <h1 className="text-white text-4xl font-bold mb-6 text-center">
                Terms and Conditions
            </h1>
            <p className="text-gray-300 text-lg text-center max-w-4xl mb-12">
                These Terms and Conditions outline the rules and regulations for using
                the Get Me Chai platform. By accessing and using our website, you agree
                to comply with these terms.
            </p>

            {/* Terms and Conditions Content */}
            <div className="bg-gradient-to-r from-[#2D2A4A] via-[#373243] to-[#1C1B29] rounded-lg shadow-md p-8 text-gray-300 max-w-4xl">
                {/* Introduction */}
                <section className="mb-8">
                    <h2 className="text-white text-2xl font-semibold mb-4">
                        1. Acceptance of Terms
                    </h2>
                    <p className="text-gray-400">
                        By using our website, you acknowledge that you have read, understood,
                        and agree to these Terms and Conditions. If you do not agree with
                        any part of these terms, you must not use the platform.
                    </p>
                </section>

                {/* User Obligations */}
                <section className="mb-8">
                    <h2 className="text-white text-2xl font-semibold mb-4">
                        2. User Obligations
                    </h2>
                    <p className="text-gray-400">
                        As a user, you agree to:
                    </p>
                    <ul className="list-disc list-inside text-gray-400">
                        <li>Provide accurate and up-to-date information during registration.</li>
                        <li>Use the platform responsibly and in compliance with all applicable laws.</li>
                        <li>Refrain from engaging in prohibited activities, such as unauthorized access or fraudulent use of the platform.</li>
                    </ul>
                </section>

                {/* Payment Terms */}
                <section className="mb-8">
                    <h2 className="text-white text-2xl font-semibold mb-4">
                        3. Payment Terms
                    </h2>
                    <p className="text-gray-400">
                        All payments made through the platform are final and non-refundable,
                        except as required by law. Users are responsible for any applicable
                        taxes associated with their transactions.
                    </p>
                </section>

                {/* Intellectual Property */}
                <section className="mb-8">
                    <h2 className="text-white text-2xl font-semibold mb-4">
                        4. Intellectual Property
                    </h2>
                    <p className="text-gray-400">
                        All content, designs, logos, and intellectual property displayed on
                        the platform are owned by Get Me Chai and are protected by copyright
                        and trademark laws. Users may not use or reproduce these materials
                        without explicit permission.
                    </p>
                </section>

                {/* Limitation of Liability */}
                <section className="mb-8">
                    <h2 className="text-white text-2xl font-semibold mb-4">
                        5. Limitation of Liability
                    </h2>
                    <p className="text-gray-400">
                        Get Me Chai will not be held liable for any damages, losses, or
                        disruptions resulting from the use or inability to use our platform.
                        This includes direct, indirect, incidental, or consequential damages.
                    </p>
                </section>

                {/* Changes to Terms */}
                <section className="mb-8">
                    <h2 className="text-white text-2xl font-semibold mb-4">
                        6. Changes to These Terms
                    </h2>
                    <p className="text-gray-400">
                        We may update these Terms and Conditions periodically. Users are
                        encouraged to review this page regularly to stay informed about any
                        changes.
                    </p>
                </section>

                {/* Contact Information */}
                <section>
                    <h2 className="text-white text-2xl font-semibold mb-4">
                        7. Contact Us
                    </h2>
                    <p className="text-gray-400">
                        If you have any questions or concerns about these Terms and
                        Conditions, please contact us at:
                    </p>
                    <p className="text-gray-400 mt-2">
                        Email: <span className="text-blue-400">terms@getmechai.com</span>
                    </p>
                    <p className="text-gray-400">Phone: +1 123-456-7890</p>
                </section>
            </div>
        </div>
    );
}

// either Static metadata
export const metadata = {
    title: 'Terms & Condition- Get Me A Chai',
  }
