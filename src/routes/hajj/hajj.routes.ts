import { Router } from "express";
import hajjVisaRoutes from "./hajjVisa.routes";
import hajjPackageRoutes from "./hajjPackage.routes";
import hajjPreRegister from "./hajjPreRegister.routes";
import hajjSignificanceRouter from "./hajjSignificance.routes";

const router = Router();

router.use("/visa", hajjVisaRoutes);
router.use("/pre-register", hajjPreRegister);
router.use("/package", hajjPackageRoutes);
router.use("/significance", hajjSignificanceRouter);

export default router;
