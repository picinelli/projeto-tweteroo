import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let usersData = [];
let usersTweets = [];

app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;
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
    res.status(201).send("OK");
  }
});

app.post("/tweets", (req, res) => {
  const { tweet } = req.body;
  const { user } = req.headers;

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
    let findUser = "";

    usersData.map((user) => {
      if (user.username === req.headers.user) {
        findUser = user.avatar;
      }
    });

    let newTweet = {
      ...req.body,
      avatar: findUser,
      username: req.headers.user,
    };
    usersTweets.push(newTweet);
    res.status(201).send("OK");
  }
});

app.get("/tweets", (req, res) => {
  let page = parseInt(req.query.page);
  let min = usersTweets.length - page * (10 + 1);
  let max = usersTweets.length - (page - 1) * (10 + 1);

  if (page) {
    const tweetsPage = usersTweets.filter((e, i) => {
      return i > min && i <= max;
    });
    tweetsPage.reverse();
    res.send(tweetsPage);
  } else {
    res.status(400).send("Informe uma página válida!");
  }
});

app.get("/tweets/:USERNAME", (req, res) => {
  const searchedUser = req.params.USERNAME;
  const searchedUserTweets = [];

  usersTweets.map((userTweet) => {
    if (userTweet.username === searchedUser) {
      searchedUserTweets.push(userTweet);
    }
  });
  res.send(searchedUserTweets);
});

app.listen(5000);
