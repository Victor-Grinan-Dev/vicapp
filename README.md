# [App-Base]-App

## About:

[App-Base] App is an Application template that can be used as the start of any react application just clone and have fun with it.

## Technologies:

- React

  ```shell
  npm i react-router-dom

  ```

- Redux

  ```shell
  npm i @reduxjs/toolkit
  npm i react-redux
  ```

- Axios

  ```shell
  npm i axios
  ```

- Json-server

  ```shell
  npm i json-server
  ```

  create in the root of you project a db.json file and populate it with:

  ```json
  {
    "database": {
      "dataStr": "data1",
      "dataArr": ["data2", "data3", "data4"],
      "dataObj": {
        "data5": "data5",
        "data6": "data6",
        "data7": "data7"
      }
    }
  }
  ```

  go to package.json and add:

  ```json
  "server": "json-server -p8010 --w db.json"
  ```

  make sure that this port 8010 is the same in the file api/axios.js line 4

- Material Ui
  ```shell
  npm install @mui/material @emotion/react @emotion/styled
  ```
- Github

- localstorage

## Data from:

- Restcountries: https://restcountries.com/v3.1/
- Openweathermap: https://openweathermap.org
- pokeApi

## Images & videos from:

- unsplash: https://source.unsplash.com
- Pexel: https://www.pexels.com

## Icons from:

- Pngwing: https://www.pngwing.com/

## Installation:

- create a profile in open weather api https://openweathermap.org/api
- create a key of your own.
- change the key in the .env file for your own
- clone the repo
- cd into it
- npm i
- npm start

if you are using the local server open a new terminal in your IDE and type:

```shell
  npm run server
```

## check it OnLine:

- https://victor-grinan-dev.github.io/countries_app1/
