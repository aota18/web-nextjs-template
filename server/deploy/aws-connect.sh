KEY_FILE_PATH="~/.ssh/image-gpt-key.pem"
BUILD_FOLDER_PATH="../build/."

USER="ec2-user"
SERVER_ADDR="35.160.108.71"
TARGET_PATH="~/api-server"


ssh -i $KEY_FILE_PATH $USER@$SERVER_ADDR