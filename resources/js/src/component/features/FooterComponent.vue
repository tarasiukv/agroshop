<script>
import {defineComponent} from "vue";
export default defineComponent({
  components: {},
  setup() {
    return {
    }
  }
});
</script>

<template>
<footer class="footer spad">
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="footer__about">
          <div class="footer__about__logo">
            <a href="./index.html"><img src="img/logo.png" alt=""></a>
          </div>
          <ul>
            <li>Адреса: м. Тернопіль</li>
            <li>Телефон: +380 (00) 000 0000</li>
            <li>Email: hello@mail.com</li>
          </ul>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 offset-lg-1">
        <div class="footer__widget">
          <h6>Клієнтам</h6>
          <ul>
            <li><a href="/delivery">Інформація про доставку</a></li>
            <li><a href="/about">Хто ми</a></li>
            <li><a href="/contact">Контакти</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="footer__copyright">
          <div class="footer__copyright__text"><p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            <!--              Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>-->
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p></div>
          <div class="footer__copyright__payment"><img src="img/payment-item.png" alt=""></div>
        </div>
      </div>
    </div>
  </div>
</footer>
</template>

<style scoped>

</style>
