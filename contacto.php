<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Proyecto js</title>
	<link rel="stylesheet" href="css/styles.css">
	<link rel="stylesheet" href="css/responsive.css">
	<script src="https://kit.fontawesome.com/bcd0145088.js" crossorigin="anonymous"></script>
	<link id="theme" rel="stylesheet" href="css/green.css">

	<!--*******************************************************************
	*								SLIDER							  *
	********************************************************************-->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

	 <!--*******************************************************************
	 *								jqueryUI
	 ********************************************************************-->
	<link rel="stylesheet" href="js/jquery-ui-1.12.1/jquery-ui.min.css">
	<link rel="stylesheet" href="js/jquery-ui-1.12.1/jquery-ui.structure.min.css">
	<link rel="stylesheet" href="js/jquery-ui-1.12.1/jquery-ui.theme.min.css">

	<script type="text/javascript" src="js/jquery-ui-1.12.1/jquery-ui.min.js"></script>
<!--*******************************************************************
*								VALIDACION							  *
********************************************************************-->
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-form-validator/2.3.26/jquery.form-validator.min.js"></script>
	 <!--*******************************************************************
	 *								javaScript
	 ********************************************************************-->

	 <script type="text/javascript" src="js/main.js"></script>

</head>
<body>
	<div id="selector-theme">
		<div id="to-green"></div>
		<div id="to-red"></div>
		<div id="to-blue"></div>
	</div>
	<section id="global">

		<!--*******************************************************************
									CABECERA							  
		*******************************************************************-->
		<header>
			<div class="container .redes">
				<h1>Proyecto</h1>
				<nav>
					<li><a href="index.html">Inicio</a></li>
					<li><a href="reloj.html">Reloj</a></li>
					<li><a href="about.html">Sobre mi</a></li>
					<li><a href="contacto.html">Contacto</a></li>
				</nav>
				<a href="#" class="hamb"><i class="fas fa-bars"></i></a>
			</div>
		</header>
		<!--*******************************************************************
										SLIDER							
		*******************************************************************-->
		
		<!--*******************************************************************
		*								CONTENIDO
		********************************************************************-->
		<section id="content">
			<div id="box">
				<!--<h2>Contacto</h2>
				<form action="" method="post" id="form-contact">
					<label for="name">Nombre</label>
					<input type="text" name="name" data-validation="alphanumeric">

					<label for="surname">Apellidos</label>
					<input type="text" name="surname" data-validation="alphanumeric">

					<label for="email">Email</label>
					<input type="text" name="email" data-validation="email">

					<label for="sex">Sexo</label>
					<select name="sex" data-validation="required">
						<option value="men">Hombre</option>
						<option value="woman">Mujer</option>
					</select> 

					<label for="date">Fecha de nacimiento</label>
					<input type="text" name="date" data-validation="date" data-validation-format="dd/mm/yyyy">

					<label for="years">Edad</label>
					<input type="text" name="years" data-validation="number">

					<input type="submit" value="Enviar">
				</form>-->
				<form action="index.php" method="POST">
							<div class="form-block">
								<input type="text" name="nombre" class="form-control" placeholder="Nombre">
							</div>
							<div class="form-block">
								<input type="email" name="email" class="form-control" placeholder="Email">
							</div>
							<div class="form-block">
								<textarea name="mensaje" placeholder="Mensaje"></textarea>
							</div>
							<div class="form-block bloque-ultimo">
								<input type="submit" class="boton boton-negro" value="enviar">
							</div>
							<?php
								if($_SERVER["REQUEST_METHOD"] == "POST")
								{
									$nombre = $_POST["nombre"];
									$email = $_POST["email"];
									$mensaje = $_POST["mensaje"];

									if(isset($nombre)){
										if (isset($email)) {
											if (isset($mensaje)) {
												$para = "victorbarbosa46@gmail.com";
												$asunto = "prueba";
												$cuerpo = $nombre."\n".$email."\n".$mensaje;
												$adicional = "From: noreply@victor.com";
												mail($para,$asunto,$cuerpo,$adicional);
												?>
													<p>Envio exitoso</p>
												<?php
											}
										}
									}
								}
							?>	
						</form>
			</div>
			<aside id="sidebar">
				<div id="about">
					<h4><span>¿Quien soy?</span></h4>
					<img src="img/caracol.jpg" alt="">
					<p>Lorem ipsum dolor, sit, amet consectetur adipisicing elit.</p>
				</div>

				<div id="login">
					<h4><span>Identificate</span></h4>
					<form action="">
						<label for="name" id="">
							Nombre:
						</label>
						<input type="text" name="name" id="form-name">
						<label for="name">
							Email:
						</label>
						<input type="email" name="email" id="form-email">
						<label for="name">
							Contraseña:
						</label>
						<input type="password" name="password" id="form-pass">

						<input type="submit" value="Entrar">

					</form>
				</div>
			</aside>
			<div class="clearfix"></div>	
		</section>
	</section>
	<!--*******************************************************************
										FOOTER
		*******************************************************************-->
		<footer>
			Victor Anota Barbosa &copy;
			<a href="#" class="subir">Ir arriba</a>
		</footer>
		<script type="text/javascript" src="js/funciones.js"></script>
</body>
</html>
