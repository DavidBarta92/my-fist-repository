$(document).ready(function(){ 

  let image1 = {
      photo: "images/1.jpg",
      title: "EuroRoute Bridge",
      description: "between Britain and France",
  };
  let image2 = {
      photo: "images/2.jpg",
      title: "Hudson River Bridge",
      description: "New York, USA",
  };
  let image3 = {
      photo: "images/3.jpg",
      title: "General Ulysses S. Grant Memorial Bridge",
      description: "Washington DC",
  };
  let image4 = {
      photo: "images/4.jpg",
      title: "Kerch Strait Bridge",
      description: "between Crimea and Russia",
  };
  
  let imagesData = [image1, image2, image3, image4];
  let dataSize = imagesData.length;    

  let currentNum = 0;

  let loadCurrentNum = (Number) => {
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
                      <h2 id="photoTitle">${imagesData[curNum].title.trim()}</h2>
                      <p id="photoDescription">${imagesData[curNum].description.trim()}</p>
                  </div>
              `)
  }

  imagesData.forEach((img) => {
      $('#thumbnails').append('<div class="thumbsContainer"><img class="smallBox" src="' + img.photo + '"><div class="popUpText">' + img.title + '</div></div>');
    $('.smallBox').css('border-radius', '100%');
  });

  $('#thumbnails').on('click', '.smallBox', function () {
      currentNum = $(this).index('.smallBox');
      addBigImage(currentNum);
 });
});