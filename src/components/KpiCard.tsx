interface KpiCardProps {
  title: string;
  value: string | number;
  description: string;
}

export function KpiCard({ title, value, description }: KpiCardProps) {
  return (
    <article className="kpi-card">
      <h2>{title}</h2>
      <strong>{value}</strong>
      <p>{description}</p>
    </article>
  );
}
