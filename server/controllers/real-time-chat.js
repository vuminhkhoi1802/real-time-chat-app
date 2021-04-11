const db = require('../models');
const RealTimeChat = db.realTimeChat;

exports.create = (req, res) => {
  console.log(req.body);

  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const realTimeChat = new RealTimeChat({
    read: false,
    messageContent: req.body.messageContent,
    userName: req.body.userName,
    room: req.body.room,
    socketId: req.body.socketId,
  });


  realTimeChat.save(realTimeChat).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "ERROR OCCURRED WHILE CREATING THE CHAT LOG",
    });
  })
};

exports.findAll = (req, res) => {
  const room = req.query.room;
  let condition = room ? {
    room: {
      $regex: new RegExp(room), $options: 'i'
    }
  } : {};

  RealTimeChat.find(condition).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || 'ERRORS OCCURRED WHILE FETCHING DATA',
    })
  })
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'UPDATE DATA CANNOT BE EMPTY!',
    });
  }

  const socketId = req.params.socketId;

  RealTimeChat.findByIdAndUpdate(socketId, req.body, { useFindAndModify: false }).then(data => {
    if (!data) {
      res.status(404).send({
        message: `CANNOT UPDATE CHAT LOG WITH SOCKET ID ${socketId}`,
      });
    } else {
      res.send({
        message: `CHAT LOG WITH SOCKET ID ${socketId} UPDATED SUCCESSFULLY`,
      })
    }
  }).catch(err => {
    res.status(500).send({
      message: 'ERROR UPDATING CHAT LOG WITH ID ' + socketId,
      error: err,
    })
  });
};
