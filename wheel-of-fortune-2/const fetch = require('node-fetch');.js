const fetch = require('node-fetch');

const playlistId = '0a96c027c7be4af9'; // This is the ID of the playlist you want to retrieve
const accessToken = 'your_access_token'; // Replace with your access token


const options = {
  headers: {
    Authorization: 'Bearer BQDBKJ5eo5jxbtpWjVOj7ryS84khybFpP_lTqzV7uV-T_m0cTfwvdn5BnBSKPxKgEb11'
  }
};

fetch(`https://api.spotify.com/v1/playlists/0a96c027c7be4af9}`, options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));