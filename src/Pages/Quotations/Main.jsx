import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import moment from "moment/moment";
import { PencilSquareIcon, PlusCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getQuotationCustomerIdClear } from "../../store/quotations/action";

export default function Main() {

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));

    const { quotationCustomerDataId, error, loading } = useSelector(state => ({
        quotationCustomerDataId: state.quotations.quotationCustomerDataId,
        error: state.quotations.error,
        loading: state.quotations.loading,
    }), shallowEqual);

    const handleSelectCustomer = () => {
        localStorage.setItem("path", "Select Customer");
        navigate('/quotations/select/customer');
    }

    const handleSelectProduct = () => {
        localStorage.setItem("path", "Select Product");
        navigate('/quotations/select/product');
    }

    const handleClearCustomer = () => {
        dispatch(getQuotationCustomerIdClear());
    }

    return (
        <>
            <div className="bg-white">
                {/* {loading && <p className="text-sm text-gray-600">{t('Loading')}...</p>} */}

                <div className="grid grid-cols-1 items-start gap-x-6 gap-y-2 lg:grid-cols-12 lg:gap-8">
                    <div className="mt-2 grid grid-cols-1 gap-4 lg:col-span-12 xl:col-span-6">

                        {/* begin header */} 
                        <div
                            className="relative border-l-4 border-gray-500 bg-white shadow-lg rounded-md p-2 ring-1 ring-gray-900/20 sm:p-2 cursor-pointer"
                        >
                            <p className="items-baseline gap-x-2">
                                <span>{t('Date')}:</span><br />
                                <span>
                                    <input
                                        type="date"
                                        value={date || ''}
                                        onChange={(e) => setDate(e.target.value)}
                                    />
                                </span>
                            </p>
                            <div
                                className="flex items-baseline justify-between text-end -mt-12 -pt-6"
                            >
                                <dt></dt>
                                <dd>
                                    <span>{t('Quotation No')}</span><br />
                                    <span>-</span>
                                </dd>
                            </div>
                        </div>
                        {/* end header */}

                        {/* begin data list customer */}
                        <div
                            onClick={() => handleSelectCustomer()}
                            className="relative bg-gray-300 shadow-lg rounded-md p-2 ring-1 ring-gray-900/20 sm:p-2 cursor-pointer"
                        >
                            <p className="flex items-baseline gap-x-2">
                                <span className="text-lg font-semibold tracking-tight text-gray-900">{t('Customer')}</span>
                            </p>
                            <div
                                className="flex flex-wrap items-baseline justify-between -mt-7 -mb-2"
                            >
                                <dt></dt>
                                <dd>
                                    <button
                                        type="button"
                                        className="inline-flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                            fill="currentColor" aria-hidden="true" data-slot="icon" className="size-8">
                                            <path fillRule="evenodd"
                                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                                                clipRule="evenodd">

                                            </path>
                                        </svg>
                                    </button>
                                </dd>
                            </div>
                        </div>

                        {loading && <p className="text-sm text-gray-600">{t('Loading')}...</p>}
                        {error ?
                            <p className="text-sm text-red-600">{t('Error')}: {JSON.stringify(error)}</p> :
                            quotationCustomerDataId?.name &&
                            <div
                                className="relative bg-white shadow-lg rounded-md p-2 ring-1 ring-gray-900/20 sm:p-2"
                            >
                                <p className="flex items-baseline gap-x-2">
                                    <span className="text-lg font-semibold tracking-tight text-gray-900">{t('Name')}:&nbsp;{quotationCustomerDataId?.name}</span>
                                </p>
                                <p className="mt-1 text-sm text-gray-600">{t('Address')}:&nbsp;{quotationCustomerDataId?.address}</p>
                                <p className="mt-0 text-sm text-gray-600">{t('Phone')}:&nbsp;{quotationCustomerDataId?.phone}</p>
                                <p className="mt-0 text-sm text-gray-600">{t('Email')}:&nbsp;{quotationCustomerDataId?.email}</p>
                                <div
                                    className="flex flex-wrap items-baseline justify-between -mt-8 -pt-2"
                                >
                                    <dt></dt>
                                    <dd>
                                        <button
                                            type="button"
                                            onClick={() => handleClearCustomer()}
                                            className="inline-flex items-center text-sm text-gray-600  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                        >
                                            <TrashIcon aria-hidden="true" className="size-7" />
                                        </button>
                                    </dd>
                                </div>
                            </div>
                        }
                        {/* end data list customer */}

                        {/* begin data list product */}
                        <div
                            onClick={() => handleSelectProduct()}
                            className="relative bg-gray-300 shadow-lg rounded-md p-2 ring-1 ring-gray-900/20 sm:p-2 cursor-pointer"
                        >
                            <p className="flex items-baseline gap-x-2">
                                <span className="text-lg font-semibold tracking-tight text-gray-900">{t('Product')}</span>
                            </p>
                            <div
                                className="flex flex-wrap items-baseline justify-between -mt-7 -mb-2"
                            >
                                <dt></dt>
                                <dd>
                                    <button
                                        type="button"
                                        className="inline-flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                            fill="currentColor" aria-hidden="true" data-slot="icon" className="size-8">
                                            <path fillRule="evenodd"
                                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                                                clipRule="evenodd">

                                            </path>
                                        </svg>
                                    </button>
                                </dd>
                            </div>
                        </div>
                        {/* end data list product */}

                    </div>
                    <div className="mt-2 grid grid-cols-1 gap-4 lg:col-span-12 xl:col-span-6">

                    </div>
                </div>
            </div>
        </>
    );
}
