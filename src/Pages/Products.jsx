import React, { useEffect, useState } from 'react'
import { Pagination } from '@mui/material'
//component
import ProductsFilter from '~/Components/Products/ProductsFilter'
import ProductThumbnail from '~/Components/ProductThumbnail'
import ProductListLoading from '~/Components/Products/ProductListLoading'
//data
import { productsApi } from '~/API/productsApi'

const Products = () => {
   const [filters, setFilters] = useState({
      categoryIds: [],
      sizes: [],
      colors: [],
      active: false
   })
   const [loading, setLoading] = useState(false)
   const [filterProductList, setFilterProductList] = useState([])
   const [page, setPage] = useState(1)
   const [order, setOrder] = useState('asc')
   const [totalPage, setTotalPage] = useState(6)
   /*handleFilterProducts => Filter => filterProductList*/

   useEffect(() => {
      setPage(1)
   }, [filters])

   useEffect(() => {
      (
         async () => {
            try {
               setLoading(true)

               const data = await productsApi.getAll({
                  _page: page,
                  _limit: 9,
                  _sort: 'originalPrice',
                  _order: order,
                  _title: 'Vanssdadsa',
                  category: filters.categoryIds,
                  color: filters.colors,
                  size: filters.sizes
               })

               setFilterProductList(data)

               setLoading(false)
            } catch (e) {
               alert(e.message)
            }
         }
      )()
   }, [page, filters, order])
   console.log(filterProductList)

   useEffect(() => {
      (
         async () => {
            try {
               const data = await productsApi.getAll({
                  category: filters.categoryIds,
                  color: filters.colors,
                  size: filters.sizes
               })
               const totalProduct = data.length;

               totalProduct
                  ? setTotalPage(Math.ceil(totalProduct / 9))
                  : setTotalPage(1);

            } catch (e) {
               alert(e.message)
            }
         }
      )()
   }, [page, filters, order])

   const handleOrderChangeAsc = () => {
      setOrder('asc')
   }
   const handleOrderChangeDesc = () => {
      setOrder('desc')
   }
   const handleChangePage = (e, value) => {
      setPage(value)

   }
   const handleFilterProducts = (newFilters) => {
      setFilters(
         prev => {
            return { ...prev, ...newFilters }
         }
      )
   }

   return (
      <section className='my-20 md:my-28'>
         <div className='container px-4 md:px-8 mx-auto'>
            <div className='mb-8'>
               <h4 className='text-xl font-medium'>FOR YOU</h4>
               <p>
                  Tất cả những sản phẩm Mới nhất nằm trong BST được mở bán
                  Hàng Tuần sẽ được cập nhật liên tục tại đây. Chắc chắn
                  bạn sẽ tìm thấy những sản phẩm Đẹp Nhất - Vừa Vặn Nhất -
                  Phù Hợp nhất với phong cách của mình.
               </p>
            </div>
            <div className='flex gap-20'>
               <div className=''>
                  <ProductsFilter
                     filters={filters}
                     onChange={handleFilterProducts}
                  />
               </div>

               <div className='flex-1 '>
                  <div name='show' className='flex flex-col'>
                     <div
                        className='ml-auto flex gap-1'
                     >
                        <p
                           onClick={handleOrderChangeAsc}
                           className={`${false ? 'bg-black text-white' : 'bg-white text-black'} + inline text-sm font-medium px-4 py-1 border border-solid border-gray-500 hover:cursor-pointer hover:bg-black hover:text-white`}
                        >
                           Increase
                        </p>
                        <p
                           onClick={handleOrderChangeDesc}
                           className={`${false ? 'bg-black text-white' : 'bg-white text-black'} + inline text-sm font-medium px-4 py-1 border border-solid border-gray-500 hover:cursor-pointer hover:bg-black hover:text-white`}
                        >
                           Decrease
                        </p>
                     </div>
                     <div className='flex flex-wrap my-8 sm:-mx-2 md:-mx-2 lg:-mx-2.5'>
                        {
                           loading ? (
                              <ProductListLoading />
                           ) : (
                              filterProductList.map((product) => (
                                 <div
                                    key={product.id}
                                    className="px-2 w-full sm:w-1/2 lg:w-1/3"
                                 >
                                    <ProductThumbnail
                                       product={product}
                                    />
                                 </div>
                              ))
                           )
                        }
                     </div>
                     <div className='mx-auto'>
                        <Pagination
                           count={totalPage}
                           page={page}
                           onChange={handleChangePage}
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Products
