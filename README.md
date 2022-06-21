# React stuff here.
This repository will store important notes and projects developed with React technology for frnndog-suav interest.
## Important observations
 - After you created your project, delete the following files:
	- `App.css`
	- `App.test.tsx`
	- `logo.svg`
	- `reportWebVitals.ts`
	- `setupTeste.ts`
### **Creating a component (Class component)**
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
 - The component name must begin with uppercase letter so it is possible to differentiate for instance that `<myButton />` is a web-component and `<MyButton />` is a component.
 - **JSX** is a way to "write HTML code on JS". The component is transformed into a "React element" and then transformed into a HTML.
>*another_component.tsx*
>```typescript
>import  React  from  "react";
>import  Component from  "../Component"; // example importing another component
>class  Formulario  extends  React.Component {
>   render(): React.ReactNode {
>      return (
>         <form>
>            ...
>            <Component />
>         </form>
>      )
>   }
>}
>```
### **Creating a component (Function component)**
>*some_component.tsx*
>```typescript
>function  NewComponent() {
>   return (
>   ...
>   )
>}
>export  default  NewComponent;
>```
### JSX example (Map)
>*some_component.tsx*
>```typescript
>function  NewComponent() {
>   const  tarefas = [
>   {
>      tarefa:  "React",
>      tempo:  "02:00:00",
>   },
>   {
>      tarefa:  "Javascript",
>      tempo:  "01:00:00",
>   },
>   {
>      tarefa:  "Typescript",
>      tempo:  "03:00:00",
>   }];
>   return (
>      <aside>
>         <h2>Estudo do dia</h2>
>         <ul>
>            {tarefas.map((item, index) => (
>               <li  key={index}>
>                  <h3>{item.tarefa}</h3>
>                  <span>{item.tempo}</span>
>               </li>
>            ))}
>         </ul>
>      </aside>
>   )
>}
>export  default  Lista;
>```


## Commands

 - `npx create-react-app your-directory-name --template typescript --use-npm your-app-name` -> create project.
 - `npm start` -> run project.
