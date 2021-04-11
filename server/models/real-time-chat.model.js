module.exports = mongoose => {
  var schema = mongoose.Schema(
      {
        read: Boolean,
        messageContent: String,
        userName: String,
        room: String,
        socketId: String,
      },
      {
        timestamps: true,
      }
    );

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const RealTimeChat = mongoose.model('realtimechat', schema);

  return RealTimeChat;
};
