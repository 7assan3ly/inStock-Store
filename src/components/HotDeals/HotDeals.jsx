import React, { useEffect, useState } from 'react'
import './HotDeals.css'
import { getHotDeals } from '../../api'
import { Container, Row, Col } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'


const HotDeals = () => {

    const [Deal, SetDeal] = useState([])
    const [loading, SetLoading] = useState(false)
    let componentMounted = true;

    useEffect(() => {
        const getDeals = async () => {
            SetLoading(true)
            const deals = await getHotDeals()
            if (componentMounted) {
                SetDeal(deals)
                SetLoading(false)
            }

            return () => {
                componentMounted = false
            }


            console.log(deals);
        }
        getDeals()
    }, [])

    const Loading = () => {
        return (
            <Row>
                <Col md={3}>
                    <Skeleton width={250} height={400} />
                </Col>
                <Col md={3}>
                    <Skeleton width={250} height={400} />
                </Col>
                <Col md={3}>
                    <Skeleton width={250} height={400} />
                </Col>
                <Col md={3}>
                    <Skeleton width={250} height={400} />
                </Col>
            </Row>
        )
    }

    return (
        <div className='hotDeals'>
            <Container>
                <h1 className="hotDealsTitle">Hot Deals</h1>
                <div className="hotDealsContainer">
                    {loading ? <Loading /> : Deal.map((item) => (
                        <div className="hotDealsCard" key={item.id}>
                            <Link className='linkk' to={`/product/${item.id}`}>
                                <img className='cardImg' src={item.image} alt='' />
                                <h3 className="cardName">{item.title.substring(0, 20)}...</h3>
                                <span className="cardPrice">${item.price}</span>
                                <button className="cardCart">Check out</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default HotDeals