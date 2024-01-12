mkdir run

#wget https://github.com/Conflux-Chain/conflux-rust/releases/download/v2.2.3/conflux_linux_glibc2.27_x64_v2.2.3.zip
wget https://confluxpos.cn/conflux.zip
unzip conflux.zip

cd run

wget https://confluxpos.cn/hydra.toml.sh

mv hydra.toml.sh hydra.toml

echo "sed  -i -e   's/#mining_author#/$(cat ../walletAddress.txt)/g'  hydra.toml" |   bash -


wget https://conflux-blockchain-data.oss-cn-beijing.aliyuncs.com/fullnode-db/M/download.sh 
bash download.sh
tar -xvzf conflux-*.tgz 
rm conflux-*.tgz


sh start.sh
