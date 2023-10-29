import Slider from '../components/Slider.tsx';

import {
  BiInfoCircle,
  BiLogIn,
  BiLogOut,
  BiMinus,
  BiPlus,
  BiSolidMap,
  BiSolidSearch,
} from 'react-icons/bi';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useRef, useState } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
  NavLink,
} from 'react-router-dom';

// Import Custom hooks
import useOutsideClick from '../hooks/useOutsideClick.js';
// types definition
import {
  Options,
  TypeItem,
  TypeOption,
  DateItem,
  DateRangeSelection,
  GuestOptionListProps,
  OptionItemProps,
} from '../types/types';
import { useAuth } from '../context/AuthProvider.tsx';
import Navbar from './Navbar.tsx';

export default function Header() {
  return (
    <header className="relative z-20 flex flex-col justify-center items-center">
      <Navbar />
      <Slider />
      <ReservationForm />
    </header>
  );
}

function ReservationForm() {
  const navigate = useNavigate();
  const [date, setDate] = useState<DateItem[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const [options, setOptions] = useState<Options>({
    adult: 1,
    children: 0,
    room: 1,
  });

  const [searchParams] = useSearchParams('');
  const [destination, setDestination] = useState(searchParams.get('destination') || '');
  const [isOpenDate, setIsOpenDate] = useState(false);
  const [isOpenOptions, setIsOpenOptions] = useState<boolean>(false);

  const handleOptions = (typeItem: TypeItem, operation: 'inc' | 'dec') => {
    setOptions((prev) => ({
      ...prev,
      [typeItem]: operation === 'inc' ? prev[typeItem] + 1 : prev[typeItem] - 1,
    }));
  };
  const handleSearch = () => {
    const encodedParams = createSearchParams({
      destination,
      date: JSON.stringify(date),
      options: JSON.stringify(options),
    });
    navigate({ pathname: '/hotels', search: encodedParams.toString() });
  };
  return (
    <div className="w-11/12 gap-y-9 min-[800px]:gap-y-0 mt-4 min-[800px]:mt-0 lg:w-4/5 p-6 lg:p-9 min-[800px]:items-center flex flex-col min-[800px]:flex-row justify-around shadow-lg min-[800px]:absolute min-[800px]:-bottom-14 z-10 rounded-md bg-white">
      <span className="flex items-center">
        <BiSolidMap className="w-6 h-6 text-red-500" />
        <input
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          type="text"
          className="capitalize outline-none p-2 text-sm lg:text-base"
          placeholder="جستجوی مقصد(شهر یا هتل)"
        />
      </span>
      <div className="flex items-center text-sm lg:text-base">
        <BiInfoCircle className="w-5 h-5 text-[#9f9f9f] mr-1" />
        <span
          className="cursor-pointer"
          onClick={() => {
            setIsOpenOptions(false);
            setIsOpenDate((prev) => !prev);
          }}
        >
          {`${format(date[0].startDate, 'MM/dd/yyyy')} تا ${format(
            date[0].endDate,
            'MM/dd/yyyy',
          )}`}
        </span>
      </div>

      {isOpenDate && (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <DateRange
          onChange={(item: DateRangeSelection) => setDate([item.selection])}
          ranges={date}
          minDate={new Date()}
          moveRangeOnFirstSelection={true}
          className="md:absolute lg:top-28 md:top-20"
        />
      )}
      <div className="relative flex flex-col md:flex-row text-sm lg:text-base">
        <div className="flex items-center">
          <BiInfoCircle className="w-5 h-5 text-[#9f9f9f] mr-1" />
          <span
            id="optionDropDown"
            className="cursor-pointer"
            onClick={() => {
              setIsOpenDate(false);
              setIsOpenOptions((is) => !is);
            }}
          >
            {options.adult} بزرگسال {options.children} کودک {options.room} اتاق
          </span>
        </div>
        {isOpenOptions && (
          <GuestOptionList
            handleOptions={handleOptions}
            setIsOpenOptions={setIsOpenOptions}
            options={options}
          />
        )}
      </div>
      <button
        onClick={handleSearch}
        className="bg-blue-500 py-2 px-3 rounded-md group items-center flex justify-center"
      >
        <BiSolidSearch className="w-7 h-7 md:w-6 md:h-6 text-white group-hover:scale-125 transition-all duration-200 ease-in-out" />
      </button>
    </div>
  );
}

function GuestOptionList({
  options,
  handleOptions,
  setIsOpenOptions,
}: GuestOptionListProps) {
  const optionsRef = useRef<HTMLInputElement>(null);
  useOutsideClick(optionsRef, 'optionDropDown', () => setIsOpenOptions(false));
  const typeOption: TypeOption = [
    { id: 1, type: 'adult', limit: 1 },
    { id: 2, type: 'children', limit: 0 },
    { id: 3, type: 'room', limit: 1 },
  ];
  return (
    <div
      ref={optionsRef}
      className="md:top-[67px] md:absolute bg-white shadow-lg border-t rounded-b-md p-5 w-64"
    >
      {typeOption.map((item) => (
        <OptionItem
          key={item.id}
          typeItem={item.type}
          options={options}
          minLimit={item.limit}
          handleOptions={handleOptions}
        />
      ))}
    </div>
  );
}

function OptionItem({ options, typeItem, minLimit, handleOptions }: OptionItemProps) {
  return (
    <div className="grid grid-cols-6 items-center gap-7 my-2 text-slate-800">
      <span className="col-span-2 text-base capitalize">{typeItem}</span>
      <div className="flex items-center justify-between pl-5 col-span-4">
        <button
          onClick={() => handleOptions(typeItem, 'dec')}
          className="bg-blue-200 p-2 rounded-md cursor-pointer hover:bg-blue-300 duration-500"
          disabled={options[typeItem] <= minLimit}
        >
          <BiMinus className="w-5 h-5" />
        </button>

        <span>{options[typeItem]}</span>
        <button
          onClick={() => handleOptions(typeItem, 'inc')}
          className="bg-blue-200 p-2 rounded-md cursor-pointer hover:bg-blue-300 duration-500"
        >
          <BiPlus className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export function User() {
  const navigate = useNavigate();
  const { user, isAuthenticated, logOut } = useAuth();
  return (
    <>
      {isAuthenticated ? (
        <div className="flex items-center">
          <button
            onClick={() => {
              logOut();
              navigate('/typescript-react-hotel-booking-app');
            }}
          >
            <BiLogOut className="w-6 h-6 mr-3 text-slate-500" />
          </button>
          {user?.name}
        </div>
      ) : (
        <NavLink to={'/login'} className="flex items-center">
          <BiLogIn className="w-6 h-6 mr-3 text-slate-500" /> وارد شوید
        </NavLink>
      )}
    </>
  );
}
