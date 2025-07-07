from azure.cosmos import CosmosClient
import os
from dotenv import load_dotenv
import uuid

load_dotenv()

endpoint = os.getenv("AZURE_COSMOS_DB_NOSQL_ENDPOINT")
key = os.getenv("AZURE_COSMOS_DB_NOSQL_KEY")
database_name = os.getenv("AZURE_COSMOS_DB_NOSQL_DATABASE_NAME")
container_name = os.getenv("AZURE_COSMOS_DB_NOSQL_CONTAINER_NAME")

client = CosmosClient(endpoint, key)
database = client.get_database_client(database_name)
container = database.get_container_client(container_name)

def save_reviews(resume_text: str, job_description: str, result: str):
    item = {
        "id": str(uuid.uuid4()),  # Required unique ID
        "resume": resume_text,
        "job_description": job_description,
        "review_result": result,
    }
    container.create_item(body=item)

def fetch_all_reviews():
    query = "SELECT * FROM c"
    return list(container.query_items(query=query, enable_cross_partition_query=True))

