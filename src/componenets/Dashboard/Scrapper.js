
const $ = require('cheerio');
const rp = require('request-promise');
const url = 'https://www.baps.org';

function getData(){
rp(url).then((html)=>{
    //success!
        // console.log($('.whatsnew_list li',html).text());
    let itemList = [];    
    $('.whatsnew_list',html).each(function(idx,li){
                    // itemList.push($(li).text());
            var s = $(li).text();
            itemList.push(s);           
            console.log(itemList);               
        })
    }).catch(function(err){
        console.log(err)
    });


}

module.exports = getData();