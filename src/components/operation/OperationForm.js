// OperationForm.jsx
import React, { useState } from 'react';
import style from './OperationForm.module.css';

function OperationForm({ onAddOperation }) {
  const [type, setType] = useState('credito'); // Valor por defecto
  const [cuota, setCuota] = useState(1);
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [gastos, setGastos] = useState('ingreso'); // Valor por defecto
  const [link, setLink] = useState('');
  const [errors, setErrors] = useState({}); // Para manejar errores de validación

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación básica
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'El título es requerido.';
    if (!price.trim()) newErrors.price = 'El precio es requerido.';
    if (!/^\d+(\.\d+)?$/.test(price)) newErrors.price = 'El precio debe ser un número válido.'; // Valida que price sea numérico.
    if (cuota <= 0) newErrors.cuota = 'La cuota debe ser mayor que cero';
    if (!link.trim()) newErrors.link = "El link es requerido";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Crear el nuevo objeto de operación
    const newOperation = {
      id: Date.now(), // ID único (usando la fecha/hora actual)
      type,
      cuota,
      image,
      title,
      price: parseFloat(price), // Convertir a número
      gastos,
      link,
    };

    // Llamar a la función pasada por prop (para agregar al estado principal)
    onAddOperation(newOperation);

    // Limpiar el formulario
    setType('credito');
    setCuota(1);
    setImage('');
    setTitle('');
    setPrice('');
    setGastos('ingreso');
    setLink('');
    setErrors({}); // Limpiar errores
  };

  return (
    <form className={style.operationForm} onSubmit={handleSubmit}>
      <h2>Agregar Nueva Operación</h2>

      <div className={style.formGroup}>
        <label htmlFor="type">Tipo:</label>
        <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="credito">Crédito</option>
          <option value="debito">Débito</option>
        </select>
      </div>

      <div className={style.formGroup}>
        <label htmlFor="cuota">Cuota:</label>
        <input
          type="number"
          id="cuota"
          value={cuota}
          onChange={(e) => setCuota(parseInt(e.target.value, 10))}
        />
        {errors.cuota && <p className={style.errorMessage}>{errors.cuota}</p>}
      </div>

      <div className={style.formGroup}>
        <label htmlFor="image">Imagen (URL):</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <div className={style.formGroup}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
         {errors.title && <p className={style.errorMessage}>{errors.title}</p>}
      </div>

      <div className={style.formGroup}>
        <label htmlFor="price">Precio:</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        {errors.price && <p className={style.errorMessage}>{errors.price}</p>}
      </div>

      <div className={style.formGroup}>
        <label htmlFor="gastos">Gasto/Ingreso:</label>
        <select id="gastos" value={gastos} onChange={(e) => setGastos(e.target.value)}>
          <option value="ingreso">Ingreso</option>
          <option value="gasto">Gasto</option>
        </select>
      </div>

      <div className={style.formGroup}>
        <label htmlFor="link">Enlace:</label>
        <input
          type="text"
          id="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        {errors.link && <p className={style.errorMessage}>{errors.link}</p>}
      </div>

      <button type="submit">Agregar Operación</button>
    </form>
  );
}

export default OperationForm;