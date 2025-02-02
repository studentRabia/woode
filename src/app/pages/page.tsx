import Titlebar from '../components/titlebar';
import FutureProduct from '../components/futureProduct';
import ProductCard from '../components/productCard';

const Page = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Product Card */}
      <div className="flex justify-center">
        <ProductCard
          title="Library Stool Chair"
          price="$20.00 USD"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim."
         image="/images/Chirp.png"
        />
      </div>

      {/* Title Bar and Future Product Section */}
      <div className="mt-12 sm:mt-16 lg:mt-24">
        <Titlebar
          title="Future Product"
          titleright="View all"
          className="text-black"
        />
      </div>
      <div className="mt-8">
        <FutureProduct/>
      </div>
    </div>
  );
};

export default Page;




