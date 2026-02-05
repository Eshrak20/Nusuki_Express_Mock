import { Router } from "express";
import { hajjPreRegisterList } from "../../mocks/hajj/hajjPreRegister.mock";

const   hajjPreRegister = Router(); // Renamed for clarity

hajjPreRegister.get("/", (req, res) => {
  res.json({
    success: true,
    data: hajjPreRegisterList,
  });
});

export default hajjPreRegister; // Match the variable name here