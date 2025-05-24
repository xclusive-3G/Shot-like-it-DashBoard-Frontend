import express from "express"
import { postDetails,getDetails } from "../controller/ControlApi.js"

const route =express.Router()


route.post("/data",postDetails)
route.get("/data",getDetails)

export default route