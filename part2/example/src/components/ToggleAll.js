import React from 'react';

const ToggleAll = ({ showAll, setShowAll }) => (
  <div>
    <button onClick={() => setShowAll(!showAll)}>
      show { showAll ? 'important' : 'all'}
    </button>
  </div>
);

export default ToggleAll;