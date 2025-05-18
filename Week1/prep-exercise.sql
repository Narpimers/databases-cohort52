var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'hyfuser',
  password : 'hyfpassword',
  database : 'company',
  // port : 3307
});

CREATE TABLE recipes (
  recipe_id INT NOT NULL AUTO_INCREMENT,
  recipe_name VARCHAR(100) NOT NULL,
  is_vegetarian BOOLEAN,
  PRIMARY KEY (recipe_id)
);


CREATE TABLE ingredients (
  ingredient_id INT AUTO_INCREMENT PRIMARY KEY,
  ingredient_name VARCHAR(100) NOT NULL
);

CREATE TABLE recipe_ingredients (
  recipe_id INT,
  ingredient_id INT,
  quantity VARCHAR(50),
  PRIMARY KEY (recipe_id, ingredient_id),
  FOREIGN KEY (recipe_id) REFERENCES recipes(recipe_id),
  FOREIGN KEY (ingredient_id) REFERENCES ingredients(ingredient_id)
);

CREATE TABLE steps (
  step_id INT AUTO_INCREMENT PRIMARY KEY,
  description TEXT NOT NULL
);

CREATE TABLE recipe_steps (
  recipe_id INT,
  step_id INT,
  step_order INT,
  PRIMARY KEY (recipe_id, step_id),
  FOREIGN KEY (recipe_id) REFERENCES recipes(recipe_id),
  FOREIGN KEY (step_id) REFERENCES steps(step_id)
);


Which entities can you spot in the above problem ?
answer: Recipe, Ingredient, Step etc...
Which tables do you need to create to store the above data?
recipes: to store data about recipe, ingredients: to store data about ingredient, steps: to describe each step;
What are the relationships between those entities?
recipe_ingredients one recipe can have multiple ingredients and recipe_steps can have multiple steps and one step can be used in multiple recipes.