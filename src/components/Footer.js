import React from 'react'
import { Link } from 'gatsby'

// import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        {/* <div className="content has-text-centered">
          <img
            src={logo}
            alt="Radxport Enterprises Logo"
            style={{ width: '14em', height: '10em' }}
          />
        </div> */}
        <div className="content has-text-centered">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/products">
                        Products
                      </Link>
                    </li>
                    {/* <li>
                      <Link to="/blog">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact/examples">
                        Form Examples
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li> */}
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <label className="is-size-4">Radxport Enterprises Pvt. Ltd.</label>
                  <p>
                    Flat #202, V.K.B. Apartment,<br/>
                    Beside Taluka Police station, Sujatha Nagar,
                    Ongole, Prakasam district, Andhra Pradesh,
                    India - 523002
                  </p>
                  <div><span className="has-text-weight-bold">Phone:</span> (+91) 77805 32775</div>
                  <div><span className="has-text-weight-bold">Email</span>: info@radxport.in</div>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
        </div>
      </footer>
    )
  }
}

export default Footer
