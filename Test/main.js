var grid=document.getElementById('grid');
var banner=document.getElementById('banner_img');
var banner_link=document.getElementById('banner-redirect')

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function open_link(movie_name)
{
  var para = new URLSearchParams();
  para.append("movie", movie_name);
  location.href = "./display?" + para.toString();
}

$(function () {
    $.getJSON('./movies.json', function (data) {
        banner.src = "./movies/"+data.movies[0].name+"/poster.jpg";
        banner_link.href="./display/?movie="+data.movies[0].name;
        function change()
        {
          var rand=getRandomInt(0,data.movies.length);
          banner_link.href="./display/?movie="+data.movies[rand].name;
          banner.src = "./movies/"+data.movies[rand].name+"/poster.jpg";
        }
        setInterval(change, 5000);
        for (var movie in data.movies) {
            grid.innerHTML+='<a href="./display/?movie='+data.movies[movie].name+'" target="_blank">\
            <div class="movie-card">\
              <div class="card-head">\
                <img src="./movies/'+data.movies[movie].name+'/banner.jpg" alt="" class="card-img">\
                <div class="card-overlay">\
                  <div class="play">\
                    <ion-icon name="play-circle-outline"></ion-icon>\
                  </div>\
                </div>\
              </div>\
              <div class="card-body">\
                <h3 class="card-title">'+data.movies[movie].name+'</h3>\
              </div>\
            </div>\
          </a>'
        };
    })

});

