const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var todoSchema = new Schema({
  userid :{
    type: mongoose.Schema.Types.ObjectId,
    ref : "User",
    require: true
  },
  content: {
    type: String,
    require: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  createdDate:{
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model("Todo", todoSchema);