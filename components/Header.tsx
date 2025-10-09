import React from 'react'

const Header = async () => {
    // const res = await fetch('https://highfieldventuresbackend.vercel.app/api/get/projects', {
    //     cache: 'no-store',
    //     method: 'GET',
    // });

    // const data = await res.json();
    // const projects = data.projects;
    const html = `
    <!-- Header area start -->
<header>
    <div id="header-sticky" class="header__area header-1">
        <div class="container">
            <div class="mega__menu-wrapper p-relative">
                <div class="header__main">
                    <div class="header__right">
                        <div class="header__action d-flex align-items-center">
                            <div class="header__hamburger">
                                <div class="sidebar__toggle">
                                    <a class="bar-icon" href="javascript:void(0)">
                                        <span></span>
                                        <span></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <
                    </div>
                    <div class="header__logo">
                        <a href="/">
                            <div class="logo">
                               <p class='color: bg-yellow-600;'>HIGHFIELD</p>
                            </div>
                        </a>
                    </div>

                    <div class="mean__menu-wrapper d-none d-lg-block">
                        <div class="main-menu">
                            <nav id="mobile-menu">
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/about">About us</a></li>
                                    <li class="has-dropdown">
                                        <a href="/">Projects</a>
                                        <ul class="submenu">
                                            
        }

                                        </ul>
                                    </li>
                                    <li><a href="/contact">Contact Us</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div class="header__right">
                        <div class="header__logo">
                        <a href="/">
                            <div class="logo">
                                <img src="/longlogo.png" alt="logo not found" style="width: 100px; height: auto; display:none;" />
                            </div>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

<!-- Backtotop start -->
<div id="scroll-percentage">
    <span id="scroll-percentage-value"></span>
</div>
<!-- Backtotop end -->

<!-- cursorAnimation start -->
<div class="cursor-wrapper relative">
    <div class="cursor"></div>
    <div class="cursor-follower"></div>
</div>
<!-- cursorAnimation end -->

<!-- Offcanvas area start -->
<div class="fix">
    <div class="offcanvas__area">
        <div class="offcanvas__wrapper">
            <div class="offcanvas__content">
                <div class="offcanvas__top d-flex justify-content-between align-items-center">
                    <div class="offcanvas__logo">
                        <a href="/">
                            <img src="/logo.jpeg" alt="logo not found">
                        </a>
                    </div>
                    <div class="offcanvas__close">
                        <button class="offcanvas-close-icon animation--flip">
                                <span class="offcanvas-m-lines">
                              <span class="offcanvas-m-line line--1"></span><span class="offcanvas-m-line line--2"></span><span class="offcanvas-m-line line--3"></span>
                                </span>
                        </button>
                    </div>
                </div>
                <div class="mobile-menu fix"></div>
                <div class="offcanvas__btn">
                    <div class="header__btn-wrap">
                        <a href="/contact" class="rr-btn__header d-sm-none mb-10 w-100">
                            <span class="btn-wrap">
                                <span class="text-one">Get In Touch</span>
                                <span class="text-two">Get In Touch</span>
                            </span>
                        </a>
                        <a href="/contact" class="rr-btn__header w-100">
                            <span class="btn-wrap">
                                <span class="text-one">Contact Us</span>
                                <span class="text-two">Contact Us</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="offcanvas__overlay"></div>
<div class="offcanvas__overlay-white"></div>
<!-- Offcanvas area start -->
<!-- Header area end -->
    `
    return (
        <div dangerouslySetInnerHTML={{ __html: html }}>

        </div>
    )
}

export default Header
