import { Router } from "express";
import { visaTourPackageList } from "../../mocks/visa/visaTourPackageList.mock";
const visaRouterPackages = Router();

visaRouterPackages.get("/", (req, res) => {
  res.json({
    success: true,
    data: visaTourPackageList,
});
});

export default visaRouterPackages;