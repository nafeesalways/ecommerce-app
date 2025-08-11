import React, { useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { Link } from "react-router";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-14 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* Left Side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"}></Title>
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5"
            type="text"
            placeholder="FIRST NAME"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5"
            type="text"
            placeholder="LAST NAME"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5"
          type="email"
          placeholder="Email Address"
        />
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5"
            type="text"
            placeholder="City"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5"
            type="number"
            placeholder="ZipCode"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5"
          type="number"
          placeholder="Phone"
        />
      </div>
      {/* Right Side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal></CartTotal>
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"}></Title>
          {/* Payment Method */}
          <div
            onClick={() => setMethod("stripe")}
            className="flex gap-3 flex-col lg:flex-row"
          >
            <div className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-500" : ""
                }`}
              ></p>
              <img src={assets.stripe_logo} className="h-5 mx-4" alt="" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-500" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <Link
              className="bg-black text-white px-16 py-3 text-sm"
              to="/orders"
            >
              PLACE ORDER
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
