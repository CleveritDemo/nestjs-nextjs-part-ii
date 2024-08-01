import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Process the purchase here (e.g., save to database, call payment gateway, etc.)

    res.status(200).json({ message: "Purchase successful" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
