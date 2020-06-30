document.addEventListener("DOMContentLoaded", function(){
	var nut = document.querySelector('.nutpush.btn.btn-success.btn-lg'),
		menutrai = document.querySelector('.menutrai'),
		den = document.querySelector('.den'),
		trangquay=document.querySelector('.mautrang'),
		khoito = document.querySelector('.noidungto');

	nut.onclick =function(){
		den.classList.add('len');
		// khoito.classList.add('dichphai');
		// menutrai.classList.remove('vetrai');
		trangquay.classList.add('trangquay');

	}

	den.onclick = function(){
		
		den.classList.remove('len');

		// khoito.classList.remove('dichphai');
		// menutrai.classList.add('vetrai');
		trangquay.classList.remove('trangquay');
	}
},false);