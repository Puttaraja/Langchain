# ⚙️ Backend Setup Guide (FastAPI)

## 📁 Step 1: Navigate to the Backend Directory
cd server2

## 🧪 Step 2: Create and Activate Virtual Environment
python -m venv venv
venv\Scripts\activate  # For Windows

# or use below for macOS/Linux
# source venv/bin/activate

## 📦 Step 3: Install Required Dependencies
pip install -r requirement.txt --no-user

## 🔐 Step 4: Configure Environment Variables
Create a .env file in the server2 directory and add:
AZURE_OPENAI_KEY=your_azure_api_key
AZURE_OPENAI_ENDPOINT=https://your-resource-name.openai.azure.com/
AZURE_OPENAI_DEPLOYMENT_NAME=your-deployment-name
AZURE_OPENAI_VERSION=2024-05-13  # or your preferred API version

## 🚀 Step 5: Run the FastAPI Server
uvicorn main:app --reload

The server will start at:
http://127.0.0.1:8000
✅ You're all set! You can now connect your frontend to the backend and test the resume analyzer.
