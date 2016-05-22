console.log('this is the home page scripts');


 var img = document.createElement('img');
 img.style.height = "25%";
img.style.width = "25%";
img.src = require('../images/webpack_logo.png');

document.getElementById('img_container').append(img);

//require('../css/bootstrap.css');
require('../css/app.scss');
require('../css/app.less');
require('../css/app.css');
