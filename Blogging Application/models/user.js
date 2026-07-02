const mongoose = require("mongoose");
const { createHmac, randomBytes } = require("crypto");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    age: {
      type: Number,
      min: 0,
      max: 150,
    },
    salt: {
      type: String,
      select: false,
    },
    password: {
      type: String,
      select: false,
      required: [true, "Password is required"],
    },
  },
  { timestamps: true },
);

userSchema.pre("save", function () {
  const user = this;
  if (!user.isModified("password")) {
    return;
  }
  const salt = randomBytes(16).toString();
  const hashedPassword = createHmac("sha256", salt)
    .update(user.password)
    .digest("hex");
  this.salt = salt;
  this.password = hashedPassword;
});

userSchema.static("matchPassword", async function (email, password) {
  const user = await this.findOne({ email }).select("+password +salt");

  if (!user) throw new Error("User not Found");

  const hashedPassword = user.password;
  const userProvidedHash = createHmac("sha256", user.salt)
    .update(password)
    .digest("hex");

  if (userProvidedHash !== hashedPassword)
    throw new Error("Incorrect Password");

  return {
    _id: user._id,
    username: user.username,
    email: user.email,
  };
});

const User = mongoose.model("User", userSchema);

module.exports = User;
