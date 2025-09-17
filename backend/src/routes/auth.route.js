import express from "express";
const router = express.Router();

router.get("/signup", (_, res) => {
  res.send("signup endpoint");
});
router.get("/login", (_, res) => {
  res.send("login endpoint");
});
router.get("/logout", (_, res) => {
  res.send("logout endpoint");
});

export default router;
