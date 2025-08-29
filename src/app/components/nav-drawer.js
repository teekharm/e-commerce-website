import Dropdown from "./dropdown";

export default function NavDrawer() {
  return (
    <div className="h-screen w-full bg-black fixed z-10 left-0">
      <ul className="flex flex-col text-white py-5 px-8 gap-6">
        <li>
          <a href="#" className="text-md">
            Online deals
          </a>
        </li>

        <Dropdown title={"Mac"}>
          <ul className=" w-full bg-black justify-between  items-center h-90 ">
            <li className="grid grid-cols-2 gap-5">
              <div className="flex flex-col items-center">
                <img src="/mackbook air.avif" className="w-20"></img>
                <a href="">Mackbook air </a>
              </div>
              <div className="flex flex-col items-center">
                <img src="/mackbook pro.avif" className="w-20"></img>
                <a href="">Mackbook pro </a>
              </div>

              <div className="flex flex-col items-center">
                <img src="/mac mini.avif" className="w-20"></img>
                <a href="">Mackbook mini </a>
              </div>

              <div className="flex flex-col items-center">
                <img src="/mac studio.avif" className="w-20"></img>
                <a href="">Mackbook studio </a>
              </div>

              <div className="flex flex-col items-center">
                <img src="/imac.avif" className="w-20"></img>
                <a href="">iMac </a>
              </div>

              <div className="flex flex-col items-center">
                <img src="/shop mac.avif" className="w-20"></img>
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
        </Dropdown>

        <Dropdown title={"iPhone"}>
          <ul className=" w-full bg-black justify-between items-center h-90 ">
            <li className="grid grid-cols-2 gap-10">
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
            <div className="w-full p-3 bg-blue-300">
              <a href="#">
                <p className="text-black text-sm text-center ">
                  Trade-in your old iphone and save{" "}
                </p>
              </a>
            </div>
          </ul>
        </Dropdown>

        <Dropdown title={"iPad"}>
          <ul className="w-full bg-black justify-between items-center h-90">
            <li className="grid grid-cols-2 gap-7">
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
            <div className="w-full p-2 bg-blue-500">
              <a href="#">
                <p className="text-white text-sm text-center ">
                  Shop our online promotions{" "}
                </p>
              </a>
            </div>
          </ul>
        </Dropdown>

        <Dropdown title={"Apple Watch"}>
          <ul className=" w-full bg-black justify-between items-center mt-10 h-90">
            <li className="grid grid-cols-2 gap-5">
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

            <div className="w-full p-2 bg-blue-500">
                <a href="#">
                  <p className="text-white text-sm text-center ">
                    Save and get your new device on finance.{" "}
                  </p>
                </a>
              </div>
          </ul>
        </Dropdown>

        <li>
          <a href="#" className="text-md">
            Airpods
          </a>
        </li>
        
        

        <Dropdown title={"Accessories"}>
          <ul className=" w-full bg-black justify-between items-center mt-10 h-90">
            <li className="grid grid-cols-2 gap-5">
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

            <div className="w-full p-2 bg-blue-500">
                <a href="#">
                  <p className="text-white text-sm text-center ">
                    Save and get your new device on finance.{" "}
                  </p>
                </a>
              </div>
          </ul>
        </Dropdown>

      </ul>
    </div>
  );
}
