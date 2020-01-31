# GLU Apex Legends Tracker

>> This app was created using Vue + NodeJS and it's deployed on heroku on this link: glu-apextracker.herokuapp.com/


## How it works

This is an app with which you can request user information from a game called **"Apex Legends"**. It does this by using the **Apex Tracker API** sending information back and forth. If you fill in your **username** and **platform** and click send you will recieve information about that account.
It uses a routing system using both Express and Vue to make sending/getting info clean and easy to understand.

**I've registered an API key on this link and used it to gather user information**
https://tracker.gg/developers

### App
I've tried usign Cordova to warp this into an APK package but that didn't work, so I used a site called PWA2APK to turn it into an APK file. This meant I was supposed to add a .well-known folder to my public directory to tell the mobile device it's an android app.

https://gofile.io/?c=10iL5c


## To run it yourself

```bash
# Git clone this repository
git clone https://github.com/Alphaegen/gluapextracker.git

# Install all packages needed for the backend part of the application
npm install

# Install all packages needed for the frontend part of the application
cd client
npm install

# Serve the app on localhost
npm run dev

# Build for production
cd client
npm run build
# Result files end in /public/
```

### License

This project is licensed under the MIT License
