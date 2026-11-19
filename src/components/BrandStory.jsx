import { useScrollReveal } from '../hooks/useScrollReveal';
import { PRODUCT } from '../data/products';

export default function BrandStory() {
  const sectionRef = useScrollReveal();

  return (
    <section className="brand-story" id="story" ref={sectionRef}>
      <div className="brand-story__inner">
        <div className="brand-story__image reveal">
          <img
            src="/Product/IMG-20251015-WA0002.jpg"
            alt="الرف الجداري من فيولا — الرف الخشبي والمزهرية"
            loading="lazy"
          />
        </div>

        <div className="brand-story__text">
          <span className="brand-story__accent reveal" />
          <h2 className="brand-story__headline reveal reveal-delay-1">
            حوّل الحائط الفارغ إلى ركنك المفضّل.
          </h2>
          <p className="brand-story__body reveal reveal-delay-2">
            {PRODUCT.description}
          </p>
          <p className="brand-story__body reveal reveal-delay-3" style={{ marginTop: '1.25rem' }}>
            قطعة واحدة كفيلة تغيّر شكل المكان بالكامل — تُضيف عليه إحساساً من الهدوء والجمال الطبيعي لا تخطئه العين.
          </p>

          <div className="brand-story__badge reveal reveal-delay-4">
            <span className="brand-story__badge-price">{PRODUCT.price}</span>
            <span className="brand-story__badge-original">{PRODUCT.originalPrice}</span>
            <span className="brand-story__badge-note">{PRODUCT.priceNote}</span>
          </div>

          <a href="#order" className="brand-story__cta reveal reveal-delay-5" onClick={(e) => { e.preventDefault(); document.getElementById('order')?.click(); }}>
            اطلب الآن
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
