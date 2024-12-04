import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getCompanyId, updateCompany } from "../../store/company/action"
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { useFormik } from 'formik';
import * as Yup from "yup";
import MaskedInput from "react-text-mask";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Main() {

    const dispatch = useDispatch();
    const { t } = useTranslation();
    const id = localStorage.getItem('company_id');

    const { companyDataId, loading, success, error, } = useSelector(state => ({
        loading: state.companies.loading,
        companyDataId: state.companies.companyDataId,
        success: state.companies.success,
        error: state.companies.error,
    }), shallowEqual);

    useEffect(() => {
        dispatch(getCompanyId(id));
    }, [dispatch, id]);

    const validation = useFormik({

        enableReinitialize: true,

        initialValues: {
            name: companyDataId?.name || '',
            email: companyDataId?.email || '',
            phone: companyDataId?.phone || '',
            address: companyDataId?.address || '',
            tax_id: companyDataId?.tax_id || '',
            logo_url: companyDataId?.logo_url || '',
            signature_url: companyDataId?.signature_url || '',
        },

        validationSchema: Yup.object({
            name: Yup.string().required(t('Please, Enter the Name')),
            email: Yup.string().required(t('Please, Enter the Email')),
            phone: Yup.string().required(t('Please, Enter the Phone')),
            address: Yup.string().required(t('Please, Enter the Address')),
            tax_id: Yup.string().required(t('Please, Enter the Tin')),
            // logo_url: Yup.string().required(t('Please, Enter the Logo')),
            // signature_url: Yup.string().required(t('Please, Enter the Signature')),
        }),
        onSubmit: (values) => {
            dispatch(updateCompany(id, {
                name: values.name,
                email: values.email,
                phone: values.phone,
                address: values.address,
                tax_id: values.tax_id,
                logo_url: values.logo_url,
                signature_url: values.signature_url
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
                                            aria-describedby="address-error"
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
                                            aria-describedby="phone-error"
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
                                            aria-describedby="email-error"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-12">
                                    <label htmlFor="tin" className={classNames("block text-lg font-medium", validation.touched.tax_id && validation.errors.tax_id ? "text-red-400" : "text-gray-900")}>
                                        {t('Tin')}:
                                    </label>
                                    <div>
                                        <MaskedInput
                                            disabled={success ? true : false}
                                            id="tin"
                                            name="tax_id"
                                            type="text"
                                            autoComplete="tin"
                                            placeholder="XXXXXXXXX-XXX"
                                            className={classNames("block w-full rounded-md border-0 py-1.5 pl-2",
                                                validation.touched.tax_id && validation.errors.tax_id ? "text-red-400" : "text-gray-900", "shadow-sm ring-1 ring-inset",
                                                validation.touched.tax_id && validation.errors.tax_id ? "ring-red-400" : "ring-gray-300",
                                                validation.touched.tax_id && validation.errors.tax_id ? "placeholder:text-red-400" : "placeholder:text-gray-400", "focus:ring-2 focus:ring-inset",
                                                validation.touched.tax_id && validation.errors.tax_id ? "focus:ring-red-400" : "focus:ring-indigo-600", "text-lg md:text-md"
                                            )}
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={validation.values.tax_id}
                                            aria-invalid={validation.touched.tax_id && validation.errors.tax_id ? true : false}
                                            aria-describedby="tin-error"
                                            mask={[/[0-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
                                        />
                                    </div>
                                </div>
                                {/* <div className="sm:col-span-12">
                                    <label htmlFor="logo" className={classNames("block text-lg font-medium", validation.touched.logo_url && validation.errors.logo_url ? "text-red-400" : "text-gray-900")}>
                                        {t('Logo')}:
                                    </label>
                                    <div>
                                        <input
                                            disabled={success ? true : false}
                                            id="logo"
                                            name="logo_url"
                                            type="file"
                                            autoComplete="logo"
                                            placeholder={t('Logo') + "..."}
                                            className={classNames("block w-full rounded-md border-0 py-1.5 pl-2",
                                                validation.touched.logo_url && validation.errors.logo_url ? "text-red-400" : "text-gray-900", "shadow-sm ring-1 ring-inset",
                                                validation.touched.logo_url && validation.errors.logo_url ? "ring-red-400" : "ring-gray-300",
                                                validation.touched.logo_url && validation.errors.logo_url ? "placeholder:text-red-400" : "placeholder:text-gray-400", "focus:ring-2 focus:ring-inset",
                                                validation.touched.logo_url && validation.errors.logo_url ? "focus:ring-red-400" : "focus:ring-indigo-600", "text-lg md:text-md"
                                            )}
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={validation.values.logo_url}
                                            aria-invalid={validation.touched.logo_url && validation.errors.logo_url ? true : false}
                                            aria-describedby="logo-error"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-12">
                                    <label htmlFor="signature" className={classNames("block text-lg font-medium", validation.touched.signature_url && validation.errors.signature_url ? "text-red-400" : "text-gray-900")}>
                                        {t('Signature')}:
                                    </label>
                                    <div>
                                        <input
                                            disabled={success ? true : false}
                                            id="signature"
                                            name="signature_url"
                                            type="file"
                                            autoComplete="signature"
                                            placeholder={t('Signature') + "..."}
                                            className={classNames("block w-full rounded-md border-0 py-1.5 pl-2",
                                                validation.touched.signature_url && validation.errors.signature_url ? "text-red-400" : "text-gray-900", "shadow-sm ring-1 ring-inset",
                                                validation.touched.signature_url && validation.errors.signature_url ? "ring-red-400" : "ring-gray-300",
                                                validation.touched.signature_url && validation.errors.signature_url ? "placeholder:text-red-400" : "placeholder:text-gray-400", "focus:ring-2 focus:ring-inset",
                                                validation.touched.signature_url && validation.errors.signature_url ? "focus:ring-red-400" : "focus:ring-indigo-600", "text-lg md:text-md"
                                            )}
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={validation.values.signature_url}
                                            aria-invalid={validation.touched.signature_url && validation.errors.signature_url ? true : false}
                                            aria-describedby="signature-error"
                                        />
                                    </div>
                                </div> */}
                            </div>
                            {!success ?
                                <div className="flex justify-end mt-4">
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
