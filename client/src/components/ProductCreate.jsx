import React, { Component } from 'react'
import './ProductCreate.css'
import Layout from './shared/Layout'
import { Redirect } from 'react-router-dom'
import { createProduct } from '../services/product'

class ProductCreate extends Component {
  constructor() {
    super()
    this.state = {
      product: {
        title: '',
        text: '',
        imgURL: ''

      },
      created: false
    }
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
    const created = await createProduct(this.state.product)
    this.setState({ created })
  }

  render() {
    const { product, created } = this.state

    if (created) {
      return <Redirect to={`/products`} />
    }
    return (
      <Layout user={this.props.user}>
        <form className="create-form" onSubmit={this.handleSubmit}>
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
            placeholder='Blog'
            value={product.text}
            name='text'
            required
            onChange={this.handleChange}
          />
          <input
            className="input-image-link"
            placeholder='Image Link'
            value={product.imgURL}
            name='imgURL'
            required
            onChange={this.handleChange}
          />
          <button type='submit' className="submit-button">Submit</button>
        </form>
      </Layout>
    )
  }
}

export default ProductCreate