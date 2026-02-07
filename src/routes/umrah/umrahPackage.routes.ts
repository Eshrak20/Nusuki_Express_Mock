import { Router } from "express";
import { umrahPackagesList } from "../../mocks/umrah/umrahPackage.mock";

const umrahPackagesRouter = Router(); 

umrahPackagesRouter.get("/", (req, res) => {
  res.json({
    success: true,
    data: umrahPackagesList,
  });
});

export default umrahPackagesRouter; 