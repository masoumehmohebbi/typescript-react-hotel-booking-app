import Footer from './components/Footer';
import Header from './components/Header';
import { Toaster } from 'react-hot-toast';
import LocationList from './components/LocationList';
import { Route, Routes } from 'react-router-dom';
import Hotels from './pages/Hotels';
import AppLayout from './components/AppLayout';
import Providers from './components/Providers';
import SingleHotel from './components/SingleHotel';
import BookmarkLayout from './components/BookmarkLayout';
import BookmarkList from './components/BookmarkList';
import SingleBookmark from './components/SingleBookmark';
import AddNewBookmark from './components/AddNewBookmark';
import LogIn from './pages/LogIn';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="bg-white dark:bg-primary dark:text-[#ccc]">
      <Providers>
        <Toaster />
        <Header />

        <Routes>
          <Route path="/" element={<LocationList />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/hotels" element={<AppLayout />}>
            <Route index element={<Hotels />} />
            <Route path=":id" element={<SingleHotel />} />
          </Route>
          <Route
            path="/bookmark"
            element={
              <ProtectedRoute>
                <BookmarkLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<BookmarkList />} />
            <Route path=":id" element={<SingleBookmark />} />
            <Route path="add" element={<AddNewBookmark />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <HotelBookingExperience />
        <Footer />
      </Providers>
    </div>
  );
}

export default App;

function HotelBookingExperience() {
  return (
    <div className="w-full flex font-bold flex-col items-center justify-center gap-y-5 text-white h-80 bg-fixed bg-[url('https://slashdown.net/starhotel-html/images/parallax/parallax-01.jpg')]">
      <h1 className="text-2xl sm:text-3xl md:text-4xl">هتل بوکینگ</h1>
      <p className="capitalize text-base px-6 md:text-xl">
        بزرگ ترین سامانه رزرو هتل آنلاین و امکان جستجوی سریع و رزرو آسان هتل و هتل
        آپارتمان را برای شما فراهم نموده است.
      </p>
    </div>
  );
}
