import * as admin from "firebase-admin";
import { Request, Response } from "firebase-functions";
import * as httpStatus from "http-status-codes";

export const verifyToken = async function(
  request: Request,
  response: Response
) {
  const { token } = request.headers;

  if (!token || token instanceof Array) {
    response
      .status(httpStatus.NETWORK_AUTHENTICATION_REQUIRED)
      .send({ error: "No authorization token provided." });
    response.end();
    return;
  }

  try {
    await admin.auth().verifyIdToken(token);
  } catch (err) {
    response
      .status(httpStatus.UNAUTHORIZED)
      .send({ error: "Token is not verified." });
    response.end();
  }
};
