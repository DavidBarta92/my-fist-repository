$(document).ready(function(){ 

  let image1 = {
      photo: "images/1.jpg",
      title: "My title 1",
      description: "My description",
  };
  let image2 = {
      photo: "images/2.png",
      title: "My title 2",
      description: "My description",
  };
  let image3 = {
      photo: "images/3.jpg",
      title: "My title 3",
      description: "My description",
  };
  let image4 = {
      photo: "images/4.jpg",
      title: "My title 4",
      description: "My description",
  };
  let image5 = {
      photo: "images/5.jpg",
      title: "My title 5",
      description: "My description",
  };
   let image6 = {
      photo: "images/6.png",
      title: "My title 6",
      description: "My description",
  }; 
  let image7 = {
      photo: "images/7.png",
      title: "My title 7",
      description: "My description",
  }; 
  
  let imagesData = [image1, image2, image3, image4, image5, image6, image7];
  let dataSize = imagesData.length;    

// Number + Arrows + addBigImage
  let currentNum = 0;

  let loadCurrentNum = (Number) => {
      //$("#current-num").text(Number);
     // $("#current-num").css('background', 'rgb(180, 70, 70)');
  }

  $('.previous').click(() => {
     if(currentNum > 0) {
         currentNum--;
     } else if (currentNum <= 0){
         currentNum = dataSize-1;
     }
     loadCurrentNum(currentNum);
     addBigImage(currentNum);
  });

  $('.next').click(() => {
     if(currentNum < dataSize-1) {
         currentNum++;
     } else if (currentNum >= dataSize-1) {
      currentNum = 0;
     }
     loadCurrentNum(currentNum);
     addBigImage(currentNum);
  });
  loadCurrentNum(currentNum); 
  addBigImage(currentNum);

  function addBigImage(curNum){
      $(".imageView").empty();
      $(".imageView").append
          (`
                  <img class = "mainPic" src="${imagesData[curNum].photo}">
                  <div id = "grayContainer">
                      <h1 id="photoTitle">${imagesData[curNum].title.trim()}</h1>
                      <p id="photoDescription">${imagesData[curNum].description.trim()}</p>
                  </div>
              `)
  }

//Thumbnails section

  imagesData.forEach((img) => {
      $('#thumbnails').append('<div class="thumbsContainer"><img class="smallBox" src="' + img.photo + '"><div class="popUpText">' + img.title + '</div></div>');
    $('.smallBox').css('border-radius', '5px');
  });

  $('#thumbnails').on('click', '.smallBox', function () {
      currentNum = $(this).index('.smallBox');
      addBigImage(currentNum);
 });
});