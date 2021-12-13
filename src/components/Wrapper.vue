<template>
  <div id="wrapper">
    <!-- Intro -->
    <section id="intro" class="wrapper style1 fullscreen fade-up">
      <div class="inner">
        <h1>Pastelería Amazing Grace</h1>
        <p>
          En Amazing Grace nos esforzamos por entregar felicidad en tus días
          importantes y amamos poder compartir esos días contigo. Es de gran
          valor para nosotras entregar productos exclusivos, de calidad, con
          sabores e ingredientes únicos que, sin duda, te encantarán.
        </p>
        <div>
            <a href="#one" class="button scrolly">Saber Más</a>
        </div>
      </div>
    </section>

    <!-- One -->
    <section id="one" class="wrapper style2 spotlights">
      <section>
        <a href="#" class="image"
          ><img src="../assets/logo.png" alt="" data-position="center center"
        /></a>
        <div class="content">
          <div class="inner">
            <h2>Instagram</h2>
            <p>Conoce nuestros trabajos realizados.</p>
            <div>
                <a
                  href="https://www.instagram.com/pasteleria_amazinggrace/?hl=es-la"
                  class="button"
                  >Ver Más</a>
            </div> 
          </div>
        </div>
      </section>
      <section>
        <div class="content">
          <div class="inner">
            <h2>¿Quiénes somos?</h2>
            <p>
              Somos Katherine (Administradora Gastronómica) y Cristina
              (Ingeniera Comercial y Pastelera Autodidacta), dos hermanas
              amantes de la pastelería quienes están detrás de Amazing Grace.
            </p>
          </div>
        </div>
        <img
          height="500"
          src="../assets/quienesSomos.png"
          alt=""
          data-position="top center"
        />
      </section>
      <section>
        <a href="#" class="image"
          ><img src="../assets/fotoCatalogo.png" alt="" data-position="25% 25%"></a>
        <div class="content">
          <div class="inner">
            <h2>Nuestro Catálogo</h2>
            <p>
              En este catálogo te mostraremos nuestras propuestas para que
              endulces tus momentos especiales, te invitamos a que lo veas y
              diseñemos juntos tu producto ideal.
            </p>
            <div>
              <a href="/Catalogo" class="button">Saber más</a>
            </div>
          </div>
        </div>
      </section>
    </section>

    <!-- Two -->
    <section id="two" class="wrapper style3 fade-up">
      <div class="inner">
        <h2>Nuestros Productos</h2>
        <p>
          Dentro de los productos que podemos ofrecerles, hay variedades para
          todos los gustos, desde tortas, cupcake, galletas y cajas mixtas,
          entre otros, con diseños desde un punto de vista tradicional hasta lo
          que a su imaginación se le pudiese ocurrir.
        </p>
        <div class="features">
          <section>
            <span class="icon solid major fa-code"></span>
            <h3>Box Mix Galletas</h3>
            <p>
              <img
                height="400"
                src="../assets/Imagen1.png"
                alt=""
                data-position="25% 25%"
              />
            </p>
          </section>
          <section>
            <span class="icon solid major fa-lock"></span>
            <h3>Torta Letter Cake</h3>
            <p>
              <img
                height="400"
                src="../assets/Imagen2.png"
                alt=""
                data-position="25% 25%"
              />
            </p>
          </section>
          <section>
            <span class="icon solid major fa-cog"></span>
            <h3>Mix de Degustaciones</h3>
            <p>
              <img
                height="400"
                src="../assets/Imagen3.png"
                alt=""
                data-position="25% 25%"
              />
            </p>
          </section>
          <section>
            <span class="icon solid major fa-desktop"></span>
            <h3>Alfajores De Maicena</h3>
            <p>
              <img
                height="400"
                src="../assets/Imagen4.png"
                alt=""
                data-position="25% 25%"
              />
            </p>
          </section>
          <section>
            <span class="icon solid major fa-link"></span>
            <h3>Torta Mario World</h3>
            <p>
              <img
                height="400"
                src="../assets/Imagen5.png"
                alt=""
                data-position="25% 25%"
              />
            </p>
          </section>
          <section>
            <span class="icon major fa-gem"></span>
            <h3>Torta Nutella/Chocolate</h3>
            <p>
              <img
                height="400"
                src="../assets/Imagen6.png"
                alt=""
                data-position="25% 25%"
              />
            </p>
          </section>
        </div>
      </div>
    </section>

    <!-- Three -->
    <section id="three" class="wrapper style4 fade-up">
      <div class="inner">
        <h2>Hiciste tu pedido?</h2>
        <p>Completa el formulario para la entrega del producto</p>
        <div class="split style4">
          <section>
            <form method="post" action="#">
              <div>
                <div class= "field">
                  <form action="/action_page.php" method="get">
                    <label for="tipo">Tipo de Producto</label>
                    <input list="browsers" name="tipo" id="tipo" />
                    <datalist id="browsers">
                      <option value="Torta Tradicional"></option>
                      <option value="Torta Letter Cake"></option>
                      <option value="Mix de Galletas"></option>
					  <option value="Tortas Especiales"></option>
                    </datalist>
                  </form>
				  <form action="/action_page.php" method="get">
                    <label for="porciones">Cantidad de Porciones</label>
                    <input list="browser2" name="porciones" id="porciones" />
                    <datalist id="browser2">
                      <option value="2 porciones"></option>
                      <option value="4 porciones"></option>
                      <option value="8 porciones"></option>
					  <option value="16 porciones"></option>
					  <option value="32 porciones"></option>
                    </datalist>
                  </form>
				  <form action="/action_page.php" method="get">
                    <label for="porciones">Id de Producto</label>
                    <input list="browser2" name="porciones" id="porciones" />
                    <datalist id="browser2">
                      <option value="2 porciones"></option>
                      <option value="4 porciones"></option>
                      <option value="8 porciones"></option>
					  <option value="16 porciones"></option>
					  <option value="32 porciones"></option>
                    </datalist>
                  </form>
				  <form action="">
					  <label for=""> Dirección De Entrega</label>
					  <label for=""> Nombre de Quien Recibe</label>
					  <label for=""> Comuna</label>
				  </form>
                </div>
                <div class="field">
                  <label for="message">Detalles del pedido</label>
                  <textarea name="message" id="message" rows="5"></textarea>
                </div>
              </div>
              <ul class="actions">
                <li><a href="" class="button submit">Enviar</a></li>
              </ul>
            </form>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>
