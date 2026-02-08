import { Router } from "express";
import { visaServiceList } from "../../mocks/visa/visaServiceList.mock";
const visaRouterService = Router();

visaRouterService.get("/", (req, res) => {
  res.json({
    success: true,
    data: visaServiceList,
});
});

export default visaRouterService;