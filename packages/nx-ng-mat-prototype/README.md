# Generate Angular Nx Workspace

A bash script to createNxNgMatPrototype an angular-nest/firebase workspace for rapid prototyping or project creation. This sets up a
basic Nx workspace that includes the following architecture:

- NrWL
- Angular
- Nest
- NgRX
- Angular Material
- Angular CDK
- Firebase ( Optional )


# To run

## Create a firebase project

1. open [firebase](https://console.firebase.google.com/u/0/)
2. Create a project
3. In the project, navigate to settings
4. Create a Web-App ( Analytics optional )
5. Select the app registered
6. Select the `Config` radio button
7. Note the config object like this:

    ```
   const firebaseConfig = {
    apiKey: "...",
    authDomain: "...",
    projectId: "...",
    storageBucket: "...,
    messagingSenderId: "...",
    appId: "..."
    };
   ```


## To run:


```
   npx nx-ng-mat-prototype
```

