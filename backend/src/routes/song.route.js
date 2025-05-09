import { Router } from "express";
import { getAllSongs, getRandomSongs } from "../controllers/song.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", requireAdmin, getAllSongs);
router.get("/random/:amount", getRandomSongs);

export default router;
