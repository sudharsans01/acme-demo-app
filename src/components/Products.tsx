import { products } from '../data/products'
import ProductCard from './ProductCard'

export default function Products() {
  return (
    <section className="section" id="products">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">Everything you need to build and run modern cloud applications.</p>
        </div>
        <div className="products-grid">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  )
}
