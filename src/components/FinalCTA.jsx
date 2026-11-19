import { useState, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { PRODUCT } from '../data/products';
import OrderModal from './OrderModal';

export default function FinalCTA() {
  const sectionRef = useScrollReveal();
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  return (
    <>
      <section className="final-cta" ref={sectionRef}>
        <div className="final-cta__bg">
          <img
            src="/Product/WhatsApp Image 2025-10-15 at 03.04.48_e6f7ad37.jpg"
            alt="الرف الجداري من فيولا بإضاءة ليلية دافئة"
            loading="lazy"
          />
        </div>
        <div className="final-cta__overlay" />
        <div className="final-cta__content">
          <h2 className="final-cta__headline reveal">جدارك ينتظر شيئاً مميزاً.</h2>
          <p className="final-cta__text reveal reveal-delay-1">
            قطعة واحدة كافية لتغيّر إحساس المكان بالكامل — اطلب الآن والاستلام عند بابك.
          </p>
          <div className="final-cta__pricing reveal reveal-delay-2">
            <span className="final-cta__price">{PRODUCT.price}</span>
            <span className="final-cta__original">{PRODUCT.originalPrice}</span>
          </div>
          <button
            className="final-cta__button reveal reveal-delay-3"
            onClick={openModal}
          >
            اطلب الآن — دفع عند الاستلام
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/><path d="M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </section>

      <OrderModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}
