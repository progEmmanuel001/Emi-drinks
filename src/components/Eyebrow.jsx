export default function Eyebrow({ children, color = "#5E17EB" }) {
  return (
    <div className="eyebrow" style={{ color }}>
      <span className="eyebrow-bar" style={{ background: color }} />
      {children}
    </div>
  );
}
