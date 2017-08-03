#! /bin/bash


#TODO: download the image to your home dir

# To get the latest and greatest version, install Docker from the official Docker repository
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get -y update
apt-cache policy docker-ce
sudo apt-get install -y docker-ce
# check the status:
#sudo systemctl status docker
cd ~
sudo docker load < creditrisk.tar
sudo docker run -d -p 8888:5001 alicefengacr.azurecr.io/adtest

sudo iptables -I INPUT -p tcp --dport 8888 -j ACCEPT #ADS web service
#TODO: open port 8888 on the nsg for inbound