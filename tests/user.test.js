const User = require("../models/User");
const mongoose = require("mongoose");
// use the new name of the database
const url = "mongodb://localhost:27017/user_test";
beforeAll(async () => {
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
  });
});
afterAll(async () => {
  await mongoose.connection.close();
});
describe("User Schema test", () => {
  // the code below is for insert testing
  it("Signup test", () => {
    const user = {
      first_name: "dipesh",
      last_name: "Lama",
      email: "Dipeslama32@gmail.com",
      password: "1234567890",
      role: "admin",
    };

    return User.create(user).then((user) => {
      expect(user.first_name).toEqual("dipesh");
    });
  });
  it("Login test", () => {
    const user = {
      email: "Dipeslama32@gmail.com",
      password: "1234567890",
    };

    return User.create(user).then((user) => {
      expect(user.first_name).toEqual("dipesh");
    });
  });
});
