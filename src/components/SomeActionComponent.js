import React from 'react';

function SomeActionComponent({ copiedText }) {
  const handleSomeAction = () => {
    console.log(`Copied text: ${copiedText}`);
    // Perform some action using the copied text
  };

  return (
    <div>
      <button onClick={handleSomeAction}>Perform Some Action</button>
    </div>
  );
}

export default SomeActionComponent;
