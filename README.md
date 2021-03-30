# Angular-Shop
Angular-10 - ShoppingCart + MDBootstrap + Firebase (base de données en temps réel) + i18n
HitCount Fourches GitHub Étoiles GitHub Problèmes GitHub Licence: MIT npm Twitter

Développement d'une application ShoppingCart (commerce électronique) à l'aide d'Angular-10 .

Démo en direct : panier-angulaire

Ce projet a été généré avec Angular CLI version 10.0.1.

Fonctionnalités
Enregistrement d'utilisateur à l'aide de l'authentification Firebase (à l'aide de l'adresse e-mail / mot de passe | Authentification Google)
Opérations CRUD comme
L'utilisateur peut ajouter un produit à son panier.
L'administrateur peut ajouter un produit à la liste de produits
L'administrateur peut modifier / supprimer le produit.
Glisser déposer Angular Drag & Drop
Implémentation du CDK Angular Drag and Drop
Sécurité
Authentification et autorisation implémentées
Outils et technologies
Technologie: HTML, MDBootstrap, CSS, Angular-10, Firebase, i18n, Drag & Drop, Progressive Web Application, jsPDF (pour télécharger le reçu au format PDF).
Base de données: Angular Firebase (base de données en temps réel).
Ce projet couvre tous les principes fondamentaux de Angular
Modules multiples
Composants, modèle et liaison de données
Validation du formulaire
HttpClient
Animations
Injection de dépendance
Routage et navigation
Travailleurs des services
Tuyaux
Gaurds etc.
Installation
CLI angulaire

Télécharger Angular CLI
NodeJs

Télécharger Nodejs
Gestionnaire de packages - NPM / Yarn

Clonez le référentiel et exécutez-le npm installsi vous utilisez npm comme gestionnaire de packages ou yarn installsi vous utilisez yarn comme gestionnaire de packages.

Tutoriel Angular + Firebase - Angular + Firebase + Typescript - Tutoriel étape par étape

Activer les fournisseurs d'authentification Firebase

Authentication -> Sign-in-method -> Enable Email/Password & Google provider

Mettre à jour les règles Firebase (Realtime Database)

Database -> Rules

{
"rules": {
    ".read":true,
    ".write": true
}
}
Configurez votre configuration Firebase src/environments/firebaseConfig.ts

export const FireBaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_SENDER_ID"
};
Pour le rôle d'administrateur Register or SignIn with Google Auth

vos données enregistrées seront sauvegardées dans la table des clients firebase .

    -clients
        -LRSkWxGAKQAFZmyfsx6
            -createdOn: "1542046725"
            -email: "<<YOUR_REGISTERED_EMAIL_ID>>"
            -isAdmin: false      <--- Change this to true
            ...
Vous pouvez maintenant accéder aux privilèges d'administrateur comme Creating Product, Removing Product, etc..

Exécutez le serveur.

Comment puis-je soutenir le développeur?
Star mon repo Github ⭐
Créez des pull requests, soumettez des bogues, suggérez de nouvelles fonctionnalités ou des mises à jour de documentation 🛠
Captures d'écran:
Page d'accueil:
![Home](https://user-images.githubusercontent.com/39752128/113068509-f1fa1400-91ad-11eb-96e2-3650122dcad0.PNG)
