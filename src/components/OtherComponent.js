import React, { useState } from 'react';
import SomeActionComponent from './SomeActionComponent';
import TextArea from './TextArea';

function OtherComponent() {
  const [copiedText, setCopiedText] = useState('');

  const handleCopy = (text) => {
    setCopiedText(text);
  };

  return (
    <div>
      <TextArea onCopy={handleCopy} />
      <SomeActionComponent copiedText={copiedText} />
    </div>
  );
}

export default OtherComponent;
