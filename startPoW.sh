# /bin/bash -c "$(curl -s https://confluxpos.cn/startPoW.sh)"    cfx:aam230uw0r23af7vyad7sazpwgfxscmp3u6gf4pmej

apt update && apt install -y   screen  zip  wget      
 
echo $0 > walletAddress.txt
wget https://confluxpos.cn/startPoWRun.sh
screen -S syncPoW -dm bash -c '  bash startPoWRun.sh $1'  
screen -R syncPoW

