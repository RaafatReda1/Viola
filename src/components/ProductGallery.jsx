import { useState, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { PRODUCT_PHOTOS, PRODUCT } from '../data/products';
import OrderModal from './OrderModal';

const galleryPhotos = PRODUCT_PHOTOS.filter(p => ['gallery', 'hero'].includes(p.role));

const RATING = 4.8;
const REVIEW_COUNT = 134;

function StarRating({ rating }) {
  return (
    <div className="product-rating" aria-label={`التقييم: ${rating} من 5`}>
      {[1,2,3,4,5].map(n => (
        <svg key={n} width="16" height="16" viewBox="0 0 24 24"
          fill={n <= Math.round(rating) ? '#B96F50' : 'none'}
          stroke="#B96F50" strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
      <span className="product-rating__score">{rating}</span>
      <span className="product-rating__count">({REVIEW_COUNT} تقييم)</span>
    </div>
  );
}

function CountdownBadge() {
  return (
    <div className="product-offer-badge">
      <span className="product-offer-badge__dot" />
      عرض محدود — توفير {1200 - 800} ج.م
    </div>
  );
}

export default function ProductGallery() {
  const [active, setActive] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const sectionRef = useScrollReveal();

  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  const prevPhoto = useCallback(() =>
    setActive(i => (i - 1 + galleryPhotos.length) % galleryPhotos.length), []);
  const nextPhoto = useCallback(() =>
    setActive(i => (i + 1) % galleryPhotos.length), []);

  return (
    <>
      <section className="product-section" id="gallery" ref={sectionRef}>
        <div className="product-section__inner">

          {/* ── LEFT: Image Viewer ── */}
          <div className="product-viewer">
            <div className="product-viewer__main reveal">
              <img
                key={galleryPhotos[active].id}
                src={galleryPhotos[active].src}
                alt={galleryPhotos[active].alt}
                className="product-viewer__img"
              />
              <button className="product-viewer__arrow product-viewer__arrow--prev" onClick={prevPhoto} aria-label="السابق">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
              <button className="product-viewer__arrow product-viewer__arrow--next" onClick={nextPhoto} aria-label="التالي">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <div className="product-viewer__counter">{active + 1} / {galleryPhotos.length}</div>
            </div>

            <div className="product-viewer__thumbs">
              {galleryPhotos.map((photo, i) => (
                <button
                  key={photo.id}
                  className={`product-viewer__thumb${i === active ? ' product-viewer__thumb--active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`صورة ${i + 1}`}
                >
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Product Details Panel ── */}
          <div className="product-details reveal reveal-delay-2">

            <div className="product-details__meta">
              <span className="product-details__brand">Viola</span>
              <CountdownBadge />
            </div>

            <h2 className="product-details__name">{PRODUCT.name}</h2>
            <p className="product-details__tagline">{PRODUCT.tagline}</p>

            <StarRating rating={RATING} />

            {/* Price */}
            <div className="product-details__pricing">
              <span className="product-details__price">{PRODUCT.price}</span>
              <span className="product-details__original">{PRODUCT.originalPrice}</span>
              <span className="product-details__save">وفّر 400 ج.م</span>
            </div>

            {/* Key features */}
            <ul className="product-details__features">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                أبعاد {PRODUCT.dimensions} — مثالية لأي جدار
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                إطار أبيض هندسي عصري مع رف خشبي طبيعي
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                إضاءة LED دافئة مدمجة — موفّرة وآمنة
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                مزهرية زجاجية أنيقة مرفقة مجاناً
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                سهل التركيب — كل الأدوات مرفقة
              </li>
            </ul>

            {/* Availability */}
            <div className="product-details__avail">
              <span className="product-details__avail-dot" />
              متاح للشحن الفوري — توصيل لجميع المحافظات
            </div>

            {/* CTA */}
            <button
              className="product-details__cta"
              onClick={openModal}
              id="order"
            >
              اطلب الآن — {PRODUCT.price}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="M12 5l7 7-7 7"/>
              </svg>
            </button>

            {/* Trust row */}
            <div className="product-details__trust">
              <div className="product-trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                </svg>
                <span>دفع عند الاستلام</span>
              </div>
              <div className="product-trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" rx="1"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
                <span>شحن سريع</span>
              </div>
              <div className="product-trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span>ضمان الجودة</span>
              </div>
              <div className="product-trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/>
                </svg>
                <span>استرجاع مضمون</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OrderModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}
