/* PromoPoster — A-format sale poster for Alisa Kids Store.
   Composes brand logo + SaleBurst + PriceTag + Button. ~600×800. */
function PromoPoster({ season = 'winter' }) {
  const { SaleBurst, PriceTag, Button, Badge } = window.AlisaKidsStoreDesignSystem_194dcf;
  const themes = {
    winter: { bg: 'var(--blue-100)', accent: 'blue', kicker: 'Зимовий розпродаж', head: 'Тепло\nдля малечі', burst: '−50%' },
    summer: { bg: 'var(--yellow-100)', accent: 'yellow', kicker: 'Літній сезон', head: 'Сонячні\nновинки', burst: 'NEW' },
    spring: { bg: 'var(--green-100)', accent: 'green', kicker: 'Весняна колекція', head: 'Свіжі\nфарби весни', burst: '−30%' },
  };
  const t = themes[season] || themes.winter;
  return (
    <div style={{
      width: 600, height: 800, background: t.bg, borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)', overflow: 'hidden', position: 'relative',
      display: 'flex', flexDirection: 'column', padding: 40, boxSizing: 'border-box',
      fontFamily: 'var(--font-body)',
    }}>
      {/* soft blobs */}
      <div style={{ position: 'absolute', width: 260, height: 260, borderRadius: 'var(--radius-blob)', background: 'rgba(255,255,255,.5)', top: -70, right: -60 }} />
      <div style={{ position: 'absolute', width: 180, height: 180, borderRadius: 'var(--radius-blob)', background: 'rgba(255,255,255,.4)', bottom: 120, left: -60 }} />

      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img src="../../assets/logo-primary.svg" alt="alisa" style={{ height: 54 }} />
        <Badge tone="sale" size="lg">{t.kicker}</Badge>
      </div>

      <div style={{ position: 'relative', marginTop: 28 }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 76, lineHeight: .98, margin: 0, color: 'var(--ink-900)', whiteSpace: 'pre-line', letterSpacing: '-0.02em' }}>{t.head}</h1>
      </div>

      {/* product placeholder + burst */}
      <div style={{ position: 'relative', flex: 1, marginTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          width: '78%', height: '88%', background: '#fff', borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-md)', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 10, color: 'var(--ink-300)',
        }}>
          <i data-lucide="image" style={{ width: 56, height: 56 }}></i>
          <span style={{ fontWeight: 700, fontSize: 15 }}>Фото товару</span>
        </div>
        <div style={{ position: 'absolute', top: 4, right: 8 }}>
          <SaleBurst top="знижка" main={t.burst} color={t.accent} size={150} style={{ transform: 'rotate(-8deg)' }} />
        </div>
      </div>

      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
        <div style={{ background: '#fff', borderRadius: 'var(--radius-lg)', padding: '12px 22px', boxShadow: 'var(--shadow-sm)' }}>
          <PriceTag price="249" oldPrice="499" size="lg" />
        </div>
        <Button variant="sale" size="lg">Завітайте до нас</Button>
      </div>
    </div>
  );
}
window.PromoPoster = PromoPoster;
