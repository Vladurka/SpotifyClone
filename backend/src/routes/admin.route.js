import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Admin route with get works");
});

export default router;
