function TopButton() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className="btn btn-success"
      style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1000 }}
      onClick={handleClick}
    >
      Voltar ao Início
    </button>
  );
}

export default TopButton;
