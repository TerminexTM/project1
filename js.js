console.log($);


$(()=>{
  //carousel click to find info
  let indexNum = 1;
  let indexMax = 671;
 //future code will live update when the website increases character count.
//   $.ajax({
//      url: 'https://rickandmortyapi.com/api/character/'
//  }).then(
//     (data) => {
//       console.log(data.info.count);
//       $('.next').on('click', ()=>{
//          if(indexNum<data.info.count)
//       })
//    }
// )
  $.ajax({
    url: "https://rickandmortyapi.com/api/character/" +indexNum
}).then(
      (data) => {
        console.log(data);
        $('<img>').attr('src', data.image).appendTo('.images');
        $('.next').on('click', ()=>{
           if(indexNum<indexMax){
             indexNum++
          }else{
             indexNum=1
          }
           $.ajax({
             url: "https://rickandmortyapi.com/api/character/" +indexNum
          }).then(
             (data) => {
                $('.images').empty();
                $('<img>').attr('src', data.image).appendTo('.images');
                console.log(data);

             })
        })
        $('.back').on('click', ()=>{
          if(indexNum>1){
            indexNum--
         }else{
            indexNum=indexMax
         }
          $.ajax({
            url: "https://rickandmortyapi.com/api/character/" +indexNum
         }).then(
            (data) => {
              $('.images').empty();
              $('<img>').attr('src', data.image).appendTo('.images');
              console.log(data);

            })
       })
        //iterate indexNum to go up and down to display new images for carousel

      })
//search engine goto function
  $('form').on('submit', (event)=>{
    event.preventDefault();
    const userInput = $('input[type="text"]').val();

    $.ajax({
      url: 'https://rickandmortyapi.com/api/character/?name=' + userInput
      }).then(
          (data) => {
             //when searching a character, change indexNum to be new id of character
            console.log(data.results[0]); //must include results[0] to grab 1 search
          }
        )



  })













})
