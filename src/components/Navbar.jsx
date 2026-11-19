import { useState, useCallback } from 'react';
import { useNavScroll } from '../hooks/useScrollReveal';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useNavScroll();

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => {
      document.body.style.overflow = prev ? '' : 'hidden';
      return !prev;
    });
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  }, []);

  return (
    <>
      <nav className="navbar" ref={navRef}>
        <div className="navbar__inner">
          {/* Logo — pure wordmark, no image */}
          <a href="#hero" className="navbar__logo" onClick={closeMenu}>
            <img src="/Frame 1.png" alt="Viola" className="navbar__logo-img" />
          </a>

          <div className="navbar__links">
            <a href="#gallery" className="navbar__link">الصور</a>
            <a href="#craftsmanship" className="navbar__link">المميزات</a>
            <a href="#specs" className="navbar__link">المواصفات</a>
            <a href="#contact" className="navbar__link">تواصل معنا</a>
            <button className="navbar__cta" onClick={() => { document.getElementById('order')?.click(); closeMenu(); }}>
              اطلب الآن
            </button>
          </div>

          <button
            className={`navbar__burger${menuOpen ? ' open' : ''}`}
            onClick={toggleMenu}
            aria-label="القائمة"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} role="dialog" aria-label="القائمة الرئيسية">
        <div className="mobile-menu__logo">
          <img src="/Frame 1.png" alt="Viola" className="mobile-menu__logo-img" />
          <span>Viola</span>
        </div>
        <nav className="mobile-menu__links">
          <a href="#gallery" onClick={closeMenu}>الصور</a>
          <a href="#craftsmanship" onClick={closeMenu}>المميزات</a>
          <a href="#specs" onClick={closeMenu}>المواصفات</a>
          <a href="#contact" onClick={closeMenu}>تواصل معنا</a>
        </nav>
        <button
          className="navbar__cta mobile-menu__cta"
          onClick={() => { document.getElementById('order')?.click(); closeMenu(); }}
        >
          اطلب الآن
        </button>
      </div>
    </>
  );
}
