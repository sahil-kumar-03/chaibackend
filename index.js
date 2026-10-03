require('dotenv').config()
const express = require('express');
const app = express()

const port = 4000

const githubData = {
  login: "sahil-kumar-03",
  id: 229048629,
  node_id: "U_kgDODacBNQ",
  avatar_url: "https://avatars.githubusercontent.com/u/229048629?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/sahil-kumar-03",
  html_url: "https://github.com/sahil-kumar-03",
  followers_url: "https://api.github.com/users/sahil-kumar-03/followers",
  following_url:
    "https://api.github.com/users/sahil-kumar-03/following{/other_user}",
  gists_url: "https://api.github.com/users/sahil-kumar-03/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/sahil-kumar-03/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/sahil-kumar-03/subscriptions",
  organizations_url: "https://api.github.com/users/sahil-kumar-03/orgs",
  repos_url: "https://api.github.com/users/sahil-kumar-03/repos",
  events_url: "https://api.github.com/users/sahil-kumar-03/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/sahil-kumar-03/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 1,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2025-08-28T02:59:35Z",
  updated_at: "2026-10-03T06:36:54Z",
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Sahildotcom')
})

app.get('/login', (req,res) => {
  res.send('<h1>please login at chai aur code')
})

app.get('/youtube', (req, res) => {
  res.send("<h2>Chai or code")
})

app.get('/github', (req, res) => {
  res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})