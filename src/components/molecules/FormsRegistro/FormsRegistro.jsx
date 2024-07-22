import React, { useState } from 'react';
import ButtoomRegistro from '../../atoms/ButtomRegistro/ButtomRegistro';
import ImputRegistro from '../../atoms/ImputRegistro/ImputRegistro';
import TituloRegistro from '../../atoms/TituloRegistro/TituloRegistro';
import { Form, FormGroup, Col } from 'reactstrap';
import styles from './FormsRegistro.module.css';

function FormsRegistro() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const validate = (name, value) => {
    let error = '';

    switch (name) {
      case 'username':
        if (value.trim() === '') {
          error = 'El nombre de usuario es obligatorio';
        } else if (value.trim().length < 6) {
          error = 'El nombre de usuario debe tener al menos 6 caracteres';
        } else if (/\d{4,}/.test(value)) {
          error = 'El nombre de usuario no puede contener más de 3 dígitos consecutivos';
        }
        break;
      case 'password':
        if (value.trim() === '') {
          error = 'La contraseña es obligatoria';
        } else if (!/[A-Za-z]/.test(value) || !/\d/.test(value)) {
          error = 'La contraseña debe contener al menos una letra y un número';
        }
        break;
      case 'email':
        if (!/\S+@\S+\.\S+/.test(value)) {
          error = 'El correo electrónico no es válido';
        }
        break;
      case 'phone':
        if (!/^\d{10}$/.test(value)) {
          error = 'El número de teléfono debe tener 10 dígitos';
        }
        break;
      default:
        break;  
    }

    return error;
  };

  const prubita = () => {
    const newErrors = {};
    let valid = true;

    for (const key in formData) {
      const error = validate(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        valid = false;
      }
    }

    setErrors(newErrors);
    setIsFormValid(valid);

    if (valid) {
      window.location.href = '/login';
    } else {
      alert("Hay errores en el formulario");
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone' && /\D/.test(value)) return; // Permite solo dígitos
    setFormData({ ...formData, [name]: value });

    const error = validate(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validate(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    prubita();
  };

  return (
    <div className={styles.container}>
      <TituloRegistro titulo="Crear Cuenta" />

      <Form onSubmit={handleSubmit}>
        <FormGroup row style={{ display: 'flex', justifyContent: 'center' }}>
          <Col sm={10}>
            <ImputRegistro
              inputText="Nombre de Usuario"
              inputType="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.username}
            />
          </Col>
        </FormGroup>

        <FormGroup row style={{ display: 'flex', justifyContent: 'center' }}>
          <Col sm={10}>
            <ImputRegistro
              inputText="Contraseña"
              inputType="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password}
            />
          </Col>
        </FormGroup>

        <FormGroup row style={{ display: 'flex', justifyContent: 'center' }}>
          <Col sm={10}>
            <ImputRegistro
              inputText="Correo Electrónico"
              inputType="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
            />
          </Col>
        </FormGroup>

        <FormGroup row style={{ display: 'flex', justifyContent: 'center' }}>
          <Col sm={10}>
            <ImputRegistro
              inputText="Número de Teléfono"
              inputType="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.phone}
            />
          </Col>
        </FormGroup>

        <FormGroup row style={{ display: 'flex', justifyContent: 'center' }}>
          <Col sm={10} style={{ display: 'flex', justifyContent: 'center' }}>
            <ButtoomRegistro botonRegistro="Registrarse" onClickF={prubita} />
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
}

export default FormsRegistro;
