import React from 'react'
import './footer.css'
import image from 'next/image'

export default function Footer() {
  return (
    <div className='footer'>
      <section className='footer_section1'>
        <div className="footer_divs">
          <img src="/footer_first_image.png" alt="" />
          <div className='footer_insider_divs'>
            <h3 className='footer_h3'>Best Prices & Deals</h3>
            <p className='footer_section1_ps'>Don't miss our daily amazing <br /> deals and prices</p>
          </div>
        </div>

        <div className="footer_divs">
          <img src="/footer_second_image.png" alt="" />
          <div className='footer_insider_divs'>
            <h3 className='footer_h3'>Refundable</h3>
            <p className='footer_section1_ps'>If your items have damage <br /> we agree to refund it</p>
          </div>
        </div>

        <div className="footer_divs">
          <img src="/footer_third_image.png" alt="" />
          <div className='footer_insider_divs'>
            <h3 className='footer_h3'>Free delivery</h3>
            <p className='footer_section1_ps'>Do purchase over $50 and <br /> get free delivery anywhere</p>
          </div>
        </div>
      </section>









      <section className="footer_section2">

        <div className='footer_section2_div'>
          <div className='footer_div1'>
            <img className='header_logo' src="/site_logo.png" alt="" />
            <div className='header_insider_div'>
              <h2 className='header_title1'>Groceyish</h2>
              <p className='header_title2'>Grecory</p>
            </div>
          </div>

          <div className='footer_main_divs'>
            <img src="/map.png" alt="" />
            <p className='footer_insider_p'>Address: </p>
            <span className='footer_spans'>1762 School House Road</span>
          </div>
          <div className='footer_main_divs'>
            <img width={18} src="/telephone.png" alt="" />
            <p className='footer_insider_p'>Call Us: </p>
            <span className='footer_spans'>1233-777</span>
          </div>
          <div className='footer_main_divs'>
            <img src="/mail.png" alt="" />
            <p className='footer_insider_p'>Email: </p>
            <span className='footer_spans'>groceyish@contact.com</span>
          </div>
          <div className='footer_main_divs'>
            <img src="/clock.png" alt="" />
            <p className='footer_insider_p'>Work hours: </p>
            <span className='footer_spans'>8:00 - 20:00, Sunday - Thursday</span>
          </div>
        </div>



        <div className='footer_section2_divs'>
          <h2 className='footer_spans'>Account</h2>
          <span className='footer_spans'>Wishlist</span>
          <span className='footer_spans'>Cart</span>
          <span className='footer_spans'>Track Order</span>
          <span className='footer_spans'>Shipping Details</span>
        </div>


        <div className='footer_section2_divs'>
          <h2 className='footer_spans'>Useful Links</h2>
          <span className='footer_spans'>About Us</span>
          <span className='footer_spans'>Contact</span>
          <span className='footer_spans'>Hot deals</span>
          <span className='footer_spans'>Promotes</span>
          <span className='footer_spans'>New products</span>
        </div>


        <div className='footer_section2_divs'>
          <h2 className='footer_spans'>Help Center</h2>
          <span className='footer_spans'>Payments</span>
          <span className='footer_spans'>Refund</span>
          <span className='footer_spans'>Checkout</span>
          <span className='footer_spans'>Shipping</span>
          <span className='footer_spans'>Q&A</span>
          <span className='footer_spans'>Pravicy Policy</span>
        </div>
      </section>


      <section id='footer' className="footer_section3">
        <span className='footer_spans'>© 2022, All rights reserved</span>
        <img src="/Payment.png" alt="" />
        <img src="/socialmedia_icons.png" alt="" />
      </section>
    </div>
  )
}
