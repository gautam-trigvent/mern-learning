import Express from "express";

const Routes = Express.Router();

Routes.get("/team", (req, res, next) => {
    res.send("Hello")
})


export default Routes;