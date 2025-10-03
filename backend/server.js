import express from "express";
const port = process.env.PORT || 5000;
import connectDb from "./config/dbConnect.js";
import errorHandler from "./middlewares/errorHandler.middleware.js";
import goals from "./routes/goal.route.js";
import users from "./routes/user.route.js";

connectDb();

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use("/api/goals", goals);
app.use("/api/users", users);

app.use(errorHandler);
app.listen(port, () => {
  console.log(`server is running on PORT ${port}`);
});
