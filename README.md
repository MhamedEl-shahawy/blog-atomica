# Blog-atomica (ongoing)
Simple blog app to share blog with one another.

## Aimed functionalities
- Users can create blog or article. Each post should contain the author name, article title, article description. others can comment, and share the post.
- Users can CRUD(Create-Read-Update-Delete) article .
- Users can create comments. Each comment should contain the author      name, comment description.
- Users can CRUD(Create-Read-Update-Delete) comments .
- a full fake data REST API is built with json-server.
## Framework
- [ReactJS](https://reactjs.org/).
- [JSONServer](https://www.npmjs.com/package/json-server)
- [Heroku for deploy](https://dashboard.heroku.com/)

## Aimed Quality Standards
- Cross-Browser Compatibility (down to IE10).
- Code Modularity and Maintainability.
## Installation 
- First clone app Ensure any install or build dependencies  have installed
### Running App for local development
- In the project directory, you can run
### `npm run local`
- In the project directory, to run Fake api data:
### `npx json-server --watch data/db.json  --port 8000`
### `change .env api root to http://localhost:8000/`
### Running App for build production or deploy app
### `npm run build`
- In the project directory, to run Fake api data and live demo:
###  `change .env api root to your host domin (www.domin.com/api/)  or to if you have not deploied yet  http://localhost:8000/api/`
### `npm run start`
