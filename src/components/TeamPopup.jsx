import React from "react";

function TeamPopup({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-40"></div>
      <div className="bg-gradient-to-b from-transparent to-gray-900 p-6 rounded-lg text-white z-10">
        <h2 className="text-2xl font-semibold mb-4">Meet Our Team:</h2>
        <p className="text-gray-300 mb-4">
          - Harman<br />
          - vishvjeet<br />
          - Pranav<br />
          - Saket<br />
          - Nitin<br />
          - Ramneek<br />
          {/* Add more team members here */}
        </p>
        <h2 className="text-2xl font-semibold mb-4">Why We Built This:</h2>
        <p className="text-gray-300">
          Our mission is to provide a secure and efficient platform for creating and verifying digital certificates, making it easier for individuals and organizations to manage their credentials.
        </p>
        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white hover:underline transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default TeamPopup;