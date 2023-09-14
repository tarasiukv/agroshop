<script setup>
</script>

<template>
  <div class="humberger__menu__overlay"></div>
  <div class="humberger__menu__wrapper">
    <div class="humberger__menu__logo">
      <a href="/"><img src="img/logo.png" alt=""></a>
    </div>
    <div class="humberger__menu__cart">
      <ul>
        <li><a href="#"><i class="fa fa-heart"></i> <span>{{ myItem }}</span></a></li>
        <li><a href="/cart"><i class="fa fa-shopping-bag"></i> <span>{{ cartItem }}</span></a></li>
      </ul>
      <div class="header__cart__price">item: <span>{{ counter }}</span></div>
    </div>
    <!--        <div class="humberger__menu__widget">-->
    <!--            <div class="header__top__right__language">-->
    <!--                <img src="img/language.png" alt="">-->
    <!--                <div>English</div>-->
    <!--                <span class="arrow_carrot-down"></span>-->
    <!--                <ul>-->
    <!--                    <li><a href="#">Ukraine</a></li>-->
    <!--                    <li><a href="#">English</a></li>-->
    <!--                </ul>-->
    <!--            </div>-->
    <!--            <div class="header__top__right__auth">-->
    <!--                <a href="/login"><i class="fa fa-user"></i> Login</a>-->
    <!--            </div>-->
    <!--        </div>-->

    <nav class="humberger__menu__nav mobile-menu">
      <ul>
        <li class="active"><a href="/">Головна</a></li>
        <li><a href="/shop">Каталог</a></li>
        <li><a href="/cart">Корзина</a></li>
        <li><a href="/contact">Контакти</a></li>
      </ul>
    </nav>
    <div id="mobile-menu-wrap"></div>
    <div class="header__top__right__social">
      <a href="#"><i class="fa fa-telegram"></i></a>
    </div>
    <div class="humberger__menu__contact">
      <ul>
        <li><i class="fa fa-envelope"></i> hello@colorlib.com</li>
        <li>Free Shipping for all Order of $99</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>
