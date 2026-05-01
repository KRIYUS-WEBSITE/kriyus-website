# 🌿 KRIYUS – Krida Evam Yuva Samiti
### Full-Stack NGO Website | React + Node.js + Google Sheets

---

## 📁 Project Structure

```
kriyus/
├── backend/                      # Node.js + Express API
│   ├── routes/
│   │   ├── contact.js            # POST /api/contact
│   │   ├── volunteer.js          # POST /api/volunteer
│   │   └── donate.js             # POST /api/donate
│   ├── middleware/
│   │   └── sheetsHelper.js       # Google Sheets integration
│   ├── server.js                 # Express app entry point
│   ├── .env.example              # Environment variable template
│   └── package.json
│
├── frontend/                     # React + Vite app
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── ImpactCounter.jsx
│   │   │   └── FormAlert.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Impact.jsx
│   │   │   ├── Collaborations.jsx
│   │   │   ├── Donate.jsx
│   │   │   ├── Volunteer.jsx
│   │   │   ├── Gallery.jsx
│   │   │   └── Contact.jsx
│   │   ├── api.js                # Axios client
│   │   ├── App.jsx               # Router
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── google-apps-script/
    └── Code.gs                   # Deploy this to Google Apps Script
```

---

## 🚀 Setup Instructions

### STEP 1 — Google Sheets Setup

#### 1A. Create the Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it: **KRIYUS NGO Data**
4. Copy the **Spreadsheet ID** from the URL:
   ```
   https://docs.google.com/spreadsheets/d/THIS_IS_THE_ID/edit
   ```

#### 1B. Deploy Google Apps Script

1. Go to [script.google.com](https://script.google.com)
2. Click **New Project** → Name it: `KRIYUS NGO Forms`
3. Delete the default code and paste the full contents of `google-apps-script/Code.gs`
4. Replace `YOUR_GOOGLE_SHEET_ID_HERE` with your actual Spreadsheet ID:
   ```javascript
   var SPREADSHEET_ID = 'your_actual_id_here';
   ```
5. **Run the setup function:**
   - Click **Run** → Select function: `setupSheets` → Run
   - Grant permission when prompted
   - This creates 3 sheets: CONTACTS, VOLUNTEERS, DONATIONS with headers

6. **Deploy as Web App:**
   - Click **Deploy** → **New deployment**
   - Click the gear icon → Select **Web app**
   - Description: `KRIYUS Forms v1`
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Click **Deploy**
   - ✅ **Copy the Web App URL** (you'll need it in the next step)

---

### STEP 2 — Backend Setup

```bash
cd backend
npm install
cp .env.example .env
```

Edit `.env` and fill in:
```env
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
PORT=5000
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
```

Start the backend:
```bash
npm run dev        # Development (with nodemon)
# OR
npm start          # Production
```

Test it's running:
```
GET http://localhost:5000/
→ { "success": true, "message": "KRIYUS API is running 🌿" }
```

---

### STEP 3 — Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Open: **http://localhost:5173**

The Vite dev server automatically proxies `/api/*` requests to `http://localhost:5000`.

---

### STEP 4 — Test End-to-End

1. Open http://localhost:5173/contact
2. Fill and submit the contact form
3. Check your Google Sheet → CONTACTS tab
4. A new row with your data should appear ✅

---

## ⚙️ Environment Variables

| Variable | Description | Required |
|---|---|---|
| `GOOGLE_APPS_SCRIPT_URL` | Apps Script Web App URL | ✅ Yes |
| `PORT` | Backend port (default: 5000) | Optional |
| `FRONTEND_URL` | Frontend URL for CORS | Optional |
| `NODE_ENV` | `development` or `production` | Optional |
| `EMAIL_USER` | Gmail for Nodemailer | Optional |
| `EMAIL_PASS` | Gmail App Password | Optional |
| `NOTIFY_EMAIL` | Email to notify on submissions | Optional |

---

## 🌐 API Endpoints

### POST /api/contact
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9999999999",
  "subject": "General Inquiry",
  "message": "Hello, I want to know more about KRIYUS."
}
```

### POST /api/volunteer
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+91 8888888888",
  "skills": "Teaching, Photography",
  "area": "Education & Literacy",
  "message": "I would like to volunteer with KRIYUS for 2 months."
}
```

### POST /api/donate
```json
{
  "name": "Rahul Sharma",
  "email": "rahul@example.com",
  "amount": "₹2,500",
  "program": "Women SHG Support",
  "message": "Keep up the great work!"
}
```

---

## 🗄️ Google Sheets Structure

### CONTACTS sheet
| Timestamp | Name | Email | Phone | Subject | Message |

### VOLUNTEERS sheet
| Timestamp | Name | Email | Phone | Skills | Area | Message |

### DONATIONS sheet
| Timestamp | Name | Email | Amount | Program | Message |

---

## 📦 Build for Production

### Frontend
```bash
cd frontend
npm run build
# Output: frontend/dist/
```

### Backend (PM2)
```bash
npm install -g pm2
cd backend
pm2 start server.js --name "kriyus-backend"
pm2 save
pm2 startup
```

---

## 🛠️ Adding Real Gallery Images

1. Put your `.jpg` / `.webp` images in `frontend/public/gallery/`
2. Update the `allItems` array in `frontend/src/pages/Gallery.jsx`:

```jsx
// Replace emoji placeholders with actual images:
{ cat:'field', src:'/gallery/village-visit.jpg', label:'Village Survey' }
```

And in the JSX render:
```jsx
<img src={item.src} alt={item.label} style={{ width:'100%', height:200, objectFit:'cover' }} />
```

---

## 🌍 Deployment Options

### Recommended: Railway / Render (Free)

**Backend (Render.com):**
1. Push code to GitHub
2. New Web Service → connect repo
3. Root directory: `backend`
4. Build command: `npm install`
5. Start command: `node server.js`
6. Add environment variables in Render dashboard

**Frontend (Vercel/Netlify):**
1. Root directory: `frontend`
2. Build command: `npm run build`
3. Output directory: `dist`
4. Update `FRONTEND_URL` in Render backend env

---

## 📞 Contact Details

| Field | Value |
|---|---|
| Organization | Krida Evam Yuva Samiti |
| Address | Village Sanghar, PO Baste, Pithoragarh – 262501, Uttarakhand |
| Phone | +91 9411336153 |
| Email | murarikeys2002@gmail.com |
| Bank | State Bank of India |
| A/C No. | 11801727127 |
| IFSC | SBIN0008426 |
| Branch | Nakote, Pithoragarh |

---

## 🤝 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite |
| Routing | React Router DOM v6 |
| UI Framework | Bootstrap 5 |
| Icons | Bootstrap Icons |
| HTTP Client | Axios |
| Backend | Node.js + Express |
| Data Storage | Google Sheets (via Apps Script) |
| Fonts | Poppins + Open Sans (Google Fonts) |

---

*Built with 🌿 for KRIYUS – Empowering Rural Communities of the Himalayas since 2002.*
