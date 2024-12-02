## What?
Defining how different systems communicate with each other through well defined Rules (API). The API should be *easy to use*, *reliable*, *scalable*m, *flexible* and ***well documented***! They should support, at minimum:
- **C**reate
- **R**ead
- **U**pdate
- **D**elete

### Different Kinds:
1. [[REST API Vs GraphQL]] 
2. SOAP

### Best Practises
- Avoid *over/under*-fetching data and having wasted / unnecessarily repeated requests.
- Have *clear* and consistent naming conventions, without verbs (E.g. `/users`, not `/getUsers`).
	- `/users/123/orders` to get orders for a specific user.
	- `/users/123/orders/456` to get a specific order for that user.
- Support pagination, filtering and sorting.
- Use authentication. 
- Rate Limits! Helps avoid DDOS attacks.
- ***Documentation!***
