import React from 'react';
import { Handle, Position } from 'reactflow';

const CustomNode = ({ data }) => (
  <div style={{
    padding: 20,
    border: '2px solid #0284c7',
    borderRadius: 14,
    backgroundColor: '#e0f2fe',
    fontWeight: '600',
    textAlign: 'center',
    minWidth: 140,
    color: '#0f172a',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
  }}>
    <Handle type="target" position={Position.Left} style={{ background: '#ef4444' }} />
    {data.label}
    <Handle type="source" position={Position.Right} style={{ background: '#22c55e' }} />
  </div>
);

export default CustomNode;
