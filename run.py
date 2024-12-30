import subprocess
import sys
import os

# Step 1: Git commit and push
commit_message = input("Enter commit message: ")

# Check if there are changes to commit
try:
    status_output = subprocess.check_output(["git", "status", "--porcelain"], text=True)
    if not status_output.strip():
        print("No changes to commit. Skipping Git operations.")
    else:
        # Git add and commit
        subprocess.check_call(["git", "add", "."])
        subprocess.check_call(["git", "commit", "-m", commit_message])

        # Git push
        try:
            subprocess.check_call(["git", "push", "origin", "main"])  # Replace 'main' with your branch name if needed
        except subprocess.CalledProcessError:
            print("Warning: Git push failed. Proceeding with caution.")
            # You can decide if you want to exit or continue with a warning
            # sys.exit(1)  # Uncomment this line if you want to stop the script on push failure
except subprocess.CalledProcessError as e:
    print(f"Git operation failed: {e}")
    sys.exit(1)  # Stop the script if git operations fail

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
