import { serviceAccount } from "./config/service_account";
import { https } from "firebase-functions";
import gqlServer from "./graphql/server";
import { credential, ServiceAccount, initializeApp } from "firebase-admin";

const _serviceAccount = serviceAccount as ServiceAccount;

initializeApp({
  credential: credential.cert(_serviceAccount),
  databaseURL: `https://${_serviceAccount.projectId}.firebaseio.com`
});

const api = https.onRequest(gqlServer());

export { api };
