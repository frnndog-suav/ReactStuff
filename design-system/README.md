1 - Run `npm init -y` to create a package.json file.
2 - Run `npm i -D typescript` to install typescript.
3 - Run `npx tsc --init` to create a tsconfig.file.
4 - Run `npm i tsup -D` for converting our package into javascript code that's gonna be loaded by other applications.


```json
{
  "private": "true", //private package (not gonna be published on npm),
  "workspaces": [ 
    "packages/*" //folder name (place) where the packages are
  ]
}
```