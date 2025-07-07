## ⚙️ Backend Setup Guide (FastAPI)

### 📁 Step 1: Navigate to the Backend Directory
cd server2

### 🧪 Step 2: Create and Activate Virtual Environment
python -m venv venv <br>
venv\Scripts\activate  # For Windows  <br>
or use below for macOS/Linux <br>
source venv/bin/activate <br>

## 📦 Step 3: Install Required Dependencies
pip install -r requirement.txt --no-user <br>

## 🔐 Step 4: Configure Environment Variables
Create a .env file in the server2 directory and add: <br>
AZURE_OPENAI_KEY=your_azure_api_key <br>
AZURE_OPENAI_ENDPOINT=https://your-resource-name.openai.azure.com/ <br>
AZURE_OPENAI_DEPLOYMENT_NAME=your-deployment-name <br>
AZURE_OPENAI_VERSION=2024-05-13  # or your preferred API version <br>

## 🚀 Step 5: Run the FastAPI Server
uvicorn main:app --reload <br>
 <br>
The server will start at: <br>
http://127.0.0.1:8000 <br>
✅ You're all set! You can now connect your frontend to the backend and test the resume analyzer.
