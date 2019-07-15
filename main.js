//Pop up after clicking 'VIEW' on home page.//
var ext_link = document.getElementById('external_link');
ext_link.addEventListener('click',
  function(event) {
      var is_sure = confirm('This link will take you to an external page.');
      if (is_sure === false) {
        event.preventDefault();
        alert ('Happy to have you stay.');
    }
  }, false
);

//Scroll over image for text on about page
const imageOverlay = document.getElementsByClassName('running-image');
const hiddenMessage = document.getElementById('hidden-message');

const showMessage = () => {
  hiddenMessage.classList.remove('hide');
};

const hideMessage = () => {
  hiddenMessage.classList.add('hide');
};

imageOverlay.addEventListener('mouseover', showMessage);
imageOverlay.addEventListener('mouseleave', hideMessage);

//Button colors change when hovered over in stories page.
document.getElementById('button1').addEventListener('mouseenter',
  function() {
    document.getElementById('button1').style.backgroundColor = '#D8D0C1';
    document.getElementById('button2').style.backgroundColor = '#D8D0C1';
    document.getElementById('button3').style.backgroundColor = '#D8D0C1';
    document.getElementById('button4').style.backgroundColor = '#D8D0C1';
  }, false
);

document.getElementById('button1').addEventListener('mouseleave',
  function() {
    document.getElementById('button1').style.backgroundColor = '#416788';
    document.getElementById('button2').style.backgroundColor = '#416788';
    document.getElementById('button3').style.backgroundColor = '#416788';
    document.getElementById('button4').style.backgroundColor = '#416788';
  }, false
);
