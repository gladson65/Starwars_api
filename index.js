$(document).ready(function() {
  
   // register a event
   $(".btn").on("click", function(e) {
      e.preventDefault();

      let $randomNum = Math.round(Math.random() * 88);
      $.get(`https://akabab.github.io/starwars-api/api/id/${$randomNum}.json`, function (data) {
         

         $(document).on({
            ajaxStart: function () {
               $(".img").html("<span class='img-text'>Loading...</span>")
               $(".name").html(`Name: ${data['name']}`)
               $(".homeworld").html(`HomeWorld: <span class='loading-style'>loading...</span>`)
               $(".haircolor").html(`Haircolor: <span class='loading-style'>loading...</span>`)
               $(".eyecolor").html(`Eyecolor: <span class='loading-style'>loading...</span>`)
               $(".skincolor").html(`Skincolor: <span class='loading-style'>loading...</span>`)
            },
            
            ajaxStop: function () {
               $(".img").html(`<img src="${data['image']}" alt="${data['name']}" width=100%, height=100%/>`)
               $(".name").html(`Name: ${data['name']}`)
               $(".homeworld").html(`HomeWorld: <span>${data['homeworld']}</span>`)
               $(".haircolor").html(`Haircolor: <span>${data['hairColor']}</span>`)
               $(".eyecolor").html(`Eyecolor: <span>${data['eyeColor']}</span>`)
               $(".skincolor").html(`Skincolor: <span>${data['skinColor']}</span>`)
            },
         })
         
         
      })

   
   })

})


