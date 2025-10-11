import ImageGallery from '@/components/Images';
import ImageGallery2 from '@/components/Images2';
import { getImagesFromFolder } from '@/lib/getImagesFromFolder';
import React from 'react'

export const metadata = {
    title: 'Villa 54 | Highfield Ventures',
    description: 'Highfield Ventures - Villa 84 Project',
    openGraph: {
        title: 'Villa 84 | Highfield Ventures',
        description: 'Highfield Ventures - Villa 84 Project',
        url: 'https://highfieldventures.com/c/villa-84',
        siteName: 'VILLA 84 | Highfield Ventures',
        images: [
            {
                url: 'https://highfieldventures.com/villa-84/1.jpg',
                alt: 'Villa 84 Image 1',
            },
            {
                url: 'https://highfieldventures.com/villa-84/2.jpg',
                alt: 'Villa 84 Image 2',
            },
        ],
    },
}

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
                        <h3 class="breadcrumb__title mb-15 mb-sm-10 mb-xs-5 color-white title-animation">VILLA 84</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb area start  -->


    </main>
    `
const folder = "villa-84"; // ✅ no leading slash
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
