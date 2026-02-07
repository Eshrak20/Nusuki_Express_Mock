import { Router } from "express";
import { hajjPackagesList } from "../../mocks/hajj/hajjPackage.mock";

const hajjPackageRouter = Router();

hajjPackageRouter.get("/", (req, res) => {
  res.json({
    success: true,
    data: hajjPackagesList,
  });
});

export default hajjPackageRouter;