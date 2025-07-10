# Base image with Node.js 20 and dev tools
FROM mcr.microsoft.com/devcontainers/javascript-node:20

# Install dependencies required by Cypress
RUN apt-get update && apt-get install -y \
    libgtk2.0-0 \
    libgtk-3-0 \
    libgbm-dev \
    libnotify-dev \
    libgconf-2-4 \
    libnss3 \
    libxss1 \
    libasound2 \
    xvfb \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /workspaces/cypress-for-codespaces

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the project
COPY . .