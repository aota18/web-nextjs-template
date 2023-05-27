KEY_FILE_PATH="~/.ssh/image-gpt-key.pem"
BUILD_FOLDER_PATH="../build/."

USER="ec2-user"
SERVER_ADDR="35.160.108.71"
TARGET_PATH="~/api-server"

# Compress build files
echo "#### Compressing files..."
VERSION="1.0.0"
TARGET_NAME="build-$VERSION.tar.gz"
tar --exclude="node_modules/" -czvf $TARGET_NAME .

# Send Build zip file over server
echo "#### Send files..."
scp -i $KEY_FILE_PATH $TARGET_NAME $USER@$SERVER_ADDR:$TARGET_PATH