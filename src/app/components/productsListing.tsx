import Image from "next/image";
import Link from "next/link";
import { addToCart } from "../actions/actions";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";

// Product Listing Component
export const ProductListing = ({ product }: { product: Product }) => {





  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.title} Added to Cart`,
      showConfirmButton: false,
      timer: 2000,
    });
  
    const cartItem = {
      ...product,
      _key: uuidv4(), // ✅ Unique key generate ho rahi hai
      quantity: 1,    // ✅ Default quantity
    };
  
    addToCart(cartItem);
    
  };

  


  return (
    <div
      key={product.id}
      className="bg-white hover:shadow-lg overflow-hidden rounded-lg shadow "
    >
      <div className="relative">
        <Link href={`product/${product.id}`}>
        <Image
          src={product.imageUrl || "/images/placeholder.png"}
          alt={product.title || "Product Image"}
          width={400}
          height={400}
          className="w-full h-60 object-fill object-center hover:scale-105 transition-transform duration-300 "
        />
        </Link>
        {product.badge && (
          <span
            className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold text-white rounded ${
              product.badge === "New" ? "bg-green-500" : "bg-orange-500"
            }`}
          >
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex justify-center items-end">
        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-700 mb-1">
            {product.title}
          </h3>
          <div className="flex items-center gap-1">
            <p className="text-lg font-semibold text-gray-900">
              ${product.price?.toFixed(2)}
            </p>
            {product.priceWithoutDiscount && (
              <p className="text-sm line-through text-gray-400">
                ${product.priceWithoutDiscount?.toFixed(2)}
              </p>

            )}
          </div>

          <button className="bg-gradient-to-r from-blue-950 to-purple-700 text-white font-semibold py-2 px-3 rounded-md shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out" onClick={(e)=> handleAddToCart(e,product)}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};
