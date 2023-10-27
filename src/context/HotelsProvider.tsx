// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { createContext, useContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch.js';
import axios from 'axios';
import toast from 'react-hot-toast';

const HotelContext = createContext();

// const BASE_URL = 'https://masoumehmohebbi.github.io/server-hotel-booking/hotels.json';
const BASE_URL = 'https://hotel-booking-mock-api.onrender.com';
// const BASE_URL = 'http://localhost:5000';

function HotelsProvider({ children }) {
  const [searchParams] = useSearchParams();

  const room = JSON.parse(searchParams.get('options'))?.room;
  const destination = searchParams.get('destination');
  const [currentHotel, setCurrentHotel] = useState(null);
  const [isLoadingCurrentHotel, setIsLoadingCurrentHotel] = useState(false);

  const { isLoading, data } = useFetch(
    `${BASE_URL}/hotels`,
    `q=${destination || ''}&accommodates_gte=${room || 1}`,
  );

  console.log(searchParams);

  async function getHotell(id) {
    setIsLoadingCurrentHotel(true);
    try {
      const { data } = await axios.get(`${BASE_URL}/hotels/${id}`);

      console.log(data);

      setCurrentHotel(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoadingCurrentHotel(false);
    }
  }
  return (
    <HotelContext.Provider
      value={{ isLoading, data, currentHotel, getHotell, isLoadingCurrentHotel }}
    >
      {children}
    </HotelContext.Provider>
  );
}

export default HotelsProvider;

export const useHotels = () => {
  return useContext(HotelContext);
};
