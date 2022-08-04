const cheerio = require('cheerio');
const axios = require('axios');

const express = require('express');
// const fs = require('fs');
// app = express();

let url = 'https://icanhazdadjoke.com/';

const http = require('http');

const server = http.createServer((req, res) => {
  let final_ = [];
  console.log('req made');
  axios(url).then((response) => {
    const data = response.data;
    // console.log(data);
    // res.setHeader('Content-Type', 'text/html');
    // res.write(data);
    // res.end();

    const $ = cheerio.load(data);

    $('.subtitle', data).each(function () {
      const result = $(this).text();
      final_.push(result);
      console.log(final_[1]);
    });
  });
});

server.listen(3000, 'localhost', () => {
  console.log('Listening for requests in port 3000');
});
