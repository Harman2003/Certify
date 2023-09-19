import React from "react";
import { useWeb3Modal, Web3Button } from "@web3modal/react";
import { useAccount } from "wagmi";
import { FaEthereum as Eth } from "react-icons/fa6";
import { RiAccountCircleFill as Account } from "react-icons/ri";
const ConnectWallet = () => {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  return (
    <div className="w-full flex justify-center mt-2">
      {isConnected ? (
        <Web3Button />
      ) : (
        
          <button
            onClick={open}
            className="flex w-fit px-4 items-center justify-center border-[1px] border-purple-900/50 rounded-full"
          >
            <Eth size={20} className="text-purple-900" />
            <div className="text-lg">Connect Wallet</div>
          </button>
      )}
    </div>
  );
};

export default ConnectWallet;
