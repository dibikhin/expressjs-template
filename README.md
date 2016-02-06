# Node.js + Express.js + Mongoose

Express-based boilerplate for a webapp's backend.

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

## In use
- Express
- Mongoose
- Underscore
- Modules loaded w/ NODE_PATH=.
- Sriracha Admin

### For QA
- Mocha
- Should
- Sinon
- JSHint
- Istanbul
- Supertest
- node-yaml-config

### TODO
- Logging (Winston?)
- Authentication (Passport?)
- ACL (rbac?)
- Reloader
- Errors
- Socket.io
- Static files
- Lower JSHint 'maxcomplexity'
- "use strict"; everywhere
- Run with NODE_ENV=development
- Fix warnings after start
- Refactor magic numbers
- File upload
- Pre-commit hook?
- More JSHint rules
- Object validation?
- ENV switch
- Editor's conf
- Code contracts?
