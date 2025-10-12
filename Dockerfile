# Multi-stage Dockerfile for building a Vite React (TypeScript) app and serving with nginx

# --- Builder ---
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies (use package-lock if present for reproducible installs)
COPY package*.json ./
COPY bun.lockb ./
RUN if [ -f package-lock.json ]; then npm ci --silent; else npm install --silent; fi

# Copy rest of the sources and build
COPY . .
RUN npm run build --silent


# --- Production image ---
FROM nginx:stable-alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Use a simple nginx config that supports SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
