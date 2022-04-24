import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let usersData = [];
let usersTweets = [];

app.post("/sign-up", (req, res) => {
  const {username, avatar} = req.body
  if (
    username === undefined ||
    username === "" ||
    username === null ||
    avatar === undefined ||
    avatar === "" ||
    avatar === null
  ) {
    res.status(400).send("Todos os campos são obrigatórios!");
  } else {
    usersData.push(req.body);
    console.log(usersData);
    res.status(201).send("OK");
  }
});

app.post("/tweets", (req, res) => {
  const {tweet} = req.body
  const {user} = req.headers
  console.log(req.headers.user)
  if (
    user === undefined ||
    user === "" ||
    user === null ||
    tweet === undefined ||
    tweet === "" ||
    tweet === null
  ) {
    res.status(400).send("Todos os campos são obrigatórios!");
  } else {
    console.log(req.body);
    let findUser = "";

    usersData.map((user) => {
      if (user.username === req.headers.user) {
        findUser = user.avatar;
      }
    });

    let newTweet = { ...req.body, avatar: findUser, username: req.headers.user };
    usersTweets.push(newTweet);
    res.status(201).send("OK");
  }
});

app.get("/tweets", (req, res) => {
  const pageNumber = parseInt(req.query.page)
  const pageTweets = []

  if (pageNumber < 1) {
    res.status(400).send("Informe uma página válida!")
  } else {
    for(let i = (pageNumber * 10) - 1 ; i >= (pageNumber * 10) - 10; i--) {
      if(usersTweets[i] !== undefined) {
        pageTweets.push(usersTweets[i])
      }
    }
    res.send(pageTweets)
  }
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
