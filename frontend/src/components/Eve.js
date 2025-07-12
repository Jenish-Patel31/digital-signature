import React, { useState } from 'react';

function Eve() {
  const [message, setMessage] = useState(localStorage.getItem('message') || '');
  const [signature] = useState(localStorage.getItem('signature') || '');
  const [publicKey] = useState(localStorage.getItem('publicKey') || '');
  const [status, setStatus] = useState('');

  const tamperAndSend = () => {
    // Eve just updates localStorage with the tampered message
    localStorage.setItem('message', message);
    setStatus('Tampered message successfully injected to Receiver!');
  };

  const reset = () => {
    setMessage(localStorage.getItem('message') || '');
    setStatus('');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-red-600">💣 Attacker Simulation (Eve)</h2>

      <p className="text-sm text-gray-600 mb-4">
        Eve intercepted the original message and signature. She will tamper with the message (but not the signature) and inject it back into localStorage — so Receiver verifies a **fake message** using **original signature**.
      </p>

      <label className="font-medium">Tampered Message (change here):</label>
      <textarea
        className="w-full p-2 border rounded mb-4"
        rows={3}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Modify the original message..."
      />

      <label className="font-medium">Signature (unchanged):</label>
      <textarea
        className="w-full p-2 border rounded mb-4 bg-gray-100 text-gray-800"
        rows={3}
        value={signature}
        readOnly
      />

      <label className="font-medium">Public Key (unchanged):</label>
      <textarea
        className="w-full p-2 border rounded mb-4 bg-gray-100 text-gray-800"
        rows={6}
        value={publicKey}
        readOnly
      />

      <div className="flex gap-3">
        <button
          onClick={tamperAndSend}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Tamper & Forward to Receiver
        </button>

        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
        >
          Reset
        </button>
      </div>

      {status && (
        <div className="mt-6">
          <p className="font-bold text-red-500">{status}</p>
        </div>
      )}
    </div>
  );
}

export default Eve;
