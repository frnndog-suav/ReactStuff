# React stuff here.
This repository will store important notes and projects developed with React technology for frnndog-suav interest.
## Important observations
 - To use CSS modules with Sass, execute the command `npm install -D typescript-plugin-css-modules sass`. For more information, [click here](https://www.npmjs.com/package/typescript-plugin-css-modules).
 - [React Icons](https://react-icons.github.io/react-icons/).
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
### Ternaries
>Standard ternary
>```typescript
>(condition) ? "true result" : "false result"
>```
>Ternary without else (:)
>```typescript
>(condition) && "true result"
>```
### Learn hooks [here](https://www.alura.com.br/artigos/react-hooks).

### Life cycle 
**mount** is component creation and **unmount** is component desctruction.
General life cycle:
 - **componentWillMount** (before component is mounted): the same as `useLayoutEffect(()=>{...},[])`, it is used to change something visually before the component show up (e.g. light/dark theme changing)
 - **componentDidMount** (component has just been mounted): the same as `useEffect(()=>{...},[])`, it is usually used to make calls to the server or to manipulate props.
 - **componentWillUpdate** (component has just been updated):  the same as `useEffect(()=>{...},[variable])`, it is executed everytime the variable(s) passed in the array change.
 - **componentWillUnmount** (component will be unmounted): the same as `useEffect(()=>{return()=>{...}}, [])`, the function inside the `return` will only be executed when the component is unmounting. Usually used to `clearTimeout` and `clearInterval`.
### Importing static files
>```typescript
>import logo from  "../../assets/img/logo.svg";
>export default function SomeComponent() {
>   return (
>      ...
>      <img src={logo} alt="Some text"/>
>      ...
>   );
>}
>```
>or
>```typescript
>import {ReactComponent  as  Logo} from  "../../assets/img/logo.svg";
>export default function SomeComponent() {
>   return (
>      ...
>      <Logo />
>      ...
>   );
>}
>```
### Global importing
>```json
>"compilerOptions": {
>   ...
>   "baseUrl": "src"
>   ...
>}
>```
>Instead of using `import something from "../../../someFolder/someFile";`, you can use `import something from "someFolder/someFile` for instance.
### Dynamic references (loading static files)
Assuming that you want to load an image in your `<div>` tag, the image should be storage in the `public` folder. For instance, if your image path is `/assets/pratos/macarrao_mediterraneo.png`, then the image should be placed in `root/public/assets/pratos/macarrao_mediterraneo.png`.
### CSS Reset and Normalize
**CSS Reset**
Each browser has its presentation by default and this individualized behavior can generate layout conflicts in front of your web project. These inconsistencies that browsers present when displaying or rendering elements can be subtle or more apparent, such as, for instance, different measurements for the top and bottom margin in titles or the height of the default line, which can profoundly affect the heights of elements and alignments.
The css reset technique is a way to smooth these differences and standardize the styling, overlaying the browsers' original formatting with a style sheet.
**Normalize**
The main purpose of Normalize is to make the default styling consistent between browsers. Some standard browser styles that are useful for page development are kept, some common bugs between browsers are fixed, some usability improvements and also all the Normalize code is commented and with a documentation about the modifications.
>- Execute the following command: `npm install normalize.css`
>- On the root `index.tsx`, before the `import  "./index.css"` importing, add the following import: `import  "normalize.css"`.
>```typescript
>...
>import  "normalize.css";
>import  "./index.css";
>...
>const  root = ReactDOM.createRoot(
>   document.getElementById("root") as  HTMLElement
>);
>root.render(
>   <React.StrictMode>
>   ...
>   </React.StrictMode>
>);
>```
**CSS Reset** x **Normalize**
- Reset CSS clears ALL browser defaults. It's a aggressive "cleaning", while Normalize still maintains defaults that are useful.
- Normalize CSS fixes some bugs that exist in the default styling of browsers.
- Normalize is modular. The entire code is separated by specific sections, so you can look for changes more directly.
- Normalize is modular. The entire code is separated by specific sections, so you can look for changes more directly.

More info right [here](https://www.alura.com.br/artigos/o-que-e-reset-css).
### Conditional className
 - Execute the following command: `npm install classnames`
>```typescript
>import  classNames  from  "classnames";
>...
><button className={classNames({
>   [styles.yourStyle]:  true,                          //default style
>   [styles.conditionalStyle]: var1.id === var2.id,     //your condition here
>   ...
>})}></button>
>```
### ESLint
ESLint is a tool that analyzes code and points out any problems it finds. It can find bugs, potentially problem areas, bad coding styles, and style issues. 
 - To start off, execute the following command: `npm init @eslint/config`.
 - Answer the questions.
 - `.eslintrc.json` file will be created.
 - Add the statement `"react/react-in-jsx-scope": "off",` in rules section on `.eslintrc.json` file.
 - Finally, execute `npx eslint ./src --fix` (the `./src` folder is the starting point where you want ESlint to start fixing your code).

## Commands

 - `npx create-react-app your-directory-name --template typescript --use-npm your-app-name` -> create project.
 - `npm start` -> run project.
 
