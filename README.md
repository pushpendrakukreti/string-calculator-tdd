# String Calculator TDD

This project is a simple **String Calculator** application built with **React** and follows **Test-Driven Development (TDD)** principles. It allows users to input comma-separated numbers, calculates the sum, and displays the result. Additionally, it supports custom delimiters and handles newline-separated numbers.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)

## Features

- Input comma-separated numbers in a multi-line format.
- Support for newline characters as delimiters.
- Option for custom delimiters.
- Displays error message if input contains negative numbers.
- Follows Test-Driven Development (TDD) principles with frequent commits.

## Technologies

- **React/TypeScript**: Frontend framework used for building the UI.
- **CSS**: For styling the components in a separate CSS file.
- **Jest**: Testing framework for ensuring code quality and correctness.
- **Git**: Version control to track development progress.

## Project Structure

## Project Structure

```plaintext

.
├── public
│   └── vite.svg
├── src
│   ├── components
│   │   └── Calculator
│   │     ├── utils
│   │         ├── StringCalculator.ts      # Contains add function with TDD logic
│   │     ├── Calculator.scss      # CSS file for Calculator component styling
│   │     ├── Calculator.test.tsx  # Test file for Calculator component
│   │     └── Calculator.tsx       # Main calculator component
│   ├── App.css               # CSS file for Root component
│   ├── App.tsx               # Root component
│   ├── index.css             # CSS file for Entry point component
│   └── main.tsx              # Entry point
│   └── setupTests.ts
│   └── vite-env.d.ts
├── eslint.config.js
├── index.html
├── jest.config.ts
├── package.json
└── README.md            # Project documentation
├── tsconfig.json
└── vite.config.ts
```

## Installation

1. **Clone the Repository**

```bash
   git clone https://github.com/pushpendrakukreti/string-calculator-tdd.git
   cd string-calculator-tdd

```

2. **Install Dependencies**

```bash
   npm install
```

## Usage

1. **Run the application**

```bash
   npm run dev
```

2. **Open the App in Browser**

Go to localhost from terminal to view the app in the browser.

3. **Using the Calculator**

- Enter Numbers: Use the provided textarea to input numbers separated by commas or newlines.
- Calculate: Click on the Calculate button to see the sum.
- Result: The result will appear below the button.
- Error Handling: If negative numbers are entered, an error message will be displayed.

## Testing

```bash
   npm run test
```
