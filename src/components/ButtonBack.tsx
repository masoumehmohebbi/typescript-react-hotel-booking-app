import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

function ButtonBack() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className="btn text-sm sm:text-base">
      <BiArrowBack className="w-6 h-6 mr-2" /> برگشت
    </button>
  );
}

export default ButtonBack;
