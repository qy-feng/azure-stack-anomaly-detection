# Credit Risk Assessment
This is a sample web app built upon the simple operationalized anomaly detection model.

## Deployment on Azure Stack
+ Prepare two Ubuntu VMs: one as Web VM, the other one as Docker VM
+ Download [setupADS.sh](https://github.com/yingqunpku/azure-stack-anomaly-detection/raw/master/CRA/setupADS.sh) on the Docker VM
+ Download the docker image **adtestapp.tar** and save it to home dir
+ Add TCP inbound rule of port **8888** to the Network Security Group of the Docker VM
+ Run "**bash setupADS.sh**" on the Docker VM
+ Download [setupWeb.sh](https://github.com/yingqunpku/azure-stack-anomaly-detection/raw/master/CRA/setupWeb.sh) on the Web VM
+ Run "**bash setupWeb.sh <IP_ADDRESS_OF_DOCKER_VM>**" on the Web VM, e.g. "bash setupWeb.sh 192.168.102.16"
+ Add TCP inbound rule of port **8080** to the Network Security Group of the Web VM

