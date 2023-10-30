// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Outlet } from 'react-router-dom';
import { HeadingLine } from './HeadingLine';
import Map from './Map.js';
import { useHotels } from '../context/HotelsProvider.js';

function AppLayout() {
  const { data } = useHotels();
  return (
    <>
      <HeadingLine title={` نتیجه جستجو ${data.length}`} marginTop="mt-16" />
      <section className="grid grid-cols-2 h-screen">
        <Map markerLocations={data} />

        <aside
          dir="ltr"
          className="overflow-y-scroll tailwind-custom-scroll !scrollbar-thumb-blue-600"
        >
          <Outlet />
        </aside>
      </section>
    </>
  );
}

export default AppLayout;
