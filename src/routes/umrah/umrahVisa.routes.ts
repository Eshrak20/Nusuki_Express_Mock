import { Router } from "express";
import { umrahVisaList } from "../../mocks/umrah/umrahVisa.mock";

const umrahVisaRouter = Router();

umrahVisaRouter.get("/", (req, res) => {
  res.json({
    success: true,
    data: umrahVisaList,
  });
});

export default umrahVisaRouter;