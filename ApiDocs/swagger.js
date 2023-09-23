/* ----------------------------->>>>>>> Schemas <<<<<<<-----------------------------*/

/* --------------------->>> Authorization Schema<<<---------------------*/
/**
 * @swagger
 * components:
 *   securitySchemes:
 *     Auth:
 *       type: apiKey
 *       in: header
 *       name: Authorization
 *       description:  token authorization header
*/


/* --------------------->>> Users Schema <<<---------------------*/
/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       properties:
 *         _id:
 *           type: ObjectId
 *           description: Id of the user
 *         username:
 *           type: string
 *           description: Name of the user
 *         email:
 *           type: string
 *           description: Email of the user
 *         password:
 *           type: string
 *           description: Password of the user
 *       required:
 *         - email
 *         - password
 *       example:
 *         username: Triveous
 *         email: triveous01@gmail.com
 *         password: triveous
 */


/* --------------------->>> Products Schema <<<---------------------*/
/**
 * @swagger
 * components:
 *   schemas:
 *     Products:
 *       type: object
 *       properties:
 *         _id:
 *           type: ObjectId
 *           description: Id of the product
 *         title:
 *           type: string
 *           description: Title of Product.
 *         price:
 *           type: integer
 *           description: Price of Product
 *         description:
 *           type: string
 *           description: Description of Product.  
 *         availability:
 *           type: boolean
 *           description: Availablitiy of that product (true/false).
 *         category:
 *           type: ObjectId
 *           description: Category Id of Product Category.
 *         image:
 *           type: string
 *           description: Image of Product.
 *       
 *       example:
 *         _id: 650d24704e5f0989e6f0d762
 *         title: Product Name
 *         price: 25999
 *         description: Product Description
 *         category: 890i67cde87603a28a81e45y
 *         availability: true/false
 *         image : Product Image
 */


/* --------------------->>> Category Schema <<<---------------------*/
/**
 * @swagger
 * components:
 *   schemas:
 *     Categories:
 *       type: object
 *       properties:
 *         _id:
 *           type: ObjectId
 *           description: Id of the Category
 *         name:
 *           type: string
 *           description: Title of Category.
 *       example:
 *         _id: 678i67cde88643a28a81e45c
 *         name: Category Name
 */


/* --------------------->>> Order Schema <<<---------------------*/
/**
 * @swagger
 * components:
 *   schemas:
 *     Orders:
 *       type: object
 *       properties:
 *         _id:
 *           type: ObjectId
 *           description: ID of the Order
 *         user:
 *           type: ObjectId
 *           description: ID of the User who placed the order
 *         items:
 *           type: array
 *           description: List of items in the order
 *           items:
 *             type: object
 *             properties:
 *               product:
 *                 type: ObjectId
 *                 description: ID of the Product in the order
 *               quantity:
 *                 type: integer
 *                 description: Quantity of the Product in the order
 *         total:
 *           type: number  # Use "number" for floating-point values like price
 *           description: Total price of the order
 *         orderStatus:
 *           type: object
 *           properties:
 *             status:
 *               type: string
 *               enum: [Pending, Shipped, Delivered]
 *               default: Pending
 *             description:
 *               type: string
 *               description: Status description of the order
 *       example:
 *         _id: 678i67cde88643a28a81e45c
 *         user: 678i67cde88643a28a81e45c
 *         items:
 *           - product: 678i67cde88643a28a81e45c
 *             quantity: 2
 *           - product: 678i67cde88643a28a81e45c
 *             quantity: 1
 *         total: 150.0
 *         orderStatus:
 *           status: Shipped
 *           description: Product description
 */


/* --------------------->>> Cart Schema <<<---------------------*/
/**
 * @swagger
 * components:
 *   schemas:
 *     cartItemsSchema:
 *       type: object
 *       properties:
 *         product:
 *           type: ObjectId
 *           description: ID of the Product in the cart item
 *         quantity:
 *           type: integer
 *           description: Quantity of the Product in the cart item
 *       example:
 *         product: 678i67cde88643a28a81e45c
 *         quantity: 2
 *
 *     Cart:
 *       type: object
 *       properties:
 *         _id:
 *           type: ObjectId
 *           description: ID of the Cart
 *         userID:
 *           type: ObjectId
 *           description: ID of the User to whom the cart belongs
 *         products:
 *           type: array
 *           description: List of items in the cart
 *           items:
 *             $ref: '#/components/schemas/cartItemsSchema'
 *       example:
 *         _id: 678i67cde88643a28a81e45c
 *         userID: 678i67cde88643a28a81e45c
 *         items:
 *           - product: 678i67cde88643a28a81e45c
 *             quantity: 2
 *           - product: 678i67cde88643a28a81e45c
 *             quantity: 1
 */
/* ---------------------------------------->>>>>>><<<<<<<----------------------------------------*/

// ---------------------------------------->>>>>>><<<<<<<----------------------------------------

// ------------------------>>> User Routes <<<------------------------
// Signup
/**
 * @swagger
 * paths:
 *   /user/register:
 *     post:
 *       summary: Register a new user
 *       tags: [Users]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       responses:
 *         201:
 *           description: User registered successfully
 *           content:
 *             application/json:
 *               schema:
 *                 example:
 *                   success: true
 *                   message: registration done succesfully
 *                   data:
 *                       username: Traveous
 *                       email: traveous01@gmail.com
 *                       password: $2b$1Fwo6wgApNDpTVQju1RpVux6b5Ql1U/jUI0cc6B1Z7UGZ9VFpmTU
 *                       _id: 64f4c625a9b674bd4bb6bc8e
 *                       createdAt: 2023-09-03T17:45:09.734Z
 *                       updatedAt: 2023-09-03T17:45:09.734Z
 *                       __v: 0
 *         500:
 *           description: registration failed
 *         400:
 *           description: You are already registered
 */

// Login
/**
 * @swagger
 * paths:
 *   /user/login:
 *     post:
 *       summary: Log in an existing user
 *       tags: [Users]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   description: Email of the user
 *                 password:
 *                   type: string
 *                   description: Password of the user
 *               required:
 *                 - email
 *                 - password
 *               example:
 *                 email: traveous01@gmail.com
 *                 password: traveous01
 *       responses:
 *         200:
 *           description: Login successful
 *           content:
 *             application/json:
 *               schema:
 *                 example:
 *                   success: true
 *                   message: Login successful
 *                   token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NTBlODQ4NjZiNjBlYjNhNTUyMDM2MDUiLCJpYXQiOjE2OTU0NTAyNTIsImV4cCI6MTY5NTQ2MTA1Mn0.DL_lWz891SBZyM_b3LB6UWfZYRIKsoHfOOAmAIDJhDE
 *         500:
 *           description: Internal Server Error or Contact to administrator or Login Failed
 *         401:
 *           description: login failed
 */


// ---------------------------------------->>>>>>><<<<<<<----------------------------------------



// ------------------------>>> Product Routes <<<------------------------

//  Get all products
/**
 * @swagger
 * paths:
 *   /product/get:
 *     get:
 *       summary: Get all products
 *       tags: [Products]
 *       security:
 *         - ratelimiter: max-limit-10
 *       responses:
 *         200:
 *           description: All products retrieved successfully
 *           content:
 *             application/json:
 *               example:
 *                 status: 200
 *                 success: true
 *                 message: All products retrieved successfully
 *                 data: [
 *                   {
 *                     _id: "890i67cde87603a28a81e45y",
 *                     title: "realme 9 Pro",
 *                     price: 80000,
 *                     image: "Image URL",
 *                     description: "High-quality smartphone with advanced features.",
 *                     availability: true,
 *                     category: "678i67cde88643a28a81e45c",
 *                     __v: 0
 *                   }
 *                 ]
 *         500:
 *           description: Something wrong
 */

// Get product details by product ID
/**
 * @swagger
 * paths:
 *   /product/get/{productID}:
 *     get:
 *       summary: Get product details by product ID
 *       tags: [Products]
 *       security:
 *         - Auth: []
 *       parameters:
 *         - in: path
 *           name: productID
 *           schema:
 *             type: string
 *           required: true
 *           description: ID of the product to retrieve
 *       responses:
 *         '200':
 *           description: Product details retrieved successfully
 *           content:
 *             application/json:
 *               example:
 *                 status: 200
 *                 success: true
 *                 message: Product details retrieved successfully
 *                 data:
 *                   {
 *                     _id: "890i67cde87603a28a81e45y",
 *                     title: "realme 9 Pro",
 *                     price: 40999,
 *                     image: "Image URL",
 *                     description: "High-quality smartphone with advanced features.",
 *                     availability: true,
 *                     category: "678i67cde88643a28a81e45c",
 *                     __v: 0
 *                   }
 *         401:
 *           description: Token not provided
 *         404:
 *           description: Product not found or Invalid Product ID
 *         500:
 *           description: Internal Server Error or Contact the administrator
 */

// Get products by category ID
/**
 * @swagger
 * paths:
 *   /product/category/{categoryID}:
 *     get:
 *       summary: Get products by category ID
 *       tags: [Products]
 *       security:
 *         - Auth: []
 *       parameters:
 *         - in: path
 *           name: categoryID
 *           schema:
 *             type: string
 *           required: true
 *           description: ID of the category to filter products
 *       responses:
 *         200:
 *           description: Products retrieved successfully by Category ID
 *           content:
 *             application/json:
 *               example:
 *                 status: 200
 *                 success: true
 *                 message: Products retrieved successfully by Category ID
 *                 data:
 *                   - _id: 678i67cde88643a28a81e45c
 *                     title: realme 9 Pro
 *                     price: 59909
 *                     description: High-quality smartphone with advanced features.
 *                     availability: true
 *                     category:
 *                       _id: 890i67cde87603a28a81e45y
 *                       name: Electronics
 *                       createdAt: 2023-09-01T14:23:09.221Z
 *                       updatedAt: 2023-09-01T14:23:09.221Z
 *                       __v: 0
 *         404:
 *           description: No products found for this category
 *         500:
 *           description: Internal Server Error or Contact the administrator
 */

//  Add a new product
/**
 * @swagger
 * paths:
 *   /product/add:
 *     post:
 *       summary: Add a new product
 *       tags: [Products]
 *       security:
 *          - Auth: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   description: Title of the new product
 *                 description:
 *                   type: string
 *                   description: Description of the new product
 *                 image:
 *                   type: string
 *                   description: Image of the new product
 *                 category:
 *                   type: string
 *                   description: ID of the category for the new product
 *                 availability:
 *                   type: boolean
 *                   description: Availability of the new product (true/false)
 *                 price:
 *                   type: integer
 *                   description: Price of the new product
 *               required:
 *                 - title
 *                 - category
 *                 - price
 *               example:
 *                 title: New Product
 *                 price: 1999
 *                 description: Product Description
 *                 category: 650c88cde67984b28a81e86c
 *                 availability: true
 *                 image: Product Image
 *       responses:
 *         201:
 *           description: Product Added Succesfully
 *           content:
 *             application/json:
 *               example:
 *                 status: 201
 *                 success: true
 *                 message: Product Added Succesfully
 *                 data:
 *                   _id: 678i67cde88643a28a81e45c
 *                   title: New Product
 *                   price: 999
 *                   description: Product Description
 *                   availability: true
 *                   category:
 *                     _id: 890i67cde87603a28a81e45y
 *                     name: Electronics
 *                     createdAt: 2023-09-01T14:23:09.221Z
 *                     updatedAt: 2023-09-01T14:23:09.221Z
 *                     __v: 0
 *         404:
 *           description: Category not found
 *         400:
 *           description: Cannot Add Multiple Products with Same Title
 *         500:
 *           description: Internal Server Error or Contact the administrator
 */

// Update product by product ID
/**
 * @swagger
 * paths:
 *   /product/update/{productID}:
 *     put:
 *       summary: Update product by product ID
 *       tags: [Products]
 *       security:
 *          - Auth: []
 *       parameters:
 *         - in: path
 *           name: productID
 *           schema:
 *             type: string
 *           required: true
 *           description: ID of the product to update
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   description: New title of the product
 *                 description:
 *                   type: string
 *                   description: New description of the product
 *                 image:
 *                   type: string
 *                   description: New image of the product
 *                 availability:
 *                   type: boolean
 *                   description: New availability of the product (true/false)
 *                 price:
 *                   type: integer
 *                   description: New price of the product
 *               required:
 *                 - title
 *                 - price
 *               example:
 *                 title: Updated Product
 *                 description: Updated Product Description
 *                 availability: true
 *                 price: 7899
 *       responses:
 *         200:
 *           description: Product Updated Succesfully
 *           content:
 *             application/json:
 *               example:
 *                 status: 200
 *                 success: true
 *                 message: Product Updated Succesfully
 *                 data:
 *                   _id: 678i67cde88643a28a81e45c
 *                   title: Updated Product
 *                   price: 1299
 *                   description: Updated Product Description
 *                   image: Updated Product image
 *                   availability: true
 *                   category:
 *                     _id: 890i67cde87603a28a81e45y
 *                     name: Electronics
 *                     createdAt: 2023-09-01T14:23:09.221Z
 *                     updatedAt: 2023-09-01T14:23:09.221Z
 *                     __v: 0
 *         404:
 *           description: Product Not found
 *         500:
 *           description: Internal Server Error or Contact the administrator
 */

// Delete product by product ID
/**
 * @swagger
 * paths:
 *   /product/delete/{productID}:
 *     delete:
 *       summary: Delete product by product ID
 *       tags: [Products]
 *       security:
 *          - Auth: []
 *       parameters:
 *         - in: path
 *           name: productId
 *           schema:
 *             type: string
 *           required: true
 *           description: ID of the product to delete
 *       responses:
 *         200:
 *           description: Product Deleted successfully
 *         404:
 *           description: Product not found
 *         500:
 *           description: Internal Server Error or Contact the administrator
 */

// ------------------------>>> Category Routes <<<------------------------

// # Get all categories
/**
 * @swagger
 * paths:
 *   /category/get:
 *     get:
 *       summary: Get all categories
 *       tags: [Categories]
 *       responses:
 *         '200':
 *           description: All categories retrieved successfully
 *           content:
 *             application/json:
 *               example:
 *                 status: 200
 *                 success: true
 *                 message: All categories retrieved successfully
 *                 data: [
 *                   {
 *                     _id: '678i67cde88643a28a81e45c',
 *                     name: 'new category',
 *                     createdAt: '2023-09-01T14:23:09.221Z',
 *                     updatedAt: '2023-09-01T14:23:09.221Z',
 *                     __v: 0
 *                   }
 *                 ]
 *         '404':
 *           description: Category Not Found
 *         '500':
 *           description: Internal Server Error or Contact the administrator
 */

// Get category by category ID
/**
 * @swagger
 * paths:
 *   /category/{categoryID}:
 *     get:
 *       summary: Get category by category ID
 *       tags: [Categories]
 *       security:
 *          - Auth: []
 *       parameters:
 *         - in: path
 *           name: categoryID
 *           schema:
 *             type: string
 *           required: true
 *           description: ID of the category to retrieve
 *       responses:
 *         200:
 *           description: Category retrieved successfully
 *           content:
 *             application/json:
 *               example:
 *                 status: 200
 *                 success: true
 *                 message: Category retrieved successfully
 *                 data:
 *                   {
 *                     _id: '650c88cde67984b28a81e86c',
 *                     name: 'new category',
 *                     createdAt: '2023-09-01T14:23:09.221Z',
 *                     updatedAt: '2023-09-01T14:23:09.221Z',
 *                     __v: 0
 *                   }
 *         404:
 *           description: Category not found
 *         500:
 *           description: Internal Server Error or Contact the administrator
*/

// Create a new category
/**
 * @swagger
 * paths:
 *   /category/add:
 *     post:
 *       summary: Create a new category
 *       tags: [Categories]
 *       security:
 *          - Auth: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: Name of the new category
 *               required:
 *                 - name
 *               example:
 *                 name: New Category
 *       responses:
 *         201:
 *           description: Category created successfully
 *           content:
 *             application/json:
 *               example:
 *                 status: 201
 *                 success: true
 *                 message: Category Added successfully
 *                 data:
 *                   {
 *                     _id: '650c88cde67984b28a81e86c',
 *                     name: 'new category',
 *                     createdAt: '2023-09-01T14:23:09.221Z',
 *                     updatedAt: '2023-09-01T14:23:09.221Z',
 *                     __v: 0
 *                   }
 *         500:
 *           description: Internal Server Error or Contact the administrator
 */

// Update category by category ID
/**
 * @swagger
 * paths:
 *   /category/update/{categoryID}:
 *     put:
 *       summary: Update category by category ID
 *       tags: [Categories]
 *       security:
 *          - Auth: []
 *       parameters:
 *         - in: path
 *           name: categoryID
 *           schema:
 *             type: string
 *           required: true
 *           description: ID of the category to update
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: New name of the category
 *               required:
 *                 - name
 *               example:
 *                 name: Updated Category
 *       responses:
 *         200:
 *           description: Category updated successfully
 *           content:
 *             application/json:
 *               example:
 *                 status: 200
 *                 success: true
 *                 message: Category updated successfully
 *                 data:
 *                   {
 *                     _id: '64f1f47978821805b01ec33d',
 *                     name: 'update category',
 *                     createdAt: '2023-09-01T14:23:09.221Z',
 *                     updatedAt: '2023-09-01T14:23:09.221Z',
 *                     __v: 0
 *                   }
 *         404:
 *           description: Category not found
 *         500:
 *           description: Internal Server Error or Contact the administrator
 */

// Delete category by category ID
/**
 * @swagger
 * paths:
 *   /category/delete/{categoryID}:
 *     delete:
 *       summary: Delete category by category ID
 *       tags: [Categories]
 *       security:
 *          - Auth: []
 *       parameters:
 *         - in: path
 *           name: categoryID
 *           schema:
 *             type: string
 *           required: true
 *           description: ID of the category to delete
 *       responses:
 *         204:
 *           description: Category deleted successfully
 *         404:
 *           description: Category not found
 *         500:
 *           description: Internal Server Error or Contact the administrator
 */

// ------------------------>>> Cart Routes <<<------------------------

//  Add to Cart
/**
 * @swagger
 * paths:
 *   /cart/addtocart/{productID}:
 *     post:
 *       summary: Add a product to the user's cart
 *       tags:
 *         - Cart
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 productID:
 *                   type: string
 *                   description: ID of the product to add to the cart
 *                 quantity:
 *                   type: integer
 *                   description: Quantity of the product to add
 *               required:
 *                 - productID
 *                 - quantity
 *               example:
 *                 productID: '678i67cde88643a28a81e45c'
 *                 quantity: 2
 *       responses:
 *         '200':
 *           description: Product Added to cart successfully
 *           content:
 *             application/json:
 *               example:
 *                 status: 200
 *                 success: true
 *                 message: Product Added to cart successfully
 *                 data:
 *                   $ref: '#/components/schemas/Cart'
 *         
 *         '400':
 *           description: Product Already in the Cart
 *         '404':
 *           description: Product not found
 *         '500':
 *           description: Internal Server Error or Contact the administrator
 */ 

//  View Cart
/**
 * @swagger
 * paths:
 *  /cart/get:
 *    get:
 *      summary: View the user's cart
 *      tags:
 *        - Cart
 *      responses:
 *        '200':
 *          description: Cart retrieved successfully
 *          content:
 *            application/json:
 *              example:
 *                status: 200
 *                success: true
 *                message: Cart retrieved successfully
 *                data:
 *                  $ref: '#/components/schemas/Cart'
 *        '404':
 *          description: Your Cart is Empty!
 *        '500':
 *          description: Internal Server Error or Contact the administrator
 */ 



/**
 * @swagger
 * /cart/inc/{productID}:
 *   post:
 *     summary: Increase the quantity of a product in the cart
 *     description: Increase the quantity of a product in the user's cart.
 *     tags: [Cart]
 *     security:
 *       - Auth: []  
 *     parameters:
 *       - in: path
 *         name: productID
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the product to increase the quantity.
 *     responses:
 *       200:
 *         description: Product quantity increased.
 *       404:
 *         description: Product not found in cart.
 *       500:
 *         description: Something went wrong.
 *       401:
 *         description: Unauthorized - JWT token required.
 */

/**
 * @swagger
 * /cart/dec/{productID}:
 *   post:
 *     summary: Decrease the quantity of a product in the cart
 *     description: Decrease the quantity of a product in the user's cart.
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []  # Use this to enable JWT authentication
 *     parameters:
 *       - in: path
 *         name: productID
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the product to decrease the quantity.
 *     responses:
 *       200:
 *         description: Product quantity updated.
 *       404:
 *         description: Product not found in cart.
 *       500:
 *         description: Something went wrong.
 *       401:
 *         description: Unauthorized - JWT token required.
 */


// Remove from Cart
/**
 * @swagger
 * paths:
 *  /cart/delete/{productID}:
 *    delete:
 *      summary: Remove items from the user's cart
 *      tags:
 *        - Cart
 *      parameters:
 *        - in: path
 *          name: productID
 *          schema:
 *            type: string
 *          required: true
 *          description: ID of the product to remove from the cart
 *      responses:
 *        '200':
 *          description: Product Removed Succesfully
 *          content:
 *            application/json:
 *              example:
 *                status: 200
 *                success: true
 *                message: Product Removed Succesfully
 *                data:
 *                  $ref: '#/components/schemas/Cart'
 *        '404':
 *          description: Cart not found
 *        '500':
 *          description: Internal Server Error or Contact the administrator
 */


// ------------------------>>> Order Routes <<<------------------------


// Place an order
/**
 * @swagger
 * paths:
 *   /order/placeOrder:
 *     post:
 *       summary: Place an order
 *       tags: [Orders]
 *       security:
 *         - Auth: []
 *       responses:
 *         '201':
 *           description: Order placed successfully
 *           content:
 *             application/json:
 *               example:
 *                 status: 201
 *                 success: true
 *                 message: Order placed successfully
 *                 data:
 *                   $ref: '#/components/schemas/Order'
 *         '400':
 *           description: Cannot Place Order,cart is Empty (e.g., empty cart)
 *         '500':
 *           description: Internal Server Error or Contact the administrator
 */


// Get order history for an authenticated user
/**
 * @swagger
 * paths:
 *   /order/orderHistory:
 *     get:
 *       summary: Get order history for an authenticated user
 *       tags: [Orders]
 *       security:
 *         - Auth: []
 *       responses:
 *         '200':
 *           description: Order history retrieved successfully
 *           content:
 *             application/json:
 *               example:
 *                 status: 200
 *                 success: true
 *                 message: Order history retrieved successfully
 *                 data:
 *                   - $ref: '#/components/schemas/Order'
 *         '404':
 *           description: Order Details Not Found
 *         '500':
 *           description: Internal Server Error or Contact the administrator
 */


// Get order details by order ID
/**
 * @swagger
 * paths:
 *   /order/orderDetails/{orderID}:
 *     get:
 *       summary: Get order details by order ID
 *       tags:
 *         - Orders
 *       security:
 *         - Auth: []
 *       parameters:
 *         - in: path
 *           name: orderId
 *           schema:
 *             type: string
 *           required: true
 *           description: ID of the order to retrieve
 *       responses:
 *         '200':
 *           description: Order details retrieved successfully
 *           content:
 *             application/json:
 *               example:
 *                 status: 200
 *                 success: true
 *                 message: Order details retrieved successfully
 *                 data:
 *                   $ref: '#/components/schemas/Order'
 *         '404':
 *           description: Order not found
 *         '500':
 *           description: Internal Server Error or Contact the administrator
 */ 


// Update the order status by order ID
/**
 * @swagger
 * paths:
 *   /order/update/{orderID}:
 *     put:
 *       summary: Update the order status by order ID
 *       tags:
 *         - Orders
 *       security:
 *         - BearerAuth: []
 *       parameters:
 *         - in: path
 *           name: orderId
 *           schema:
 *             type: string
 *           required: true
 *           description: ID of the order to update
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: New status of the order
 *               required:
 *                 - status
 *               example:
 *                 status: 'Shipped'
 *       responses:
 *         '200':
 *           description: Order status updated successfully
 *           content:
 *             application/json:
 *               example:
 *                 status: 200
 *                 success: true
 *                 message: Order status updated successfully
 *                 data:
 *                   $ref: '#/components/schemas/Order'
 *         '404':
 *           description: Order not found
 *         '500':
 *           description: Internal Server Error or Contact the administrator
 */ 
// ------------------------------------------------->>>>>>><<<<<<<----------------------------------------------------