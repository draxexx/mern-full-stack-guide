# mern-full-stack-guide
React, NodeJS, Express &amp; MongoDB - The MERN Fullstack Guide - UDEMY

### Install React Router

>Install react router dom version of 5

`npm install --save react-router-dom@5 --save-exact`

### Using React Router

1. Import it in the App.js file

```js
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
```

2. Wrap all the page components with the Router tag. Also wrap single component with the Route tag. 

>If the user type undefined url, then use Redirect tag to redirect users to the specific page. To use Redirect properly, wrap the routes with the Switch tag.

```js
 <Router>
      <Switch>
        <Route path="/users" exact>
          <Users />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
```