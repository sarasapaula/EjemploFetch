# React Native example with Fetch API

This project includes an example of Fetch API

# Preview

![/assets/imgs/demo.jpg](./assets/imgs/demo.jpg)

# Installation

1. Install [node.js](https://nodejs.org/en/)
2. Install Expo

   ```jsx
   npm install --global expo-cli
   ```

3. Download this repo
4. Install deps on your template folder

   ```jsx
   npm install
   ```

5. Start the environtment

   ```jsx
   expo start
   ```

### API Setup

- Create an API Key in the site: https://www.themoviedb.org/documentation/api
- Fill apiKEY variable in  `./src/controller/controller.js`

```jsx
// Better put your these secret keys in .env file
export const getMovies_fetch = async (sendData) => {
    try {
    const url ="https://api.themoviedb.org/3/discover/movie?api_key=";
    const discover= "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
    const apiKEY=""; //Your api Key
```



# Argon Template

![demo.jpg](https://github.com/sarasapaula/AccesoGaleriaImg/blob/main/assets/argonDemo.jpg)

These UI components are provided by [Creative Tim](https://www.creative-tim.com/?_ga=2.265265039.1836437136.1652640077-640272839.1648788668).

