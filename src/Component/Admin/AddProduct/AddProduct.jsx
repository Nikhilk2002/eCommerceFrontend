import React from 'react';
import './AddProduct.css'; 
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Products } from '../../../Services/AdminApi'; 

function AddProduct() {
  const formik = useFormik({
    initialValues: {
      prod_name: '',
      price: '',
      description: '',
      image: '',
      category: '',
    },
    validationSchema: Yup.object({
      prod_name: Yup.string().required('Product name is required'),
      price: Yup.number().required('Price is required').positive('Price must be positive'),
      description: Yup.string().required('Description is required'),
      image: Yup.string().required('Image URL is required'),
      category: Yup.string().required('Category is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await Products(values); 
        toast.success(response.data.message);
        resetForm();
      } catch (error) {
        toast.error(error.response?.data?.error || 'Something went wrong');
      }
    },
  });

  return (
    <div className="add-product">
      <h2>Add Product</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="prod_name">Product Name</label>
          <input
            id="prod_name"
            name="prod_name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.prod_name}
          />
          {formik.touched.prod_name && formik.errors.prod_name ? (
            <div className="error">{formik.errors.prod_name}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <input
            id="price"
            name="price"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
          />
          {formik.touched.price && formik.errors.price ? (
            <div className="error">{formik.errors.price}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          ></textarea>
          {formik.touched.description && formik.errors.description ? (
            <div className="error">{formik.errors.description}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="image">Image URL</label>
          <input
            id="image"
            name="image"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.image}
          />
          {formik.touched.image && formik.errors.image ? (
            <div className="error">{formik.errors.image}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.category}
          >
            <option value="" label="Select category" />
            <option value="Adults" label="Adults" />
            <option value="Child" label="Child" />
          </select>
          {formik.touched.category && formik.errors.category ? (
            <div className="error">{formik.errors.category}</div>
          ) : null}
        </div>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
