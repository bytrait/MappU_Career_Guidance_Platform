# Base image
FROM python:3.12-slim

# Set working dir
WORKDIR /app

# Install system dependencies if needed
RUN apt-get update && apt-get install -y build-essential

# Copy requirements first for caching
COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

# Copy all files
COPY . .

# Expose FastAPI port
EXPOSE 9000

# Run migrations and start server
CMD ["sh", "-c", "alembic upgrade head && uvicorn main:app --host 0.0.0.0 --port 9000 --reload"]
