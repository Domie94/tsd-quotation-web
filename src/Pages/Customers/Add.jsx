import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getCustomer } from "../../store/customers/action"
import { ChevronLeftIcon, ChevronRightIcon, MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";

export default function Add() {

    const { t } = useTranslation();

    return (
        <>
            <div className="bg-white">
                {/* {loading && <p className="text-sm text-gray-600">{t('Loading')}...</p>} */}
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 mb-2">{t('Add Customer')}</h2>

                <div className="grid grid-cols-1 items-start gap-x-6 gap-y-2 lg:grid-cols-12 lg:gap-8">
                    <div className="grid grid-cols-1 gap-4 lg:col-span-12 xl:col-span-4">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-12">
                            <div className="sm:col-span-12">
                                <div className="mt-2 relative">
                                    <label
                                        htmlFor="name"
                                        className="absolute -top-2 left-2 inline-block bg-white px-1 text-sm font-medium text-gray-900"
                                    >
                                        Name
                                    </label>
                                    <input
                                        id="first-name"
                                        name="first-name"
                                        type="text"
                                        autoComplete="given-name"
                                        placeholder={t('Name') + "..."}
                                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-lg md:text-md"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-12">
                                <div className="mt-2">
                                    <input
                                        id="last-name"
                                        name="last-name"
                                        type="text"
                                        autoComplete="family-name"
                                        placeholder={t('Address') + "..."}
                                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-lg md:text-md"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-12">
                                <div className="mt-2">
                                    <input
                                        id="last-name"
                                        name="last-name"
                                        type="text"
                                        autoComplete="family-name"
                                        placeholder={t('Phone') + "..."}
                                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-lg md:text-md"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-12">
                                <div className="mt-2">
                                    <input
                                        id="last-name"
                                        name="last-name"
                                        type="text"
                                        autoComplete="family-name"
                                        placeholder={t('Email') + "..."}
                                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-lg md:text-md"
                                    />
                                </div>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="inline-flex items-center w-14 gap-x-1.5 rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            {/* <CheckCircleIcon aria-hidden="true" className="-ml-0.5 size-5" /> */}
                            {t('Save')}
                        </button>

                    </div>
                    <div className="mt-2 grid grid-cols-1 gap-4 lg:col-span-12 xl:col-span-8">

                    </div>
                </div>


            </div>
        </>
    );
}
