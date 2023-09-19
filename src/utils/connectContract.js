import {ethers} from "ethers";

export async function connectContract(address, isConnected) {
  console.log(isConnected)
  if (isConnected == false) return;
  const Contract_Address = "0x6F363b077180aB4cbd89973BB5f469276f6B3833";
  const ABI = [
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      name: "certificates",
      outputs: [
        {
          internalType: "string",
          name: "candidate_name",
          type: "string",
        },
        {
          internalType: "string",
          name: "email",
          type: "string",
        },
        {
          internalType: "string",
          name: "org_name",
          type: "string",
        },
        {
          internalType: "uint16",
          name: "org_id",
          type: "uint16",
        },
        {
          internalType: "string",
          name: "event_name",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "expiration_date",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "candidate_name",
          type: "string",
        },
        {
          internalType: "string",
          name: "email",
          type: "string",
        },
        {
          internalType: "string",
          name: "org_name",
          type: "string",
        },
        {
          internalType: "uint16",
          name: "org_id",
          type: "uint16",
        },
        {
          internalType: "string",
          name: "event_name",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "expiration_date",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "certificate_id",
          type: "uint256",
        },
      ],
      name: "createCertificate",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint16",
          name: "",
          type: "uint16",
        },
      ],
      name: "organization",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint16",
          name: "org_id",
          type: "uint16",
        },
      ],
      name: "registerOrganization",
      outputs: [
        {
          internalType: "bool",
          name: "isCreated",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "candidate_name",
          type: "string",
        },
        {
          internalType: "uint16",
          name: "org_id",
          type: "uint16",
        },
        {
          internalType: "uint256",
          name: "expiration_date",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "certificate_id",
          type: "uint256",
        },
      ],
      name: "validateCertificate",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
    // if (window.ethereum == "undefined") return;
    const provider = new ethers.BrowserProvider(window.ethereum);
//   const provider = new ethers.provider.Web3Provider(window.ethereum);
  const signer = provider.getSigner(address);
  const contract = new ethers.Contract(Contract_Address, ABI, signer);

  console.log(contract.address);
}
