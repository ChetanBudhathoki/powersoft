const mongoose = require("mongoose");
const { text } = require("express");
const eduSchema = new mongoose.Schema(
  {
    faculty: {
      type: String,
      required: true,
    },

    des: {
      type: String,
      required: true,
    },

    suggestions: {
      type: Array,
      required: true,
    },
    subfaculty:{
        type : Array,
        required : true,
    }
    ,
 collages: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//New Method to hideing private
const edu = mongoose.model("edu", eduSchema);

module.exports = edu;
