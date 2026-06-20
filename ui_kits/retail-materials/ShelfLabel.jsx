/* ShelfLabel — printable shelf-edge price label. Composes PriceTag + Badge.
   Standard small retail label ~300×170. */
function ShelfLabel({ name = 'Назва товару', sku = '000000', price = '199', oldPrice, accent = 'pink' }) {
  const { PriceTag, Badge } = window.AlisaKidsStoreDesignSystem_194dcf;
  const bar = `var(--${accent}-500)`;
  return (
    <div style={{
      width: '100%', maxWidth: 320, height: 170, background: '#fff', borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-sm)', border: '1px solid var(--ink-100)', overflow: 'hidden',
      display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-body)',
    }}>
      <div style={{ height: 8, background: bar }} />
      <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
          <span style={{ fontWeight: 800, fontSize: 16, color: 'var(--ink-900)', lineHeight: 1.2 }}>{name}</span>
          {oldPrice && <Badge tone="sale">АКЦІЯ</Badge>}
        </div>
        <span style={{ fontSize: 12, color: 'var(--ink-400)', fontWeight: 700, marginTop: 2 }}>Артикул {sku}</span>
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <PriceTag price={price} oldPrice={oldPrice} size="md" />
          <img src="../../assets/logo-mono-pink.svg" alt="alisa" style={{ height: 20, opacity: .9 }} />
        </div>
      </div>
    </div>
  );
}
window.ShelfLabel = ShelfLabel;
