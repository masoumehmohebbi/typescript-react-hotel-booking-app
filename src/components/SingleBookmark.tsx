// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useParams } from 'react-router-dom';
import { useBookmark } from '../context/BookmarkListContext';
import { useEffect } from 'react';
import Loader from './Loader';

import ReactCountryFlag from 'react-country-flag';

function SingleBookmark() {
  const { id } = useParams();
  const { currentBookmark, getBookmark, isLoading } = useBookmark();

  useEffect(() => {
    getBookmark(id);
  }, [id]);

  if (isLoading || !currentBookmark) return <Loader />;

  return (
    <div className="px-2">
      {/* <div className="hidden md:block">
        <ButtonBack />
      </div> */}
      <div className="mt-11 mb-11 md:mb-0">
        <div className="border py-2 px-4 shadow-lg rounded-lg">
          <h2 className="font-bold text-xl">{currentBookmark.cityName}</h2>

          <span className="flex items-center mt-2">
            <ReactCountryFlag svg countryCode={currentBookmark.countryCode} />
            <h5 className="text-slate-600 ml-2">
              {currentBookmark.cityName} - {currentBookmark.country}
            </h5>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SingleBookmark;
