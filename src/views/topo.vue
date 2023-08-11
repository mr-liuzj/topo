<template>
  <div class="wrapper">
    <Sidebar />
    <div class="content">
      <div class="toolbar"></div>
      <div class="container" ref="containerEl"></div>
    </div>
  </div>
</template>

<script setup>
import { useGraph } from "@/utils";
import { getCurrentInstance, provide, shallowRef } from "vue";
import Sidebar from "@/components/topo/sidebar.vue";

const containerEl = shallowRef(null);

const instance = getCurrentInstance();

const { graph } = useGraph(containerEl);

provide('instance', instance);
provide('graph', graph);

window.graph = graph;
</script>

<script>
export default {
  name: "topo-page",
};
</script>

<style lang="scss">
.wrapper {
  height: 100%;
  width: 100%;
  background-color: #f2f3f5;
  display: flex;
  .content {
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    .toolbar {
      height: 40px;
    }
    .container {
      flex-grow: 1;
      width: 100%;
    }
  }
}
</style>