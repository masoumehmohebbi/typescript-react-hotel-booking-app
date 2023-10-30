import bazar from '../assets/images/footer-bazar.png';
import googlePlay from '../assets/images/footer-googlePlay.png';
import ios from '../assets/images/footer-ios.png';

function Footer() {
  return (
    <>
      <nav
        id="footer"
        className="bg-[#3c3c3c] leading-7 flex flex-col md:flex-row px-5 py-11 justify-between gap-7 text-[#898989]"
      >
        <div className="flex flex-col flex-1 space-y-7">
          <h2 className="uppercase font-bold text-lg text-blue-500">
            درباره ی هتل بوکینگ
          </h2>
          <p className="text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
            طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله کتابهای زیادی در شصت و
            سه درصد گذشته، فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت
            بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
            فارسی ایجاد کرد.
          </p>
        </div>
        <div className="flex flex-col flex-1 space-y-7">
          <h2 className="uppercase font-bold text-lg text-blue-500">
            دانلود اپلیکیشن هتل بوکینگ
          </h2>
          <p>
            اپلیکیشن هتل بوکینگ را دانلود کنید و با تلفن همراهتان رزروتان را آسان تر انجام
            دهید
          </p>
          <ul className="space-y-3 flex flex-col items-center">
            <li>
              <a href="#">
                <img className=" h-auto" src={googlePlay} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img className=" h-auto" src={bazar} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img className=" h-auto" src={ios} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col flex-1 space-y-7">
          <h2 className="uppercase font-bold text-lg text-blue-500">دریافت خبرنامه</h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از لازم
            ابزارهای کاربردی می باشد.
          </p>
          <input
            className="outline-none p-2 rounded-md border duration-500 border-[#5b5b5b] bg-transparent focus:border-[#ccc]"
            type="text"
            placeholder="آدرس ایمیل خود را وارد کنید"
          />
          <button className="rounded-md hover:bg-[#111] duration-500 text-[#d1d1d1] bg-black shadow-lg py-3">
            ارسال
          </button>
        </div>
        <div className="flex flex-col flex-1 space-y-7">
          <h2 className="uppercase font-bold text-lg text-blue-500">فهرست عناوین سایت</h2>
          <ul className="space-y-3">
            <li className="border-b-2 border-[#ccc] py-1 pr-1">
              <a href="#">پیگیری رزرو</a>
            </li>
            <li className="border-b-2 border-[#ccc] py-1 pr-1">
              <a href="#">هتل</a>
            </li>
            <li className="border-b-2 border-[#ccc] py-1 pr-1">
              <a href="#">هتل های ایران</a>
            </li>
            <li className="border-b-2 border-[#ccc] py-1 pr-1">
              <a href="#">نظرات هتل ها</a>
            </li>
            <li className="border-b-2 border-[#ccc] py-1 pr-1">
              <a href="#">نقشه راهنمای گردشگری</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="bg-[#272727]  text-sm sm:text-base flex justify-between p-7 items-center text-[#898989]">
        <span>© ۲۰۲۳ کلیه ی حقوق هتل بوکینگ محفوظ است</span>
        <a href="#">ارتباط با ما</a>
      </nav>
    </>
  );
}

export default Footer;
