export default function WhatsAppFloat() {
  return (
    <button
      className="whatsapp-float"
      onClick={() => document.getElementById('order')?.click()}
      aria-label="اطلب الآن"
      title="اطلب الآن"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
      <span className="whatsapp-float__label">اطلب الآن</span>
    </button>
  );
}
