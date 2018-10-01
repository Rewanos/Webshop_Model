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


//SLIDER FUNCTIONS START
var slideIndex=1;
function plusDivs(e){
	showDivs(slideIndex+=e)
}

function currentDiv(e){
	showDivs(slideIndex=e)
}

function showDivs(e){
	var s,l = document.getElementsByClassName("mySlides"),
	n = document.getElementsByClassName("demo");
	for(e > l.length && (slideIndex = 1),
		e < 1 && (slideIndex=l.length),
		s = 0;
		s < l.length; s++)l[s].style.display = "none";
		for(s = 0; s < n.length; s++)
			n[s].className = n[s].className.replace(" white","");
		l[slideIndex - 1].style.display = "block",
		n[slideIndex - 1].className += " white"
	}
function carousel(){
	var e,s = document.getElementsByClassName("mySlides"),
	l = document.getElementsByClassName("demo");
	for(e = 0; e < s.length; e++)
		s[e].style.display = "none";
		for(e = 0; e<l.length; e++)
			l[e].className = l[e].className.replace(" white","");
		++slideIndex > s.length && (slideIndex = 1),
		s[slideIndex - 1].style.display = "block",
		l[slideIndex - 1].className += " white";



	}
showDivs(slideIndex),
carousel();
//SLIDER FUNCTIONS END


//RESET TIMEOUT FUNCTION START
var timeoutHandle = setTimeout(carousel, 10000);
		var sliderBtn = document.querySelector('.slider-container');
		sliderBtn.addEventListener('click', function() {
			var target = event.target;
			if (target.dataset.reset != 'btn') return;
				clearTimeout(timeoutHandle);
				timeoutHandle = setTimeout(carousel, 10000);
		});
//RESET TIMEOUT FUNCTION END

//Получаем id элемента и помещаем в localStorage для Item-detalis page
var selectId = document.querySelectorAll('.catalog-items');
	selectId.forEach(function(i){
		i.addEventListener('click', function(e){ 
		  var id = e.target.parentNode.parentNode.id; 
		  if (id == 'full-catalog'){
		  	e.preventDefault
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