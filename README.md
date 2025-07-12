# 🔐 Digital Signature Demonstrator

A full-stack web application that simulates the process of **digitally signing messages** and verifying their integrity and authenticity. This project demonstrates the use of **RSA public/private key cryptography** with **SHA-256 hashing** in a secure digital communication flow.

Built with:
- ⚛️ React (Frontend)
- 🔧 Node.js + Express (Backend)
- ☁️ Vercel (Frontend hosting)
- ☁️ Render (Backend hosting)

---

## 📽️ Live Demo

- **Frontend (Vercel)**: [https://digital-signature.vercel.app](https://digital-signature-mu.vercel.app)
- **Backend (Render)**: [https://digital-signature-thku.onrender.com](https://digital-signature-thku.onrender.com)

---

## 🔧 Features

- ✅ **Generate RSA Key Pair** (Public & Private)
- ✍️ **Sign a Message** using SHA-256 + Private Key
- 📤 **Send Signed Message** to Receiver
- 🕵️ **Tamper Simulation** via "Eve"
- ✅ **Verify Signature** using Public Key
- 🚨 **Detect Tampering** of messages

---

## 📁 Project Structure

```
digital-signature/
├── frontend/ # React app (hosted on Vercel)
│ ├── src/
│ ├── public/
| ├── components/
│ └── package.json
├── backend/ # Express backend (hosted on Render)
│ ├── index.js
│ └── package.json
└── README.md
```

---

## 🚀 Getting Started (Local Setup)

### 1. Clone the repository
```bash
git clone https://github.com/Jenish-Patel31/digital-signature.git
cd digital-signature
```

### 2. Start the Backend
```
cd backend
npm install
npm start
# Running at http://localhost:4000
```
### 3. Start the Frontend
```
cd ../frontend
npm install
npm start
# Running at http://localhost:3000
```
note: Make sure to update Axios URLs in the frontend if testing with local or deployed backend.

## Deployment

### Backend on Render 
- Deployed as a Node.js web service.
- URL: ``` https://digital-signature-thku.onrender.com ```
### Frontend on Vercel
- React frontend deployed with vercel.
- URL: ```https://digital-signature.vercel.app```

## 📦 API Endpoints
| Endpoint         | Method | Description                       |
| ---------------- | ------ | --------------------------------- |
| `/generate-keys` | GET    | Generate RSA key pair             |
| `/sign`          | POST   | Sign a message with private key   |
| `/verify`        | POST   | Verify signature using public key |


## 👨‍💻 Author

**Jenish Patel**  
📧 [jenishpatel31@email.com](mailto:jenishpatel31@email.com)  
🔗 [GitHub](https://github.com/Jenish-Patel31)  
💼 [LinkedIn](https://www.linkedin.com/in/jenish-patel-31k/)
