import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("<h1>Hello World</h1>");
})

app.get("/contact",(req,res)=>{
    res.send("<h1>Contact Page</h1>");
})

app.get("/twitter",(req,res)=>{
    res.send("<h1>Twitter Page</h1>");
})

app.get("/github",(req,res)=>{
    res.json({
        "login": "SakarSrivastava",
        "id": 138224981,
        "node_id": "U_kgDOCD0lVQ",
        "avatar_url": "https://avatars.githubusercontent.com/u/138224981?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/SakarSrivastava",
        "html_url": "https://github.com/SakarSrivastava",
        "followers_url": "https://api.github.com/users/SakarSrivastava/followers",
        "following_url": "https://api.github.com/users/SakarSrivastava/following{/other_user}",
        "gists_url": "https://api.github.com/users/SakarSrivastava/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/SakarSrivastava/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/SakarSrivastava/subscriptions",
        "organizations_url": "https://api.github.com/users/SakarSrivastava/orgs",
        "repos_url": "https://api.github.com/users/SakarSrivastava/repos",
        "events_url": "https://api.github.com/users/SakarSrivastava/events{/privacy}",
        "received_events_url": "https://api.github.com/users/SakarSrivastava/received_events",
        "type": "User",
        "site_admin": false,
        "name": null,
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 5,
        "public_gists": 0,
        "followers": 0,
        "following": 2,
        "created_at": "2023-06-30T13:23:49Z",
        "updated_at": "2024-03-04T14:00:37Z"
      });
})

app.listen(PORT,()=>{
    console.log(`Server is running on port:${PORT}`);
})