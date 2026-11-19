import { useScrollReveal } from '../hooks/useScrollReveal';
import { FEATURES } from '../data/products';

function FeatureItem({ item }) {
  const ref = useScrollReveal();
  return (
    <div className="craft-item" ref={ref}>
      <div className="craft-item__image reveal">
        <img src={item.image} alt={item.title} loading="lazy" />
      </div>
      <div className="craft-item__text">
        <span className="craft-item__number reveal">{item.number}</span>
        <h3 className="craft-item__title reveal reveal-delay-1">{item.title}</h3>
        <p className="craft-item__sub reveal reveal-delay-2">{item.subtitle}</p>
        <p className="craft-item__detail reveal reveal-delay-3">{item.detail}</p>
      </div>
    </div>
  );
}

export default function Craftsmanship() {
  const headerRef = useScrollReveal();
  return (
    <section className="craftsmanship" id="craftsmanship" ref={headerRef}>
      <div className="craftsmanship__header">
        <h2 className="craftsmanship__title reveal">ما الذي يجعله مميّزاً؟</h2>
        <p className="craftsmanship__subtitle reveal reveal-delay-1">
          ثلاثة عناصر مدروسة بعناية تجعل هذا الرف أكثر من مجرد قطعة ديكور
        </p>
      </div>
      {FEATURES.map(item => (
        <FeatureItem key={item.number} item={item} />
      ))}
    </section>
  );
}
