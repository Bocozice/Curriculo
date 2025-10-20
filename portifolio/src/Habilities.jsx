function Habilities() {
  const habilidades = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Bootstrap',
    'Git e GitHub',
    'Node.js (básico)',
    'SQL (básico)',
    'Inglês (avançado)',
    'Comunicação eficaz',
    'Trabalho em equipe',
    'Resolução de problemas',
    'Adaptabilidade',
  ];
  return (
    <section id="habilidades" className="mb-4">
      <h2>Habilidades</h2>
      <div className="d-flex flex-wrap gap-3">
        {habilidades.map((hab, idx) => (
              <div
                key={idx}
                className="border rounded p-4 fs-5 shadow-sm habilidade-box"
                style={{
                  minWidth: '180px',
                  minHeight: '60px',
                    display: 'flex',
                  cursor: 'pointer',
                }}
              >
                {hab}
              </div>
        ))}
      </div>
      <style>{  `
        .habilidade-box:hover {
              background: #363e44ff !important;
              box-shadow: 0 0.5rem 1rem rgba(21,101,192,0.10);
              transition: 'box-shadow 0.2s, background 0.2s';
              transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}

export default Habilities;