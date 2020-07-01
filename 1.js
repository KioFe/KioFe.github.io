document.addEventListener("DOMContentLoaded", function(){
	var nut = document.querySelector('.nutpush.btn.btn-success.btn-lg'),
		menutrai = document.querySelector('.menutrai'),
		den = document.querySelector('.den'),
		trangquay=document.querySelector('.mautrang'),
		nutshop = document.querySelector('.nutpush.btn.btn-success.btn-lg.shop'),
		khoito = document.querySelector('.noidungto');

	nut.onclick =function(){
		den.classList.add('len');
		khoito.classList.add('dichphai');
		menutrai.classList.remove('menutrai.vetrai');
		trangquay.classList.add('trangquay');

	}
	nutshop.onclick = function() {
		// nutshop.innerHTML = 
		den.classList.add('len');
		khoito.classList.add('dichphai');
		trangquay.classList.add('trangquay');
	};

	den.onclick = function(){
		
		den.classList.remove('len');

		khoito.classList.remove('dichphai');
		menutrai.classList.add('menutrai.vetrai');
		trangquay.classList.remove('trangquay');
	}
},false);