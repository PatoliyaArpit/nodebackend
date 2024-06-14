require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData ={
  "login": "PatoliyaArpit",
  "id": 154015590,
  "node_id": "U_kgDOCS4XZg",
  "avatar_url": "https://avatars.githubusercontent.com/u/154015590?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/PatoliyaArpit",
  "html_url": "https://github.com/PatoliyaArpit",
  "followers_url": "https://api.github.com/users/PatoliyaArpit/followers",
  "following_url": "https://api.github.com/users/PatoliyaArpit/following{/other_user}",
  "gists_url": "https://api.github.com/users/PatoliyaArpit/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/PatoliyaArpit/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/PatoliyaArpit/subscriptions",
  "organizations_url": "https://api.github.com/users/PatoliyaArpit/orgs",
  "repos_url": "https://api.github.com/users/PatoliyaArpit/repos",
  "events_url": "https://api.github.com/users/PatoliyaArpit/events{/privacy}",
  "received_events_url": "https://api.github.com/users/PatoliyaArpit/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Arpit Patoliya",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 12,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-12-16T18:11:06Z",
  "updated_at": "2024-06-05T12:05:01Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('patoliya arpit')
})

app.get('/login',(req,res)=>{
   res.send('<h1>please login at patoliya arpit </h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>jay gurudev</h2>')
})
app.get('/github',(req,res)=>{
  res.json(githubData)

})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})