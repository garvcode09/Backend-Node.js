const mongoose = require("mongoose");

const urlSchema = mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  isPasswordProtected: {
    type: Boolean,
    default: false,
  },
  isOneTime: {
    type: Boolean,
    default: false,
    },
    clicks:{
        type:Number,
        default:0,
    }
});

const urlModel = mongoose.model("urlModel",urlSchema)

module.exports = {urlModel}