import type { Product } from '../data/products'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="card">
      <div className="card-icon">{product.icon}</div>
      <h3 className="card-title">{product.name}</h3>
      <p className="card-desc">{product.description}</p>
      <div className="card-footer">
        <span className="card-price">{product.price}</span>
        <button className="btn btn-outline">View Product</button>
      </div>
    </div>
  )
}
