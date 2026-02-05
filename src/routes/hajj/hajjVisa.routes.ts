import { Router } from "express";
import { hajjVisaList } from "../../mocks/hajj/hajjVisa.mock";

const hajjVisaRouter = Router(); // Renamed for clarity

hajjVisaRouter.get("/", (req, res) => {
  res.json({
    success: true,
    data: hajjVisaList,
  });
});

export default hajjVisaRouter; // Match the variable name here