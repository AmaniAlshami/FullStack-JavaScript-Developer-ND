/* Replace with your SQL commands */
CREATE TABLE orders (
    id SERIAL PRIMARY  KEY,
    productId integer,
    quantity integer,
    user_id integer,
    status VARCHAR(100)
);