import React from 'react'

const Footer = () => {
    const html = `
    <footer>
    <section class="footer-2__area-common footer-2-bg overflow-hidden">
        <div class="container">
            <div class="footer-2__top">
                <div class="row align-items-center">
                    <div class="col-lg-6 text-lg-start text-center rr-mb-40-md">
                        <div class="footer-2-cta__content-text">
                            <h2 class="footer-2-cta__content-title color-white">Start A New Project With Us.</h2>
                        </div>
                    </div>
                    <div class="col-lg-6 text-lg-end text-center">
                        <div class="footer-2__widget-btn">
                            <a href="#" class="rr-btn">
                                <span class="btn-wrap">
                                    <span class="text-one">Contact Us
                                        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 6.5H11" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M6 1.5L11 6.5L6 11.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                    <span class="text-two">Contact Us
                                        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 6.5H11" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M6 1.5L11 6.5L6 11.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-2__main-wrapper footer-2__bottom-border">
            <div class="container">
                <div class="footer-2__left-shape">
                    <img src="./assets/imgs/footer-2/left-shape.png" alt="image not found">
                </div>
                <div class="footer-2__right-shape">
                    <img src="./assets/imgs/footer-2/right-shape.png" alt="image not found">
                </div>
                <div class="row mb-minus-50">
                    <div class="col-lg-4 col-12">
                        <div class="footer-2__widget footer-2__widget-item-1">
                            <div class="footer-2__logo mb-15">
                                <a href="index.html">
                                    <img class="img-fluid" src="/logo.png" alt="logo not found">
                                </a>
                            </div>

                            <div class="footer-2__content mb-30 mb-xs-35">
                                <p class="mb-0">Leo site ultrices donec a volutpat penatibus mind suscipit faucibus and duis pharetra name sociosqu phasellus nunce accumsan</p>
                            </div>

                            <div class="footer-2__widget-subscribe ">
                                <input type="email" placeholder="Enter Email">
                                <button type="submit" class="rr-btn">
                                    <span class="btn-wrap">
                                        <span class="text-one">Subscribe Now
                                        </span>
                                        <span class="text-two">Subscribe Now
                                        </span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class=" col-sm-4 col-lg-2 col-6">
                        <div class="footer-2__widget footer-2__widget-item-2">
                            <div class="footer-2__widget-title">
                                <h6>Company</h6>
                            </div>
                            <div class="footer-2__company">
                                <ul>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Opportunity</a></li>
                                    <li><a href="#">Events</a></li>
                                    <li><a href="#">Consulting</a></li>
                                    <li><a href="#">Support</a></li>
                                    <li><a href="#">Privacy</a></li>
                                    <li><a href="#">Contents</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class=" col-sm-4 col-lg-3 col-6">
                        <div class="footer-2__widget footer-2__widget-item-4">
                            <div class="footer-2__widget-title">
                                <h6>Instagram</h6>
                            </div>

                           <div class="footer-2__gallery">
                                <a target="_blank" href="https://www.instagram.com/">
                                    <img src="assets/imgs/footer-2/instagram-1.png" alt="image not found">
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
    
                                <a target="_blank" href="https://www.instagram.com/">
                                    <img src="assets/imgs/footer-2/instagram-2.png" alt="image not found">
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
                                <a target="_blank" href="https://www.instagram.com/">
                                    <img src="assets/imgs/footer-2/instagram-3.png" alt="image not found">
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
                                <a target="_blank" href="https://www.instagram.com/">
                                    <img src="assets/imgs/footer-2/instagram-4.png" alt="image not found">
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-2__bottom">
            <div class="container">
                <div class="footer-2__bottom-wrapper">
                    <div class="footer-2__copyright text-lg-start text-center">
                        <p class="mb-0">Copyright © 2025 by  <a href="/">High Field Ventures.</a> Designed, Developed and powered by <a href="https://alaqmar.dev">The Web Sensei</a></p>
                    </div>
    
                    <div class="footer-2__social">
                        <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="https://twitter.com/"><i class="fa-brands fa-twitter"></i></a>
                        <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://bd.linkedin.com/"><i class="fa-brands fa-linkedin-in"></i></a>
                    </div>

                </div>
            </div>
        </div>
    </section>
</footer>
    `
  return (
    <div dangerouslySetInnerHTML={{ __html: html }}>
      
    </div>
  )
}

export default Footer
