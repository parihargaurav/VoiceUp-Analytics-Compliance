
# 📊 VoiceUp Conversation Analytics

A prototype system for analyzing customer support conversations to detect sentiment/emotions and check for compliance violations. Built as part of the VoiceUp Analytics & Compliance interview assignment.

---

## 🚀 Project Overview

This app provides:
- Emotion & sentiment detection per message
- Compliance rule detection across conversations
- Compliance scoring
- Dashboard UI with visual charts and conversation summaries

---

## 🛠️ Tech Stack

| Layer     | Technology            |
|-----------|------------------------|
| Frontend  | React.js (Vite + Tailwind CSS) |
| Backend   | Django REST Framework |
| Database  | PostgreSQL            |
| NLP       | TextBlob / Custom Logic |

---



---

## 📥 Setup Instructions

### 1️⃣ Backend (Django)

```bash
cd backend
python -m venv env
source env/bin/activate  # or env\Scripts\activate on Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py loaddata sample_data.json  # optional: mock data
python manage.py runserver
```

API runs at: `http://localhost:8000/api/`

---

### 2️⃣ Frontend (React + Vite)

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173/`

---

## 🧪 Features

* ✅ View mock conversations
* 🎭 Sentiment/emotion detection per message
* ⚖️ Compliance rule detection
* 📈 Dashboard with:

  * Compliance vs Non-Compliance %
  * Emotion distribution chart
  * Top violated rules



## 📌 Sample Compliance Rules

| Rule # | Description                            |
| ------ | -------------------------------------- |
| 1      | Greet the customer at the beginning    |
| 2      | Apologize for frustration/anger        |
| 3      | Confirm issue resolution before ending |
| 4      | Avoid unsupported claims               |
| 5      | Personalize by name                    |


