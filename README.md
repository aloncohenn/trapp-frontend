# TrApp

TrApp tracks your applications to developer jobs, allowing you to focus on the job search.

### Live Demo: https://trapp-frontend.now.sh

### Repository: https://github.com/cohencodes/trapp-frontend

![Add Job Demo](https://github.com/cohencodes/trapp-frontend/blob/master/src/assets/landing.gif?raw=true)

![Dashboard Screenshot](https://github.com/cohencodes/trapp-frontend/blob/master/src/assets/trapp.png?raw=true)

## Technologies

- Frontend

  - React, React Hooks & Context API
  - Vanilla CSS
  - FontAwesome Library
  - Axios

- Backend
  - Node.js/Express
  - MongoDB/Mongoose
  - MongoDB Atlas
  - Authentication: JSONWebTokens
  - Heroku

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

## Credits

- [@cohencodes](https://github.com/cohencodes)
- [@jonespi](https://github.com/jonespi)
- [@anyasnow](https://github.com/anyasnow)
