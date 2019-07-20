# Angular-Furniture-System
### Basic single page app resembling online furniture store

This is an Angular workshop project that has its own server built with Express, Node.js and MongoDB. The app also uses Bootstrap for styling and Toastr for notification messages.

The app uses Observables, Interceptors, Routing, Route Guards, Interfaces, Template-driven and Reactive forms, Pipes and other Angular features. It supports error handling and data validation of the input fields, as well as all CRUD operations. 

The Furniture system has three levels of access - Guest users, Logged in users and Admins. 

The **guest users** can view the **Welcome page**, **Login page** and **Register page**.

The **logged in user** has access to **All furniture page**, **Details page**, his **Profile page** with all his pieces of furniture (here he can choose to delete one), **Create furniture page** and he can logout.

The **Admin** is automatically seeded at the start of the application (with email 'admin@admin.com' and pass 'admin123'). He can access all the functionality of the logged in user but is also able to edit (by visiting the **Edit page**) or delete any furniture at the store.  
