# API Requirements


## API Endpoints

#### Products

[POST] /products 

Header : 
Authorization: Bearer token

Description: 
Create a new product in store.

Example cURL : 
```
 curl --location --request POST 'http://localhost:3100/products' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name":"Apple",
    "price":"10",
    "category":"Fruits",
    "id":"2"
}'

```
[GET] /products 

Description: 
List all products.

Example cURL : 
```
curl --location --request GET 'http://localhost:3100/products'
```

[GET] /products/{id}

Description: 
Show a product.

Example cURL : 
```
curl --location --request GET 'http://localhost:3100/products/1'
```

#### Users
[GET] /Users 

Header : 
Authorization: Bearer token

Description: 
List all users.

Example cURL : 
```
curl --location --request GET 'http://localhost:3100/users' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdG5hbWUiOiJBbWFuaSIsImxhc3RuYW1lIjoiQWxzaGFtaSIsInBhc3N3b3JkIjoiJDJiJDEwJC92SUNzOGRJUWgzSDlDTEcwQ2kuZmVXV0ZWSjQ5dUc2Mk83UTFndHZsZ1IuN1NUOWo1UXBtIn0sImlhdCI6MTY3MjM0MTI2MH0.JjtjFJvOz9oNyDlOpOflbMyoD2UPWucQl7a1fBUku4U'
```
[GET] /Users/{id} 

Header : 
Authorization: Bearer token

Description: 
Show user info.

Example cURL : 
```
curl --location --request GET 'http://localhost:3100/users/1' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdG5hbWUiOiJBbWFuaSIsImxhc3RuYW1lIjoiQWxzaGFtaSIsInBhc3N3b3JkIjoiJDJiJDEwJC92SUNzOGRJUWgzSDlDTEcwQ2kuZmVXV0ZWSjQ5dUc2Mk83UTFndHZsZ1IuN1NUOWo1UXBtIn0sImlhdCI6MTY3MjM0MTI2MH0.JjtjFJvOz9oNyDlOpOflbMyoD2UPWucQl7a1fBUku4U'
```
[POST] /Users

Description: 
Create new user, and Return JWT to use for others endpoints.

Example cURL : 
```
curl --location --request POST 'http://localhost:3100/users' \
--header 'Content-Type: application/json' \
--data-raw '{
    "firstName":"Amani",
    "lastName":"Alshami",
    "password":"a123",
    "id":"1"
}'
```

#### Orders

[POST] /orders/{id}

Header : 
Authorization: Bearer token

Description: 
Create new order, take new id in url.

Example cURL : 
```
curl --location --request POST 'http://localhost:3100/orders/9' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdG5hbWUiOiJBbWFuaSIsImxhc3RuYW1lIjoiQWxzaGFtaSIsInBhc3N3b3JkIjoiJDJiJDEwJC92SUNzOGRJUWgzSDlDTEcwQ2kuZmVXV0ZWSjQ5dUc2Mk83UTFndHZsZ1IuN1NUOWo1UXBtIn0sImlhdCI6MTY3MjM0MTI2MH0.JjtjFJvOz9oNyDlOpOflbMyoD2UPWucQl7a1fBUku4U'
```
[POST] /orders/{id}/products

Header : 
Authorization: Bearer token

Description: 
Add product to order.

Example cURL : 
```
curl --location --request POST 'http://localhost:3100/orders/9/products' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdG5hbWUiOiJBbWFuaSIsImxhc3RuYW1lIjoiQWxzaGFtaSIsInBhc3N3b3JkIjoiJDJiJDEwJC92SUNzOGRJUWgzSDlDTEcwQ2kuZmVXV0ZWSjQ5dUc2Mk83UTFndHZsZ1IuN1NUOWo1UXBtIn0sImlhdCI6MTY3MjM0MTI2MH0.JjtjFJvOz9oNyDlOpOflbMyoD2UPWucQl7a1fBUku4U' \
--header 'Content-Type: application/json' \
--data-raw '{
    "productId":"2",
    "quantity":3
}'
```

[GET] /orders/{id}

Header : 
Authorization: Bearer token

Description: 
Show an order for the user.

Example cURL : 
```
curl --location --request GET 'http://localhost:3100/orders/1' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdG5hbWUiOiJBbWFuaSIsImxhc3RuYW1lIjoiQWxzaGFtaSIsInBhc3N3b3JkIjoiJDJiJDEwJC92SUNzOGRJUWgzSDlDTEcwQ2kuZmVXV0ZWSjQ5dUc2Mk83UTFndHZsZ1IuN1NUOWo1UXBtIn0sImlhdCI6MTY3MjM0MTI2MH0.JjtjFJvOz9oNyDlOpOflbMyoD2UPWucQl7a1fBUku4U'
```

[GET] /orders

Header : 
Authorization: Bearer token

Description: 
List all orders for the user.

Example cURL : 
```
curl --location --request GET 'http://localhost:3100/orders/1' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdG5hbWUiOiJBbWFuaSIsImxhc3RuYW1lIjoiQWxzaGFtaSIsInBhc3N3b3JkIjoiJDJiJDEwJC92SUNzOGRJUWgzSDlDTEcwQ2kuZmVXV0ZWSjQ5dUc2Mk83UTFndHZsZ1IuN1NUOWo1UXBtIn0sImlhdCI6MTY3MjM0MTI2MH0.JjtjFJvOz9oNyDlOpOflbMyoD2UPWucQl7a1fBUku4U'
```

## Data Shapes
#### Product
-  id
- name
- price
- category

#### User
- id
- firstName
- lastName
- password

#### Orders
- id
- user_id
- status of order (active or complete)

#### Order_products
- id
- order id
- id of each product in the order
- quantity of each product in the order


