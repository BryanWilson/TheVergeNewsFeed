//This function loads what ever function you want to load right when the page loads//


$(document).ready(function () {



});

var jsonDataNewsFeedGlobal

//getNewsFeed();
//checkNewsFeed1();
//checkNewsFeed2();


var jsonDataNewsFeedGlobal = $.getJSON('https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=938c99f8bd25454ab488d241db84b493');

jsonDataNewsFeedGlobal.done(function(data) {
  console.log(data);
    alert("check is done");
});

//TODO Try evoking the function in order in the document.ready function 





//This function does all of the important work, it grabs the news feeds JSON data and sets it equall to the global variable "jsonDataNewsFeedGlobal" for later use. it then runs the checkNewsFeed function we created so that we can trouble shoot in the console if need be.// 

//https://stackoverflow.com/questions/14172392/jquery-promise-with-getjson-and-callback

/////////////////////////////////////////////
//function getNewsFeed() {
//    $.getJSON("https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=938c99f8bd25454ab488d241db84b493", 'jsonp', function (jsonDataNewsFeedLocal) {
//        // $("#output").html(JsonDataNewsFeed.articles[1].title  + " " + JsonDataNewsFeed.articles[1].publishedAt);
//        jsonDataNewsFeedGlobal = jsonDataNewsFeedLocal;
//        alert("news feed is done loading")
//
//    });
//}
//
//
////Use this to check the console to make sure JSON data is successfully being grabbed from the "getNewsFeed" function and successfully being set equal to the variable "jsonDataNewsFeedGlobal" we want this variable to be accessible globaly at all times//
//function checkNewsFeed1() {
//
//    .done(function (jsonDataNewsFeedGlobal) {
//        console.log(jsonDataNewsFeedGlobal);
//        alert("check2");
//    });
//}
//
//function checkNewsFeed2() {
//    if (jsonDataNewsFeedGlobal) {
//        console.log(jsonDataNewsFeedGlobal);
//        alert("check2");
//    }
//}

////////////////////////////////////////////
//This needs to be established globaly to work// 


/*INSERT JAVASCRIPT AND JQUERY HERE*/
