// pages/index.js
import { useState } from 'react';
import "./styles/global.css";
import Image from './images/logo-el-delta.png'


export default function Home() {
    const [formData, setFormData] = useState({
      nombre: '',
      email: '',
      precioPropiedad: 'USD 50.000',
      financiamiento: '50%',
      plazo: '5 años',
      tipologiaCasa: 'Modelo 1',
      formaCompra: 'compra total',
    });
    const [submitted, setSubmitted] = useState(false); // Estado para controlar el mensaje de "Gracias"
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true); // Muestra el mensaje de "Gracias"
        setFormData({
          nombre: '',
          email: '',
          precioPropiedad: 'USD 50.000',
          financiamiento: '50%',
          plazo: '5 años',
          tipologiaCasa: 'Modelo 1',
          formaCompra: 'compra total',
        });
        // Oculta el mensaje de "Gracias" después de unos segundos
        setTimeout(() => {
          setSubmitted(false);
        }, 4000); // 4 segundos de duración
      }
    };
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        {submitted && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
            <div className="text-center">
              <img src={Image.src} alt="Logo El Delta" className="mx-auto mb-4 w-24" />
              <h2 className="text-3xl font-bold text-white mb-4">¡Gracias!</h2>
              <p className="text-lg text-white">Un asesor te contactará pronto.</p>
            </div>
          </div>
        )}
        {/* Inserción del logo arriba del formulario */}
        <div className="flex flex-col items-center">
          <div className="bg-white flex flex-col max-w-md p-8 rounded-lg shadow-md w-full align-center">
          <img src={Image.src} alt="Logo El Delta" className="mb-4 w-32" />
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Simulador de Inversión</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Orden de los campos cambiado */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Tipología de Casa</label>
                <select
                  name="tipologiaCasa"
                  value={formData.tipologiaCasa}
                  onChange={handleInputChange}
                  required
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="Modelo 1">Modelo 1</option>
                  <option value="Modelo 2">Modelo 2</option>
                  <option value="Modelo 3">Modelo 3</option>
                  <option value="Modelo 4">Modelo 4</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Precio de la Propiedad</label>
                <select
                  name="precioPropiedad"
                  value={formData.precioPropiedad}
                  onChange={handleInputChange}
                  required
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="USD 50.000">USD 50.000</option>
                  <option value="USD 100.000">USD 100.000</option>
                  <option value="USD 150.000">USD 150.000</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Monto del Financiamiento</label>
                <select
                  name="financiamiento"
                  value={formData.financiamiento}
                  onChange={handleInputChange}
                  required
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="50%">50%</option>
                  <option value="70%">70%</option>
                  <option value="80%">80%</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Plazo (años)</label>
                <select
                  name="plazo"
                  value={formData.plazo}
                  onChange={handleInputChange}
                  required
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="5 años">5 años</option>
                  <option value="10 años">10 años</option>
                  <option value="20 años">20 años</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Forma de Compra</label>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="formaCompra"
                      value="compra total"
                      checked={formData.formaCompra === 'compra total'}
                      onChange={handleInputChange}
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label className="ml-3 block text-sm font-medium text-gray-700">Compra Total</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="formaCompra"
                      value="blockchain"
                      checked={formData.formaCompra === 'blockchain'}
                      onChange={handleInputChange}
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label className="ml-3 block text-sm font-medium text-gray-700">Blockchain</label>
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-200"
                >
                  Simular
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }