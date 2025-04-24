import { Song } from "../models/song.model.js";

export const getAllSongs = async (req, res, nex) => {
  try {
    const songs = await Song.find().sort({ createdAt: -1 });
    res.status(200).json(songs);
  } catch (error) {
    next(error);
  }
};

export const getRandomSongs = async (req, res, next) => {
  try {
    const amount = parseInt(req.params.amount, 10);

    if (isNaN(amount) || amount <= 0) {
      return res.status(400).json({ message: "Invalid amount parameter" });
    }

    const songs = await Song.aggregate([
      { $sample: { size: amount } },
      {
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          imageUrl: 1,
          duration: 1,
        },
      },
    ]);

    res.status(200).json(songs);
  } catch (error) {
    next(error);
  }
};
