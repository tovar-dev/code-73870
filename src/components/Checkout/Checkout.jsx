import React, { useState } from 'react'
import './Checkout.css'

const Checkout = () => {
  const [customer, setCustomer] = useState({});
  const [validCustomerData, setValidCustomerData] = useState(true);

  const addCustomerData = (e) => {
    const updatedCustomer = {
      ...customer,
      [e.target.name]: e.target.value
    };
    setCustomer(updatedCustomer);
    validateCustomerData(updatedCustomer);
  }

  const validateCustomerData = (data = customer) => {
    const { name, lastname, email, phone } = data;
    
    if (!name || name.trim() === '') {
      setValidCustomerData(true);
      return;
    }
    
    if (!lastname || lastname.trim() === '') {
      setValidCustomerData(true);
      return;
    }
    
    if (!email || email.trim() === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setValidCustomerData(true);
      return;
    }
    
    if (!phone || phone.trim() === '' || !/^\+?[0-9]{10,}$/.test(phone)) {
      setValidCustomerData(true);
      return;
    }
    
    setValidCustomerData(false);
  };

  console.log(customer)
  // console.log(validCustomerData)


  const handlePurchase = (e) => {
    e.preventDefault()
    console.log('Procesando compra...', customer)
  }


  return (
    <div className="checkout-container">
      <h2 className='checkout-title'>🛒 Finalizar Compra</h2>
      
      <div className="checkout-info">
        <h3>📋 Información de Envío</h3>
        <p>Por favor completa todos los campos para procesar tu pedido</p>
      </div>

      <form className="checkout-form" onSubmit={handlePurchase}>
        <div className="form-group">
          <label className="form-label" htmlFor="name">Nombre *</label>
          <input 
            type="text" 
            id="name"
            name='name' 
            className="form-input"
            placeholder='Ingresa tu nombre' 
            onChange={addCustomerData} 
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="lastname">Apellido *</label>
          <input 
            type="text" 
            id="lastname"
            name='lastname' 
            className="form-input"
            placeholder='Ingresa tu apellido' 
            onChange={addCustomerData} 
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="email">Email *</label>
          <input 
            type="email" 
            id="email"
            name='email' 
            className="form-input"
            placeholder='ejemplo@correo.com' 
            onChange={addCustomerData} 
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="phone">Teléfono *</label>
          <input 
            type="tel" 
            id="phone"
            name='phone' 
            className="form-input"
            placeholder='1234567890' 
            onChange={addCustomerData} 
            required
          />
        </div>

        <div className="form-divider"></div>

        <button 
          type='submit' 
          disabled={validCustomerData}
          className="submit-button">
          {validCustomerData ? '⏳ Completa todos los campos' : '✅ Procesar Pedido'}
        </button>
      </form>
    </div>
  )
}

export default Checkout