import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ProductQuantity from "~/Components/Products/SubProducts/ProductQuantity";

import { useDispatch } from "react-redux";
import { addToCartByAmount } from "~/Redux/Slice/cartSlice";

import { productsApi } from "~/API/productsApi";

const ProductDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false);

  const [product, setProduct] = useState('')
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    (
      async () => {
        try {
          setLoading(true)
          const data = await productsApi.get(`${id}`)
          setProduct(data)
          setLoading(false)
        } catch (e) {
          alert(e.message)
        }
      }
    )()
  }, [id])

  const handleAddCart = (product, quantity) => {
    dispatch(addToCartByAmount({product, quantity}))
  }

  const handleUpdateAmountProduct = (value) => {
    setQuantity(value) 
  }
  const handleIncreAmountProduct = () => {
    setQuantity(quantity => quantity + 1)
  }
  const handleDecreAmountProduct = () => {
    setQuantity(quantity => quantity - 1)
  }

  return (
    <div className="my-16 md:my-20">
      <div className="px-4 md:px-8 mx-auto">
        <div>
          {loading ? (
            ""
          ) : (
            <div className="w-full flex flex-col  md:flex-row"> 
              <div className="w-full md:w-1/2">
                <img
                  src={product.image}
                  alt={product.title}
                  width={500}
                  height={500}
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center gap-2">
                <h3 className="text-base font-medium">{product.title}</h3>
                <p className="text-sm font-light">{product.description}</p>
                <p>
                  <span className="text-base font-medium mr-2">
                    {
                      new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND'
                      }).format(product.salePrice)
                    }
                  </span>
                  {
                    product.promotionPercent === 0 ? null : (
                      <span className="text-sm line-through bg-yellow-200">
                        {
                          new Intl.NumberFormat('vi-VN', {
                            style: 'currency',
                            currency: 'VND'
                          }).format(product.originalPrice)
                        }
                      </span>
                    )
                  }
                </p>
                <div>
                  <ProductQuantity
                    quantity={quantity}
                    onUpdate={handleUpdateAmountProduct}
                    onIncre={handleIncreAmountProduct}
                    onDecre={handleDecreAmountProduct}
                  />
                </div>
                <div className="flex gap-2">
                  <div 
                    className="text-sm px-4 py-1.5 border border-black bg-black text-white hover:cursor-pointer hover:bg-white hover:text-black"
                    onClick={() => handleAddCart(product,quantity)}
                  >
                    Add cart
                  </div>
                  <Link
                    className="text-sm px-4 py-1.5 border border-black bg-black text-white hover:cursor-pointer hover:bg-white hover:text-black"
                    to={'/cart'}
                  >
                    Purchase
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
