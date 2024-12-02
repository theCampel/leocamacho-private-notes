## What?
Different paradigms of [[API Design|APIs]]. Remember their best practises! They're technically [[Web Services]]. They're both examples of [[Statelessness]] principals

### REST
- **Resource Based**: Built on the idea of *resources*, with each resource pertaining a *unique URL* (i.e. multiple endpoints).
	- `GET /users/123` to get user details, 
	- `GET /users/123/orders` to get that user's orders. 
- **Built with HTTP Methods**: It's built on CRUD Operations (*create, read, update and delete*).
	- **GET**: Retrieve data (e.g., `GET /users`).
	- **DELETE**: Remove data (e.g., `DELETE /users/123`).
	- **POST**: It's idempotent??? Tf. 
- Tends to over/under fetch.


### GraphQL
- A **Query Based** API, with a *single endpoint* (`/graphql`). Users request exactly what they want. Built by Facebook with Social Medias involved.
- **No Versions**: Devs just add types / fields. 
- **Error Handling**: GraphQL will *always return 200*. Any error found will be found within the response (As discovered at JPMC).
- Can be heavy for server when fetching complex queries.
- Example Request:
```graphql
{
  user(id: 123) {
    name
    email
    orders {
      id
      total
    }
  }
}
```
