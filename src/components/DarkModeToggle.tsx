// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import useDarkMode from '../hooks/useDarkMode';
import { BiSun, BiMoon } from 'react-icons/bi';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode()}
      className="col-span-1 flex justify-center items-center w-full"
    >
      {!darkMode ? (
        <BiMoon className="w-8 h-8 text-slate-600" />
      ) : (
        <BiSun className="w-8 h-8 text-[#ccc]" />
      )}
    </button>
  );
};

export default DarkModeToggle;
