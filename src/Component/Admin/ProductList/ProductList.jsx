import React from 'react'
import './ProductList.css'

function ProductList() {
  return (
    <div className='adminProduct'>
        <h1>Product List</h1>
        
        <table className='productListTable'>
          <thead>
            <tr>
              <th>Items</th>
              <th>Title</th>
              <th>Product</th>
              <th>Description</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          
          <tbody>
          <tr>
            <td>1</td>
            <td>LensBlue</td>
            <td><img src="" alt="product1" /></td>
            <td>hjkasdhskaldshb shad h ahkhb dakb sdj </td>
            <td>$20</td>
            <td><button className='product-btn'>Delete</button></td>
          </tr>
          <tr>
            <td>2</td>
            <td>LensBlue</td>
            <td><img src="" alt="product2" /></td>
            <td>hjkasdhskaldshb shad h ahkhb dakb sdj </td>
            <td>$30</td>
            <td><button className='product-btn'>Delete</button></td>
          </tr>
          <tr>
            <td>3</td>
            <td>LensBlue</td>
            <td><img src="" alt="product3" /></td>
            <td>hjkasdhskaldshb shad h ahkhb dakb sdj </td>
            <td>$320</td>
            <td><button className='product-btn'>Delete</button></td>
          </tr>
          <tr>
            <td>4</td>
            <td>LensBlue</td>
            <td><img src="" alt="product4" /></td>
            <td>hjkasdhskaldshb shad h ahkhb dakb sdj </td>
            <td>$420</td>
            <td><button className='product-btn'>Delete</button></td>
          </tr>
          <tr>
            <td>5</td>
            <td>LensBlue</td>
            <td><img src="" alt="product5" /></td>
            <td>hjkasdhskaldshb shad h ahkhb dakb sdj </td>
            <td>$340</td>
            <td><button className='product-btn'>Delete</button></td>
          </tr>
          <tr>
            <td>6</td>
            <td>LensBlue</td>
            <td><img src="" alt="product6" /></td>
            <td>hjkasdhskaldshb shad h ahkhb dakb sdj </td>
            <td>$390</td>
            <td><button className='product-btn'>Delete</button></td>
          </tr>

          </tbody>
          </table>
          </div>
  )
}

export default ProductList