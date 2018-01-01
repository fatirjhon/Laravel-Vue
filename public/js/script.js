// parallax jumbotron

$(window).scroll(function(){

	var siScroll = $(this).scrollTop();

		console.log($(window).scrollTop());

		if (siScroll > $('#astro').offset().top -610) {
				$('#a').addClass('scroll1');
				$('#b').addClass('scroll1');
				$('#c').addClass('scroll1');
			}

		if (siScroll < $('#astro').offset().top -610) {
				$('#a').removeClass('scroll1');
				$('#b').removeClass('scroll1');
				$('#c').removeClass('scroll1');
			}

		if (siScroll > $('#astro').offset().top -510) {
				$('#a').addClass('scroll2');
				$('#b').addClass('scroll2');
				$('#c').addClass('scroll2');
			}

		if (siScroll < $('#astro').offset().top -510) {
				$('#a').removeClass('scroll2');
				$('#b').removeClass('scroll2');
				$('#c').removeClass('scroll2');
			}

		if (siScroll > $('#astro').offset().top -410) {
				$('#a').addClass('scroll3');
				$('#b').addClass('scroll3');
				$('#c').addClass('scroll3');
			}

		if (siScroll < $('#astro').offset().top -410) {
				$('#a').removeClass('scroll3');
				$('#b').removeClass('scroll3');
				$('#c').removeClass('scroll3');
			}

		if (siScroll > $('#astro').offset().top -310) {
				$('#a').addClass('scroll4');
				$('#b').addClass('scroll4');
				$('#c').addClass('scroll4');
			}

		if (siScroll < $('#astro').offset().top -310) {
				$('#a').removeClass('scroll4');
				$('#b').removeClass('scroll4');
				$('#c').removeClass('scroll4');
			}

		if (siScroll > $('#astro').offset().top -210) {
				$('#a').addClass('scroll5');
				$('#b').addClass('scroll5');
				$('#c').addClass('scroll5');
				$('.judul').addClass('tampil');
			}

		if (siScroll < $('#astro').offset().top -210) {
				$('#a').removeClass('scroll5');
				$('#b').removeClass('scroll5');
				$('#c').removeClass('scroll5');
			}


		if (siScroll > $('#astro').offset().top -110) {
				$('.konten').addClass('tampil');
			}
			
});