// File: src/pages/Home.jsx
import React from 'react'

export default function Home() {
  return (
    <section className="p-8 space-y-16">
      {/* Hero Section with Video */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to WebWeavers</h1>
        <p className="text-lg text-gray-600 mb-6">Crafting Code. Creating Success.</p>
        <div className="flex justify-center">
          <video className="w-full max-w-xl rounded-lg shadow-md" controls>
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Services Overview */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-4">What We Do</h2>
        <p className="text-gray-600 mb-8">From sleek static websites to powerful web applications, we bring your vision online.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-4 border rounded shadow">Static Website</div>
          <div className="p-4 border rounded shadow">E-commerce Store</div>
          <div className="p-4 border rounded shadow">Custom Web App</div>
          <div className="p-4 border rounded shadow">Hosting Setup</div>
          <div className="p-4 border rounded shadow">SEO Optimization</div>
          <div className="p-4 border rounded shadow">Maintenance</div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-4">What Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4 border rounded shadow">
            <p className="italic">“WebWeavers built our site in record time and the result was beyond expectations.”</p>
            <p className="mt-2 font-bold">— Rakesh Kumar, RAK Corp</p>
          </div>
          <div className="p-4 border rounded shadow">
            <p className="italic">“Professional, reliable, and always supportive. Highly recommended!”</p>
            <p className="mt-2 font-bold">— Sneha Mehta, Sneha’s Boutique</p>
          </div>
        </div>
      </div>

      {/* Portfolio Preview */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border rounded shadow">
            <div className="bg-gray-200 h-40 mb-2"></div>
            <h3 className="font-semibold">Project One</h3>
            <p className="text-sm text-gray-600">E-commerce website for clothing brand.</p>
          </div>
          <div className="p-4 border rounded shadow">
            <div className="bg-gray-200 h-40 mb-2"></div>
            <h3 className="font-semibold">Project Two</h3>
            <p className="text-sm text-gray-600">Portfolio website for photographer.</p>
          </div>
          <div className="p-4 border rounded shadow">
            <div className="bg-gray-200 h-40 mb-2"></div>
            <h3 className="font-semibold">Project Three</h3>
            <p className="text-sm text-gray-600">Web app for online booking system.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
