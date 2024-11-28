import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Page500() {

    const { t } = useTranslation();
    let navigate = useNavigate();

    const backHome = () => {
        navigate('/');
    }

    return (
        <>

            <div
                className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-1"
            >
                <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm text-center">
                    <div className="flex flex-1 flex-col justify-center whitespace-nowrap">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-red-600">
                            500
                        </h1>
                    </div>
                    <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-red-600">
                        {t('Sorry, Error Connection')}
                    </h2>
                    <button
                        onClick={backHome}
                        className="flex w-full justify-center mt-3 rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
                    >
                        {t('Back to Home')}
                    </button>
                </div>
            </div>
        </>
    );
}
