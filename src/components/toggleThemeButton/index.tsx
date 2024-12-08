import { useState } from 'react';
import { Button, Circle } from './styled';
import { ThemeButtonProps } from './types';

const ToogleThemeButton = () => {
  const [theme, setTheme] = useState<ThemeButtonProps['theme']>('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Button theme={theme} onClick={toggleTheme}>
      <Circle />
    </Button>
  );
};

export default ToogleThemeButton;
