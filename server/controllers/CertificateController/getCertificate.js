const Certificate = require("../../model/Certificate");
const Event = require("../../model/Event");

const getCerti = async (req, res) => {
  var eventid = req.body.eventid;
  var event = await Event.findById({ _id: eventid });
  var result = [];
  let list = event.certificateIds;
  // for(let Cid of list){
  //     const certi = await Certificate.findById(Cid);
  //     const username = certi.username;
  //     const expiry = certi.expiry;
  //     const created_at = certi.createdAt;
  //     const email = certi.email;
  //     const id = certi.certificateId;
  //     result.push({username,expiry,created_at,email,id});
  // }
  const certis = await Certificate.find({ _id: { $in: list } });
  for(let certi of certis){
        const username = certi.username;
        const expiry = certi.expiry;
        const created_at = certi.createdAt;
        const email = certi.email;
        const id = certi.certificateId;
        result.push({username,expiry,created_at,email,id});
    }
    res.send(result);
  // {certification name , username , useremail, certificate id , expiry date , created_at}
};

module.exports = getCerti;
