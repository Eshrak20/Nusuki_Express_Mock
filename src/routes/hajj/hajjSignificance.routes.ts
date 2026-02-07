import { Router } from "express";
import { hajjSignificanceList } from "../../mocks/hajj/hajjSignificance.mock";

const hajjSignificanceRouter = Router(); 

hajjSignificanceRouter.get("/", (req, res) => {
  res.json({
    success: true,
    data: hajjSignificanceList,
  });
});

export default hajjSignificanceRouter; 