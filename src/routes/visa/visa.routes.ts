import { Router } from "express";
import visaRouterHome from "./visaRouterPackages.routes";
import visaRouterPackages from "./visaRouterPackages.routes";
import visaRouterService from "./visaRouterService.routes";

const visaRouter = Router();


visaRouter.use("/tour-packages", visaRouterPackages);
visaRouter.use("/services", visaRouterService);

export default visaRouter;
