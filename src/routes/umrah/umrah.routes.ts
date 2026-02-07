import { Router } from "express";
import umrahVisaRouter from "./umrahVisa.routes";
import umrahSignificanceRouter from "./umrahSignificance.routes";
import umrahPackagesRouter from "./umrahPackage.routes";
const umrahRouter = Router();


umrahRouter.use("/visa", umrahVisaRouter);
umrahRouter.use("/significance", umrahSignificanceRouter);
umrahRouter.use("/package", umrahPackagesRouter);

export default umrahRouter;
