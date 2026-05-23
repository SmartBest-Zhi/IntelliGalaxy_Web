<template>
  <a-row :gutter="16">
    <a-col
        v-for="(item, index) in items"
        :key="index"
        :xs="24"
        :sm="12"
        :md="8"
        :lg="6"
        :xl="4"
    >
      <!-- 商品卡片内容 -->
      <div class="product-card">
        <a-image :src="item.imageUrl" class="product-image" />
        <h3 class="product-title">{{ item.name }}</h3>  
        <p class="product-description">{{ item.description }}</p>
        <div class="product-price">Price: {{ item.price }}</div>
        <!-- 添加购买按钮或其他交互元素 -->
        <a-button type="primary" @click="addToCart(item)">Add to Cart</a-button>
      </div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
function addToCart(item) {
  // 添加商品到购物车的逻辑
  console.log(`Adding ${item.name} to cart.`);
}
const  items =  [
    // 示例商品数据
    { imageUrl: 'https://aliyuncdn.antdv.com/vue.png', name: 'Product 1', description: 'Description of Product 1', price: 99.99 },
    { imageUrl: 'https://aliyuncdn.antdv.com/vue.png', name: 'Product 1', description: 'Description of Product 1', price: 99.99 },
    { imageUrl: 'https://aliyuncdn.antdv.com/vue.png', name: 'Product 1', description: 'Description of Product 1', price: 99.99 },
    { imageUrl: 'https://aliyuncdn.antdv.com/vue.png', name: 'Product 1', description: 'Description of Product 1', price: 99.99 },
    { imageUrl: 'https://aliyuncdn.antdv.com/vue.png', name: 'Product 1', description: 'Description of Product 1', price: 99.99 },
    { imageUrl: 'https://aliyuncdn.antdv.com/vue.png', name: 'Product 1', description: 'Description of Product 1', price: 99.99 },
    { imageUrl: 'https://aliyuncdn.antdv.com/vue.png', name: 'Product 1', description: 'Description of Product 1', price: 99.99 },
    { imageUrl: 'https://aliyuncdn.antdv.com/vue.png', name: 'Product 1', description: 'Description of Product 1', price: 99.99 },
    { imageUrl: 'https://aliyuncdn.antdv.com/vue.png', name: 'Product 1', description: 'Description of Product 1', price: 99.99 },
    { imageUrl: 'https://aliyuncdn.antdv.com/vue.png', name: 'Product 1', description: 'Description of Product 1', price: 99.99 },
    { imageUrl: 'https://aliyuncdn.antdv.com/vue.png', name: 'Product 1', description: 'Description of Product 1', price: 99.99 },
    { imageUrl: 'https://aliyuncdn.antdv.com/vue.png', name: 'Product 1', description: 'Description of Product 1', price: 99.99 },
    { imageUrl: 'https://aliyuncdn.antdv.com/vue.png', name: 'Product 1', description: 'Description of Product 1', price: 99.99 },
    { imageUrl: 'https://aliyuncdn.antdv.com/vue.png', name: 'Product 1', description: 'Description of Product 1', price: 99.99 },
    { imageUrl: 'https://aliyuncdn.antdv.com/vue.png', name: 'Product 1', description: 'Description of Product 1', price: 99.99 },
    { imageUrl: 'https://aliyuncdn.antdv.com/vue.png', name: 'Product 1', description: 'Description of Product 1', price: 99.99 },
    { imageUrl: 'https://aliyuncdn.antdv.com/vue.png', name: 'Product 1', description: 'Description of Product 1', price: 99.99 },
    { imageUrl: 'https://aliyuncdn.antdv.com/vue.png', name: 'Product 1', description: 'Description of Product 1', price: 99.99 },
    // 更多商品...
  ]


</script>



<style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 16px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  margin-bottom: 2vh;
}

.product-image {
  width: 100%;
  height: auto;
  max-height: 200px;
  margin-bottom: 16px;
  border-radius: 4px;
}

.product-title {
  font-size: 18px;
  margin-bottom: 8px;
  color: #333;
}

.product-description {
  color: #666;
  line-height: 1.5;
  margin-bottom: 16px;
}

.product-price {
  font-weight: bold;
  color: #f50;
}

/* 根据需要调整按钮样式 */
.a-button-primary {
  margin-top: 16px;
}
</style>