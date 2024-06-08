import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { getProductById, editProduct } from "../../../Services/AdminApi";
import "./EditProduct.css";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const formikRef = useRef(null); 

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await getProductById(id);
        if (response.status === 200 && response.data) {
          formikRef.current.setValues({
            prod_name: response.data.prod_name,
            price: response.data.price,
            description: response.data.description,
            image: response.data.image,
            category: response.data.category,
          });
        } else {
          throw new Error("Failed to fetch product details");
        }
      } catch (error) {
        console.error("Error fetching product:", error); 
        setError("There was an error fetching the product!");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const formik = useFormik({
    initialValues: {
      prod_name: "",
      price: "",
      description: "",
      image: "",
      category: "",
    },
    validationSchema: Yup.object({
      prod_name: Yup.string().required("Product name is required"),
      price: Yup.number().required("Price is required").positive("Price must be positive"),
      description: Yup.string().required("Description is required"),
      image: Yup.string().required("Image URL is required"),
      category: Yup.string().required("Category is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const { image, ...editProductData } = values;
        const response = await editProduct(id, editProductData);
        if (response.status === 200) {
          toast.success(response.data.message);
          navigate("/admin/product"); 
        } else {
          throw new Error("Failed to update product");
        }
      } catch (error) {
        console.error("Error updating product:", error);
        toast.error(error.response?.data?.error || "Something went wrong");
      }
    },
  });

  formikRef.current = formik;

  useEffect(() => {
    
    console.log("Formik values:", formik.values);
  }, [formik.values]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="edit-product">
      <h2>Edit Product</h2>
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
            <option value="Adult" label="Adult" />
            <option value="Child" label="Child" />
          </select>
          {formik.touched.category && formik.errors.category ? (
            <div className="error">{formik.errors.category}</div>
          ) : null}
        </div>

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProduct;
