const express = require("express");
const mongoose = require("mongoose");
const { Blog, User } = require("./db");
const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { SECRET_KEY, Auth } = require("./auth");
const cors = require("cors");
const ObjectId = require("mongodb").ObjectId;
const dotenv = require('dotenv')
dotenv.config()

async function connectToDatabase() {
  await mongoose.connect(
    process.env.MONGO_CONNECTION
  );
  console.log("Connected to Database");
}
connectToDatabase();
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT;

// AUth Not Required

app.get("/", (req, res) => {
  res.send("Welcome to the Ashish Blog ");
});

app.get("/getallBlogs", async (req, res) => {
  try {
    const response = await Blog.find();
    if (response.length > 0) {
      res.status(200).send({ response });
    } else {
      res.status(200).send("Nothing To Show");
    }
  } catch (e) {
    res.status(500).send("Error Fetching Data");
  }
});

app.post("/signup", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    encoded_password = await bcrypt.hash(password, 5);
    await User.create({
      username: username,
      password: encoded_password,
      email: email,
    });
    res.status(201).send("User Created");
  } catch (e) {
    res
      .status(500)
      .send({ error: "Problem in User Creation", message: e.message });
  }
});

app.post("/signin", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const response = await User.findOne({
      username: username,
    });
    decoded_password = await bcrypt.compare(password, response.password);

    if (decoded_password) {
      const token = jsonwebtoken.sign(
        { id: response._id.toString() },
        SECRET_KEY
      );
      res.status(200).send({ token: token });
    } else {
      res.status(200).send("Invalid Credential");
    }
  } catch (e) {
    res.status(500).send({
      error: "Problem in Logging IN",
      message: e.message,
    });
  }
});

//require login

app.post("/createblog", Auth, async (req, res) => {
  try {
    const user_id = req.id;
    const title = req.body.title;
    const description = req.body.description;
    const body = req.body.body;
    const image = req.body.image;

    await Blog.create({
      title: title,
      description: description,
      body: body,
      image: image,
      user_id: user_id,
    });
    res.status(201).send("Blog Created");
  } catch (e) {
    res.status(500).send({ error: "Error Creating", message: e.message });
  }
});

app.get("/getuserblog", Auth, async (req, res) => {
  const id = req.id;
  console.log(id);
  try {
    const response = await Blog.find({
      user_id: id,
    });
    if (response) {
      res.status(200).send(response);
    } else {
      res.send(200).send("Nothing to Show");
    }
  } catch (e) {
    res.send(500).send({
      error: "Error in Finding Post",
      message: e.message,
    });
  }
});

app.put("/updateblog/:blog_id", Auth, async (req, res) => {
  try {
    const title = req.body.title;
    const description = req.body.description;
    const body = req.body.body;
    const image = req.body.image;
    const id = req.id;
    const blog_id = new ObjectId(req.params.blog_id);

    await Blog.findOneAndUpdate(
      {
        //fin
        _id: blog_id,
        user_id: id,
      },
      {
        title: title,
        description: description,
        body: body,
        image: image,
      }
    );

    res.status(201).send("Blog-Updated");
  } catch (e) {
    res.status(500).send({
      error: "Error Updating Blog",
      message: e.message,
    });
  }
});

app.delete("/deleteblog/:blog_id", Auth, async (req, res) => {
  try {
    const id = req.id;
    const blog_id = new ObjectId(req.params.blog_id);

    await Blog.findOneAndDelete({
      _id: blog_id,
      user_id: id,
    });

    res.send("Blog Deleted");
  } catch (e) {
    res.status(500).send({
      error: "Error In Deleting Blog",
      message: e.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is  not running on port ${port}`);
});
