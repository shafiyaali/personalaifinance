"use client"
import React, {useState} from 'react'
import CategoryHeader from './categoryHeader'
import CategoryToolbar from './categoryToolbar'
import CategoryTable from './categoryTable'
import { Category } from '@/generated/prisma/client'
import CreateCategoryDialog from './createCategoryDialog'
import UpdateCategoryDialog from './updateCategoryDialog'
const CategoryFeatures = ({categories} : {categories: Category[] | undefined}) => {
const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
const [editOpen, setEditOpen] = useState(false);
const [createOpen, setCreateOpen] = useState(false)

// const [search, setSearch] = useState("");
// const [sort, setSort] = useState("name");
  return (
    <>
    <CategoryHeader 
    onCreate = {() => setCreateOpen(true)}/>

     <CategoryToolbar  />
    <CategoryTable 
    categories={categories}
      onEdit={(category)=> {
        setSelectedCategory(category)
        setEditOpen(true)
      }}
    />
    <CreateCategoryDialog 
      open={createOpen}
            onOpenChange={setCreateOpen}
    />
     {selectedCategory && 
    <UpdateCategoryDialog 
      category={selectedCategory}
       open={editOpen}
      onOpenChange={setEditOpen}
    /> }
    </>
  )
}

export default CategoryFeatures