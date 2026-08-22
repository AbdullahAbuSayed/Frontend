function Header() {
  return (
    <header className="site-header">
      <a className="site-brand" href="/">
        My React App
      </a>
      <nav aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default Header