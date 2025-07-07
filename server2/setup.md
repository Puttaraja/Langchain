cd server2

Environment Set up:
python -m venv venv
venv\scripts\activate

Install Requirements:
pip install -r requirement.txt --no-user

Add required keys in .env file

run the application:
uvicorn main:app --reload

