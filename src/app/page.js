import DealsSec from "./components/deal";
import MediumAds from "./components/medium-ads";
import ThirdAds from "./components/third-ads";
import TopAdds from "./components/top-ads";
import HomePage from "./home/home-page";
import Footer from "./home/sections/footer";

export default function App() {
  return (
    <>
      <HomePage />

      <p className="ml-20 mt-15 lg:mt-10 text-2xl font-light">Explore <strong>Affordability</strong></p>

      <TopAdds />

      <p className="ml-20 mt-7 lg:mt-10 text-2xl font-light">Shop the latest <strong>iPhone 16</strong></p>
      <MediumAds/>

      <p className="ml-20 mt-10 text-2xl font-light">Shop <strong>our Apple watch range</strong></p>
      <ThirdAds/>

      <p className="ml-20 mt-10 text-2xl font-light">So much more <strong>at iStore</strong></p>
      <DealsSec/>
      <Footer/>
    </>
  );
}
