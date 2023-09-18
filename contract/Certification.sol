// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Certification{
  
  struct Certificate {
        string candidate_name;
        string email;
        string org_name;
        uint16 org_id;
        string event_name;
        uint256 expiration_date;
    }

  mapping (uint16 => address) public organization;
  mapping (bytes32 => Certificate) public certificates;

  function registerOrganization(uint16 org_id) external returns(bool isCreated){
    require(org_id>0 && organization[org_id]==address(0), "Organisation Id is not unique");
    organization[org_id]= msg.sender;
    isCreated=true;
  }

  function createCertificate(string memory candidate_name, string memory email, string memory org_name, uint16 org_id, string memory event_name, uint expiration_date, uint certificate_id) public onlyOrganisation(org_id)  returns(bytes32){
    require(bytes(candidate_name).length !=0 && certificate_id !=0, "Enter appropriate details to create certificate");
    bytes32 hashId = keccak256(abi.encodePacked(certificate_id, org_id));
    Certificate storage _certificate= certificates[hashId];
    _certificate.candidate_name= candidate_name;
    _certificate.email= email;
    _certificate.org_name= org_name;
    _certificate.org_id= org_id;
    _certificate.event_name= event_name;
    _certificate.expiration_date= expiration_date;
    return hashId;
  }

  function validateCertificate(string memory candidate_name, uint16 org_id, uint expiration_date, uint certificate_id) public view returns(bool){

    bytes32 hashId = keccak256(abi.encodePacked(certificate_id, org_id));
    Certificate memory _certificate= certificates[hashId];

    //match certificate data hashes

    string memory _candidate_name= _certificate.candidate_name;
    uint16 _org_id= _certificate.org_id;
    uint _expiration_date= _certificate.expiration_date;
    bytes32 hash_prev = keccak256(abi.encodePacked(_candidate_name, _org_id, _expiration_date));
    bytes32 hash_new = keccak256(abi.encodePacked(candidate_name, org_id, expiration_date));
    return (hash_new==hash_prev);
  }

   modifier onlyOrganisation(uint16 org_id) {
        require(org_id>0 && organization[org_id]==msg.sender, "Not authorised to create this certificate");
        _;
    }
}