1. **Which columns break 1NF?**
- Each cell must have one single value (atomic).
- No lists or repeated values in one cell.
  <br>**These columns break 1NF:**
<br>`food_code → example: C1, C2`
<br>`food_description → example: Curry, Cake`


2. **What entities can we extract?**
   We can create 5 entities (tables):

- Members → `people who join the dinner.`

- Dinners → `dinner events.`

- Venues → `places where dinners happen.`

- Foods → `food items served.`

Connections → who ate what, where, and when.

3. **Name all the tables and columns that would make a 3NF compliant solution.**
   - Members
   `member_id	Primary Key`
   `member_name	Text`
   `member_address	Text`

   - Dinners
   `dinner_id	Primary Key`
   `dinner_date	Date`
   `venue_code	Foreign Key → Venues.venue_code`

   - Venues
   `venue_code	Primary Key`
   `venue_description	Text`

   - Foods
   `food_code	Primary Key`
   `food_description	Text`

   - Member_Dinner
   `member_id	Foreign Key → Members.member_id`
   `dinner_id	Foreign Key → Dinners.dinner_id`
   
