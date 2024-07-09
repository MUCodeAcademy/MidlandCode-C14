# Classwork

## Part 1

- Set up a very very simple server that allows you to access the `/` page and sends a `hello world` message.
- Now redirect any route that isn't to `/` to the `/` url.
- So now we want to be able to get all the posts from an API by the user ID. (We're working with non databases atm so let's pretend we have it in a database)
  1. Set up a route that allows for a userID param
  2. Copy the JSON from [here](https://jsonplaceholder.typicode.com/posts) and save it locally in your routes file / a json file it can access.
  3. When a person calls `/users/5` return an array of only the posts from that user.

## Part 2

- Set up a middleware to log `Hi I'm a middleware` to the console every time a request is made to ANY route.
- Finally, take the Giphy app and have that be sent to the front end whenever `/app` is accessed.
- When the user enters their password, hash it.
- Make sure that any route not already declared is redirected to `/`.
- Separate out these files accordingly.

## Database

- Set up an example database with at least one table.
- Open a connection to that database in your backend.
- Get the table from the database using an SQL query.