#!/bin/bash
grunt build

host="root@218.244.145.236"
serverDirName="/root/site_zengkai"
tar_name='dist.tar.gz'

tar czf $tar_name dist

ssh $host "mkdir -p ${serverDirName}"
scp $tar_name $host:$serverDirName

ssh $host << EOF
cd $serverDirName
#解压缩文件
tar xzf dist.tar.gz
rm dist.tar.gz

EOF

rm dist.tar.gz
