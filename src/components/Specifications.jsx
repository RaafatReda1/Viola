import { useScrollReveal } from '../hooks/useScrollReveal';
import { SPECIFICATIONS } from '../data/products';

export default function Specifications() {
  const sectionRef = useScrollReveal();
  return (
    <section className="specs" id="specs" ref={sectionRef}>
      <div className="specs__inner">
        <div className="specs__header">
          <h2 className="specs__title reveal">المواصفات الكاملة</h2>
          <p className="specs__subtitle reveal reveal-delay-1">
            كل تفاصيل القطعة بوضوح قبل أن تطلب
          </p>
        </div>
        <div className="specs__grid">
          {SPECIFICATIONS.map((spec, i) => (
            <div key={spec.label} className={`spec-row reveal reveal-delay-${Math.min(i + 1, 5)}`}>
              <span className="spec-row__label">{spec.label}</span>
              <span className="spec-row__value">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
