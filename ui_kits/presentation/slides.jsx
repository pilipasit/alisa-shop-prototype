/* Presentation slides for Alisa Kids Store — 1280×720, 16:9.
   TitleSlide + ContentSlide, composed from brand assets + components. */
const { Badge, CategorySign } = window.AlisaKidsStoreDesignSystem_194dcf;
const SLIDE = { width: 1280, height: 720, fontFamily: 'var(--font-body)', position: 'relative', overflow: 'hidden', boxSizing: 'border-box' };
const blob = (o) => ({ position: 'absolute', borderRadius: 'var(--radius-blob)', ...o });

function TitleSlide() {
  return (
    <div style={{ ...SLIDE, background: 'var(--pink-500)', color: '#fff', padding: 96, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={blob({ width: 560, height: 560, background: 'rgba(255,255,255,.10)', top: -180, right: -160 })} />
      <div style={blob({ width: 360, height: 360, background: 'rgba(255,255,255,.08)', bottom: -150, left: -120 })} />
      <img src="../../assets/logo-mono-white.svg" style={{ height: 70, position: 'relative', alignSelf: 'flex-start' }} />
      <div style={{ position: 'relative', marginTop: 56 }}>
        <div style={{ fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 22, letterSpacing: '.06em', textTransform: 'uppercase', opacity: .85 }}>Внутрішня презентація · 2026</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 92, lineHeight: 1, margin: '18px 0 0', letterSpacing: '-0.02em' }}>Підсумки сезону<br/>та плани магазину</h1>
        <p style={{ fontSize: 28, fontWeight: 600, opacity: .92, marginTop: 28, maxWidth: 760 }}>Мережа дитячих магазинів «Аліса» — три магазини в Україні.</p>
      </div>
    </div>
  );
}

function ContentSlide() {
  const I = (n) => <i data-lucide={n}></i>;
  return (
    <div style={{ ...SLIDE, background: 'var(--cream)', color: 'var(--ink-900)', padding: 80 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 56, margin: 0, letterSpacing: '-0.01em' }}>Що добре продавалось</h2>
        <img src="../../assets/logo-primary.svg" style={{ height: 40 }} />
      </div>
      <div style={{ height: 5, width: 90, background: 'var(--pink-500)', borderRadius: 99, marginTop: 18 }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginTop: 48 }}>
        <CategorySign title="Одяг" subtitle="+18% до минулого сезону" color="blue" icon={I('shirt')} />
        <CategorySign title="Іграшки" subtitle="+12% — лідер новинок" color="green" icon={I('blocks')} />
        <CategorySign title="Взуття" subtitle="стабільний попит" color="pink" icon={I('footprints')} />
        <CategorySign title="Сезонне" subtitle="пік у грудні" color="yellow" icon={I('sun')} />
      </div>
      <div style={{ marginTop: 44, display: 'flex', gap: 14, alignItems: 'center' }}>
        <Badge tone="new" size="lg">Висновок</Badge>
        <span style={{ fontSize: 24, fontWeight: 600, color: 'var(--ink-700)' }}>Розширюємо асортимент іграшок та зимового одягу.</span>
      </div>
    </div>
  );
}
window.TitleSlide = TitleSlide;
window.ContentSlide = ContentSlide;
