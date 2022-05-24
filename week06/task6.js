const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://edamam-recipe-search.p.rapidapi.com/search',
  headers: {
    'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com',
    'X-RapidAPI-Key': 'c662858380mshdd89ec9a90bbb92p1cf8b3jsn52fb7dde3e66'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});