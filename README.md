# on-the-menu

This is a recipe web application. The Edamam API is used to retrieve recipe and meal suggestions. Currently, the user can opt to receive a random selection of recipes, or they can receive suggestions based on a query and a selection of filters.

## How to run this project.

1. Clone the repository.

2. Create a .env file in the project root directory. Here, you should declare three variables:

   - PORT < the port on which you want to runt the project>
   - APP_EDAMAM_ID <your personal edamam ID, for the api>
   - APP_EDAMAM_KEYS <your personal edamam key, also for the api>

3. The Node server is started by running the following command in a terminal:
   `$ npm start`

4. The React client is started by running the following commands in a terminal:
   `$ cd client`
   `$ npm start`

### Next steps:

I will add user authentication. This will allow users to store their favourite recipes, as well as check what ingredients they already have in storage.
