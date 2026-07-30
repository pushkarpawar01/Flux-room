import express from "express";
const router = express.Router();
import {
    createRoom,
    validateRoom,
    fetchMessages,
} from "../controllers/roomController.js";
import {
    uploadFile,
    uploadSingle,
} from "../controllers/uploadController.js";
import {
    apiLimiter,
    createRoomLimiter,
} from "../middleware/rateLimiter.js";

// POST /api/rooms — create a new room
router.post("/", createRoomLimiter, createRoom);

// POST /api/rooms/upload — upload a file to Cloudinary
router.post("/upload", apiLimiter, uploadSingle, uploadFile);

// GET /api/rooms/:code — validate a room
router.get("/:code", apiLimiter, validateRoom);

// GET /api/rooms/:code/messages — fetch message history
router.get("/:code/messages", apiLimiter, fetchMessages);

export default router;
