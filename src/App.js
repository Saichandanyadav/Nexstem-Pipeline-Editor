import React, { useState, useCallback, useEffect } from 'react';
import ReactFlow, {
  addEdge,
  ReactFlowProvider,
  Controls,
  Background,
  MiniMap,
  useNodesState,
  useEdgesState,
  useReactFlow
} from 'reactflow';
import 'reactflow/dist/style.css';
import ControlsPanel from './components/ControlsPanel';
import CustomNode from './components/CustomNode';
import { validateDAG } from './utils/dagValidation';
import { getLayoutedElements } from './utils/layoutHelper';

const nodeTypes = { custom: CustomNode };
let id = 0;
const getId = () => `node_${id++}`;

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(() => {
    const storedNodes = localStorage.getItem('rf-nodes');
    return storedNodes ? JSON.parse(storedNodes) : [];
  });

  const [edges, setEdges, onEdgesChange] = useEdgesState(() => {
    const storedEdges = localStorage.getItem('rf-edges');
    return storedEdges ? JSON.parse(storedEdges) : [];
  });

  const [dagStatus, setDagStatus] = useState({ isValid: true, reasons: [] });
  const [modalOpen, setModalOpen] = useState(false);
  const [nodeLabel, setNodeLabel] = useState('');
  const [error, setError] = useState('');
  const [showInstructions, setShowInstructions] = useState(false);
  const { fitView } = useReactFlow();

  useEffect(() => {
    const result = validateDAG(nodes, edges);
    setDagStatus(result);
    localStorage.setItem('rf-nodes', JSON.stringify(nodes));
    localStorage.setItem('rf-edges', JSON.stringify(edges));
  }, [nodes, edges]);

  const onConnect = useCallback((params) => {
    if (params.source === params.target) return;
    setEdges(eds => addEdge({ ...params, markerEnd: { type: 'arrowclosed' } }, eds));
  }, [setEdges]);

  const handleAddNode = () => {
    if (!nodeLabel.trim()) {
      setError('Node label cannot be empty.');
      return;
    }
    const newNode = {
      id: getId(),
      type: 'custom',
      data: { label: nodeLabel },
      position: { x: Math.random() * 400, y: Math.random() * 400 },
    };
    setNodes(nds => [...nds, newNode]);
    setModalOpen(false);
    setNodeLabel('');
    setError('');
  };

  const onAutoLayout = () => {
    const layout = getLayoutedElements(nodes, edges);
    setNodes(layout.nodes);
    setEdges(layout.edges);
    fitView();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Delete') {
        setNodes(nds => nds.filter(n => !n.selected));
        setEdges(eds => eds.filter(e => !e.selected));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setNodes, setEdges]);

  return (
    <>
      <ControlsPanel openModal={() => setModalOpen(true)} onAutoLayout={onAutoLayout} />
      <div className="instructions-dropdown">
        <button onClick={() => setShowInstructions(prev => !prev)}>
          {showInstructions ? 'Hide Instructions' : 'Show Instructions'}
        </button>
        {showInstructions && (
          <div className="instructions">
            <h4>Steps to Use</h4>
            <ul>
              <li>Click <b>Add Node</b> to create a new node.</li>
              <li>Enter a non-empty label to add a node.</li>
              <li>Drag from a green handle (right) to a red handle (left) to connect nodes.</li>
              <li>Click <b>Auto Layout</b> to organize nodes.</li>
              <li>Press <b>Delete</b> key to remove selected nodes/edges.</li>
            </ul>
          </div>
        )}
      </div>
      {modalOpen && (
        <div className="node-form-modal">
          <div className="node-form">
            <input
              value={nodeLabel}
              onChange={(e) => setNodeLabel(e.target.value)}
              placeholder="Enter node label"
            />
            {error && <div className="error">{error}</div>}
            <button className="add" onClick={handleAddNode}>Create Node</button>
            <button className="cancel" onClick={() => { setModalOpen(false); setError(''); }}>Cancel</button>
          </div>
        </div>
      )}
      <div className="status-bar">
        {dagStatus.isValid ? '✅ Valid DAG' : `❌ Invalid: ${dagStatus.reasons.join(', ')}`}
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background variant="dots" gap={12} size={1} />
        <MiniMap nodeStrokeColor={() => '#3b82f6'} />
        <Controls />
      </ReactFlow>
    </>
  );
}

export default function App() {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}
