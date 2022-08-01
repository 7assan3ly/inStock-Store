import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { getCatgProducts } from '../../api'
import { Footer } from '../../components'
import './Category.css'

const Category = () => {

  const params = useParams()
  const categoryName = params.category

  const [Products, setProducts] = useState([])

  useEffect(() => {
    const fetchCatgProducts = async () => {

      const catgProducts = await getCatgProducts(categoryName)
      setProducts(catgProducts)
      console.log('Products',Products);
    }

    fetchCatgProducts()
  }, [categoryName])


  return (
    <div className='catg'>
      <div className="catgHead">
        <p className="catgName text-center">{categoryName}</p>
        <p className="catgTxt text-center">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
      </div>

      <div className="catgBody">
        <div className="productWrapper">
          {Products.map((item) => {
            return (
              <div className="catgProduct" key={item.id}>
                <Link to={`/product/${item.id}`}>
                  <img src={item.image} className='productImg' alt='' />
                  <div className='productNaP'>
                    <p className='productName'>{item.title.substring(0, 10)}</p>
                    <p className='productPrice'>${item.price}</p>
                  </div>
                </Link>
              </div>
            )
          }
          )
          }
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Category