# ColaCo-Vending-Machine

# Component Tree
<pre>
|-App <br />
   |-Homepage  <br />
        |-UserLogin?: |-SignUp?: |-Welcome (Conditional rendering)  <br />
        |-VendingMachine  <br />
        |-ProductSlot    <br />
            |-AdminPower  <br />
</pre>
# SET UP
1. npm install
2. npm run build
3. npm start
4. add .env file to the root directory and copy & paste the following `MONGODB_URI = mongodb+srv://admin:Password123@cluster0.yeebw.mongodb.net/colaco?retryWrites=true&w=majority` for access to MongoDB. 
5. go to your browser on http://localhost:3000/

# Admin Access
user: admin  
password: password  

Account sign up with be defaulted to regular, non-admin access.

# API routes
Regular users will only see the default screen. Logging on as admin will show additional options for the vending machine. The initial purpose of doing user sign-up was to implement a currency system. Sign up works, but currency system is not complete.

So simply, click purchase to download your drink (while supplies last).

Admin, will be able to see current stock, restock, and update price.

API routes are called from form submissions. They interact with the MongoDB. There were two collections used, users and products (see the models folder for the schemas).
