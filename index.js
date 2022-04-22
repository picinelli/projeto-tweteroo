import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let usersData = [];
let usersTweets = [];

app.post("/sign-up", (req, res) => {
  if (
    req.body.username === undefined ||
    req.body.username === "" ||
    req.body.username === null ||
    req.body.avatar === undefined ||
    req.body.avatar === "" ||
    req.body.avatar === null
  ) {
    res.status(400).send("Todos os campos são obrigatórios!");
  } else {
    usersData.push(req.body);
    res.status(201).send("OK");
  }
});

app.post("/tweets", (req, res) => {
  if (
    req.body.username === undefined ||
    req.body.username === "" ||
    req.body.username === null ||
    req.body.tweet === undefined ||
    req.body.tweet === "" ||
    req.body.tweet === null
  ) {
    res.status(400).send("Todos os campos são obrigatórios!");
  } else {
    console.log(req.body);
    let findUser = "";

    usersData.map((user) => {
      if (user.username === req.body.username) {
        findUser = user.avatar;
      }
    });

    let newTweet = { ...req.body, avatar: findUser };
    usersTweets.push(newTweet);
    res.status(201).send("OK");
  }
});

app.get("/tweets", (req, res) => {
  const lastTweets = usersTweets.slice(-10);
  console.log(lastTweets);

  res.send(lastTweets);
});

app.get("/tweets/:USERNAME", (req, res) => {
  const searchedUser = req.params.USERNAME;
  const searchedUserTweets = []

  usersTweets.map((userTweet) => {
    if(userTweet.username === searchedUser) {
      searchedUserTweets.push(userTweet);
    }
  })
  res.send(searchedUserTweets);
});

app.listen(5000);
