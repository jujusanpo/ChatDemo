const express = require("express"); //import express
const cors = require("cors");   //call server from any origin
const axios = require('axios');
const e = require("express");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

//post endpoint for authenticate
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        { username: username, secret: username, first_name: username },
        { headers: { "private-key": "5eb94d0f-1422-44a2-a7c1-32fc2b51ffdc"} }
    );
    return res.status(r.status).json(r.data);//so resp from api call above will decide the status and the data within it here.
  } catch (error) {
    return res.status(error.response.status).json(error.response.data);
  }
});

app.listen(3001);   //run on this port