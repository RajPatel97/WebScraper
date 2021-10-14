const axios = require('axios');
const cheerio = require('cheerio');
const { response } = require('express');
const express = require('express');
const PORT = 8000;


const app = express();
const URL ="https://www.theguardian.com/us";//the urn to scrape from 
axios(URL)
    .then(response=>{
        const html = response.data;
        const $ = cheerio.load(html);
        const articles = [];
        $('.fc-item__title',html).each(function(){//this is grabbing the tags with this classname 
            const title = $(this).text();//this is grabbing the text from the tags
            const url = $(this).find('a').attr('href');//this is getting the url that the tags lead to on click 
            articles.push({
                title,
                url
            })//pushing this object of title and url into the array 
        })
        console.log(articles)
    }).catch(err => console.log(err))

//app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));//listens to the port 

