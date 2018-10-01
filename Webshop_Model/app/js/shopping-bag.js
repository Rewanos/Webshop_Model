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


var search = document.getElementById('search');
search.addEventListener('click', function() {
	var contain = document.getElementById('contain');
		contain.classList.toggle('active');
	var inp = document.getElementById('input');
		inp.classList.toggle('active');
	document.querySelector('input[type="text"]').focus();
});


var shopItem = document.getElementById('shopping-items');
var summ = document.getElementById('total-summ');
var amountPaid = document.getElementById('amount-paid');
var paidQuantity = document.getElementById('paid-quantity');
var paymentSumm = {
	totalSumm: 0,
	itemsQuantity: 0
}

//Функция обнуления корзины
document.getElementById('empty').addEventListener('click', function() {
	
		localStorage.clear();
		var emptyBag = document.getElementById('empty-bag');
		var fullBag = document.getElementById('full-bag');
		emptyBag.className = ''
		fullBag.className = 'hidden'
		paymentSumm.totalSumm = '';
		paymentSumm.itemsQuantity = 0;

		localStorage.setItem('generalSumm', JSON.stringify(paymentSumm));
		var paymentSummItems = JSON.parse(localStorage.getItem('generalSumm'));
		amountPaid.innerHTML = paymentSummItems.totalSumm;
		paidQuantity.innerHTML = paymentSummItems.itemsQuantity;
	
});

//Функция "покупки"
document.querySelector('.button').addEventListener('click', function() {
	
		localStorage.clear();
		var buyed = document.getElementById('buyed');
		var fullBag = document.getElementById('full-bag');
		buyed.className = ''
		fullBag.className = 'hidden'
		paymentSumm.totalSumm = '';
		paymentSumm.itemsQuantity = 0;

		localStorage.setItem('generalSumm', JSON.stringify(paymentSumm));
		var paymentSummItems = JSON.parse(localStorage.getItem('generalSumm'));
		amountPaid.innerHTML = paymentSummItems.totalSumm;
		paidQuantity.innerHTML = paymentSummItems.itemsQuantity;
	
});




for (var i = 0; i < window.catalog.length; i++) {
	var itemObj = JSON.parse(localStorage.getItem('catalog' + i));
	var emptyBag = document.getElementById('empty-bag');
	var fullBag = document.getElementById('full-bag');
		if(itemObj === null) {
			continue
		}
	
		if(itemObj.hasNew) {
			paymentSumm.itemsQuantity++
			shopItem.innerHTML +=('<div id="'+ itemObj.id +'" class="shopping-bag_item">' + '<div class="item_img">' + '<span class="new">' + 'New' + '</span>' + '<img class="image" src="' + itemObj.thumbnail + '">' + '<div class="overlay">' + '<div class="text">' + 'View Item' + '</div>' + '</div>' + '</div>' + '<div class="item-text">' + '<h3>' + itemObj.title + '</h3>' + '<p>' + '£ '+ itemObj.discountedPrice + '</p>' + '<p>' + 'Color: ' + itemObj.color + '</p>' + '<p>' + 'Size: ' + itemObj.size + '</p>' + '<p>' + 'Quantity ' + '<span id="decrement">' + '- ' + '</span>' + '<span id="quantity">' + itemObj.quantity + ' ' + '</span>' + '<span id="increment">' + '+' + '</span>' + '</p>' + '<h4 id="remove">' + 'Remove item' + '</h4>' +  '</div>' +'</div' )
			emptyBag.className = 'hidden'
			fullBag.className = ''
		} else if (!itemObj.hasNew) {
			shopItem.innerHTML +=('<div id="'+ itemObj.id +'" class="shopping-bag_item">' + '<div class="item_img">' + '<img class="image" src="' + itemObj.thumbnail + '">' + '<div class="overlay">' + '<div class="text">' + 'View Item' + '</div>' + '</div>' + '</div>' + '<div class="item-text">' + '<h3>' + itemObj.title + '</h3>' + '<p>' + '£ '+ itemObj.discountedPrice + '</p>' + '<p>' + 'Color: ' + itemObj.color + '</p>' + '<p>' + 'Size: ' + itemObj.size + '</p>' + '<p>' + 'Quantity ' + '<span id="decrement">' + '- ' + '</span>' + '<span id="quantity">' + itemObj.quantity + ' ' + '</span>' + '<span id="increment">' + '+' + '</span>' + '</p>' + '<h4 id="remove">' + 'Remove item' + '</h4>' +  '</div>' +'</div' )
			emptyBag.className = 'hidden';
			fullBag.className = '';
			paymentSumm.itemsQuantity++;
		}
		

		paymentSumm.totalSumm += itemObj.discountedPrice * itemObj.quantity;
		paymentSumm.totalSumm = Math.round(paymentSumm.totalSumm * 100) / 100
		localStorage.setItem('generalSumm', JSON.stringify(paymentSumm));
		summ.innerHTML = '£ ' + paymentSumm.totalSumm;

}


	var shoppingItems = document.getElementById('shopping-items');
	var increment = document.getElementById('increment');
	var decrement = document.getElementById('decrement');
	
	shoppingItems.addEventListener('click', function(event) {
		var target = event.target;
		if (target.id == increment.id) {
			
			var numb = target.previousElementSibling.innerHTML;
			console.log(numb);
			~~numb++
			target.previousElementSibling.innerHTML = numb + ' '
		} else if (target.id == decrement.id) {
			
			var numb = target.nextElementSibling.innerHTML;
			console.log(numb);
			~~numb--
			if (numb == 0) {
				event.preventDefault();
				return false;
			}
			target.nextElementSibling.innerHTML = numb + ' '
		} else {
			//return;
		}

		var removeElement = document.getElementById('remove');
		if (target.id == 'remove') {
			var removedId = target.parentNode.parentNode.id;
			var removedElement = target.parentNode.parentNode;
			var removedParent = target.parentNode.parentNode.parentNode;
			removedParent.removeChild(removedElement);
			var m = localStorage.getItem('k');
			m--;
			localStorage.setItem('k', m);

			
		}

		var quant = document.querySelectorAll('#quantity');
		paymentSumm.totalSumm = 0;
		for (var i = 0; i < window.catalog.length; i++) {
			var itemObj = JSON.parse(localStorage.getItem('catalog' + i));
			if (itemObj === null) {
				continue
			}

			if(removedId == itemObj.id) {
				localStorage.removeItem('catalog' + i);

				localStorage.setItem('generalSumm', JSON.stringify(paymentSumm));
				summ.innerHTML = '';
				paymentSumm.totalSumm = '';
				if(paymentSumm.itemsQuantity == 1) {
					paymentSumm.itemsQuantity = 0;
				}

				localStorage.setItem('generalSumm', JSON.stringify(paymentSumm));
				var paymentSummItems = JSON.parse(localStorage.getItem('generalSumm'));
				amountPaid.innerHTML = paymentSummItems.totalSumm;
				paidQuantity.innerHTML = paymentSummItems.itemsQuantity;
				location.reload();
			}

			
				paymentSumm.totalSumm += itemObj.discountedPrice * ~~quant[i].innerHTML
				paymentSumm.totalSumm = Math.round(paymentSumm.totalSumm * 100) / 100
			
			
			localStorage.setItem('generalSumm', JSON.stringify(paymentSumm));
			summ.innerHTML = '£ ' + paymentSumm.totalSumm;

			var paymentSummItems = JSON.parse(localStorage.getItem('generalSumm'));

			amountPaid.innerHTML = paymentSummItems.totalSumm;
			paidQuantity.innerHTML = paymentSummItems.itemsQuantity;
		}
		
	});





var amountPaid = document.getElementById('amount-paid');
var paidQuantity = document.getElementById('paid-quantity');

var paymentSummItems = JSON.parse(localStorage.getItem('generalSumm'));

amountPaid.innerHTML = paymentSummItems.totalSumm;
paidQuantity.innerHTML = paymentSummItems.itemsQuantity;


