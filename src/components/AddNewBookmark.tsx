// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useUrlLocation from '../hooks/useUrlLocation';
import toast from 'react-hot-toast';
import Loader from './Loader';
import ReactCountryFlag from 'react-country-flag';
import { useBookmark } from '../context/BookmarkListContext';

const BASE_GEOCODING_URL = 'https://api.bigdatacloud.net/data/reverse-geocode-client';

function AddNewBookmark() {
  const [cityName, setCityName] = useState('');
  const [country, setCountry] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [isLoadingGeoCoding, setIsLoadingGeoCoding] = useState(false);
  const [geoCodingError, setGeoCodingError] = useState(null);
  const navigate = useNavigate();
  const [lat, lng] = useUrlLocation();
  const { createBookmark } = useBookmark();

  useEffect(() => {
    if (!lat || !lng) return;

    async function fetchLocationData() {
      setIsLoadingGeoCoding(true);
      setGeoCodingError(null);
      try {
        const { data } = await axios.get(
          `${BASE_GEOCODING_URL}?latitude=${lat}&longitude=${lng}`,
        );
        if (!data.countryCode)
          throw new Error('این یک شهر نیست! لطفا روی جای دیگری کلیک کنید');

        setCityName(data.city || data.locality || '');
        setCountry(data.countryName);
        setCountryCode(data.countryCode);
      } catch (error) {
        toast.error(error.message);
        setGeoCodingError(error.message);
      } finally {
        setIsLoadingGeoCoding(false);
      }
    }
    fetchLocationData();
  }, [lat, lng]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cityName || !country) return;

    const newBookmark = {
      cityName,
      country,
      countryCode,
      latitude: lat,
      longitude: lng,
      host_location: cityName + ' ' + country,
    };
    await createBookmark(newBookmark);
    navigate('/bookmark');
  };

  if (isLoadingGeoCoding) return <Loader />;
  if (geoCodingError) return <GeoCodingError geoCodingError={geoCodingError} />;
  return (
    <div className="px-2 md:px-5 ">
      <h1 className="text-base flex items-end justify-end md:text-start mt-5 md:mt-0 md:text-lg font-bold capitalize mb-11">
        بوکمارک کردن مکان جدید
      </h1>

      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-x-4">
          <label dir="rtl" htmlFor="cityName">
            {' '}
            شهر:
          </label>
          <input
            value={cityName}
            onClick={(e) => setCityName(e.target.value)}
            type="text"
            name="cityName"
            id="cityName"
          />
        </div>
        <div className="flex flex-col gap-x-4 relative">
          <label dir="rtl" htmlFor="country">
            کشور:
          </label>
          <input
            value={country}
            onClick={(e) => setCountry(e.target.value)}
            type="text"
            name="country"
            id="country"
          />
          <ReactCountryFlag
            svg
            countryCode={countryCode}
            className="absolute right-2 top-[55%]"
          />
        </div>
        <div className="w-full justify-end my-4 md:my-0 flex gap-y-4 md:gap-y-0 flex-row items-center mt-6">
          {/* <ButtonBack /> */}
          <button className="btn flex justify-center text-sm sm:text-base">
            اضافه کردن بوکمارک جدید
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewBookmark;

function GeoCodingError({ geoCodingError }) {
  return <p>{geoCodingError}</p>;
}
