#! /bin/bash


sudo apt-get -y update
sudo apt-get -y install nodejs
sudo apt-get -y install npm
sudo apt-get -y install git




sudo iptables -I INPUT -p tcp --dport 8080 -j ACCEPT #Portal Web