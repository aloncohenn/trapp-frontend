# TrApp

TrApp tracks your applications to developer jobs, allowing you to focus on the job search. Create todo lists, get curated interview prep videos for each job application, and organize where you are in the timeline of each application.

### Live Demo: https://trapp-frontend.now.sh

### Repository: https://github.com/cohencodes/trapp-frontend

![Add Job Demo](https://github.com/cohencodes/trapp-frontend/blob/master/src/assets/landing.gif?raw=true)

![Dashboard Screenshot](https://github.com/cohencodes/trapp-frontend/blob/master/src/assets/trapp.png?raw=true)
  
## Tech Stack

* Frontend
  * [React](https://github.com/facebook/react)
  * [React Hooks](https://github.com/streamich/react-use)
  * [Context API](https://github.com/wesbos/React-Context)
  * [Vanilla CSS](https://vanillaframework.io/)
  * [FontAwesome Library](https://fontawesome.com/)
  * [Axios](https://github.com/axios/axios)

* Backend
  * [Node](https://github.com/nodejs/node)
  * [Express](https://github.com/expressjs/express)
  * [MongoDB](https://github.com/mongodb/mongo)
  * [Mongoose](https://github.com/Automattic/mongoose)
  * [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
  * [Authentication: JSONWebTokens](https://jwt.io/)
  * [Heroku](https://devcenter.heroku.com)
  * [YouTube API](https://developers.google.com/youtube/v3/)
  * [Clearbit API](https://clearbit.com/docs)

[Server repo](https://github.com/cohencodes/trapp-backend)

## API

```
/api
.
├── /auth
│   └── POST
│       └── /auth
├── /jobs
│   └── GET /
│       ├── /
│       └── /:jobId
│   └── POST
│       └── /:_id
│   └── PATCH
|       └── /:_id
│   └── DELETE
|       └── /:_id
├── /todos
│   └── GET
│       ├── /:job_id
│       └── /get_todo/:_id
│   └── POST
│       └── /add_todo
│   └── PATCH
|       └── /update_todo
│   └── DELETE
|       └── /delete_todo/:_id
├── /users
│   └── POST
│       └── /signup
```

## Team
* Project Manager [@aloncohenn](https://github.com/cohencodes)
* QA Lead [@jonespi](https://github.com/jonespi)
* Design Lead [@anyasnow](https://github.com/anyasnow)
