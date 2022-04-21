import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let usersData = [];
let usersTweets = [];

app.post("/sign-up", (req, res) => {
  usersData.push(req.body);
  res.send("Ok");
});

app.post("/tweets", (req, res) => {
  console.log(req.body);
  // const findUser = usersData.find((user) => {
  //   req.body.username === user.username;
  // });
  let findUser = ""

  usersData.map((user) => {
    if(user.username === req.body.username) {
      findUser = user.avatar
    }
  })

  let newTweet = {...req.body, avatar: findUser}

  usersTweets.push(newTweet);
  res.send("Ok");
});

app.get("/tweets", (req, res) => {
  const lastTweets = usersTweets.slice(-10)
  console.log(lastTweets)
  res.send(lastTweets)
})

app.listen(5000);
