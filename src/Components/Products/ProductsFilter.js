import React from 'react'
import CategoryFilter from '../Features/Filter/CategoryFilter'
import ColorFilter from '../Features/Filter/ColorFilter'
import SizeFilter from '../Features/Filter/SizeFilter'

const ProductsFilter = ({ filters, onChange }) => {

    const handleCategoryFilter = (newCategoryIds) => {
        if (!onChange) return;

        const newFilters = {
            ...filters,
            categoryIds: newCategoryIds,
            active: true
        }
        onChange(newFilters)
    }

    const handleSizeFilter = (newSizes) => {
        if (!onChange) return;

        const newFilters = {
            ...filters,
            sizes: newSizes,
            active: true
        }
        onChange(newFilters)
    }

    const handleColorFilter = (newColors) => {
        if (!onChange) return;

        const newFilters = {
            ...filters,
            colors: newColors,
            active: true
        }
        onChange(newFilters)
    }

    const handleResetFilter = () => {
        if (!onChange) return;

        const initialFilters = {
            categoryIds: [],
            sizes: [],
            colors: [],
            active: false
        }
        onChange(initialFilters)
    }

    return (
        <div>
            <CategoryFilter
                filters={filters}
                onChange={handleCategoryFilter}
            />
            <SizeFilter
                filters={filters}
                onChange={handleSizeFilter}
            />
            <ColorFilter
                filters={filters}
                onChange={handleColorFilter}
            />
            <div
                className='inline-block text-sm font-medium text-white mt-5 px-4 py-1.5 border border-solid border-gray-500 bg-black hover:cursor-pointer hover:text-black hover:bg-white'
                onClick={handleResetFilter}
            >
                RESET
            </div>
        </div>
    )
}

export default ProductsFilter
