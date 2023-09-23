# Triveous-Assignment
# Deployed-Link : https://triveous-ww2h.onrender.com



The Triveous Ecommerce Backend API, meticulously crafted by me , establishes a sturdy base for your online retail endeavors. Offering an array of capabilities spanning user administration, product catalog management, shopping cart functionality, and order processing, it bestows your ecommerce business with unparalleled flexibility and power.

## Features

### User

- Register as a user.
- Log in with credentials using JWT token for authentication.
- Log out (blacklist the token).

### Product

- Add products.
- View products (with rate limiter middleware limiting requests to 10 per minute).
- Update product details.
- Delete products.
- Filter products by categories.
- View a particular product by its ID.

### Category

- Add category names.
- Update category names.
- Get category information.
- Delete categories.

### Cart

- Add products to the cart.
- Increment product quantity in the cart.
- Decrement product quantity in the cart.
- Remove products from the cart.

### Order

- Place orders.
- View order history.
- View order details.
- Update order status.

## Tech Stack

Our backend API is built using the following technologies:

- *Node.js:* A server-side JavaScript runtime for building fast and scalable network applications.
- *Express.js:* A minimal and flexible Node.js web application framework that simplifies the development of robust APIs.
- *MongoDB:* A NoSQL database for efficient data storage and retrieval.
- *Mongoose:* An elegant object modeling library for MongoDB, making it easy to manage database interactions.
- *JSON Web Tokens (JWT):* Secure user authentication and authorization.




## Running the Server

To start the backend server, use one of the following commands:

shell
nodemon index.js
# or
npm run server



## API Documentation

For detailed information on how to use our API, please refer to the [API documentation](ApiDocs/apiDoc.md).

## Swagger API Docs

You can also access the Swagger API documentation [here](https://triveous-ww2h.onrender.com/docs/).





## Snapshorts Documentation

<img width="944" alt="Screenshot 2023-09-23 134347" src="https://github.com/MSaifKhan01/Triveous-Assignment/assets/119418918/18da82ce-06e2-46f6-986f-9f1759d1657d">

<img width="939" alt="Screenshot 2023-09-23 134522" src="https://github.com/MSaifKhan01/Triveous-Assignment/assets/119418918/0e423f4c-b0ca-434c-955c-36a64f46e000">


<img width="935" alt="Screenshot 2023-09-23 134600" src="https://github.com/MSaifKhan01/Triveous-Assignment/assets/119418918/0085c8bf-eca4-48a6-a152-505fcfe40261">


<img width="941" alt="Screenshot 2023-09-23 134642" src="https://github.com/MSaifKhan01/Triveous-Assignment/assets/119418918/c724e4e5-4c1b-4df9-aa45-15c9a78fe794">


<img width="939" alt="Screenshot 2023-09-23 134723" src="https://github.com/MSaifKhan01/Triveous-Assignment/assets/119418918/b8f09714-863d-42ea-ad31-629be2394925">


<img width="947" alt="Screenshot 2023-09-23 134802" src="https://github.com/MSaifKhan01/Triveous-Assignment/assets/119418918/000901e2-f048-498b-ac69-b7d2422ed49a">


Made with ❤️ by the Triveous Ecommerce Team
