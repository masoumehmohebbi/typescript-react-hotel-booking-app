// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Link } from 'react-router-dom';
import { useBookmark } from '../context/BookmarkListContext';
import Loader from './Loader';
import ReactCountryFlag from 'react-country-flag';
import { BiTrash } from 'react-icons/bi';

function BookmarkList() {
  const { isLoading, bookmarks, currentBookmark, deleteBookmark } = useBookmark();

  const handleDelete = async (e, id) => {
    e.preventDefault();
    await deleteBookmark(id);
  };

  if (isLoading) return <Loader />;
  if (!bookmarks.length)
    return <p className="capitalize">هیچ مکان نشانه گذاری شده ای وجود ندارد!</p>;
  return (
    <section className="px-2">
      {/* <div className="hidden md:block">
        <ButtonBack />
      </div> */}
      <div className="flex flex-col gap-y-6 p-2 md:p-5">
        {bookmarks.map((item) => (
          <Link
            key={item.id}
            to={`${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
          >
            <div
              className={` ${
                currentBookmark?.id === item.id
                  ? 'ring-1 ring-offset-2 dark:ring-offset-primary ring-pink-500 border-pink-500'
                  : ''
              } flex items-center justify-between border border-blue-300 shadow-md rounded-lg p-3`}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-x-5">
                <span className="flex items-center gap-x-1">
                  <ReactCountryFlag svg countryCode={item.countryCode} />
                  <strong>{item.cityName}</strong>
                </span>
                <span className="text-blue-500">{item.country}</span>
              </div>

              <button onClick={(e) => handleDelete(e, item.id)}>
                <BiTrash className="w-5 h-5 text-red-500" />
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default BookmarkList;
