# Receipt Saver
Sometimes you'll take a look at your bank statements and don't remember what you purchased for $235.23. With this app, you'll be able to remind yourself of previous purchases to ease this anxiety. Additionally you'll be able to reduce clutter of keeping track of physical receipts, and save time from shifting through emails and retailer sites to find information.

Video Walkthrough: https://youtu.be/jAOs4Lgt7mc

## Features 
- Register, Login, Logout 
- Dashboard to view personal receipts
- Upload, view, and delete receipts 
- Backend repo: https://github.com/DeezDiamond/receipts-backend

## Technologies Used 
- Frontend: 
> - ReactJS, JavaScript, HTML, CSS

- Backend: 
> - Python, Django with RESTful API 

## User stories
- As a user, I want to be able to view all my receipts in a single place so I can remind myself of past purchases I may have forgotten about. 
- As a user, I want to be able to perform CRUD operations as necessary to maintain receipts on my account. 

## Wireframes
![image](https://media.git.generalassemb.ly/user/30672/files/6e18e380-3994-11eb-8304-a259afe83fc6)
![image](https://media.git.generalassemb.ly/user/30672/files/796c0f00-3994-11eb-97a4-7cf2f23ae11b)
![image](https://media.git.generalassemb.ly/user/30672/files/afa98e80-3994-11eb-8075-76e45c230f3e)
![image](https://media.git.generalassemb.ly/user/30672/files/0f546980-3996-11eb-82ae-a599744e4174)
![image](https://media.git.generalassemb.ly/user/30672/files/c2bc5e80-3994-11eb-9a01-cdf53e52b177)

## Installation Instructions 
- Clone this repository with `git clone ` and copying and pasting the SSH link into the terminal. 
- Navigate into the download location, then install dependencies with `npm install`
- Open the directory with `code .`
- To start the front end server, either run `npm start` in the terminal, or under NPM Scripts in VS Code press Start. Once the server is running, navigate to http://localhost:3000/

## Contribution Guidelines 
- If there is a bug with the app, please provide the following information when submitting a bug report.
> - What you were attempting to do (add submission, update, etc.)
> - Device used (PC, mobile device)
> - Screenshots
> - Steps to recreate the error

## Currently Known Issues
- December 29, 2020: Redirects now function properly for registration, logging in, and uploading a receipt. 

- December 20, 2020. Updating a receipt now works. However, all fields must be filled in in order for the update request to go through. 

## Credit
- Routes and creating a dashboard: https://codeburst.io/to-handle-user-authentication-with-reactjs-2f565e7e0d63
- Persisting a Login token: https://www.freecodecamp.org/news/how-to-persist-a-logged-in-user-in-react/
- Custom RESTful backend and user interface: https://git.generalassemb.ly/sei-921/drf-token-auth