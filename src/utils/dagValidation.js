export function validateDAG(nodes, edges) {
  const reasons = [];
  if (nodes.length < 2) reasons.push("Minimum 2 nodes required");
  const adj = {};
  nodes.forEach(n => adj[n.id] = []);
  edges.forEach(e => {
    if (e.source !== e.target) adj[e.source].push(e.target);
  });
  const visited = {}, stack = {};
  const dfs = v => {
    visited[v] = true;
    stack[v] = true;
    for (let n of adj[v]) {
      if (!visited[n] && dfs(n)) return true;
      else if (stack[n]) return true;
    }
    stack[v] = false;
    return false;
  };
  for (let n of nodes) {
    if (!visited[n.id] && dfs(n.id)) reasons.push("Cycle detected");
  }
  const connected = id => edges.some(e => e.source === id || e.target === id);
  nodes.forEach(n => {
    if (!connected(n.id)) reasons.push(`Node ${n.data.label} is disconnected`);
  });
  return { isValid: reasons.length === 0, reasons };
}
