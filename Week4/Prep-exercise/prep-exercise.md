```json
{
  "_id": 1,
  "recipe_name": "Spaghetti Bolognese",
  "is_vegetarian": false,
  "ingredients": [
    { "name": "Spaghetti", "quantity": "200g" },
    { "name": "Ground Beef", "quantity": "300g" },
    { "name": "Tomato Sauce", "quantity": "1 cup" }
  ],
  "steps": [
    { "order": 1, "description": "Boil the spaghetti." },
    { "order": 2, "description": "Cook the beef." },
    { "order": 3, "description": "Add tomato sauce." }
  ],
  "categories": ["Dinner", "Pasta"]
}
What made you decide when to embed information? What assumptions did you make?
I was thinking about how to organize all the data from MySQL into a single object to make reading a recipe more convenient. I realized that MongoDB makes it easier to structure everything in one place, which simplifies both reading and querying the data.

If you were given MySQL and MongoDB as choices to build the recipe's database at the beginning, which one would you choose and why?
I would choose MongoDB for storing recipes because it simplifies reading the entire recipe. It’s very convenient to work with, especially when it comes to reading and retrieving complete data. In my opinion, SQL is great for transactions and makes updating data easier and more reliable. However, when it comes to reading complex, relational data — like recipes — it often requires multiple joins and queries to gather all the necessary information. In contrast, MongoDB allows you to store everything in a single document, which makes accessing the full recipe much easier.