const express = require('express');
const cors = require('cors');
const crypto = require("crypto");
const { error } = require('console');

const app = express();
app.use(cors());
app.use(express.json());


const PORT = 4000;

app.get("/generate-keys", (req, res) => {
    const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
        modulusLength: 2048,
        publicKeyEncoding: {
            type: "spki",
            format: "pem",
        },
        privateKeyEncoding: {
            type: "pkcs8",
            format: "pem",
        },
    });

    res.json({ publicKey, privateKey });
});

app.post("/sign", (req, res) => {
    const { message, privateKey } = req.body;

    try {
        const signer = crypto.createSign("SHA256");
        signer.update(message);
        signer.end();

        // Signature
        const signature = signer.sign(privateKey, "base64");

        // Hashed message
        const hash = crypto.createHash("sha256").update(message).digest("hex");

        res.json({
            originalMessage: message,
            hashedMessage: hash,
            signature: signature
        });
    } catch (err) {
        res.status(500).json({ error: "Signing failed", details: err.message });
    }
});


app.post("/verify", (req, res) => {
  const { message, signature, publicKey } = req.body;

  try {
    const verifier = crypto.createVerify("SHA256");
    verifier.update(message);
    verifier.end();

    const isVerified = verifier.verify(publicKey, signature, "base64");

    const rehashed = crypto.createHash("sha256").update(message).digest("hex");

    res.json({
      message,
      rehashedMessage: rehashed,
      signature,
      verified: isVerified,
      status: isVerified ? "Valid Signature" : "Invalid Signature (Tampered?)"
    });
  } catch (err) {
    res.status(500).json({ error: "Verification failed", details: err.message });
  }
});

app.listen(PORT, () => {
    console.log(`Server is running on the http:localhost:${PORT}`);
})
