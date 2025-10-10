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
                            <h2 class="footer-2-cta__content-title color-white">Invest with us.</h2>
                        </div>
                    </div>
                    <div class="col-lg-6 text-lg-end text-center">
                        <div class="footer-2__widget-btn">
                            <a href="/contact" class="rr-btn">
                                <span class="btn-wrap">
                                    <span class="text-one">Get In Touch
                                    </span>
                                    <span class="text-two">Get In Touch
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

                </div>
            </div>
        </div>
        <div class="footer-2__bottom">
            <div class="container">
                <div class="footer-2__bottom-wrapper">
                    <div class="footer-2__copyright text-lg-start text-center">
                        <p class="mb-0">Copyright © 2025<a href="/"><br/>HighField Ventures LLP.</a> Designed, Developed and powered by <a href="https://alaqmar.dev">The Web Sensei</a></p>
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
