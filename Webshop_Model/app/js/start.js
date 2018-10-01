//Desine sperare qui hic intras

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



//Рендерим объекты из catalog.js
for (var i = 0; i < 4; i++) {
	var catal = document.getElementById('catalog-items');
	if(window.catalog[i].hasNew) {
			catal.innerHTML +=('<div id="'+ catalog[i].id +'" class=" catalog_item catalog-items_' + i +'">' + '<a href="item.html">' + '<span class="new">' + 'New' + '</span>' + '<img class="image" src="' + window.catalog[i].thumbnail + '">' + '<div class="overlay">' + '<div class="text">' + 'View Item' + '</div>' + '</div>' + '<div>' + '<h3>' + window.catalog[i].title + '</h3>' + '<p>' + '£ '+ ~~window.catalog[i].discountedPrice + '</div>' + '</a>' + '</div' )
		} else {
			catal.innerHTML +=('<div id="'+ catalog[i].id +'" class=" catalog_item catalog-items_' + i +'">' + '<a href="item.html">' + '<img class="image" src="' + window.catalog[i].thumbnail + '">' + '<div class="overlay">' + '<div class="text">' + 'View Item' + '</div>' + '</div>' + '<div>' + '<h3>' + window.catalog[i].title + '</h3>' + '<p>' + '£ '+ window.catalog[i].discountedPrice + '</div>' + '</a>' + '</div')
		}
	}

for (var i = 4; i < window.catalog.length; i++) {
	var catal = document.getElementById('full-catalog');
	if(window.catalog[i].category == 'women'){
		if(window.catalog[i].price == null) {
			catal.innerHTML +=('<div id="' + catalog[i].id +'" class=" catalog_item catalog-items_' + i +'">' + '<div class="img_overlay">' + '<span>' + "Levi's" + '</span>' + '<span>' + "Buyer's choise" + '</span>' + '<img class="image" src="' + window.catalog[i].thumbnail + '">' + '<div>' + '<div class="overlay">' + '<div class="text">' + 'View Item' + '</div>' + '</div>' + '<div>' + '<h3>' + window.catalog[i].title + ' for women' + '</h3>' + '<p>' + window.catalog[i].placeholder + '</div>' + '</div')
			i++;
		}
		if(window.catalog[i].hasNew) {
			catal.innerHTML +=('<div id="'+ catalog[i].id +'" class=" catalog_item catalog-items_' + i +'">' + '<a href="item.html">' + '<span class="new">' + 'New' + '</span>' + '<img class="image" src="' + window.catalog[i].thumbnail + '">' + '<div class="overlay">' + '<div class="text">' + 'View Item' + '</div>' + '</div>' + '<div>' + '<h3>' + window.catalog[i].title + '</h3>' + '<p>' + '£ '+ ~~window.catalog[i].discountedPrice + '</div>' + '</a>' + '</div')
		} else if (window.catalog[i].price != window.catalog[i].discountedPrice) {
			var persent = (1-(window.catalog[i].discountedPrice / window.catalog[i].price)) * 100;
			catal.innerHTML +=('<div id="'+ catalog[i].id +'" class=" catalog_item catalog-items_' + i +'">' + '<a href="item.html">' + '<img class="image" src="' + window.catalog[i].thumbnail + '">' + '<div class="overlay">' + '<div class="text">' + 'View Item' + '</div>' + '</div>' + '<div>' + '<h3>' + window.catalog[i].title + '</h3>' + '<p>' + '£ '+  window.catalog[i].price + '<span class="persent">' + ' -' + persent + '%' + '</span>' + ' '  + '£ '+ window.catalog[i].discountedPrice + '</div>' + '</a>' + '</div')
		} else {
			catal.innerHTML +=('<div id="'+ catalog[i].id +'" class=" catalog_item catalog-items_' + i +'">' + '<a href="item.html">' + '<img class="image" src="' + window.catalog[i].thumbnail + '">' + '<div class="overlay">' + '<div class="text">' + 'View Item' + '</div>' + '</div>' + '<div>' + '<h3>' + window.catalog[i].title + '</h3>' + '<p>' + '£ '+ window.catalog[i].discountedPrice + '</div>' + '</a>' + '</div')
		}
		
	}
	 if(i == window.catalog.length-1) {
		catal.innerHTML +=('<div id="'+ catalog[9].id +'" class=" catalog_item catalog-items_' + i +'">' + '<a href="item.html">' + '<img class="image" src="' + window.catalog[9].thumbnail + '">' + '<div class="overlay">' + '<div class="text">' + 'View Item' + '</div>' + '</div>' + '<div>' + '<h3>' + window.catalog[9].title + '</h3>' + '<p>' + '£ '+ window.catalog[9].discountedPrice + '</div>' + '</a>' + '</div')
	}
	
}



var filt = document.getElementById('filter');
var showFilt = document.getElementById('show_filter');
function off() {
	filt.className = 'header__dropdown-filter filter_hidden'
    document.getElementById("overlay").style.display = "none";
}
//Откытие и закрытие фильтра на tablet и mobile
function openFilter() {
	
	
	if(filt.className === 'header__dropdown-filter filter_hidden') {
		filt.className = 'header__dropdown-filter'
		document.getElementById("overlay").style.display = "block";
	}
}
var fashion = document.getElementById('fashion')
var product = document.getElementById('product_type')
var color = document.getElementById('color')
var brand = document.getElementById('brand')
var size = document.getElementById('size')
var fash1 = document.getElementsByClassName('dropbtn');



//Тут вообще каша. Суть заключается в том, что через делегирование получаем innerHTML target'a и сравниваем его с window.catalog.fashion
filt.onclick = function(event) {
	var target = event.target;
	show.className = 'hidden'
		var clear = document.querySelectorAll('.catalog_item');
		for (var i = 0; i < clear.length; i++) {
			clear[i].style.display = 'none';
			if(target.innerText == 'Not selected') {
				clear[i].style.display = '';
			}
		}
		
		for (var i = 0; i < window.catalog.length; i++) {
			if(target.innerText == window.catalog[i].fashion) {
					if(window.catalog[i].category == 'women' || window.catalog[i].category == 'men'){
						if(window.catalog[i].price == null) {
							catal.innerHTML +=('<div id="' + catalog[i].id +'" class=" catalog_item catalog-items_' + i +'">' + '<div class="img_overlay">' + '<span>' + "Levi's" + '</span>' + '<span>' + "Buyer's choise" + '</span>' + '<img class="image" src="' + window.catalog[i].thumbnail + '">' + '<div>' + '<div class="overlay">' + '<div class="text">' + 'View Item' + '</div>' + '</div>' + '<div>' + '<h3>' + window.catalog[i].title + ' for women' + '</h3>' + '<p>' + window.catalog[i].placeholder + '</div>' + '</div')
							i++;
						}
						if(window.catalog[i].hasNew) {
							catal.innerHTML +=('<div id="'+ catalog[i].id +'" class=" catalog_item catalog-items_' + i +'">' + '<a href="item.html">' + '<span class="new">' + 'New' + '</span>' + '<img class="image" src="' + window.catalog[i].thumbnail + '">' + '<div class="overlay">' + '<div class="text">' + 'View Item' + '</div>' + '</div>' + '<div>' + '<h3>' + window.catalog[i].title + '</h3>' + '<p>' + '£ '+ ~~window.catalog[i].discountedPrice + '</div>' + '</a>' + '</div')
						} else if (window.catalog[i].price != window.catalog[i].discountedPrice) {
							var persent = (1-(window.catalog[i].discountedPrice / window.catalog[i].price)) * 100;
							catal.innerHTML +=('<div id="'+ catalog[i].id +'" class=" catalog_item catalog-items_' + i +'">' + '<a href="item.html">' + '<img class="image" src="' + window.catalog[i].thumbnail + '">' + '<div class="overlay">' + '<div class="text">' + 'View Item' + '</div>' + '</div>' + '<div>' + '<h3>' + window.catalog[i].title + '</h3>' + '<p>' + '£ '+  window.catalog[i].price + '<span class="persent">' + ' -' + persent + '%' + '</span>' + ' '  + '£ '+ window.catalog[i].discountedPrice + '</div>' + '</a>' + '</div')
						} else {
							catal.innerHTML +=('<div id="'+ catalog[i].id +'" class=" catalog_item catalog-items_' + i +'">' + '<a href="item.html">' + '<img class="image" src="' + window.catalog[i].thumbnail + '">' + '<div class="overlay">' + '<div class="text">' + 'View Item' + '</div>' + '</div>' + '<div>' + '<h3>' + window.catalog[i].title + '</h3>' + '<p>' + '£ '+ window.catalog[i].discountedPrice + '</div>' + '</a>' + '</div')
						}
						
					}
					 if(i == window.catalog.length-1) {
						catal.innerHTML +=('<div id="'+ catalog[9].id +'" class=" catalog_item catalog-items_' + i +'">' + '<a href="item.html">' + '<img class="image" src="' + window.catalog[9].thumbnail + '">' + '<div class="overlay">' + '<div class="text">' + 'View Item' + '</div>' + '</div>' + '<div>' + '<h3>' + window.catalog[9].title + '</h3>' + '<p>' + '£ '+ window.catalog[9].discountedPrice + '</div>' + '</a>' + '</div')
					}
				} else {
					catal.innerHTML +=('<div class="empty' + 'There are no items that satisfy this requirement' + '</div')
				}
			}
		
		
		//Отображения категории "фильтра" вне самого "фильтра"
		if ((target.tagName == 'A' && fash1[0].innerText == 'Fashion') && (target.innerText == 'Not selected' ||target.innerText == 'Nail the 90s' || target.innerText == 'Casual style' || target.innerText == 'New Look' || target.innerText == 'Sport' || target.innerText == 'Vaitage' || target.innerText == 'Classical style')) {
			if (target.innerText == 'Not selected') {
				fashion.innerHTML = 'Fashion'
				fashion.style.color = '#000'
			} else {
				fashion.innerHTML = (target.innerHTML + ', ')
				fashion.style.color = '#f14a58'
				
			}
		}
		if ((target.tagName == 'A' && fash1[1].innerText == 'Product type') && (target.innerText == 'Not selected' ||target.innerText == 'Coats & Jackets' || target.innerText == 'Dresses' || target.innerText == 'Jersey Tops')) {
			if (target.innerText == 'Not selected') {
				product.innerHTML = 'Product type'
				product.style.color = '#000'
			} else {
				product.innerHTML = (target.innerHTML + ', ')
				product.style.color = '#f14a58'
				
			}
		}
		if ((target.tagName == 'A' && fash1[2].innerText == 'Color') && (target.innerText == 'Not selected' ||target.innerText == 'Black' || target.innerText == 'Blue' || target.innerText == 'Red' || target.innerText == 'Green' || target.innerText == 'Golden')) {
			if (target.innerText == 'Not selected') {
				color.innerHTML = 'Color'
				color.style.color = '#000'
			} else {
				color.innerHTML = (target.innerHTML + ', ')
				color.style.color = '#f14a58'
				
			}
		}
		if ((target.tagName == 'A' && fash1[3].innerText == 'Brand') && (target.innerText == 'Not selected' ||target.innerText == 'Chi Chi London' || target.innerText == 'Antipodium' || target.innerText == 'Adidas' || target.innerText == 'New Balance' || target.innerText == 'River Island')) {
			if (target.innerText == 'Not selected') {
				brand.innerHTML = 'Brand'
				brand.style.color = '#000'
			} else {
				brand.innerHTML = (target.innerHTML + ', ')
				brand.style.color = '#f14a58'
				

			}
		}
		if ((target.tagName == 'A' && fash1[4].innerText == 'Size') && (target.innerText == 'Not selected' ||target.innerText == 'UK 2' || target.innerText == 'UK 18' || target.innerText == 'UK 18L' || target.innerText == 'UK 20' || target.innerText == 'UK 20L' || target.innerText == 'UK 20S' || target.innerText == 'UK 22S' || target.innerText == 'UK 22')) {
			if (target.innerText == 'Not selected') {
				size.innerHTML = 'Size'
				size.style.color = '#000'
			} else {
				size.innerHTML = (target.innerHTML + ', ')
				size.style.color = '#f14a58'
				
			}
		}
		if ((target.tagName == 'A' && fash1[5].innerText == 'Price range') && (target.innerText == 'Not selected' ||target.innerText == 'To £99' || target.innerText == '£100-£299' || target.innerText == 'From £300')) {
			if (target.innerText == 'Not selected') {
				price.innerHTML = 'Price range'
				price.style.color = '#000'
			} else {
				price.innerHTML = (target.innerHTML + ', ')
				price.style.color = '#f14a58'
				
			}
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



	var show = document.getElementById('button');
	show.addEventListener('click', function() {
		var item1 = document.getElementById('ff665110-5e7f-435d-b1b4-651c3d5050ca');
		var item2 = document.getElementById('80d32566-d81c-4ba0-9edf-0eceda3b4360');

		if(item1.className === 'catalog_item catalog-items_13') {
			item1.className = 'catalog_item visible'
			item2.className = 'catalog_item visible'
		} else {
			item1.className = 'catalog_item catalog-items_13'
			item2.className = 'catalog_item catalog-items_13'
		}
	});
	

var womenSort = document.getElementById('women');
womenSort.addEventListener('click', function() {
	var v = document.querySelectorAll('#full-catalog div');
	show.className = 'hidden'
	console.log(v)
	v[0].className = 'catalog_item catalog-items_4'
	for (var i = 6; i < v.length; i+=4) {
		if (v[i].id == 'ff665110-5e7f-435d-b1b4-651c3d5050ca'){
				v[i].className = 'catalog_item';
			}
		if(v[i].className == 'hidden') {
			v[i].className = 'catalog_item';
		}
	}
	document.getElementById('80d32566-d81c-4ba0-9edf-0eceda3b4360').className = 'hidden'
});

var menSort = document.getElementById('men');
menSort.addEventListener('click', function() {
	var v = document.querySelectorAll('#full-catalog div');
	show.className = 'hidden'
	v[0].className = 'hidden'
	for (var i = 6; i < v.length; i+=4) {
		if(v[i].id == '80d32566-d81c-4ba0-9edf-0eceda3b4360') {
			v[i].className = 'catalog_item';
		}
		if(v[i].id != '80d32566-d81c-4ba0-9edf-0eceda3b4360') {
			v[i].className = 'hidden';
		}
	}
});


//Получаем id элемента и помещаем в localStorage для Item-detalis page
	var selectId = document.querySelectorAll('.full-catalog');
	selectId.forEach(function(i){
		i.addEventListener('click', function(e){ 
		  var id = e.target.parentNode.parentNode.id; 
		  if (e.target.className == 'text') {
		  	e.preventDefault();
			return false;
		  }
		  	
		 
		  
		  localStorage.setItem('itemId', id)
		  
		});
		
	});


//Парсим объект из localStorage для обновления общей суммы и кол-ва элементов
var amountPaid = document.getElementById('amount-paid');
var paidQuantity = document.getElementById('paid-quantity');

var paymentSummItems = JSON.parse(localStorage.getItem('generalSumm'));

amountPaid.innerHTML = paymentSummItems.totalSumm;
paidQuantity.innerHTML = paymentSummItems.itemsQuantity;