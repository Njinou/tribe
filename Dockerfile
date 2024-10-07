# Dockerfile for Expo React Native app
# Use the official Node.js image as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
# Install the app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the app port (replace with your app's port, e.g., 8080)
#EXPOSE 8080
EXPOSE 19000

# Define the command to run your app (change this if needed)
CMD ["npm", "start"]

# Specify the maintainer
LABEL maintainer="nitcheupascal@gmail.com"