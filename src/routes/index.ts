import { Router } from "express";
import hajjRoutes from "./hajj/hajj.routes";
import umrahRouter from "./umrah/umrah.routes";

const router = Router();

router.use("/hajj", hajjRoutes);
router.use("/umrah",umrahRouter );

export default router;
