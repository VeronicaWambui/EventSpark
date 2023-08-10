# EventSpark.
Eventspark is an events management platform built using React for frontend interaction with a python Flask api backend service.

## Project requirements.
Adopt Scrum methodology for project management.

### Initial sprint.
Establish a backend service using the python Flask framework.
Setup and use sqlite for database related queries.
Test endpoints and related functionality i.e CORS, Authentication using postman.
Deploy API to a live endpoint for consumption by the frontend.

### Final sprint.
Create new react application with the npm create-react-app {eventspark}.
Deploy preliminary appliation to Vercel.
Style application using css to include a landing page, minimum of two working links including an about section for the project.
Perform asynchronous requests to the API endpoints and display data on the page.
Test functionality of the workings of various components.

## API service deployment.
The API to this application has been deployed separately from the frontend.To interact with the api service; open [https://eventspark-api-service.onrender.com/](https://eventspark-api-service.onrender.com/) and add the suffix api/v1/{endpoint} to this root url.
Available endpoints include:

### User.
api/v1/user - Deals with all user related Create, Read, Update and Delete operations.

#### User Roles.
The application accepts three user roles being; a regular user, an organizer and an administrator. The administrator reserves the right to elevate/demote any user to/from administrator status through a PUT request.

### Event.
api/v1/event - Deals with all event related Create, Read, Update and Delete operations.

### Authentication.
api/v1/login - Authentication endpoint to the application.

## Preview
You can view a preview of the project process in the screenshots folder in the application root.

## Project Initialization
In the project directory, you can run:

### `npm start`
Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Deployed live application.
You can also view the deployed application on vercel. Open [https://eventspark.vercel.com](https://eventspark.vercel.com)

### Team
This project has been created by Veronica Wambui Wanjiku as fulfilment of a portfolio project for the ALX - Software Engineering Programme.
&copy;2023.


