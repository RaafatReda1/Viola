export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__image-wrapper">
        <img
          src="/Product/IMG-20251015-WA0004.jpg"
          alt="الرف الجداري المضيء من فيولا — منظر أمامي"
          loading="eager"
        />
      </div>
      <div className="hero__overlay" />

      <div className="hero__content">
        <p className="hero__eyebrow">من فيولا</p>
        <h1 className="hero__headline">
          بعض الجدران تستحق أكثر من مجرّد إطار.
        </h1>
        <p className="hero__subtitle">
          رف جداري مضيء بتصميم عصري خشبي — يجمع بين الوظيفة والفن في قطعة واحدة تحوّل أي جدار فارغ إلى ركنك المفضّل.
        </p>
        <div className="hero__actions">
          <button className="hero__cta hero__cta--primary" onClick={() => document.getElementById('order')?.click()}>
            اطلب الآن — 800 ج.م
          </button>
          <a href="#gallery" className="hero__cta hero__cta--secondary">
            شاهد التفاصيل
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
