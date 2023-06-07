# puzzle-game
i have create a new puzzle game i wanted to deploy on my aws ec2. lets move ahead.

launch EC2 instance 
Clone it to git than deploy in ec2.

git clone https://github.com/ankiguptaofficial/puzzle-game.git
check git files received or not
#ls
After cloning we have to install nginx
install nginx.
sudo apt install nginx

than 
#sudo reboot
after that 

#sudo apt-get update
go to files on nginx

sudo /etc/nginx and check how many files we have received at the time of installation.

After all we have to deploy this game from nginx html file to our index.html files.

so copy all the files into nginx html file .
Path is:
#cd /var/www/html/

cd
sudo cp -r /home/ubuntu/puzzle-game/*(star means all files)space/var/www/html/

here we can see our html code file received or not.

After all we can check will game run or not

copy our instance public ip and check our server
Thats it...!!

Thanks you so much...

