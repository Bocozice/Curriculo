

function Project() {
    const projetos = [
        'Portifólio Pessoal',
        'Calculadora',
        'Orion - Embaralhador de Questões'
    ]
  return(
    <section id="projetos" className="my-10">
        <h2 className="mb-4">Projetos</h2>
                {projetos.map((prj, idx) => (
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
                {prj}
              </div>
        ))}
      <style>{  `
        .habilidade-box:hover {
              background: #363e44ff !important;
              box-shadow: 0 0.5rem 1rem rgba(21,101,192,0.10);
              transition: 'box-shadow 0.2s, background 0.2s';
              transform: scale(1.05);
        }
      `}</style>
    </section>
  )
}


export default Project;
