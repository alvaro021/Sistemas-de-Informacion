<template>
  <div id="wrapper">
    <section id="three" class="wrapper style4 fade-up">
      <div class="inner">
        <h2>Haz tu Pedido</h2>
        <p>y lleva el amor a tu casa</p>
        <div class="style4">
          <section>
            <form method="post" action="#">
              <div>
                <div class="field">
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
                </div>
                <div class="field">
                  <label for="message">Detalles del pedido</label>
                  <textarea name="message" id="message" rows="5"></textarea>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </section>
    <section id="three" class="wrapper style3 fade-up">
      <div class="inner">
        <h2>Datos de Despacho</h2>
        <p>Completa el formulario para la entrega del producto</p>
        <div class="style3">
          <section>
            <form method="post" action="#">
              <div>
                <div class="field">
                  <label for=""> Dirección De Entrega</label>
                  <input type=" " />
                  <label for="tipo">Comuna</label>
                  <input list="browsers3" name="Comuna" id="Comuna" />
                  <datalist id="browsers3">
                    <option value="Padre Las Casas"></option>
                    <option value="Temuco"></option>
                    <option value="Labranza"></option>
                  </datalist>
                  <label for=""> Nombre de Quien Recibe</label>
                  <input type="text" style="width: 50%" />
                </div>
                <div class="field">
                  <label for="message">Detalles del Despacho</label>
                  <textarea name="message" id="message" rows="5"></textarea>
                </div>
              </div>
              <div class="actions">
                <a href="/Home" class="button submit" onclick="alert('Tu pedido ha sido enviado con exito')">Enviar</a>
              </div>
            </form>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>
