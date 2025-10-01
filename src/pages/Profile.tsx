import React, { useEffect, useState } from "react";
import { getProfile } from "../api/api";

interface User {
  name: string;
  email: string;
  city?: string;
  paymentStatus: string;
  paymentDate?: string;
  plan?: string;
  joinedDate?: string;
  avatar?: string;
}

interface ProfileProps {
  token: string;
}

const Profile: React.FC<ProfileProps> = ({ token }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await getProfile(token);
      const data = res.data as User;
      setUser(data);
    };
    fetchProfile();
  }, [token]);

  if (!user) return <p className="text-center text-white">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-900 to-black flex justify-center items-center p-6">
      <div className=" text-gray-900 rounded-2xl shadow-2xl p-8 max-w-lg w-full">
        {/* Avatar */}
        <div className="flex flex-col items-center mb-6">
          {user.avatar ? (
            <img
              src={user.avatar}
              alt={user.name}
              className="w-28 h-28 rounded-full border-4 border-red-600 shadow-lg object-cover"
            />
          ) : (
            <div className="w-28 h-28 flex items-center justify-center rounded-full bg-red-600 text-white text-3xl font-bold">
              {user.name.charAt(0)}
            </div>
          )}
          <h2 className="text-3xl font-bold mt-4">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>

        {/* Details */}
        <div className="space-y-3">
          {user.city && (
            <p>
              <span className="font-semibold text-red-600">City:</span> {user.city}
            </p>
          )}
          <p>
            <span className="font-semibold text-red-600">Plan:</span>{" "}
            {user.plan || "Not Assigned"}
          </p>
          <p>
            <span className="font-semibold text-red-600">Payment Status:</span>{" "}
            <span
              className={`px-2 py-1 rounded text-white text-sm ${
                user.paymentStatus === "Paid"
                  ? "bg-green-600"
                  : "bg-red-600"
              }`}
            >
              {user.paymentStatus}
            </span>
          </p>
          {user.paymentDate && (
            <p>
              <span className="font-semibold text-red-600">Payment Date:</span>{" "}
              {new Date(user.paymentDate).toLocaleDateString()}
            </p>
          )}
          {user.joinedDate && (
            <p>
              <span className="font-semibold text-red-600">Joined:</span>{" "}
              {new Date(user.joinedDate).toLocaleDateString()}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg shadow transition">
            Edit Profile
          </button>
          <button className="flex-1 bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-lg shadow transition">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
