import { Request, Response } from "express";

const createCurrentUser = async (req: Request, res: Response) => {
  // 1. Check if Current User Exist
  // 2. Create the User if it doesn't exist
  // 3. return the user object to the calling client
};

export default {
  createCurrentUser,
};
