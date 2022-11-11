import React, { useEffect, useState } from 'react'
import { categoryApi } from '~/API/categoryApi';

const CategoryFilter = ({ filters, onChange }) => {
   const [categories, setCategories] = useState([]);
   const [categoryIds, setCategoryIds] = useState([])

   useEffect(()=>{
      setCategoryIds([])
   },[filters.active])

   useEffect(()=>{
      // intial turn active: true
      onChange(categoryIds)
   },[categoryIds])

   useEffect(() => {
      (
         async () => {
            try {
               const response = await categoryApi.getAll()
               setCategories(response)

            } catch (e) {
               alert(e.message)
            }
         }
      )()
   }, [])

   const handleChangeCategory = (id) => {
      setCategoryIds(
         prev => {
            if (categoryIds.includes(id)) {
               //case tích rồi
               return prev.filter((x) => x !== id)
            } else {
               //case chưa tích
               return [...prev, id]
            }
         }
      )
   }
   
   // console.log('cate',categories)

   return (
      <div name='CategoryFilter' className='flex flex-col mb-8'>
         <h6 className='text-xl font-medium'>Category</h6>
         {
            categories.map((category) => (
               <label key={category.id} className='checkbox-container' >
                  <input 
                     type="checkbox"
                     className='mr-2'
                     onChange={()=> handleChangeCategory(category.id)}
                     checked={categoryIds.includes(category.id)}
                  />
                  <span>{category.name}</span>
               </label>
            ))
         }
      </div>
   )
}

export default CategoryFilter
