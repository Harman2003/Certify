import React, { useState } from "react";
import { Link } from "react-router-dom";
import TeamPopup from "../../components/TeamPopup";
// import HowItWorksPopup from "./HowItWorks";
import FlashCard from "../../components/FlashCard";
import welcome1 from "../../../public/images/welcome1.png";
import copyrightSign from "../../../public/images/copyright-sign.svg";
import Fade from "react-reveal/Fade";
import frame from "../../../public/images/frame.svg";

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
          <Link to="/" className="text-black text-3xl font-bold max-sm:pl-5">
            Certify
          </Link>
          <div className="space-x-4">
            <button
              onClick={toggleTeamPopup}
              className="text-black text-lg hover:underline"
            >
              About Us
            </button>
            <Link
              to="/signup"
              className="transition ease-in-out delay-100 duration-300 px-4 py-2 rounded-full hover:-translate-y-1 hover:scale-110 bg-sky-400 text-white hover:bg-blue-500 sm:px-6 sm:py-3"
            >
              Sign Up
            </Link>
            <Link
              to="/validate"
              className="transition ease-in-out delay-100 duration-300 px-4 py-2 rounded-full hover:-translate-y-1 hover:scale-110 bg-sky-400 text-white hover:bg-blue-500 sm:px-6 sm:py-3"
            >
              Validate
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className=" mx-auto p-4 w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">

        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-26 pl-20 max-sm:py-42 max-sm:pl-10">
          <h1 className="mb-4 text-7xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
            <span className="xl:whitespace-nowrap relative z-10 pr-10">
              Welcome to
            </span>
            <span className="text-sky-500 inline-block mt-3">
              CertificateChain
            </span>
          </h1>
          <p className="text-lg mb-36 text-slate-500 font-monserrate">
            Create and validate digital certificates on the blockchain.
          </p>
          {/* <img
            src="/certificate-image.png"
            alt="CertificateChain Example"
            className="mx-auto rounded-lg shadow-lg"
            style={{ maxWidth: "100%", height: "auto" }}
          /> */}
        </div>

        <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-20 max-sm:pt-0 overflow-hidden">
          <img src={frame} className="translate-x-72 -translate-y-24" />
          <img
            src={welcome1}
            alt="welcomeImg"
            width={480}
            height={500}
            className="-translate-x-[22rem]  -translate-y-20"
          />
        </div>
      </main>
      {/* User Instructions */}
      <div className="font-NunitoSans p-4 mt-2 text-gray-800 mx-28">
        <h2 className="text-3xl font-semibold mb-12 text-center">
          How <span className="text-sky-500">CertificateChain</span> Works ?
        </h2>
        {/* Use the FlashCard component for each step */}
        <Fade bottom distance="10%">
        <FlashCard
          title="Step 1: "
          titleh="Organization Registration"
          content="Organizations register using their official email address and wallet address, such as MetaMask. This ensures secure and authorized access."
        />
        <FlashCard
          title="Step 2: "
          titleh="Certificate Creation"
          content="To issue a new certificate, the organization provides essential details, including the recipient's name, the reason for issuance, issue date, time, and expiry date. This data is sent to a smart contract."
        />
        <FlashCard
          title="Step 3: "
          titleh="Certificate Hashing"
          content="The smart contract creates a unique hash by combining the organization's ID and the certificate's ID. This hash is stored in a map, linked to the hash of the certificate data."
        />
        <FlashCard
          title="Step 4: "
          titleh="Certificate Validation"
          content="Anyone can validate a certificate by providing the customer ID. The application fetches the corresponding data from a centralized server. If the data matches the stored hash in the smart contract, the certificate is valid."
        />
        <FlashCard
          title="Step 5: "
          titleh="Certificate Storage"
          content="Users can sign up and add certificate IDs. If a matching certificate ID is found, it can be downloaded. Certificates are stored securely in the user's database."
        />
        </Fade>
      </div>

      <div className="font-NunitoSans rounded-lg shadow-2xl p-4 mt-28 text-gray-800 mx-28">
        <h2 className="text-3xl font-semibold mb-4">
          How to <span className="text-sky-500">Use</span> CertificateChain ?
        </h2>
        <ol className="list-decimal pl-6">
          {/* Step 1 */}
          <li className="font-palanquin mb-4">
            <p className="text-lg">Step 1: Sign Up</p>
            <p className="text-gray-600 mt-2">
              Click the{" "}
              <Link
                to="/signup"
                className="text-sky-500 hover:underline transition duration-300"
              >
                Sign Up
              </Link>{" "}
              button in the navigation bar to create an account.
            </p>
          </li>

          {/* Step 2 */}
          <li className="font-palanquin mb-4">
            <p className="text-lg">Step 2: Validate Certificate</p>
            <p className="text-gray-600 mt-2">
              To validate a certificate, click the{" "}
              <Link
                to="/validate"
                className="text-sky-500 hover:underline transition duration-300"
              >
                Validate
              </Link>{" "}
              button in the navigation bar.
            </p>
          </li>

          {/* Step 3 */}
          <li className="font-palanquin mb-4">
            <p className="text-lg">Step 3: Explore Features</p>
            <p className="text-gray-600 mt-2">
              Explore the various features of CertificateChain and start
              creating and validating digital certificates with ease.
            </p>
          </li>
        </ol>
      </div>

      <div className="mt-8 text-center">
        {showTeamPopup && <TeamPopup onClose={toggleTeamPopup} />}
      </div>

      <footer className="bg-sky-500 h-44">
        <div className="mx-12 flex justify-between text-white mt-32 max-sm:flex-col max-sm:items-center">
          <div className="text-white mt-28 flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
            <img
              src={copyrightSign}
              alt="copy right sign"
              width={20}
              height={20}
              className="rounded-full m-0"
            />
            <p>Copyright. All rights reserved.</p>
          </div>
          <p className="text-white mt-28 font-montserrat cursor-pointer">
            Terms & Conditions
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
