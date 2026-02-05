import { Router } from "express";
import { umrahPreRegisterList } from "../../mocks/umrah/umrahPreRegister.mock";

const umrahPreRegister = Router();

umrahPreRegister.get("/", (req, res) => {
  res.json({
    success: true,
    data: umrahPreRegisterList,
  });
});

export default umrahPreRegister;