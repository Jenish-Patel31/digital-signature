import React, { useState } from 'react';
import axios from 'axios';

function Sender() {
  const [message, setMessage] = useState(localStorage.getItem('message') || '');
  const [privateKey, setPrivateKey] = useState(localStorage.getItem('privateKey') || '');
  const [hashed, setHashed] = useState(localStorage.getItem('hashed') || '');
  const [signature, setSignature] = useState(localStorage.getItem('signature') || '');

  const signMessage = async () => {
    try {
      const res = await axios.post('http://localhost:4000/verify/sign', {
        message,
        privateKey,
      });

      setHashed(res.data.hashedMessage);
      setSignature(res.data.signature);

      // Save to localStorage
      localStorage.setItem('message', message);
      localStorage.setItem('privateKey', privateKey);
      localStorage.setItem('hashed', res.data.hashedMessage);
      localStorage.setItem('signature', res.data.signature);
    } catch (err) {
      console.error(err);
      alert('Signing failed.');
    }
  };

  const clearAll = () => {
    setMessage('');
    setHashed('');
    setSignature('');
    localStorage.removeItem('message');
    localStorage.removeItem('hashed');
    localStorage.removeItem('signature');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">✍️ Sender</h2>

      <label className="font-medium">Message:</label>
      <textarea
        className="w-full p-2 border rounded mb-4"
        rows={3}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter the message to sign..."
      />

      <label className="font-medium">Private Key:</label>
      <textarea
        className="w-full p-2 border rounded mb-4"
        rows={6}
        value={privateKey}
        onChange={(e) => setPrivateKey(e.target.value)}
        placeholder="Paste your private key here..."
      />

      <div className="flex gap-3">
        <button
          onClick={signMessage}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Sign Message
        </button>
        <button
          onClick={clearAll}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Clear All
        </button>
      </div>

      {hashed && (
        <div className="mt-6">
          <p><strong className="text-blue-700">Hashed Message:</strong></p>
          <p className="bg-gray-100 p-2 font-mono text-sm rounded">{hashed}</p>

          <p className="mt-4"><strong className="text-blue-700">Signature (base64):</strong></p>
          <p className="bg-gray-100 p-2 font-mono text-sm rounded break-all">{signature}</p>
        </div>
      )}
    </div>
  );
}

export default Sender;





// import React, { useState } from 'react';
// import axios from 'axios';

// function Sender() {
//   const [message, setMessage] = useState('');
//   const [privateKey, setPrivateKey] = useState('');
//   const [hashed, setHashed] = useState('');
//   const [signature, setSignature] = useState('');

//   const signMessage = async () => {
//     try {
//       const res = await axios.post('http://localhost:4000/sign', {
//         message,
//         privateKey,
//       });

//       setHashed(res.data.hashedMessage);
//       setSignature(res.data.signature);
//     } catch (err) {
//       console.error(err);
//       alert('Signing failed.');
//     }
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg">
//       <h2 className="text-xl font-semibold mb-4">✍️ Sender</h2>

//       <label className="font-medium">Message:</label>
//       <textarea
//         className="w-full p-2 border rounded mb-4"
//         rows={3}
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         placeholder="Enter the message to sign..."
//       />

//       <label className="font-medium">Private Key:</label>
//       <textarea
//         className="w-full p-2 border rounded mb-4"
//         rows={6}
//         value={privateKey}
//         onChange={(e) => setPrivateKey(e.target.value)}
//         placeholder="Paste your private key here..."
//       />

//       <button
//         onClick={signMessage}
//         className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//       >
//         Sign Message
//       </button>

//       {hashed && (
//         <div className="mt-6">
//           <p><strong className="text-blue-700">Hashed Message:</strong></p>
//           <p className="bg-gray-100 p-2 font-mono text-sm rounded">{hashed}</p>

//           <p className="mt-4"><strong className="text-blue-700">Signature (base64):</strong></p>
//           <p className="bg-gray-100 p-2 font-mono text-sm rounded break-all">{signature}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Sender;

