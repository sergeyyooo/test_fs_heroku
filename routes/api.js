const express = require("express");

const router = express.Router();

const BlogPost = require("../models/blogPost");

// Routes
router.get("/", (req, res) => {
  const data = [
    { title: "post_1", body: "post 1" },
    { title: "post_2", body: "post 2" },
    { title: "post_3", body: "post 3" },
  ];
  res.json(data);
  // BlogPost.find({  })
  //     .then((data) => {
  //         console.log('Data: ', data);
  //         res.json(data);
  //     })
  //     .catch((error) => {
  //         console.log('error: ', daerrorta);
  //     });
});

// router.post('/save', (req, res) => {
//     const data = req.body;

//     const newBlogPost = new BlogPost(data);

//     newBlogPost.save((error) => {
//         if (error) {
//             res.status(500).json({ msg: 'Sorry, internal server errors' });
//             return;
//         }
//         // BlogPost
//         return res.json({
//             msg: 'Your data has been saved!!!!!!'
//         });
//     });
// });

router.get("/name", (req, res) => {
  const data = {
    username: "peterson",
    age: 5,
  };
  res.json(data);
});

module.exports = router;
