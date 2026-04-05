# api-gateway/Dockerfile

# Use Node.js LTS
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy source code
COPY . .

# Expose API Gateway port
EXPOSE 4000

# Start server
CMD ["npm", "start"]
