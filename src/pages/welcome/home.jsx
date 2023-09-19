import React, { useState } from "react";
import { Link } from "react-router-dom";
import TeamPopup from "../../components/TeamPopup";
// import HowItWorksPopup from "./HowItWorks";
import FlashCard from "../../components/FlashCard";

function Homepage() {
    const [showTeamPopup, setShowTeamPopup] = useState(false);
//   const [showHowItWorksPopup, setShowHowItWorksPopup] = useState(false);
  const toggleTeamPopup = () => {
    setShowTeamPopup(!showTeamPopup);
  };

//   const toggleHowItWorksPopup = () => {
//     setShowHowItWorksPopup(!showHowItWorksPopup);
//   };

  return (
    <div className="bg-white min-h-screen overflow-y-scroll font-openSans">
      {/* Red Navbar with Reduced Opacity */}
      <header className="bg-white/25 shadow-xl bg-opacity-80 py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-black text-3xl font-bold">
            Certify
          </Link>
          <div className="space-x-4">
        
            <button
              onClick={toggleTeamPopup}
              className="text-white text-lg hover:underline"
            >
              About Us
            </button>
            <Link
              to="/signup"
              className="px-4 py-2 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition duration-300 sm:px-6 sm:py-3"
            >
              Sign Up
            </Link>
            <Link
              to="/validate"
              className="px-4 py-2 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition duration-300 sm:px-6 sm:py-3"
            >
              Validate
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto mt-16 p-4">
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-4">
            Welcome to CertificateChain
          </h1>
          <p className="text-lg mb-8">
            Create and validate digital certificates on the blockchain.
          </p>
          {/* <img
            src="/certificate-image.png"
            alt="CertificateChain Example"
            className="mx-auto rounded-lg shadow-lg"
            style={{ maxWidth: "100%", height: "auto" }}
          /> */}
        </div>

        {/* User Instructions */}
        <div className="bg-blue-100 rounded-lg p-4 mt-8 text-gray-800">
            <h2 className="text-2xl font-semibold mb-4">How CertificateChain Works:</h2>
            {/* Use the FlashCard component for each step */}
            <FlashCard
              title="Step 1: Organization Registration"
              content="Organizations register using their official email address and wallet address, such as MetaMask. This ensures secure and authorized access."
            />
            <FlashCard
              title="Step 2: Certificate Creation"
              content="To issue a new certificate, the organization provides essential details, including the recipient's name, the reason for issuance, issue date, time, and expiry date. This data is sent to a smart contract."
            />
            <FlashCard
              title="Step 3: Certificate Hashing"
              content="The smart contract creates a unique hash by combining the organization's ID and the certificate's ID. This hash is stored in a map, linked to the hash of the certificate data."
            />
            <FlashCard
              title="Step 4: Certificate Validation"
              content="Anyone can validate a certificate by providing the customer ID. The application fetches the corresponding data from a centralized server. If the data matches the stored hash in the smart contract, the certificate is valid."
            />
            <FlashCard
              title="Step 5: Certificate Storage"
              content="Users can sign up and add certificate IDs. If a matching certificate ID is found, it can be downloaded. Certificates are stored securely in the user's database."
            />
             </div>

        
        <div className="bg-blue-100 rounded-lg p-4 mt-8 text-gray-800">
          <h2 className="text-2xl font-semibold mb-4">How to Use CertificateChain:</h2>
          <ol className="list-decimal pl-6">
            {/* Step 1 */}
            <li className="mb-4">
              <p className="text-lg">Step 1: Sign Up</p>
              <p className="text-gray-600 mt-2">
                Click the <Link to="/signup" className="text-blue-500 hover:underline transition duration-300">Sign Up</Link> button in the navigation bar to create an account.
              </p>
            </li>

            {/* Step 2 */}
            <li className="mb-4">
              <p className="text-lg">Step 2: Validate Certificate</p>
              <p className="text-gray-600 mt-2">
                To validate a certificate, click the <Link to="/validate" className="text-blue-500 hover:underline transition duration-300">Validate</Link> button in the navigation bar.
              </p>
            </li>

            {/* Step 3 */}
            <li className="mb-4">
              <p className="text-lg">Step 3: Explore Features</p>
              <p className="text-gray-600 mt-2">
                Explore the various features of CertificateChain and start creating and validating digital certificates with ease.
              </p>
            </li>
          </ol>
        </div>

      <div className="mt-8 text-center">
     
        {showTeamPopup && <TeamPopup onClose={toggleTeamPopup} />}
        
      </div>
      </main>
    </div>
  );
}

export default Homepage;