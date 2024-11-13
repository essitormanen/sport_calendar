--
-- Drop Tables
--
SET foreign_key_checks = 0;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS ingredients; 
DROP TABLE IF EXISTS recipes;
DROP TABLE IF EXISTS recipes_ingredients;
DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS shoppingList;
SET foreign_key_checks = 1;

--
-- Create Tables
--
CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL
);

CREATE TABLE recipes(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    apiID INT,
    recipe_title MEDIUMTEXT NOT NULL,
    cooking_time INT,
    instructions TEXT NOT NULL,
    meal_thumb TEXT,
    user_id INT
);  

CREATE TABLE ingredients(
    id INT  NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    recipe_id INT NOT NULL,
    quantity VARCHAR(255) NOT NULL,
    measurements VARCHAR(255),
    FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE cascade 
);

CREATE TABLE shoppingList(
    id INT  NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
--     quantity VARCHAR(255) NOT NULL,
--     ingredient_name LONGTEXT NOT NULL
    date DATE NOT NULL
);

CREATE TABLE shoppingIngredients(
    shoppingList_id INT NOT NULL,
    ingredient_id INT NOT NULL,
    FOREIGN KEY (shoppingList_id) REFERENCES shoppingList(id) ON DELETE cascade,
     FOREIGN KEY (ingredient_id) REFERENCES ingredients(id) ON DELETE cascade
);
-- ALTER TABLE
    -- shoppingList ADD CONSTRAINT shoppinglist_ingredient_id_foreign FOREIGN KEY(ingredient_id) REFERENCES ingredients(id);
-- ALTER TABLE
    -- recipes ADD CONSTRAINT recipes_id_foreign FOREIGN KEY(id) REFERENCES recipes_ingredients(recipe_id)
-- ALTER TABLE
    -- recipes ADD CONSTRAINT recipes_user_id_foreign FOREIGN KEY(user_id) REFERENCES user(id);
-- ALTER TABLE
    -- recipes_ingredients ADD CONSTRAINT recipes_ingredients_ingredient_id_foreign FOREIGN KEY(ingredient_id) REFERENCES ingredients(id);
-- ALTER TABLE
    -- shoppingList ADD CONSTRAINT shoppinglist_user_id_foreign FOREIGN KEY(user_id) REFERENCES user(id);
