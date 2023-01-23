import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube", { 
  //mongoose 6.x 버전 이상이면 해줄 필요 없긴 함
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");
const handleError = (error) => console.log("DB Error", error);
db.on("error", handleError); 
db.once("open", handleOpen);