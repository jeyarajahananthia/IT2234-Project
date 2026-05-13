import express from "express";

import { create, deleteBook, fetch, update, searchByBookName} from "../controller/userController.js";

const route = express.Router();

route.get("/getallbooks",fetch);
route.post("/create",create);
route.put("/update/:id",update);
route.delete("/delete/:id",deleteBook);
route.get("/search", searchByBookName);

export default route;