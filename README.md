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

### Using map in a short way

>Returns UserItem component

```js
{props.items.map((user) => (
        <UserItem key={user.id} />
      ))}
```

### Import orders

```js
// FIRST IMPORT THIRD PARTY LIBRARIES
import React from "react";

// THEN IMPORT YOUR OWN FILES
import "./UsersList.css";
import UserItem from "./UserItem";
import Card from "shared/components/UIElements/Card";
```

### Using NavLink component from the react router dom

1. Import NavLink

`import { NavLink } from "react-router-dom";``

2. Use it

>If you put 'exact', that link will be default selected

```js
<NavLink to="/" exact>
          ALL USERS
        </NavLink>
```

### React.Fragment

>We can return multiple components inside React.Fragment tag

`
<React.Fragment></React.Fragment>
`