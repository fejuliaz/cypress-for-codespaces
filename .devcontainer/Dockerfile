FROM mcr.microsoft.com/devcontainers/node:20

# Install Cypress dependencies (required for Electron browser)
RUN apt-get update && \
    apt-get install -y \
    xvfb libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev \
    libnss3 libxss1 libasound2 libxtst6 xauth x11-utils dbus-x11

# Install Cypress globally to cache it (optional)
RUN npm install -g cypress