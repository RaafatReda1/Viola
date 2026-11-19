import { useState, useEffect, useCallback, useRef } from 'react';
import { PRODUCT } from '../data/products';

const GOVERNORATES = [
  'القاهرة', 'الجيزة', 'الإسكندرية', 'الدقهلية', 'الشرقية',
  'المنوفية', 'القليوبية', 'الغربية', 'كفر الشيخ', 'الإسماعيلية',
  'بورسعيد', 'السويس', 'دمياط', 'البحيرة', 'الفيوم',
  'بني سويف', 'المنيا', 'أسيوط', 'سوهاج', 'قنا',
  'الأقصر', 'أسوان', 'البحر الأحمر', 'سيناء الشمالية', 'سيناء الجنوبية',
  'مطروح', 'الوادي الجديد',
];

function generateOrderId() {
  return 'VLA-' + Math.random().toString(36).substring(2, 7).toUpperCase();
}

export default function OrderModal({ isOpen, onClose }) {
  const [step, setStep] = useState('form'); // 'form' | 'submitting' | 'success'
  const [orderId] = useState(generateOrderId);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: '',
    phone: '',
    governorate: '',
    city: '',
    address: '',
    notes: '',
  });
  const overlayRef = useRef(null);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setStep('form');
      setErrors({});
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  }, [errors]);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'الاسم مطلوب';
    if (!form.phone.match(/^[0-9]{10,11}$/)) errs.phone = 'رقم هاتف غير صحيح';
    if (!form.governorate) errs.governorate = 'اختر المحافظة';
    if (!form.city.trim()) errs.city = 'اسم المدينة مطلوب';
    if (!form.address.trim()) errs.address = 'العنوان التفصيلي مطلوب';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStep('submitting');
    setTimeout(() => setStep('success'), 2800);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`order-modal__overlay ${isOpen ? 'order-modal__overlay--open' : ''}`}
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label="نموذج الطلب"
    >
      <div className="order-modal">
        {/* Header */}
        <div className="order-modal__header">
          <div className="order-modal__header-text">
            <h3 className="order-modal__title">تأكيد الطلب</h3>
            <p className="order-modal__subtitle">تعبئة بيانات الشحن</p>
          </div>
          <button className="order-modal__close" onClick={onClose} aria-label="إغلاق">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Product summary strip */}
        <div className="order-modal__product">
          <img src="/Product/IMG-20251015-WA0004.jpg" alt={PRODUCT.name} />
          <div className="order-modal__product-info">
            <span className="order-modal__product-name">{PRODUCT.name}</span>
            <span className="order-modal__product-dim">{PRODUCT.dimensions}</span>
          </div>
          <div className="order-modal__product-price">
            <span className="order-modal__price-current">{PRODUCT.price}</span>
            <span className="order-modal__price-old">{PRODUCT.originalPrice}</span>
          </div>
        </div>

        {/* ── FORM STATE ── */}
        {step === 'form' && (
          <form className="order-modal__form" onSubmit={handleSubmit} noValidate>
            <div className="order-modal__section-label">بيانات العميل</div>

            <div className="order-modal__row">
              <div className={`order-modal__field ${errors.name ? 'order-modal__field--error' : ''}`}>
                <label htmlFor="om-name">الاسم بالكامل <span>*</span></label>
                <input
                  id="om-name"
                  name="name"
                  type="text"
                  placeholder="محمد أحمد"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                />
                {errors.name && <span className="order-modal__error">{errors.name}</span>}
              </div>
              <div className={`order-modal__field ${errors.phone ? 'order-modal__field--error' : ''}`}>
                <label htmlFor="om-phone">رقم الهاتف <span>*</span></label>
                <input
                  id="om-phone"
                  name="phone"
                  type="tel"
                  placeholder="01XXXXXXXXX"
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  dir="ltr"
                />
                {errors.phone && <span className="order-modal__error">{errors.phone}</span>}
              </div>
            </div>

            <div className="order-modal__section-label" style={{ marginTop: '1.5rem' }}>بيانات الشحن</div>

            <div className="order-modal__row">
              <div className={`order-modal__field ${errors.governorate ? 'order-modal__field--error' : ''}`}>
                <label htmlFor="om-gov">المحافظة <span>*</span></label>
                <div className="order-modal__select-wrap">
                  <select
                    id="om-gov"
                    name="governorate"
                    value={form.governorate}
                    onChange={handleChange}
                  >
                    <option value="">اختر المحافظة</option>
                    {GOVERNORATES.map(g => <option key={g} value={g}>{g}</option>)}
                  </select>
                  <svg className="order-modal__select-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
                {errors.governorate && <span className="order-modal__error">{errors.governorate}</span>}
              </div>
              <div className={`order-modal__field ${errors.city ? 'order-modal__field--error' : ''}`}>
                <label htmlFor="om-city">المدينة / الحي <span>*</span></label>
                <input
                  id="om-city"
                  name="city"
                  type="text"
                  placeholder="مدينة نصر، الدقي..."
                  value={form.city}
                  onChange={handleChange}
                />
                {errors.city && <span className="order-modal__error">{errors.city}</span>}
              </div>
            </div>

            <div className={`order-modal__field order-modal__field--full ${errors.address ? 'order-modal__field--error' : ''}`}>
              <label htmlFor="om-addr">العنوان التفصيلي <span>*</span></label>
              <input
                id="om-addr"
                name="address"
                type="text"
                placeholder="الشارع، العمارة، الدور، الشقة..."
                value={form.address}
                onChange={handleChange}
                autoComplete="street-address"
              />
              {errors.address && <span className="order-modal__error">{errors.address}</span>}
            </div>

            <div className="order-modal__field order-modal__field--full">
              <label htmlFor="om-notes">ملاحظات إضافية <span className="order-modal__optional">(اختياري)</span></label>
              <textarea
                id="om-notes"
                name="notes"
                placeholder="أي تعليمات خاصة بالشحن أو الطلب..."
                value={form.notes}
                onChange={handleChange}
                rows={3}
              />
            </div>

            {/* Trust signals */}
            <div className="order-modal__trust">
              <span>🛡️ دفع عند الاستلام</span>
              <span>🚚 شحن لجميع المحافظات</span>
              <span>✅ جودة مضمونة</span>
            </div>

            <button type="submit" className="order-modal__submit">
              تأكيد الطلب والشحن
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        )}

        {/* ── SUBMITTING STATE ── */}
        {step === 'submitting' && (
          <div className="order-modal__loading">
            <div className="order-modal__spinner">
              <svg viewBox="0 0 50 50">
                <circle cx="25" cy="25" r="20" fill="none" strokeWidth="3" stroke="currentColor" />
              </svg>
            </div>
            <p className="order-modal__loading-text">جارٍ تأكيد طلبك…</p>
            <div className="order-modal__loading-steps">
              <ProgressStep label="التحقق من البيانات" delay={0} />
              <ProgressStep label="حجز القطعة" delay={800} />
              <ProgressStep label="إنشاء أمر الشحن" delay={1800} />
            </div>
          </div>
        )}

        {/* ── SUCCESS STATE ── */}
        {step === 'success' && (
          <div className="order-modal__success">
            <div className="order-modal__checkmark">
              <svg viewBox="0 0 52 52">
                <circle className="order-modal__check-circle" cx="26" cy="26" r="25" fill="none" />
                <path className="order-modal__check-path" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
              </svg>
            </div>
            <h3 className="order-modal__success-title">تم استلام طلبك بنجاح!</h3>
            <p className="order-modal__success-body">
              شكراً لك، <strong>{form.name || 'عزيزنا العميل'}</strong>.<br />
              سيتواصل معك فريق فيولا خلال <strong>24 ساعة</strong> لتأكيد الشحن.
            </p>
            <div className="order-modal__order-id">
              <span>رقم الطلب</span>
              <strong>{orderId}</strong>
            </div>
            <div className="order-modal__success-details">
              <div className="order-modal__detail-row">
                <span>المنتج</span>
                <span>{PRODUCT.name}</span>
              </div>
              <div className="order-modal__detail-row">
                <span>الإجمالي</span>
                <span style={{ color: 'var(--terracotta)', fontWeight: 700 }}>{PRODUCT.price}</span>
              </div>
              <div className="order-modal__detail-row">
                <span>الشحن إلى</span>
                <span>{form.governorate}{form.city ? `، ${form.city}` : ''}</span>
              </div>
              <div className="order-modal__detail-row">
                <span>طريقة الدفع</span>
                <span>دفع عند الاستلام</span>
              </div>
            </div>
            <button className="order-modal__done" onClick={onClose}>
              حسناً، شكراً!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function ProgressStep({ label, delay }) {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), delay + 600);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div className={`order-modal__step ${done ? 'order-modal__step--done' : ''}`}>
      <span className="order-modal__step-icon">
        {done
          ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
          : <span className="order-modal__step-dot" />
        }
      </span>
      <span>{label}</span>
    </div>
  );
}
