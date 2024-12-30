#!/bin/bash

# Step 1: Git commit and push
echo "Enter commit message: "
read commit_message

git add .
if ! git commit -m "$commit_message"; then
    echo "Git commit failed. Please check your changes."
    exit 1  # Stop the script if git commit fails
fi

if ! git push origin main; then  # or replace 'main' with your branch name
    echo "Warning: Git push failed. Proceeding with caution."
    # You can decide if you want to exit or continue with a warning
    # exit 1  # Uncomment this line if you want to stop the script on push failure
fi

# Step 2: Run Docker Compose
echo "Starting Docker containers..."
if ! docker-compose up -d; then
    echo "Docker Compose failed. Please check your Docker configuration."
    exit 1  # Stop the script if Docker Compose fails
fi

# Step 3: Start the project
echo "Starting the project..."
cd graphql-server
if ! bun run dev; then  # or replace with your start command
    echo "Failed to start the project. Please check your project configuration."
    exit 1  # Stop the script if starting the project fails
fi
cd ..
echo "Project started successfully!"

# Run command
# chmod +x start_project.sh