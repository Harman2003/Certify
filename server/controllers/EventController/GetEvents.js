const Event = require('../../model/Event')
const User = require('../../model/User');

const getEvents = async(req,res)=>{
    const item = await User.findOne({username:req.body.user});
    let events = item.eventIds;
    var list = [];
    for(var id of events){
        var event = await Event.findById(id);
        var EventName = event.eventname;
        var EventId = event._id;
        var Certification = event.certificateIds.length;
        list.push({EventName,EventId,Certification});
    }
    return res.send(list);
};

module.exports = getEvents;