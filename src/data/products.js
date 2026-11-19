// Viola — Single Product Landing Page Data
// Product: رف جداري فاخر بإضاءة دافئة
// All photos are for the same product (different angles & setups)
// Source: ProductData.txt

export const PRODUCT = {
  name: "رف جداري فاخر بإضاءة دافئة",
  nameShort: "الرف الجداري المضيء",
  tagline: "رف جداري مضيء بتصميم عصري خشبي ولمسة دافئة",
  description: "أضف لمسة جمال وأناقة إلى ديكور منزلك مع هذا الرف الجداري المضيء المصمم بعناية ليجمع بين الوظيفة والفن في قطعة واحدة.",
  price: "800 ج.م",
  originalPrice: "1,200 ج.م",
  priceNote: "عرض لفترة محدودة",
  availability: "متاح للطلب",
  dimensions: "65 × 55 سم",
  frame: "إطار أبيض هندسي عصري",
  shelf: "رف خشبي طبيعي بلون دافئ",
  lighting: "إضاءة LED خافتة مدمجة داخل الإطار (3000K دافئ)",
  includes: "مزهرية زجاجية أنيقة مرفقة",
  material: "خامة عالية الجودة تضمن المتانة والثبات على الحائط",
  installation: "سهل التركيب والتثبيت",
  energy: "استهلاك منخفض للطاقة بفضل إضاءة LED الموفّرة",
  style: "تصميم عصري يناسب جميع أنماط الديكور الحديثة والمينيمالية",
};

// All photos are of the same product — different angles, lighting conditions, and setups
export const PRODUCT_PHOTOS = [
  {
    id: "p01",
    src: "/Product/IMG-20251015-WA0004.jpg",
    alt: "الرف الجداري المضيء من فيولا — منظر أمامي بإضاءة دافئة",
    role: "hero",        // used as hero image
  },
  {
    id: "p02",
    src: "/Product/IMG-20251015-WA0006.jpg",
    alt: "الرف الجداري من فيولا — إضاءة LED تضيء الإطار الأبيض",
    role: "gallery",
  },
  {
    id: "p03",
    src: "/Product/IMG-20251015-WA0002.jpg",
    alt: "الرف الجداري من فيولا — الرف الخشبي الدافئ مع المزهرية",
    role: "gallery",
  },
  {
    id: "p04",
    src: "/Product/IMG-20251015-WA0011.jpg",
    alt: "الرف الجداري من فيولا — زاوية جانبية تظهر عمق الإضاءة",
    role: "gallery",
  },
  {
    id: "p05",
    src: "/Product/IMG-20251015-WA0005.jpg",
    alt: "الرف الجداري من فيولا — تفاصيل الخشب الطبيعي",
    role: "gallery",
  },
  {
    id: "p06",
    src: "/Product/IMG-20251015-WA0007.jpg",
    alt: "الرف الجداري من فيولا — جلسة ليلية بإضاءة خافتة",
    role: "gallery",
  },
  {
    id: "p07",
    src: "/Product/IMG-20251015-WA0010.jpg",
    alt: "الرف الجداري من فيولا — تفاصيل الإطار الهندسي",
    role: "gallery",
  },
  {
    id: "p08",
    src: "/Product/IMG-20251015-WA0014.jpg",
    alt: "الرف الجداري من فيولا — مشهد كامل على الحائط",
    role: "gallery",
  },
  {
    id: "p09",
    src: "/Product/WhatsApp Image 2025-10-15 at 03.04.48_7dbfe5c4.jpg",
    alt: "الرف الجداري من فيولا — إضاءة ناصعة تبرز الخامة",
    role: "craft",      // used in craftsmanship section
  },
  {
    id: "p10",
    src: "/Product/IMG-20251015-WA0001.jpg",
    alt: "الرف الجداري من فيولا — جلسة ليلية مع توهج دافئ",
    role: "lifestyle",
  },
  {
    id: "p11",
    src: "/Product/IMG-20251015-WA0008.jpg",
    alt: "الرف الجداري من فيولا — تفاصيل قريبة من الخشب والإضاءة",
    role: "craft",
  },
  {
    id: "p12",
    src: "/Product/WhatsApp Image 2025-10-15 at 03.04.48_e6f7ad37.jpg",
    alt: "الرف الجداري من فيولا — الليل والإضاءة الدافئة",
    role: "cta",        // used in final CTA section
  },
];

export const FEATURES = [
  {
    number: "01",
    title: "رف خشبي طبيعي دافئ",
    subtitle: "خشب طبيعي بدرجات لونية أصيلة",
    image: "/Product/WhatsApp Image 2025-10-15 at 03.04.48_7dbfe5c4.jpg",
    detail: "الرف الخشبي المدمج مصنوع من خشب طبيعي بلون دافئ يضفي إحساساً بالراحة والألفة. يمكنك وضع مزهرية صغيرة، شمعة، أو أي قطعة ديكور لتعكس شخصيتك — والمزهرية الزجاجية الأنيقة مرفقة معه من الصندوق.",
  },
  {
    number: "02",
    title: "إطار هندسي أبيض عصري",
    subtitle: "تصميم مينيمالي يناسب كل ديكور",
    image: "/Product/IMG-20251015-WA0008.jpg",
    detail: "الإطار الأبيض ذو الخطوط الهندسية يعطي الحائط شكلاً مميزاً وفريداً، ويتناسب بسلاسة مع جميع أنماط الديكور الحديثة والمينيمالية. خامة عالية الجودة تضمن الثبات والمتانة على المدى البعيد.",
  },
  {
    number: "03",
    title: "إضاءة LED دافئة مدمجة",
    subtitle: "أجواء خافتة ومريحة للعين في أي وقت",
    image: "/Product/IMG-20251015-WA0005.jpg",
    detail: "إضاءة LED خافتة مدمجة داخل الإطار تُحيط بالرف بهالة ضوء دافئة تجعل الغرفة أكثر هدوءاً وأناقة. مريحة للعين، موفّرة للطاقة، وآمنة للتشغيل المستمر طوال اليوم.",
  },
];

export const SPACES = [
  {
    id: "living-room",
    title: "غرفة المعيشة",
    desc: "نقطة جمالية تُكمل الصالة وتجعل السهرات أكثر دفئاً",
    image: "/Product/IMG-20251015-WA0004.jpg",
  },
  {
    id: "bedroom",
    title: "غرفة النوم",
    desc: "إضاءة ليلية خافتة تهيئ جو الاسترخاء قبل النوم",
    image: "/Product/IMG-20251015-WA0001.jpg",
  },
  {
    id: "reading",
    title: "ركن القراءة",
    desc: "يمنح الركن طابعاً حميمياً يجعلك تبقى أطول",
    image: "/Product/IMG-20251015-WA0007.jpg",
  },
  {
    id: "entryway",
    title: "المدخل والردهة",
    desc: "انطباع أول لا يُنسى يحكي عن ذوقك الرفيع",
    image: "/Product/IMG-20251015-WA0011.jpg",
  },
];

export const SPECIFICATIONS = [
  { label: "الأبعاد", value: "65 سم (عرض) × 55 سم (ارتفاع)" },
  { label: "الإطار", value: "إطار أبيض هندسي عصري، خامة عالية الجودة" },
  { label: "الرف", value: "خشب طبيعي دافئ اللون" },
  { label: "الإضاءة", value: "LED خافتة دافئة مدمجة داخل الإطار" },
  { label: "المرفقات", value: "مزهرية زجاجية أنيقة مرفقة كما بالصورة" },
  { label: "التركيب", value: "سهل التثبيت على الحائط مع كافة الأدوات اللازمة" },
  { label: "استهلاك الطاقة", value: "منخفض جداً — إضاءة LED موفّرة للكهرباء" },
  { label: "الاستخدام الأمثل", value: "غرفة المعيشة، غرفة النوم، الردهة، ركن القراءة" },
];

export const BRAND_INFO = {
  name: "Viola",
  nameAr: "فيولا",
  phone: "+201000000000",
  whatsappNumber: "201000000000",
  instagram: "violaartspace",
  tagline: "أضف لمسة فن إلى مساحتك",
  location: "القاهرة، جمهورية مصر العربية",
  deliveryNote: "شحن آمن ومغلف بعناية لجميع محافظات مصر",
};
