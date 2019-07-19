import { Response } from "firebase-functions";

export type callback = (statusCode: number, payload: any) => Response;
export type firestore = FirebaseFirestore.Firestore;
