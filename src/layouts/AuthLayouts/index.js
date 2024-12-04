import React, { useState } from 'react';
import withRouter from '../../components/withRouter';
import PropTypes from "prop-types";
//components 
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
} from '@headlessui/react'
import {
    ArchiveBoxIcon,
    Bars3Icon,
    BuildingOfficeIcon,
    DocumentChartBarIcon,
    DocumentPlusIcon,
    HomeIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const navigation = [
    { id: 0, name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: Number(localStorage.getItem('current')) === 0 ? true : false },
    { id: 1, name: 'Company', href: '/company', icon: BuildingOfficeIcon, current: Number(localStorage.getItem('current')) === 1 ? true : false },
    { id: 2, name: 'Customers', href: '/customers', icon: UsersIcon, current: Number(localStorage.getItem('current')) === 2 ? true : false },
    { id: 3, name: 'Products', href: '/products', icon: ArchiveBoxIcon, current: Number(localStorage.getItem('current')) === 3 ? true : false },
    { id: 4, name: 'Quotations', href: '/quotations', icon: DocumentPlusIcon, current: Number(localStorage.getItem('current')) === 4 ? true : false },
    { id: 5, name: 'Quotation Lists', href: '/quotation/lists', icon: DocumentChartBarIcon, current: Number(localStorage.getItem('current')) === 5 ? true : false },
]

const useLanguage = [
    { name: 'en' },
    { name: 'la' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Layout = (props) => {

    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [navigationState, setNavigationState] = useState(navigation); // State for navigation

    const FuncOnchange = (id, href) => {
        const updatedNavigation = navigationState.map((item) => ({
            ...item,
            current: item.id === id, // Set `current` to true for the selected item
        }));
        localStorage.setItem('path', "");
        setNavigationState(updatedNavigation);
        localStorage.setItem('current', Number(id));
        navigate(href);
        setSidebarOpen(false);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('i18nextLng', lng);
    };

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    }

    return (
        <React.Fragment>
            <div>
                <Dialog open={sidebarOpen} onClose={() => setSidebarOpen(false)} className="relative z-50 lg:hidden">
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
                    />

                    <div className="fixed inset-0 flex">
                        <DialogPanel
                            transition
                            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
                        >
                            <TransitionChild>
                                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                                    <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                                        <span className="sr-only">Close sidebar</span>
                                        <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                                    </button>
                                </div>
                            </TransitionChild>
                            {/* Sidebar component, swap this element with another sidebar if you like */}
                            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                                <div className="flex h-16 shrink-0 items-center">
                                    <img
                                        alt="Your Company"
                                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                        className="h-8 w-auto"
                                    />
                                </div>
                                <nav className="flex flex-1 flex-col">
                                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                        <li>
                                            <ul role="list" className="-mx-2 space-y-1">
                                                {navigationState.map((item, index) => (
                                                    <li key={index} onClick={() => FuncOnchange(item.id, item.href)} >
                                                        <button
                                                            className={classNames(
                                                                item.current
                                                                    ? 'bg-gray-50 text-gray-600'
                                                                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-600',
                                                                'group flex gap-x-3 rounded-md p-2 text-lg font-semibold',
                                                            )}
                                                        >
                                                            <item.icon
                                                                aria-hidden="true"
                                                                className={classNames(
                                                                    item.current ? 'text-gray-600' : 'text-gray-400 group-hover:text-gray-600',
                                                                    'size-6 shrink-0',
                                                                )}
                                                            />
                                                            {t(item.name)}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                        <li className="mt-auto text-sm">
                                            {t('© 2024 All rights reserved by: TSD SOLE CO.,LTD')}
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog>

                {/* Static sidebar for desktop */}
                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
                        <div className="flex h-16 shrink-0 items-center">
                            <img
                                alt="Your Company"
                                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            />
                        </div>
                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                <li>
                                    <ul role="list" className="-mx-2 space-y-1">
                                        {navigationState.map((item, index) => (
                                            <li key={index} onClick={() => FuncOnchange(item.id, item.href)} >
                                                <button
                                                    className={classNames(
                                                        item.current
                                                            ? 'bg-gray-50 text-gray-600'
                                                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-600',
                                                        'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                                    )}
                                                >
                                                    <item.icon
                                                        aria-hidden="true"
                                                        className={classNames(
                                                            item.current ? 'text-gray-600' : 'text-gray-400 group-hover:text-gray-600',
                                                            'size-6 shrink-0',
                                                        )}
                                                    />
                                                    {t(item.name)}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li className="mt-auto text-sm">
                                    {t('© 2024 All rights reserved by: TSD SOLE CO.,LTD')}
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="lg:pl-72">
                    <div className="sticky top-0 z-40 flex h-12 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                        <button
                            type="button"
                            onClick={() => setSidebarOpen(true)}
                            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                        >
                            <span className="sr-only">Open sidebar</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>
                        {/* Separator */}
                        <div
                            aria-hidden="true"
                            className="h-6 w-px bg-gray-200 lg:hidden"
                        />
                        <div className="flex-1 text-center lg:text-left font-bold text-lg md:text-xl">
                            {navigationState.map((item, index) => (
                                <span key={index} className="text-lg md:text-xl">
                                    {item.current ? t(item.name) : null}
                                </span>
                            ))} {!localStorage.getItem('path') ? "" : "/ " + t(localStorage.getItem('path'))}
                        </div>
                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-auto">
                            <MenuButton className="-m-1.5 flex items-center p-1.5">
                                <span className="sr-only">Open user menu</span>
                                <span className="lg:flex lg:items-center">
                                    <span
                                        aria-hidden="true"
                                        className="ml-4 text-sm/6 font-semibold text-gray-900 border border-gray-200 rounded-md p-1 lg:px-1 lg:py-0 uppercase"
                                    >
                                        {localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng') : 'en'}
                                    </span>
                                </span>
                            </MenuButton>
                            <MenuItems
                                transition
                                className="absolute right-0 left-auto z-10 mt-2.5 w-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                {useLanguage.map((item, index) => (
                                    <MenuItem key={index}>
                                        <button
                                            onClick={() => changeLanguage(item.name)}
                                            className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none uppercase"
                                        >
                                            {t(item.name)}
                                        </button>
                                    </MenuItem>
                                ))}
                            </MenuItems>
                        </Menu>

                        <button onClick={() => handleLogout()} className='text-sm/6 font-semibold text-gray-900 border border-gray-200 rounded-md px-1 lg:px-1 lg:py-0'>
                            {t('Logout')}
                        </button>
                    </div>

                    <main className="py-2">
                        <div className="px-4 sm:px-6 lg:px-8 bg">
                            {props.children}
                        </div>
                    </main>
                </div>

            </div>
        </React.Fragment>
    );

};

Layout.propTypes = {
    children: PropTypes.any
};

export default withRouter(Layout);