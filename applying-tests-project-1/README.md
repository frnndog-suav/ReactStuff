## Instalando/Configurando Prettier
- Executar `npm install -D prettier`
- Criar arquivo `.prettierrc` e adicionar o conteudo:
>```
>{
>    "singleQuote": true,
>    "tabWidth": 2
>}
>```
- Adicionar script no package.json `"format":  "prettier --write \"src/**/*{.js,.jsx}\""`

## Instalando/Configurando EsLint
- Executar comando `npm i -D eslint eslint-config-prettier`
- Instalar plugins `npm install -D eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks`.
- Criar arquivo `.eslintrc` e adicionar o conteudo: 
>```
>{
>  "extends": [
>    "eslint:recommended",
>    "prettier",
>    "plugin:import/errors",
>    "plugin:react/recommended",
>    "plugin:jsx-a11y/recommended",
>    "plugin:react-hooks/recommended"
>  ],
>  "parserOptions": {
>    "ecmaVersion": "latest",
>    "sourceType": "module",
>    "ecmaFeatures": {
>      "jsx": true
>    }
>  },
>  "rules": {
>    "react/props-types": "off",
>    "react/jsx-uses-react": "off",
>    "react/self-closing-comp": "warn",
>    "no-unused-vars": "off",
>    "import/no-unresolved": "off"
>  },
>  "plugins": ["react", "import", "jsx-a11y"],
>  "env": {
>    "es6": true,
>    "browser": true,
>    "jest": true,
>    "node": true
>  },
>  "settings": {
>    "react": {
>      "version": "detect"
>    }
>  }
>}
>```