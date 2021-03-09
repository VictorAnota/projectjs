$(document).ready(function(){
		
		/*SLIDER*/
		if (window.location.href.indexOf('index')>-1) {
			$('.bxslider').bxSlider({
			mode: 'fade',
			captions: true,
			slideWidth: 1200,
			pager: true
			});	
		}
		

		/*POST*/
		if (window.location.href.indexOf('index')>-1) {
			var posts = [
				{
					title: 'Prieba de titulo dos',
					date: 'publicado el dia '+moment().format('dddd')+' '+moment().day()+' de '+moment().format('MMMM')+' del año '+moment().format('YYYY'),
					content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quam, accusantium! Earum modi at, in minus ipsa repudiandae asperiores vero vitae quod, reprehenderit. Praesentium, voluptate sunt fugit, est ad dolores! Modi blanditiis officia temporibus. Alias commodi inventore qui nulla, sint! Tempore, odio. Nihil voluptatem et rem magni nostrum. Dolor quod laudantium vel corporis quasi facilis ut accusantium fuga maxime labore! Expedita, provident numquam possimus eos ea impedit minus mollitia sapiente illum porro minima atque rem, quis voluptates ex, vel nostrum animi molestias culpa, blanditiis architecto! Doloribus fuga placeat, nobis atque. Ipsam qui, sunt, recusandae ab accusantium consequatur laudantium cum ipsa et magni quae vitae facilis nesciunt deleniti. At, recusandae cupiditate, dicta vero tempora dolorem ipsam, in, magnam numquam alias voluptate.'
				},
				{
					title: 'Prieba de titulo tres',
					date: 'publicado el dia '+moment().format('dddd')+' '+moment().day()+' de '+moment().format('MMMM')+' del año '+moment().format('YYYY'),
					content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quam, accusantium! Earum modi at, in minus ipsa repudiandae asperiores vero vitae quod, reprehenderit. Praesentium, voluptate sunt fugit, est ad dolores! Modi blanditiis officia temporibus. Alias commodi inventore qui nulla, sint! Tempore, odio. Nihil voluptatem et rem magni nostrum. Dolor quod laudantium vel corporis quasi facilis ut accusantium fuga maxime labore! Expedita, provident numquam possimus eos ea impedit minus mollitia sapiente illum porro minima atque rem, quis voluptates ex, vel nostrum animi molestias culpa, blanditiis architecto! Doloribus fuga placeat, nobis atque. Ipsam qui, sunt, recusandae ab accusantium consequatur laudantium cum ipsa et magni quae vitae facilis nesciunt deleniti. At, recusandae cupiditate, dicta vero tempora dolorem ipsam, in, magnam numquam alias voluptate.'
				},
				{
					title: 'Prieba de titulo cuatro',
					date: 'publicado el dia '+moment().format('dddd')+' '+moment().day()+' de '+moment().format('MMMM')+' del año '+moment().format('YYYY'),
					content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quam, accusantium! Earum modi at, in minus ipsa repudiandae asperiores vero vitae quod, reprehenderit. Praesentium, voluptate sunt fugit, est ad dolores! Modi blanditiis officia temporibus. Alias commodi inventore qui nulla, sint! Tempore, odio. Nihil voluptatem et rem magni nostrum. Dolor quod laudantium vel corporis quasi facilis ut accusantium fuga maxime labore! Expedita, provident numquam possimus eos ea impedit minus mollitia sapiente illum porro minima atque rem, quis voluptates ex, vel nostrum animi molestias culpa, blanditiis architecto! Doloribus fuga placeat, nobis atque. Ipsam qui, sunt, recusandae ab accusantium consequatur laudantium cum ipsa et magni quae vitae facilis nesciunt deleniti. At, recusandae cupiditate, dicta vero tempora dolorem ipsam, in, magnam numquam alias voluptate.'
				},
				{
					title: 'Prieba de titulo cinco',
					date: 'publicado el dia '+moment().format('dddd')+' '+moment().day()+' de '+moment().format('MMMM')+' del año '+moment().format('YYYY'),
					content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quam, accusantium! Earum modi at, in minus ipsa repudiandae asperiores vero vitae quod, reprehenderit. Praesentium, voluptate sunt fugit, est ad dolores! Modi blanditiis officia temporibus. Alias commodi inventore qui nulla, sint! Tempore, odio. Nihil voluptatem et rem magni nostrum. Dolor quod laudantium vel corporis quasi facilis ut accusantium fuga maxime labore! Expedita, provident numquam possimus eos ea impedit minus mollitia sapiente illum porro minima atque rem, quis voluptates ex, vel nostrum animi molestias culpa, blanditiis architecto! Doloribus fuga placeat, nobis atque. Ipsam qui, sunt, recusandae ab accusantium consequatur laudantium cum ipsa et magni quae vitae facilis nesciunt deleniti. At, recusandae cupiditate, dicta vero tempora dolorem ipsam, in, magnam numquam alias voluptate.'
				}
				
			]
			
			posts.forEach((item, index) => {
				var post = `

					<article class="post">
						<h2>${item.title}</h2>
						<span class="date">
							${item.date}
						</span>
						<p>
							${item.content}
						</p>
						<a href="#" class="button-more">Leer mas...</a>
					</article>

				`;

				$("#posts").append(post);
			});

		}
			/*SELECTOR DE TEMA*/
			var theme = $('#theme');

			$('#to-green').click(function(){
				theme.attr('href', 'css/green.css');	
			});
			
			$('#to-red').click(function(){
				theme.attr('href', 'css/red.css');		
			});
			
			$('#to-blue').click(function(){
				theme.attr('href', 'css/blue.css');	
			});


/*SCROLL PARA SUBIR DE FORMA SUAVE*/
		$('.subir').click(function(e){
			e.preventDefault();
			console.log(e);
			$('html, body').animate({
				scrollTop: 0
			}, 500);
			
		});

/*Login falso*/
		$("#login form").submit(function(){
			var form_name = $('#form-name').val();
			localStorage.setItem('form_name', form_name);
		});

		var form_name = localStorage.getItem('form_name');
		if (form_name != null && form_name != 'undefine') {
			var about_pa = $('#about p');
			about_pa.html('<br><b>Bienbenido, '+form_name+'</b>');
			about_pa.append('<a href="#" id="logout">Cerrar sesion</a>');

			$("#login").hide();/*Esconde o oculta el hide()*/

			$('#logout').click(function(){
				localStorage.clear();
				location.reload();
			});
		}
		//Acordeon
		if (window.location.href.indexOf('about')>-1) {
			$('#acordion').accordion();
		}

		//Reloj
		if (window.location.href.indexOf('reloj')>-1) {
			
			setInterval(function(){
				var reloj = moment().format('hh:mm:ss');
				$('#reloj').html(reloj);
			},1000);
			
		}

		/*validacion*/
		if (window.location.href.indexOf('contacto')>-1) {
			$("form input[name='date']").datepicker({
				dateFormat: 'dd/mm/yy'
			});
			$.validate({
				lang: 'es',
				errorMessagePosition: 'top',
				scrollToTopOnError: true
			});
		}

});