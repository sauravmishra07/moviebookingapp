import React, { useState } from "react";
import { ordersData } from "../utils/constants";
import { Sofa, Ticket, WalletCards, CalendarClock } from "lucide-react";

const BookingHistory = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <div className="px-6 py-4">
      <h3 className="text-2xl font-bold mb-6 text-gray-900">Your Orders</h3>

      <div className="space-y-8">
        {ordersData.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            {/* Top Section */}
            <div className="flex flex-col md:flex-row gap-6 p-6 border-b border-gray-100">
              <img
                src={order.poster}
                alt="order"
                className="w-28 h-40 object-cover rounded-lg shadow-sm"
              />

              <div className="h-40 hidden md:block border-l border-dashed border-gray-300"></div>

              <div className="flex justify-between flex-1">
                <div>
                  <p className="text-xl font-semibold text-gray-900">
                    {order.title}
                  </p>
                  <p className="text-sm text-gray-500">{order.format}</p>

                  <p className="text-sm font-medium text-gray-700 mt-1 flex items-center gap-1">
                    <CalendarClock size={16} />
                    {order.datetime} • {order.cinema}
                  </p>

                  <p className="text-sm mt-3 text-gray-800">
                    Quantity: <span className="font-semibold">{order.quantity}</span>
                  </p>

                  <p className="mt-2 font-semibold text-gray-700 flex items-center gap-2">
                    <Sofa size={22} className="text-pink-600" />
                    {order.seats}
                  </p>
                </div>

                <div className="text-right text-pink-600 font-semibold">
                  M-Ticket
                </div>
              </div>
            </div>

            {/* Price Section */}
            <div className="px-6 py-4 flex justify-end text-sm">
              <div>
                <p className="text-gray-500">
                  Convenience Fee:{" "}
                  <span className="text-gray-800 font-medium">
                    ₹{order.fee.toFixed(2)}
                  </span>
                </p>
                <p className="text-gray-900 text-lg font-bold">
                  ₹{order.total.toFixed(2)}
                </p>
              </div>
            </div>

            {/* Bottom Details */}
            <div className="bg-gray-50 px-6 py-5 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              <div>
                <p className="font-semibold text-gray-900 flex items-center gap-2 mb-1">
                  <CalendarClock size={16} /> Booking Date & Time
                </p>
                <p className="text-gray-700">{order.bookingTime}</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 flex items-center gap-2 mb-1">
                  <WalletCards size={16} /> Payment Method
                </p>
                <p className="text-gray-700">{order.paymentMethod}</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 flex items-center gap-2 mb-1">
                  <Ticket size={16} /> Booking ID
                </p>
                <p className="text-gray-700">{order.id}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* end */}
    </div>
  );
};

export default BookingHistory;
