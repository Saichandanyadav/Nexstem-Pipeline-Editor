import dagre from 'dagre';

const nodeW = 172;
const nodeH = 36;

export function getLayoutedElements(nodes, edges, dir = 'LR') {
  const g = new dagre.graphlib.Graph();
  g.setDefaultEdgeLabel(() => ({}));
  g.setGraph({ rankdir: dir });
  nodes.forEach(n => g.setNode(n.id, { width: nodeW, height: nodeH }));
  edges.forEach(e => g.setEdge(e.source, e.target));
  dagre.layout(g);
  const layoutedNodes = nodes.map(n => {
    const pos = g.node(n.id);
    return { ...n, position: { x: pos.x - nodeW / 2, y: pos.y - nodeH / 2 } };
  });
  return { nodes: layoutedNodes, edges };
}
