export default function Navbar({toggle, drawerOpen}) {
  
  return (
    <nav className="w-full bg-black text-white p-5 flex justify-between items-center">
      <button className="lg:hidden" onClick={toggle}>
        {drawerOpen? <img className="w-6" src="/icons8-close.svg"></img> :<img className="w-4" src="/icons8-hamburger-menu-50-2.png"></img> }
      </button>
      <h1 className="font-extrabold">OnlineStore</h1>
      <div className="hidden lg:flex flex-row items-center">
        <ul className="flex items-center gap-6">
          <li>
            <a href="#" className="hover:text-blue-300">
              Online deals
            </a>
          </li>

          <li className="group">
            <a href="#" className="flex hover:text-blue-300 ">
              Mac <img src="/icons8-expand-arrow-24.png"></img>
            </a>
            <div className="w-full flex-col fixed top-10 z-50 left-0 hidden group-hover:flex">
              <ul className="flex w-full px-2 bg-black justify-center items-center h-40 ">
                <li className="flex flex-row  gap-22">
                  <div className="flex flex-col items-center">
                    <img src="/mackbook air.avif" className="w-25"></img>
                    <a href="">Mackbook air </a>
                  </div>

                  <div className="flex flex-col items-center">
                    <img src="/mackbook pro.avif" className="w-25"></img>
                    <a href="">Mackbook pro </a>
                  </div>

                  <div className="flex flex-col items-center">
                    <img src="/mac mini.avif" className="w-25"></img>
                    <a href="">Mackbook mini </a>
                  </div>

                  <div className="flex flex-col items-center">
                    <img src="/mac studio.avif" className="w-25"></img>
                    <a href="">Mackbook studio </a>
                  </div>

                  <div className="flex flex-col items-center">
                    <img src="/imac.avif" className="w-25"></img>
                    <a href="">iMac </a>
                  </div>

                  <div className="flex flex-col items-center">
                    <img src="/shop mac.avif" className="w-25"></img>
                    <a href="">Shop mac </a>
                  </div>
                </li>
              </ul>
              <div className="w-full p-3 bg-gray-300">
                <a href="#">
                  <p className="text-black text-sm text-center ">
                    Find Out What Mac Can Do.{" "}
                  </p>
                </a>
              </div>
            </div>
          </li>

          <li className="group">
            <a href="#" className="flex hover:text-blue-300">
              iPhone <img src="/icons8-expand-arrow-24.png"></img>
            </a>
            <div className="w-full flex-col fixed top-10 left-0 z-50 hidden group-hover:flex">
              <ul className="flex w-full px-2 bg-black justify-center items-center h-30 p-4">
                <li className="flex flex-row  gap-45">
                  <div className="flex flex-col items-center">
                    <img src="/iphone 16.avif" className="w-15"></img>
                    <a href="">iPhone 16 </a>
                  </div>

                  <div className="flex flex-col items-center">
                    <img src="/iphone15.avif" className="w-15"></img>
                    <a href="">iPhone 15 </a>
                  </div>

                  <div className="flex flex-col items-center">
                    <img src="/iphone14.avif" className="w-15"></img>
                    <a href="">iPhone 14 </a>
                  </div>

                  <div className="flex flex-col items-center">
                    <img src="/iphone13.avif" className="w-15"></img>
                    <a href="">iPhone 13 </a>
                  </div>

                  <div className="flex flex-col items-center">
                    <img src="/iphonexe.avif" className="w-15"></img>
                    <a href="">iPhone se</a>
                  </div>

                  
                </li>
              </ul>
              <div className="w-full p-3 bg-blue-300">
                <a href="#">
                  <p className="text-black text-sm text-center ">
                    Trade-in your old iphone and save{" "}
                  </p>
                </a>
              </div>
            </div>
          </li>

          <li className="group">
            <a href="#" className="flex hover:text-blue-300">
              iPad <img src="/icons8-expand-arrow-24.png"></img>
            </a>
            <div className="w-full flex-col fixed top-10 left-0 hidden z-50 group-hover:flex">
              <ul className="flex w-full px-2 bg-black justify-center items-center h-30 p-4">
                <li className="flex flex-row  gap-45">
                  <div className="flex flex-col items-center">
                    <img src="/ipad mini.avif" className="w-18"></img>
                    <a href="">iPad mini </a>
                  </div>

                  <div className="flex flex-col items-center">
                    <img src="/ipad.avif" className="w-18"></img>
                    <a href="">iPad </a>
                  </div>

                  <div className="flex flex-col items-center">
                    <img src="/ipad pro.avif" className="w-18"></img>
                    <a href="">iPad pro </a>
                  </div>

                  <div className="flex flex-col items-center">
                    <img src="/ipad air.avif" className="w-18"></img>
                    <a href="">iPad air </a>
                  </div>

                  <div className="flex flex-col items-center">
                    <img src="/shop ipad.avif" className="w-18"></img>
                    <a href="">Shop iPad </a>
                  </div>
                </li>
              </ul>
              <div className="w-full p-3 bg-blue-500">
                <a href="#">
                  <p className="text-white text-sm text-center ">
                    Shop our online promotions{" "}
                  </p>
                </a>
              </div>
            </div>
          </li>

          <li className="group">
            <a href="#" className="flex hover:text-blue-300">
              Apple Watch <img src="/icons8-expand-arrow-24.png"></img>
            </a>
            <div className="w-full flex-col fixed top-10 left-0 hidden z-50 group-hover:flex">
              <ul className="flex w-full px-2 bg-black justify-center items-center h-30 p-4">
              <li className="flex flex-row  gap-15">
                  <div className="flex flex-col items-center">
                    <img src="/ultra2.avif" className="w-18"></img>
                    <a href="">Watch Ultra 2 </a>
                  </div>

                  <div className="flex flex-col items-center">
                    <img src="/series 10.avif" className="w-18"></img>
                    <a href="">Watch Series 10 </a>
                  </div>

                  <div className="flex flex-col items-center">
                    <img src="/series 9.avif" className="w-18"></img>
                    <a href="">Watch Series 9 </a>
                  </div>

                  <div className="flex flex-col items-center">
                    <img src="/se.avif" className="w-18"></img>
                    <a href="">Watch SE (2nd Gen)</a>
                  </div>

                  <div className="flex flex-col items-center">
                    <img src="/se 1st gen.avif" className="w-18"></img>
                    <a href="">Watch SE (1st Gen) </a>
                  </div>

                  <div className="flex flex-col items-center">
                    <img src="/watch accessories.avif" className="w-18"></img>
                    <a href="">Watch Accessories</a>
                  </div>
                </li>

              </ul>
              <div className="w-full p-3 bg-blue-500">
                <a href="#">
                  <p className="text-white text-sm text-center ">
                    Save and get your new device on finance.{" "}
                  </p>
                </a>
              </div>
            </div>
          </li>

          <li>
            <a href="#">Airpods</a>
          </li>

          <li className="group">
            <a href="#" className="flex hover:text-blue-300">
              Accessories <img src="/icons8-expand-arrow-24.png"></img>
            </a>
            <div className="w-full flex-col fixed top-10 left-0 hidden z-50 group-hover:flex">
              <ul className="flex w-full px-2 bg-black justify-between items-center h-30 p-4">
                <li>Mackbook pro</li>
                <li>Mackbook pro</li>
                <li>Mackbook pro</li>
                <li>Mackbook pro</li>
              </ul>
              <div className="w-full p-3 bg-blue-500">
                <a href="#">
                  <p className="text-white text-sm text-center ">
                    Get Free Shipping or Pick up in-store{" "}
                  </p>
                </a>
              </div>
            </div>
          </li>

          <li className="group">
            <a href="#" className="flex hover:text-blue-300">
              Services <img src="/icons8-expand-arrow-24.png"></img>
            </a>
            <div className="w-full flex-col fixed top-10 left-0 z-50 hidden group-hover:flex">
              <ul className="flex w-full px-2 bg-black justify-between items-center h-30 p-4">
                <li>Mackbook pro</li>
                <li>Mackbook pro</li>
                <li>Mackbook pro</li>
                <li>Mackbook pro</li>
              </ul>
              <div className="w-full p-3 bg-blue-500">
                <a href="#">
                  <p className="text-white text-sm text-center ">
                    Contact us for any queries.{" "}
                  </p>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex gap-3 items-center"> 
        <img src="/icons8-search-50-2.png" className="w-6 h-6"></img>
        <img src="/icons8-profile-50.png" className="w-6"></img>
        <img src="/icons8-cart-50.png" className="w-6 h-5.5"></img>
      </div>
    </nav>
  );
}
