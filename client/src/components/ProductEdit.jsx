import React, { Component } from 'react'
import './ProductEdit.css'
import { Redirect } from 'react-router-dom'
import Layout from './shared/Layout'
import { getProduct, updateProduct } from '../services/product'

class ProductEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: {
              title: '',
              text: '',
              imgURL: ''
            },
            updated: false
        }
    }

    async componentDidMount() {
        let { id } = this.props.match.params
        const product = await getProduct(id)
        this.setState({ product })
    }


    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            product: {
                ...this.state.product,
                [name]: value
            }
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        let { id } = this.props.match.params
        const updated = await updateProduct(id, this.state.product)
        this.setState({ updated })
    }

    render() {

        const { product, updated } = this.state

        if (updated) {
            return <Redirect to={`/products/${this.props.match.params.id}`} />
        }

        return (
            <Layout user={this.props.user}>
                <div className="product-edit">
                    <div className="image-container">
                        <img className="edit-product-image" src={product.imgURL} alt={product.title} />
                        <form onSubmit={this.handleSubmit}>
                            <input
                                className="edit-input-image-link"
                                placeholder='Image Link'
                                value={product.imgURL}
                                name='imgURL'
                                required
                                onChange={this.handleChange}
                            />
                        </form>
                    </div>
                    <form className="edit-form" onSubmit={this.handleSubmit}>
                        <input
                            className="input-name"
                            placeholder='Title'
                            value={product.title}
                            name='title'
                            required
                            autoFocus
                            onChange={this.handleChange}
                        />
                       
                        <textarea
                            className="textarea-description"
                            rows={10}
                            cols={78}
                            placeholder='Post'
                            value={product.text}
                            name='text'
                            required
                            onChange={this.handleChange}
                        />
                        <button type='submit' className="save-button">Save</button>
                    </form>
                </div>
            </Layout>
        )
    }
}

export default ProductEdit