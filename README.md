# React stuff here.
This repository will store important notes and projects developed with React technology for frnndog-suav interest.
## Important observations:
- After you created your project, delete the following files:
	- `App.css`
	- `App.test.tsx`
	- `logo.svg`
	- `reportWebVitals.ts`
	- `setupTeste.ts`
### **Creating a component**
>*some_component.tsx*
>```typescript
>import  React  from  "react";
>class  Botao  extends  React.Component {
>   render(): React.ReactNode {
>      return  <button>Eu sou um botão</button>;
>   }
>}
>export  default  Botao;
>```
>*App.tsx*
>```typescript
>function  App() {
>   return (
>      <div  className="App">
>         <Botao  />
>      </div>
>   );
>}
>```


## Commands

 - `npx create-react-app your-directory-name --template typescript --use-npm your-app-name` -> create project.
 - `npm start` -> run project.
