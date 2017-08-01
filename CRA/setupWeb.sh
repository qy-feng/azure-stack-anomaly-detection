#! /bin/bash


sudo apt-get -y update
sudo apt-get -y install nodejs
sudo apt-get -y install npm
sudo apt-get -y install git

cd ~
git clone https://github.com/yingqunpku/azure-stack-anomaly-detection.git
cd azure-stack-anomaly-detection/CRA/WebApp/routes/

#TODO: parameterize the following two params
sudo sed -i "s/ADSHOST/192.168.102.16/g" score.js
sudo sed -i "s/ADSPORT/8888/g" score.js
cd ~/azure-stack-anomaly-detection/CRA/WebApp
sudo npm install -g supervisor
bash run.sh

sudo iptables -I INPUT -p tcp --dport 8080 -j ACCEPT #Portal Web
#TODO: open port 8080 on the nsg for inbound