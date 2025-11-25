import React, { useState } from "react";
import { tabs } from "../utils/constants";
import { CircleUser, LogOut, Edit2 } from "lucide-react";
import BookingHistory from "../Profile/BookingHistory";

// your uploaded avatar URL
const avatarSrc = "/mnt/data/52e1d850-466e-4a21-87f8-9ee22f7d8227.png";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const [user, setUser] = useState({
    firstName: "Amrit",
    lastName: "Raj",
    email: "amritmaurya2014@gmail.com",
    phone: "+91 - 9122040963",
    dob: "2002-04-15",
    identity: "Man",
    married: "No",
  });

  const onChange = (key, value) => setUser((s) => ({ ...s, [key]: value }));

  return (
    <>
      {/* Top Tabs */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto flex gap-6 py-4 px-6 text-sm font-medium">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-2 transition-all duration-200
                ${activeTab === tab ? "text-pink-600 font-semibold" : "text-gray-600 hover:text-gray-900"}
              `}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute left-0 right-0 -bottom-[2px] h-[2px] bg-pink-600 rounded-full"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="min-h-screen py-10 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-8">
          {activeTab === "Profile" && (
            <>
              {/* Header Section */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <div className="bg-gradient-to-r from-gray-900 to-pink-600 p-8 flex items-center gap-8 text-white relative">

                  {/* Avatar */}
                  <div className="relative w-28 h-28 rounded-full border-4 border-white shadow-xl overflow-hidden">
                    <img src={avatarSrc} alt="avatar" className="w-full h-full object-cover" />
                  </div>

                  {/* User Info */}
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold tracking-tight">
                      Hi, {user.firstName} {user.lastName}
                    </h2>

                    <div className="mt-3">
                      <button className="text-sm font-medium flex items-center gap-2 hover:opacity-90">
                        <LogOut size={16} /> Log out
                      </button>
                    </div>
                  </div>
                </div>

                {/* Account Card */}
                <div className="bg-white p-6 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Account Details</h3>
                    <p className="text-sm text-gray-500">Basic contact information</p>
                  </div>

                  <div className="md:col-span-2 flex flex-col gap-6">

                    {/* Email */}
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <div className="mt-1 flex items-center gap-2">
                          <span className="text-gray-900 font-medium">{user.email}</span>
                          <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-md">
                            Verified
                          </span>
                        </div>
                      </div>

                      <button className="p-2 hover:bg-pink-50 text-pink-600 rounded-md transition">
                        <Edit2 size={18} />
                      </button>
                    </div>

                    {/* Phone */}
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <div className="mt-1 flex items-center gap-2">
                          <span className="text-gray-900 font-medium">{user.phone}</span>
                          <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-md">
                            Verified
                          </span>
                        </div>
                      </div>

                      <button className="p-2 hover:bg-pink-50 text-pink-600 rounded-md transition">
                        <Edit2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Details */}
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Personal Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">First Name</label>
                    <input
                      value={user.firstName}
                      onChange={(e) => onChange("firstName", e.target.value)}
                      className="w-full rounded-lg border-gray-300 shadow-sm px-3 py-2 focus:border-pink-500 focus:ring-pink-500"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Last Name</label>
                    <input
                      value={user.lastName}
                      onChange={(e) => onChange("lastName", e.target.value)}
                      className="w-full rounded-lg border-gray-300 shadow-sm px-3 py-2 focus:border-pink-500 focus:ring-pink-500"
                    />
                  </div>

                  {/* DOB */}
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Birthday</label>
                    <input
                      type="date"
                      value={user.dob}
                      onChange={(e) => onChange("dob", e.target.value)}
                      className="w-full rounded-lg border-gray-300 shadow-sm px-3 py-2 focus:border-pink-500 focus:ring-pink-500"
                    />
                  </div>

                  {/* Identity */}
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Identity</label>
                    <div className="flex gap-3">
                      {["Woman", "Man"].map((g) => (
                        <button
                          key={g}
                          onClick={() => onChange("identity", g)}
                          className={`px-4 py-2 rounded-lg border transition
                            ${
                              user.identity === g
                                ? "bg-pink-600 text-white border-pink-600 shadow-sm"
                                : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
                            }
                          `}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Married */}
                  <div className="md:col-span-2">
                    <label className="block text-sm text-gray-600 mb-1">Married?</label>
                    <div className="flex gap-3">
                      {["Yes", "No"].map((m) => (
                        <button
                          key={m}
                          onClick={() => onChange("married", m)}
                          className={`px-5 py-2 rounded-lg border transition
                            ${
                              user.married === m
                                ? "bg-pink-600 text-white border-pink-600 shadow-sm"
                                : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
                            }
                          `}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-medium shadow-md transition">
                    Save Changes
                  </button>
                </div>
              </div>
            </>
          )}

          {activeTab === "Your Orders" && <BookingHistory/>}
        </div>
      </div>
    </>
  );
};

export default Profile;
