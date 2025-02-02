"use client";

import React, { useEffect, useState } from "react";
import { getCartItems } from "../actions/actions";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { FaChevronRight } from "react-icons/fa";
import { client } from "@/sanity/lib/client";
import Swal from "sweetalert2";

type FormField = "firstName" | "lastName" | "email" | "phone" | "address" | "zipCode" | "city";

const CheckOut = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    zipCode: false,
    city: false,
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("Applied Discount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email,
      phone: !formValues.phone,
      address: !formValues.address,
      zipCode: !formValues.zipCode,
      city: !formValues.city,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) {
      Swal.fire("Error!", "Please fill in all the fields before proceeding.", "error");
      return;
    }

    Swal.fire({
      title: "Processing your order...",
      text: "Please confirm to proceed.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const orderData = {
          _type: "order",
          firstName: formValues.firstName,
          lastName: formValues.lastName,
          address: formValues.address,
          city: formValues.city,
          zipCode: formValues.zipCode,
          phone: formValues.phone,
          email: formValues.email,
          cartItems: cartItems.map((item) => ({
            _type: "reference",
            _ref: item.id,
          })),
          subTotal: subTotal,
          discount: discount,
          orderDate: new Date().toISOString(),
        };

        try {
          await client.create(orderData);
          localStorage.removeItem("Applied Discount");
          Swal.fire("Success!", "Your order has been successfully processed!", "success");
        } catch (error) {
          console.error("Error Creating Order:", error);
          Swal.fire("Error!", "There was an issue processing your order.", "error");
        }
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 py-4 text-gray-600 text-sm">
          <Link href="/cart" className="hover:text-black">Cart</Link>
          <FaChevronRight />
          <span className="font-semibold">Checkout</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="bg-white border p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 py-3 border-b">
                  <div className="w-16 h-16 rounded overflow-hidden">
                    {item.imageUrl && (
                      <Image
                        src={urlFor(item.imageUrl).url()}
                        alt={item.title}
                        width={64}
                        height={64}
                        className="object-cover rounded"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.title}</h3>
                    <p className="text-gray-600 text-xs">Quantity: {item.inventory}</p>
                  </div>
                  <p className="text-sm font-semibold">${(item.price * item.inventory).toFixed(2)}</p>
                </div>
              ))
            ) : (
              <p className="text-xs font-medium">No items in your cart.</p>
            )}
            <div className="mt-4 border-t pt-4">
              <p className="text-sm">Subtotal: <span className="font-semibold">${subTotal.toFixed(2)}</span></p>
              <p className="text-sm">Discount: <span className="font-semibold">${discount}</span></p>
              <p className="text-lg font-semibold">Total: ${(subTotal - discount).toFixed(2)}</p>
            </div>
          </div>

          <div className="bg-white border p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Billing Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(Object.keys(formValues) as FormField[]).map((key) => (
                <div key={key}>
                  <label htmlFor={key} className="block text-sm font-medium text-gray-700">
                    {key.replace(/([A-Z])/g, ' $1')}
                  </label>
                  <input
                    type="text"
                    id={key}
                    value={formValues[key]}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                    placeholder={`Enter your ${key}`}
                  />
                  {formErrors[key] && (
                    <p className="text-sm text-red-500">{key.replace(/([A-Z])/g, ' $1')} is required</p>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={handlePlaceOrder}
              className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-2 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition transform"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
