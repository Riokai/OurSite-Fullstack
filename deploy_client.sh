#!/bin/bash
grunt build

host="root@218.244.145.236"
serverDirName="/root/site_zengkai/dist"
tar_name='pubilc.tar.gz'

tar czf $tar_name -C dist/ ./public

ssh $host "mkdir -p ${serverDirName}"
scp $tar_name $host:$serverDirName

ssh $host << EOF
cd $serverDirName
#解压缩文件
tar xzf $tar_name
rm $tar_name

EOF

rm $tar_name
