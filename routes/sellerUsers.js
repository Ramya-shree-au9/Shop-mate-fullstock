import express from "express"
import {register,users,login,mailregistercheck,forgotpsw,profileedit,userinfo} from "../controllers/sellerUsers/sellers.js"

const router = express.Router()

router.post("/register",register)
router.get("/userdata",users)
router.post("/login",login)
router.post("/emailregistercheck",mailregistercheck)
router.patch("/forgotpsw",forgotpsw)
router.patch("/profile",profileedit)
router.get("/userinfo",userinfo)


export default router