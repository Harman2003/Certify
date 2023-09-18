const Event = require("../../model/Event");

const AddEvent = async (req, res) => {
  try{
    const event = await Event.create({
      eventname: req.body.name,
    });
    const newEvent = {
      EventName:event.eventname,
      EventId:event._id,
      Certification:event.certificateIds.length,
    }
    res.status(200).send(newEvent);
  }
  catch(err){
    console.log(err);
    res.status(404).send("Error");
  }
};

module.exports = AddEvent;
