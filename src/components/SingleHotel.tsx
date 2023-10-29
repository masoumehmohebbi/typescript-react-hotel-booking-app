// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import { useHotels } from '../context/HotelsProvider';
import { useEffect, useState } from 'react';
import { HeadingLine } from './HeadingLine';
import { BiHomeSmile } from 'react-icons/bi';
import ButtonBack from './ButtonBack';

function SingleHotel() {
  const { id } = useParams();
  const { currentHotel, getHotell, isLoadingCurrentHotel } = useHotels();
  useEffect(() => {
    getHotell(id);
  }, [id]);

  if (isLoadingCurrentHotel || !currentHotel) return <Loader />;
  return (
    <div className="px-2">
      <ButtonBack />
      <div
        className={` 
       flex justify-center items-center mt-6 flex-col gap-y-3`}
      >
        <h2 className="sm:text-lg font-bold">{currentHotel.name}</h2>
        <p className="text-slate-700 dark:text-[#ccc]">
          {currentHotel.number_of_reviews} reviews {currentHotel.smart_location}
        </p>
        <img
          className="w-96 h-40 sm:h-64 md:h-80 rounded-lg shadow-sm"
          src={currentHotel.xl_picture_url}
          alt={currentHotel.name}
        />
        <HotelTabs currentHotel={currentHotel} />
      </div>
    </div>
  );
}

export default SingleHotel;

function HotelTabs({ currentHotel }) {
  console.log(currentHotel);
  const [currentTitle, setCurrentTitle] = useState('host_verifications');
  const tabTitles = [
    { id: 1, name: 'host_verifications' },
    { id: 2, name: 'amenities' },
    { id: 3, name: 'features' },
  ];
  return (
    <section className="mt-6 mb-11 duration-500">
      <HeadingLine title="جزئیات هتل" />

      <div className="hidden md:block mt-5 w-full border rounded-md shadow-lg p-3">
        <header className="grid grid-cols-3 pt-2 w-full border-b text-slate-700 dark:text-[#ccc]">
          {tabTitles.map((title) => (
            <button
              onClick={() => setCurrentTitle(title.name)}
              key={title.id}
              className={`font-bold uppercase pb-2 ${
                title.name === currentTitle
                  ? 'text-blue-600 border-b-2 border-blue-700'
                  : ''
              }`}
            >
              {title.name}
            </button>
          ))}
        </header>
        <main className="grid grid-cols-2 gap-5 mt-6 h-fit p-2">
          {currentHotel[currentTitle].map((item) => (
            <div key={item}>
              <div className="flex items-start text-blue-700">
                <BiHomeSmile className="w-5 h-5 text-blue-600 mr-1" /> {item}
              </div>
            </div>
          ))}
        </main>
      </div>
      {/* mobile */}
      <div className="md:hidden">
        {tabTitles.map((item) => (
          <main key={item.id} className="grid grid-cols-2 gap-5 mt-6 h-fit p-2">
            <span className="capitalize font-bold">{item.name}</span>
            <hr className="w-full col-span-2" />
            {currentHotel[item.name].map((c) => (
              <div div key={c} className="flex items-start text-blue-700 col-span-2">
                <BiHomeSmile className="w-5 h-5 text-blue-600 mr-1" /> {c}
              </div>
            ))}
          </main>
        ))}
      </div>
    </section>
  );
}
