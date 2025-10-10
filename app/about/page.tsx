import React from 'react'

const page = () => {
    const html = `
    
    <main>
    <!-- Breadcrumb area start  -->
    <div class="breadcrumb__area_custom header__background-color breadcrumb__header-up breadcrumb-space overly overflow-hidden">
        <div class="breadcrumb__background" ></div>
        <div class="container">
            <div class="breadcrumb__bg-left"></div>
            <div class="breadcrumb__bg-right"></div>
            <div class="row align-items-center justify-content-between">
                <div class="col-12">
                    <div class="breadcrumb__content text-center">
                        <h3 class="breadcrumb__title mb-15 mb-sm-10 mb-xs-5 color-white title-animation">We make your<br/> dream come true.</h3>
                        <blockquote class="blockquote">
                        "WE ARE SHARPENING OUR STRATEGY TO BE ONE OF THE MOST VALUABLE, MOST INNOVATIVE AND MOST ADMIRED COMPANIES"
                        </blockquote>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb area start  -->

    <!-- "about-company area start -->
    <section class="about-company section-space">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="about-company__media">
                        <div class="about-company__shape-left rr-upDown">
                            <img src="./assets/imgs/about-company/shape.png" alt="image not found">
                        </div>
                        <div class="about-company__shape-top rr-zooming">
                            <img src="./assets/imgs/about-company/circle.png" alt="image not found">
                        </div>
                        <div class="about-company__thumb-1 wow clip-a-z">
                            <img src="/assets/13.jpg" alt="image not found">
                        </div>
                        <div class="about-company__thumb-2 wow clip-a-z">
                            <img src="/logo.jpeg" alt="image not found">
                        </div>

                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="about-company__content">

                        <div class="section__title-wrapper mb-50 mb-xs-35">
                            <h2 class="section__title f-new mb-25">WHO WE ARE</h2>
                            <p class="mb-0">The Company is founded by two architects with a cumulative experience in the industry of over two decades. Focused on building quality housing projects in line with global standards, their shared love for creating stellar living experiences, coupled with mindful design, material planning,delivery and execution expertise, driven by the core belief that a
home needs to be a space for people to thrive and grow 
<br/><br/>
Future proof planning, combined with the usage of high quality materials ensures long term, sustainable homes that offer a phenomenal peace of mind and most importantly, a space that you can proudly call home 
</p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </section>

<div
  style="
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    padding: 10px 20px;
    margin: 50px auto;
    width: fit-content;
    height: 100px; /* optional: only needed if you want visible vertical centering within a taller box */
    text-align: center;
  "
>
  <p class="f-new" style="margin: 0;">READ FOUNDER'S LETTER</p>
</div>




<div class="flexTest">
  <div class="image-div">
    <img src="/assets/21.jpg" alt="image not found" />
  </div>

  <div class="text-div">
    <p class="mb-0">
      With the Blessings of His.Holiness Dr. Syedna Mufaddal Saifuddin (T.U.S), 
We have embarked on another decade of design excellence and we remain committed to pushing boundaries and redefining the art of Real Estate driven by Architecture.

    </p>
    <br /><br />
    <p class="mb-0">
      With a portfolio that speaks volumes, we strive  to inspire and captivate with our designs. Whether it's a sleek urban loft or a cozy countryside retreat, From residential retreats to commercial showcases, we have left an indelible mark on every project we have undertaken. 
<br/>
Our style elevates every space to new heights of elegance and sophistication.

    </p>
  </div>
</div>

<div class="flexTest">
  <div class="text-div">
    <p class="mb-0">
      Throughout the years through hard work and experience, we have garnered a reputation for our innovative approach and impeccable taste. 
<br/><br/>
What sets us apart is our ability to seamlessly blend aesthetics with functionality, creating spaces that are as beautiful as they are practical. The keen understanding of design principles, coupled with a deep appreciation for our Clients' vision, we ensure that each project is a true reflection of individual style and personality.

    </p>
    <br /><br />
    <p class="mb-0">
      Join us on a journey of innovation and inspiration, and experience first hand the transformative power of exceptional design.
    </p>
  </div>

  <div class="image-div">
    <img src="/assets/22.jpg" alt="image not found" />
  </div>
</div>


       

    


    </main>
    `
    return (
        <div dangerouslySetInnerHTML={{ __html: html }} className='body-1'>

        </div>
    )
}

export default page
