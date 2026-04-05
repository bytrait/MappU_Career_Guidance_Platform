# assessment-service/Dockerfile

FROM node:20-alpine

WORKDIR /app

# Copy dependencies files
COPY package*.json ./

RUN npm install --production

# Copy rest of the source code
COPY . .

# Expose service port
EXPOSE 8200

CMD ["npm", "start"]
