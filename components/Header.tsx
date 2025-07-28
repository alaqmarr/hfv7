import React from 'react'

const Header = async () => {
    const res = await fetch('https://highfieldventuresbackend.vercel.app/api/get/projects', {
        cache: 'no-store',
        method: 'GET',
    });

    const data = await res.json();
    const projects = data.projects;
    const html = `
    <!-- Header area start -->
<header>
    <div id="header-sticky" class="header__area header-1">
        <div class="container">
            <div class="mega__menu-wrapper p-relative">
                <div class="header__main">
                    <div class="header__logo">
                        <a href="/">
                            <div class="logo">
                                <img src="/logo.png" alt="logo not found">
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
                                        <a href="/projects">Projects</a>
                                        <ul class="submenu">
                                            ${projects.map((project: any) => `
                                                <li>
                                                    <a href="/projects/${project.id}">
                                                        ${project.name}
                                                    </a>
                                                </li>
                                            `).join('')
        }

                                        </ul>
                                    </li>
                                    <li><a href="/contact">Contact Us</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

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
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
<!-- Header area end -->
    `
    return (
        <div dangerouslySetInnerHTML={{ __html: html }}>

        </div>
    )
}

export default Header
