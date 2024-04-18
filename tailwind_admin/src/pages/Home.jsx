import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';
import { Popover,Transition } from '@headlessui/react';
import { ChevronDownIcon  } from '@heroicons/react/20/solid'
import Loader from '../assets/images/media/loader.svg';
import user1 from '../assets/images/faces/9.jpg';
import DesktopLogo from '../assets/images/brand-logos/desktop-logo.png';
import ToggleLogo from '../assets/images/brand-logos/toggle-logo.png';
import DarkLogo from '../assets/images/brand-logos/desktop-dark.png';
import ToggleDarkLogo from '../assets/images/brand-logos/toggle-dark.png';
import ToggleWhiteLogo from '../assets/images/brand-logos/toggle-white.png';
import DesktopWhiteLogo from '../assets/images/brand-logos/desktop-white.png';
import UsFlag from '../assets/images/flags/us_flag.jpg'
import FrechFlag from '../assets/images/flags/french_flag.jpg'
import GermanyFlag from '../assets/images/flags/germany_flag.jpg'
import jpg1 from '../assets/images/ecommerce/jpg/1.jpg';
import jpg2 from '../assets/images/ecommerce/jpg/2.jpg';
import jpg3 from '../assets/images/ecommerce/jpg/3.jpg';
import jpg4 from '../assets/images/ecommerce/jpg/4.jpg';
import jpg5 from '../assets/images/ecommerce/jpg/5.jpg';
import jpg6 from '../assets/images/ecommerce/jpg/6.jpg';
import png1 from '../assets/images/ecommerce/png/1.png';
import png2 from '../assets/images/ecommerce/png/2.png';
import png3 from '../assets/images/ecommerce/png/3.png';
import png4 from '../assets/images/ecommerce/png/4.png';
import png5 from '../assets/images/ecommerce/png/5.png';
import png6 from '../assets/images/ecommerce/png/6.png';
import png7 from '../assets/images/ecommerce/png/7.png';
import png8 from '../assets/images/ecommerce/png/8.png';
import png9 from '../assets/images/ecommerce/png/9.png';
import png10 from '../assets/images/ecommerce/png/10.png';
import png11 from '../assets/images/ecommerce/png/11.png';
import png12 from '../assets/images/ecommerce/png/12.png';
import png13 from '../assets/images/ecommerce/png/13.png';
import png14 from '../assets/images/ecommerce/png/14.png';
import png15 from '../assets/images/ecommerce/png/15.png';
import png35 from '../assets/images/ecommerce/png/35.png';
import png36 from '../assets/images/ecommerce/png/36.png';
import png37 from '../assets/images/ecommerce/png/37.png';
import png38 from '../assets/images/ecommerce/png/38.png';
import png39 from '../assets/images/ecommerce/png/39.png';
import png40 from '../assets/images/ecommerce/png/40.png';
import face2 from '../assets/images/faces/2.jpg';
import face3 from '../assets/images/faces/3.jpg';
import face4 from '../assets/images/faces/4.jpg';
import face5 from '../assets/images/faces/5.jpg';
import face6 from '../assets/images/faces/6.jpg';
import face7 from '../assets/images/faces/7.jpg';
import face10 from '../assets/images/faces/10.jpg';
import face12 from '../assets/images/faces/12.jpg';
import face13 from '../assets/images/faces/13.jpg';
import face14 from '../assets/images/faces/14.jpg';
import face15 from '../assets/images/faces/15.jpg';
import face16 from '../assets/images/faces/16.jpg';

const solutions = [
    {
      name: 'Insights',
      description: 'Measure actions your users take',
      href: '##',
    },
    
  ]
  


const Home = () => {
    return (
        <>
            <div id="hs-overlay-switcher" className="hs-overlay hidden ti-offcanvas ti-offcanvas-right" tabindex="-1">
                <div className="ti-offcanvas-header z-10 relative">
                    <h5 className="ti-offcanvas-title"> Switcher </h5> <button type="button"
                        className="ti-btn flex-shrink-0 p-0  transition-none text-defaulttextcolor dark:text-defaulttextcolor/70 hover:text-gray-700 focus:ring-gray-400 focus:ring-offset-white  dark:hover:text-white/80 dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                        data-hs-overlay="#hs-overlay-switcher"> <span className="sr-only">Close modal</span> <i
                            className="ri-close-circle-line leading-none text-lg"></i> </button>
                </div>
                <div className="ti-offcanvas-body !p-0 !border-b dark:border-white/10 z-10 relative !h-auto">
                    <div className="flex rtl:space-x-reverse" aria-label="Tabs" role="tablist"> <button type="button"
                        className="hs-tab-active:bg-success/20 w-full !py-2 !px-4 hs-tab-active:border-b-transparent text-defaultsize border-0 hs-tab-active:text-success dark:hs-tab-active:bg-success/20 dark:hs-tab-active:border-b-white/10 dark:hs-tab-active:text-success -mb-px bg-white font-semibold text-center  text-defaulttextcolor dark:text-defaulttextcolor/70 rounded-none hover:text-gray-700 dark:bg-bodybg dark:border-white/10  active"
                        id="switcher-item-1" data-hs-tab="#switcher-1" aria-controls="switcher-1" role="tab"> Theme Style
                    </button> <button type="button"
                        className="hs-tab-active:bg-success/20 w-full !py-2 !px-4 hs-tab-active:border-b-transparent text-defaultsize border-0 hs-tab-active:text-success dark:hs-tab-active:bg-success/20 dark:hs-tab-active:border-b-white/10 dark:hs-tab-active:text-success -mb-px  bg-white font-semibold text-center  text-defaulttextcolor dark:text-defaulttextcolor/70 rounded-none hover:text-gray-700 dark:bg-bodybg dark:border-white/10  dark:hover:text-gray-300"
                        id="switcher-item-2" data-hs-tab="#switcher-2" aria-controls="switcher-2" role="tab"> Theme Colors
                        </button> </div>
                </div>
                <div className="ti-offcanvas-body" id="switcher-body">
                    <div id="switcher-1" role="tabpanel" aria-labelledby="switcher-item-1" className="">
                        <div className="">
                            <p className="switcher-style-head">Theme Color Mode:</p>
                            <div className="grid grid-cols-3 switcher-style">
                                <div className="flex items-center"> <input type="radio" name="theme-style" className="ti-form-radio"
                                    id="switcher-light-theme" checked="" /> <label for="switcher-light-theme"
                                        className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Light</label>
                                </div>
                                <div className="flex items-center"> <input type="radio" name="theme-style" className="ti-form-radio"
                                    id="switcher-dark-theme" /> <label for="switcher-dark-theme"
                                        className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Dark</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="switcher-style-head">Directions:</p>
                            <div className="grid grid-cols-3  switcher-style">
                                <div className="flex items-center"> <input type="radio" name="direction" className="ti-form-radio"
                                    id="switcher-ltr" checked="" /> <label for="switcher-ltr"
                                        className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">LTR</label>
                                </div>
                                <div className="flex items-center"> <input type="radio" name="direction" className="ti-form-radio"
                                    id="switcher-rtl" /> <label for="switcher-rtl"
                                        className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">RTL</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="switcher-style-head">Navigation Styles:</p>
                            <div className="grid grid-cols-3  switcher-style">
                                <div className="flex items-center"> <input type="radio" name="navigation-style"
                                    className="ti-form-radio" id="switcher-vertical" checked="" /> <label for="switcher-vertical"
                                        className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Vertical</label>
                                </div>
                                <div className="flex items-center"> <input type="radio" name="navigation-style"
                                    className="ti-form-radio" id="switcher-horizontal" /> <label for="switcher-horizontal"
                                        className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Horizontal</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="switcher-style-head">Navigation Menu Style:</p>
                            <div className="grid grid-cols-2 gap-2 switcher-style">
                                <div className="flex"> <input type="radio" name="navigation-data-menu-styles" className="ti-form-radio"
                                    id="switcher-menu-click" checked="" /> <label for="switcher-menu-click"
                                        className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Menu
                                        Click</label> </div>
                                <div className="flex"> <input type="radio" name="navigation-data-menu-styles" className="ti-form-radio"
                                    id="switcher-menu-hover" /> <label for="switcher-menu-hover"
                                        className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Menu
                                        Hover</label> </div>
                                <div className="flex"> <input type="radio" name="navigation-data-menu-styles" className="ti-form-radio"
                                    id="switcher-icon-click" /> <label for="switcher-icon-click"
                                        className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Icon
                                        Click</label> </div>
                                <div className="flex"> <input type="radio" name="navigation-data-menu-styles" className="ti-form-radio"
                                    id="switcher-icon-hover" /> <label for="switcher-icon-hover"
                                        className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Icon
                                        Hover</label> </div>
                            </div>
                            <div className="px-4 text-secondary text-xs"><b className="me-2">Note:</b>Works same for both Vertical and
                                Horizontal </div>
                        </div>
                        <div className=" sidemenu-layout-styles">
                            <p className="switcher-style-head">Sidemenu Layout Syles:</p>
                            <div className="grid grid-cols-2 gap-2 switcher-style">
                                <div className="flex"> <input type="radio" name="sidemenu-layout-styles" className="ti-form-radio"
                                    id="switcher-default-menu" checked="" /> <label for="switcher-default-menu"
                                        className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold ">Default
                                        Menu</label> </div>
                                <div className="flex"> <input type="radio" name="sidemenu-layout-styles" className="ti-form-radio"
                                    id="switcher-closed-menu" /> <label for="switcher-closed-menu"
                                        className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold ">
                                        Closed Menu</label> </div>
                                <div className="flex"> <input type="radio" name="sidemenu-layout-styles" className="ti-form-radio"
                                    id="switcher-icontext-menu" /> <label for="switcher-icontext-menu"
                                        className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold ">Icon
                                        Text</label> </div>
                                <div className="flex"> <input type="radio" name="sidemenu-layout-styles" className="ti-form-radio"
                                    id="switcher-icon-overlay" /> <label for="switcher-icon-overlay"
                                        className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold ">Icon
                                        Overlay</label> </div>
                                <div className="flex"> <input type="radio" name="sidemenu-layout-styles" className="ti-form-radio"
                                    id="switcher-detached" /> <label for="switcher-detached"
                                        className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold ">Detached</label>
                                </div>
                                <div className="flex"> <input type="radio" name="sidemenu-layout-styles" className="ti-form-radio"
                                    id="switcher-double-menu" /> <label for="switcher-double-menu"
                                        className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Double
                                        Menu</label> </div>
                            </div>
                            <div className="px-4 text-secondary text-xs"><b className="me-2">Note:</b>Navigation menu styles won't work
                                here.</div>
                        </div>
                        <div>
                            <p className="switcher-style-head">Page Styles:</p>
                            <div className="grid grid-cols-3  switcher-style">
                                <div className="flex"> <input type="radio" name="data-page-styles" className="ti-form-radio"
                                    id="switcher-regular" checked="" /> <label for="switcher-regular"
                                        className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Regular</label>
                                </div>
                                <div className="flex"> <input type="radio" name="data-page-styles" className="ti-form-radio"
                                    id="switcher-classNameic" /> <label for="switcher-classNameic"
                                        className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">classNameic</label>
                                </div>
                                <div className="flex"> <input type="radio" name="data-page-styles" className="ti-form-radio"
                                    id="switcher-modern" /> <label for="switcher-modern"
                                        className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">
                                        Modern</label> </div>
                            </div>
                        </div>
                        <div>
                            <p className="switcher-style-head">Layout Width Styles:</p>
                            <div className="grid grid-cols-3 switcher-style">
                                <div className="flex"> <input type="radio" name="layout-width" className="ti-form-radio"
                                    id="switcher-full-width" checked="" /> <label for="switcher-full-width"
                                        className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">FullWidth</label>
                                </div>
                                <div className="flex"> <input type="radio" name="layout-width" className="ti-form-radio"
                                    id="switcher-boxed" /> <label for="switcher-boxed"
                                        className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Boxed</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="switcher-style-head">Menu Positions:</p>
                            <div className="grid grid-cols-3  switcher-style">
                                <div className="flex"> <input type="radio" name="data-menu-positions" className="ti-form-radio"
                                    id="switcher-menu-fixed" checked="" /> <label for="switcher-menu-fixed"
                                        className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Fixed</label>
                                </div>
                                <div className="flex"> <input type="radio" name="data-menu-positions" className="ti-form-radio"
                                    id="switcher-menu-scroll" /> <label for="switcher-menu-scroll"
                                        className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Scrollable
                                    </label> </div>
                            </div>
                        </div>
                        <div>
                            <p className="switcher-style-head">Header Positions:</p>
                            <div className="grid grid-cols-3 switcher-style">
                                <div className="flex"> <input type="radio" name="data-header-positions" className="ti-form-radio"
                                    id="switcher-header-fixed" checked="" /> <label for="switcher-header-fixed"
                                        className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">
                                        Fixed</label> </div>
                                <div className="flex"> <input type="radio" name="data-header-positions" className="ti-form-radio"
                                    id="switcher-header-scroll" /> <label for="switcher-header-scroll"
                                        className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Scrollable
                                    </label> </div>
                            </div>
                        </div>
                        <div className="">
                            <p className="switcher-style-head">Loader:</p>
                            <div className="grid grid-cols-3 switcher-style">
                                <div className="flex"> <input type="radio" name="page-loader" className="ti-form-radio"
                                    id="switcher-loader-enable" checked="" /> <label for="switcher-loader-enable"
                                        className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">
                                        Enable</label> </div>
                                <div className="flex"> <input type="radio" name="page-loader" className="ti-form-radio"
                                    id="switcher-loader-disable" /> <label for="switcher-loader-disable"
                                        className="text-defaultsize text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2  font-semibold">Disable
                                    </label> </div>
                            </div>
                        </div>
                    </div>
                    <div id="switcher-2" className="hidden" role="tabpanel" aria-labelledby="switcher-item-2">
                        <div className="theme-colors">
                            <p className="switcher-style-head">Menu Colors:</p>
                            <div className="flex switcher-style space-x-3 rtl:space-x-reverse">
                                <div className="hs-tooltip ti-main-tooltip ti-form-radio switch-select "> <input
                                    className="hs-tooltip-toggle ti-form-radio color-input color-white" type="radio"
                                    name="menu-colors" id="switcher-menu-light" checked="" /> <span
                                        className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                                        role="tooltip"> Light Menu </span> </div>
                                <div className="hs-tooltip ti-main-tooltip ti-form-radio switch-select "> <input
                                    className="hs-tooltip-toggle ti-form-radio color-input color-dark" type="radio"
                                    name="menu-colors" id="switcher-menu-dark" checked="" /> <span
                                        className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                                        role="tooltip"> Dark Menu </span> </div>
                                <div className="hs-tooltip ti-main-tooltip ti-form-radio switch-select "> <input
                                    className="hs-tooltip-toggle ti-form-radio color-input color-primary" type="radio"
                                    name="menu-colors" id="switcher-menu-primary" /> <span
                                        className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                                        role="tooltip"> Color Menu </span> </div>
                                <div className="hs-tooltip ti-main-tooltip ti-form-radio switch-select "> <input
                                    className="hs-tooltip-toggle ti-form-radio color-input color-gradient" type="radio"
                                    name="menu-colors" id="switcher-menu-gradient" /> <span
                                        className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                                        role="tooltip"> Gradient Menu </span> </div>
                                <div className="hs-tooltip ti-main-tooltip ti-form-radio switch-select "> <input
                                    className="hs-tooltip-toggle ti-form-radio color-input color-transparent" type="radio"
                                    name="menu-colors" id="switcher-menu-transparent" /> <span
                                        className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                                        role="tooltip"> Transparent Menu </span> </div>
                            </div>
                            <div className="px-4 text-[#8c9097] dark:text-white/50 text-[.6875rem]"><b className="me-2">Note:</b>If you
                                want to change color Menu dynamically change from below Theme Primary color picker.</div>
                        </div>
                        <div className="theme-colors">
                            <p className="switcher-style-head">Header Colors:</p>
                            <div className="flex switcher-style space-x-3 rtl:space-x-reverse">
                                <div className="hs-tooltip ti-main-tooltip ti-form-radio switch-select "> <input
                                    className="hs-tooltip-toggle ti-form-radio color-input color-white !border" type="radio"
                                    name="header-colors" id="switcher-header-light" checked="" /> <span
                                        className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                                        role="tooltip"> Light Header </span> </div>
                                <div className="hs-tooltip ti-main-tooltip ti-form-radio switch-select "> <input
                                    className="hs-tooltip-toggle ti-form-radio color-input color-dark" type="radio"
                                    name="header-colors" id="switcher-header-dark" /> <span
                                        className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                                        role="tooltip"> Dark Header </span> </div>
                                <div className="hs-tooltip ti-main-tooltip ti-form-radio switch-select "> <input
                                    className="hs-tooltip-toggle ti-form-radio color-input color-primary" type="radio"
                                    name="header-colors" id="switcher-header-primary" /> <span
                                        className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                                        role="tooltip"> Color Header </span> </div>
                                <div className="hs-tooltip ti-main-tooltip ti-form-radio switch-select "> <input
                                    className="hs-tooltip-toggle ti-form-radio color-input color-gradient" type="radio"
                                    name="header-colors" id="switcher-header-gradient" /> <span
                                        className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                                        role="tooltip"> Gradient Header </span> </div>
                                <div className="hs-tooltip ti-main-tooltip ti-form-radio switch-select "> <input
                                    className="hs-tooltip-toggle ti-form-radio color-input color-transparent" type="radio"
                                    name="header-colors" id="switcher-header-transparent" /> <span
                                        className="hs-tooltip-content ti-main-tooltip-content !py-1 !px-2 !bg-black text-xs font-medium !text-white shadow-sm dark:!bg-black"
                                        role="tooltip"> Transparent Header </span> </div>
                            </div>
                            <div className="px-4 text-[#8c9097] dark:text-white/50 text-[.6875rem]"><b className="me-2">Note:</b>If you
                                want to change color Header dynamically change from below Theme Primary color picker.</div>
                        </div>
                        <div className="theme-colors">
                            <p className="switcher-style-head">Theme Primary:</p>
                            <div className="flex switcher-style space-x-3 rtl:space-x-reverse">
                                <div className="ti-form-radio switch-select"> <input
                                    className="ti-form-radio color-input color-primary-1" type="radio" name="theme-primary"
                                    id="switcher-primary" checked="" /> </div>
                                <div className="ti-form-radio switch-select"> <input
                                    className="ti-form-radio color-input color-primary-2" type="radio" name="theme-primary"
                                    id="switcher-primary1" /> </div>
                                <div className="ti-form-radio switch-select"> <input
                                    className="ti-form-radio color-input color-primary-3" type="radio" name="theme-primary"
                                    id="switcher-primary2" /> </div>
                                <div className="ti-form-radio switch-select"> <input
                                    className="ti-form-radio color-input color-primary-4" type="radio" name="theme-primary"
                                    id="switcher-primary3" /> </div>
                                <div className="ti-form-radio switch-select"> <input
                                    className="ti-form-radio color-input color-primary-5" type="radio" name="theme-primary"
                                    id="switcher-primary4" /> </div>
                                <div className="ti-form-radio switch-select ps-0 mt-1 color-primary-light">
                                    <div className="theme-container-primary"><button className="">nano</button></div>
                                    <div className="pickr-container-primary">
                                        <div className="pickr">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="theme-colors">
                            <p className="switcher-style-head">Theme Background:</p>
                            <div className="flex switcher-style space-x-3 rtl:space-x-reverse">
                                <div className="ti-form-radio switch-select"> <input className="ti-form-radio color-input color-bg-1"
                                    type="radio" name="theme-background" id="switcher-background" checked="" /> </div>
                                <div className="ti-form-radio switch-select"> <input className="ti-form-radio color-input color-bg-2"
                                    type="radio" name="theme-background" id="switcher-background1" /> </div>
                                <div className="ti-form-radio switch-select"> <input className="ti-form-radio color-input color-bg-3"
                                    type="radio" name="theme-background" id="switcher-background2" /> </div>
                                <div className="ti-form-radio switch-select"> <input className="ti-form-radio color-input color-bg-4"
                                    type="radio" name="theme-background" id="switcher-background3" /> </div>
                                <div className="ti-form-radio switch-select"> <input className="ti-form-radio color-input color-bg-5"
                                    type="radio" name="theme-background" id="switcher-background4" /> </div>
                                <div className="ti-form-radio switch-select ps-0 mt-1 color-bg-transparent">
                                    <div className="theme-container-background hidden"><button>nano</button></div>
                                    <div className="pickr-container-background">
                                        <div className="pickr">


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="menu-image theme-colors">
                            <p className="switcher-style-head">Menu With Background Image:</p>
                            <div className="flex switcher-style space-x-3 rtl:space-x-reverse flex-wrap gap-3">
                                <div className="ti-form-radio switch-select"> <input className="ti-form-radio bgimage-input bg-img1"
                                    type="radio" name="theme-images" id="switcher-bg-img" /> </div>
                                <div className="ti-form-radio switch-select"> <input className="ti-form-radio bgimage-input bg-img2"
                                    type="radio" name="theme-images" id="switcher-bg-img1" /> </div>
                                <div className="ti-form-radio switch-select"> <input className="ti-form-radio bgimage-input bg-img3"
                                    type="radio" name="theme-images" id="switcher-bg-img2" /> </div>
                                <div className="ti-form-radio switch-select"> <input className="ti-form-radio bgimage-input bg-img4"
                                    type="radio" name="theme-images" id="switcher-bg-img3" /> </div>
                                <div className="ti-form-radio switch-select"> <input className="ti-form-radio bgimage-input bg-img5"
                                    type="radio" name="theme-images" id="switcher-bg-img4" /> </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ti-offcanvas-footer sm:flex justify-between"> <Link
                    to="#"
                    target="_blank" className="w-full ti-btn ti-btn-primary-full m-1">Buy Now</Link> <Link
                        to="#" target="_blank"
                        className="w-full ti-btn ti-btn-secondary-full m-1">Our Portfolio</Link> <Link to="#"
                            id="reset-all" className="w-full ti-btn ti-btn-danger-full m-1">Reset</Link> </div>
            </div>
            <div id="loader" className="!hidden"> <img src={Loader} alt="picturdfgfde" /> </div>
            <div className="page">
                <header className="app-header">
                    <nav className="main-header !h-[3.75rem]" aria-label="Global">
                        <div className="main-header-container ps-[0.725rem] pe-[1rem] ">
                            <div className="header-content-left">
                                <div className="header-element">
                                    <div className="horizontal-logo"> <Link to="#" className="header-logo"> <img
                                        src={DesktopLogo} alt="logo"
                                        className="desktop-logo" /> <img src={ToggleLogo}
                                            alt="logo" className="toggle-logo" /> <img
                                            src={DarkLogo} alt="logo"
                                            className="desktop-dark" /> <img src={ToggleDarkLogo}
                                                alt="logo" className="toggle-dark" /> <img
                                            src={DesktopWhiteLogo} alt="logo"
                                            className="desktop-white" /> <img src={ToggleWhiteLogo}
                                                alt="logo" className="toggle-white" /> </Link> </div>
                                </div>
                                <div className="header-element md:px-[0.325rem] !items-center"> <Link
                                    aria-label="Hide Sidebar"
                                    className="sidemenu-toggle animated-arrow  hor-toggle horizontal-navtoggle inline-flex items-center"
                                    to="#"><span></span></Link> </div>

                            </div>
                            <div className="header-content-right">
                                <div className="header-element py-[1rem] md:px-[0.65rem] px-2 header-search"> <button
                                    aria-label="button" type="button" data-hs-overlay="#search-modal"
                                    className="inline-flex flex-shrink-0 justify-center items-center gap-2  rounded-full font-medium focus:ring-offset-0 focus:ring-offset-white transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                                    <i className="bx bx-search-alt-2 header-link-icon"></i> </button> </div>

                                <div
                                    className="header-element py-[1rem] md:px-[0.65rem] px-2  header-country hs-dropdown ti-dropdown  hidden sm:block [--placement:bottom-left]">
                                    <button id="dropdown-flag" type="button"
                                        className="hs-dropdown-toggle ti-dropdown-toggle !p-0 flex-shrink-0  !border-0 !rounded-full !shadow-none">
                                        <img src={UsFlag} alt="flag-img"
                                            className="h-[1.25rem] w-[1.25rem] rounded-full" /> </button>
                                    <div className="hs-dropdown-menu ti-dropdown-menu min-w-[10rem] hidden !-mt-3"
                                        aria-labelledby="dropdown-flag">
                                        <div className="ti-dropdown-divider divide-y divide-gray-200 dark:divide-white/10">
                                            <div className="py-2 first:pt-0 last:pb-0">
                                                <div className="ti-dropdown-item !p-[0.65rem] ">
                                                    <div className="flex items-center space-x-2 rtl:space-x-reverse w-full">
                                                        <div className="h-[1.375rem] flex items-center w-[1.375rem] rounded-full">
                                                            <img src={UsFlag} alt="flag-img"
                                                                className="h-[1rem] w-[1rem] rounded-full" /> </div>
                                                        <div>
                                                            <p className="!text-[0.8125rem] font-medium"> English </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ti-dropdown-item !p-[0.65rem]">
                                                    <div className="flex items-center space-x-2 rtl:space-x-reverse w-full">
                                                        <div className="h-[1.375rem] w-[1.375rem] flex items-center rounded-full">
                                                            <img src={FrechFlag} alt="flag-img"
                                                                className="h-[1rem] w-[1rem] rounded-full" /> </div>
                                                        <div>
                                                            <p className="!text-[0.8125rem] font-medium"> French </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ti-dropdown-item !p-[0.65rem]">
                                                    <div className="flex items-center space-x-2 rtl:space-x-reverse w-full">
                                                        <div className="h-[1.375rem] w-[1.375rem] flex items-center rounded-full">
                                                            <img src={GermanyFlag} alt="flag-img"
                                                                className="h-[1rem] w-[1rem] rounded-full" /> </div>
                                                        <div>
                                                            <p className="!text-[0.8125rem] font-medium"> German </p>
                                                        </div>
                                                    </div>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="header-element header-theme-mode hidden !items-center sm:block !py-[1rem] md:!px-[0.65rem] px-2">
                                    <Link aria-label="anchor"
                                        className="hs-dark-mode-active:hidden flex hs-dark-mode group flex-shrink-0 justify-center items-center gap-2  rounded-full font-medium transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                                        to="#" data-hs-theme-click-value="dark"> <i
                                            className="bx bx-moon header-link-icon"></i> </Link> <Link aria-label="anchor"
                                                className="hs-dark-mode-active:flex hidden hs-dark-mode group flex-shrink-0 justify-center items-center gap-2  rounded-full font-medium text-defaulttextcolor  transition-all text-xs dark:bg-bodybg dark:bg-bgdark dark:hover:bg-black/20 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                                                to="#" data-hs-theme-click-value="light"> <i
                                                    className="bx bx-sun header-link-icon"></i> </Link> </div>

                                <div
                                    className="header-element cart-dropdown hs-dropdown ti-dropdown md:!block !hidden py-[1rem] md:px-[0.65rem] px-2 [--placement:bottom-left]">
                                    <button id="dropdown-cart" type="button"
                                        className="hs-dropdown-toggle relative ti-dropdown-toggle !p-0 !border-0 flex-shrink-0  !rounded-full !shadow-none align-middle text-xs">
                                        <i className="bx bx-cart header-link-icon"></i> <span
                                            className="flex absolute h-5 w-5 -top-[0.25rem] end-0 -me-[0.6rem]"> <span
                                                className="relative inline-flex rounded-full h-[14.7px] w-[14px] text-[0.625rem] bg-primary text-white justify-center items-center"
                                                id="cart-icon-badge">5</span> </span> </button>
                                    <div className="main-header-dropdown bg-white !-mt-3 !p-0 hs-dropdown-menu ti-dropdown-menu w-[22rem] border-0 border-defaultborder hidden"
                                        aria-labelledby="dropdown-cart">
                                        <div
                                            className="ti-dropdown-header !bg-transparent flex justify-between items-center !m-0 !p-4">
                                            <p
                                                className="text-defaulttextcolor  !text-[1.0625rem] dark:text-[#8c9097] dark:text-white/50 font-semibold">
                                                Cart Items</p><Link to="#"
                                                    className="font-[600] py-[0.25/2rem] px-[0.45rem] rounded-[0.25rem] bg-success/10 text-success text-[0.75em] "
                                                    id="cart-data">5 Items</Link>
                                        </div>
                                        <div>
                                            <hr className="dropdown-divider dark:border-white/10" />
                                        </div>
                                        <ul className="list-none mb-0" id="header-cart-items-scroll">
                                            <li
                                                className="ti-dropdown-item border-b dark:border-defaultborder/10 border-defaultborder ">
                                                <div className="flex items-start cart-dropdown-item"> <img
                                                    src={jpg1} alt="img"
                                                    className="!h-[1.75rem] !w-[1.75rem] leading-[1.75rem] text-[0.65rem] rounded-[50%] br-5 me-3" />
                                                    <div className="grow">
                                                        <div className="flex items-start justify-between mb-0">
                                                            <div
                                                                className="mb-0 !text-[0.8125rem] text-[#232323] font-semibold dark:text-[#8c9097] dark:text-white/50">
                                                                <Link to="#">SomeThing Phone</Link> </div>
                                                            <div className="inline-flex"> <span
                                                                className="text-black mb-1 dark:text-white !font-medium">$1,299.00</span>
                                                                <Link aria-label="anchor" to="#"
                                                                    className="header-cart-remove ltr:float-right rtl:float-left dropdown-item-close"><i
                                                                        className="ti ti-trash"></i></Link> </div>
                                                        </div>
                                                        <div className="min-w-fit flex  items-start justify-between">
                                                            <ul className="header-product-item dark:text-white/50 flex">
                                                                <li>Metallic Blue</li>
                                                                <li>6gb Ram</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li
                                                className="ti-dropdown-item border-b dark:border-defaultborder/10 border-defaultborder">
                                                <div className="flex items-start cart-dropdown-item"> <img
                                                    src={jpg3} alt="img"
                                                    className="!h-[1.75rem] !w-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-[50%] br-5 me-3" />
                                                    <div className="grow">
                                                        <div className="flex items-start justify-between mb-0">
                                                            <div
                                                                className="mb-0 text-[0.8125rem] text-[#232323] dark:text-[#8c9097] dark:text-white/50 font-semibold">
                                                                <Link to="#">Stop Watch</Link> </div>
                                                            <div className="inline-flex"> <span
                                                                className="text-black dark:text-white !font-medium mb-1">$179.29</span>
                                                                <Link aria-label="anchor" to="#"
                                                                    className="header-cart-remove ltr:float-right rtl:float-left dropdown-item-close"><i
                                                                        className="ti ti-trash"></i></Link> </div>
                                                        </div>
                                                        <div className="min-w-fit flex items-start justify-between">
                                                            <ul className="header-product-item">
                                                                <li>Analog</li>
                                                                <li><span
                                                                    className="font-[600] py-[0.25rem] px-[0.45rem] rounded-[0.25rem] bg-pink/10 text-pink text-[0.625rem]">Free
                                                                    shipping</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li
                                                className="ti-dropdown-item border-b dark:border-defaultborder/10 border-defaultborder">
                                                <div className="flex items-start cart-dropdown-item"> <img
                                                    src={jpg5} alt="img"
                                                    className="!h-[1.75rem] !w-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-[50%] br-5 me-3" />
                                                    <div className="grow">
                                                        <div className="flex items-start justify-between mb-0">
                                                            <div
                                                                className="mb-0 text-[0.8125rem] text-[#232323] font-semibold dark:text-[#8c9097] dark:text-white/50">
                                                                <Link to="#">Photo Frame</Link> </div>
                                                            <div className="inline-flex"> <span
                                                                className="text-black !font-medium mb-1 dark:text-white">$29.00</span>
                                                                <Link aria-label="anchor" to="#"
                                                                    className="header-cart-remove ltr:float-right rtl:float-left dropdown-item-close"><i
                                                                        className="ti ti-trash"></i></Link> </div>
                                                        </div>
                                                        <div className="min-w-fit flex items-start justify-between">
                                                            <ul className="header-product-item flex">
                                                                <li>Decorative</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li
                                                className="ti-dropdown-item border-b dark:border-defaultborder/10 border-defaultborder">
                                                <div className="flex items-start cart-dropdown-item"> <img
                                                    src={jpg4} alt="img"
                                                    className="!h-[1.75rem] !w-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-[50%] br-5 me-3" />
                                                    <div className="grow">
                                                        <div className="flex items-start justify-between mb-0">
                                                            <div
                                                                className="mb-0 text-[0.8125rem] text-[#232323] font-semibold dark:text-[#8c9097] dark:text-white/50">
                                                                <Link to="#">Kikon Camera</Link> </div>
                                                            <div className="inline-flex"> <span
                                                                className="text-black !font-medium mb-1 dark:text-white">$4,999.00</span>
                                                                <Link aria-label="anchor" to="#"
                                                                    className="header-cart-remove ltr:float-right rtl:float-left dropdown-item-close"><i
                                                                        className="ti ti-trash"></i></Link> </div>
                                                        </div>
                                                        <div className="min-w-fit flex items-start justify-between">
                                                            <ul className="header-product-item flex">
                                                                <li>Black</li>
                                                                <li>50MM</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="ti-dropdown-item">
                                                <div className="flex items-start cart-dropdown-item"> <img
                                                    src={jpg6} alt="img"
                                                    className="!h-[1.75rem] !w-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-[50%] br-5 me-3" />
                                                    <div className="grow">
                                                        <div className="flex items-start justify-between mb-0">
                                                            <div
                                                                className="mb-0 text-[0.8125rem] text-[#232323] font-semibold dark:text-[#8c9097] dark:text-white/50">
                                                                <Link to="#">Canvas Shoes</Link> </div>
                                                            <div className="inline-flex"> <span
                                                                className="text-black !font-medium mb-1 dark:text-white">$129.00</span>
                                                                <Link aria-label="anchor" to="#"
                                                                    className="header-cart-remove ltr:float-right rtl:float-left dropdown-item-close"><i
                                                                        className="ti ti-trash"></i></Link> </div>
                                                        </div>
                                                        <div className="flex items-start justify-between">
                                                            <ul className="header-product-item flex">
                                                                <li>Gray</li>
                                                                <li>Sports</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="p-3 empty-header-item border-t">
                                            <div className="grid"> <Link to="#"
                                                className="w-full ti-btn ti-btn-primary-full p-2">Proceed to checkout</Link> </div>
                                        </div>
                                        <div className="p-[3rem] empty-item hidden">
                                            <div className="text-center"> <span
                                                className="!w-[4rem] !h-[4rem] !leading-[4rem] rounded-[50%] avatar bg-warning/10 !text-warning">
                                                <i className="ri-shopping-cart-2-line text-[2rem]"></i> </span>
                                                <h6
                                                    className="font-bold mb-1 mt-3 text-[1rem] text-defaulttextcolor dark:text-[#8c9097] dark:text-white/50">
                                                    Your Cart is Empty</h6> <span
                                                        className="mb-3 !font-normal text-[0.8125rem] block text-defaulttextcolor dark:text-[#8c9097] dark:text-white/50">Add
                                                    some items to make me happy :)</span> <Link to="#"
                                                        className="ti-btn ti-btn-primary btn-wave ti-btn-wave btn-sm m-1 !text-[0.75rem] !py-[0.25rem] !px-[0.5rem]"
                                                        data-abc="true">continue shopping <i className="bi bi-arrow-right ms-1"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="header-element py-[1rem] md:px-[0.65rem] px-2 notifications-dropdown header-notification hs-dropdown ti-dropdown !hidden md:!block [--placement:bottom-left]">
                                    <button id="dropdown-notification" type="button"
                                        className="hs-dropdown-toggle relative ti-dropdown-toggle !p-0 !border-0 flex-shrink-0  !rounded-full !shadow-none align-middle text-xs">
                                        <i className="bx bx-bell header-link-icon  text-[1.125rem]"></i> <span
                                            className="flex absolute h-5 w-5 -top-[0.25rem] end-0  -me-[0.6rem]"> <span
                                                className="animate-slow-ping absolute inline-flex -top-[2px] -start-[2px] h-full w-full rounded-full bg-secondary/40 opacity-75"></span>
                                            <span
                                                className="relative inline-flex justify-center items-center rounded-full  h-[14.7px] w-[14px] bg-secondary text-[0.625rem] text-white"
                                                id="notification-icon-badge">5</span> </span> </button>
                                    <div className="main-header-dropdown !-mt-3 !p-0 hs-dropdown-menu ti-dropdown-menu bg-white !w-[22rem] border-0 border-defaultborder hidden !m-0"
                                        aria-labelledby="dropdown-notification">
                                        <div
                                            className="ti-dropdown-header !m-0 !p-4 !bg-transparent flex justify-between items-center">
                                            <p
                                                className="mb-0 text-[1.0625rem] text-defaulttextcolor font-semibold dark:text-[#8c9097] dark:text-white/50">
                                                Notifications</p><span
                                                    className="text-[0.75em] py-[0.25rem/2] px-[0.45rem] font-[600] rounded-sm bg-secondary/10 text-secondary"
                                                    id="notifiation-data">5 Unread</span>
                                        </div>
                                        <div className="dropdown-divider"></div>
                                        <ul className="list-none !m-0 !p-0 end-0" id="header-notification-scroll"
                                            data-simplebar="init">
                                            <div className="simplebar-wrapper" >
                                                <div className="simplebar-height-auto-observer-wrapper">
                                                    <div className="simplebar-height-auto-observer"></div>
                                                </div>
                                                <div className="simplebar-mask">
                                                    <div className="simplebar-offset" s>
                                                        <div className="simplebar-content-wrapper" tabindex="0" role="region"
                                                            aria-label="scrollable content"
                                                        >
                                                            <div className="simplebar-content" >
                                                                <li className="ti-dropdown-item dropdown-item ">
                                                                    <div className="flex items-start">
                                                                        <div className="pe-2"> <span
                                                                            className="inline-flex text-primary justify-center items-center !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !text-[0.8rem] !bg-primary/10 !rounded-[50%]"><i
                                                                                className="ti ti-gift text-[1.125rem]"></i></span>
                                                                        </div>
                                                                        <div className="grow flex items-center justify-between">
                                                                            <div>
                                                                                <p
                                                                                    className="mb-0 text-defaulttextcolor dark:text-[#8c9097] dark:text-white/50 text-[0.8125rem] font-semibold">
                                                                                    <Link to="#">Your Order Has
                                                                                        Been Shipped</Link></p><span
                                                                                            className="text-[#8c9097] dark:text-white/50 font-normal text-[0.75rem] header-notification-text">Order
                                                                                    No: 123456 Has Shipped To Your Delivery
                                                                                    Address</span>
                                                                            </div>
                                                                            <div> <Link aria-label="anchor"
                                                                                to="#"
                                                                                className="min-w-fit text-[#8c9097] dark:text-white/50 me-1 dropdown-item-close1"><i
                                                                                    className="ti ti-x text-[1rem]"></i></Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="ti-dropdown-item dropdown-item !flex-none">
                                                                    <div className="flex items-start">
                                                                        <div className="pe-2"> <span
                                                                            className="inline-flex text-secondary justify-center items-center !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !text-[0.8rem]  bg-secondary/10 rounded-[50%]"><i
                                                                                className="ti ti-discount-2 text-[1.125rem]"></i></span>
                                                                        </div>
                                                                        <div className="grow flex items-center justify-between">
                                                                            <div>
                                                                                <p
                                                                                    className="mb-0 text-defaulttextcolor dark:text-[#8c9097] dark:text-white/50 text-[0.8125rem]  font-semibold">
                                                                                    <Link to="#">Discount
                                                                                        Available</Link></p><span
                                                                                            className="text-[#8c9097] dark:text-white/50 font-normal text-[0.75rem] header-notification-text">Discount
                                                                                    Available On Selected Products</span>
                                                                            </div>
                                                                            <div> <Link aria-label="anchor"
                                                                                to="#"
                                                                                className="min-w-fit  text-[#8c9097] dark:text-white/50 me-1 dropdown-item-close1"><i
                                                                                    className="ti ti-x text-[1rem]"></i></Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="ti-dropdown-item dropdown-item">
                                                                    <div className="flex items-start">
                                                                        <div className="pe-2"> <span
                                                                            className="inline-flex text-pink justify-center items-center !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !text-[0.8rem]  bg-pink/10 rounded-[50%]"><i
                                                                                className="ti ti-user-check text-[1.125rem]"></i></span>
                                                                        </div>
                                                                        <div className="grow flex items-center justify-between">
                                                                            <div>
                                                                                <p
                                                                                    className="mb-0 text-defaulttextcolor dark:text-[#8c9097] dark:text-white/50 text-[0.8125rem]  font-semibold">
                                                                                    <Link to="#">Account Has
                                                                                        Been Verified</Link></p><span
                                                                                            className="text-[#8c9097] dark:text-white/50 font-normal text-[0.75rem] header-notification-text">Your
                                                                                    Account Has Been Verified Sucessfully</span>
                                                                            </div>
                                                                            <div> <Link aria-label="anchor"
                                                                                to="#"
                                                                                className="min-w-fit text-[#8c9097] dark:text-white/50 me-1 dropdown-item-close1"><i
                                                                                    className="ti ti-x text-[1rem]"></i></Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="ti-dropdown-item dropdown-item">
                                                                    <div className="flex items-start">
                                                                        <div className="pe-2"> <span
                                                                            className="inline-flex text-warning justify-center items-center !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !text-[0.8rem]  bg-warning/10 rounded-[50%]"><i
                                                                                className="ti ti-circle-check text-[1.125rem]"></i></span>
                                                                        </div>
                                                                        <div className="grow flex items-center justify-between">
                                                                            <div>
                                                                                <p
                                                                                    className="mb-0 text-defaulttextcolor dark:text-[#8c9097] dark:text-white/50  text-[0.8125rem]  font-semibold">
                                                                                    <Link to="#">Order Placed
                                                                                        <span className="text-warning">ID:
                                                                                            #1116773</span></Link></p><span
                                                                                                className="text-[#8c9097] dark:text-white/50 font-normal text-[0.75rem] header-notification-text">Order
                                                                                    Placed Successfully</span>
                                                                            </div>
                                                                            <div> <Link aria-label="anchor"
                                                                                to="#"
                                                                                className="min-w-fit text-[#8c9097] dark:text-white/50 me-1 dropdown-item-close1"><i
                                                                                    className="ti ti-x text-[1rem]"></i></Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="ti-dropdown-item dropdown-item">
                                                                    <div className="flex items-start">
                                                                        <div className="pe-2"> <span
                                                                            className="inline-flex text-success justify-center items-center !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !text-[0.8rem]  bg-success/10 rounded-[50%]"><i
                                                                                className="ti ti-clock text-[1.125rem]"></i></span>
                                                                        </div>
                                                                        <div className="grow flex items-center justify-between">
                                                                            <div>
                                                                                <p
                                                                                    className="mb-0 text-defaulttextcolor dark:text-[#8c9097] dark:text-white/50  text-[0.8125rem]  font-semibold">
                                                                                    <Link to="#">Order Delayed
                                                                                        <span className="text-success">ID:
                                                                                            7731116</span></Link></p><span
                                                                                                className="text-[#8c9097] dark:text-white/50 font-normal text-[0.75rem] header-notification-text">Order
                                                                                    Delayed Unfortunately</span>
                                                                            </div>
                                                                            <div> <Link aria-label="anchor"
                                                                                to="#"
                                                                                className="min-w-fit text-[#8c9097] dark:text-white/50 me-1 dropdown-item-close1"><i
                                                                                    className="ti ti-x text-[1rem]"></i></Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="simplebar-placeholder" ></div>
                                            </div>
                                            <div className="simplebar-track simplebar-horizontal">
                                                <div className="simplebar-scrollbar" ></div>
                                            </div>
                                            <div className="simplebar-track simplebar-vertical">
                                                <div className="simplebar-scrollbar"></div>
                                            </div>
                                        </ul>
                                        <div className="p-4 empty-header-item1 border-t mt-2">
                                            <div className="grid"> <Link to="#"
                                                className="ti-btn ti-btn-primary-full !m-0 w-full p-2">View All</Link> </div>
                                        </div>
                                        <div className="p-[3rem] empty-item1 hidden">
                                            <div className="text-center"> <span
                                                className="!h-[4rem]  !w-[4rem] avatar !leading-[4rem] !rounded-full !bg-secondary/10 !text-secondary">
                                                <i className="ri-notification-off-line text-[2rem]  "></i> </span>
                                                <h6
                                                    className="font-semibold mt-3 text-defaulttextcolor dark:text-[#8c9097] dark:text-white/50 text-[1rem]">
                                                    No New Notifications</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="header-element header-apps dark:text-[#8c9097] dark:text-white/50 py-[1rem] md:px-[0.65rem] px-2 hs-dropdown ti-dropdown md:!block !hidden [--placement:bottom-left]">
                                    <button aria-label="button" id="dropdown-apps" type="button"
                                        className="hs-dropdown-toggle ti-dropdown-toggle !p-0 !border-0 flex-shrink-0  !rounded-full !shadow-none text-xs">
                                        <i className="bx bx-grid-alt header-link-icon text-[1.125rem]"></i> </button>
                                    <div className="main-header-dropdown !-mt-3 hs-dropdown-menu ti-dropdown-menu !w-[22rem] border-0 border-defaultborder   hidden"
                                        aria-labelledby="dropdown-apps">
                                        <div className="p-4">
                                            <div className="flex items-center justify-between">
                                                <p
                                                    className="mb-0 text-defaulttextcolor text-[1.0625rem] dark:text-[#8c9097] dark:text-white/50 font-semibold">
                                                    Related Apps</p>
                                            </div>
                                        </div>
                                        <div className="dropdown-divider mb-0"></div>
                                        <div className="ti-dropdown-divider divide-y divide-gray-200 dark:divide-white/10 main-header-shortcuts p-2"
                                            id="header-shortcut-scroll" data-simplebar="init">
                                            <div className="simplebar-wrapper">
                                                <div className="simplebar-height-auto-observer-wrapper">
                                                    <div className="simplebar-height-auto-observer"></div>
                                                </div>
                                                <div className="simplebar-mask">
                                                    <div className="simplebar-offset">
                                                        <div className="simplebar-content-wrapper" tabindex="0" role="region"
                                                            aria-label="scrollable content"
                                                        >
                                                            <div className="simplebar-content">
                                                                <div className="grid grid-cols-3 gap-2">
                                                                    <div className=""> <Link to="#"
                                                                        className="p-4 items-center related-app block text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20">
                                                                        <div> <img src="../assets/images/apps/figma.png"
                                                                            alt="figma"
                                                                            className="!h-[1.75rem] !w-[1.75rem] text-2xl avatar text-primary flex justify-center items-center mx-auto" />
                                                                            <div
                                                                                className="text-[0.75rem] text-defaulttextcolor dark:text-[#8c9097] dark:text-white/50">
                                                                                Figma</div>
                                                                        </div>
                                                                    </Link> </div>
                                                                    <div className=""> <Link to="#"
                                                                        className="p-4 items-center related-app block text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20">
                                                                        <img src="../assets/images/apps/microsoft-powerpoint.png"
                                                                            alt="miscrosoft"
                                                                            className="leading-[1.75] text-2xl !h-[1.75rem] !w-[1.75rem] align-middle flex justify-center mx-auto" />
                                                                        <div
                                                                            className="text-[0.75rem] text-defaulttextcolor dark:text-[#8c9097] dark:text-white/50">
                                                                            Power Point</div>
                                                                    </Link> </div>
                                                                    <div className=""> <Link to="#"
                                                                        className="p-4 items-center related-app block text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20">
                                                                        <img src="../assets/images/apps/microsoft-word.png"
                                                                            alt="miscrodoftword" className="leading-none
                           text-2xl !h-[1.75rem] !w-[1.75rem] align-middle flex justify-center mx-auto"/>
                                                                        <div
                                                                            className="text-[0.75rem] text-defaulttextcolor dark:text-[#8c9097] dark:text-white/50">
                                                                            MS Word</div>
                                                                    </Link> </div>
                                                                    <div className=""> <Link to="#"
                                                                        className="p-4 items-center related-app block text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20">
                                                                        <img src="../assets/images/apps/calender.png"
                                                                            alt="calander"
                                                                            className="leading-none text-2xl !h-[1.75rem] !w-[1.75rem] align-middle flex justify-center mx-auto" />
                                                                        <div
                                                                            className="text-[0.75rem] text-defaulttextcolor dark:text-[#8c9097] dark:text-white/50">
                                                                            Calendar</div>
                                                                    </Link> </div>
                                                                    <div className=""> <Link to="#"
                                                                        className="p-4 items-center related-app block text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20">
                                                                        <img src="../assets/images/apps/sketch.png"
                                                                            alt="apps"
                                                                            className="leading-none text-2xl !h-[1.75rem] !w-[1.75rem] align-middle flex justify-center mx-auto" />
                                                                        <div
                                                                            className="text-[0.75rem] text-defaulttextcolor dark:text-[#8c9097] dark:text-white/50">
                                                                            Sketch</div>
                                                                    </Link> </div>
                                                                    <div className=""> <Link to="#"
                                                                        className="p-4 items-center related-app block text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20">
                                                                        <img src="../assets/images/apps/google-docs.png"
                                                                            alt="docs"
                                                                            className="leading-none text-2xl !h-[1.75rem] !w-[1.75rem] align-middle flex justify-center mx-auto" />
                                                                        <div
                                                                            className="text-[0.75rem] text-defaulttextcolor dark:text-[#8c9097] dark:text-white/50">
                                                                            Docs</div>
                                                                    </Link> </div>
                                                                    <div className=""> <Link to="#"
                                                                        className="p-4 items-center related-app block text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20">
                                                                        <img src="../assets/images/apps/google.png"
                                                                            alt="google"
                                                                            className="leading-none text-2xl !h-[1.75rem] !w-[1.75rem] align-middle flex justify-center mx-auto" />
                                                                        <div
                                                                            className="text-[0.75rem] text-defaulttextcolor dark:text-[#8c9097] dark:text-white/50">
                                                                            Google</div>
                                                                    </Link> </div>
                                                                    <div className=""> <Link to="#"
                                                                        className="p-4 items-center related-app block text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20">
                                                                        <img src="../assets/images/apps/translate.png"
                                                                            alt="translate"
                                                                            className="leading-none text-2xl !h-[1.75rem] !w-[1.75rem] align-middle flex justify-center mx-auto" />
                                                                        <div
                                                                            className="text-[0.75rem] text-defaulttextcolor dark:text-[#8c9097] dark:text-white/50">
                                                                            Translate</div>
                                                                    </Link> </div>
                                                                    <div className=""> <Link to="#"
                                                                        className="p-4 items-center related-app block text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20">
                                                                        <img src="../assets/images/apps/google-sheets.png"
                                                                            alt="sheets"
                                                                            className="leading-none text-2xl !h-[1.75rem] !w-[1.75rem] align-middle flex justify-center mx-auto" />
                                                                        <div
                                                                            className="text-[0.75rem] text-defaulttextcolor dark:text-[#8c9097] dark:text-white/50">
                                                                            Sheets</div>
                                                                    </Link> </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="simplebar-placeholder"></div>
                                            </div>
                                            <div className="simplebar-track simplebar-horizontal">
                                                <div className="simplebar-scrollbar" ></div>
                                            </div>
                                            <div className="simplebar-track simplebar-vertical">
                                                <div className="simplebar-scrollbar"></div>
                                            </div>
                                        </div>
                                        <div className="p-4 first:pt-0 border-t"> <Link
                                            className="w-full ti-btn ti-btn-primary-full p-2 !m-0" to="#">
                                            View All </Link> </div>
                                    </div>
                                </div>
                                <div className="header-element header-fullscreen py-[1rem] md:px-[0.65rem] px-2">
                                    <Link aria-label="anchor" onclick="openFullscreen();"
                                        to="#"
                                        className="inline-flex flex-shrink-0 justify-center items-center gap-2  !rounded-full font-medium dark:hover:bg-black/20 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                                        <i className="bx bx-fullscreen full-screen-open header-link-icon"></i> <i
                                            className="bx bx-exit-fullscreen full-screen-close header-link-icon hidden"></i> </Link>
                                </div>
                                <div
                                    className="header-element md:!px-[0.65rem] px-2 hs-dropdown !items-center ti-dropdown [--placement:bottom-left]">
                                    <button id="dropdown-profile" type="button"
                                        className="hs-dropdown-toggle ti-dropdown-toggle !gap-2 !p-0 flex-shrink-0 sm:me-2 me-0 !rounded-full !shadow-none text-xs align-middle !border-0 !shadow-transparent ">
                                        <img className="inline-block rounded-full " src={user1} width="32"
                                            height="32" alt=" Description" /> </button>
                                    <div className="md:block hidden dropdown-profile">
                                        <p className="font-semibold mb-0 leading-none text-[#536485] text-[0.813rem] ">Json Taylor
                                        </p><span className="opacity-[0.7] font-normal text-[#536485] block text-[0.6875rem] ">Web
                                            Designer</span>
                                    </div>
                                    <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? 'text-white' : 'text-white/90'}
                group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
            >
              <span>Solutions</span>
              <ChevronDownIcon
                className={`${open ? 'text-orange-300' : 'text-orange-300/70'}
                  ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-orange-300/80`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                         
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="bg-gray-50 p-4">
                    <a
                      href="##"
                      className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                    >
                      <span className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                          Documentation
                        </span>
                      </span>
                      <span className="block text-sm text-gray-500">
                        Start integrating products and tools
                      </span>
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
                                    <div className="hs-dropdown-menu ti-dropdown-menu !-mt-3 border-0 w-[11rem] !p-0 border-defaultborder hidden main-header-dropdown  pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end"
                                        aria-labelledby="dropdown-profile">
                                        <ul className="text-defaulttextcolor font-medium dark:text-[#8c9097] dark:text-white/50">
                                            <li> <Link className="w-full ti-dropdown-item !text-[0.8125rem] !gap-x-0  !p-[0.65rem] !inline-flex"
                                                to="#"> <i
                                                    className="ti ti-user-circle text-[1.125rem] me-2 opacity-[0.7]"></i>Profile
                                            </Link> </li>
                                            <li> <Link className="w-full ti-dropdown-item !text-[0.8125rem] !gap-x-0  !p-[0.65rem] !inline-flex"
                                                to="#"><i
                                                    className="ti ti-inbox text-[1.125rem] me-2 opacity-[0.7]"></i>Inbox <span
                                                        className="!py-1 !px-[0.45rem] !font-semibold !rounded-sm text-success text-[0.75em] bg-success/10 ms-auto">25</span>
                                            </Link> </li>
                                            <li><Link className="w-full ti-dropdown-item !text-[0.8125rem] !gap-x-0 !p-[0.65rem] !inline-flex"
                                                to="#"><i
                                                    className="ti ti-clipboard-check text-[1.125rem] me-2 opacity-[0.7]"></i>Task
                                                Manager</Link></li>
                                            <li><Link className="w-full ti-dropdown-item !text-[0.8125rem] !gap-x-0 !p-[0.65rem] !inline-flex"
                                                to="#"><i
                                                    className="ti ti-adjustments-horizontal text-[1.125rem] me-2 opacity-[0.7]"></i>Settings</Link>
                                            </li>
                                            <li><Link className="w-full ti-dropdown-item !text-[0.8125rem] !gap-x-0 !p-[0.65rem] !inline-flex "
                                                to="#"><i
                                                    className="ti ti-wallet text-[1.125rem] me-2 opacity-[0.7]"></i>Bal:
                                                $7,12,950</Link></li>
                                            <li><Link className="w-full ti-dropdown-item !text-[0.8125rem] !p-[0.65rem] !gap-x-0 !inline-flex"
                                                to="#"><i
                                                    className="ti ti-headset text-[1.125rem] me-2 opacity-[0.7]"></i>Support</Link>
                                            </li>
                                            <li><Link className="w-full ti-dropdown-item !text-[0.8125rem] !p-[0.65rem] !gap-x-0 !inline-flex"
                                                to="#"><i
                                                    className="ti ti-logout text-[1.125rem] me-2 opacity-[0.7]"></i>Log Out</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
                <aside className="app-sidebar" id="sidebar">
                    <div className="main-sidebar-header"> <Link to="#" className="header-logo"> <img
                        src={DesktopWhiteLogo} alt="logo" className="desktop-logo" /> <img
                            src={ToggleLogo} alt="logo" className="toggle-logo" /> <img
                            src={DesktopWhiteLogo} alt="logo" className="desktop-dark" /> <img
                            src={ToggleDarkLogo} alt="logo" className="toggle-dark" /> <img
                            src={ToggleWhiteLogo} alt="logo" className="toggle-white" /> </Link> </div>

                    <div className="main-sidebar" id="sidebar-scroll" data-simplebar="init">
                        <div className="simplebar-wrapper">
                            <div className="simplebar-height-auto-observer-wrapper">
                                <div className="simplebar-height-auto-observer"></div>
                            </div>
                            <div className="simplebar-mask">
                                <div className="simplebar-offset">
                                    <div className="simplebar-content-wrapper" tabindex="0" role="region"
                                        aria-label="scrollable content">
                                        <div className="simplebar-content" >
                                            <nav className="main-menu-container nav nav-pills flex-column sub-open active open">
                                                <div className="slide-left active hidden" id="slide-left"><svg
                                                    xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24"
                                                    viewBox="0 0 24 24">
                                                    <path
                                                        d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z">
                                                    </path>
                                                </svg></div>

                                                <div className="slide-right" id="slide-right"><svg
                                                    xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24"
                                                    viewBox="0 0 24 24">
                                                    <path
                                                        d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z">
                                                    </path>
                                                </svg> </div>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="simplebar-placeholder" ></div>
                        </div>
                        <div className="simplebar-track simplebar-horizontal" >
                            <div className="simplebar-scrollbar"></div>
                        </div>
                        <div className="simplebar-track simplebar-vertical" >
                            <div className="simplebar-scrollbar"
                            ></div>
                        </div>
                    </div>
                </aside>
                <div className="content">
                    <div className="main-content">
                    <div className="fixed top-16 w-56 text-right"></div>
                    <div className="fixed top-16 w-full max-w-sm px-4"></div>
                        <div className="block justify-between page-header md:flex">
                            <div>
                                <h3
                                    className="!text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:text-white dark:hover:text-white text-[1.125rem] font-semibold">
                                    Ecommerce</h3>
                            </div>
                            <ol className="flex items-center whitespace-nowrap min-w-0">
                                <li className="text-[0.813rem] ps-[0.5rem]"> <Link
                                    className="flex items-center text-primary hover:text-primary dark:text-primary truncate"
                                    to="#"> Dashboards <i
                                        className="ti ti-chevrons-right flex-shrink-0 text-[#8c9097] dark:text-white/50 px-[0.5rem] overflow-visible rtl:rotate-180"></i>
                                </Link> </li>
                                <li className="text-[0.813rem] text-defaulttextcolor font-semibold hover:text-primary dark:text-[#8c9097] dark:text-white/50 "
                                    aria-current="page"> Ecommerce </li>
                            </ol>
                        </div>
                        <div className="grid grid-cols-12 gap-x-6">
                            <div className="xxl:col-span-6 col-span-12">
                                <div className="grid grid-cols-12 gap-x-6">
                                    <div className="lg:col-span-6 md:col-span-6 xl:col-span-6 col-span-12">
                                        <div className="box">
                                            <div className="box-body">
                                                <div className="grid grid-cols-12">
                                                    <div
                                                        className="xxxl:col-span-3 col-span-4 flex items-center ecommerce-icon px-0">
                                                        <span className="rounded-md p-4 bg-primary/10"> <svg
                                                            xmlns="http://www.w3.org/2000/svg" className="svg-white primary"
                                                            enable-background="new 0 0 24 24" height="24px"
                                                            viewBox="0 0 24 24" width="24px" fill="#000000">
                                                            <g>
                                                                <rect fill="none" height="24" width="24"></rect>
                                                                <path
                                                                    d="M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z">
                                                                </path>
                                                            </g>
                                                        </svg> </span> </div>
                                                    <div className="xxxl:col-span-9 col-span-8 ps-0">
                                                        <div className="mb-2">Total Sales</div>
                                                        <div className="text-[#8c9097] dark:text-white/50 mb-1 text-[0.75rem]">
                                                            <span
                                                                className="text-defaulttextcolor font-semibold text-[1.25rem] leading-none vertical-bottom">
                                                                14,732 </span> </div>
                                                        <div> <span className="text-[0.75rem] mb-0">Increase by <span
                                                            className="badge bg-success/10 text-success mx-1">+4.2%</span>
                                                            this month</span> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-6 md:col-span-6 xl:col-span-6 col-span-12">
                                        <div className="box">
                                            <div className="box-body">
                                                <div className="grid grid-cols-12">
                                                    <div
                                                        className="xxxl:col-span-3 col-span-4 flex items-center ecommerce-icon secondary  px-0">
                                                        <span className="rounded-md p-4 bg-secondary/10"> <svg
                                                            xmlns="http://www.w3.org/2000/svg" className="svg-white secondary"
                                                            enable-background="new 0 0 24 24" height="24px"
                                                            viewBox="0 0 24 24" width="24px" fill="#000000">
                                                            <path d="M0,0h24v24H0V0z" fill="none"></path>
                                                            <g>
                                                                <path
                                                                    d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M15,20H6c-0.55,0-1-0.45-1-1v-1h10V20z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z">
                                                                </path>
                                                                <rect height="2" width="6" x="9" y="7"></rect>
                                                                <rect height="2" width="2" x="16" y="7"></rect>
                                                                <rect height="2" width="6" x="9" y="10"></rect>
                                                                <rect height="2" width="2" x="16" y="10"></rect>
                                                            </g>
                                                        </svg> </span> </div>
                                                    <div className="xxxl:col-span-9 col-span-8 ps-0">
                                                        <div className="mb-2">Total Expenses</div>
                                                        <div className="text-[#8c9097] dark:text-white/50 mb-1 text-[0.75rem]">
                                                            <span
                                                                className="font-semibold text-[1.25rem] leading-none text-defaulttextcolor vertical-bottom">
                                                                $28,346.00 </span> </div>
                                                        <div> <span className="text-[0.75rem] mb-0">Increase by <span
                                                            className="badge bg-success/10 text-success mx-1">+12.0%</span>
                                                            this month</span> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-6 md:col-span-6 xl:col-span-6 col-span-12">
                                        <div className="box">
                                            <div className="box-body">
                                                <div className="grid grid-cols-12">
                                                    <div
                                                        className="xxxl:col-span-3 col-span-4 flex items-center ecommerce-icon success px-0">
                                                        <span className="rounded-md p-4 bg-success/10"> <svg
                                                            xmlns="http://www.w3.org/2000/svg" className="svg-white success"
                                                            height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                            <path
                                                                d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z">
                                                            </path>
                                                        </svg> </span> </div>
                                                    <div className="xxxl:col-span-9 col-span-8 ps-0">
                                                        <div className="mb-2">Total Visitors</div>
                                                        <div className="text-[#8c9097] dark:text-white/50 mb-1 text-[0.75rem]">
                                                            <span
                                                                className="text-defaulttextcolor font-semibold text-[1.25rem]  leading-none vertical-bottom">
                                                                1,29,368 </span> </div>
                                                        <div> <span className="text-[0.75rem] mb-0">Decreased by <span
                                                            className="badge bg-danger/10 text-danger mx-1">-7.6%</span>
                                                            this month</span> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-6 md:col-span-6 xl:col-span-6 col-span-12">
                                        <div className="box">
                                            <div className="box-body">
                                                <div className="grid grid-cols-12">
                                                    <div
                                                        className="xxxl:col-span-3 col-span-4 flex items-center ecommerce-icon warning px-0">
                                                        <span className="rounded-md p-4 bg-warning/10"> <svg
                                                            xmlns="http://www.w3.org/2000/svg" className="svg-white warning"
                                                            height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                            <path
                                                                d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z">
                                                            </path>
                                                        </svg> </span> </div>
                                                    <div className="xxxl:col-span-9 col-span-8 ps-0">
                                                        <div className="mb-2">Total Orders</div>
                                                        <div className="text-[#8c9097] dark:text-white/50 mb-1 text-[0.75rem]">
                                                            <span
                                                                className="font-semibold text-[1.25rem] leading-none vertical-bottom text-defaulttextcolor">
                                                                35,367 </span> </div>
                                                        <div> <span className="text-[0.75rem] mb-0">Increased by <span
                                                            className="badge bg-success/10 text-success mx-1">+2.5%</span>
                                                            this month</span> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                                        <div className="box overflow-hidden">
                                            <div className="ecommerce-sale-image"> <img src={png35}
                                                className="card-img-top" alt="..." />
                                                <div className="card-img-overlay  p-6 text-white">
                                                    <p className=" opacity-[0.7] text-[0.75rem]">Spruko Official.Inc</p>
                                                    <p className="font-semibold mb-6 text-[1rem]">BIG SAVING DAYS</p>
                                                    <p className="ecommerce-bankoffer-details mb-4">Bank Offer 10% off on Aches Bank
                                                        Credit Cards, up to $10. On orders of $500 and above <Link
                                                            to="#" className="underline text-white">T&amp;C</Link>
                                                    </p>
                                                    <p className="ecommerce-sale-days mb-0">15, Jan 2022 - 19, Jan 2022</p>
                                                    <p className="ecommerce-sales-calendar text-center mb-0"> <span>15</span> <span
                                                        className="block text-[0.9375rem] leading-none font-semibold">Jan</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="box-body"> <Link to="#"
                                                className="text-primary text-[0.9375rem] font-semibold">Biggest sale is
                                                back.</Link>
                                                <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
                                                    harum accusamus eum dolorum sapiente. Saepe</p><button type="button"
                                                        className="tibtn ti-btn-primary-full ti-btn-wave !py-[0.55rem] !px-[0.95rem] gap-2 rounded-[0.35rem] text-[0.85rem] font-medium !shadow-none me-2">Notify
                                                    Me</button> <button type="button"
                                                        className="ti-btn ti-btn-outline-primary ti-btn-wave !rounded-[0.35rem] !text-[0.85rem] !font-medium !shadow-none">Offers</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                                        <div className="box">
                                            <div className="box-header justify-between">
                                                <div className="box-title"> Recent Orders </div>
                                                <div className="hs-dropdown ti-dropdown"> <Link aria-label="anchor"
                                                    to="#"
                                                    className="flex items-center justify-center w-[1.75rem] h-[1.75rem] !text-defaulttextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
                                                    aria-expanded="false"><i className="fe fe-more-vertical text-[0.8rem]"></i>
                                                </Link>
                                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            to="#">Action</Link></li>
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            to="#">Another action</Link></li>
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            to="#">Something else here</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="box-body">
                                                <ul className="list-none mb-0">
                                                    <li className="mb-4"> <Link to="#">
                                                        <div className="flex tems-center">
                                                            <div className="leading-none"> <span
                                                                className="inline-flex justify-center items-center"> <img
                                                                    src={jpg1} alt="picturdfgfde"
                                                                    className="w-[2.5rem] h-[2.5rem]leading-[2.5rem] text-[0.8rem] rounded-md" />
                                                            </span> </div>
                                                            <div className="flex-grow ms-2">
                                                                <p className="font-semibold mb-0">Smart Phone</p>
                                                                <p
                                                                    className="text-[0.75rem] !text-[#8c9097] dark:text-white/50 mb-0">
                                                                    Mobiles</p>
                                                            </div>
                                                            <div> <span className="text-success font-semibold">$199.99</span>
                                                            </div>
                                                        </div>
                                                    </Link> </li>
                                                    <li className="mb-4"> <Link to="#">
                                                        <div className="flex items-center">
                                                            <div className="leading-none"> <span
                                                                className="inline-flex justify-center items-center"> <img
                                                                    src={jpg2} alt="picturdfgfde"
                                                                    className="w-[2.5rem] h-[2.5rem]leading-[2.5rem] text-[0.8rem] rounded-md" />
                                                            </span> </div>
                                                            <div className="flex-grow ms-2">
                                                                <p className="font-semibold mb-0">White Headphones</p>
                                                                <p
                                                                    className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-0">
                                                                    Music</p>
                                                            </div>
                                                            <div> <span className="text-success font-semibold">$79.49</span>
                                                            </div>
                                                        </div>
                                                    </Link> </li>
                                                    <li className="mb-4"> <Link to="#">
                                                        <div className="flex items-center">
                                                            <div className="leading-none"> <span
                                                                className="inline-flex justify-center items-center"> <img
                                                                    src={jpg3} alt="picturdfgfde"
                                                                    className="w-[2.5rem] h-[2.5rem]leading-[2.5rem] text-[0.8rem] rounded-md" />
                                                            </span> </div>
                                                            <div className="flex-grow ms-2">
                                                                <p className="font-semibold mb-0">Stop Watch</p>
                                                                <p
                                                                    className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-0">
                                                                    Electronics</p>
                                                            </div>
                                                            <div> <span className="text-success font-semibold">$49.29</span>
                                                            </div>
                                                        </div>
                                                    </Link> </li>
                                                    <li className="mb-4"> <Link to="#">
                                                        <div className="flex items-center">
                                                            <div className="leading-none"> <span
                                                                className="inline-flex justify-center items-center"> <img
                                                                    src={jpg4} alt="picturdfgfde"
                                                                    className="w-[2.5rem] h-[2.5rem]leading-[2.5rem] text-[0.8rem] rounded-md" />
                                                            </span> </div>
                                                            <div className="flex-grow ms-2">
                                                                <p className="font-semibold mb-0">Kikon Camera</p>
                                                                <p
                                                                    className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-0">
                                                                    Electronics</p>
                                                            </div>
                                                            <div> <span className="text-success font-semibold">$1,699.00</span>
                                                            </div>
                                                        </div>
                                                    </Link> </li>
                                                    <li className="mb-4"> <Link to="#">
                                                        <div className="flex items-center">
                                                            <div className="leading-none"> <span
                                                                className="inline-flex justify-center items-center"> <img
                                                                    src={jpg5} alt="picturdfgfde"
                                                                    className="w-[2.5rem] h-[2.5rem]leading-[2.5rem] text-[0.8rem] rounded-md" />
                                                            </span> </div>
                                                            <div className="flex-grow ms-2">
                                                                <p className="font-semibold mb-0">Photo Frame</p>
                                                                <p
                                                                    className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-0">
                                                                    Furniture</p>
                                                            </div>
                                                            <div> <span className="text-success font-semibold">$29.99</span>
                                                            </div>
                                                        </div>
                                                    </Link> </li>
                                                    <li className="mb-0"> <Link to="#">
                                                        <div className="flex items-center">
                                                            <div className="leading-none"> <span
                                                                className="inline-flex justify-center items-center"> <img
                                                                    src={jpg6} alt="picturdfgfde"
                                                                    className="w-[2.5rem] h-[2.5rem]leading-[2.5rem] text-[0.8rem] rounded-md" />
                                                            </span> </div>
                                                            <div className="flex-grow ms-2">
                                                                <p className="font-semibold mb-0">Canvas Shoes</p>
                                                                <p
                                                                    className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-0">
                                                                    Footwear</p>
                                                            </div>
                                                            <div> <span className="text-success font-semibold">$89.99</span>
                                                            </div>
                                                        </div>
                                                    </Link> </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <div className="box">
                                            <div className="box-header justify-between sm:flex block">
                                                <div className="box-title"> Orders </div>
                                                <div>
                                                    <nav className="sm:flex block sm:mt-0 mt-2" aria-label="Tabs"> <Link
                                                        className="block w-full sm:w-auto hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer text-defaulttextcolor dark:text-defaulttextcolor/70 py-2 px-4  text-[0.8rem] font-medium text-center rounded-md hover:text-primary active"
                                                        id="active-item" data-hs-tab="#taskactive"
                                                        aria-controls="taskactive"> Active Orders </Link> <Link
                                                            className="block w-full sm:w-auto hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer text-defaulttextcolor dark:text-defaulttextcolor/70 py-2 px-4 text-[0.8rem] font-medium text-center  rounded-md hover:text-primary "
                                                            id="completed-item" data-hs-tab="#completed"
                                                            aria-controls="completed"> Completed </Link> <Link
                                                                className="block w-full sm:w-auto hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer text-defaulttextcolor dark:text-defaulttextcolor/70 py-2 px-4 text-[0.8rem] font-medium text-center  rounded-md hover:text-primary "
                                                                id="cancelled-item" data-hs-tab="#cancelled"
                                                                aria-controls="cancelled"> Cancelled </Link> </nav>
                                                </div>
                                            </div>
                                            <div className="box-body !p-0">
                                                <div className="tab-content">
                                                    <div className="tab-pane show active text-[#8c9097] dark:text-white/50 !border-0 !p-0"
                                                        id="taskactive" role="tabpanel">
                                                        <div className="table-responsive overflow-auto">
                                                            <table
                                                                className="table box-table table-vcenter whitespace-nowrap mb-0 min-w-full">
                                                                <tbody className="active-tab">
                                                                    <tr>
                                                                        <td>
                                                                            <div className="flex items-center">
                                                                                <div className="leading-none"> <span
                                                                                    className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                                                                                    <img src={face4}
                                                                                        alt="picturdfgfde" /> </span> </div>
                                                                                <div className="items-center"> <span
                                                                                    className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                                    <p className="mb-0">Amanda Nanes</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="items-center"> <span
                                                                                className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                                <p className="mb-0 font-semibold">$229.99</p>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="items-center"> <span
                                                                                className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Delivery
                                                                                Date</span>
                                                                                <p className="mb-0">24 May 2022</p>
                                                                            </div>
                                                                        </td>
                                                                        <td> <span className="avatar avatar-md"> <img
                                                                            src={png1}
                                                                            alt="picturdfgfde" /> </span> </td>
                                                                        <td> <Link aria-label="anchor" to="#">
                                                                            <span className="orders-arrow"><i
                                                                                className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                        </Link> </td>
                                                                    </tr>
                                                                    <tr
                                                                        className="border-y border-inherit border-solid dark:border-defaultborder/10">
                                                                        <td>
                                                                            <div className="flex items-center">
                                                                                <div className="leading-none"> <span
                                                                                    className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                                                                                    <img src={face10}
                                                                                        alt="picturdfgfde" /> </span> </div>
                                                                                <div className="items-center"> <span
                                                                                    className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                                    <p className="mb-0">Peter Parkour</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="items-center"> <span
                                                                                className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                                <p className="mb-0 font-semibold">$135.29</p>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="items-center"> <span
                                                                                className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Delivery
                                                                                Date</span>
                                                                                <p className="mb-0">18 May 2022</p>
                                                                            </div>
                                                                        </td>
                                                                        <td> <span className="avatar avatar-md"> <img
                                                                            src={png2}
                                                                            alt="picturdfgfde" /> </span> </td>
                                                                        <td> <Link aria-label="anchor" to="#">
                                                                            <span className="orders-arrow"><i
                                                                                className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                        </Link> </td>
                                                                    </tr>
                                                                    <tr
                                                                        className="border-y border-inherit border-solid dark:border-defaultborder/10">
                                                                        <td>
                                                                            <div className="flex items-center">
                                                                                <div className="leading-none"> <span
                                                                                    className="avatar avatar-md offline avatar-rounded me-2 !mb-0">
                                                                                    <img src={face12}
                                                                                        alt="picturdfgfde" /> </span> </div>
                                                                                <div className="items-center"> <span
                                                                                    className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                                    <p className="mb-0">Jackie Chen</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="items-center"> <span
                                                                                className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                                <p className="mb-0 fw-semibold">$1,299.99</p>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="aitems-center"> <span
                                                                                className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Delivery
                                                                                Date</span>
                                                                                <p className="mb-0">29 May 2022</p>
                                                                            </div>
                                                                        </td>
                                                                        <td> <span className="avatar avatar-md"> <img
                                                                            src={png3}
                                                                            alt="picturdfgfde" /> </span> </td>
                                                                        <td> <Link aria-label="anchor" to="#">
                                                                            <span className="orders-arrow"><i
                                                                                className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                        </Link> </td>
                                                                    </tr>
                                                                    <tr
                                                                        className="border-y border-inherit border-solid dark:border-defaultborder/10">
                                                                        <td>
                                                                            <div className="flex items-center">
                                                                                <div className="leading-none"> <span
                                                                                    className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                                                                                    <img src={face5}
                                                                                        alt="picturdfgfde" /> </span> </div>
                                                                                <div className="items-center"> <span
                                                                                    className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                                    <p className="mb-0">Ryan Gercia</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="items-center"> <span
                                                                                className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                                <p className="mb-0 fw-semibold">$249.29</p>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="items-center"> <span
                                                                                className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Delivery
                                                                                Date</span>
                                                                                <p className="mb-0">05 Jun 2022</p>
                                                                            </div>
                                                                        </td>
                                                                        <td> <span className="avatar avatar-md"> <img
                                                                            src={png4}
                                                                            alt="picturdfgfde" /> </span> </td>
                                                                        <td> <Link aria-label="anchor" to="#">
                                                                            <span className="orders-arrow"><i
                                                                                className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                        </Link> </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="flex items-center">
                                                                                <div className="leading-none"> <span
                                                                                    className="avatar avatar-md offline avatar-rounded me-2 !mb-0">
                                                                                    <img src={face14}
                                                                                        alt="picturdfgfde" /> </span> </div>
                                                                                <div className="items-center"> <span
                                                                                    className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                                    <p className="mb-0">Hugh Jackma</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="items-center"> <span
                                                                                className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                                <p className="mb-0 font-semibold">$499.99</p>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="items-center"> <span
                                                                                className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Delivery
                                                                                Date</span>
                                                                                <p className="mb-0">15 May 2022</p>
                                                                            </div>
                                                                        </td>
                                                                        <td> <span className="avatar avatar-md"> <img
                                                                            src={png5}
                                                                            alt="picturdfgfde" /> </span> </td>
                                                                        <td> <Link aria-label="anchor" to="#">
                                                                            <span className="orders-arrow"><i
                                                                                className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                        </Link> </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane text-[#8c9097] dark:text-white/50 !border-0 !p-0 hidden"
                                                        id="completed" role="tabpanel" aria-labelledby="completed-item">
                                                        <div className="table-responsive overflow-auto">
                                                            <table
                                                                className="table card-table table-vcenter whitespace-nowrap mb-0 min-w-full">
                                                                <tbody className="active-tab">
                                                                    <tr>
                                                                        <td>
                                                                            <div className="flex items-center">
                                                                                <div className="leading-none"> <span
                                                                                    className="avatar avatar-md offline avatar-rounded me-2 !mb-0">
                                                                                    <img src={face2}
                                                                                        alt="picturdfgfde" /> </span> </div>
                                                                                <div className="items-center"> <span
                                                                                    className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                                    <p className="mb-0">Lisa Rebecca</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="items-center"> <span
                                                                                className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                                <p className="mb-0 fw-semibold">$1,199.99</p>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="items-center"> <span
                                                                                className="text-[0.75rem] text-success">Delivered
                                                                                On</span>
                                                                                <p className="mb-0">24 Dec 2022</p>
                                                                            </div>
                                                                        </td>
                                                                        <td> <span className="avatar avatar-md"> <img
                                                                            src={png6}
                                                                            alt="picturdfgfde" /> </span> </td>
                                                                        <td> <Link aria-label="anchor" to="#">
                                                                            <span className="orders-arrow"><i
                                                                                className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                        </Link> </td>
                                                                    </tr>
                                                                    <tr className="border border-inherit border-solid">
                                                                        <td>
                                                                            <div className="flex items-center">
                                                                                <div className="leading-none"> <span
                                                                                    className="avatar avatar-md offline avatar-rounded me-2 !mb-0">
                                                                                    <img src={face13}
                                                                                        alt="picturdfgfde" /> </span> </div>
                                                                                <div className="items-center"> <span
                                                                                    className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                                    <p className="mb-0">Matt Martin</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="items-center"> <span
                                                                                className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                                <p className="mb-0 font-semibold">$799.99</p>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="items-center"> <span
                                                                                className="text-[0.75rem] text-success">Delived
                                                                                On</span>
                                                                                <p className="mb-0">18 Nov 2022</p>
                                                                            </div>
                                                                        </td>
                                                                        <td> <span className="avatar avatar-md"> <img
                                                                            src={png7}
                                                                            alt="picturdfgfde" /> </span> </td>
                                                                        <td> <Link aria-label="anchor" to="#">
                                                                            <span className="orders-arrow"><i
                                                                                className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                        </Link> </td>
                                                                    </tr>
                                                                    <tr className="border border-inherit border-solid">
                                                                        <td>
                                                                            <div className="flex items-center">
                                                                                <div className="leading-none"> <span
                                                                                    className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                                                                                    <img src={face7}
                                                                                        alt="picturdfgfde" /> </span> </div>
                                                                                <div className="items-center"> <span
                                                                                    className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                                    <p className="mb-0">Mitchell Osama</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="items-center"> <span
                                                                                className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                                <p className="mb-0 fw-semibold">$279.00</p>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="items-center"> <span
                                                                                className="text-[0.75rem] text-success">Delivery
                                                                                On</span>
                                                                                <p className="mb-0">29 Dec 2022</p>
                                                                            </div>
                                                                        </td>
                                                                        <td> <span className="avatar avatar-md"> <img
                                                                            src={png8}
                                                                            alt="picturdfgfde" /> </span> </td>
                                                                        <td> <Link aria-label="anchor" to="#">
                                                                            <span className="orders-arrow"><i
                                                                                className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                        </Link> </td>
                                                                    </tr>
                                                                    <tr className="border border-inherit border-solid">
                                                                        <td>
                                                                            <div className="flex items-center">
                                                                                <div className="leading-none"> <span
                                                                                    className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                                                                                    <img src={face12}
                                                                                        alt="picturdfgfde" /> </span> </div>
                                                                                <div className="items-center"> <span
                                                                                    className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                                    <p className="mb-0">Cornor Mcgood</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="items-center"> <span
                                                                                className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                                <p className="mb-0 font-semibold">$79.99</p>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="items-center"> <span
                                                                                className="text-[0.75rem] text-success">Delivered
                                                                                On</span>
                                                                                <p className="mb-0">05 Dec 2022</p>
                                                                            </div>
                                                                        </td>
                                                                        <td> <span className="avatar avatar-md"> <img
                                                                            src={png9}
                                                                            alt="picturdfgfde" /> </span> </td>
                                                                        <td> <Link aria-label="anchor" to="#">
                                                                            <span className="orders-arrow"><i
                                                                                className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                        </Link> </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="flex items-center">
                                                                                <div className="leading-none"> <span
                                                                                    className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                                                                                    <img src={face15}
                                                                                        alt="picturdfgfde" /> </span> </div>
                                                                                <div className="items-center"> <span
                                                                                    className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                                    <p className="mb-0">Kishan Patel</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="items-center"> <span
                                                                                className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                                <p className="mb-0 fw-semibold">$1449.29</p>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="items-center"> <span
                                                                                className="text-[0.75rem] text-success">Delivered
                                                                                On</span>
                                                                                <p className="mb-0">20 Nov 2022</p>
                                                                            </div>
                                                                        </td>
                                                                        <td> <span className="avatar avatar-md"> <img
                                                                            src={png10}
                                                                            alt="picturdfgfde" /> </span> </td>
                                                                        <td> <Link aria-label="anchor" to="#">
                                                                            <span className="orders-arrow"><i
                                                                                className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                        </Link> </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane text-[#8c9097] dark:text-white/50 !border-0 !p-0 hidden"
                                                        id="cancelled" role="tabpanel" aria-labelledby="cancelled-item">
                                                        <div className="table-responsive overflow-auto">
                                                            <table
                                                                className="table card-table table-vcenter whitespace-nowrap mb-0 min-w-full">
                                                                <tbody className="active-tab">
                                                                    <tr>
                                                                        <td>
                                                                            <div className="flex items-center">
                                                                                <div className="leading-none"> <span
                                                                                    className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                                                                                    <img src={face6}
                                                                                        alt="picturdfgfde" /> </span> </div>
                                                                                <div className="items-center"> <span
                                                                                    className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                                    <p className="mb-0">Hailey Bobber</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="items-center"> <span
                                                                                className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                                <p className="mb-0 fw-semibold">$199.99</p>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="items-center"> <span
                                                                                className="text-[0.75rem] text-danger">Cancelled
                                                                                Date</span>
                                                                                <p className="mb-0">09 Dec 2022</p>
                                                                            </div>
                                                                        </td>
                                                                        <td> <span className="avatar avatar-md"> <img
                                                                            src={png11}
                                                                            alt="picturdfgfde" /> </span> </td>
                                                                        <td> <Link aria-label="anchor" to="#">
                                                                            <span className="orders-arrow"><i
                                                                                className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                        </Link> </td>
                                                                    </tr>
                                                                    <tr className="border border-inherit border-solid">
                                                                        <td>
                                                                            <div className="flex items-center">
                                                                                <div className="leading-none"> <span
                                                                                    className="avatar avatar-md offline avatar-rounded me-2 !mb-0">
                                                                                    <img src={face14}
                                                                                        alt="picturdfgfde" /> </span> </div>
                                                                                <div className="items-center"> <span
                                                                                    className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                                    <p className="mb-0">Anthony Mansion</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="items-center"> <span
                                                                                className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                                <p className="mb-0 fw-semibold">$179.99</p>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="items-center"> <span
                                                                                className="text-[0.75rem] text-danger">Cancelled
                                                                                Date</span>
                                                                                <p className="mb-0">28 Dec 2022</p>
                                                                            </div>
                                                                        </td>
                                                                        <td> <span className="avatar avatar-md"> <img
                                                                            src={png12}
                                                                            alt="picturdfgfde" /> </span> </td>
                                                                        <td> <Link aria-label="anchor" to="#">
                                                                            <span className="orders-arrow"><i
                                                                                className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                        </Link> </td>
                                                                    </tr>
                                                                    <tr className="border border-inherit border-solid">
                                                                        <td>
                                                                            <div className="flex items-center">
                                                                                <div className="leading-none"> <span
                                                                                    className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                                                                                    <img src={face16}
                                                                                        alt="picturdfgfde" /> </span> </div>
                                                                                <div className="items-center"> <span
                                                                                    className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                                    <p className="mb-0">Simon Carter</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="items-center"> <span
                                                                                className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                                <p className="mb-0 fw-semibold">$149.99</p>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="items-center"> <span
                                                                                className="text-[0.75rem] text-danger">Cancelled
                                                                                Date</span>
                                                                                <p className="mb-0">30 Dec 2022</p>
                                                                            </div>
                                                                        </td>
                                                                        <td> <span className="avatar avatar-md"> <img
                                                                            src={png13}
                                                                            alt="picturdfgfde" /> </span> </td>
                                                                        <td> <Link aria-label="anchor" to="#">
                                                                            <span className="orders-arrow"><i
                                                                                className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                        </Link> </td>
                                                                    </tr>
                                                                    <tr className="border border-inherit border-solid">
                                                                        <td>
                                                                            <div className="flex items-center">
                                                                                <div className="leading-none"> <span
                                                                                    className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                                                                                    <img src={face3}
                                                                                        alt="picturdfgfde" /> </span> </div>
                                                                                <div className="items-center"> <span
                                                                                    className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                                    <p className="mb-0">Sofia Sekh</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="items-center"> <span
                                                                                className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                                <p className="mb-0 fw-semibold">$1439.99</p>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="items-center"> <span
                                                                                className="text-[0.75rem] text-danger">Cancelled
                                                                                Date</span>
                                                                                <p className="mb-0">03 Dec 2022</p>
                                                                            </div>
                                                                        </td>
                                                                        <td> <span className="avatar avatar-md"> <img
                                                                            src={png14}
                                                                            alt="picturdfgfde" /> </span> </td>
                                                                        <td> <Link aria-label="anchor" to="#">
                                                                            <span className="orders-arrow"><i
                                                                                className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                        </Link> </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="flex items-center">
                                                                                <div className="leading-none"> <span
                                                                                    className="avatar avatar-md offline avatar-rounded me-2 !mb-0">
                                                                                    <img src={user1}
                                                                                        alt="picturdfgfde" /> </span> </div>
                                                                                <div className="items-center"> <span
                                                                                    className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                                    <p className="mb-0">Kimura Kai</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="items-center"> <span
                                                                                className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                                <p className="mb-0 fw-semibold">$1092.99</p>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="items-center"> <span
                                                                                className="text-[0.75rem] text-danger">Cancelled
                                                                                Date</span>
                                                                                <p className="mb-0">02 Dec 2022</p>
                                                                            </div>
                                                                        </td>
                                                                        <td> <span className="avatar avatar-md"> <img
                                                                            src={png15}
                                                                            alt="picturdfgfde" /> </span> </td>
                                                                        <td> <Link aria-label="anchor" to="#">
                                                                            <span className="orders-arrow"><i
                                                                                className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                        </Link> </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xxl:col-span-6 col-span-12">
                                <div className="grid grid-cols-12 gap-x-6">
                                    <div className="xl:col-span-12 col-span-12">
                                        <div className="box">
                                            <div className="box-header justify-between">
                                                <div className="box-title">Earnings</div>
                                                <div className="hs-dropdown ti-dropdown"> <Link to="#"
                                                    className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                                                    aria-expanded="false"> View All<i
                                                        className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                                </Link>
                                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            to="#">Today</Link></li>
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            to="#">This Week</Link></li>
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            to="#">Last Week</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="box-body">
                                                <div className="sm:grid sm:grid-cols-12 lg:ps-[3rem] mb-6 pb-6 sm:gap-0 gap-y-3">
                                                    <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4">
                                                        <div className="mb-1 earning first-half ms-4">First Half</div>
                                                        <div className="mb-0"> <span
                                                            className="mt-1 text-[1rem] font-semibold">$51.94k</span> <span
                                                                className="text-success"><i className="fa fa-caret-up mx-1"></i> <span
                                                                    className="badge bg-success/10 text-success !px-1 !py-2 text-[0.625rem]">+0.9%</span></span>
                                                        </div>
                                                    </div>
                                                    <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4">
                                                        <div className="mb-1 earning top-gross ms-4">Top Gross</div>
                                                        <div className="mb-0"> <span
                                                            className="mt-1 text-[1rem] font-semibold">$18.32k</span> <span
                                                                className="text-success"><i className="fa fa-caret-up mx-1"></i> <span
                                                                    className="badge bg-success/10 text-success !px-1 !py-2 text-[0.625rem]">+0.39%</span></span>
                                                        </div>
                                                    </div>
                                                    <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4">
                                                        <div className="mb-1 earning second-half ms-3">Second Half</div>
                                                        <div className="mb-0"> <span
                                                            className="mt-1 text-[1rem] font-semibold">$38k</span> <span
                                                                className="text-danger"><i className="fa fa-caret-up mx-1"></i> <span
                                                                    className="badge bg-danger/10 text-danger !px-1 !py-2 text-[0.625rem]">-0.15%</span></span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <div className="box custom-card">
                                            <div className="box-header">
                                                <div className="box-title">Top Selling Products</div>
                                            </div>
                                            <div className="box-body !p-0">
                                                <div className="table-responsive">
                                                    <table className="table whitespace-nowrap min-w-full mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col" className="text-center">S.no</th>
                                                                <th scope="col" className="text-start">Product Name</th>
                                                                <th scope="col" className="text-start">Category</th>
                                                                <th scope="col" className="text-start">Stock</th>
                                                                <th scope="col" className="text-start">Total Sales</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="top-selling">
                                                            <tr
                                                                className="border-y border-inherit border-solid dark:border-defaultborder/10 ">
                                                                <td className="text-center leading-none"> <span
                                                                    className="avatar avatar-md !rounded-full"> <img
                                                                        src={png36}
                                                                        className="p-2 !rounded-full bg-light" alt="picturdfgfde" /> </span>
                                                                </td>
                                                                <td>Ethnic School bag for children (24L)</td>
                                                                <td>Bags</td>
                                                                <td><span
                                                                    className="badge badge-sm bg-success/10 text-success !font-normal">In
                                                                    Stock</span></td>
                                                                <td> <span className="font-semibold">5,093</span> </td>
                                                            </tr>
                                                            <tr
                                                                className="border-y border-inherit border-solid dark:border-defaultborder/10 ">
                                                                <td className="text-center leading-none"> <span
                                                                    className="avatar avatar-md !rounded-full"> <img
                                                                        src={png38}
                                                                        className="p-2 !rounded-full bg-light" alt="picturdfgfde" /> </span>
                                                                </td>
                                                                <td>Leather jacket for men (S,M,L,XL)</td>
                                                                <td>Clothing</td>
                                                                <td><span
                                                                    className="badge badge-sm bg-success/10 text-success !font-normal">In
                                                                    Stock</span></td>
                                                                <td> <span className="font-semibold">6,890</span> </td>
                                                            </tr>
                                                            <tr
                                                                className="border-y border-inherit border-solid dark:border-defaultborder/10 ">
                                                                <td className="text-center leading-none"> <span
                                                                    className="avatar avatar-md !rounded-full"> <img
                                                                        src={png39}
                                                                        className="p-2 !rounded-full bg-light" alt="picturdfgfde" /> </span>
                                                                </td>
                                                                <td>Childrens Teddy toy of high quality</td>
                                                                <td>Toys</td>
                                                                <td><span
                                                                    className="badge badge-sm bg-danger/10 text-danger !font-normal">Out
                                                                    Of Stock</span></td>
                                                                <td> <span className="font-semibold">5,423</span> </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-center leading-none"> <span
                                                                    className="avatar avatar-md !rounded-full"> <img
                                                                        src={png40}
                                                                        className="p-2 !rounded-full bg-light" alt="picturdfgfde" /> </span>
                                                                </td>
                                                                <td>Orange smart watch with square dial (24mm)</td>
                                                                <td>Fashion</td>
                                                                <td><span
                                                                    className="badge badge-sm bg-danger/10 text-danger !font-normal">Out
                                                                    Of Stock</span></td>
                                                                <td> <span className="font-semibold">10,234</span> </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
                                        <div className="box">
                                            <div className="box-header justify-between">
                                                <div className="box-title"> Top Countries By Sales </div>
                                                <div className="hs-dropdown ti-dropdown"> <Link aria-label="anchor"
                                                    to="#"
                                                    className="flex items-center justify-center w-[1.75rem] h-[1.75rem] !text-defaulttextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
                                                    aria-expanded="false"><i className="fe fe-more-vertical text-[0.8rem]"></i>
                                                </Link>
                                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            to="#">Action</Link></li>
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            to="#">Another action</Link></li>
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            to="#">Something else here</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="box-body">
                                                <div className="flex items-center mb-2">
                                                    <h4 className="mb-0 leading-none text-[1.5rem] font-medium">38,256</h4> <span
                                                        className="badge bg-primary/10 mx-1 text-primary">12.24%</span> <span
                                                            className="text-[#8c9097] dark:text-white/50 text-[0.6875rem]">Since last
                                                        week</span>
                                                </div>
                                                <ul className="mb-0 pt-3 list-none">
                                                    <li className="mb-3">
                                                        <div className="flex justify-between items-center">
                                                            <div className="flex items-center leading-none"> <span
                                                                className="avatar avatar-xs me-2"> <img
                                                                    src={FrechFlag} alt="picturdfgfde"
                                                                    className="rounded-full h-[1.25rem] w-[1.25rem]" /> </span>
                                                                <span className="top-country-name w-[4.5rem]">France</span> </div>
                                                            <div> <i className="ti ti-trending-up text-[1rem] text-success"></i>
                                                            </div>
                                                            <div className="text-[0.875rem]">5,932</div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-3">
                                                        <div className="flex justify-between items-center">
                                                            <div className="flex items-center leading-none"> <span
                                                                className="avatar avatar-xs me-2 avatar-rounded"> <img
                                                                    src={FrechFlag} alt="picturdfgfde"
                                                                    className="rounded-full h-[1.25rem] w-[1.25rem]" /> </span>
                                                                <span className="top-country-name w-[4.5rem]">spain</span> </div>
                                                            <div> <i className="ti ti-trending-down text-[1rem] text-danger"></i>
                                                            </div>
                                                            <div className="text-[0.875rem]">5,383</div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-3">
                                                        <div className="flex justify-between items-center">
                                                            <div className="flex items-center leading-none"> <span
                                                                className="avatar avatar-xs me-2 avatar-rounded"> <img
                                                                    src={FrechFlag} alt="picturdfgfde"
                                                                    className="rounded-full h-[1.25rem] w-[1.25rem]" /> </span>
                                                                <span className="top-country-name w-[4.5rem]">Argentina</span>
                                                            </div>
                                                            <div> <i className="ti ti-trending-up text-[1rem] text-success"></i>
                                                            </div>
                                                            <div className="text-[0.875rem]">4,825</div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-3">
                                                        <div className="flex justify-between items-center">
                                                            <div className="flex items-center leading-none"> <span
                                                                className="avatar avatar-xs me-2 avatar-rounded"> <img
                                                                    src={UsFlag} alt="picturdfgfde"
                                                                    className="rounded-full h-[1.25rem] w-[1.25rem]" /> </span>
                                                                <span className="top-country-name w-[4.5rem]">Uae</span> </div>
                                                            <div> <i className="ti ti-trending-up text-[1rem] text-success"></i>
                                                            </div>
                                                            <div className="text-[0.875rem]">4,527</div>
                                                        </div>
                                                    </li>
                                                    <li className="mb-0">
                                                        <div className="flex justify-between items-center">
                                                            <div className="flex items-center leading-none"> <span
                                                                className="avatar avatar-xs me-2 avatar-rounded"> <img
                                                                    src={GermanyFlag} alt="picturdfgfde"
                                                                    className="rounded-full h-[1.25rem] w-[1.25rem]" /> </span>
                                                                <span className="top-country-name w-[4.5rem]">Germany</span> </div>
                                                            <div> <i className="ti ti-trending-down text-[1rem] text-danger"></i>
                                                            </div>
                                                            <div className="text-[0.875rem]">4,501</div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
                                        <div className="box">
                                            <div className="box-header justify-between">
                                                <div className="box-title"> Top Customers </div>
                                                <div className="hs-dropdown ti-dropdown"> <Link to="#"
                                                    className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                                                    aria-expanded="false"> View All<i
                                                        className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                                </Link>
                                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            to="#">Today</Link></li>
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            to="#">This Week</Link></li>
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            to="#">Last Week</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="box-body">
                                                <ul className="list-none mb-0">
                                                    <li className="mb-4"> <Link to="#">
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-start justify-center"> <img
                                                                src={face4} alt="picturdfgfde"
                                                                className="avatar avatar-md avatar-rounded !mb-0 me-2" />
                                                                <div>
                                                                    <p className="mb-0 font-semibold">Emma Wilson</p>
                                                                    <p
                                                                        className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">
                                                                        15 Purchases<i
                                                                            className="bi bi-patch-check-fill text-[0.875rem] text-primary ms-2"></i>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div> <span className="text-[0.875rem]">$1,835</span> </div>
                                                        </div>
                                                    </Link> </li>
                                                    <li className="mb-4"> <Link to="#">
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-start justify-center"> <img
                                                                src={face15} alt="picturdfgfde"
                                                                className="avatar avatar-md avatar-rounded !mb-0 me-2" />
                                                                <div>
                                                                    <p className="mb-0 font-semibold">Robert Lewis</p>
                                                                    <p
                                                                        className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">
                                                                        18 Purchases<i
                                                                            className="bi bi-patch-check-fill text-[0.875rem] text-primary ms-2"></i>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div> <span className="text-[0.875rem]">$2,415</span> </div>
                                                        </div>
                                                    </Link> </li>
                                                    <li className="mb-4"> <Link to="#">
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-start justify-center"> <img
                                                                src={face5} alt="picturdfgfde"
                                                                className="avatar avatar-md avatar-rounded !mb-0 me-2" />
                                                                <div>
                                                                    <p className="mb-0 font-semibold">Angelina Hose</p>
                                                                    <p
                                                                        className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">
                                                                        21 Purchases<i
                                                                            className="bi bi-patch-check-fill text-[0.875rem] text-primary ms-2"></i>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div> <span className="text-[0.875rem]">$2,341</span> </div>
                                                        </div>
                                                    </Link> </li>
                                                    <li className="mb-0"> <Link to="#">
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-start justify-center"> <img
                                                                src={face2} alt="picturdfgfde"
                                                                className="me-2 avatar avatar-md avatar-rounded !mb-0" />
                                                                <div>
                                                                    <p className="mb-0 font-semibold">Samantha Sam</p>
                                                                    <p
                                                                        className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">
                                                                        24 Purchases<i
                                                                            className="bi bi-patch-check-fill text-[0.875rem] text-primary ms-2"></i>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div> <span className="text-[0.875rem]">2,624</span> </div>
                                                        </div>
                                                    </Link> </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-x-6">
                            <div className="xl:col-span-12 col-span-12">
                                <div className="box">
                                    <div className="box-header justify-between">
                                        <div className="box-title"> Products Overview </div>
                                        <div className="flex flex-wrap gap-2">
                                            <div> <input className="ti-form-control form-control-sm" type="text"
                                                placeholder="Search Here" aria-label=".form-control-sm example" /> </div>
                                            <div className="hs-dropdown ti-dropdown"> <Link to="#"
                                                className="ti-btn bg-primary text-white !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium"
                                                aria-expanded="false"> Sort By<i
                                                    className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i> </Link>
                                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                        to="#">New</Link></li>
                                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                        to="#">Popular</Link></li>
                                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                        to="#">Relevant</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-body">
                                        <div className="overflow-x-auto">
                                            <table className="table min-w-full whitespace-nowrap table-hover border table-bordered">
                                                <thead>
                                                    <tr
                                                        className="border border-inherit border-solid  dark:border-defaultborder/10 ">
                                                        <th scope="col" className="!text-start">Name</th>
                                                        <th scope="col" className="!text-start">Product Id</th>
                                                        <th scope="col" className="!text-start">Price</th>
                                                        <th scope="col" className="!text-start">Status</th>
                                                        <th scope="col" className="!text-start">Sales</th>
                                                        <th scope="col" className="!text-start">Revenue</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr
                                                        className="border-y border-inherit border-solid dark:border-defaultborder/10">
                                                        <td>
                                                            <div className="flex items-center">
                                                                <div className="me-2 leading-none"> <span className="avatar avatar-sm">
                                                                    <img src={png36} alt="picturdfgfde" />
                                                                </span> </div>
                                                                <div className="text-sm">Niker College Bag</div>
                                                            </div>
                                                        </td>
                                                        <td> <span className="font-semibold">#1734-9743</span> </td>
                                                        <td> $199.99 </td>
                                                        <td> <span className="badge bg-success/10 text-success">Available</span>
                                                        </td>
                                                        <td> <span className="">3,903</span> </td>
                                                        <td> <span className="">$67,899.24</span> </td>
                                                    </tr>
                                                    <tr
                                                        className="border-y border-inherit border-solid dark:border-defaultborder/10">
                                                        <td>
                                                            <div className="flex items-center">
                                                                <div className="me-2 leading-none"> <span className="avatar avatar-sm">
                                                                    <img src={png37} alt="picturdfgfde" />
                                                                </span> </div>
                                                                <div className="">Dslr Camera (50mm f/1.9 HRM Lens)</div>
                                                            </div>
                                                        </td>
                                                        <td> <span className="font-semibold">#1234-4567</span> </td>
                                                        <td> $1,299.99 </td>
                                                        <td> <span className="badge bg-success/10 text-success">Available</span>
                                                        </td>
                                                        <td> <span className="">12,435</span> </td>
                                                        <td> <span className="">$3,24,781.92</span> </td>
                                                    </tr>
                                                    <tr
                                                        className="border-y border-inherit border-solid dark:border-defaultborder/10">
                                                        <td>
                                                            <div className="flex items-center">
                                                                <div className="me-2 leading-none"> <span className="avatar avatar-sm">
                                                                    <img src={png38} alt="picturdfgfde" />
                                                                </span> </div>
                                                                <div className="text-[0.875rem]">Outdoor Bomber Jacket</div>
                                                            </div>
                                                        </td>
                                                        <td> <span className="font-semibold">#1902-9883</span> </td>
                                                        <td> $99.99 </td>
                                                        <td> <span className="badge bg-danger/10 text-danger">Not Available</span>
                                                        </td>
                                                        <td> <span className="">5,143</span> </td>
                                                        <td> <span className="">$76,102.76</span> </td>
                                                    </tr>
                                                    <tr
                                                        className="border-y border-inherit border-solid dark:border-defaultborder/10">
                                                        <td>
                                                            <div className="flex items-center">
                                                                <div className="me-2 leading-none"> <span className="avatar avatar-sm">
                                                                    <img src={png39} alt="picturdfgfde" />
                                                                </span> </div>
                                                                <div className="text-[0.875rem]">Light Blue Teddy</div>
                                                            </div>
                                                        </td>
                                                        <td> <span className="font-semibold">#8745-1232</span> </td>
                                                        <td> $79.00 </td>
                                                        <td> <span className="badge bg-warning/10 text-warning">Limited Deal</span>
                                                        </td>
                                                        <td> <span className=""> 7,183</span> </td>
                                                        <td> <span className="">$78,211.83</span> </td>
                                                    </tr>
                                                    <tr
                                                        className="border-y border-inherit border-solid dark:border-defaultborder/10">
                                                        <td>
                                                            <div className="flex items-center">
                                                                <div className="me-2 leading-none"> <span className="avatar avatar-sm">
                                                                    <img src={png40} alt="picturdfgfde" />
                                                                </span> </div>
                                                                <div className="text-[0.875rem]">Orange Smart Watch (24mm)</div>
                                                            </div>
                                                        </td>
                                                        <td> <span className="font-semibold">#1962-9033</span> </td>
                                                        <td> $199.99 </td>
                                                        <td> <span className="badge bg-primary/10 text-primary">In Offer</span>
                                                        </td>
                                                        <td> <span className="">10,287</span> </td>
                                                        <td> <span className="">$2,32,982.99</span> </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="box-footer">
                                        <div className="sm:flex items-center">
                                            <div> Showing 5 Entries <i className="bi bi-arrow-right ms-2 font-semibold"></i> </div>
                                            <div className="ms-auto">
                                                <nav aria-label="Page navigation" className="pagination-style-4">
                                                    <ul className="ti-pagination mb-0">
                                                        <li className="page-item disabled"> <Link className="page-link"
                                                            to="#"> Prev </Link> </li>
                                                        <li className="page-item"><Link className="page-link active"
                                                            to="#">1</Link></li>
                                                        <li className="page-item"><Link className="page-link"
                                                            to="#">2</Link></li>
                                                        <li className="page-item"> <Link className="page-link !text-primary"
                                                            to="#"> next </Link> </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="search-modal" className="hs-overlay ti-modal hidden mt-[1.75rem]">
                    <div className="ti-modal-box">
                        <div
                            className="ti-modal-content !border !border-defaultborder dark:!border-defaultborder/10 !rounded-[0.5rem]">
                            <div className="ti-modal-body">
                                <div className="input-group border-[2px] border-primary rounded-[0.25rem] w-full flex"> <Link
                                    aria-label="anchor" to="#"
                                    className="input-group-text flex items-center bg-light border-e-[#dee2e6] !py-[0.375rem] !px-[0.75rem] !rounded-none !text-[0.875rem]"
                                    id="Search-Grid"><i className="fe fe-search header-link-icon text-[0.875rem]"></i></Link>
                                    <input type="search"
                                        className="form-control border-0 px-2 !text-[0.8rem] w-full focus:ring-transparent"
                                        placeholder="Search" aria-label="Username" /> <Link aria-label="anchor"
                                            to="#"
                                            className="flex items-center input-group-text bg-light !py-[0.375rem] !px-[0.75rem]"
                                            id="voice-search"><i className="fe fe-mic header-link-icon"></i></Link>
                                    <div className="hs-dropdown ti-dropdown"> <Link aria-label="anchor" to="#"
                                        className="flex items-center hs-dropdown-toggle ti-dropdown-toggle btn btn-light btn-icon !bg-light !py-[0.375rem] !rounded-none !px-[0.75rem] text-[0.95rem] h-[2.413rem] w-[2.313rem]">
                                        <i className="fe fe-more-vertical"></i> </Link>
                                        <ul className="absolute hs-dropdown-menu ti-dropdown-menu !-mt-2 !p-0 hidden">
                                            <li><Link className="ti-dropdown-item flex text-defaulttextcolor dark:text-defaulttextcolor/70 !py-[0.5rem] !px-[0.9375rem] !text-[0.8125rem] font-medium"
                                                to="#">Action</Link></li>
                                            <li><Link className="ti-dropdown-item flex text-defaulttextcolor dark:text-defaulttextcolor/70 !py-[0.5rem] !px-[0.9375rem] !text-[0.8125rem] font-medium"
                                                to="#">Another action</Link></li>
                                            <li><Link className="ti-dropdown-item flex text-defaulttextcolor dark:text-defaulttextcolor/70 !py-[0.5rem] !px-[0.9375rem] !text-[0.8125rem] font-medium"
                                                to="#">Something else here</Link></li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li><Link className="ti-dropdown-item flex text-defaulttextcolor dark:text-defaulttextcolor/70 !py-[0.5rem] !px-[0.9375rem] !text-[0.8125rem] font-medium"
                                                to="#">Separated link</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <p
                                        className="font-normal  text-[#8c9097] dark:text-white/50 text-[0.813rem] dark:text-gray-200 mb-2">
                                        Are You Looking For...</p><span
                                            className="search-tags text-[0.75rem] !py-[0rem] !px-[0.55rem] dark:border-defaultborder/10"><i
                                                className="fe fe-user me-2"></i>People<Link to="#"
                                                    className="tag-addon header-remove-btn"><span className="sr-only">Remove badge</span><i
                                                        className="fe fe-x"></i></Link></span> <span
                                                            className="search-tags text-[0.75rem] !py-[0rem] !px-[0.55rem] dark:border-defaultborder/10"><i
                                                                className="fe fe-file-text me-2"></i>Pages<Link to="#"
                                                                    className="tag-addon header-remove-btn"><span className="sr-only">Remove badge</span><i
                                                                        className="fe fe-x"></i></Link></span> <span
                                                                            className="search-tags text-[0.75rem] !py-[0rem] !px-[0.55rem] dark:border-defaultborder/10"><i
                                                                                className="fe fe-align-left me-2"></i>Articles<Link to="#"
                                                                                    className="tag-addon header-remove-btn"><span className="sr-only">Remove badge</span><i
                                                                                        className="fe fe-x"></i></Link></span> <span
                                                                                            className="search-tags text-[0.75rem] !py-[0rem] !px-[0.55rem] dark:border-defaultborder/10"><i
                                                                                                className="fe fe-server me-2"></i>Tags<Link to="#"
                                                                                                    className="tag-addon header-remove-btn"><span className="sr-only">Remove badge</span><i
                                                                                                        className="fe fe-x"></i></Link></span>
                                </div>
                                <div className="my-[1.5rem]">
                                    <p className="font-normal  text-[#8c9097] dark:text-white/50 text-[0.813rem] mb-2">Recent Search
                                        :</p>
                                    <div id="dismiss-alert" role="alert"
                                        className="!p-2 border dark:border-defaultborder/10 rounded-[0.3125rem] flex items-center text-defaulttextcolor dark:text-defaulttextcolor/70 !mb-2 !text-[0.8125rem] alert">
                                        <Link to="#"><span>Notifications</span></Link> <Link aria-label="anchor"
                                            className="ms-auto leading-none" to="#"
                                            data-hs-remove-element="#dismiss-alert"><i
                                                className="fe fe-x !text-[0.8125rem] text-[#8c9097] dark:text-white/50"></i></Link>
                                    </div>
                                    <div id="dismiss-alert1" role="alert"
                                        className="!p-2 border dark:border-defaultborder/10 rounded-[0.3125rem] flex items-center text-defaulttextcolor dark:text-defaulttextcolor/70 !mb-2 !text-[0.8125rem] alert">
                                        <Link to="#"><span>Alerts</span></Link> <Link aria-label="anchor"
                                            className="ms-auto leading-none" to="#"
                                            data-hs-remove-element="#dismiss-alert"><i
                                                className="fe fe-x !text-[0.8125rem] text-[#8c9097] dark:text-white/50"></i></Link>
                                    </div>
                                    <div id="dismiss-alert2" role="alert"
                                        className="!p-2 border dark:border-defaultborder/10 rounded-[0.3125rem] flex items-center text-defaulttextcolor dark:text-defaulttextcolor/70 !mb-0 !text-[0.8125rem] alert">
                                        <Link to="#"><span>Mail</span></Link> <Link aria-label="anchor" className="ms-auto lh-1"
                                            to="#" data-hs-remove-element="#dismiss-alert"><i
                                                className="fe fe-x !text-[0.8125rem] text-[#8c9097] dark:text-white/50"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="ti-modal-footer !py-[1rem] !px-[1.25rem]">
                                <div className="inline-flex rounded-md  shadow-sm"> <button type="button"
                                    className="ti-btn-group !px-[0.75rem] !py-[0.45rem]  rounded-s-[0.25rem] !rounded-e-none ti-btn-primary !text-[0.75rem] dark:border-white/10">
                                    Search </button> <button type="button"
                                        className="ti-btn-group  ti-btn-primary-full rounded-e-[0.25rem] dark:border-white/10 !text-[0.75rem] !rounded-s-none !px-[0.75rem] !py-[0.45rem]">
                                        Clear Recents </button> </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer
                    className="footer mt-auto xl:ps-[15rem]  font-normal font-inter bg-white text-defaultsize leading-normal text-[0.813] shadow-[0_0_0.4rem_rgba(0,0,0,0.1)] dark:bg-bodybg py-4 text-center">
                    <div className="container"> <span className="text-gray dark:text-defaulttextcolor/50"> All copyrights reserved © <span
                        id="year">2024</span> <Link to="#"
                            className="text-defaulttextcolor font-semibold dark:text-defaulttextcolor">Dizital Dreams</Link>. Designed with
                        <span className="bi bi-heart-fill text-danger"></span> by <Link to="#"> <span
                            className="font-semibold text-primary underline">Suraj Singh</span> </Link></span>
                    </div>
                </footer>
            </div>
            <div className="scrollToTop" style={{ display: "none" }}> <span className="arrow"><i
                className="ri-arrow-up-s-fill text-xl"></i></span> </div>
        </>
    )
}

export default Home