# Triveous-Assignment


## User Routes

| Endpoint       | Description                   | HTTP Method | Features                                      |
| -------------- | ----------------------------- | ----------- | --------------------------------------------- |
| `/user/register`    | Register a new user           | POST        | User registration with username, email, and password. |
| `/user/login`       | Login with existing user      | POST        | User login with email and password.            |

## Product Routes

| Endpoint               | Description                   | HTTP Method | Features                                      |
| ----------------------- | ----------------------------- | ----------- | --------------------------------------------- |
| `/product/add`                 | Add a new product             | POST        | Add a new product with title, price, description, availability, and category. |
| `/product/get`                 | Get all products              | GET         | Retrieve a list of all products.             |
| `/product/get/:productID`      | Get product details by ID     | GET         | Retrieve detailed information about a specific product by its ID. |
| `/product/category/:categoryID`| Get products by category ID   | GET         | Retrieve products that belong to a specific category. |
| `/product/update/:productID`   | Update an existing product    | PUT         | Update product details including title, price, description, and availability. |
| `/product/delete/:productID`   | Delete an existing product    | DELETE      | Delete a product from the system.             |

## Category Routes

| Endpoint               | Description                   | HTTP Method | Features                                      |
| ----------------------- | ----------------------------- | ----------- | --------------------------------------------- |
| `/category/add`                 | Add a new category            | POST        | Add a new category with a name.               |
| `/category/get`                 | Get all categories            | GET         | Retrieve a list of all categories.           |
| `/category/get/:categoryID`     | Get category by ID            | GET         | Retrieve detailed information about a specific category by its ID. |
| `/category/update/:categoryID`  | Update category by ID         | PATCH       | Update the name of an existing category.     |
| `/category/delete/:categoryID`  | Delete category by ID         | DELETE      | Delete a category from the system.           |

## Cart Routes

| Endpoint               | Description                   | HTTP Method | Features                                      |
| ----------------------- | ----------------------------- | ----------- | --------------------------------------------- |
| `/cart/addtocart/:productID`| Add a product to the cart     | POST        | Add a product to the user's cart by specifying the product ID. |
| `/cart/get`                 | Get all cart items            | GET         | Retrieve a list of all items in the user's cart. |
| `/cart/inc/:productID`      | Increment the quantity        | PATCH       | Increment the quantity of a specific cart item by specifying the product ID. |
| `/cart/dec/:productID`      | Decrement the quantity        | PATCH       | Decrement the quantity of a specific cart item by specifying the product ID. |
| `/cart/delete/:productID`   | Remove a product from the cart| DELETE      | Remove a product from the user's cart by specifying the product ID. |

## Order Routes

| Endpoint               | Description                   | HTTP Method | Features                                      |
| ----------------------- | ----------------------------- | ----------- | --------------------------------------------- |
| `/order/placeOrder`          | Place an order                | POST        | Place an order.                               |
| `/order/orderHistory`        | Get order history             | GET         | Retrieve the order history for a user.        |
| `/order/orderDetails/:orderID`| Get order details by order ID| GET         | Retrieve detailed information about a specific order by its ID. |
| `/order/update/:orderID`     | Update order status by order ID| PATCH     | Update the status of an existing order by its ID. |
