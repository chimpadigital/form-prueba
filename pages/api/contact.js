// pages/api/contact.js
export default function handler(req, res) {
    if (req.method === 'POST') {
      const { nombre, email, precioPropiedad, financiamiento, plazo } = req.body;
  
      // Aquí se podría guardar en la base de datos o enviar un correo
      console.log('Datos recibidos:', {
        nombre,
        email,
        precioPropiedad,
        financiamiento,
        plazo,
      });
  
      // En lugar de mostrar resultados, enviamos un mensaje de éxito
      res.status(200).json({ message: 'Datos recibidos, un asesor te contactará.' });
    } else {
      res.status(405).json({ message: 'Método no permitido' });
    }
  }
  