import React from 'react'

const Map = () => {
  return (
    <div className='container p-5'><h3 className='text-center'> Search nearby e-waste Recyclers</h3>
      <form className="d-flex m-4" role="search">
        <input className="form-control me-2" type="search" placeholder="Search nearby Ewaste Recyclers" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className='container'>
        <iframe title='map'className='container'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28020.721199762855!2d77.04510777252428!3d28.61206976227526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1adb23f2fa31%3A0x4eaf34f63f559a4d!2sE%20Waste%20Recyclers%2C%20India!5e0!3m2!1sen!2sin!4v1695055103186!5m2!1sen!2sin"
          width={1900}
          height={450}
          style={{}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default Map
