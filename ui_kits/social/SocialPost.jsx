/* SocialPost — 1080×1080 square post for Instagram / Facebook.
   Three layouts: sale, arrival, announce. Composed from brand + SaleBurst + Badge + PriceTag. */
const { SaleBurst, Badge, PriceTag, Button } = window.AlisaKidsStoreDesignSystem_194dcf;

function SocialPost({ kind = 'sale', scale = 0.42 }) {
  const S = 1080;
  const frame = {
    width: S, height: S, transform: `scale(${scale})`, transformOrigin: 'top left',
    fontFamily: 'var(--font-body)', position: 'relative', overflow: 'hidden',
    borderRadius: 28, boxSizing: 'border-box',
  };
  const blob = (o) => ({ position: 'absolute', borderRadius: 'var(--radius-blob)', ...o });

  if (kind === 'sale') {
    return (
      <div style={{ ...frame, background: 'var(--pink-500)', color: '#fff', padding: 72 }}>
        <div style={blob({ width: 460, height: 460, background: 'rgba(255,255,255,.12)', top: -120, right: -120 })} />
        <div style={blob({ width: 320, height: 320, background: 'rgba(255,255,255,.10)', bottom: -110, left: -90 })} />
        <img src="../../assets/logo-mono-white.svg" style={{ height: 78, position: 'relative' }} />
        <div style={{ position: 'relative', marginTop: 64 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 150, lineHeight: .92, letterSpacing: '-0.02em' }}>РОЗ&shy;ПРОДАЖ</div>
          <p style={{ fontSize: 40, fontWeight: 700, opacity: .95, margin: '24px 0 0', maxWidth: 620 }}>Знижки на зимову колекцію для дітей у всіх магазинах «Аліса».</p>
        </div>
        <div style={{ position: 'absolute', right: 70, bottom: 200 }}>
          <SaleBurst top="до" main="−50%" color="yellow" size={300} style={{ transform: 'rotate(-8deg)' }} />
        </div>
        <div style={{ position: 'absolute', left: 72, bottom: 72, background: '#fff', borderRadius: 24, padding: '20px 38px' }}>
          <PriceTag price="249" oldPrice="499" size="lg" />
        </div>
      </div>
    );
  }
  if (kind === 'arrival') {
    return (
      <div style={{ ...frame, background: 'var(--blue-100)', color: 'var(--ink-900)', padding: 72 }}>
        <div style={blob({ width: 520, height: 520, background: '#fff', bottom: -140, right: -120 })} />
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img src="../../assets/logo-primary.svg" style={{ height: 72 }} />
          <Badge tone="new" size="lg">Новинки</Badge>
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 124, lineHeight: .96, marginTop: 80, position: 'relative', letterSpacing: '-0.02em' }}>Нова<br/>колекція<br/>весни</div>
        <div style={{ position: 'absolute', right: 96, bottom: 110, width: 360, height: 360, background: '#fff', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, color: 'var(--ink-300)' }}>
          <i data-lucide="image" style={{ width: 90, height: 90 }}></i>
          <span style={{ fontWeight: 700, fontSize: 26 }}>Фото товару</span>
        </div>
        <p style={{ position: 'absolute', left: 72, bottom: 80, fontSize: 36, fontWeight: 700, color: 'var(--blue-600)', margin: 0 }}>Вже у продажу ✦ заходьте</p>
      </div>
    );
  }
  // announce
  return (
    <div style={{ ...frame, background: 'var(--cream)', color: 'var(--ink-900)', padding: 80 }}>
      <div style={blob({ width: 380, height: 380, background: 'var(--green-100)', top: -100, left: -90 })} />
      <div style={blob({ width: 300, height: 300, background: 'var(--yellow-100)', bottom: -90, right: -70 })} />
      <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <img src="../../assets/logo-primary.svg" style={{ height: 96 }} />
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 96, lineHeight: 1, marginTop: 56, letterSpacing: '-0.01em' }}>Відкриваємо<br/>третій магазин!</div>
        <p style={{ fontSize: 40, fontWeight: 600, color: 'var(--ink-500)', marginTop: 28 }}>Чекаємо на вас у суботу о 10:00</p>
        <div style={{ marginTop: 48 }}><Button variant="primary" size="lg">Дізнатись адресу</Button></div>
      </div>
    </div>
  );
}
window.SocialPost = SocialPost;
