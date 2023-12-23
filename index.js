const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  console.log(username);
  // Get or create user on Chat Engine!
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": "8f3374d0-1a2d-4329-992a-d6bf60dd0722" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    console.log(e);
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);
