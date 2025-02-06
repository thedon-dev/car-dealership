"use client";

import Link from "next/link";
import { useState } from "react";
import { BsX } from "react-icons/bs";

const AdminDashboard = () => {
  const [carData, setCarData] = useState({
    name: "",
    status: "",
    modelYear: "",
    model: "",
    power: "",
    price: "",
    image: null,
  });

  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData({ ...carData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCarData({ ...carData, image: file });
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(carData).forEach((key) => {
      formData.append(key, carData[key]);
    });

    try {
      const response = await fetch("http://localhost:5000/api/cars", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Car added successfully!");
        setCarData({
          name: "",
          status: "",
          modelYear: "",
          model: "",
          power: "",
          price: "",
          image: null,
        });
        setPreviewImage(null);
      } else {
        alert("Error adding car");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="relative py-16 grid place-content-center">
      <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded ">
        <h2 className="text-2xl font-bold mb-4">Add a Car</h2>
        <form onSubmit={handleSubmit} className="space-y-4 h-fit">
          <input
            type="text"
            name="name"
            placeholder="Car Name"
            value={carData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none"
            required
          />
          <input
            type="text"
            name="status"
            placeholder="Status"
            value={carData.status}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none"
            required
          />
          <input
            type="number"
            name="modelYear"
            placeholder="Model Year"
            value={carData.modelYear}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none"
            required
          />
          <input
            type="text"
            name="model"
            placeholder="Model"
            value={carData.model}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none"
            required
          />
          <input
            type="text"
            name="power"
            placeholder="Power"
            value={carData.power}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={carData.price}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none"
            required
          />

          <div className="w-full flex justify-between p-2 border rounded">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full rounded focus:outline-none"
              required
            />
            {previewImage && (
              <button type="button" onClick={() => setPreviewImage(null)}>
                <BsX size={25} />
              </button>
            )}
          </div>

          {previewImage && (
            <img
              src={previewImage}
              alt="Preview"
              className="mt-2 w-full h-40 object-cover rounded"
            />
          )}

          <div className=" mt-2">
            <Link
              href="/"
              type="submit"
              className="w-full bg-blue-950 text-white p-2 rounded"
            >
              Add Car
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
