import { Router } from "express";
import { getAllSongs, getRandomSongs } from "../controllers/song.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", requireAdmin, getAllSongs);
router.get("/featured/:amount", getRandomSongs);
router.get("/made-for-you/:amount", getRandomSongs);
router.get("/trending/:amount", getRandomSongs);

export default router;
