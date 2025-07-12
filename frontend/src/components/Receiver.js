import React, { useState } from 'react';
import axios from 'axios';

function Receiver() {
  const [message, setMessage] = useState(localStorage.getItem('message') || '');
  const [signature, setSignature] = useState(localStorage.getItem('signature') || '');
  const [publicKey, setPublicKey] = useState(localStorage.getItem('publicKey') || '');
  const [status, setStatus] = useState(localStorage.getItem('status') || '');
  const [rehashed, setRehashed] = useState(localStorage.getItem('rehashed') || '');

  const verify = async () => {
    try {
      const res = await axios.post('http://localhost:4000/verify', {
        message,
        signature,
        publicKey,
      });

      setRehashed(res.data.rehashedMessage);
      setStatus(res.data.status);

      // Persist for refresh
      localStorage.setItem('publicKey', publicKey);
      localStorage.setItem('status', res.data.status);
      localStorage.setItem('rehashed', res.data.rehashedMessage);
    } catch (err) {
      console.error(err);
      alert('Verification failed.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">📩 Receiver</h2>

      <label className="font-medium">Received Message:</label>
      <textarea
        className="w-full p-2 border rounded mb-4"
        rows={3}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter received message..."
      />

      <label className="font-medium">Signature (base64):</label>
      <textarea
        className="w-full p-2 border rounded mb-4"
        rows={3}
        value={signature}
        onChange={(e) => setSignature(e.target.value)}
        placeholder="Paste received signature..."
      />

      <label className="font-medium">Public Key:</label>
      <textarea
        className="w-full p-2 border rounded mb-4"
        rows={6}
        value={publicKey}
        onChange={(e) => setPublicKey(e.target.value)}
        placeholder="Paste sender's public key here..."
      />

      <button
        onClick={verify}
        className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        Verify Signature
      </button>

      {status && (
        <div className="mt-6">
          <p><strong className="text-blue-700">Rehashed Message:</strong></p>
          <p className="bg-gray-100 p-2 font-mono text-sm rounded">{rehashed}</p>

          <p className="mt-4"><strong className="text-blue-700">Verification Result:</strong></p>
          <p className={`font-bold text-lg ${status.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>
            {status}
          </p>
        </div>
      )}
    </div>
  );
}

export default Receiver;



// import React, { useState } from 'react';
// import axios from 'axios';

// function Receiver() {
//     const [message, setMessage] = useState('');
//     const [signature, setSignature] = useState('');
//     const [publicKey, setPublicKey] = useState('');
//     const [status, setStatus] = useState('');
//     const [rehashed, setRehashed] = useState('');

//     const verify = async () => {
//         try {
//             const res = await axios.post('http://localhost:4000/verify', {
//                 message,
//                 signature,
//                 publicKey,
//             });

//             setStatus(res.data.status);
//             setRehashed(res.data.rehashedMessage);
//         } catch (err) {
//             console.error(err);
//             alert('Verification failed.');
//         }
//     };

//     return (
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-xl font-semibold mb-4">📩 Receiver</h2>

//             <label className="font-medium">Received Message:</label>
//             <textarea
//                 className="w-full p-2 border rounded mb-4"
//                 rows={3}
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 placeholder="Enter received message..."
//             />

//             <label className="font-medium">Signature (base64):</label>
//             <textarea
//                 className="w-full p-2 border rounded mb-4"
//                 rows={3}
//                 value={signature}
//                 onChange={(e) => setSignature(e.target.value)}
//                 placeholder="Paste received signature..."
//             />

//             <label className="font-medium">Public Key:</label>
//             <textarea
//                 className="w-full p-2 border rounded mb-4"
//                 rows={6}
//                 value={publicKey}
//                 onChange={(e) => setPublicKey(e.target.value)}
//                 placeholder="Paste sender's public key here..."
//             />

//             <button
//                 onClick={verify}
//                 className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
//             >
//                 Verify Signature
//             </button>

//             {status && (
//                 <div className="mt-6">
//                     <p><strong className="text-blue-700">Rehashed Message:</strong></p>
//                     <p className="bg-gray-100 p-2 font-mono text-sm rounded">{rehashed}</p>

//                     <p className="mt-4"><strong className="text-blue-700">Verification Result:</strong></p>
//                     <p className={`font-bold text-lg ${status.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>
//                         {status}
//                     </p>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Receiver;
