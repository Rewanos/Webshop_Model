//Функция для открытия и закрытия hamburger меню
function openMenu() {
    var x = document.getElementById("container_bottom");
    var hamb = document.getElementById("hamburger");
    
    if (x.className === "container_bottom") {
        x.className += " responsive";
        hamb.classList.add("is-active");
    } else {
        x.className = "container_bottom";
        hamb.classList.remove("is-active");
    }
}


//OPEN AND CLOSE SEARCH BAR FUNCTION START
var search = document.getElementById('search');
search.addEventListener('click', function() {
	var contain = document.getElementById('contain');
		contain.classList.toggle('active');
	var inp = document.getElementById('input');
		inp.classList.toggle('active');
	document.querySelector('input[type="text"]').focus();
});
//OPEN AND CLOSE SEARCH BAR FUNCTION END

//Генерируем основной контент страницы
var itemId = localStorage.getItem('itemId');
console.log(itemId);

var detalis = document.getElementById('item-detalis');
var div = document.createElement('div');
div.setAttribute('id', 'slider-images')
div.className = 'item-detalis__slider';
detalis.appendChild(div);

var sliderImg = document.getElementById('slider-images');
var preview = document.createElement('div');
preview.setAttribute('id', 'slider-preview')
preview.className = 'item-detalis__slider_images'
sliderImg.appendChild(preview);

var detalisContent = document.createElement('div');
detalisContent.setAttribute('id', 'detalis-content');
detalisContent.className = 'item-detalis_content';
detalis.appendChild(detalisContent);
var detalisText = document.getElementById('detalis-content')





var preview2 = document.getElementById('slider-preview');
if (itemId === null) {
	for (var i = 0; i < window.catalog.length; i++) {
		if (window.catalog[i].id == '80d32566-d81c-4ba0-9edf-0eceda3b4360') {
			window.catalog[i].preview.forEach(function(item, i) {
				preview2.innerHTML += ('<div class="images_width">' + '<img src="'+ item + '" alt="Small men in suite" class="min-slides" onclick="currentImg(' + (i+1) +')">' + '<div class="overlay hover-opacity-off" onclick="currentImg(' + (i+1) +')">' + '</div>' + '</div>')
			});
			window.catalog[i].preview.forEach(function(item) {
				sliderImg.innerHTML += ('<img class="slides" src="'+ item + '" alt="Men in suite">')
				
			});
			detalisText.innerHTML += ('<h2>' + window.catalog[i].title + '</h2>' + 
										'<p>' + window.catalog[i].description + '</p>' + 
										'<h3>' + '£ ' + window.catalog[i].discountedPrice + '</h3>')
			
			
		}
	}
}

for (var i = 0; i < window.catalog.length; i++) {
	if (window.catalog[i].id == itemId) {
		window.catalog[i].preview.forEach(function(item, i) {
			preview2.innerHTML += ('<div class="images_width">' + '<img src="'+ item + '" alt="Small men in suite" class="min-slides" onclick="currentImg(' + (i+1) +')">' + '<div class="overlay hover-opacity-off" onclick="currentImg(' + (i+1) +')">' + '</div>' + '</div>')
		});
		window.catalog[i].preview.forEach(function(item) {
			sliderImg.innerHTML += ('<img class="slides" src="'+ item + '" alt="Men in suite">')
			
		});
		detalisText.innerHTML += ('<h2>' + window.catalog[i].title + '</h2>' + 
									'<p>' + window.catalog[i].description + '</p>' + 
									'<h3>' + '£ ' + window.catalog[i].discountedPrice + '</h3>')
		
		
	}
}

function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

var detalisRadio = document.createElement('div');
detalisRadio.setAttribute('id', 'detalis-radio');
detalisRadio.className = 'item-detalis_content_radio';
var h3 = document.querySelector('h3');
console.log(h3)
insertAfter(detalisRadio, h3)
var radioBtn = document.getElementById('detalis-radio')

var radioSize = document.createElement('div');
radioSize.setAttribute('id', 'radio-size')
radioSize.className = 'item-detalis_content_radio_size'
radioBtn.appendChild(radioSize);

var radioColor = document.createElement('div');
radioColor.setAttribute('id', 'radio-color')
radioColor.className = 'item-detalis_content_radio_color'
radioBtn.appendChild(radioColor);


if (itemId === null) {
	for (var i = 0; i < window.catalog.length; i++) {
		if (window.catalog[i].id == '80d32566-d81c-4ba0-9edf-0eceda3b4360') {
			radioSize.innerHTML += ('<p>' + 'Size:' + '</p>')
			window.catalog[i].sizes.forEach(function(item) {
				radioSize.innerHTML += ('<input id="'+ item +'" type="radio" name="size">' +
										'<label for="'+ item +'">' +
											'<span>' + item + '</span>' +
										'</label>')
			});

			radioColor.innerHTML += ('<p>' + 'Color:' + '</p>')
			window.catalog[i].colors.forEach(function(item) {
				radioColor.innerHTML += ('<input id="'+ item +'" type="radio" name="color">' +
										'<label for="'+ item +'">' +
											'<span>' + item + '</span>' +
										'</label>')
			});
			
			detalisText.innerHTML += ('<a id="' + window.catalog[i].id + '" href="shopping-bag.html" class="button button-center">' + 'Add to bag' + '</a>')
		}
	}
}

for (var i = 0; i < window.catalog.length; i++) {
	if (window.catalog[i].id == itemId) {
		radioSize.innerHTML += ('<p>' + 'Size:' + '</p>')
		window.catalog[i].sizes.forEach(function(item) {
			radioSize.innerHTML += ('<input id="'+ item +'" type="radio" name="size">' +
									'<label for="'+ item +'">' +
										'<span>' + item + '</span>' +
									'</label>')
		});

		radioColor.innerHTML += ('<p>' + 'Color:' + '</p>')
		window.catalog[i].colors.forEach(function(item) {
			radioColor.innerHTML += ('<input id="'+ item +'" type="radio" name="color">' +
									'<label for="'+ item +'">' +
										'<span>' + item + '</span>' +
									'</label>')
		});
		
		detalisText.innerHTML += ('<a href="#" class="button-clear">' + 'Clear' + '</a>' + '<a id="' + window.catalog[i].id + '" href="shopping-bag.html" class="button button-center">' + 'Add to bag' +  '</a>')
	}
}

//Слайдер для предпросмотра фотографий
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentImg(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("overlay");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " opacity-off";
}

var catalogValues = {};

var buttonClear = document.getElementsByClassName('button-clear')[0];

buttonClear.addEventListener('click', function(event) {
	for (var i = 0; i < radioSizeValue.length; i++) {
		if (radioSizeValue[i].checked) {
			radioSizeValue[i].checked = false;
			catalogValues = {};
			break;
		}
	}

	for (var i = 0; i < radioColorValue.length; i++) {
		if (radioColorValue[i].checked) {
			radioColorValue[i].checked = false;
			catalogValues = {};
			break;
		}
	}
	
	event.preventDefault();
  	return false;
});

//Получаем значение из radio-btn size
var radioBtnSize = document.getElementById('radio-size');
var radioSizeValue = document.getElementsByName('size');
radioBtnSize.addEventListener('click', function() {
	
	for (var i = 0; i < radioSizeValue.length; i++) {
		if (radioSizeValue[i].checked) {
			catalogValues.size = radioSizeValue[i].id
			
			break;
		}
	}
});

//Получаем значение из radio-btn color
var radioBtnColor = document.getElementById('radio-color');
var radioColorValue = document.getElementsByName('color');
radioBtnColor.addEventListener('click', function() {
	
	for (var i = 0; i < radioColorValue.length; i++) {
		if (radioColorValue[i].checked) {
			catalogValues.color = radioColorValue[i].id
			
			break;
		}
	}
});



//Помещаем все полученные дянные в localStorage
var k;
var m = 0;

var modal = document.getElementById('myModal');

var itemDetalisBtn = document.querySelector('.button');
itemDetalisBtn.addEventListener('click', function(event){ 
  var id = event.target.id; 
  
  
  if (catalogValues.size == undefined && catalogValues.color == undefined) {
  	//alert('Please choose the size and color of this clothes')
	modal.style.display = "block";
	event.preventDefault();
  	return false;
  } else if (catalogValues.size == undefined) {
  	//alert('Please choose the size of this clothes')
  	modal.style.display = "block";
  	event.preventDefault();
  	return false;
  } else if (catalogValues.color == undefined) {
  	//alert('Please choose the color of this clothes')
  	modal.style.display = "block";
  	event.preventDefault();
  	return false;
  }

	

  for (var i = 0; i < window.catalog.length; i++){
  	if (window.catalog[i].id == id) {

  		catalogValues.id = window.catalog[i].id;
  		catalogValues.title = window.catalog[i].title;
  		catalogValues.discountedPrice = window.catalog[i].discountedPrice;
  		catalogValues.thumbnail = window.catalog[i].thumbnail;
  		catalogValues.hasNew = window.catalog[i].hasNew;
  		catalogValues.quantity = 1;

  			//Проверяем на наличие одинаковых элементов
  			for (var n = 0; n < window.catalog.length; n++) {
				var itemObj = JSON.parse(localStorage.getItem('catalog' + n));
				if (itemObj == null) {
					break
				} else if (catalogValues.title == itemObj.title && catalogValues.size == itemObj.size && catalogValues.color == itemObj.color) {
					itemObj.quantity = (itemObj.quantity + 1);
					localStorage.setItem('catalog' + n, JSON.stringify(itemObj));
					return;
				}
			}

  			var j = localStorage.getItem('k');
  			if (j == null) {
  				k = m; 
	  			localStorage.setItem('catalog' + m, JSON.stringify(catalogValues));
	  			m++;
	  			localStorage.setItem('k', m);
  			} else {
  				localStorage.setItem('catalog' + j, JSON.stringify(catalogValues));
  				j++;
  				localStorage.setItem('k', j);
  			}

  			
  		
  		
  		
  		
  	}
  }



});

var span = document.getElementsByClassName("close")[0];
		span.onclick = function () {
			modal.style.display = "none";
		};

var amountPaid = document.getElementById('amount-paid');
var paidQuantity = document.getElementById('paid-quantity');

var paymentSummItems = JSON.parse(localStorage.getItem('generalSumm'));

amountPaid.innerHTML = paymentSummItems.totalSumm;
paidQuantity.innerHTML = paymentSummItems.itemsQuantity;

