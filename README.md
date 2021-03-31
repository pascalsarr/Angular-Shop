#  Angular-10 - ShoppingCart + MDBootstrap + Firebase (base de données en temps réel) 
Développement d'une application ShoppingCart (commerce électronique) à l'aide d'Angular-10 .
Ce projet a été généré avec Angular CLI version 10.0.1.
#  Fonctionnalités
     1.  User Registration using Firebase Authentication (using Email/Password | Google Authentication )
   2.  CRUD Operations like

     - User can add product to his cart.
     - Admin can add product to the product list
     - Admin can edit/delete the product.

   3. Drag and Drop `Angular Drag & Drop`

     - Implemented [Angular Drag and Drop CDK](https://material.angular.io/cdk/drag-drop/overview)

   1.  Security

     - Implmented Authentication and Authorization
## Tools and Technologies

     - Technology: HTML, MDBootstrap, CSS, Angular-10, Firebase, i18n, Drag & Drop, Progressive Web Application, jsPDF (to download Receipt as PDF).
     - Database : Angular Firebase (Realtime Database).
#### This Projects covers all fundamentals of Angular

- Multiple Modules
- Components, Template and DataBinding
- Form Validation
- HttpClient
- Animations
- Dependency Injection
- Routing & Navigation
- Service Workers
- Pipes
- Gaurds etc..
# Installation

1.  Angular CLI
    - [Download Angular CLI](https://cli.angular.io/)
    2.  NodeJs
    - [Download Nodejs](https://nodejs.org/en/download/)
    3.  Package Manager - NPM / Yarn
    4.  Clone the repository and run `npm install` if you use **npm** as package manager or `yarn install` if you use **yarn** as package manager.
    5.  Angular + Firebase Tutorial - [Angular + Firebase + Typescript — Step by step tutorial](https://medium.com/factory-mind/angular-firebase-typescript-step-by-step-tutorial-2ef887fc7d71)
    6.  Activate Firebase Authentication Providers

    `Authentication -> Sign-in-method -> Enable Email/Password & Google provider`

    7.  Update the Firebase _(Realtime Database)_ Rules
         `Database -> Rules`

           ```
           {
            "rules": {
              ".read":true,
              ".write": true
                 }
          }
           `
    8.  Configure your firebase configuration `src/environments/firebaseConfig.ts`
