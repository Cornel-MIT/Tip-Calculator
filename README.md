# React + Vite

# Tip Calculator Application

This is a **Tip Calculator App** built using **React.ts** and **CSS** for styling. The app allows users to calculate tips based on the bill amount, tip percentage, and the number of people sharing the bill. It provides a simple and intuitive interface for users to calculate tips accurately and efficiently.

## Features

### User Features:
1. **Home Page:**
   - Input fields for:
     - Bill amount.
     - Selectable tip percentages (e.g., 5%, 10%, 15%, etc.).
     - Custom tip percentage input.
     - Number of people sharing the bill.
   - Displays the calculated:
     - Tip amount per person.
     - Total amount per person (including the tip).
   - Reset button to clear all inputs and results.

2. **Responsive Design:**
   - The layout adjusts to various screen sizes for optimal usability on mobile, tablet, and desktop devices.

3. **Validation:**
   - Alerts or messages for invalid inputs:
     - Zero or negative values for bill amount or number of people.
     - Appropriate handling for decimal values.

4. **Real-time Calculation:**
   - As the user enters values or selects a tip percentage, the tip and total amounts are updated in real-time.

### Navigation Bar:
- **Logo/Title:** Displays the app name.
- **Reset Button:** Allows users to reset all fields to their default state.

## Technology Stack
- **Frontend:** React.ts
- **Styling:** CSS (custom styling for a clean and modern look)

## Images

![Tip Calculator Main Screen](src/images/TipCalculator.PNG)
![Tip Calculation Results](src/images/TipCalculatorResults.PNG)

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Cornel-MIT/Tip-Calculator.git
   ```

2. Install the dependencies:
   ```bash
   cd Tip-Calculator
   npm install
   ```

3. Start the React development server:
   ```bash
   npm run dev
   ```

## Future Enhancements
1. Add an option for splitting tips unevenly among different users.
2. Implement local storage to retain the last calculated tip and bill details.
3. Add a dark mode option for improved user experience.



Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


The live URL = http://localhost:5173/