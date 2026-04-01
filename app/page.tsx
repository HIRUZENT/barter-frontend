"use client";
import { logout } from "@/services/authentication";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Selamat datang di aplikasi barter!
      </h1>
       <button
        onClick={logout}
        className="mt-4 bg-red-500 text-white px-4 py-2"
      >
        Logout
      </button>
    </div>
  );
}