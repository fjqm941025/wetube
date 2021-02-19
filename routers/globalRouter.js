import express from "express";
import {
  getJoin,
  getLogin,
  logout,
  postLogin,
  postJoin,
  githubLogin,
  githubLoginCallback,
  githubCallback,
  postGithubLogin,
} from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import routes from "../routes";
import { onlyPublic } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

globalRouter.get(routes.github, githubLogin);
globalRouter.get(routes.githubCallback, githubCallback, postGithubLogin);

export default globalRouter;
