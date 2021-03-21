import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Contact</h1>
              <div className="columns">
                <div className="column tile is-parent is-vertical">
                  <section className="tile is-child">
                    <label className="is-size-4">Administration, Sales and Marketing</label>
                    <div>
                      <strong>Hazarathaiah Jadapalli</strong>
                      <div><i>Managing Director</i></div>
                      <div><strong>Mobile:</strong> (+91) 77805 32775</div>
                      <div><strong>E-mail:</strong> hazarathaiah@radxport.in</div>
                    </div>
                  </section>
                  <section className="tile is-child is-spaced">
                    <label className="is-size-4">Office Address</label>
                    <div>
                      <strong>Radxport Enterprises Private Limited</strong>
                      <div>Flat no 202, V.K.B Apartment</div>
                      <div>Sujatha Nagar Beside Taluka Police station</div>
                      <div>Ongole, Prakasam, Andhra Pradesh, India - 523002</div>
                      <div><strong>Phone:</strong> (+91) 77805 32775</div>
                      <div><strong>Email</strong>: info@radxport.in</div>
                      <div><strong>Open hours</strong>: Monday to Saturday 9am - 6pm</div>
                    </div>
                  </section>
                </div>
                <div className="column">
                  <form
                    name="contact"
                    method="post"
                    action="/contact/thanks/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}
                  >
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <label>
                      Don’t fill this out:{' '}
                      <input name="bot-field" onChange={this.handleChange} />
                    </label>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'name'}>
                      Your name
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'name'}
                        onChange={this.handleChange}
                        id={'name'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'email'}>
                      Email
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'email'}
                        name={'email'}
                        onChange={this.handleChange}
                        id={'email'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'message'}>
                      Message
                    </label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        name={'message'}
                        onChange={this.handleChange}
                        id={'message'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <button className="button is-link" type="submit">
                      Send
                    </button>
                  </div>
                </form>
                </div>
              </div>
              <div className="">
                <label className="is-size-4 has-text-centered">Come with us at our Office</label>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.481513449959!2d80.03164431485138!3d15.512296789227129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b01e7691712c7%3A0x456a47b189558511!2sRadxport%20Enterprises%20Private%20Limited!5e0!3m2!1sen!2sin!4v1609096010674!5m2!1sen!2sin"
                  width="100%"
                  height="400px"
                  frameborder="0"
                  style={{border:0}}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"></iframe>
                </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
