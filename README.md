# EcoShop - E-commerce Platform for Ecological Products

## Description

**EcoShop** est une plateforme d'e-commerce spécialisée dans la vente de produits écologiques. Elle vise à promouvoir un mode de vie durable en facilitant l'accès à des produits respectueux de l'environnement, allant des articles ménagers écologiques aux produits de soins personnels naturels. Cette application web offre une interface utilisateur intuitive pour naviguer, acheter et gérer les produits facilement.

## Fonctionnalités principales

- **Page d'accueil** : Présentation des produits phares, des offres promotionnelles et des catégories principales.
- **Page produit** : Affichage détaillé des produits avec description, prix, et options d'ajout au panier.
- **Panier** : Gestion des articles ajoutés avec possibilité de mise à jour des quantités ou de suppression.
- **Formulaire de contact** : Formulaire permettant aux utilisateurs de poser des questions ou d'envoyer des retours d'expérience.

## Technologies utilisées

- **ReactJS** : Bibliothèque JavaScript pour la construction de l'interface utilisateur.
- **React Router** : Gestion des routes pour la navigation entre les différentes pages.
- **Axios** : Requêtes HTTP pour interagir avec l'API de l'application.
- **CSS3 / SCSS** : Pour la stylisation de l'interface utilisateur.
- **Tailwind CSS/UI** : Framework CSS pour des composants rapides et réactifs.
- **Node.js & Express (Backend)** : API pour la gestion des produits et des utilisateurs (à intégrer si applicable).
- **MongoDB** : Base de données pour la gestion des produits et des utilisateurs (à intégrer si applicable).

## Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn

## Installation locale

Suivez les étapes ci-dessous pour installer et exécuter le projet en local :

1. Clonez ce dépôt dans votre répertoire local :
   ```bash
   git clone https://github.com/mbaayang/EcoShop.git
2. Accédez au dossier du projet :
    cd eco-shop
3. Installez les dépendances nécessaires :
    npm install
    # ou
    yarn install
4. Démarrez le serveur de développement :
    npm start
    # ou
    yarn start
5. Accédez à l'application dans votre navigateur à l'adresse :
    http://localhost:3000
    
## Structure du projet

/src
  /components   # Composants réutilisables (header, footer, etc.)
  /pages        # Pages principales (Accueil, Produit, Panier, Contact)