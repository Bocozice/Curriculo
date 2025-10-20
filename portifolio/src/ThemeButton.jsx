import { useState } from 'react';

function ThemeButton() {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark(!dark);
    document.body.className = !dark ? 'dark-theme' : 'light-theme';
  };

  return (
    <button
      className="btn btn-secondary"
      style={{ position: 'fixed', bottom: '2rem', left: '2rem', zIndex: 1000 }}
      onClick={toggleTheme}
    >
      Alternar Tema
    </button>
  );
}

export default ThemeButton;
