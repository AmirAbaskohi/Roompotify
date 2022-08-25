# Roompotify
This is a simple collabrative music playing system called Roompotify which uses `Spotify` for finding music. Back-end is implemeted in `Django` and front-end is implemented in `React`.


## Frontend packages
To install needed packages for frontend use below commands:
```
npm i webpack webpack-cli --save-dev
npm i @babel/core babel-loader @babel preset-env @babel/preset-react --save-dev
npm i react react-dom --save-dev
npm install @material-ui/core
npm install @babel/plugin-proposal-class-properties
npm install react-router-dom
npm install @material-ui/icons
npm install @material-ui/lab
```

## How to run?
Run server using running below command in next to `manage.py` file:
```
python manage.py runserver
```

In addition, run the react application by running below command in `frontend` app directory:
```
npm run dev
```
