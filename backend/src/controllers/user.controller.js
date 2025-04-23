import { User } from "../models/user.model.js";

export const getAllUsers = (req, res, next) => {
  try {
    const currentUserId = req.auth.userId;
    const users = User.find({ clerkId: { $ne: currentUserId } });
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
