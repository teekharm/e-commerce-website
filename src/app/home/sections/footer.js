export default function Footer() {
    return (
      <div className="w-full h-max bg-black mt-10">
        <div className="flex flex-row gap-3 pr-10 pt-5 justify-end">
          <a href="www.facebook.com">
            <img src="/facebook.png" className="w-10"></img>
          </a>
          <a href="www.facebook.com">
            <img src="/twitter.png" className="w-10 "></img>
          </a>
          <a href="www.facebook.com">
            <img src="/instagram.png" className="w-10"></img>
          </a>
        </div>
        <hr className="w-50% ml-5 mr-5 border-1 mt-3  border-white"></hr>
        <div className="flex flex-col lg:flex-row gap-8 py-8 px-6 md:flex-row gap:4 lg:gap-50 mt-8 justify-center">
          <div className="flex gap-2 ">
          <div className="text-white text-sm lg:font-extralight">
            <h1 className="font-bold">Company</h1>
            <p>Trade in</p>
            <p>Repairs</p>
            <p>iCare</p>
            <p>Careers</p>
            <p>Device Financing</p>
            <p>Technical Support</p>
            <p>Store Locator</p>
            <p>Contact Us</p>
            
          </div>
  
          <div className="text-white text-sm lg:font-extralight">
            <h1 className="font-bold">Product</h1>
            <p>Shop Mac</p>
            <p>Shop iPhone</p>
            <p>Shop iPad</p>
            <p>Shop Watch</p>
            <p>Shop Accessories</p>
            
          </div>
  
          <div className="text-white text-sm lg:font-extralight">
            <h1 className="font-bold">Policies</h1>
            <p>Terms of Service</p>
            <p>Refund Policy</p>
            <p>Shipping Policy</p>
            <p>Privacy Policy</p>
            
          </div>
          </div>
  
          <div className="text-white flex flex-col gap-3 pb-8 lg:pb-0 text-sm lg:font-extralight">
              <h1 className="font-bold">Subcribe</h1>
              <p>Sign up to get the latest on sales, new releases <br></br>and more …</p>
             <input type="text" className="py-2 placeholder-gray-500 px-9 rounded-md bg-white" placeholder="Email" ></input>
             <input type="text" className="py-2 placeholder-gray-500 px-9 rounded-md bg-white" placeholder="Sign up" ></input>
          </div>
        </div>
      </div>
    );
  }
  