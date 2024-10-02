import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);
const ClickContext = createContext(null);

export default function MyApp() {
  const [theme, setTheme] = useState('light');
  const [clickCount, setClickCount] = useState(0);

  return (
    <ThemeContext.Provider value={theme}>
      <ClickContext.Provider value={{ clickCount, setClickCount }}>
        <Form />
        <label class="dark_m">
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={(e) => {
              setTheme(e.target.checked ? 'dark' : 'light');
            }}
          />
          Темний режим
        </label>
        {/*компонент для відображення кількості кліків*/}
        <ClickDisplay />
      </ClickContext.Provider>
    </ThemeContext.Provider>
  );
}

function Form({ children }) {
  return (
    <Panel title="Ласкаво просимо">
      <Button>Зареєструватися</Button>
      <Button>Увійти</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const { clickCount, setClickCount } = useContext(ClickContext);
  const className = 'button-' + theme;

  return (
    <button
      className={className}
      onClick={() => setClickCount(clickCount + 1)}
    >
      {children}
    </button>
  );
}

function ClickDisplay() {
  const { clickCount } = useContext(ClickContext);

  return (
    <div style={clickDisplayStyle}>
      Кількість кліків: {clickCount}
    </div>
  );
}

const clickDisplayStyle = {
  position: 'fixed',
  top: '10px',
  right: '10px',
  backgroundColor: '#f0f0f0',
  padding: '10px',
  borderRadius: '5px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
};
