// pages/index.js
import { useState } from 'react';
import "./styles/global.css";
import { Input, Button, Radio, Select, Spacer, Grid } from '@nextui-org/react';
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
  const [submitted, setSubmitted] = useState(false);
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
      setSubmitted(true);
      setFormData({
        nombre: '',
        email: '',
        precioPropiedad: 'USD 50.000',
        financiamiento: '50%',
        plazo: '5 años',
        tipologiaCasa: 'Modelo 1',
        formaCompra: 'compra total',
      });
      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {submitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="text-center">
            <img src="/logo-el-delta.png" alt="Logo El Delta" className="mx-auto mb-4 w-24 h-24" />
            <h2 className="text-3xl font-bold text-white mb-4">¡Gracias!</h2>
            <p className="text-lg text-white">Un asesor te contactará pronto.</p>
          </div>
        </div>
      )}
      <div className="flex flex-col items-center">
        <img src="/logo-el-delta.png" alt="Logo El Delta" className="mb-4 w-32 h-32" />
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Simulador de Inversión</h1>
          <form onSubmit={handleSubmit}>
            <Grid.Container gap={2}>
              {/* Campo de Nombre */}
              <Grid xs={12}>
                <Input
                  clearable
                  underlined
                  labelPlaceholder="Nombre"
                  fullWidth
                  value={formData.nombre}
                  name="nombre"
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              {/* Campo de Email */}
              <Grid xs={12}>
                <Input
                  clearable
                  underlined
                  type="email"
                  labelPlaceholder="Email"
                  fullWidth
                  value={formData.email}
                  name="email"
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              {/* Tipología de Casa */}
              <Grid xs={12}>
                <Select
                  placeholder="Tipología de Casa"
                  fullWidth
                  name="tipologiaCasa"
                  value={formData.tipologiaCasa}
                  onChange={(e) => handleInputChange({ target: { name: 'tipologiaCasa', value: e } })}
                  required
                >
                  <Select.Option value="Modelo 1">Modelo 1</Select.Option>
                  <Select.Option value="Modelo 2">Modelo 2</Select.Option>
                  <Select.Option value="Modelo 3">Modelo 3</Select.Option>
                  <Select.Option value="Modelo 4">Modelo 4</Select.Option>
                </Select>
              </Grid>
              {/* Precio de la Propiedad */}
              <Grid xs={12}>
                <Select
                  placeholder="Precio de la Propiedad"
                  fullWidth
                  name="precioPropiedad"
                  value={formData.precioPropiedad}
                  onChange={(e) => handleInputChange({ target: { name: 'precioPropiedad', value: e } })}
                  required
                >
                  <Select.Option value="USD 50.000">USD 50.000</Select.Option>
                  <Select.Option value="USD 100.000">USD 100.000</Select.Option>
                  <Select.Option value="USD 150.000">USD 150.000</Select.Option>
                </Select>
              </Grid>
              {/* Monto del Financiamiento */}
              <Grid xs={12}>
                <Select
                  placeholder="Monto del Financiamiento"
                  fullWidth
                  name="financiamiento"
                  value={formData.financiamiento}
                  onChange={(e) => handleInputChange({ target: { name: 'financiamiento', value: e } })}
                  required
                >
                  <Select.Option value="50%">50%</Select.Option>
                  <Select.Option value="70%">70%</Select.Option>
                  <Select.Option value="80%">80%</Select.Option>
                </Select>
              </Grid>
              {/* Plazo (años) */}
              <Grid xs={12}>
                <Select
                  placeholder="Plazo"
                  fullWidth
                  name="plazo"
                  value={formData.plazo}
                  onChange={(e) => handleInputChange({ target: { name: 'plazo', value: e } })}
                  required
                >
                  <Select.Option value="5 años">5 años</Select.Option>
                  <Select.Option value="10 años">10 años</Select.Option>
                  <Select.Option value="20 años">20 años</Select.Option>
                </Select>
              </Grid>
              {/* Forma de Compra */}
              <Grid xs={12}>
                <Radio.Group
                  label="Forma de Compra"
                  value={formData.formaCompra}
                  onChange={(value) => handleInputChange({ target: { name: 'formaCompra', value } })}
                  required
                >
                  <Radio value="compra total">Compra Total</Radio>
                  <Radio value="blockchain">Blockchain</Radio>
                </Radio.Group>
              </Grid>
              <Spacer y={1} />
              {/* Botón de Enviar */}
              <Grid xs={12}>
                <Button shadow color="primary" type="submit" fullWidth>
                  Simular
                </Button>
              </Grid>
            </Grid.Container>
          </form>
        </div>
      </div>
    </div>
  );
}