// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import AuthProvider from '../context/AuthProvider';
import BookmarkListProvider from '../context/BookmarkListContext';
import HotelsProvider from '../context/HotelsProvider';

function Providers({ children }) {
  return (
    <AuthProvider>
      <BookmarkListProvider>
        <HotelsProvider>{children}</HotelsProvider>
      </BookmarkListProvider>
    </AuthProvider>
  );
}

export default Providers;
