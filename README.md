# ColaCo-Vending-Machine

==============================================================================================================================================================================
Component Tree

App
|-Homepage
|-UserLogin?: |-SignUp?: |-Welcome (Conditional rendering depending on whether the user is logged on or clicked on the sign up/back button)
|-VendingMachine
|-ProductSlot  
==============================================================================================================================================================================

SET UP

1. npm install
2. npm run build
3. npm start
4. add .env file to the root directory with MONGODB_URI = mongodb+srv://admin:Password123@cluster0.yeebw.mongodb.net/colaco?retryWrites=true&w=majority
5. go to your browser on http://localhost:3000/

Admin Access

user: admin
password: password

Account sign up with be defaulted to regular, non-admin access.
==============================================================================================================================================================================

API routes

Regular users will only see the default screen. Logging on as admin will show additional options for the vending machine. The initial purpose of doing user sign-up was to implement a currency system. Sign up works, but currency system is not complete.

So simply, click purchase to download your drink (while supplies last).

Admin, will be able to see current stock, restock, and update price.

API routes are called from form submissions. They interact with the MongoDB. There were two collections used, users and products (see the models folder for the schemas).
