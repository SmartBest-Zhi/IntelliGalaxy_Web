<template>
  <div style="background-color: black;height: 25vh">
    <a-image :src="bannerImage" :preview="false" width="100%" height="100%">
    </a-image>
    <a-input-group
        compact
        class="input-group"
    >
      <a-input
          v-model:value="value19"
          style="width: calc(50% - 200px);  "
      >
        <template #prefix>
          <user-outlined />
        </template>
      </a-input>
      <a-button type="primary">Submit</a-button>
    </a-input-group>
  </div>
</template>

<script setup lang="ts">
import bannerImage from "~/assets/Banner.jpg";
import { UserOutlined, InfoCircleOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
const userName = ref<string>('');
</script>



<style scoped>
.input-group{
  position: absolute;
  top: 12.5%;
  left: 52.5%;
  transform: translate(-25%, -50%);
}
</style>