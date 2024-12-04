import React from "react";
import { useTranslation } from "react-i18next";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../store/products/action"
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { useFormik } from 'formik';
import * as Yup from "yup";
import CurrencyInput from "react-currency-input-field";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Add() {

    const dispatch = useDispatch();
    const { t } = useTranslation();

    const { loading, success, error, } = useSelector(state => ({
        loading: state.products.loading,
        success: state.products.success,
        error: state.products.error,
    }), shallowEqual);

    const validation = useFormik({

        enableReinitialize: true,

        initialValues: {
            name: "" || '',
            description: "" || '',
            unit_price: "" || '',
        },

        validationSchema: Yup.object({
            name: Yup.string().required(t('Please, Enter the Name')),
            description: Yup.string().required(t('Please, Enter the Description')),
            unit_price: Yup.string().required(t('Please, Enter the Price')),
        }),
        onSubmit: (values) => {
            dispatch(createProduct({
                name: values.name,
                description: values.description,
                unit_price: values.unit_price,
                company_id: Number(localStorage.getItem('company_id'))
            }))
        }
    });

    return (
        <>
            <div className="bg-white">
                <div className="grid grid-cols-1 items-start gap-x-6 gap-y-2 lg:grid-cols-12 lg:gap-8">
                    <div className="grid grid-cols-1 gap-4 lg:col-span-12 xl:col-span-4">
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            validation.handleSubmit();
                            return false;
                        }}>
                            {loading && <p className="text-sm text-gray-600">{t('Loading')}...</p>}
                            {success || error ?
                                <div className={classNames("border-l-4 ", success ? "border-green-400 bg-green-50" : "border-red-400 bg-red-50", "p-4 mb-4")}>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            {success ? <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" /> : <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />}
                                        </div>
                                        <div className="ml-3">
                                            <p className={classNames("text-md", success ? "text-green-700" : "text-red-700 leading-relaxed")}>
                                                {error ? <>{t('Failed')} <br /> {error.response.data.error}</> : t('Successfully')}
                                            </p>
                                        </div>
                                    </div>
                                </div> : null}
                            <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-12">
                                <div className="sm:col-span-12">
                                    <label htmlFor="name" className={classNames("block text-lg font-medium", validation.touched.name && validation.errors.name ? "text-red-400" : "text-gray-900")}>
                                        {t('Name')}:
                                    </label>
                                    <div>
                                        <input
                                            disabled={success ? true : false}
                                            id="name"
                                            name="name"
                                            type="text"
                                            autoComplete="name"
                                            placeholder={t('Name') + "..."}
                                            className={classNames("block w-full rounded-md border-0 py-1.5 pl-2",
                                                validation.touched.name && validation.errors.name ? "text-red-400" : "text-gray-900", "shadow-sm ring-1 ring-inset",
                                                validation.touched.name && validation.errors.name ? "ring-red-400" : "ring-gray-300",
                                                validation.touched.name && validation.errors.name ? "placeholder:text-red-400" : "placeholder:text-gray-400", "focus:ring-2 focus:ring-inset",
                                                validation.touched.name && validation.errors.name ? "focus:ring-red-400" : "focus:ring-indigo-600", "text-lg md:text-md"
                                            )}
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={validation.values.name}
                                            aria-invalid={validation.touched.name && validation.errors.name ? true : false}
                                            aria-describedby="name-error"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-12">
                                    <label htmlFor="description" className={classNames("block text-lg font-medium", validation.touched.description && validation.errors.description ? "text-red-400" : "text-gray-900")}>
                                        {t('Description')}:
                                    </label>
                                    <div>
                                        <textarea
                                            disabled={success ? true : false}
                                            id="description"
                                            name="description"
                                            // type="text"
                                            autoComplete="description"
                                            placeholder={t('Description') + "..."}
                                            className={classNames("block w-full rounded-md border-0 py-1.5 pl-2",
                                                validation.touched.description && validation.errors.description ? "text-red-400" : "text-gray-900", "shadow-sm ring-1 ring-inset",
                                                validation.touched.description && validation.errors.description ? "ring-red-400" : "ring-gray-300",
                                                validation.touched.description && validation.errors.description ? "placeholder:text-red-400" : "placeholder:text-gray-400", "focus:ring-2 focus:ring-inset",
                                                validation.touched.description && validation.errors.description ? "focus:ring-red-400" : "focus:ring-indigo-600", "text-lg md:text-md"
                                            )}
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={validation.values.description}
                                            aria-invalid={validation.touched.description && validation.errors.description ? true : false}
                                            aria-describedby="name-error"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-12">
                                    <label htmlFor="price" className={classNames("block text-lg font-medium", validation.touched.unit_price && validation.errors.unit_price ? "text-red-400" : "text-gray-900")}>
                                        {t('Price')}:
                                    </label>
                                    <div>
                                        <CurrencyInput
                                            disabled={success ? true : false}
                                            id="unit_price"
                                            name="unit_price"
                                            autoComplete="unit_price"
                                            placeholder={t('Price') + "..."}
                                            className={classNames(
                                                "block w-full rounded-md border-0 py-1.5 pl-2",
                                                validation.touched.unit_price && validation.errors.unit_price ? "text-red-400" : "text-gray-900",
                                                "shadow-sm ring-1 ring-inset",
                                                validation.touched.unit_price && validation.errors.unit_price ? "ring-red-400" : "ring-gray-300",
                                                validation.touched.unit_price && validation.errors.unit_price ? "placeholder:text-red-400" : "placeholder:text-gray-400",
                                                "focus:ring-2 focus:ring-inset",
                                                validation.touched.unit_price && validation.errors.unit_price ? "focus:ring-red-400" : "focus:ring-indigo-600",
                                                "text-lg md:text-md"
                                            )}
                                            onValueChange={(value) => {
                                                validation.setFieldValue("unit_price", value || "");
                                            }}
                                            onBlur={validation.handleBlur}
                                            value={validation.values.unit_price || ""}
                                            aria-invalid={validation.touched.unit_price && validation.errors.unit_price ? true : false}
                                            aria-describedby="name-error"
                                            decimalSeparator="."
                                            groupSeparator=","
                                            decimalsLimit={2}
                                        />
                                    </div>
                                </div>
                            </div>
                            {!success ?
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="inline-flex mt-4 justify-center w-[60px] items-center gap-x-1.5 rounded-md border border-gray-600 text-gray-600 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                                    >
                                        {t('Save')}
                                    </button>
                                </div> : null}
                        </form>

                    </div>
                    <div className="mt-2 grid grid-cols-1 gap-4 lg:col-span-12 xl:col-span-8">

                    </div>
                </div>


            </div>
        </>
    );
}
