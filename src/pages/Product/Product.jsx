import React, { useEffect, useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { getCatgProducts } from '../../api'
import { Footer } from '../../components'
import './Product.css'
import Skeleton from 'react-loading-skeleton'
import { addProduct } from '../../redux/cartRedux'
import { useDispatch } from 'react-redux'


const Product = () => {
  const parmas = useParams()
  const productID = parmas.id

  const [Prod, setProd] = useState([])

  const [loading, SetLoading] = useState(false)
  let componentMounted = true;

  const quantity = 1;
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProduct = async () => {
      SetLoading(true)

      if (componentMounted) {
        fetch(`https://fakestoreapi.com/products/${productID}`)
          .then(res => res.json())
          .then(data => setProd(data))
        SetLoading(false)
      }

      return () => { 
        componentMounted = false
    }

    }
    fetchProduct()
  }, [productID])


  const categoryName = Prod.category
  const [SimProd, setsimProd] = useState([])


  useEffect(() => {
    const fetchCatgProducts = async () => {

      const catgProduct = await getCatgProducts(categoryName)
      if(SimProd.length == 0 ){
        catgProduct.forEach((row) => {
          setsimProd(SimProd => [...SimProd, row])
        })
      }
      else {
        catgProduct.forEach((row, index) => {
        if(row.index !== SimProd.index) {
          setsimProd(SimProd => [...SimProd, row]);
        } else {
          return SimProd
        }
      });
    }
    }  

    fetchCatgProducts()
  }, [categoryName])



  const Loading = () => {
    return (
      <div className='LoadCon'>
        <Row>
        <Col md={6}>
          <Skeleton width={460} height={650} />
        </Col>
        <Col md={6} className='LoadRight'>
          <Skeleton width={650} height={40} />
          <Skeleton width={100} height={30} />
          <Skeleton width={650} height={100} />
          <Skeleton width={130} height={40} />
        </Col>
      </Row>
      </div>
    )
  }

  const handleClick = () => {
    dispatch(
      addProduct({product:Prod, quantity, price:Prod.price})
    )
  }

  return (
    <div className='productPage'>

      {loading ? <Loading /> : <div className="prodTop" key={Prod.id}>
        <div className="prodTopImgs">
          <img className='prodImg' src={Prod.image} alt='' />
        </div>
        <div className="prodTopDetails">
          <p className="prodName">{Prod.title}</p>
          <p className="prodPrice">${Prod.price}</p>
          <p className="prodRate">
            <span className="rateStar">
              &#9733;
            </span>
            {Prod?.rating?.rate}
            <span className="rateCount"> {Prod?.rating?.count} Reviews </span>
          </p>
          <p className="prodDesc">{Prod.description}</p>
          <Button variant='primary' className='prodBtn' onClick={handleClick}>Add to Cart</Button>
        </div>
      </div>}



      <div className="prodBtm">
        <h2 className="text-center simProTitle">Similar Products</h2>
        <div className="productWrapper">
          {SimProd.filter(item => item.id != productID).map((item) => {
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

export default Product