import React from 'react'

import { upcomingProjects } from '@/lib/projects'
const page = () => {
    const html = `
    <main>
    <!-- Breadcrumb area start  -->
    <div class="breadcrumb__area_custom header__background-color breadcrumb__header-up breadcrumb-space overly overflow-hidden">
        <div class="breadcrumb__background"></div>
        <div class="container">
            <div class="breadcrumb__bg-left"></div>
            <div class="breadcrumb__bg-right"></div>
            <div class="row align-items-center justify-content-between">
                <div class="col-12">
                    <div class="breadcrumb__content text-center">
                        <h2 class="breadcrumb__title mb-15 mb-sm-10 mb-xs-5 color-white title-animation">Contact Us</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb area start  -->

    <!-- "error  area start -->
    <section class="contact-us section-space">
        <div class="container">
            <div class="row mb-minus-30">
                <div class="col-md-6 col-lg-4">
                    <div class="contact-us__info-item">
                        <div class="contact-us__icon">
                            <img src="./assets/imgs/contact-us/location.svg" alt="image not found">
                        </div>
                        <div class="contact-us__text">
                            <h6>Head Office</h6>
                            <a href="#">Plot no 28, Burhani Housing Society, Secunderabad - 500015</a>
                        </div>
                        <div class="contact-us__text">
                            <h6>Branch Office</h6>
                            <a href="#">Sterling Apartments, Distillery Road, Ranigunj, Secunderabad - 500003</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="contact-us__info-item">
                        <div class="contact-us__icon">
                            <img src="./assets/imgs/contact-us/email.svg" alt="image not found">
                        </div>
                        <div class="contact-us__text">
                            <h6>Email Address</h6>
                            <a href="mailto:highfieldventuresllp@gmail.com">highfieldventuresllp@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="contact-us__info-item">
                        <div class="contact-us__icon">
                            <img src="./assets/imgs/contact-us/phone.svg" alt="image not found">
                        </div>
                        <div class="contact-us__text">
                            <h6>Phone number</h6>
                            <a href="tel:+919703699852">+91 97036 99852</a>
                            <a href="tel:+919030020352">+91 90300 20352</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- "error  area end -->

    <section class="contact section-space__bottom">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="contact__from">
                        <h4 class="title-animation mb-10">Schedule a project visit</h4>
                        <p>Select layout follower boolean editor flows. Scrolling variant move font group variant layout device share.</p>
                        <div class="row">
                            <div class="col-xl-6">
                                <div class="contact__form-input">
                                    <input name="name" id="lname" type="text" placeholder="Name">
                                </div>
                            </div>
                            <div class="col-xl-6">
                                <div class="contact__form-input">
                                    <input name="email" id="email" type="email" placeholder="Email">
                                </div>
                            </div>

                            <div class="col-xl-6">
                                <div class="contact__form-input">
                                    <input name="number" id="number" type="number" placeholder="Phone">
                                </div>
                            </div>

                            <div class="col-xl-6">
                                <div class="contact__form-input-select d-flex flex-column">
                                    <select name="project" id="project">
                                        <option value="none">Select Project</option>
                                        ${upcomingProjects.map((project) => (
                                            `<option value="${project.name}">${project.name}</option>`
                                        )).join('')}
                                    </select>
                                </div>
                            </div>


                            <div class="col-12">
                                <button type="submit" class="rr-btn">
                                        <span class="btn-wrap">
                                            <span class="text-one">Make An Order
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 6H11" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M6 1L11 6L6 11" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </span>
                                            <span class="text-two">Make An Order
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 6H11" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M6 1L11 6L6 11" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </span>
                                        </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="map">
                        <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d294.2181219377665!2d78.4973835687982!3d17.475475530074974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a8aa41ec2ed%3A0xcd0f4b3237856a72!2s28%2C%20Lalamiya%20Basti%2C%20Burhani%20Housing%20Colony%2C%20RTC%20Officers%20Colony%2C%20Tirumalagiri%2C%20Hyderabad%2C%20Secunderabad%2C%20Telangana%20500015!5e0!3m2!1sen!2sin!4v1760165028128!5m2!1sen!2sin" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>

        <!-- brand area start -->
        <section class="brand section-space__bottom has--transparent">
            <div class="container">
                <div class="slider-brand">
                    <div class="container">
                        <div class="rr-scroller" data-speed="slow">
                            <ul class="text-anim rr-scroller__inner">
                                <li><a href="#"><img src="./assets/imgs/brand-2/brand-1.png" alt="image not found"></a></li>
                                <li><a href="#"><img src="./assets/imgs/brand-2/brand-2.png" alt="image not found"></a></li>
                                <li><a href="#"><img src="./assets/imgs/brand-2/brand-4.png" alt="image not found"></a></li>
                                <li><a href="#"><img src="./assets/imgs/brand-2/brand-1.png" alt="image not found"></a></li>
                                <li><a href="#"><img src="./assets/imgs/brand-2/brand-2.png" alt="image not found"></a></li>
                                <li><a href="#"><img src="./assets/imgs/brand-2/brand-4.png" alt="image not found"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- brand area end -->


</main>

`
  return (
    <div dangerouslySetInnerHTML={{ __html: html }} className='body-1'>
      
    </div>
  )
}

export default page
