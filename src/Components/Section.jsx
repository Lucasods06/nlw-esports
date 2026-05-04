export default function Section({ title, subtitle, className, children }) {
  return (
    <section>
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <ul className={className}>
          {children}
        </ul>
      </div>
    </section>
  );
}