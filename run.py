import subprocess
import sys
import os

# Step 1: Git commit and push
commit_message = input("Enter commit message: ")

# Git add and commit
try:
    subprocess.check_call(["git", "add", "."])
    subprocess.check_call(["git", "commit", "-m", commit_message])
except subprocess.CalledProcessError:
    print("Git commit failed. Please check your changes.")
    sys.exit(1)  # Stop the script if git commit fails

# Git push
try:
    subprocess.check_call(["git", "push", "origin", "main"])  # Replace 'main' with your branch name if needed
except subprocess.CalledProcessError:
    print("Warning: Git push failed. Proceeding with caution.")
    # You can decide if you want to exit or continue with a warning
    # sys.exit(1)  # Uncomment this line if you want to stop the script on push failure

# Step 2: Run Docker Compose
print("Starting Docker containers...")
try:
    subprocess.check_call(["docker-compose", "up", "-d"])
except subprocess.CalledProcessError:
    print("Docker Compose failed. Please check your Docker configuration.")
    sys.exit(1)  # Stop the script if Docker Compose fails

# Step 3: Start the project
print("Starting the project...")
try:
    os.chdir("graphql-server")
    subprocess.check_call(["bun", "run", "dev"])  # Replace with your start command if needed
    os.chdir("..")
except subprocess.CalledProcessError:
    print("Failed to start the project. Please check your project configuration.")
    sys.exit(1)  # Stop the script if starting the project fails

print("Project started successfully!")
