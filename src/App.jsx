

function App() {
  return (
    <>
      <header className="header navbar-area">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="nav-inner">
                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand" href="index.html">
                                <img src="assets/images/logo/white-logo.svg" alt="Logo" />
                            </a>
                            <button className="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                <ul id="nav" className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <a href="index.html" className="active" aria-label="Toggle navigation">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="dd-menu collapsed" href="javascript:void(0)" data-bs-toggle="collapse"
                                            data-bs-target="#submenu-1-1" aria-controls="navbarSupportedContent"
                                            aria-expanded="false" aria-label="Toggle navigation">Pages</a>
                                        <ul className="sub-menu collapse" id="submenu-1-1">
                                            <li className="nav-item"><a href="about-us.html">About Us</a></li>
                                            <li className="nav-item"><a href="javascript:void(0)">Our Pricing</a></li>
                                            <li className="nav-item"><a href="javascript:void(0)">Faq</a></li>
                                            <li className="nav-item"><a href="javascript:void(0)">Mail Success</a></li>
                                            <li className="nav-item"><a href="javascript:void(0)">404 Error</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="dd-menu collapsed" href="javascript:void(0)" data-bs-toggle="collapse"
                                            data-bs-target="#submenu-1-2" aria-controls="navbarSupportedContent"
                                            aria-expanded="false" aria-label="Toggle navigation">Services</a>
                                        <ul className="sub-menu collapse" id="submenu-1-2">
                                            <li className="nav-item"><a href="javascript:void(0)">Services</a></li>
                                            <li className="nav-item"><a href="javascript:void(0)">Service Details</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="dd-menu collapsed" href="javascript:void(0)" data-bs-toggle="collapse"
                                            data-bs-target="#submenu-1-3" aria-controls="navbarSupportedContent"
                                            aria-expanded="false" aria-label="Toggle navigation">Portfolio</a>
                                        <ul className="sub-menu collapse" id="submenu-1-3">
                                            <li className="nav-item"><a href="javascript:void(0)">Portfolio</a></li>
                                            <li className="nav-item"><a href="javascript:void(0)">Portfolio Details</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="dd-menu collapsed" href="javascript:void(0)" data-bs-toggle="collapse"
                                            data-bs-target="#submenu-1-4" aria-controls="navbarSupportedContent"
                                            aria-expanded="false" aria-label="Toggle navigation">Blog</a>
                                        <ul className="sub-menu collapse" id="submenu-1-4">
                                            <li className="nav-item"><a href="javascript:void(0)">Blog Grid Sidebar</a>
                                            </li>
                                            <li className="nav-item"><a href="javascript:void(0)">Blog Single</a></li>
                                            <li className="nav-item"><a href="javascript:void(0)">Blog Single
                                                    Sibebar</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="javascript:void(0)" aria-label="Toggle navigation">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="button add-list-button">
                                <a href="javascript:void(0)" className="btn">Get Started</a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default App
