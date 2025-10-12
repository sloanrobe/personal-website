# 🌐 Personal Website

A responsive full-stack personal website built with **React (Vite)**, **Node.js**, **Express**, and **PostgreSQL**.  
The site showcases my work and includes a contact form that stores submissions in a database and sends email notifications using **Web3Forms**.

---

## 🚀 Features
- 💻 **Responsive design** that looks great on desktop, tablet, and mobile  
- ⚙️ **Backend API** built with Express and Node.js  
- 🗄️ **PostgreSQL database** integration for storing contact form submissions  
- 📧 **Web3Forms** email notification service  
- 🎨 **Custom React components** for sections like navigation, gallery, and contact form  
- 🔒 **Environment variables** handled securely through `.env`

---

## 🛠️ Tech Stack

**Frontend:** React (Vite), HTML, CSS  
**Backend:** Node.js, Express  
**Database:** PostgreSQL  
**Email Service:** Web3Forms  
**Version Control:** Git & GitHub


## 🏃 Getting Started (How to Run the Project)
## Follow these steps to get a local copy of the project up and running on your machine.

**1. Prerequisites**
- You'll need the following software installed:

Node.js (LTS version recommended)
npm (Node Package Manager)

**Installation**
- Clone the repository:

git clone [YOUR_REPOSITORY_URL]
cd [YOUR_PROJECT_FOLDER]

- Install dependencies:
This command will install all required packages for both the frontend and backend:

npm install

**2. Set up Environment Variables (Crucial Step):**
The project relies on secret keys and URLs, which are stored in an environment file to keep them safe from GitHub.

- Create a file named .env in the root directory of the project.
- Add the required variables below. You must replace the example values with your own keys and connection strings.

# Example .env file content (replace values with your actual keys)
DATABASE_URL="postgresql://your_database_connection_string"
WEB3FORMS_KEY="your-web3forms-access-key"

# RECOMMENDED: Also use variables for your URLs
FRONTEND_URL="http://localhost:5173"
BACKEND_URL="http://localhost:3000" # (or whatever port your server runs on)

# To Get Your Keys for Testing:

Database URL: Set up a free PostgreSQL database (e.g., on Neon or Supabase) and use your generated connection string.
Web3Forms Key: Sign up for a free account at Web3Forms to get your unique access key.

**3. Running the Application**
You will need two separate terminal windows to run the frontend and backend concurrently.

Terminal	Command	Purpose
- Terminal 1 (Backend)	node server.js	Starts the Express server and API.
- Terminal 2 (Frontend)	npm run dev	Starts the React development server.

Once both are running, open your browser to the local frontend address (usually http://localhost:5173).

Note: If you only want to view the site's design and content (and not test the contact form), you only need to run the frontend command: npm run dev.