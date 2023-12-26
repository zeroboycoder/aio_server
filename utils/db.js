const mongoose = require("mongoose");

const uri =
  "mongodb+srv://admin:aio_project@cluster0.qiaosvx.mongodb.net/aio_project";

module.exports = mongoose.connect(uri);
