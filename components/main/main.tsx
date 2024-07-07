'use client'
import React, { useState } from 'react'
import './main.css'
import Image from 'next/image'
import { Rating } from '@mui/material'
import zIndex from '@mui/material/styles/zIndex'


export default function Main() {
    const [value, setValue] = useState<undefined>()

    return (
        <div className='products'>
            <img className='image1' src="/1.png" alt="" />
            <img className='image2' src="/2.png" alt="" />
            <img className='image3' src="/3.png" alt="" />
            <div className='main_div1'>
                <h1 className='main_first_title'>Don't miss our daily <br /> amazing deals.</h1>
                <p className='main_first_text'>Save up to 60% off on your first order</p>
                <div className='main_insider_div1'>
                    <img className='send_image' src="/li_send.png" alt="" />
                    <input className='first_input' type="text" placeholder='Enter your email address' />
                    <button className='subscribe_btn'>Subscribe</button>
                </div>
            </div>

            <section className='product_section1'>
                <div className='products_first_header'>
                    <h1>Explore Categories</h1>
                    <div className='anchors_div'>
                        <a className='header_anchors' href="">All</a>
                        <a className='header_anchors' href="">Vegetables</a>
                        <a className='header_anchors' href="">Fruits</a>
                        <a className='header_anchors' href="">Coffe&teas</a>
                        <a className='header_anchors' href="">Meat</a>
                    </div>
                </div>

                <div className='products1'>
                    <button className='left'><img src="/Left.png" alt="" /></button>
                    <div className='product1 product_first_divs'>
                        <img src="/xurmo.png" alt="" />
                        <p className='product_first_p'>Peach</p>
                        <p className='product_second_p'>20 items</p>
                    </div>
                    <div className='product2 product_first_divs'>
                        <img src="/kokat.png" alt="" />
                        <p className='product_first_p'>Vegetables</p>
                        <p className='product_second_p'>220 items</p>
                    </div>
                    <div className='product3 product_first_divs'>
                        <img src="/qulupnay.png" alt="" />
                        <p className='product_first_p'>Strawberry</p>
                        <p className='product_second_p'>10 items</p>
                    </div>
                    <div className='product4 product_first_divs'>
                        <img src="/olma.png" alt="" />
                        <p className='product_first_p'>Apple</p>
                        <p className='product_second_p'>40 items</p>
                    </div>
                    <div className='product5 product_first_divs'>
                        <img src="/apelsin.png" alt="" />
                        <p className='product_first_p'>Orange</p>
                        <p className='product_second_p'>23 items</p>
                    </div>
                    <div className='product6 product_first_divs'>
                        <img src="/kartoshka.png" alt="" />
                        <p className='product_first_p'>Potato</p>
                        <p className='product_second_p'>3 items</p>
                    </div>
                    <div className='product7 product_first_divs'>
                        <img src="/sabzi.png" alt="" />
                        <p className='product_first_p'>Carrot</p>
                        <p className='product_second_p'>9 items</p>
                    </div>
                    <button className='right'><img src="/right.png" alt="" /></button>
                </div>
            </section>

            <section id='section2' className="product_section2">
                <div className='products_second_header'>
                    <h1>Featured Products</h1>
                    <div className='anchors_div'>
                        <a className='header_anchors' href="">All</a>
                        <a className='header_anchors' href="">Vegetables</a>
                        <a className='header_anchors' href="">Fruits</a>
                        <a className='header_anchors' href="">Coffe&teas</a>
                        <a className='header_anchors' href="">Meat</a>
                    </div>
                </div>
                <div className="product2_insider_div">
                    <img src="/left.png" alt="" />
                    <div className='product_divs2'>
                        <img width={214} src="/redish.png" alt="" />
                        <p className='vegetables'>Vegetables</p>
                        <h3 className='product_first_p redish'>Redish 500g</h3>
                        <div className="rating_div"><img src='/rating.png' className='rating' /></div>
                        <p className='product_second_p'>By <a href="" className='product_anchors'>Mr.Food</a></p>
                        <div className='product_footer'>
                            <span className='product_price'>$2</span>
                            <del className='del'>$3.99</del>
                            <button className='product_add_button'><img src="/add.png" alt="" />Add</button>
                        </div>
                    </div>
                    <div className='product_divs2'>
                        <img width={214} src="/potatos.png" alt="" />
                        <p className='vegetables'>Vegetabels</p>
                        <h3 className='product_first_p redish'>Potatos 1kg</h3>
                        <div className="rating_div"><img src='/rating.png' className='rating' /></div>
                        <p className='product_second_p'>By <a href="" className='product_anchors'>Mr.Food</a></p>
                        <div className='product_footer'>
                            <span className='product_price'>$1</span>
                            <del className='del'>$1.99</del>
                            <button className='product_add_button'><img src="/add.png" alt="" />Add</button>
                        </div>
                    </div>
                    <div className='product_divs2'>
                        <img width={214} src="/tomatos.png" alt="" />
                        <p className='vegetables'>Vegetables</p>
                        <h3 className='product_first_p redish'>Tomatos 200g</h3>
                        <div className="rating_div"><img src='/rating.png' className='rating' /></div>
                        <p className='product_second_p'>By <a href="" className='product_anchors'>Mr.Food</a></p>
                        <div className='product_footer'>
                            <span className='product_price'>$0.30</span>
                            <del className='del'>$0.99</del>
                            <button className='product_add_button'><img src="/add.png" alt="" />Add</button>
                        </div>
                    </div>
                    <div className='product_divs2'>
                        <img width={214} src="/broccoli.png" alt="" />
                        <p className='vegetables'>Vegetables</p>
                        <h3 className='product_first_p redish'>Broccoli 1kg</h3>
                        <div className="rating_div"><img src='/rating.png' className='rating' /></div>
                        <p className='product_second_p'>By <a href="" className='product_anchors'>Mr.Food</a></p>
                        <div className='product_footer'>
                            <span className='product_price'>$1.50</span>
                            <del className='del'>$2.99</del>
                            <button className='product_add_button'><img src="/add.png" alt="" />Add</button>
                        </div>
                    </div>
                    <div className='product_divs2'>
                        <img width={214} src="/beans.png" alt="" />
                        <p className='vegetables'>Vegetables</p>
                        <h3 className='product_first_p redish'>Green Beans 250g</h3>
                        <div className="rating_div"><img src='/rating.png' className='rating' /></div>
                        <p className='product_second_p'>By <a href="" className='product_anchors'>Mr.Food</a></p>
                        <div className='product_footer'>
                            <span className='product_price'>$1</span>
                            <del className='del'>$1.99</del>
                            <button className='product_add_button'><img src="/add.png" alt="" />Add</button>
                        </div>
                    </div>
                    <img src="/right.png" alt="" />
                </div>
            </section>

            <section className="main_section3">
                <img width={630} className='section3_first_image' src="first_image.png" alt="" />
                <div className="section3_div1">
                    <div className='section3_insider_divs'>
                        <span className='free_delivery'>Free delivery</span>
                        <h1 className='image_h1'>Free delivery over $50 </h1>
                        <p className='image_text'>Shop $50 product and get free <br /> delivery anywhre.</p>
                        <button className='order_now_btn'>Shop now <img src="/left_arrow.png" alt="" /></button>
                    </div>
                </div>
                <div className="section3_div2">
                    <img width={630} className='section3_second_image' src="second_image.png" alt="" />
                    <div className='section3_insider_divs'>
                        <span className='sixty_off'>60% off</span>
                        <h1 className='image_h1'>Organic Food</h1>
                        <p className='image_text'>Save up to 60% off on your <br /> first order</p>
                        <button className='order_now_btn'>Shop now <img src="/left_arrow.png" alt="" /></button>
                    </div>
                </div>
            </section>

            <section className="main_section4" id='section4'>
                <div className='section4_header'>
                    <h1 className='daily_best_sells'>Daily Best Sells</h1>
                    <div className="anchors_div2">
                        <p className='header_anchors'>Featured</p>
                        <p className='header_anchors'>Popular</p>
                        <p className='header_anchors'>New</p>
                    </div>
                    <p className='express_in'>Expries in:  <span className='time'>10 : 56 : 21</span></p>
                    <div className='scroll_icons'>
                        <img src="/left.png" alt="" />
                        <img src="/right.png" alt="" />
                    </div>
                </div>

                <div className="main4_products">
                    <div className='product_divs3'>
                        <p className='saver'>Save 10%</p>
                        <img width={214} src="/coffee.png" alt="" />
                        <p className='vegetables'>Coffe & Teas</p>
                        <h3 className='product_first_p redish'>Coffe 1kg</h3>
                        <div className="rating_div"><Rating className='rating' />(4)</div>
                        <p className='product_second_p'>By <a href="" className='product_anchors'>Mr.Food</a></p>
                        <div className='product_footer2'>
                            <span className='product_price'>$20</span>
                            <del className='del2'>$25</del>
                        </div>
                        <img className='proggress_bar' src="/proggress_bar1.png" alt="" />
                        <p className='sold_p'>Sold: 20/50</p>
                        <button className='add_to_cart_button'><img width={14} src="/add2.png" alt="" />Add to cart</button>
                    </div>


                    <div className='product_divs3'>
                        <p className='saver' style={{ backgroundColor: '#DEF9EC', color: '#3BB77E' }}>Best deal</p>
                        <img width={214} src="/halal_sausage.png" alt="" />
                        <p className='vegetables'>Meat</p>
                        <h3 className='product_first_p redish'>Halal Sausage 350g</h3>
                        <div className="rating_div"><Rating className='rating' />(4)</div>
                        <p className='product_second_p'>By <a href="" className='product_anchors'>Mr.Food</a></p>
                        <div className='product_footer2'>
                            <span className='product_price'>$4</span>
                            <del className='del2'>$10</del>
                        </div>
                        <img className='proggress_bar' src="/proggress_bar2.png" alt="" />
                        <p className='sold_p'>Sold: 7/20</p>
                        <button className='add_to_cart_button'><img width={14} src="/add2.png" alt="" />Add to cart</button>
                    </div>


                    <div className='product_divs3'>
                        <p className='saver'>Save 4%</p>
                        <img width={214} src="/tea.png" alt="" />
                        <p className='vegetables'>Coffe & Teas</p>
                        <h3 className='product_first_p redish'>Green Tea 250g</h3>
                        <div className="rating_div"><Rating className='rating' />(4)</div>
                        <p className='product_second_p'>By <a href="" className='product_anchors'>Mr.Food</a></p>
                        <div className='product_footer2'>
                            <span className='product_price'>$3</span>
                            <del className='del2'>$7</del>
                        </div>
                        <img className='proggress_bar' src="/proggress_bar3.png" alt="" />
                        <p className='sold_p'>Sold: 32/50</p>
                        <button className='add_to_cart_button'><img width={14} src="/add2.png" alt="" />Add to cart</button>
                    </div>


                    <div className='product_divs3'>
                        <p className='saver'>Save 8%</p>
                        <img width={214} src="/onions.png" alt="" />
                        <p className='vegetables'>Vegetables</p>
                        <h3 className='product_first_p redish'>Onion 1kg</h3>
                        <div className="rating_div"><Rating className='rating' />(4)</div>
                        <p className='product_second_p'>By <a href="" className='product_anchors'>Mr.Food</a></p>
                        <div className='product_footer2'>
                            <span className='product_price'>$0.50</span>
                            <del className='del2'>$2</del>
                        </div>
                        <img className='proggress_bar' src="/proggress_bar4.png" alt="" />
                        <p className='sold_p'>Sold: 2/10</p>
                        <button className='add_to_cart_button'><img width={14} src="/add2.png" alt="" />Add to cart</button>
                    </div>


                    <div className="product3_divs">
                        <img width={245} height={358} className='form_background' src="/form_background2.png" alt="" />
                        <h1 className='off'>10% OFF</h1>
                        <p className='product3_p'><span>For new member sign up at</span><span>the first time</span></p>
                        <label className='product3_label'>Email address*
                            <div className='form_divs'>
                                <img src="/li_mail.png" alt="" />
                                <input className='product3_inputs' type="email" placeholder='johndoe@gmail.com' />
                            </div>
                        </label>
                        <label>Password*
                            <div className='form_divs'>
                                <img src="/li_key.png" alt="" />
                                <input className='product3_inputs' type="password" placeholder='Maximum 8 characters' />
                            </div>
                        </label>
                        <button className='register_now_button'>Register Now</button>
                    </div>
                </div>
            </section>


            <section id='section5' className="main_section5">
                <section className='insider_sections'>
                    <h1 className='h1'>Top Sells</h1>
                    <img className='border_line' src="/border_line.png" alt="" />
                    <div className='first_div'>
                        <img style={{ backgroundColor: '#F4F6FA', padding: '12px' }} src="/apelsin.png" alt="" />
                        <div className='second_div'>
                            <h3 className='h3'>Orange 1kg</h3>
                            <img className='rating' src="/rating.png" alt="" />
                            <p className='price_p'>
                                <span className='product_price'>$2</span>
                                <del className='del2'>$3.99</del>
                            </p>
                        </div>
                    </div>

                    <div className='first_div'>
                        <img style={{ backgroundColor: '#F4F6FA', padding: '12px' }} src="/kokat.png" alt="" />
                        <div className='second_div'>
                            <h3 className='h3'>Orange 1kg</h3>
                            <img className='rating' src="/rating.png" alt="" />
                            <p className='price_p'>
                                <span className='product_price'>$2</span>
                                <del className='del2'>$3.99</del>
                            </p>
                        </div>
                    </div>

                    <div className='first_div'>
                        <img style={{ backgroundColor: '#F4F6FA', padding: '12px' }} src="/qulupnay.png" alt="" />
                        <div className='second_div'>
                            <h3 className='h3'>Orange 1kg</h3>
                            <img className='rating' src="/rating.png" alt="" />
                            <p className='price_p'>
                                <span className='product_price'>$2</span>
                                <del className='del2'>$3.99</del>
                            </p>
                        </div>
                    </div>
                </section>


                <section className='insider_sections'>
                    <h1 className='h1'>Top Rated</h1>
                    <img className='border_line' src="/border_line.png" alt="" />
                    <div className='first_div'>
                        <img style={{ backgroundColor: '#F4F6FA', padding: '12px' }} src="/xurmo.png" alt="" />
                        <div className='second_div'>
                            <h3 className='h3'>Orange 1kg</h3>
                            <img className='rating' src="/rating.png" alt="" />
                            <p className='price_p'>
                                <span className='product_price'>$2</span>
                                <del className='del2'>$3.99</del>
                            </p>
                        </div>
                    </div>

                    <div className='first_div'>
                        <img style={{ backgroundColor: '#F4F6FA', padding: '12px' }} src="/kokat.png" alt="" />
                        <div className='second_div'>
                            <h3 className='h3'>Orange 1kg</h3>
                            <img className='rating' src="/rating.png" alt="" />
                            <p className='price_p'>
                                <span className='product_price'>$2</span>
                                <del className='del2'>$3.99</del>
                            </p>
                        </div>
                    </div>

                    <div className='first_div'>
                        <img style={{ backgroundColor: '#F4F6FA', padding: '12px' }} src="/olma.png" alt="" />
                        <div className='second_div'>
                            <h3 className='h3'>Orange 1kg</h3>
                            <img className='rating' src="/rating.png" alt="" />
                            <p className='price_p'>
                                <span className='product_price'>$2</span>
                                <del className='del2'>$3.99</del>
                            </p>
                        </div>
                    </div>
                </section>


                <section className='insider_sections'>
                    <h1 className='h1'>Trending Items</h1>
                    <img className='border_line' src="/border_line.png" alt="" />
                    <div className='first_div'>
                        <img style={{ backgroundColor: '#F4F6FA', padding: '12px' }} src="/sabzi.png" alt="" />
                        <div className='second_div'>
                            <h3 className='h3'>Orange 1kg</h3>
                            <img className='rating' src="/rating.png" alt="" />
                            <p className='price_p'>
                                <span className='product_price'>$2</span>
                                <del className='del2'>$3.99</del>
                            </p>
                        </div>
                    </div>

                    <div className='first_div'>
                        <img width={100} style={{ backgroundColor: '#F4F6FA', padding: '12px' }} src="/potato.png" alt="" />
                        <div className='second_div'>
                            <h3 className='h3'>Orange 1kg</h3>
                            <img className='rating' src="/rating.png" alt="" />
                            <p className='price_p'>
                                <span className='product_price'>$2</span>
                                <del className='del2'>$3.99</del>
                            </p>
                        </div>
                    </div>

                    <div className='first_div'>
                        <img style={{ backgroundColor: '#F4F6FA', padding: '12px' }} src="/apelsin.png" alt="" />
                        <div className='second_div'>
                            <h3 className='h3'>Orange 1kg</h3>
                            <img className='rating' src="/rating.png" alt="" />
                            <p className='price_p'>
                                <span className='product_price'>$2</span>
                                <del className='del2'>$3.99</del>
                            </p>
                        </div>
                    </div>
                </section>


                <section className='insider_sections'>
                    <h1 className='h1'>Recently Added</h1>
                    <img className='border_line' src="/border_line.png" alt="" />
                    <div className='first_div'>
                        <img style={{ backgroundColor: '#F4F6FA', padding: '12px' }} src="/olma.png" alt="" />
                        <div className='second_div'>
                            <h3 className='h3'>Orange 1kg</h3>
                            <img className='rating' src="/rating.png" alt="" />
                            <p className='price_p'>
                                <span className='product_price'>$2</span>
                                <del className='del2'>$3.99</del>
                            </p>
                        </div>
                    </div>

                    <div className='first_div'>
                        <img style={{ backgroundColor: '#F4F6FA', padding: '12px' }} src="/sabzi.png" alt="" />
                        <div className='second_div'>
                            <h3 className='h3'>Orange 1kg</h3>
                            <img className='rating' src="/rating.png" alt="" />
                            <p className='price_p'>
                                <span className='product_price'>$2</span>
                                <del className='del2'>$3.99</del>
                            </p>
                        </div>
                    </div>

                    <div className='first_div'>
                        <img style={{ backgroundColor: '#F4F6FA', padding: '12px' }} src="/qulupnay.png" alt="" />
                        <div className='second_div'>
                            <h3 className='h3'>Orange 1kg</h3>
                            <img className='rating' src="/rating.png" alt="" />
                            <p className='price_p'>
                                <span className='product_price'>$2</span>
                                <del className='del2'>$3.99</del>
                            </p>
                        </div>
                    </div>
                </section>
            </section>
            <img style={{ marginTop: '107px' }} width={1520} src="/section6.png" alt="" />
        </div>
    )
}