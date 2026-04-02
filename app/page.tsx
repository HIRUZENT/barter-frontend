// Install dependencies first:
// npm install tailwindcss @headlessui/react @heroicons/react

'use client'

import { HeartIcon, BellIcon } from '@heroicons/react/24/outline'

const categories = [
  'Elektronik','Fashion','Kendaraan','Furnitur','Gadget','Buku','Olahraga','Lainnya'
]

const products = [
  {
    name: 'iPhone 13 Pro Max 256GB',
    price: 'Rp 12.500.000',
    location: 'Jakarta Selatan',
    rating: '4.8',
    image: '/iphone.jpg'
  },
  {
    name: 'Sony WH-1000XM4',
    price: 'Rp 3.500.000',
    location: 'Jakarta Barat',
    rating: '5.0',
    image: '/headphone.jpg'
  },
  {
    name: 'Kamera Canon EOS M50',
    price: 'Rp 7.500.000',
    location: 'Yogyakarta',
    rating: '4.6',
    image: '/camera.jpg'
  }
]

const recommendations = [
  {
    name: 'MacBook Pro 14" M1 Pro',
    price: 'Rp 25.000.000',
    location: 'Bandung',
    image: '/macbook.jpg'
  },
  {
    name: 'Meja Kayu Minimalis',
    price: 'Rp 1.500.000',
    location: 'Surabaya',
    image: '/desk.jpg'
  },
  {
    name: 'Nike Air Jordan 1 Mid',
    price: 'Rp 1.800.000',
    location: 'Jakarta Pusat',
    image: '/shoes.jpg'
  }
]

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold text-blue-500">Swaply</h1>
          <nav className="mt-6 space-y-2">
  {[
    { name: 'Beranda' },
    { name: 'Jual Barang' },
    { name: 'Notifikasi', badge: 3 },
    { name: 'Favorit' },
    { name: 'Iklan Saya' },
    { name: 'Pembelian' },
    { name: 'Profil' }
  ].map((item, i) => (
    <button
      key={i}
      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
        ${i === 0
          ? 'bg-blue-100 text-blue-600'
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}
    >
      <span>{item.name}</span>
      {item.badge && (
        <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">
          {item.badge}
        </span>
      )}
    </button>
  ))}
</nav>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">AS</div>
          <div>
            <p className="text-sm font-medium">Ahmad Saputra</p>
            <p className="text-xs text-gray-500">Lihat Profil</p>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Search */}
        <input
          placeholder="Cari barang bekas..."
          className="w-full p-3 rounded-lg border mb-6"
        />

        {/* Categories */}
        <h2 className="font-semibold mb-3">Kategori</h2>
        <div className="flex gap-4 mb-8 overflow-x-auto">
          {categories.map((cat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-14 h-14 bg-blue-100 rounded-full" />
              <span className="text-xs mt-2">{cat}</span>
            </div>
          ))}
        </div>

        {/* Promo */}
        <h2 className="font-semibold mb-3">Iklan Promosi</h2>
        <div className="flex gap-4 overflow-x-auto mb-8">
          {[...products, ...products].map((p, i) => (
            <div key={i} className="w-60 bg-white rounded-lg shadow p-2">
              <div className="relative">
                <img src={p.image} className="rounded-lg" />
                <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">Promoted</span>
                <HeartIcon className="w-5 h-5 absolute top-2 right-2 text-white" />
              </div>
              <p className="text-sm mt-2">{p.name}</p>
              <p className="text-blue-600 font-semibold">{p.price}</p>
              <p className="text-xs text-gray-500">{p.location}</p>
            </div>
          ))}
        </div>

        {/* Recommendations */}
        <h2 className="font-semibold mb-3">Rekomendasi Untukmu</h2>
        <div className="flex gap-4 overflow-x-auto">
          {[...recommendations, ...recommendations].map((r, i) => (
            <div key={i} className="w-60 bg-white rounded-lg shadow p-2">
              <div className="relative">
                <img src={r.image} className="rounded-lg" />
                <HeartIcon className="w-5 h-5 absolute top-2 right-2 text-red-500" />
              </div>
              <p className="text-sm mt-2">{r.name}</p>
              <p className="text-blue-600 font-semibold">{r.price}</p>
              <p className="text-xs text-gray-500">{r.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
