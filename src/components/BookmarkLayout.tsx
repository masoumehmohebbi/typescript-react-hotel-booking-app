// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Outlet } from 'react-router-dom';
import { HeadingLine } from './HeadingLine.js';
import Map from './Map.js';
import { useBookmark } from '../context/BookmarkListContext.js';
import ButtonBack from './ButtonBack.js';

function BookmarkLayout() {
  const { bookmarks } = useBookmark();
  return (
    <>
      <HeadingLine title={` بوکمارک هتل ها`} marginTop="mt-16" />
      <div className="w-full flex justify-end px-2 pb-2">
        <ButtonBack />
      </div>
      <section className="grid grid-cols-2 md:h-screen">
        <Map markerLocations={bookmarks} />
        <aside
          dir="ltr"
          className="col-span-2 md:col-span-1 overflow-y-scroll tailwind-custom-scroll !scrollbar-thumb-blue-600"
        >
          <Outlet />
        </aside>
      </section>
    </>
  );
}

export default BookmarkLayout;
