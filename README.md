# Projet de scraping
Ce projet est une application web permettant de récupérer le logo d'un site web à partir de son URL. Il se compose d'un serveur Node.js et d'un client React.

# Installation
Pour lancer l'application, vous aurez besoin de Docker installé sur votre machine.

Clonez le dépôt sur votre machine locale.

Ouvrez un terminal à la racine du projet.

Exécutez les commande suivante pour créer les images Docker et démarrer les conteneurs :

cd Get-Logo

docker-compose up --build

Cette commande construira les images Docker pour le serveur et le client, démarrera les conteneurs et exposera le port 3000 du client et le port 4000 du serveur.

Accédez à l'application en ouvrant votre navigateur et en visitant l'URL http://localhost:3000.

# Utilisation
Entrez l'URL du site web dont vous souhaitez récupérer le logo dans le champ de texte.
Cliquez sur le bouton "Submit".
Le logo du site web devrait s'afficher sur la page.
Structure du projet
Le projet se compose de deux dossiers principaux :

client : contient le code pour le client React.
server : contient le code pour le serveur Node.js.

# Développement
Si vous souhaitez travailler sur le projet, vous pouvez modifier les fichiers dans les dossiers client et server.

Lorsque vous avez terminé de travailler, vous pouvez exécuter les commandes suivantes pour construire les images Docker et démarrer les conteneurs :

clear ; docker rm -f $(docker ps -a -q) ; docker-compose up --build 

# License
Ce projet est sous licence MIT.
