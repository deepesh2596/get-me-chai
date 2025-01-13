import React from 'react';

export default function CancellationRefundPolicy() {
    return (
        <div className="bg-gradient-to-b from-[#270D0D] via-[#20101C] to-[#111027] min-h-screen flex flex-col items-center py-12 px-6">
            {/* Header */}
            <h1 className="text-white text-4xl font-bold mb-6 text-center">
                Cancellation & Refund Policy
            </h1>
            <p className="text-gray-300 text-lg text-center max-w-4xl mb-12">
                At Get Me Chai, we aim to provide the best experience for our users.
                This policy outlines the rules for cancellations and refunds.
            </p>

            {/* Cancellation/Refund Policy Content */}
            <div className="bg-gradient-to-r from-[#2D2A4A] via-[#373243] to-[#1C1B29] rounded-lg shadow-md p-8 text-gray-300 max-w-4xl">
                {/* Introduction */}
                <section className="mb-8">
                    <h2 className="text-white text-2xl font-semibold mb-4">
                        1. Cancellation Policy
                    </h2>
                    <p className="text-gray-400">
                        Users can cancel their subscriptions or donations under the following conditions:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 mt-4">
                        <li>
                            Subscription cancellations must be made at least 24 hours before the renewal date.
                        </li>
                        <li>
                            Once a donation has been processed, it cannot be canceled.
                        </li>
                        <li>
                            To cancel a subscription, go to your account settings and follow the cancellation instructions.
                        </li>
                    </ul>
                </section>

                {/* Refund Eligibility */}
                <section className="mb-8">
                    <h2 className="text-white text-2xl font-semibold mb-4">
                        2. Refund Eligibility
                    </h2>
                    <p className="text-gray-400">
                        Refunds are available in the following circumstances:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 mt-4">
                        <li>
                            Double charges or incorrect payments caused by technical errors on our platform.
                        </li>
                        <li>
                            Refund requests must be submitted within 7 days of the transaction date.
                        </li>
                    </ul>
                    <p className="text-gray-400 mt-4">
                        Donations are non-refundable, except in cases of unauthorized payments.
                    </p>
                </section>

                {/* Non-Refundable Situations */}
                <section className="mb-8">
                    <h2 className="text-white text-2xl font-semibold mb-4">
                        3. Non-Refundable Situations
                    </h2>
                    <p className="text-gray-400">
                        Refunds will not be issued under the following conditions:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 mt-4">
                        <li>
                            Change of mind after a successful subscription or donation.
                        </li>
                        <li>
                            Failure to use the services during the subscription period.
                        </li>
                        <li>
                            Violation of the platform's terms and conditions leading to account suspension.
                        </li>
                    </ul>
                </section>

                {/* Refund Process */}
                <section className="mb-8">
                    <h2 className="text-white text-2xl font-semibold mb-4">
                        4. Refund Process
                    </h2>
                    <p className="text-gray-400">
                        To request a refund, follow these steps:
                    </p>
                    <ul className="list-disc list-inside text-gray-400 mt-4">
                        <li>
                            Contact us via email at <span className="text-blue-400">support@getmechai.com</span> with your transaction details.
                        </li>
                        <li>
                            Include the payment receipt and the reason for the refund request.
                        </li>
                        <li>
                            Refunds, if approved, will be processed within 7-10 business days.
                        </li>
                    </ul>
                </section>

                {/* Changes to Policy */}
                <section>
                    <h2 className="text-white text-2xl font-semibold mb-4">
                        5. Changes to This Policy
                    </h2>
                    <p className="text-gray-400">
                        We may update this Cancellation & Refund Policy from time to time.
                        Changes will be posted on this page with the updated date.
                    </p>
                </section>
            </div>
        </div>
    );
}

// either Static metadata
export const metadata = {
    title: 'Refund & Cancellation- Get Me A Chai',
  }