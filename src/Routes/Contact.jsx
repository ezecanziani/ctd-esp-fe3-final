import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const Contact = () => {
const { state } = useAppContext();
const { theme } = state;
const [formData, setFormData] = useState({ name: '', email: '' });
const [errors, setErrors] = useState({});
const [submitted, setSubmitted] = useState(false);

  const validate = () => {
  const newErrors = {};
  if (formData.name.length <= 5) {
  newErrors.name = 'Nombre completo debe tener más de 5 caracteres';
  }
  if (!/\S+@\S+\.\S+/.test(formData.email)) {
  newErrors.email = 'Email no es válido';
  }
  return newErrors;
};

  const handleChange = e => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setSubmitted(true);
    }
  };

  return (
    <div className={`contact ${theme}-theme`}>
      <h1>Contacto</h1>
      {submitted ? (
        <p>Gracias {formData.name}, te contactaremos cuando antes vía mail.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre Completo</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div>
          <label>Email</label>
          <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
          </div>
          {Object.keys(errors).length > 0 && (
            <p>Por favor verifique su información nuevamente</p>
          )}
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
};

export default Contact;