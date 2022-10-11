const express = require("express");
const cors = require("cors");

const port = 8000;

require("./config/mongoose.config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { resourceRouter } = require("./routes/resource.routes");
app.use(cors());

app.use("/psf/resources", resourceRouter);
// app.use("/psf/users", userRouter)

app.listen(port, () =>
  console.log(`Listening on port ${port} for REQuests to RESpond to.`)
);
