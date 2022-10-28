# MyWay
## About Application
- **Purpose**  
The purpose of this application is to help travelers make the best of their trip. It provides travelers with the best places to do what they want to do, and allows them to share and reflect on their memories by sharing blogs. It also has the ability to search the weather of a destination from any screen without logging in, which is not found in other applications.

- **Target audience**  
The target audience is people who like to travel.

- **Tech stack**  
  This app is based on MERN stack. 
  On the front-end side, a dynamic HTML web interface is created by React. 
  The server-side development environment is Node.js, which enables the implementation of a JavaScript-based application backend. Express.js runs on Node.js and serves to simplify the processing of URL requests. MongoDB is the application's database, which manages data such as storing, updating, referencing, and deleting data in the application.

- **Functionality / features**  
  **a. For visitors without log in:**
  1. Visitors can create their own account and update their details including 'name', 'email' and 'password' anytime.
  2. Visitors can get information including map, descriptions and name of the sites recommended from the web app, but can't comment.
  3. Visitors can check the weather of each city in Australia in each page.  

  **b. For normal users already log in:**
  1. Users can get information including map, descriptions and name of the sites recommended from the web app and comment these recommendations.
  2. Users can post blogs and check all the blogs from themselves together in blogScreen. In addition, they can delete their blogs anytime. Each blog can be posted with one image.
  3. Users can comment other users' blogs.
  4. Users can check the weather of each city in Australia in each page.

  **c. For admin users:**
  1. Admin users have all the functions same as normal users.
  2. Admin users can manage the site recommendations, they can delete, create and update the information of site recommendations. 
  3. In addition, admin users can manage all the normal users. If admin users find some normal users post illegal information in their blogs, they are able to delete normal users. 
  4. Admin users are able to delete blogs as well.    

---
      
## Dataflow Diagram
![dataflow diagram](./docs/Dataflow_Diagram.jpeg)   
  
---  

## Application Architecture Diagram
![application architecture diagram](./docs/Application_Architecture_Diagram.jpeg)  
   
---
  
## User Stories  
[Excel sheet for user story](https://onedrive.live.com/view.aspx?resid=6E0FC3D2BFB74104!129&ithint=file%2cxlsx&authkey=!AG1EELNirMpapYc)  
All the user stories are start as a traveler. We assume that if we are a traveler, what we want to get from this web app. Then, we assume that if we are the owner of this app, how can we manage it. Finally, we add a few more features we'd like to see as a normal user. Here are the screenshot of the process of completing the user stories. You also can find the final excel from the link above.
![user story](/docs/userStory/user_story_start.png)   
  
![user story](/docs/userStory/add_admin_to_user_story.png)   

![user story](/docs/userStory/final_user_story.png)  

- As a traveler, I want to be able to securely log in, log out and change details of my account so my information only accessed for me.  
- As a traveller, I want to know about the application and what the feature of it so that I know if this app is appropriate for my situation.
- As a traveller, I want to see other travellers' photo so I can find more travling choices.  
- As a traveller, I want to see some recommendations from the app in different categories so I can find the place where I want to do something.
- As a traveler, I want to see the details of the recommended site so I can be sure it is the right place for me.
- As a traveller, I want to see other blog posts to see what I can do there before I travel.  
- As a traveller, I want to write a blog with a photo about my travel so it would be a memorable record.
- As a traveller, I want to comment on a blog article to ask something I want to know. 
- As a traveller, I want to check the weather of the place so I can make a plan easily. 
- As an admin of this web app, I want to control what sites should be recommended to the visitors so I can update them anytime.
- As an admin of this web app,  I want to be authorized to be able to delete blogs from common users so I can make sure all the blogs are legal and useful.
- As an admin of this web app, I want to be authorized to be able to delete common users so I can delete the user who posts a blog as an advertisement of illegal information.
- As an admin of this web app, I want to have the same features as a common user so I can do anything like them.

---  
  
## Wireframes   
**Humburger menu for mobile**  
- When the user hasn't log in  
<img src="./docs/Wireframe/iPhone-humburger(when%20user%20didn't%20log%20in)%20.jpg" alt="humburger menu when user hasn't login" width="200"/>  

- When the user logged in  
<img src="./docs/Wireframe/iPhone-humburger(when%20the%20user%20log%20in).png" alt="humburger menu when user logged in" width="200"/>  

- When the admin user logged in  
<img src="./docs/Wireframe/iPhone-humburger(when%20the%20admin%20log%20in).jpg" alt="humburger menu when admin logged in" width="200"/>  


**Sign up form**   
- mobile  
<img src="./docs/Wireframe/iPhone-Sign%20up%20form.jpg" alt="sign up form for movile" width="200"/>  
 
- Tablet  
<img src="./docs/Wireframe/iPad-Sign%20up%20form.jpg" alt="sign up form for tablet" width="300"/>  

- Desktop  
<img src="./docs/Wireframe/Desktop%20-Sign%20up%20form.jpg" alt="sign up form for desktop" width="500"/>  



**Log in form**  
- mobile  
<img src="./docs/Wireframe/iPhone-Log%20in%20form.jpg" alt="log in form for movile" width="200"/>  


- Tablet  
<img src="./docs/Wireframe/iPad-Log%20in%20form.jpg" alt="log in form for tablet" width="300"/>  


- Desktop  
<img src="./docs/Wireframe/Desktop-Log%20in%20form.jpg" alt="log in form for desktop" width="500"/>  


**About Page(app top page)**  
- mobile   
<img src="./docs/Wireframe/iPhone-Top%20Page.jpg" alt="top page for movile" width="200"/>  

  
- Tablet  
<img src="./docs/Wireframe/iPad-Top%20Page.jpg" alt="top page for tablet" width="300"/>  


- Desktop  
<img src="./docs/Wireframe/Desktop-Top%20Page.jpg" alt="top page for desktop" width="500"/>  


**Site list Page**  
- mobile  
<img src="./docs/Wireframe/iPhone-Sites%20Page.jpg" alt="Site list Page for movile" width="200"/>  

- Tablet  
<img src="./docs/Wireframe/iPad-Sites%20Page.jpg" alt="Site list Page for tablet" width="300"/>  
 

- Desktop  
<img src="./docs/Wireframe/Desktop%20-Sites%20Page.jpg" alt="Site list Page for desktop" width="500"/>  


**Site Page**  
- mobile  
<img src="./docs/Wireframe/iPhone-Site%20Page.jpg" alt="Site Page for movile" width="200"/>  


- Tablet  
<img src="./docs/Wireframe/iPad-Site%20Page.jpg" alt="Site Page for tablet" width="300"/>  

- Desktop  
<img src="./docs/Wireframe/Desktop-Site%20Page.jpg" alt="Site Page for desktop" width="500"/>  



**Site create form**  
- mobile  
<img src="./docs/Wireframe/iPhone-Site%20create%20form.jpg" alt="Site create form for movile" width="200"/>  


- Tablet  
<img src="./docs/Wireframe/iPad-Site%20create%20form.jpg" alt="Site create form for tablet" width="300"/>  


- Desktop  
<img src="./docs/Wireframe/Desktop-Site%20create%20form.jpg" alt="Site create form for desktop" width="500"/>  
 


**Site update form**  
- mobile (Tablets and desktops are the same as the creation form except for the buttons, so the wireframes are mobile only.)  
<img src="./docs/Wireframe/iPhone-Site%20update%20form.jpg" alt="Site update form for movile" width="200"/>  


**Blog list Page**  
- mobile  
<img src="./docs/Wireframe/iPhone-Blog%20Page.jpg" alt="Blog list Page for movile" width="200"/>  


- Tablet  
<img src="./docs/Wireframe/iPad-Blog%20Page.jpg" alt="Blog list Page for tablet" width="300"/>  


- Desktop  
<img src="./docs/Wireframe/Desktop-Blog%20Page.jpg" alt="Blog list Page for desktop" width="500"/>  



**Blog article Page**  
- mobile  
<img src="./docs/Wireframe/iPhone-Blog%20Article.jpg" alt="Blog article Page for movile" width="200"/>  


- Tablet  
<img src="./docs/Wireframe/iPad-Blog%20Article.jpg" alt="Blog article Page for tablet" width="300"/>  

 
- Desktop  
<img src="./docs/Wireframe/Desktop%20-Blog%20Article.jpg" alt="Blog article Page for desktop" width="500"/>  


**Blog create post form**  
- mobile  
<img src="./docs/Wireframe/iPhone-Blog%20create%20form.jpg" alt="Blog create post form for movile" width="200"/>  


- Tablet  
<img src="./docs/Wireframe/iPad-Blog%20create%20form.jpg" alt="Blog create post form for tablet" width="300"/>  
 

- Desktop  
<img src="./docs/Wireframe/Desktop-Blog%20create%20form.jpg" alt="Blog create post form for desktop" width="500"/>  


 
**Blog update post form**  
- mobile (Tablets and desktops are the same as the creation form except for the buttons, so the wireframes are mobile only.)  
<img src="./docs/Wireframe/iPhone-Blog%20update%20form.jpg" alt="Blog update post form for movile" width="200"/>  
 

**My Home Page**   
- mobile  
<img src="./docs/Wireframe/iPhone-My%20HOME.jpg" alt="My Home Page for movile" width="200"/>  


- Tablet  
<img src="./docs/Wireframe/iPad-My%20HOME.jpg" alt="My Home Page for tablet" width="300"/>  


- Desktop  
<img src="./docs/Wireframe/Desktop-My%20HOME.jpg" alt="My Home Page for desktop" width="500"/>  


**(For Admin) Site management Page**  
- mobile  
<img src="./docs/Wireframe/iPhone-admin(SITE%20LIST).jpg" alt="(For Admin) Site management Page for movile" width="200"/>  


- Tablet  
<img src="./docs/Wireframe/iPad-admin(SITE%20LIST).jpg" alt="(For Admin) Site management Page for tablet" width="300"/>  


- Desktop  
<img src="./docs/Wireframe/Desktop-admin(SITE%20LIST).jpg" alt="(For Admin) Site management Page for desktop" width="500"/>  



**(For Admin) User management Page**  
- mobile  
<img src="./docs/Wireframe/iPhone-admin(USER%20LIST).jpg" alt="(For Admin) User management Page for movile" width="200"/>  


- Tablet  
<img src="./docs/Wireframe/iPad-admin(USER%20LIST).jpg" alt="(For Admin) User management Page for tablet" width="300"/>  


- Desktop  
<img src="./docs/Wireframe/Desktop%20-admin(USER%20LIST).jpg" alt="(For Admin) User management Page for desktop" width="500"/>   
 

 ## Trello Board  
 [Trello Board link](https://trello.com/b/Uw6DU7pd/finalprojecta)
 