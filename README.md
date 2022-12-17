# <p align="center" id="top">Smart Brain</p>
<p align="center"><img src="https://github.com/arjunan-k/Smart_Brain/blob/main/frontend/demo/06.png?raw=true"/></p>

1. Clone this repo
2. Run `npm install`
3. Run `npm start`
4. Add your API key in the `backend gRPC or backend/controllers/image.js` file to connect to Clarifai API
5. Add your own database credentials to `server.js` in `backend/backend gRPC`

You can grab Clarifai API key [here](https://www.clarifai.com/)

Database Setup for Supabase or Local Host

```javascript
# Supabase
const db = knex({
  client: 'pg',
  connection: {
    host : 'Grab host from Supabase Settings -> Database',
    port : 5432,
    user : 'postgres',
    password : 'Password from Supabase',
    database : 'postgres'
  }
});
```
```javascript
# Local
const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port : 5432,
    user : 'postgres',
    password : 'password of your postgres user',
    database : 'smartbrain'
  }
});
```

https://user-images.githubusercontent.com/104669486/208252596-02c750f8-c214-4472-b09c-0d36f0e530f5.mp4

![](https://github.com/arjunan-k/Smart_Brain/blob/main/frontend/demo/01.png?raw=true)

![](https://github.com/arjunan-k/Smart_Brain/blob/main/frontend/demo/02.png?raw=true)

Made by Arjunan K

<a href="#top">Back to top</a>
