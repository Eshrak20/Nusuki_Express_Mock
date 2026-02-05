import { Router } from "express";
import hajjVisaRoutes from "./hajjVisa.routes";
import hajjPackageRoutes from "./hajjPackage.routes";
import hajjPreRegister from "./hajjPreRegister.routes";

const router = Router();

router.use("/visa", hajjVisaRoutes);
router.use("/pre-register", hajjPreRegister);
router.use("/package", hajjPackageRoutes);

export default router;
