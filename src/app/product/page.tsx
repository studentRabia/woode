"use client"

import React from 'react'
import Titlebar from '../components/titlebar'
import SearchAndFilter from '../components/SearchAndFilter'
import FutureProduct from '../components/futureProduct'
import LastShop from '../components/lastShop'
import AllCategories from '../components/allCategories'

const page = () => {
  return (
    <div>
          <Titlebar title="All Products"/>

      <SearchAndFilter categories={[]} onSearch={function () {
        throw new Error("Function not implemented.")
      } } onFilter={function (): void {
        throw new Error("Function not implemented.")
      } }/>

<AllCategories/>

<FutureProduct/>
  <LastShop/>
    </div>
  )
}

export default page
