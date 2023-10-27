// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Outlet } from 'react-router-dom';
import { HeadingLine } from './HeadingLine.js';
import Map from './Map.js';
import { useBookmark } from '../context/BookmarkListContext.js';

function BookmarkLayout() {
  const { bookmarks } = useBookmark();
  return (
    <>
      <HeadingLine title={`Bookmark Hotels`} marginTop="mt-16" />
      <section className="grid grid-cols-2 h-screen">
        <aside className="overflow-y-scroll tailwind-custom-scroll !scrollbar-thumb-blue-600">
          <Outlet />
        </aside>
        <Map markerLocations={bookmarks} />
      </section>
    </>
  );
}

export default BookmarkLayout;
