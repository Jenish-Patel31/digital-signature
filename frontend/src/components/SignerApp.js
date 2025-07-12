import React, { useState } from 'react';
import Sender from './Sender';
import Receiver from './Receiver';

function SignerApp() {
  const [message, setMessage] = useState('');
  const [signature, setSignature] = useState('');
  const [hashed, setHashed] = useState('');

  const clearAll = () => {
    setMessage('');
    setSignature('');
    setHashed('');
  };

  return (
    <div className="space-y-10">
      <Sender
        message={message}
        setMessage={setMessage}
        signature={signature}
        setSignature={setSignature}
        hashed={hashed}
        setHashed={setHashed}
        clearAll={clearAll}
      />
      <Receiver
        message={message}
        signature={signature}
      />
    </div>
  );
}

export default SignerApp;
