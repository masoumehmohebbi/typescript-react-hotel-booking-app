// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useNavigate } from 'react-router-dom';
import { HeadingLine } from '../components/HeadingLine';
import { BiArrowBack } from 'react-icons/bi';

function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <HeadingLine
        id="nearbyhotels"
        title="404 | صفحه مورد نظر یافت نشد"
        marginTop="mt-16"
      />
      <div className="dark:text-[#ccc] justify-center flex text-center capitalize gap-5 justify-items-center mt-8 mb-9">
        <button className="btn" onClick={() => navigate('/')}>
          <BiArrowBack className="w-6 h-6 mr-2" />
          برگشت به صفحه اصلی
        </button>
      </div>
    </>
  );
}

export default NotFound;
