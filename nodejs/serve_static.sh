if [ $# -ne 2 ]; then
    echo usage:    
    echo $0 base_port number_of_instances
    exit 1
fi

for i in `seq 1 $2`; do
    port=$(($1 + i))
    nodejs server-static.js $port &
done  

echo spanwned $i nodejs servers
echo use killall nodejs to stop
