import React from 'react';

const ControlsPanel = ({ openModal, onAutoLayout }) => (
  <div className="controls-panel">
    <h3>Pipeline Controls</h3>
    <button onClick={openModal}>Add Node</button>
    <button onClick={onAutoLayout}>Auto Layout</button>
  </div>
);

export default ControlsPanel;
