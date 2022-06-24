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
>export default class Botao extends React.Component {
>   render(): React.ReactNode {
>      return  <button>Eu sou um botão</button>;
>   }
>}
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
>export default function NewComponent() {
>   return (
>   ...
>   )
>}
>```
### JSX example (Map)
>*some_component.tsx*
>```typescript
>export default function  NewComponent() {
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
>```
### Adding style (CSS)
>Basic inline styling example.
>```typescript
>import  React  from  "react";
>export default class Botao extends React.Component {
>   render(): React.ReactNode {
>      return  <button style={{backgroundColor: 'green'}}>Eu sou um botão</button>;
>   }
>}
>```
>Basic inline styling example (variable).
>```typescript
>import  React  from  "react";
>export default class Botao extends React.Component {
>   render(): React.ReactNode {
>      const  testingColor = 'red'  
>      return  <button style={{backgroundColor: testingColor}}>Eu sou um botão</button>;
>   }
>}
>```
>Basic inline styling example (object variable).
>```typescript
>import  React  from  "react";
>export default class Botao extends React.Component {
>   render(): React.ReactNode {
>      const  active = false
>      const  style = {
>         backgroundColor: active? "green" : "yellow"
>      }
>      return  <button style={style}>Eu sou um botão</button>;
>   }
>}
>```
### Adding style (Sass)
 - Installing Sass: `npm install --save-dev sass`
>*style.scss*
>```css
>h2 {
>   color: red;
>}
>```
>*some_component.tsx*
>```typescript
>import  "./style.scss";
>function  FunctionComponent() {
>   ...
>   return(
>      <h2>Hello World</h2>
>   )
>}
>```
### Styling override solving [(CSS Modules)](https://www.npmjs.com/package/typescript-plugin-css-modules)
 - Add "module" to your styling file name (e.g.,`style.scss` to `style.module.scss`).
 - Change the importing syntax (e.g., `import  style  from  "./style.module.scss";`).
>*style.module.scss*
>```css
>exampleStyle {
>   color: red;
>}
>```
>*some_component.tsx*
>```typescript
>import style from "./style.module.scss";
>function SomeComponent() {
>   return (
>      <div className={style.exampleStyle}>
>   );
>}
>```
### Props (Attribute)
>*some_component.tsx*
>```typescript
>export default class Botao extends React.Component<{texto: string}> {
>   render(): React.ReactNode {
>      return  <button>{this.props.texto}</button>;
>   }
>}
>```
>*another_component.tsx*
>```html
>...
><Botao texto="Seu texto aqui" />
>...
>```
>*more_props_component.tsx*
>```typescript
>export default function Item({tarefa,tempo}: {tarefa: string; tempo: string;}) {
>   return (
>      <li>
>         <h3>{tarefa}</h3>
>         <span>{tempo}</span>
>      </li>
>   )
>}
>```
### Props (Children)
>*some_component.tsx*
>```typescript
>export class Botao extends React.Component<{
>   children?: React.ReactNode;
>   }> {
>      render(): React.ReactNode {
>         return  <button>{this.props.children}</button>;
>      }
>}
>```
>*another_component.tsx*
>```html
>...
><Botao>Seu Texto Aqui</Botao>
>...
>```
### React.Fragment
>JSX expressions must have one parent element.
>*some_component.tsx*
>```typescript
>export default function SomeComponent() {
>   return (
>      <React.Fragment>
>      ...
>      </React.Fragment>
>   );
>}
>```
>**or**
>```typescript
>export default function SomeComponent() {
>   return (
>      <>
>      ...
>      </>
>   );
>}
>```
### State (Class Component)
>Example.
>```typescript
>export default class SomeComponent extends React.Component {
>   state = {
>      tarefa:  "",
>      tempo:  "00:00"
>   }
>  
>   adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
>      evento.preventDefault();
>      console.log("state: ", this.state);
>      ...
>   }
>  
>   render(): React.ReactNode {
>      ...
>      <form  className={style.novaTarefa}  onSubmit={this.adicionarTarefa.bind(this)}> //scope association
>      ...
>      <input
>      ...
>      value={this.state.tarefa}
>      onChange={(evento) => {
>         this.setState({ ...this.state, tarefa:  evento.target.value }); 
>      }}
>      ...
>      />
>   }
>}
>```
### State (Function Component)
>Example of adding a object to a list.
>```typescript
>export default function SomeComponent() {
>   const [varName, changeStateFunction] = useState([
>      {
>         property: "Default value",
>      },
>      ...
>   ])
>   return (
>      ...
>      <h1 onClick()={() => {changeStateFunction([...tarefas, {property: "New object"}])}}></h1>
>      ...
>   )
>}
>```
### Functions as parameter
>```typescript
>interface  Props{
>   ...
>   functionNameHere: (parameterNameHere: ObjectTypeHere) =>  void;  //no return
>   ...
>}
>```
### Extend interfaces
>```typescript
>interface Obj1{
>   property1: boolean,
>   property2: string
>}
> 
>interface Obj2 extends Obj1{
>   property3: number,
>   property4: any
>}
> 
>//Obj2 is equal to the code below:
>interface FinalObj{
>   property1: boolean,
>   property2: string,
>   property3: number,
>   property4: any
>}
>```
## Commands

 - `npx create-react-app your-directory-name --template typescript --use-npm your-app-name` -> create project.
 - `npm start` -> run project.
