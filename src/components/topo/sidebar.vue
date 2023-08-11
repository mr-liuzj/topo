<template>
  <div class="sidebar" ref="dndContainer">
    <h3>基础图形</h3>
    <div class="group">
        <div class="rect" @mousedown="handleDrag"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent, inject, shallowRef } from "vue";
import { Dnd } from '@antv/x6-plugin-dnd'
import mmit from '@/utils/mmit'

export default defineComponent({
  name: "topo-sidebar",
  setup() {
    const dnd = shallowRef(null)
    const dndContainer = shallowRef(null)
    const graph = inject('graph')

    const handleDrag = (e) => {
        const node = graph.value.createNode({
            shape: 'g1-rect',
            label: 'text',
            attrs: {
                body: {
                    rx: 20,
                    ry: 26
                }
            }
        })
        dnd.value.start(node, e)
    }

    
    mmit.on('graph-init', () => {
        dnd.value = new Dnd({
            target: graph.value,
            scaled: false,
            dndContainer: dndContainer.value
        })
    })

    return {
        handleDrag
    }
  },
});
</script>
<style lang="scss" scoped>
.sidebar {
    padding: 16px;
  width: 300px;
  height: 100%;
  background-color: #fff;
  border-right: 1px solid #ccc;

  .group {
    margin-top: 8px;
    .rect {
        width: 70px;
        height: 40px;
        border: 1px solid red;
    }
  }
}
</style>