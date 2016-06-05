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
`config.yml`

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
- node-yaml-config (hierarchical configs)

### For QA
- Mocha
- Should
- Sinon
- JSHint
- Istanbul
- Supertest

## TODO
- Logging (Winston?)
- Authentication (Passport?)
- ACL (rbac?)
- Reloader
- Errors
- Socket.io
- Static files
- Lower JSHint 'maxcomplexity'
- "use strict"; everywhere
- Run with NODE_ENV=development, ENV switch
- Fix warnings after start
- Refactor magic numbers
- DI
- File upload
- Pre-commit hook?
- More JSHint rules
- Object validation?
- JSCS
- Mediator? Plugins? Layers?
- Non-UI client code?
- Audit (storing changes), event sourcing?
- Editor's conf
- Code contracts?
