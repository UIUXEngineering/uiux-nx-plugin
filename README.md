# UIUX Schematics and Generators

Common boilerplate schematics for Angular ( with Angular Material ) monorepos.


## Generate an Angular Monorepo with standard frameworks
And Nx plugin that creates an monorepo the following frameworks

- Nx
- Angular
- Angular Material
- Jest
- Ngrx
- Firebase
- Storybook

Run:
```bash
  npx nx-ng-mat-prototype
```

## Schematics for common boilerplate code

### Installation

The schematics are automatically installed if creating a monoropo with `npx nx-ng-mat-prototype`.

```
npm install @uiux/schematics
```

or

```
 yarn add @uiux/schematics
```

### Feature Component Schematic
A non-reusable component used inside of a feature.

```bash
 npx nx g @uiux/schematics:feature-component --projectName=[name of porject] --name=[Component Name] --prefix=1[Component prefix]
```

### Design Library Component Schematic
A reusable presentation component for a design library.

```bash
 npx nx g @uiux/schematics:design-library-component --projectName=[name of porject] --name=[Component Name] --prefix=1[Component prefix]
```

### Domain Schematic
Using Domain Driven Design Architecture, create and app with ddd libs.

```bash
 npx nx g @uiux/schematics:domain --appName=[name of app] --domain=[name of domain]
```

### Add App to established domain Schematic
Add an app and libs to an established domain.

```bash
 npx nx g @uiux/schematics:add-app-to-domain --appName=[name of app] --domain=[name of domain]
```

### Add Angular Material to a project Schematic
Add Angular Material to an established app. This is a wrapper schematics to material's ng-add schematic.

```bash
 npx nx g @uiux/schematics:add-material-to-project --appName=[name of app] --domain=[name of domain]
```

### NgRX Entity Schematic
Create and NgRX Entity store with supporting effects, services, actions, reducer, selectors.

```bash
 npx nx g @uiux/schematics:ngrx-effect-store --projectName=[name of project] --name=[State name]
```

### NgRX Effect Schematic
Create and NgRX Store with and Effect, service, actions, selectors.

```bash
 npx nx g @uiux/schematics:ngrx-effect-store --projectName=[name of project] --name=[State name]
```

## Adding a plugin

Use the console to run:

```angular2html
npx nx generate @nrwl/nx-plugin:plugin --name=[name of plugin]
```

## Adding a generator

Use the console to run:

```angular2html
npx nx generate @nrwl/nx-plugin:generator --name=[name of plugin] --project=[name of project]
```
