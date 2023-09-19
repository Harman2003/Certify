const Certificate = require('../../model/Certificate');
const Event = require('../../model/Event');

const getCerti = async(req,res)=>{
    var eventid = req.body.eventid;
    var event = await Event.findById({_id: eventid});
    var result = []
    var list = event.certificateIds;
    list.forEach(async(id)=>{
        console.log(id);
        var certi = await Certificate.findById(id);
        if(!certi) return;
        console.log(certi);
        var username = certi.username;
        var expiry = certi.expiry;
        var created_at = certi.createdAt;
        var email = certi.email;
        var id = certi.certificateId;
        result.push({username,expiry,created_at,email,id});
    });
    res.send(result);
    // {certification name , username , useremail, certificate id , expiry date , created_at}
}

module.exports = getCerti;