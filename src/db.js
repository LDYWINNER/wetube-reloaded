import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL, {
  //mongoose 6.x 버전 이상이면 해줄 필요 없긴 함
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");
const handleError = (error) => console.log("DB Error", error);
db.on("error", handleError);
db.once("open", handleOpen);
