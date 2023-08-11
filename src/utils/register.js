import { Graph } from '@antv/x6'
import { basicPorts } from '@/configs/topo'

export const useRegister = () => {
    Graph.registerNode(
        'g1-rect',
        {
            inherit: 'rect',
            width: 66,
            height: 36,
            attrs: {
                body: {
                    strokeWidth: 1,
                    stroke: '#e2e3e5',
                    fill: 'pink',
                },
                text: {
                    fontSize: 12,
                    fill: '#666',
                },
            },
            ports: { ...basicPorts },

        }
    )
}