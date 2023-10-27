// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Link } from 'react-router-dom';
import { useHotels } from '../context/HotelsProvider';

function Hotels() {
  const { data, isLoading, currentHotel } = useHotels();

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="flex flex-col gap-5 p-5">
      {data?.map((item) => (
        <Link
          key={item.id}
          to={`/hotels/${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
        >
          <div
            className={`flex flex-col lg:flex-row rounded-md p-1 border ${
              item.id === currentHotel?.id
                ? 'ring-1 ring-offset-2 ring-blue-500 dark:ring-offset-primary border-blue-500'
                : ''
            }`}
          >
            <img
              className="h-40 w-full lg:w-60 rounded-md mr-5"
              src={item.picture_url.url}
              alt=""
            />

            <div className="p-4 lg:p-0">
              <p className="font-bold">{item.smart_location}</p>
              <h2>{item.name}</h2>
              <p>€&nbsp;{item.price}&nbsp;night</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Hotels;
