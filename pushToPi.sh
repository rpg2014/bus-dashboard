ssh pi@192.168.0.133 'sudo rm -rf ~/dash.parkergiven.com/* /var/www/dash.parkergiven.com/*'
scp -r out/ pi@192.168.0.133:~/dash.parkergiven.com
ssh pi@192.168.0.133 'sudo mv ~/dash.parkergiven.com/out/* /var/www/dash.parkergiven.com'