import React from 'react'
import { useSelector } from 'react-redux'
import { selectProduct } from './features/ProductSlice'
import './ProductList.css'
function ProductList() {

    const data = useSelector(selectProduct);
    console.log(data);
  return (
      <div className='product-list'>
          <table className='product-table'>
              <tr >
                  <th>Sr.No</th>
                  <th>Product</th>
                  <th>is it Availaible?</th>
              </tr>
              
                    {data?.map((item,index) => (
                        <tr key={index}> 
                    <td>{index}</td>
                   <td>{item.valueItem}</td>
                   <td>{item.valueCheck}</td>
                    </tr>))}
              
          </table>
           
           
    </div>
  )
}

export default ProductList