import { onMounted, shallowRef } from "vue"
import { Graph, Shape } from '@antv/x6'
import { useRegister } from './register'
import mmit from '@/utils/mmit'

export const useGraph = (elRef) => {
  const graph = shallowRef(null);

  const initGraph = () => {
    useRegister()
    graph.value = new Graph({
      container: elRef.value,
      grid: true,
      // mousewheel: {
      //   enabled: true,
      //   zoomAtMousePosition: true,
      //   modifiers: 'ctrl',
      //   minScale: 0.5,
      //   maxScale: 3,
      // },
      connecting: {
        router: 'manhattan',
        connector: {
          name: 'rounded',
          args: {
            radius: 8,
          },
        },
        anchor: 'center',
        connectionPoint: 'anchor',
        allowBlank: false,
        snap: {
          radius: 20,
        },
        createEdge() {
          return new Shape.Edge({
            attrs: {
              line: {
                stroke: '#A2B1C3',
                strokeWidth: 2,
                targetMarker: {
                  name: 'block',
                  width: 12,
                  height: 8,
                },
              },
            },
            zIndex: 0,
          })
        },
        validateConnection({ targetMagnet }) {
          return !!targetMagnet
        },
      },
      highlighting: {
        magnetAdsorbed: {
          name: 'stroke',
          args: {
            attrs: {
              fill: '#5F95FF',
              stroke: '#5F95FF',
            },
          },
        },
      },
    })

    // 画布初始化完成
    mmit.emit('graph-init')
  }

  onMounted(() => {
    initGraph()
  })

  return {
    graph
  }
}