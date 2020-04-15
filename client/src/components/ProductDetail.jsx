import React, { Component } from 'react'
import './ProductDetail.css'
import Layout from './shared/Layout'
import { getProduct, deleteProduct } from '../services/product'
import { Link } from 'react-router-dom'

class ProductDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: {
              title: '',
              text: '',
              imgURL: ''
            }
        }
    }

    async componentDidMount() {
        let { id } = this.props.match.params
        const product = await getProduct(id)
        this.setState({ product })
    }

    render() {
        const { product } = this.state
        return (
            <Layout user={this.props.user}>
                <div className="product-detail">
                    <img className="product-detail-image" src={product.imgURL} alt={product.title} />
                    <div className="detail">
                        <div className="name">{product.title}</div>
                        
                        <div className="description">{product.text}</div>
                        <div className="button-container">
                        <button className="edit-button"><Link className="edit-link" to={`/products/${product._id}/edit`}>Edit</Link></button>
                            <button className="delete-button" onClick={() => deleteProduct(product._id)}>Delete</button>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default ProductDetail
