import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
  roomCode: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 6,
    maxlength: 6,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// TTL index: auto-delete room documents 24 hours after createdAt
RoomSchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 });

export default mongoose.model("Room", RoomSchema);
