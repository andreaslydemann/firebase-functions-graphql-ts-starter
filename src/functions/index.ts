import { Request, Response } from "firebase-functions";
import * as httpStatus from "http-status-codes";

const helloWorld = function(request: Request, response: Response) {
  return response.status(httpStatus.OK).send({ success: true });
};

export default helloWorld;
