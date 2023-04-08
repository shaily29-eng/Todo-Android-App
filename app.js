import express from "express";
import User from "./routers/User.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import cors from "cors"; //cross origin:one URL to another URL

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
    useTempFiles: true,
  })
);
app.use(cors());

app.use("/api/v1", User);

app.get("/", (req, res) => {
  res.send("Server is working");
});











// Android app:
// —   Mean,auth,otp verification, db me store toga data
// —MERN Stack Project with OTP authentication, MongoDB, Express, NodeJS, React Native & Redux Toolkit

// >cd server
// >npm init
// >npm i express mongoose nodemailer dotenv cors
// >npm i jsonwebtoken
// >npm i bcrypt
//>npm i cookie-parser
//>npm i cloudinary (for images)
//>npm i express-fileupload

///////frontend commands neeche hai



//start with app.js and parallely everytime update config.env
// package.json:   "type":"module" :can use ES6 import/export commands
//set port 4000 in config
//>>npm run dev
//database.js file
//start with API 
//models->users.js; controllers->User.js; routers->User.js
//utils->sendMail.js: create account in mailtrap website and send mail-22:37
//utils->sendToken.js

//postman: post: localhost:4000//api/v1/register-->body-->form-data-->name,email,password(keys),put random value 
//and parallely check for mongoDB compass
//middleware->auth.js

//postman: post: localhost:4000//api/v1/verify-->body:raw:json-->{"otp":jfbm}
//postman: post: localhost:4000//api/v1/login-->body:raw:json-->{"email":"jfbm","password":"khfk"}
//postman: get: localhost:4000//api/v1/logout
//postman: post: localhost:4000//api/v1/addtask-->body:raw:json-->{"title":"task-1"},"description":"sample"}  
//postman: get: localhost:4000//api/v1/me(to get all our info)
//postman: put: localhost:4000//api/v1/updateprofile-->body:raw:json:{"name":"sample1"}
//postman: put: localhost:4000//api/v1/updatepassword-->json-->{"oldPassword":"password","newPassword":"00000000"}
//now u can logout and login with new password inserted now
//postman: post: localhost:4000//api/v1/forgetpassword-->json-->{"email":"gfgjfbm"}
//postman: put: localhost:4000//api/v1/resetpassword-->json-->{"otp":6748756,"newpassword":"password"}
//use mongodb.com webiste to create id and connect to see the databases and entries
//can deploy in netlify
//////////end of backend////////////////////////////////////////////////////


//frontend(main folder(not inside server like previous backend))
//>sudo npm install -g expo-cli
//>expo init (name the app as todoapp) --not working
//>sudo chown -R 501:20 "/Users/shailygoyal/.npm"
//>npx create-expo-app todoapp --template blank
//>cd todoapp
//>npm start
//>npm i @react-navigation/native @react-navigation/native-stack
//>npm i react-native-vector-icons react-native-paper
//>npm start
//>expo install expo-camera
//>expo install expo-image-picker
//>npm i react-redux @reduxjs/toolkit axios
//>expo build:android---error:so follow below steps:
//>sudo npm install -g eas-cli
//>npm install eas-cli
//>sudo chown -R $(whoami) /usr/local/lib/node_modules
//>sudo chown -R $(whoami) /usr/local/bin
//>npm install -g eas-cli
//>eas build -p android:  can download API from terminal's link






/////////frontend///////////////////////
//reactive native me app use krne ke liye use Expo CLI or classic react native CLI(begineer: expo cli use kro)
//todoapp folder automatically created--->has react native app folders and files inside it
//inside todoapp>>npm start
//Expo app in andiod app= same wifi in laptop and phone
//alternative: use emulator:andriod studio
//app.js: using Text and View in full text, add stylesheet
//Main.jsx
//all files under screen----
//Home.jsx
//Login.jsx
//Task.jsx
//Footer.jsx
//Register.jsx
//Camera.jsx
//redux toolkit used: create redux folder>>store.js,reducer.js,action,js
//redux->store.js,action.js,reducer.js
//Profile.jsx
//ChangePassword.jsx
//Verify.jsx
//ForgetPassword.jsx
//ResetPassword.jsx
//app.json
//asserts folder--all imgs

//todoapp>>npm start




///april 8 frontend building############################################
//Expo has its own Metro Bundler:app started
//here, using emulator from android studio:create virtual device from right panel:select device and R dowload
//terminal> a : to open android
//do clear terminal: npm i @react-navigation/native @react-navigation/native-stack
//auth required:so, redux toolkit implement 



//////////DONE////////////////////////////////////////////////











