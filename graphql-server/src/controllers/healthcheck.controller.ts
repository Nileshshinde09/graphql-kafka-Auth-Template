import { ApiResponse, asyncRestApiHandler } from "../lib";
import type { Request, Response } from "express";

const healthcheck = asyncRestApiHandler(async (req: Request, res: Response) => {
  return res
    .status(200)
    .json(new ApiResponse.RestApiResponse(200, "OK", "Health check passed"));
});

export { healthcheck };
