# MyWay
## About Application
- **Purpose**  

- **Tech stack**  
  This app is based on MERN stack. 
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
- **Target audience**





## Dataflow Diagram
![dataflow diagram](./docs/Dataflow_Diagram.jpeg)  
  
## Application Architecture Diagram
![application architecture diagram](./docs/Application_Architecture_Diagram.jpeg)  
  
## User Stories  
[Excel sheet for user story](https://onedrive.live.com/view.aspx?resid=6E0FC3D2BFB74104!129&ithint=file%2cxlsx&authkey=!AG1EELNirMpapYc)  
All the user stories are start as a traveler. We assume that if we are a traveler, what we want to get from this web app. Then, we assume that if we are the owner of this app, how can we manage it. Finally, we add a few more features we'd like to see as a normal user. Here are the screenshot of the process of completing the user stories. You also can find the final excel from the link above.
![dataflow diagram](/docs/userStory/user_story_start.png)   
  
![dataflow diagram](/docs/userStory/add_admin_to_user_story.png)   

![dataflow diagram](/docs/userStory/final_user_story.png) 
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


## Wireframes  
**Humburger menu for movile**  
- When the user hasn't log in    
![humburger menu when user hasn't login](./docs/Wireframe/iPhone-humburger(when%20user%20didn't%20log%20in)%20.jpg) 

- When the user logged in  
![humburger menu when user logged in](./docs/Wireframe/iPhone-humburger(when%20the%20user%20log%20in).png)  

- When the admin user logged in  
![humburger menu when admin logged in](./docs/Wireframe/iPhone-humburger(when%20the%20admin%20log%20in).jpg)

**Sign up form**   
- movile  
![sign up form for movile](./docs/Wireframe/iPhone-Sign%20up%20form.jpg)   
 
- Tablet    
![sign up form for tablet](./docs/Wireframe/iPad-Sign%20up%20form.jpg)   

- Desktop    
![sign up form for desktop](./docs/Wireframe/Desktop%20-Sign%20up%20form.jpg)  


**Log in form**  
- movile   
![log in form for movile](./docs/Wireframe/iPhone-Log%20in%20form.jpg)   

- Tablet   
![log in form for tablet](./docs/Wireframe/iPad-Log%20in%20form.jpg)  

- Desktop  
![log in form for desktop](./docs/Wireframe/Desktop-Log%20in%20form.jpg)  


**Top Page**  
- movile   
![top page for movile](./docs/Wireframe/iPhone-Top%20Page.jpg)   
  
- Tablet   
![top page for tablet](./docs/Wireframe/iPad-Top%20Page.jpg)   
 
- Desktop  
![top page for desktop](./docs/Wireframe/Desktop-Top%20Page.jpg)  

**Site list Page**  
- movile   
![Site list Page for movile](./docs/Wireframe/iPhone-Sites%20Page.jpg)   

- Tablet  
![Site list Page for tablet](./docs/Wireframe/iPad-Sites%20Page.jpg)  

- Desktop   
![Site list Page for desktop](./docs/Wireframe/Desktop%20-Sites%20Page.jpg)  
 

**Site Page**  
- movile  
![Site Page for movile](./docs/Wireframe/iPhone-Site%20Page.jpg)   

- Tablet   
![Site Page for tablet](./docs/Wireframe/iPad-Site%20Page.jpg)   

- Desktop   
![Site Page for desktop](./docs/Wireframe/Desktop-Site%20Page.jpg)   


**Site create form**  
- movile   
![Site create form for movile](./docs/Wireframe/iPhone-Site%20create%20form.jpg)  

- Tablet  
![Site create form for tablet](./docs/Wireframe/iPad-Site%20create%20form.jpg)  

- Desktop   
![Site create form for desktop](./docs/Wireframe/Desktop-Site%20create%20form.jpg)  


**Site update form**   
- movile (Tablets and desktops are the same as the creation form except for the buttons, so the wireframes are mobile only.)  
![Site update form for movile](./docs/Wireframe/iPhone-Site%20update%20form.jpg)   


**Blog list Page**   
- movile   
![Blog list Page for movile](./docs/Wireframe/iPhone-Blog%20Page.jpg)  

- Tablet  
![Blog list Page for tablet](./docs/Wireframe/iPad-Blog%20Page.jpg)   

- Desktop   
![Blog list Page for desktop](./docs/Wireframe/Desktop-Blog%20Page.jpg)  


**Blog article Page**  
- movile  
![Blog article Page for movile](./docs/Wireframe/iPhone-Blog%20Article.jpg)   

- Tablet  
![Blog article Page for tablet](./docs/Wireframe/iPad-Blog%20Article.jpg)  
 
- Desktop  
![Blog article Page for desktop](./docs/Wireframe/Desktop%20-Blog%20Article.jpg)  


**Blog create post form**   
- movile   
![Blog create post form for movile](./docs/Wireframe/iPhone-Blog%20create%20form.jpg)   

- Tablet   
![Blog create post form for tablet](./docs/Wireframe/iPad-Blog%20create%20form.jpg)  

- Desktop  
![Blog create post form for desktop](./docs/Wireframe/Desktop-Blog%20create%20form.jpg)  

 
**Blog update post form**  
- movile (Tablets and desktops are the same as the creation form except for the buttons, so the wireframes are mobile only.)  
![Blog update post form for movile](./docs/Wireframe/iPhone-Blog%20update%20form.jpg)   

**My Home Page**   
- movile   
![My Home Page for movile](./docs/Wireframe/iPhone-My%20HOME.jpg)  

- Tablet  
![My Home Page for tablet](./docs/Wireframe/iPad-My%20HOME.jpg)  

- Desktop  
![My Home Page for desktop](./docs/Wireframe/Desktop-My%20HOME.jpg)  


**(For Admin) Site management Page**  
- movile   
![(For Admin) Site management Page for movile](./docs/Wireframe/iPhone-admin(SITE%20LIST).jpg)  

- Tablet   
![(For Admin) Site management Page for tablet](./docs/Wireframe/iPhone-admin(SITE%20LIST).jpg)  

- Desktop  
![(For Admin) Site management Page for desktop](./docs/Wireframe/Desktop-admin(SITE%20LIST).jpg)  


**(For Admin) User management Page**   
- movile   
![(For Admin) User management Page for movile](./docs/Wireframe/iPhone-admin(USER%20LIST).jpg)  

- Tablet  
![(For Admin) User management Page for tablet](./docs/Wireframe/iPhone-admin(USER%20LIST).jpg)   

- Desktop   
![(For Admin) User management Page for tablet](./docs/Wireframe/Desktop%20-admin(USER%20LIST).jpg)  
 

 ## Trello Board  
 [Trello Board link](https://trello.com/b/Uw6DU7pd/finalprojecta)