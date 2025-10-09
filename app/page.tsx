import React from 'react'

const Home = () => {
    const html = `
  <body class="body-1">

<!--[if lte IE 9]>
<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
<![endif]-->




<main>

     <!-- Banner area start -->
     <section class="banner overflow-hidden">
        <div class="swiper banner__slider">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="banner__item banner__space ">
                        <div class="banner__item-bg" data-background="/assets/1.jpg"></div>
                        <div class="container">
                            <div class="banner__item__left-bg"></div>
                            <div class="banner__item__right-bg"></div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="banner__item-content">
                                        <div class="banner__item-wrapper">
                                            <h1 class="banner__item-title rr-fw-bold color-white">
                                                BUILDING BETTER <span>by DESIGN</span>
                                            </h1>
                                            <p class="des color-white mb-45 mb-md-30">Join our vision and be a part of our journey that resdefines living.</p>

                                            <a href="/about" class="rr-btn">
                                                <span class="btn-wrap">
                                                    <span class="text-one">About Us</span>
                                                    <span class="text-two">About Us</span>
                                                </span>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="banner__item banner__space ">
                        <div class="banner__item-bg" data-background="/assets/2.jpg"></div>
                        <div class="container">
                            <div class="banner__item__left-bg"></div>
                            <div class="banner__item__right-bg"></div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="banner__item-content">
                                        <div class="banner__item-wrapper">
                                            <h1 class="banner__item-title rr-fw-bold color-white">
                                                BUILDING BETTER <span>by DESIGN</span>
                                            </h1>
                                            <p class="des color-white mb-45 mb-md-30">Join our vision and be a part of our journey that resdefines living.</p>
    
                                            <a href="/about" class="rr-btn">
                                                <span class="btn-wrap">
                                                    <span class="text-one">About Us</span>
                                                    <span class="text-two">About Us</span>
                                                </span>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="banner__item banner__space ">
                        <div class="banner__item-bg" data-background="/assets/3.jpg"></div>
                        <div class="container">
                            <div class="banner__item__left-bg"></div>
                            <div class="banner__item__right-bg"></div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="banner__item-content">
                                        <div class="banner__item-wrapper">
                                            <h1 class="banner__item-title rr-fw-bold color-white">
                                                BUILDING BETTER <span>by DESIGN</span>
                                            </h1>
                                            <p class="des color-white mb-45 mb-md-30">Join our vision and be a part of our journey that resdefines living.</p>
    
                                            <a href="/about" class="rr-btn">
                                                <span class="btn-wrap">
                                                    <span class="text-one">About Us</span>
                                                    <span class="text-two">About Us</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="banner__bottom-wrapper">


                <div class="swiper-container gallery-thumbs">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img src="/assets/1.jpg" alt=""></div>
                        <div class="swiper-slide"><img src="/assets/2.jpg" alt=""></div>
                        <div class="swiper-slide"><img src="/assets/3.jpg" alt=""></div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <!-- Banner area end -->

    <!--about-us area start -->
    <section class="about-us section-space">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="about-us__media">
                        <img class="wow clip-a-z" src="/logo.jpeg" alt="image not found">


                        <div class="about-us__socail">
                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="about-us__content">
                        <div class="section__title-wrapper mb-45 mb-xs-40">
                            <p class="mb-0">Highfield Ventures is a Hyderabad based
Premium, Dependable, and Growth Oriented Real
Estate Development Company, focused on
delivering high quality living experiences,
financial gains, and growth prospects to its
customers, investors and owners.</p>
                        </div>

    
                        <a href="/about" class="rr-btn">
                            <span class="btn-wrap">
                                <span class="text-one">About Us
                                    
                                </span>
                                <span class="text-two">About Us 
                                    
                                </span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--about-us area end -->

    <!--what-we-do  area start -->
    <section class="what-we-do section-space__bottom">
        <div class="container">
            <div class="row">
                <div class="section__title-wrapper text-center mb-55 mb-xs-40">
                    <span class="section__subtitle justify-content-center">What We Do</span>
                </div>
            </div>

            <div class="what-we-do__wrapper">
                <div class="what-we-do__bg">
                    <img src="./assets/imgs/what-we-do/shape.png" alt="">
                </div>
                <div class="row">
                 <div class="col-xl-4 has--border has--border-1">
                    <div class="what-we-do__item has--padding">
                        <div class="what-we-do__item-icon">
                            <img src="./assets/imgs/what-we-do/what-we-do-6.svg" alt="image not found">
                        </div>
                        <div class="text">
                            <h6 class="what-we-do__item-title title-animation"><a href="/">Design Led Development, Built to Endure</a></h6>
                            <p class="what-we-do__item-desc">At Highfield Ventures, we redefine real estate through the lens of architectural excellence. As a development and construction firm founded and led by architects, we bring design intelligence to every phase of the built environment—from raw land to refined living.
</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 has--border has--border-2">
                    <div class="what-we-do__item has--padding-pb">
                        <div class="what-we-do__item-icon">
                            <img src="./assets/imgs/what-we-do/what-we-do-1.svg" alt="image not found">
                        </div>
                        <div class="text">
                            <h6 class="what-we-do__item-title title-animation"><a href="/">Premium Real Estate, Crafted with Vision
</a></h6>
                            <p class="what-we-do__item-desc">We specialize in premium real estate development, crafting spaces that balance aesthetic distinction with functional integrity. Our approach integrates strategic land acquisition, master planning, and design-led construction, ensuring every project is both visionary and viable.
</p>
                            
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 has--border has--border-3">
                    <div class="what-we-do__item has--padding-pb">
                        <div class="what-we-do__item-icon">
                            <img src="./assets/imgs/what-we-do/what-we-do-3.svg" alt="image not found">
                        </div>
                        <div class="text">
                            <h6 class="what-we-do__item-title title-animation"><a href="/">Proposals That Unlock Potential
</a></h6>
                            <p class="what-we-do__item-desc">Beyond development, we offer comprehensive real estate proposals tailored for investors, institutions, and landowners seeking to unlock value through thoughtful design and market insight. Our proposals are backed by deep feasibility analysis, zoning expertise, and architectural foresight.
</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 has--border has--border-4">
                    <div class="what-we-do__item has--padding">
                        <div class="what-we-do__item-icon">
                            <img src="./assets/imgs/what-we-do/what-we-do-5.svg" alt="image not found">
                        </div>
                        <div class="text">
                            <h6 class="what-we-do__item-title title-animation"><a href="/">Smart Capital Meets Design Intelligence
</a></h6>
                            <p class="what-we-do__item-desc">Through our investment management services, we align capital with opportunity—curating high-yield ventures that are grounded in design, sustainability, and long-term growth. Whether you're a home buyer, landowner, or investor, Highfield Ventures delivers spaces that perform—financially, functionally, and architecturally</p>
                            <a href="/" class="what-we-do__item-arrow">
                                Read More
                               <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 6H11" stroke="#767676" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6 1L11 6L6 11" stroke="#767676" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
    
                            </a>
                        </div>
                    </div>
                </div>
            
                </div>
            </div>
            </div>
        </div>
    </section>
    <!--what-we-do  area end -->


    <!-- experience start -->
    <section class="experience" data-background="./assets/imgs/experience/experience-bg.jpg"> 
        <div class="container">
            <div class="experience__item-wrapper">
                <div class="experience__item">
                    <div class="experience__item-content">
                        <div class="experience__item-content-icon">
                            <img src="./assets/imgs/experience/experience-1.svg" alt="image not found">
                        </div>
                        <div class="experience__item-content-text">
                            <h6 class="title-animation">Combined Years Of Experience</h6>
                            <h2><span class="odometer" data-count="15">32</span>+</h2>
                        </div>
                    </div>
                </div>

                <div class="experience__item">
                    <div class="experience__item-content">
                        <div class="experience__item-content-icon">
                            <img src="./assets/imgs/experience/experience-2.svg" alt="image not found">
                        </div>
                        <div class="experience__item-content-text">
                            <h6 class="title-animation">Successful Projects</h6>
                            <h2><span class="odometer" data-count="600">180</span>+</h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <!-- experience end -->

    








  
</main>
</body>
  `
    return (
        <div
            dangerouslySetInnerHTML={{ __html: html }}
        >

        </div>
    )
}

export default Home
