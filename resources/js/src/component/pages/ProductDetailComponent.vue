<script setup>
import axios from 'axios';
import {ref, onMounted} from 'vue';
import {useRoute} from 'vue-router';
import HeroComponent from "@component/features/HeroComponent.vue";

const route = useRoute();
const productId = ref(null);

const selectedProduct = ref();
const product = ref({});
const loadProduct = async (id) => {
  try {
    const {data} = await axios.get('/api/products/' + id);
    product.value = data;
  } catch (e) {
    console.log(e)
  }
};


onMounted(() => {
  productId.value = route.params.id;
  loadProduct(productId.value)
});
</script>

<template>
  <HeroComponent />

  <!-- Breadcrumb Section Begin -->
  <section class="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="breadcrumb__text">
            <h2>{{ product.title }}</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Breadcrumb Section End -->

  <!-- Product Details Section Begin -->
  <section class="product-details spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6">
          <div class="product__details__pic">
            <div class="product__details__pic__item">
              <img class="product__details__pic__item--large"
                   :src="`/storage/${product.file_path}`" alt="image">
            </div>
            <!--                        <div class="product__details__pic__slider owl-carousel">-->
            <!--                            <img data-imgbigurl="img/product/details/product-details-2.jpg"-->
            <!--                                 src="img/product/details/thumb-1.jpg" alt="image">-->
            <!--                            <img data-imgbigurl="img/product/details/product-details-3.jpg"-->
            <!--                                 src="img/product/details/thumb-2.jpg" alt="image">-->
            <!--                            <img data-imgbigurl="img/product/details/product-details-5.jpg"-->
            <!--                                 src="img/product/details/thumb-3.jpg" alt="image">-->
            <!--                            <img data-imgbigurl="img/product/details/product-details-4.jpg"-->
            <!--                                 src="img/product/details/thumb-4.jpg" alt="image">-->
            <!--                        </div>-->
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <div class="product__details__text">
            <h3>{{ product.title }}</h3>
            <div class="product__details__rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
              <span>(18 reviews)</span>
            </div>
            <div class="product__details__price">{{ product.price }}</div>
            <p>{{ product.description }}</p>
            <div class="product__details__quantity">
              <div class="quantity">
                <div class="pro-qty">
                  <input type="text" value="1">
                </div>
              </div>
            </div>
            <a href="#" class="primary-btn">До кошика</a>
            <a href="#" class="heart-icon"><span class="icon_heart_alt"></span></a>
            <ul>
              <li><b>Наявність</b> <span>В наявності</span></li>
              <li><b>Доставка</b> <span>01 day shipping. <samp>Free pickup today</samp></span></li>
              <li><b>Вага</b> <span>0.5 kg</span></li>
<!--              <li><b>Країна</b> <span>{{ product.country }}</span></li>-->
<!--              <li><b>Виробник</b> <span>{{ product.manufacture }}</span></li>-->
            </ul>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="product__details__tab">
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab"
                   aria-selected="true">Опис</a>
              </li>
<!--              <li class="nav-item">-->
<!--                <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab"-->
<!--                   aria-selected="false">Reviews <span>(1)</span></a>-->
<!--              </li>-->
            </ul>
            <div class="tab-content">
              <div class="tab-pane active" id="tabs-1" role="tabpanel">
                <div class="product__details__tab__desc">
                  <h6>Опис</h6>
                  <p>{{ product.description }}</p>
                </div>
              </div>
<!--              <div class="tab-pane" id="tabs-3" role="tabpanel">-->
<!--                <div class="product__details__tab__desc">-->
<!--                  <h6>Products Infomation</h6>-->
<!--                  <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.-->
<!--                    Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.-->
<!--                    Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam-->
<!--                    sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo-->
<!--                    eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.-->
<!--                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent-->
<!--                    sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac-->
<!--                    diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante-->
<!--                    ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;-->
<!--                    Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.-->
<!--                    Proin eget tortor risus.</p>-->
<!--                </div>-->
<!--              </div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Product Details Section End -->
</template>

<style scoped>

</style>
