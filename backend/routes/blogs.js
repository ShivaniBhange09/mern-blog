const router = require("express").Router();
const blogs = require("../models/blogs");
//POST
router.post("/post", async (req, res) => {
  try {
    const { title, desc } = req.body;
    const newPost = new blogs({ title, desc });
    await newPost
      .save()
      .then(() =>
        res.status(200).json({ message: "Data saved Successfully!" })
      );
  } catch (error) {
    res.status(400).json({ message: "Some error has occured" });
  }
});

//GET
router.get("/getAll", async (req, res) => {
  try {
    const data = await blogs.find().sort({ createdAt: -1 });
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(400).json({ message: "Some error has occured" });
  }
});

//Get Recent Blogs
router.get("/getRecentBlogs", async (req, res) => {
  try {
    const data = await blogs.find().sort({ createdAt: -1 }).limit(3);
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(400).json({ message: "Some error has occured" });
  }
});

//GET Blogs by id
router.get("/getBlog/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await blogs.findById(id);
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(400).json({ message: "Some error has occured" });
  }
});

//UPDATE Blogs by id
router.put("/updateBlog/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, desc } = req.body;
    await blogs.findByIdAndUpdate(id, { title, desc });
    res.status(200).json({ message: "Data updated Successfully" });
  } catch (error) {
    res.status(400).json({ message: "Some error has occured" });
  }
});
module.exports = router;
