import React from 'react'
import './header.css'
import Image from 'next/image'

export default function Header() {
    return (
        <div className='header'>
            <section className='header_first_section'>
                <div className='div1'>
                    <img className='header_logo' src="/site_logo.png" alt="" />
                    <div className='header_insider_div'>
                        <h2 className='header_title1'>Groceyish</h2>
                        <p className='header_title2'>Grecory</p>
                    </div>
                </div>
                <div className='div2'>
                    <button className='all_categories'>ALL Categories <img className='down1' src="/down3.png" alt="" width={18} height={18} /></button>
                    <input className='search_input' type="text" placeholder='Search for items...' />
                    <button className='search_btn'><img src="/search.png" alt="" /></button>
                </div>
                <div className='div3'>
                    <p className='header_ps'>Wishlist</p>
                    <img src="/heart.png" alt="" />
                </div>
                <div className='div4'>
                    <img src="/basket.png" alt="" />
                    <div className='header_insider_div2'>
                        <p className='header_ps'>My cart</p>
                        <p className='header_price'>$21</p>
                    </div>
                    <img src="/down.png" alt="" />
                </div>
                <div className='div5'>
                    <img src="/login_logo.png" alt="" />
                    <p className='profile_title'>Ramiz Cherif</p>
                    <img width={18} height={18} src="/down3.png" alt="" />
                </div>
            </section>
            <section className="header_second_section">
                <button className='browse_all_categiries'><img src="/browse_all_categories.png" alt="" />Brows All Categories</button>
                <div className='header_insider_div3'>
                    <a href="#footer" className="header_anchors"><img className='header_section2_icons' width={20} src="/home.png" alt="" />Home</a>
                    <a href="#section4" className="header_anchors"><img className='header_section2_icons' width={20} src="/flame2.png" alt="" />Hot deals</a>
                    <a href="#section2" className="header_anchors"><img className='header_section2_icons' width={20} src="/percentage.png" alt="" />Promotions</a>
                    <a href="#section5" className="header_anchors"><img className='header_section2_icons' width={20} src="/megaphone.png" alt="" />New products</a>
                </div>
                <div className='number_div'>
                    <p className='header_number_p'><img className='phone_icon' width={20} src="phone-flip.png" alt="" />1233-7777</p>
                    <span className='header_number_span'>24/7 support center</span>
                </div>
            </section>
        </div>
    )
}
