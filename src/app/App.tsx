import { KpiCard } from '../components/KpiCard';
import { calculateIndicators } from '../services/dashboard.service';
import { documents, employees } from '../services/mock-data';

export function App() {
  const indicators = calculateIndicators(employees, documents);

  return (
    <main className="layout">
      <header>
        <p className="badge">Plataforma profissional (fase 1)</p>
        <h1>Sistema ASO/NR - Arquitetura Profissional</h1>
        <p>
          Nova base em React + TypeScript com separação por domínio, serviços e componentes para evolução
          segura.
        </p>
      </header>

      <section className="kpi-grid" aria-label="Indicadores principais">
        <KpiCard title="Colaboradores ativos" value={indicators.activeEmployees} description="Base ativa" />
        <KpiCard
          title="Vencem em 30 dias"
          value={indicators.expiringIn30Days}
          description="Necessitam ação imediata"
        />
        <KpiCard
          title="Documentos vencidos"
          value={indicators.expiredDocuments}
          description="Itens fora de conformidade"
        />
        <KpiCard title="Conformidade" value={`${indicators.complianceRate}%`} description="Saúde documental" />
      </section>
    </main>
  );
}
