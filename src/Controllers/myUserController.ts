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

    const newUser = new User(req.body);
    await newUser.save();

    return res.status(201).json(newUser.toObject());
  } catch (error) {
    console.log("err");
    return res.status(400).send();
  }
};

const updateCurrentUser = async (req: Request, res: Response) => {
  try {
    const { name, addressLine1, country, city } = req.body;
    const user = await User.findById(req.body.userId);

    if (!user) {
      return res.sendStatus(404).json({ message: "User Not Found" });
    }

    user.name = name;
    user.addressLine1 = addressLine1;
    user.city = city;
    user.country = country;

    res.send(user);
  } catch (error) {
    console.log("error", error);
    res.sendStatus(500).json({ message: "Error Updating User" });
  }
};

export default {
  createCurrentUser,
  updateCurrentUser,
};
