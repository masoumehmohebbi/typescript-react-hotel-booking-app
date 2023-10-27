import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const isDarkMode = localStorage.getItem('darkMode');
    return isDarkMode === 'true';
  });

  // change mode with changes theme
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // handle dark mode button
  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return [darkMode, handleThemeChange];
};

export default useDarkMode;
