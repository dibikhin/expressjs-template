# Node.js + Express.js + Mongoose

Express-based boilerplate webapp's backend.

NPM-only, no other automation used.

### Install

`npm install`

### Test

`npm test`

### Start

`npm start`

### Coverage

`npm run cover`

### Configs
- TBD Mongo

### Folders
```
.
|--db
|--domain
|--infra
|--models
|--routes
└--test
    └--domain
```

### In use
- Express
- Mocha
- Should
- Sinon
- Underscore
- Mongoose
- JSHint
- Istanbul
- Supertest
- Modules loaded w/ NODE_PATH=.
- Sriracha Admin

### TODO
- Logging (Winston?)
- Authentication (Passport?)
- ACL (rbac?)
- Reloader
- Configs
- Errors
- Socket.io
- Static files
- Lower JSHint 'maxcomplexity'
- File upload
- Pre-commit hook?
- More JSHint rules
- Object validation?
- ENV switch
- Editor's conf
- Code contracts?
