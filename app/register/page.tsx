"use client";

import { useState } from "react";
import api from "@/services/api";

export default function RegisterPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        password_confirmation: "",
        role: "buyer",
        shop_name: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegister = async () => {
        setLoading(true);
        try {
            let payload: any = { ...form };

            if (payload.role !== "seller") {
                delete payload.shop_name;
            }

            const res = await api.post("/register", payload);

            console.log("REGISTER:", res.data);

            alert("Registrasi berhasil, silakan login");

            window.location.href = "/login";
        } catch (err: any) {
            console.log(err.response?.data);

            if (err.response?.status === 422) {
                alert("Validasi gagal: " + JSON.stringify(err.response.data.errors));
            } else {
                alert("Register gagal");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="p-6 border rounded w-96">
                <h1 className="text-xl mb-4 font-bold">Register</h1>

                <input
                    name="name"
                    placeholder="Nama"
                    className="border w-full mb-2 p-2"
                    onChange={handleChange}
                />

                <input
                    name="email"
                    placeholder="Email"
                    className="border w-full mb-2 p-2"
                    onChange={handleChange}
                />

                <input
                    name="phone"
                    placeholder="No HP"
                    className="border w-full mb-2 p-2"
                    onChange={handleChange}
                />

                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="border w-full mb-2 p-2"
                    onChange={handleChange}
                />

                <input
                    name="password_confirmation"
                    type="password"
                    placeholder="Confirm Password"
                    className="border w-full mb-2 p-2"
                    onChange={handleChange}
                />

                {/* ROLE */}
                <select
                    name="role"
                    className="border w-full mb-2 p-2"
                    onChange={handleChange}
                >
                    <option value="buyer">Buyer</option>
                    <option value="seller">Seller</option>
                </select>

                {/* CONDITIONAL SHOP */}
                {form.role === "seller" && (
                    <input
                        name="shop_name"
                        placeholder="Nama Toko"
                        className="border w-full mb-2 p-2"
                        onChange={handleChange}
                    />
                )}

                <button
                    onClick={handleRegister}
                    className="bg-green-500 text-white w-full p-2 mt-2"
                >
                    {loading ? "Loading..." : "Register"}
                </button>
            </div>
        </div>
    );
}