/*
    Routers are responsible to document APIs
*/

const express = require("express");
const app = express();

const {
  create,
  findAll,
  findOne,
  updateOne,
  deleteOne,
} = require("../controllers/comedian-controller");
const {
  create: createShow,
  findAll: findAllShow,
  updateOne: updateOneShow,
  deleteOne: deleteOneShow,
  findOne: findOneShow,
} = require("../controllers/show-controller");

// Middleware
app.use(express.json());

// Endpoints
app.post("/comedians", create);
app.get("/comedians", findAll);
app.get("/comedians/:id", findOne);
app.put("/comedians/:id", updateOne);
app.delete("/comedians/:id", deleteOne);

app.post("/shows", createShow);
app.get("/shows", findAllShow);

app.get("/show/:id", findOneShow);
app.put("/shows/:id", updateOneShow);
app.delete("/shows/:id", deleteOneShow);

app.use(express.static("public")); // ADD THIS & create a folder "public"

// Start server
app.listen(process.env.PORT, () => {
  console.log("Listening to port 3000...");
});
