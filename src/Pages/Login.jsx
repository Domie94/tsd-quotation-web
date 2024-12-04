import React from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useTranslation } from 'react-i18next';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { login } from '../store/login/action';
import { XCircleIcon } from '@heroicons/react/24/outline';

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Login() {

    const { t } = useTranslation();
    const dispatch = useDispatch();

    const { loading, error, } = useSelector(state => ({
        loading: state.login.loading,
        error: state.login.error,
    }), shallowEqual);

    const validation = useFormik({

        enableReinitialize: true,

        initialValues: {
            username: "" || '',
            password: "" || '',
        },

        validationSchema: Yup.object({
            username: Yup.string().required(t('Please, Enter the Username')),
            password: Yup.string().required(t('Please, Enter the Password'))
        }),
        onSubmit: (values) => {
            dispatch(login({
                username: values.username,
                password: values.password
            }))
        }
    });

    return (
        <main className="overflow-hidden bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md rounded-xl bg-white shadow-md ring-1 ring-black/5">
                <div className="text-center">
                    <h1 className="mt-8 text-xl font-bold">{t('Welcome to Quotation System')}</h1>
                </div>

                <form
                    className="p-7 sm:p-11"
                    onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                    }}
                >
                    {loading && <p className="text-sm text-gray-600">{t('Loading')}...</p>}
                    {error ?
                        <div className="border-l-4 border-red-400 bg-red-50 p-4 mb-4">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                                </div>
                                <div className="ml-3">
                                    <p className="text-md text-red-700 leading-relaxed">
                                        {t(error)}
                                    </p>
                                </div>
                            </div>
                        </div> : null}
                    <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-12">
                        <div className="sm:col-span-12">
                            <label htmlFor="username" className={classNames("block text-lg font-medium", validation.touched.username && validation.errors.username ? "text-red-400" : "text-gray-900")}>
                                {t('Username')}:
                            </label>
                            <div>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    autoComplete="username"
                                    placeholder={t('Username') + "..."}
                                    className={classNames("block w-full rounded-md border-0 py-1.5 pl-2",
                                        validation.touched.username && validation.errors.username ? "text-red-400" : "text-gray-900", "shadow-sm ring-1 ring-inset",
                                        validation.touched.username && validation.errors.username ? "ring-red-400" : "ring-gray-300",
                                        validation.touched.username && validation.errors.username ? "placeholder:text-red-400" : "placeholder:text-gray-400", "focus:ring-2 focus:ring-inset",
                                        validation.touched.username && validation.errors.username ? "focus:ring-red-400" : "focus:ring-indigo-600", "text-lg md:text-md"
                                    )}
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.username}
                                    aria-invalid={validation.touched.username && validation.errors.username ? true : false}
                                    aria-describedby="username-error"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-12">
                            <label htmlFor="password" className={classNames("block text-lg font-medium", validation.touched.password && validation.errors.password ? "text-red-400" : "text-gray-900")}>
                                {t('Password')}:
                            </label>
                            <div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="password"
                                    placeholder={t('Password') + "..."}
                                    className={classNames("block w-full rounded-md border-0 py-1.5 pl-2",
                                        validation.touched.password && validation.errors.password ? "text-red-400" : "text-gray-900", "shadow-sm ring-1 ring-inset",
                                        validation.touched.password && validation.errors.password ? "ring-red-400" : "ring-gray-300",
                                        validation.touched.password && validation.errors.password ? "placeholder:text-red-400" : "placeholder:text-gray-400", "focus:ring-2 focus:ring-inset",
                                        validation.touched.password && validation.errors.password ? "focus:ring-red-400" : "focus:ring-indigo-600", "text-lg md:text-md"
                                    )}
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.password}
                                    aria-invalid={validation.touched.password && validation.errors.password ? true : false}
                                    aria-describedby="password-error"
                                />
                            </div>
                        </div>

                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="inline-flex mt-4 justify-center w-[100px] items-center gap-x-1.5 rounded-md border border-gray-600 text-gray-600 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                        >
                            {t('Login')}
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}
