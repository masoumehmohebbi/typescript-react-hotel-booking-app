// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch.js';
import { HeadingLine } from './HeadingLine.js';
import Loader from './Loader.js';

function LocationList() {
  // const { data, isLoading } = useFetch('http://localhost:5000/hotels', '');
  const { data, isLoading } = useFetch(
    'https://hotel-booking-mock-api.onrender.com/hotels',
    '',
  );

  if (isLoading)
    return (
      <div className="my-20 flex justify-center text-xl">
        <Loader />
      </div>
    );
  return (
    <>
      <HeadingLine id="nearbyhotels" title="nearby location" marginTop="mt-16" />
      <div className="dark:text-slate-700 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 justify-items-center mt-8 mb-9">
        {data.map((item) => (
          <div key={item.id} className="relative border group shadow-lg">
            <div className="h-64 w-64 md:w-96">
              <img
                className="h-full w-full object-fit block"
                src={item.picture_url.url}
                alt={item.name}
              />
            </div>
            <div className="tr flex flex-col absolute bottom-0 left-0 overflow-hidden h-[4rem] group-hover:h-full bg-white right-0 w-full">
              <div className="flex justify-between items-center border-b">
                <p className="font-bold pl-2">{item.smart_location}</p>
                <p className="bg-blue-50 py-2 px-4 border-l">
                  <span className="text-[#75c5cf] text-lg font-bold">
                    €&nbsp;{item.price}
                  </span>
                  <br />
                  night
                </p>
              </div>
              <div className="mt-9 w-full flex items-center justify-center flex-col gap-5">
                <h2 className="w-[96%]">{item.name}</h2>
                <Link
                  to={`/hotels/${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
                >
                  <button className="btn">See Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default LocationList;
