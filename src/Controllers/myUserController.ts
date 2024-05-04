import { Request, Response } from "express";
import { User } from "../models/user";

const createCurrentUser = async (req: Request, res: Response) => {
  // 1. Check if Current User Exist
  // 2. Create the User if it doesn't exist
  // 3. return the user object to the calling client

  try {
    const { auth0Id } = req.body;
    const existingUser = await User.findOne({ auth0Id });

    if (existingUser) {
      return res.status(200).send();
    }

    console.log("come");

    const newUser = new User(req.body);
    await newUser.save();

    return res.status(201).json(newUser.toObject());
  } catch (error) {
    console.log("err");
    return res.status(400).send();
  }
};

export default {
  createCurrentUser,
};
