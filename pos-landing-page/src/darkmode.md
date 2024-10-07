To implement dark mode for the entire page in your React app, you can follow a strategy where the dark mode state (`darkMode`) is lifted to a higher-level component, such as `App.js`, and you apply global styles based on this state. Here's a step-by-step guide on how to achieve this:

### Steps:

1. **Lift the Dark Mode State to a Higher Component**: The `darkMode` state should not be restricted to just the `NavBar`. Instead, you can manage it at the app level (e.g., `App.js`) and pass it down as props to components like `NavBar`.

2. **Apply Dark Mode Styles Globally**: You can use CSS variables for your global styles and toggle those variables based on whether dark mode is enabled or not. This allows you to easily apply dark mode to any element on the page.

3. **Pass Dark Mode Prop to Other Components**: Components such as `Footer` and others should also receive the `darkMode` state as a prop so that they can adjust their styles accordingly.

### Updated Implementation

#### 1. Update `App.js` to Manage Dark Mode Globally

```jsx
// src/App.js
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css"; // Global styles for dark mode

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    // Apply global dark mode styles
    document.documentElement.style.setProperty(
      "--background-color",
      darkMode ? "#333333" : "#ffffff"
    );
    document.documentElement.style.setProperty(
      "--text-color",
      darkMode ? "#ffffff" : "#000000"
    );
    document.documentElement.style.setProperty(
      "--link-color",
      darkMode ? "#4dabf7" : "#007bff"
    );
  }, [darkMode]);

  return (
    <div className={`app-container ${darkMode ? "dark" : "light"}`}>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {/* Your other components */}
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;
```

#### 2. Update `NavBar.js` to Receive Dark Mode Prop

```jsx
// src/components/NavBar.jsx
import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./styles/nav.css";

const NavBar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav
      className="navbar"
      style={{ backgroundColor: darkMode ? "#333333" : "#ffffff" }}
    >
      <div className="navbar-brand">
        <Link to="/">WebFiles</Link>
      </div>
      <div className="navbar-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
      <button className="navbar-toggler">{/* Your toggler button */}</button>
      <button className="theme-toggle" onClick={toggleDarkMode}>
        <span className="theme-toggle-text">{darkMode ? "Dark" : "Light"}</span>
        {darkMode ? <FaMoon /> : <FaSun />}
      </button>
    </nav>
  );
};

export default NavBar;
```

#### 3. Update `Footer.js` to Receive Dark Mode Prop

```jsx
// src/components/Footer.jsx
import React from "react";
import "./styles/Footer.css"; // Assuming you have styles for Footer

const Footer = ({ darkMode }) => {
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: darkMode ? "#333333" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >
      <div className="footer-container">
        <div className="footer-column">
          <h4>WebFiles</h4>
          <p>
            At WebFiles, We are committed to getting your business to new
            heights.
          </p>
        </div>
        <div className="footer-column">
          <h4>Pages</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/blog">Blog & News</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="#">Support Center</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li>+1129-456-7890</li>
            <li>wisecorp896@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Wisecorp Technologies Limited. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
```

#### 4. Add Global CSS Variables and Styles

```css
/* src/App.css */
:root {
  --background-color: #ffffff;
  --text-color: #000000;
  --link-color: #007bff;
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
}

a {
  color: var(--link-color);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.app-container.dark {
  background-color: var(--background-color);
  color: var(--text-color);
}

.app-container.light {
  background-color: var(--background-color);
  color: var(--text-color);
}

/* You can also add specific dark/light styles for individual elements like the navbar, footer, etc. */
```

### Key Concepts:

1. **CSS Variables**: By using CSS variables (`--background-color`, `--text-color`, etc.), you can easily switch between light and dark themes without having to rewrite the styles for every individual element.
2. **Global Styling in React**: The global styles are applied using `document.documentElement.style.setProperty` in `useEffect` inside `App.js`, making it easier to toggle dark mode across the entire app.
3. **Passing Dark Mode as a Prop**: The dark mode state is managed in `App.js` and passed down to `NavBar` and `Footer` as props, allowing them to adjust their styles accordingly.

This approach ensures that dark mode is applied not only to the navbar but to the entire page, including other components such as the footer and main content sections.
