import { Router } from "express";
import { umrahSignificanceList } from "../../mocks/umrah/umrahSignificance.mock";

const umrahSignificanceRouter = Router(); 

umrahSignificanceRouter.get("/", (req, res) => {
  res.json({
    success: true,
    data: umrahSignificanceList,
  });
});

export default umrahSignificanceRouter; 