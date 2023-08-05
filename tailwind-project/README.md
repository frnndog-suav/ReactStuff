# TailwindCSS

- Use plugin Tailwind CSS IntelliSense 

## Common style
### Creating common style
>index.css
>```css
>@tailwind  base;
>@tailwind  components;
>
>.common-style {
>    @apply py-2 bg-cyan-200;
>}
>
>// or
>
>@layer components {
>  .common-style {
>    @apply py-2 bg-cyan-200;
>  }
>}
>
>@tailwind  utilities;
>```
### Using common style
>component.tsx
>```typescript
>...
><div className="common-style">Common styled div</div>
>...
>```

## Base style
### Creating base style
>index.css
>All "h1" will be styled
>```css
>@tailwind  base;
>
>  h1 {
>    @apply py-2 text-cyan-500;
>  }
>  
>@tailwind  components;
>@tailwind  utilities;
> 
>@layer base {
>  h1 {
>    @apply py-2 text-cyan-500;
>  }
>}
>```
