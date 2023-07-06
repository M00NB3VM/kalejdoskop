# Kalejdoskop website

This is the website for promotion and user interactivity of the Kalejdoskop video game. It is made using Next.js, Tailwind and TypeScript.

## Getting Started

These instructions will guide you through the process of setting up this Next.js application on your local machine for development and testing purposes.

### Prerequisites

Before you can run this project, you will need to have Node.js and npm installed on your computer. You can download Node.js from [here](https://nodejs.org/) and npm is included in the installation.

You can check if Node.js and npm are installed correctly by running the following commands in your terminal:

```sh
node --version
npm --version
```

If both commands return a version number, then the installation was successful.

### Installation

1. **Clone the repository**

   Start by cloning the repository to your local machine. You can do this by running the following command in your terminal:

   ```sh
   git clone https://github.com/sverok-man-collaboration/kalejdoskop-website.git
   ```

2. **Install dependencies**

   Navigate into the cloned repository directory and run the following command to install all necessary dependencies:

   ```sh
   npm install
   ```

3. **Configure environment variables**

   You will need to create a `.env` file in the root of the project. You can use the provided `.env.example` file as a template. Simply copy the `.env.example` file and rename the copy to `.env`. Then fill in the required information.

### Running the project

Once you have completed the installation, you can now run the application in a development environment:

```sh
npm run dev
```

## Building the project

To compile the application for a production environment, you can run:

```sh
npm run build
```

This command will create a `dist` directory containing the compiled application.

## Execution

To execute the compiled application, you can run:

```sh
npm run start
```

This will execute the compiled Vite application.

## Dark Mode Styling Guide

This guide outlines how to implement dark mode using a global CSS class and JavaScript's ternary operator.
Overview

Our approach employs a global CSS class called dark-theme to toggle dark mode. This is facilitated by a boolean variable, darkTheme.

### Implementation at the Component Level

Here are the steps to follow:

1. **First, import the useStoreContext from our context file**

```sh
import { useStoreContext } from "~/context";
```

2. **In your main function, destructure darkTheme from the useStoreContext**

```sh
const { darkTheme } = useStoreContext();
```

3. **Use ternary expressions in your styling to switch between light and dark modes**

The following is an example of how to render different elements based on the value of darkTheme:

```sh
{ darkTheme ? (<img src="dark_image_src" />) : (<img src="light_image_src" />) }
```

By following this guide, you should be able to implement a functional dark mode toggle across your components. Happy coding!
