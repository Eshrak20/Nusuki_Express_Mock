import { Router } from "express";
import { hajjPackages } from "../../mocks/hajj/hajjPackage.mock";

const hajjPackageRouter = Router();

hajjPackageRouter.get("/", (req, res) => {
  res.json({
    success: true,
    data: hajjPackages,
  });
});

export default hajjPackageRouter;