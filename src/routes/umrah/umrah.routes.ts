import { Router } from "express";
import umrahVisaRouter from "./umrahVisa.routes";
import umrahPreRegister from "./umrahPreRegister.routes";
const umrahRouter = Router();


umrahRouter.use("/visa", umrahVisaRouter);
umrahRouter.use("/pre-register",umrahPreRegister );

export default umrahRouter;
