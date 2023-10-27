function Footer() {
  return (
    <>
      <nav
        id="footer"
        className="bg-[#3c3c3c] flex flex-col md:flex-row px-5 py-11 justify-between gap-7 text-[#898989]"
      >
        <div className="flex flex-col flex-1 space-y-7">
          <h2 className="uppercase">About HotelBooking</h2>
          <p>
            Suspendisse sed sollicitudin nisl, at dignissim libero. Sed porta tincidunt
            ipsum, vel volutpat. Nunc ut fringilla urna. Cras vel adipiscing ipsum.
            Integer dignissim nisl eu lacus interdum facilisis. Aliquam erat volutpat.
            Nulla semper vitae felis vitae dapibus.
          </p>
        </div>
        <div className="flex flex-col flex-1 space-y-7">
          <h2 className="uppercase">RECIEVE OUR NEWSLETTER</h2>
          <p>
            Suspendisse sed sollicitudin nisl, at dignissim libero. Sed porta tincidunt
            ipsum, vel volutpa!
          </p>
          <input
            className="outline-none p-2 rounded-md border duration-500 border-[#5b5b5b] bg-transparent focus:border-[#ccc]"
            type="text"
            placeholder="Please enter your E-mail"
          />
          <button className="rounded-md hover:bg-[#111] duration-500 text-[#d1d1d1] bg-black shadow-lg py-3">
            Submit
          </button>
        </div>
        <div className="flex flex-col flex-1 space-y-7">
          <h2 className="uppercase">FROM OUR BLOG</h2>
          <ul className="space-y-3">
            <li className="border-b-2 border-[#ccc]">
              <a href="#">
                This is a video post <br /> April 15 2014
              </a>
            </li>
            <li className="border-b-2 border-[#ccc]">
              <a href="#">
                An image post <br /> April 14 2014
              </a>
            </li>
            <li className="border-b-2 border-[#ccc]">
              <a href="#">
                Audio included post <br /> April 12 2014
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col flex-1 space-y-7">
          <h2 className="uppercase">FROM OUR BLOG</h2>
          <ul className="space-y-3">
            <li className="border-b-2 border-[#ccc]">
              <a href="#">Home</a>
            </li>
            <li className="border-b-2 border-[#ccc]">
              <a href="#">Login</a>
            </li>
            <li className="border-b-2 border-[#ccc]">
              <a href="#">Photos</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="bg-[#272727] text-sm sm:text-base flex justify-between p-7 items-center text-[#898989]">
        <span>© 2023 HOTELBOOKING All Rights Reserved</span>
        <a href="#">Contact</a>
      </nav>
    </>
  );
}

export default Footer;
