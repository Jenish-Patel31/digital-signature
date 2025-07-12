import React, { useState } from 'react';
import axios from 'axios';

function GenerateKeys() {
    const [keys, setKeys] = useState({
        publicKey: localStorage.getItem('publicKey') || '',
        privateKey: localStorage.getItem('privateKey') || '',
    });

    const generate = async () => {
        try {
            const res = await axios.get('https://digital-signature-thku.onrender.com/generate-keys');
            setKeys(res.data);
            localStorage.setItem('publicKey', res.data.publicKey);
            localStorage.setItem('privateKey', res.data.privateKey);
        } catch (err) {
            console.error(err);
            alert('Key generation failed.');
        }
    };

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text).then(() => {
            alert(`${type} copied to clipboard!`);
        });
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">🔑 Generate RSA Key Pair</h2>
            <button
                onClick={generate}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Generate Keys
            </button>

            {keys.publicKey && (
                <div className="mt-6">
                    <div className="flex justify-between items-center mb-1">
                        <h3 className="font-bold text-blue-700">Public Key</h3>

                        <button
                            onClick={() => copyToClipboard(keys.publicKey, 'Public Key')}
                            className="cursor-pointer inline-block px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
                        >
                            Copy Public Key
                        </button>

                    </div>
                    <textarea
                        readOnly
                        rows={6}
                        className="w-full mt-1 p-2 border rounded text-sm font-mono"
                        value={keys.publicKey}
                    />

                    <div className="flex justify-between items-center mt-4 mb-1">
                        <h3 className="font-bold text-blue-700">Private Key</h3>
                        <div
                            onClick={() => copyToClipboard(keys.privateKey, 'Private Key')}
                            className="cursor-pointer inline-block px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
                        >
                            Copy Private Key
                        </div>

                    </div>
                    <textarea
                        readOnly
                        rows={8}
                        className="w-full mt-1 p-2 border rounded text-sm font-mono"
                        value={keys.privateKey}
                    />
                </div>
            )}
        </div>
    );
}

export default GenerateKeys;
