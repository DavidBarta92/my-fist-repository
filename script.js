let data = {
  photo: 'images/5.jpg',
  title: 'My title',
  description: 'What happened here, why is this a very nice image'
};

$('#photo').attr('src', data.photo);
$('#photo-title').data(data.title);