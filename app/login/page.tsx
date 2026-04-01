"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/services/api";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await api.post("/login", {
        email,
        password,
      });

      console.log("RESPONSE:", res.data);

      const token = res.data.data.token;
      // simpan ke cookie (middleware)
      document.cookie = `token=${token}; path=/; samesite=lax`;

      // simpan ke localStorage (axios)
      localStorage.setItem("token", token);

      // redirect
      window.location.href = "/";
    } catch (err: any) {
      console.log("ERROR:", err.response?.data);
      alert("Login gagal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="p-6 border rounded w-80">
        <h1 className="text-xl mb-4">Login</h1>

        <input
          className="border w-full mb-2 p-2"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="border w-full mb-4 p-2"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="bg-blue-500 text-white w-full p-2"
          onClick={handleLogin}
        >
          Login
        </button>
        <p className="text-sm mt-3">
          Belum punya akun? <a href="/register" className="text-blue-500">Register</a>
        </p>
      </div>
    </div>
  );
}