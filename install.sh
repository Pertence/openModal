#Comandos de instalação para o openModal


#Esse arquivo precisa estar no diretório raiz da plataforma

#instalando meios para poder comppilar server

sudo apt update
sudo apt install python3
sudo apt install nodejs
sudo apt install npm
sudo apt install python3-pip

#Instalação dos módulos javascript

cd server
npm install
cd ..
cd client
npm install
npm remove csstools/normalize.css
npm install csstools/normalize.css
npm install serve
npm run build

#Instalação dos módulos python

pip3 install matplotlib
pip3 install networkx==2.3
pip3 install sklearn
pip3 install folium
pip3 install pandas
pip3 install plotly==3.10.0
pip3 install shapely
pip3 install geopy
