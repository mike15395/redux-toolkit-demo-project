import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProducts } from './features/ProductSlice';
import './Product.css'

function Product() {

    const [valueItem, setValueItem] = useState('');
    const [valueCheck, setValueCheck] = useState('');


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleProducts = () => {


        dispatch(addProducts({
            valueItem: valueItem,
            valueCheck:valueCheck
        }))

        navigate('/product-list');

    }
    


  return (
      <div>
          <h2>Add Products</h2>
          <div className='product-input'>
              <div className='first-input'>
                    <label for="products">Select Product</label><br/>
                  <select name="products"
                      onChange={(e) => setValueItem(e.target.value)}>
                      <option value="">select product</option>
                        <option value="T-Shirt">T-Shirt</option>
                        <option value="Jacket">Jacket</option>
                      <option value="Jeans">Jeans</option>
                       <option value="Cap">Cap</option>
                        <option value="Chain">Chain</option>
                        <option value="Bracelet">Bracelet</option>
                  </select>
                 

                  <p>You selected {valueItem}</p>
              </div>

              <div className='second-input'>
                    <label for="check-product">is it Availaible?</label><br/>
                  <select name="check-product"
                      onChange={(e) => setValueCheck(e.target.value)}>
                        <option value="">Check Availibility</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                  </select>
                  
                  
                  <p>{valueCheck}Availaible</p>
              </div>

             
          </div>
               <button onClick={handleProducts}>Add</button>
      </div>
  )
}

export default Product