# Fullstack Engineer Test (Chuck)

## Estimated completion time (skill dependant): ~ 6 - 8 hours

### ⚙ What is the technical challenge?

#### Server:

- You should develop an Apollo GraphQL API
- Your GraphQL API should wrap the ChuckNorris.io API
- Your GraphQL API should have a Query type that resolves all Categories
  (https://api.chucknorris.io/jokes/categories)
- Your GraphQL API should have a Query type that resolves a random joke
  given a Category as an argument (https://api.chucknorris.io/jokes/random?
  category={category})

#### Client:

- You should develop a Single Page App SPA
- Your SPA should consume the above GraphQL API
- Your SPA should have a home page with a list of categories
- When a category is clicked, the category detail (a random joke) should be
  displayed appropriately

### 👮 What are the requirements?

For this application, you should, at the least use:

- React 16.8.4
- Apollo Client (react-apollo)
- Apollo Server
- NodeJS (LTS)
- Centralised state management Redux/Context API + Action/Reducer
  pattern)
