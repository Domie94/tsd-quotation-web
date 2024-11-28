import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getCustomer } from "../../store/customers/action"
import { ChevronLeftIcon, ChevronRightIcon, MagnifyingGlassIcon, PencilSquareIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const stats = [
    { name: 'Revenue', value: '$405,091.00', change: '+4.75%', changeType: 'positive' },
    { name: 'Overdue invoices', value: '$12,787.00', change: '+54.02%', changeType: 'negative' },
    { name: 'Outstanding invoices', value: '$245,988.00', change: '-1.39%', changeType: 'positive' },
    { name: 'Expenses', value: '$30,156.00', change: '+10.18%', changeType: 'negative' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Main() {

    const dispatch = useDispatch();
    const naviagte = useNavigate();
    const { t } = useTranslation();
    const [querySearchName, setQuerySearchName] = useState("");

    const { customerData, error, loading } = useSelector(state => ({
        customerData: state.customers.customerData,
        error: state.customers.error,
        loading: state.customers.loading,
    }), shallowEqual);

    useEffect(() => {
        dispatch(getCustomer());
    }, [dispatch]);

    const filteredSearchName = querySearchName === "" ? customerData : customerData.filter((item) => {
        return item.name.toLowerCase().includes(querySearchName.toLowerCase());
    });

    const handleAddCustomer = () => {
        localStorage.setItem("path", "Add Customer");
        naviagte("/customers/add");
    }

    const handleEditCustomer = (id) => {
        localStorage.setItem("path", "Edit Customer");
        naviagte(`/customers/edit/${id}`);
    }

    return (
        <>
            <div className="bg-white">
                {loading && <p className="text-sm text-gray-600">{t('Loading')}...</p>}
                {error ?
                    <p className="text-sm text-red-600">{t('Error')}: {JSON.stringify(error)}</p> :
                    <div className="grid grid-cols-1 items-start gap-x-6 gap-y-2 lg:grid-cols-12 lg:gap-8">
                        <div className="mt-2 grid grid-cols-1 gap-4 lg:col-span-12 xl:col-span-6">

                            {/* <div className="hidden lg:flex">
                                <div className="w-1/2">
                                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">{t('Customers')}</h2>
                                </div>
                                <div className="w-1/2 flex flex-row-reverse">
                                    <button
                                        type="button"
                                        onClick={() => handleAddCustomer()}
                                        className="inline-flex items-center gap-x-2 rounded-md px-1.5 py-0.5 text-sm text-gray-600 border border-gray-200 shadow-lg hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        <PlusIcon aria-hidden="true" className="size-6" />
                                    </button>
                                </div>
                            </div> */}

                            {/* begin search */}
                            <div>
                                <label htmlFor="account-number" className="block text-md font-medium text-gray-900">
                                    {t('Search by Nane')}:
                                </label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        id="account-number"
                                        name="account-number"
                                        value={querySearchName}
                                        onChange={(e) => {
                                            setQuerySearchName(e.target.value);
                                        }}
                                        type="text"
                                        placeholder={t('Name') + " ..."}
                                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                    />
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <MagnifyingGlassIcon aria-hidden="true" className="size-5 text-gray-400" />
                                    </div>
                                </div>
                            </div>
                            {/* end search */}

                            {/* begin data list */}
                            {filteredSearchName.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative bg-white shadow-lg rounded-md p-2 ring-1 ring-gray-900/20 sm:p-2"
                                >
                                    <p className="flex items-baseline gap-x-2">
                                        <span className="text-lg font-semibold tracking-tight text-gray-900">{t('Name')}:&nbsp;{item.name}</span>
                                    </p>
                                    <p className="mt-1 text-sm text-gray-600">{t('Address')}:&nbsp;{item.address}</p>
                                    <p className="mt-0 text-sm text-gray-600">{t('Phone')}:&nbsp;{item.phone}</p>
                                    <p className="mt-0 text-sm text-gray-600">{t('Email')}:&nbsp;{item.email}</p>
                                    <div
                                        className="flex flex-wrap items-baseline justify-between -mt-8 -pt-2"
                                    >
                                        <dt></dt>
                                        <dd>
                                            <button
                                                type="button"
                                                onClick={() => handleEditCustomer(item.id)}
                                                className="inline-flex items-center text-sm text-gray-600  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                            >
                                                <PencilSquareIcon aria-hidden="true" className="size-7" />
                                            </button>
                                        </dd>
                                    </div>
                                </div>
                            ))}
                            {/* end data list */}

                            {/* begin pagination */}
                            {/* <div className="flex items-center justify-between bg-white py-1 mb-10" style={querySearchName ? { display: 'none' } : null}>
                                <div className="flex flex-1 justify-between sm:hidden">
                                    <a
                                        href="#"
                                        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                    >
                                        {t('Previous')}
                                    </a>
                                    <div>
                                        <p className="text-sm text-gray-700 mt-3">
                                            {t('Showing')} <span className="font-medium">1</span> {t('to')}  <span className="font-medium">10</span> {t('of')} {' '}
                                            <span className="font-medium">97</span> {t('results')}
                                        </p>
                                    </div>
                                    <a
                                        href="#"
                                        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                    >
                                        {t('Next')}
                                    </a>
                                </div>
                                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                                    <div>
                                        <p className="text-sm text-gray-700">
                                            {t('Showing')} <span className="font-medium">1</span> {t('to')}  <span className="font-medium">10</span> {t('of')} {' '}
                                            <span className="font-medium">97</span> {t('results')}
                                        </p>
                                    </div>
                                    <div>
                                        <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                                            <a
                                                href="#"
                                                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                            >
                                                <span className="sr-only">Previous</span>
                                                <ChevronLeftIcon aria-hidden="true" className="size-5" />
                                            </a>
                                            <a
                                                href="#"
                                                aria-current="page"
                                                className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                1
                                            </a>
                                            <a
                                                href="#"
                                                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                            >
                                                2
                                            </a>
                                            <a
                                                href="#"
                                                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                                            >
                                                3
                                            </a>
                                            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                                                ...
                                            </span>
                                            <a
                                                href="#"
                                                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                                            >
                                                8
                                            </a>
                                            <a
                                                href="#"
                                                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                            >
                                                9
                                            </a>
                                            <a
                                                href="#"
                                                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                            >
                                                10
                                            </a>
                                            <a
                                                href="#"
                                                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                            >
                                                <span className="sr-only">Next</span>
                                                <ChevronRightIcon aria-hidden="true" className="size-5" />
                                            </a>
                                        </nav>
                                    </div>
                                </div>
                            </div> */}
                            {/* end pagination */}

                        </div>
                        <div className="mt-2 grid grid-cols-1 gap-4 lg:col-span-12 xl:col-span-6">

                        </div>
                    </div>
                }
            </div>
            <div className="fixed bottom-4 right-4">
            <button
                type="button"
                onClick={() => handleAddCustomer()}
                className="inline-flex items-center gap-x-2 rounded-full px-4 py-2 text-sm text-white bg-gray-600 shadow-lg hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
            >
                <PlusIcon aria-hidden="true" className="size-8" />
            </button>
        </div>
        </>
    );
}
