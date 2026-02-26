# N106 Roomate Tracker

[My Notes](notes.md)

This application allows access to a camera facing the front door of our apt. It tracks motion and will use AI to detect who is entering, and this website allows access to that data. It will show the live feed, which of the roomates is in the apt, as well as being able to access the logs of who came and went when. It also will have a messaging service so that users can message eachother.


## 🚀 Specification Deliverable

- [x] Input elevator pitch
- [x] Made design
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] Made the rough design image

### Elevator pitch

Do you ever with that you could see when your roomates were in the apartment but you aren't there and you don't want to install cameras in the whole apartment? With this app you will be able to see who was in your apartment and when, labeling times your roomates came or left, other people who entered or exited, as well as allowing for sending messages to roomates who are also on the website.

### Design

![Design image](WebsiteDemo-1.jpg)

The homescreen will have the live video feed, a table of who is currently in the apartment, a photo of who entered most recently, as well as an area to chat with anyone else online. 

```mermaid
sequenceDiagram
    actor You
    actor Camera
    actor Website
    You->>Website: Accessing the info on the website
    Camera->>Website: Provides the website with the data to display
```

### Key features

- View live video from camera
- Table of who is in the apt and if not when they left
- A chat feature between those online
- Storing of who entered and exited and when


### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Make the basic webpages
- **CSS** - Styled the page, set a color scheme, and made it look nice.
- **React** - Used to help users login as well as helping display the photos and videos and tables of data
- **Service** - Used to help with loginging as well as storing messages sent, and saving who data from the camera
- **DB/Login** - Database of who entered and when as well as unknown users
- **WebSocket** - Chat services as well as any data updates for who is in the apartment, so that it can be live

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://yourdomainnamehere.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - I made the basic pages for index.html, camera.html, database.html, message.html
- [x] **Proper HTML element usage** - Set up the header and footer that was used for each page
- [x] **Links** - I put in links to the different pages as well as added some buttons that link between pages
- [x] **Text** - I put some text in for different things like the message page as well as the database
- [x] **3rd party API placeholder** - I put a table at the bottom to show the weather info
- [x] **Images** - I added a video that will be the live camera feed
- [x] **Login placeholder** - I set up the login page in the index.html page
- [x] **DB data placeholder** - I made the database.html page that will track when people enter and exit
- [x] **WebSocket placeholder** - I got a page set up so that people will be able to messag eachother

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Visually appealing colors and layout. No overflowing elements.** - Used a flex layout and set scaling for most things
- [x] **Use of a CSS framework** - Used bootstrap for database.html for the table
- [x] **All visual elements styled using CSS** - Done
- [x] **Responsive to window resizing using flexbox and/or grid display** - The window scales and set min size for things that needed it
- [x] **Use of a imported font** - Used the Star-shield-2 font
- [x] **Use of different types of selectors including element, class, ID, and pseudo selectors** - I did this

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Bundled using Vite** - I did this
- [x] **Components** - Done
- [x] **Router** - Done

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **All functionality implemented or mocked out** - I did this
- [x] **Hooks** - Done

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.

## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
