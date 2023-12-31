import express from "express";
import {
  deleteUser,
  getAllUsers,
  getCurrentUser,
  singleUser,
  updatePoints,
  updateUser,
  dashboardUpdate
} from "../controllers/users.js";


const router = express.Router();

router.get("/currentUser/:userID", getCurrentUser);
router.get("/singleUser/:resID", singleUser);
router.get("/getAllUsers", getAllUsers);
router.patch("/updateUser/:userID",  updateUser);
router.put("/updatePoints/:resID", updatePoints);

router.delete("/deleteUser/:userID", deleteUser);
router.patch("/dashboardUpdate/:userID", dashboardUpdate)

export { router as UserRouter };
