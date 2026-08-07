"use client"
import React, {useState} from 'react'
import CategoryHeader from './categoryHeader'
import CategoryToolbar from './categoryToolbar'
import CategoryTable from './categoryTable'
import { Category } from '@/generated/prisma/client'
import CreateCategoryDialog from './createCategoryDialog'
import UpdateCategoryDialog from './updateCategoryDialog'
import type { AppUser } from '@/types/AppUser'
const CategoryFeatures = ({categories, user} : {categories: Category[] | undefined, user: AppUser}) => {
const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
const [editOpen, setEditOpen] = useState(false);
const [createOpen, setCreateOpen] = useState(false)
const canCreateCategory = user.role == "ADMIN"
const canUpdateDeactive = user.role == "ADMIN"
// const [search, setSearch] = useState("");
// const [sort, setSort] = useState("name");
  return (
    <>
    <CategoryHeader 
    canCreate = {canCreateCategory}
    onCreate = {() => setCreateOpen(true)}/>

     <CategoryToolbar  />
    <CategoryTable 
    canUpdateDeactivate={canUpdateDeactive} 
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