import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import moment from "moment/moment";
import { TrashIcon, ExclamationTriangleIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { useNavigate } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { addSelectProduct, getQuotationCustomerIdClear, postQuotation } from "../../store/quotations/action";
import { numberDot } from "../../functions";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Main() {

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));

    const { quotationCustomerDataId, quotationSelectProductData, error, errorQuotation, loadingQuotation, successQuotation } = useSelector(state => ({
        quotationCustomerDataId: state.quotations.quotationCustomerDataId,
        quotationSelectProductData: state.quotations.quotationSelectProductData,
        error: state.quotations.error,
        errorQuotation: state.quotations.errorQuotation,
        loadingQuotation: state.quotations.loadingQuotation,
        successQuotation: state.quotations.successQuotation,
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

    const handleClearProduct = (i) => {
        const deleteVal = [...quotationSelectProductData.data ? quotationSelectProductData.data : [],];
        deleteVal.splice(i, 1);
        dispatch(addSelectProduct(deleteVal));
    }

    const handleSave = () => {
        if (quotationCustomerDataId?.id && quotationSelectProductData?.data?.length > 0) {
            setOpen(true);
        }
    }

    const handleConfirm = () => {
        // const data = {
        //     customer: {
        //         "customer_id": quotationCustomerDataId?.id,
        //         "quote_date": date,
        //         "status": "active",
        //         "company_id": Number(localStorage.getItem('company_id'))
        //     },
        //     products: quotationSelectProductData.data ? quotationSelectProductData.data : []
        // }
        const data = {
            "customer_id": quotationCustomerDataId?.id,
            "quote_date": date,
            "status": "pending",
            "company_id": Number(localStorage.getItem('company_id')),
            "items": quotationSelectProductData.data ? quotationSelectProductData.data : []
        }
        dispatch(postQuotation(data));
        setOpen(false);
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

                        {loadingQuotation && <p className="text-sm text-gray-600">{t('Loading')}...</p>}
                        {successQuotation || errorQuotation ?
                            <div className={classNames("border-l-4 ", successQuotation ? "border-green-400 bg-green-50" : "border-red-400 bg-red-50", "p-4 mb-0")}>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        {successQuotation ? <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" /> : <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />}
                                    </div>
                                    <div className="ml-3">
                                        <p className={classNames("text-md", successQuotation ? "text-green-700" : "text-red-700 leading-relaxed")}>
                                            {errorQuotation ? <>{t('Failed')} <br /> {errorQuotation.response.data.error}</> : t('Successfully')}
                                        </p>
                                    </div>
                                </div>
                            </div> : null}

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

                        {/* {loading && <p className="text-sm text-gray-600">{t('Loading')}...</p>} */}
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

                        {/* {loading && <p className="text-sm text-gray-600">{t('Loading')}...</p>} */}
                        {error ?
                            <p className="text-sm text-red-600">{t('Error')}: {JSON.stringify(error)}</p> :

                            (quotationSelectProductData.data ? quotationSelectProductData.data : []).map((item, index) => (
                                <div
                                    key={index}
                                    className="relative bg-white shadow-lg rounded-md p-2 ring-1 ring-gray-900/20 sm:p-2"
                                >
                                    <p className="flex items-baseline gap-x-2">
                                        <span className="text-lg font-semibold tracking-tight text-gray-900">{t('Name')}:&nbsp;{item.name}</span>
                                    </p>
                                    <div
                                        className="flex flex-wrap items-baseline justify-between -mt-8 -pt-2"
                                    >
                                        <dt></dt>
                                        <dd>
                                            <button
                                                type="button"
                                                onClick={() => handleClearProduct(index)}
                                                className="inline-flex items-center text-sm text-gray-600  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                            >
                                                <TrashIcon aria-hidden="true" className="size-7" />
                                            </button>
                                        </dd>
                                    </div>
                                    <p className="text-sm text-gray-600">{t('Description')}:&nbsp;{item.description}</p>
                                    <p className="mt-1 flex items-baseline gap-x-2">
                                        <span className="text-sm tracking-tight text-gray-600">{t('Amount')}:&nbsp;{item.quantity} x {numberDot(item.unit_price)}</span>
                                    </p>
                                    <div
                                        className="flex flex-wrap items-baseline text-sm justify-between -pt-2" style={{ marginTop: '-1.30rem' }}
                                    >
                                        <dt></dt>
                                        <dd>
                                            <b>{numberDot(Number(item.quantity) * Number(item.unit_price))}</b>
                                        </dd>
                                    </div>
                                </div>
                            ))
                        }
                        {/* end data list product */}

                    </div>
                    <div className="mt-2 grid grid-cols-1 gap-4 lg:col-span-12 xl:col-span-6">

                    </div>
                </div>
            </div>
            <div className="fixed bottom-4 right-4 flex">
                <div className="shadow-lg rounded-md ring-1 ring-gray-900/20 mx-4 px-10 text-xl">
                    {t('Total')}:&nbsp; <span className="font-bold text-2xl">
                        {numberDot((quotationSelectProductData.data ? quotationSelectProductData.data : []).reduce((total, currentValue) =>
                            total = total + Number(currentValue.quantity * currentValue.unit_price), 0
                        ))}
                    </span>
                </div>
                <button
                    type="button"
                    onClick={() => handleSave()}
                    className="inline-flex items-center gap-x-2 rounded-full px-4 py-2 text-sm text-white bg-gray-600 shadow-lg hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                >
                    {t('Save and Print')}
                </button>
            </div>

            {/* confirm */}
            <Dialog open={open} onClose={setOpen} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <div>
                                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-gray-100">
                                    <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-gray-600" />
                                </div>
                                <div className="mt-3 text-center sm:mt-5">
                                    <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                                        {t('Are you sure to Confirm?')}
                                    </DialogTitle>
                                </div>
                            </div>
                            <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                                <button
                                    type="button"
                                    onClick={() => handleConfirm()}
                                    className="inline-flex w-full justify-center rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 sm:col-start-2"
                                >
                                    {t('Confirm')}
                                </button>
                                <button
                                    type="button"
                                    data-autofocus
                                    onClick={() => setOpen(false)}
                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                                >
                                    {t('Close')}
                                </button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    );
}
