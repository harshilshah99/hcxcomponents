# HCX components

`hcxcomponents` is a collection of reusable React components styled using tailwindcss designed to simplify the development of user interfaces.

## Installation

### 1. React App Setup

To use `hcxcomponents`, you'll need to set up a React app first. If you haven't already done so, you can create a new React app using Create React App:

```
npx create-react-app my-app
cd my-app
```
### 2. Install hcxcomponents

```
npm i hcxcomponents
```

### 3. Tailwindcss Setup
Next, configure [tailwindcss](https://tailwindcss.com/docs/installation) in your React app:

Install Tailwind CSS

```
npm install -D tailwindcss
npx tailwindcss init
```

Configure your template paths `tailwind.config.js`
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./node_modules/hcxcomponents/dist/**/*"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add the Tailwind directives to your CSS `src/input.css`

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Usage

Import the components you need from hcxcomponents and use them in your React application:

`App.js`

```
import logo from './logo.svg';
import './App.css';

import { Input, Container, LogoAndHeadings, Button } from 'hcxcomponents';

function App() {
  return (
    <Container>
            <LogoAndHeadings
                mainHeading="Welcome to the HCX provider app"
                subHeading="Please sign in to your account."
            />
            <form>
                <Input label="Please enter your username to sign in :"
                    type="email"
                    placeholder="Enter username"
                />
                <Input label="Enter your password :"
                    type="password"
                    placeholder="Enter password"
                />
                <Button>
                    Sign In
                </Button>
            </form>
        </Container>
  );
}

export default App;
```

## Screenshots
![](https://i.postimg.cc/DzY8DwQ9/Screenshot-2024-04-21-200650.jpg)