export default function Bubbles() {
  return (
    <div className="bubbles" aria-hidden="true">
      {Array.from({ length: 14 }).map((_, i) => (
        <span key={i} className="bubble" style={{ "--i": i }} />
      ))}
    </div>
  );
}
