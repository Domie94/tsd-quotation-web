import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getQuotation } from "../../store/quotations/action"
import { MagnifyingGlassIcon, PencilSquareIcon, PlusIcon, PrinterIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { numberDot } from "../../functions";
import moment from "moment/moment";

export default function Main() {

    const dispatch = useDispatch();
    const naviagte = useNavigate();
    const { t } = useTranslation();
    const [querySearchName, setQuerySearchName] = useState("");

    const { quotationData, error, loading } = useSelector(state => ({
        quotationData: state.quotations.quotationData,
        error: state.quotations.error,
        loading: state.quotations.loading,
    }), shallowEqual);

    useEffect(() => {
        dispatch(getQuotation(1));
    }, [dispatch]);

    const filteredSearchName = querySearchName === "" ? quotationData.data : quotationData.data.filter((item) => {
        return item.name.toLowerCase().includes(querySearchName.toLowerCase());
    });

    const handleAddQuotations = () => {
        localStorage.setItem("path", "Quotations");
        naviagte("/quotations");
    }

    const handleEditQuotations = (id) => {
        localStorage.setItem("path", "Edit Quotations");
        naviagte(`/quotations/edit/${id}`);
    }

    const handlePrintQuotations = (id) => {
        localStorage.setItem("path", "Print");
        naviagte(`/quotation/report/${id}`);
    }

    return (
        <>
            <div className="bg-white">
                {loading && <p className="text-sm text-gray-600">{t('Loading')}...</p>}
                {error ?
                    <p className="text-sm text-red-600">{t('Error')}: {error.response.data.error}</p> :
                    <div className="grid grid-cols-1 items-start gap-x-6 gap-y-2 lg:grid-cols-12 lg:gap-8">
                        <div className="mt-2 grid grid-cols-1 gap-4 lg:col-span-12 xl:col-span-6">

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
                            {(filteredSearchName || []).map((item, index) => (
                                <div
                                    key={index}
                                    className="relative bg-white shadow-lg rounded-md p-2 ring-1 ring-gray-900/20 sm:p-2"
                                >
                                    {/* <p className="flex items-baseline gap-x-2">
                                        <span className="text-lg font-semibold tracking-tight text-gray-900">{t('Name')}:&nbsp;{item.name}</span>
                                    </p>
                                    <p className="mt-1 text-sm text-gray-600">{t('Description')}:&nbsp;{item.description}</p> */}
                                    <p className="flex items-baseline gap-x-2">
                                        <span className="text-lg font-semibold tracking-tight text-gray-900">{t('Name')}:&nbsp;{item.id}</span>
                                    </p>
                                    <div
                                        className="flex flex-wrap items-baseline justify-between -mt-8 -pt-2"
                                    >
                                        <dt></dt>
                                        <dd>
                                            <span className="text-lg font-semibold tracking-tight text-gray-900">{item.quote_number}</span>
                                        </dd>
                                    </div>
                                    <p className="flex items-baseline gap-x-2 mt-2">
                                        <span className="text-sm text-gray-600">{t('Phone')}:&nbsp;{item.phone}</span>
                                    </p>
                                    <div
                                        className="flex flex-wrap items-baseline justify-between -mt-6 -pt-2"
                                    >
                                        <dt></dt>
                                        <dd>
                                            <span className="text-sm text-gray-600">{moment(item.date).format('DD/MM/YYYY')}</span>
                                        </dd>
                                    </div>
                                    <p className="flex items-baseline gap-x-2 mt-1">
                                        <span className="text-sm text-gray-600">{t('Email')}:&nbsp;{item.email}</span>
                                    </p>
                                    <div
                                        className="flex flex-wrap items-baseline justify-between -mt-6 -pt-2"
                                    >
                                        <dt></dt>
                                        <dd>
                                            <span className="text-sm text-gray-800 font-bold">1{index + 1}0,000.00 KIP</span>
                                        </dd>
                                    </div>
                                    <div
                                        className="flex flex-wrap items-baseline justify-between mt-2"
                                    >
                                        <dt>
                                            <button
                                                type="button"
                                                onClick={() => handlePrintQuotations(item.id)}
                                                className="inline-flex items-center text-sm text-gray-600  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                            >
                                                <PrinterIcon aria-hidden="true" className="size-7" />
                                            </button>
                                        </dt>
                                        <dd>
                                            <button
                                                type="button"
                                                onClick={() => handleEditQuotations(item.id)}
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
                    onClick={() => handleAddQuotations()}
                    className="inline-flex items-center gap-x-2 rounded-full px-4 py-2 text-sm text-white bg-gray-600 shadow-lg hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                >
                    <PlusIcon aria-hidden="true" className="size-8" />
                </button>
            </div>
        </>
    );
}
