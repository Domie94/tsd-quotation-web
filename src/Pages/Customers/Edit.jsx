import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { deleteCustomer, getCustomerId, updateCustomer } from "../../store/customers/action"
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useParams } from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Edit() {

    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { id } = useParams();

    const { customerDataId, loading, success, error, } = useSelector(state => ({
        loading: state.customers.loading,
        customerDataId: state.customers.customerDataId,
        success: state.customers.success,
        error: state.customers.error,
    }), shallowEqual);

    useEffect(() => {
        dispatch(getCustomerId(id));
    }, [dispatch]);

    const validation = useFormik({

        enableReinitialize: true,

        initialValues: {
            name: customerDataId?.name || '',
            address: customerDataId?.address || '',
            phone: customerDataId?.phone || '',
            email: customerDataId?.email || '',
        },

        validationSchema: Yup.object({
            name: Yup.string().required(t('Please, Enter the Name')),
            address: Yup.string().required(t('Please, Enter the Addess')),
            // phone: Yup.string().required(t('Please, Enter the Phone')),
            // email: Yup.string().required(t('Please, Enter the Email')),
        }),
        onSubmit: (values) => {
            dispatch(updateCustomer(id, {
                name: values.name,
                address: values.address,
                phone: values.phone,
                email: values.email
            }))
        }
    });

    const handleDelete = () => {
        dispatch(deleteCustomer(id));
    }   

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
                                                {error ? <>{t('Failed')} <br /> {error.message}</> : t('Successfully')}
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
                                    <label htmlFor="address" className={classNames("block text-lg font-medium", validation.touched.address && validation.errors.address ? "text-red-400" : "text-gray-900")}>
                                        {t('Address')}:
                                    </label>
                                    <div>
                                        <input
                                            disabled={success ? true : false}
                                            id="address"
                                            name="address"
                                            type="text"
                                            autoComplete="address"
                                            placeholder={t('Address') + "..."}
                                            className={classNames("block w-full rounded-md border-0 py-1.5 pl-2",
                                                validation.touched.address && validation.errors.address ? "text-red-400" : "text-gray-900", "shadow-sm ring-1 ring-inset",
                                                validation.touched.address && validation.errors.address ? "ring-red-400" : "ring-gray-300",
                                                validation.touched.address && validation.errors.address ? "placeholder:text-red-400" : "placeholder:text-gray-400", "focus:ring-2 focus:ring-inset",
                                                validation.touched.address && validation.errors.address ? "focus:ring-red-400" : "focus:ring-indigo-600", "text-lg md:text-md"
                                            )}
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={validation.values.address}
                                            aria-invalid={validation.touched.address && validation.errors.address ? true : false}
                                            aria-describedby="name-error"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-12">
                                    <label htmlFor="phone" className={classNames("block text-lg font-medium", validation.touched.phone && validation.errors.phone ? "text-red-400" : "text-gray-900")}>
                                        {t('Phone')}:
                                    </label>
                                    <div>
                                        <input
                                            disabled={success ? true : false}
                                            id="phone"
                                            name="phone"
                                            type="text"
                                            autoComplete="phone"
                                            placeholder={t('Phone') + "..."}
                                            className={classNames("block w-full rounded-md border-0 py-1.5 pl-2",
                                                validation.touched.phone && validation.errors.phone ? "text-red-400" : "text-gray-900", "shadow-sm ring-1 ring-inset",
                                                validation.touched.phone && validation.errors.phone ? "ring-red-400" : "ring-gray-300",
                                                validation.touched.phone && validation.errors.phone ? "placeholder:text-red-400" : "placeholder:text-gray-400", "focus:ring-2 focus:ring-inset",
                                                validation.touched.phone && validation.errors.phone ? "focus:ring-red-400" : "focus:ring-indigo-600", "text-lg md:text-md"
                                            )}
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={validation.values.phone}
                                            aria-invalid={validation.touched.phone && validation.errors.phone ? true : false}
                                            aria-describedby="name-error"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-12">
                                    <label htmlFor="email" className={classNames("block text-lg font-medium", validation.touched.email && validation.errors.email ? "text-red-400" : "text-gray-900")}>
                                        {t('Email')}:
                                    </label>
                                    <div>
                                        <input
                                            disabled={success ? true : false}
                                            id="email"
                                            name="email"
                                            type="text"
                                            autoComplete="email"
                                            placeholder={t('Email') + "..."}
                                            className={classNames("block w-full rounded-md border-0 py-1.5 pl-2",
                                                validation.touched.email && validation.errors.email ? "text-red-400" : "text-gray-900", "shadow-sm ring-1 ring-inset",
                                                validation.touched.email && validation.errors.email ? "ring-red-400" : "ring-gray-300",
                                                validation.touched.email && validation.errors.email ? "placeholder:text-red-400" : "placeholder:text-gray-400", "focus:ring-2 focus:ring-inset",
                                                validation.touched.email && validation.errors.email ? "focus:ring-red-400" : "focus:ring-indigo-600", "text-lg md:text-md"
                                            )}
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={validation.values.email}
                                            aria-invalid={validation.touched.email && validation.errors.email ? true : false}
                                            aria-describedby="name-error"
                                        />
                                    </div>
                                </div>
                            </div>
                            {!success ?
                                <div className="flex justify-between mt-4">
                                    <button
                                        type="button"
                                        onClick={() => handleDelete()}
                                        className="inline-flex justify-center w-[60px] items-center gap-x-1.5 rounded-md border border-gray-600 text-red-600 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                                    >
                                        {t('Delete')}
                                    </button>
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center w-[60px] items-center gap-x-1.5 rounded-md border border-gray-600 text-gray-600 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                                    >
                                        {t('Edit')}
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
