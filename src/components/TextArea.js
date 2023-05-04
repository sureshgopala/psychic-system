import React, { useRef } from 'react';

function TextArea({ onCopy }) {
  const textareaRef = useRef(null);

  const handleCopy = () => {
    const text = textareaRef.current.value;
    onCopy(text);
  };

  return (
    <div>
      <textarea ref={textareaRef} />
      <button onClick={handleCopy}>Copy Text</button>
    </div>
  );
}

export default TextArea;
