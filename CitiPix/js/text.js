  $(document).ready(function() {
      console.log( "ready!" );


    $("#submitbtn").click(switchBackground);

    function switchBackground(event) {
      event.preventDefault();
      var city == $("#cityname").val();
      city=city.toLowerCase();

      if (city == "new york" || 
          city == "nyc" || 
          city == "new york city") {
        $("body").attr("class","nyc"); /*attr adds and removes for you, so you can use for making images change on click*/
      }
/*
      else if (city == "san francisco" || 
          city == "sf" || 
          city == "san fran") {
        $("body").attr("class","sf"); 
      }

         else if (city == "los angeles" || 
          city == "la" || 
          city == "las angeles") {
        $("body").attr("class","la"); 
      }

         else if (city == "austin" || 
          city == "austin" || 
          city == "austin") {
        $("body").attr("class","austin"); 
      }

         else (city == "sydney" || 
          city == "sydney" || 
          city == "sydney") 
        $("body").attr("class","sydney"); 
      }
*/

}
  });