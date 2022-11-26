# Creating Publishable Libraries

1. Open Nx Console
2. Select `@nrwl/js:library`
3. Fill in these options
    - name
    - buildable: true
    - importPath: i.e. @uiux/nx-ng-mat-prototype
    - js: false
    - publishable: true
    - strict: true
4. Update compiler options

In `libs/[ name ]/tsconfig.json`, and in the `compilerOptions` node, update to :

```json
    "target": "es5",
    "module": "CommonJS",
```
