import { NextApiRequest, NextApiResponse } from "next";
const test = (request: NextApiRequest, response: NextApiResponse) => {
  response.status(200).json({
    test: "1234",
  });
};

export default test;
