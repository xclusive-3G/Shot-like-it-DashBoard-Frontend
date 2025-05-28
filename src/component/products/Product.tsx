import React, { useEffect, useState } from 'react';
import { IoMdAdd } from "react-icons/io";
import { MdOutlineDeleteOutline } from "react-icons/md";
import axios from "axios";

import Modal from '../modal/Modal';
import AlertModal from "../modal/ModalAlert";

interface selectionInterface {
  id: number;
  cat: string;
}

const Options: selectionInterface[] = [
  { id: 1, cat: "Kitchen" },
  { id: 2, cat: "Parlour Essentials" },
  { id: 3, cat: "Kitchen Utensil" },
  { id: 4, cat: "Electronics" }
];

const Product: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [openAlertModal, setOpenAlertModal] = useState(false);
  const [selectId, setSelectedId] = useState<string | null>(null);

  const fetchProduct = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/data");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const deleteProduct = async () => {
    if (!selectId) return;
    try {
      await axios.delete(`http://localhost:3000/api/data/${selectId}`);
      setOpenAlertModal(false);
      setData(prev => prev.filter(item => item._id !== selectId));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const title = (form.elements.namedItem("title") as HTMLInputElement).value;
    const price = (form.elements.namedItem("price") as HTMLInputElement).value;
    const description = (form.elements.namedItem("description") as HTMLTextAreaElement).value;
    const categories = (form.elements.namedItem("categories") as HTMLSelectElement).value;
    const file = (form.elements.namedItem("file") as HTMLInputElement).files?.[0];

    if (!file) {
      alert("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("categories", categories);
    formData.append("image", file);

    try {
      const response = await axios.post("http://localhost:3000/api/data", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      console.log("Upload successful:", response.data);
      setOpenModal(false);
      fetchProduct();
      form.reset(); // Clear form after submission

    } catch (error) {
      console.error("Upload failed:", error);
      alert("Something went wrong while uploading.");
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
        {data.map(product => (
          <div key={product._id} className="bg-gray-500 p-1 relative rounded">
            <img src={product.thumbnailImage} alt={product.title} className="w-full h-56 object-cover bg-white" />
            <div className="p-2 text-xl text-white">
              <h1 className="capitalize py-1 truncate">{product.title}</h1>
              <p className="capitalize text-xs truncate">{product.description}</p>
              <p>${product.price}</p>
            </div>
            <button
              className="absolute bottom-1 right-1 bg-red-600 text-white p-1 rounded-full"
              onClick={() => {
                setSelectedId(product._id);
                setOpenAlertModal(true);
              }}
            >
              <MdOutlineDeleteOutline size={20} />
            </button>
          </div>
        ))}
      </div>

      <div
        onClick={() => setOpenModal(true)}
        className="fixed bottom-15 right-15 md:bottom-20 md:right-20 cursor-pointer z-50 p-2 rounded-full bg-gray-500"
      >
        <span className="animate-pulse hover:animate-ping">
          <IoMdAdd size={50} />
        </span>
      </div>

      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <form className="w-full" onSubmit={handleSubmit}>
          <h1 className="text-lg font-semibold mb-2">Upload Product</h1>

          <div className="mb-3">
            <label htmlFor="title">Title</label><br />
            <input type="text" name="title" id="title" required className="w-full p-1" />
          </div>
          <div className="mb-3">
            <label htmlFor="price">Price</label><br />
            <input type="number" step="0.01" min="0" name="price" id="price" required className="w-full p-1 appearance-none" placeholder='please enter amount' />
          </div>

          <div className="mb-3">
            <label htmlFor="categories">Category</label><br />
            <select name="categories" id="categories" required className="w-full bg-gray-500 p-1">
              <option value="" disabled>Select a category</option>
              {Options.map(({ id, cat }) => (
                <option value={cat} key={id}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="description">Description</label><br />
            <textarea name="description" id="description" required className="w-full p-1" />
          </div>

          <div className="mb-3">
            <label htmlFor="file">Image</label><br />
            <input type="file" name="file" id="file" required className="w-full" accept="image/*" />
          </div>

          <button type="submit" className="bg-green-500 text-white p-2 rounded mt-2 w-full">
            Submit
          </button>
        </form>
      </Modal>

      <AlertModal isOpen={openAlertModal} onClose={() => setOpenAlertModal(false)}>
        <div>
          <h1>Do you want to delete this file?</h1>
          <div className="flex justify-between mt-3">
            <button
              className="px-4 py-2 bg-green-500 text-white rounded w-20"
              onClick={deleteProduct}
            >
              Yes
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded w-20"
              onClick={() => setOpenAlertModal(false)}
            >
              No
            </button>
          </div>
        </div>
      </AlertModal>
    </>
  );
};

export default Product;
