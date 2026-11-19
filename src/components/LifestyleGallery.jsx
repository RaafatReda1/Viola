import { useScrollReveal } from '../hooks/useScrollReveal';
import { SPACES } from '../data/products';

function SpaceCard({ space, index }) {
  return (
    <div className={`lifestyle-card reveal reveal-delay-${Math.min(index + 1, 4)}`}>
      <img src={space.image} alt={`${space.title} — ${space.desc}`} loading="lazy" />
      <div className="lifestyle-card__overlay">
        <h3 className="lifestyle-card__title">{space.title}</h3>
        <p className="lifestyle-card__tagline">{space.desc}</p>
      </div>
    </div>
  );
}

export default function LifestyleGallery() {
  const sectionRef = useScrollReveal();
  return (
    <section className="lifestyle" id="lifestyle" ref={sectionRef}>
      <div className="lifestyle__header">
        <h2 className="lifestyle__title reveal">في أي مكان من منزلك</h2>
        <p className="lifestyle__subtitle reveal reveal-delay-1">
          يتناسب مع كل فضاء — تخيّل الرف يضيء ركنك المفضّل
        </p>
      </div>
      <div className="lifestyle__grid">
        {SPACES.map((space, i) => (
          <SpaceCard key={space.id} space={space} index={i} />
        ))}
      </div>
    </section>
  );
}
