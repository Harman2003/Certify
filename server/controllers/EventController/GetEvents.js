const Event = require('../../model/Event')
const Organisation = require('../../model/Organisation');

const getEvents = async(req,res)=>{
    // const item = await Organisation.find({_id:req.body.id});
    // let events=[];
    // if(item)
    // events = item.eventIds;
    var list = []
    // for(var id of events){
    //     var event = await Event.find({_id: id});
    //     var eventName = event.eventname;
    //     var eventId = event._id;
    //     var Certification = event.certificateIds.length;
    //     list.push({eventName,eventId,Certification});
    // }

    return res.send(list);
};

module.exports = getEvents;