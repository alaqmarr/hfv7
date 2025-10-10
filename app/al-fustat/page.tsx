import ImageGallery from '@/components/Images';
import ImageGallery2 from '@/components/Images2';
import { getImagesFromFolder } from '@/lib/getImagesFromFolder';
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
                        <h3 class="breadcrumb__title mb-15 mb-sm-10 mb-xs-5 color-white title-animation">AL FUSTAT</h3>
                        <blockquote class="blockquote">
                        Serene Heaven of Branded Living.
                        </blockquote>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb area start  -->


    </main>
    `
const folder = "al-fustat"; // ✅ no leading slash
const images = getImagesFromFolder(folder);


    const pdfUrl = "https://firebasestorage.googleapis.com/v0/b/radiant-power-tools.appspot.com/o/AL%20FUSTAT.pdf?alt=media&token=498ad22b-7d7c-4bee-9f61-2e222e6db946"; // Path to your PDF file in the public folder
    return (
        <>
        <div dangerouslySetInnerHTML={{ __html: html }} className='body-1'>

        </div>
        <ImageGallery2 images={images} />
        </>
    )
}

export default page
