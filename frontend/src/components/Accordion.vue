<template>
  <div>
    <a-collapse
        v-model:activeKey="activeKey"
        :bordered="false"
        style="background: rgb(255, 255, 255)"
    >
      <template #expandIcon="{ isActive }">
        <caret-right-outlined :rotate="isActive ? 90 : 0" />
      </template>
      <a-collapse-panel key="1" header="This is panel header 1" :style="customStyle">
        <p>{{ text }}</p>
      </a-collapse-panel>
      <a-collapse-panel key="2" header="This is panel header 2" :style="customStyle">
        <p>{{ text }}</p>
      </a-collapse-panel>
      <a-collapse-panel key="3" header="This is panel header 3" :style="customStyle">
        <p>{{ text }}</p>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import { CaretRightOutlined } from '@ant-design/icons-vue';
const activityList = ref([
  { name:"经济管理学", id: 1, progress: 50, quantity: 520, expanded: false },
  { name:"心理与健康", id: 2, progress: 40, quantity: 520, expanded: false },
  { name:"经济管理学", id: 3, progress: 30, quantity: 520, expanded: false },
])

const activeKey = ref(['1']);
const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
const customStyle =
    'background: #f7f7f7;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden';
</script>



<style scoped>

</style>