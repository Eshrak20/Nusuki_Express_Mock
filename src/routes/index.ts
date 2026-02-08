import { Router } from "express";
import hajjRoutes from "./hajj/hajj.routes";
import umrahRouter from "./umrah/umrah.routes";
import visaRouter from "./visa/visa.routes";

const router = Router();

router.use("/hajj", hajjRoutes);
router.use("/umrah",umrahRouter );
router.use("/visa",visaRouter );

export default router;
