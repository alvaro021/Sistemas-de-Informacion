<template>
  <div id="wrapper">
    <section id="three" class="wrapper style3 fade-up">
      <div class="inner">
        <h2>Hiciste tu pedido?</h2>
        <p>Completa el formulario para la entrega del producto</p>
        <div class="split style3">
          <section>
            <form method="post" action="#">
              <div>
                <div class="field">
                  <label for="tipo">Tipo de Producto</label>
                  <input list="browsers" name="tipo" id="tipo" />
                  <datalist id="browsers">
                    <option value="Torta Tradicional"></option>
                    <option value="Torta Letter Cake"></option>
                    <option value="Mix de Galletas"></option>
                    <option value="Tortas Especiales"></option>
                  </datalist>
                  <label for="porciones">Cantidad de Porciones</label>
                  <input list="browser2" name="porciones" id="porciones" />
                  <datalist id="browser2">
                    <option value="2 porciones"></option>
                    <option value="4 porciones"></option>
                    <option value="8 porciones"></option>
                    <option value="16 porciones"></option>
                    <option value="32 porciones"></option>
                  </datalist>
                  <label for="porciones">Id de Producto</label>
                  <input list="browser2" name="porciones" id="porciones" />
                  <datalist id="browser2">
                    <option value="2 porciones"></option>
                    <option value="4 porciones"></option>
                    <option value="8 porciones"></option>
                    <option value="16 porciones"></option>
                    <option value="32 porciones"></option>
                  </datalist>
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
                  <input type="text" />
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
          <section>
            <ul class="contact">
              <li>
                <h3>Dirección</h3>
                <span
                  >los Pablos #2860, condominio FrankFurt II<br />
                  Temuco, Araucania<br />
                  Chile</span
                >
              </li>
              <li>
                <h3>Email</h3>
                <span>pasteleria.amazing.grace@gmail.com</span>
              </li>
              <li>
                <h3>Whatsapp</h3>
                <a href="https://api.whatsapp.com/message/IH6GHUEWSIXHP1"
                  >wa.me/message/IH6GHUEWSIXHP1</a
                >
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>
