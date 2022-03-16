
# Products for Sale

A Microsservice for selling a Product in all Currencies. **This project includes Postman Collection** and inside all the example responses and usage.
## Features

- All requests and responses were treated, become easy to Frontend or other Microsservice integration.
- It's easy to change the **Main Currency**
- Even the international currency are static by now, it's easy to get from any service that provide online values.
- The products can be added from migrations or by POST.
- The created_at and updated_at are working properly.


## Tech Stack
**Server:** Node, TypeScript, Express, MySql, Jest, class-validator, knex




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file:

`PORT=3000`

And **knexfile.ts**:
 
    host: "127.0.0.1",
    port: "3306",
    user: "admin",
    password: "admin",
    database: "products"



## Installation

Just clone or download the project.
```bash
  cd products_for_sale
  npm install 
  create a local MySQL Database.
  npm run knex migrate:latest
  import Collection to postman from ./resources
  import Environment Variable to postman from ./resources
```

NODE version used: **nodejs-lts-fermium 14.19.0-1**

NPM version used: **npm 8.5.3-1**

## Usage/Examples

```javascript
npm start
```


## Running Tests

To run tests, run the following command

```bash
  npm test
```

