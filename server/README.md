# Bootstrap

Update packages:

```
sudo yum update -y
```

Install necessary dev tools:

```
sudo yum install -y gcc gcc-c++ make openssl-devel git
```

Install NodeJS:

```
curl --silent --location https://rpm.nodesource.com/setup_10.x | sudo bash -
sudo yum install -y nodejs
```

Install pm2:

```
sudo npm install pm2@latest -g
```

Install MySQL (MariaDB):

```

$ sudo dnf update -y
$ sudo dnf install mariadb105-server

# Start the MariaDB Server
$ sudo systemctl start mariadb

# Run mysql_secure_installation
$ sudo mysql_secure_installation


# Stop Maria DB
$ sudo systemctl stop mariadb

```

# REST API connection

```

GET /admin → getMultiple()
POST /admin → create()
DELETE /admin/:id → remove()

```
