import { useScrollReveal } from '../hooks/useScrollReveal';
import { PRODUCTS, BRAND_INFO } from '../data/products';

function generateWhatsAppLink(product) {
  const message = encodeURIComponent(
    `مرحباً، أرغب في الاستفسار عن:\n\n` +
    `🎨 ${product.name}\n` +
    `📐 ${product.dimensions}\n` +
    `💰 ${product.price}\n\n` +
    `هل القطعة متوفرة حالياً؟`
  );
  return `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${message}`;
}

function ProductCard({ product, index }) {
  return (
    <article className={`product-card reveal reveal-delay-${Math.min(index % 3 + 1, 5)}`}>
      <div className="product-card__image-wrap">
        <img
          src={product.image}
          alt={`${product.name} — ${product.subtitle}`}
          loading="lazy"
        />
        {product.tag && (
          <span className="product-card__tag">{product.tag}</span>
        )}
        <div className="product-card__overlay">
          <a
            href={generateWhatsAppLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="product-card__quick-cta"
          >
            اطلب عبر واتساب
          </a>
        </div>
      </div>

      <div className="product-card__info">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__desc">{product.subtitle}</p>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
          <span className="product-card__price">{product.price}</span>
          <span className="product-card__dims">{product.dimensions}</span>
        </div>
      </div>
    </article>
  );
}

export default function Collection() {
  const sectionRef = useScrollReveal();

  return (
    <section className="collection" id="collection" ref={sectionRef}>
      <div className="collection__header">
        <span className="collection__label reveal">المجموعة الكاملة</span>
        <h2 className="collection__title reveal reveal-delay-1">
          لوحات مصمّمة لتُعاش، لا لتُعلّق فقط
        </h2>
      </div>

      <div className="collection__grid">
        {PRODUCTS.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  );
}
