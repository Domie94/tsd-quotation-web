import React, { useEffect, useState } from "react";
import pdfFonts from "../../assets/fonts/vfs_fonts";
import pdfMake from "pdfmake/build/pdfmake";
// import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getQuotationId } from "../../store/quotations/action";
import { useTranslation } from "react-i18next";
import moment from "moment/moment";
import { getCompanyId } from "../../store/company/action";
import { getCustomerId } from "../../store/customers/action"
import { numberDot } from "../../functions";


export default function Quotation() {

    const { t } = useTranslation("translation");
    const dispatch = useDispatch();
    const [url, setUrl] = useState("");
    const { id } = useParams();
    const CompanyId = localStorage.getItem('company_id');

    const { quotationDataId, loading, error, companyDataId, customerDataId } = useSelector(state => ({
        loadingQuotation: state.quotations.loadingQuotation,
        quotationDataId: state.quotations.quotationDataId,
        errorQuotation: state.quotations.errorQuotation,
        companyDataId: state.companies.companyDataId,
        customerDataId: state.customers.customerDataId,
    }), shallowEqual);

    useEffect(() => {
        pdfMake.vfs = pdfFonts.pdfMake.vfs;
        pdfMake.fonts = {
            PhetsarathOT: {
                normal: "phetsarath_ot.ttf",
                bold: "Phetsarath_Bold.ttf",
                italics: "phetsarath_ot.ttf",
                bolditalics: "phetsarath_ot.ttf",
            },
            TimesNewRoman: {
                normal: "Times-New-Roman-Regular.ttf",
                bold: "Times-New-Roman-Bold.ttf",
                italics: "Times-New-Roman-Italic.ttf",
                bolditalics: "Times-New-Roman-Bold-Italic.ttf",
            },
            Cambria: {
                normal: "Cambria Math.ttf",
                bold: "Cambria Math.ttf",
            },
        };
    }, []);

    useEffect(() => {
        if (id || CompanyId) {
            dispatch(getQuotationId(id))
            dispatch(getCompanyId(CompanyId));
        };
    }, [dispatch, id, CompanyId]);

    useEffect(() => {
        if (quotationDataId && quotationDataId?.quotation && quotationDataId?.quotation?.customer_id) {
            dispatch(getCustomerId(quotationDataId?.quotation?.customer_id));
        };
    }, [dispatch, quotationDataId, quotationDataId?.quotation?.customer_id]);

    useEffect(() => {
        try {
            const documentDefinition = {
                // images: {
                //     snow: 'https://api.quotation.tsdrancher.com/api/logo',
                // },

                header: [
                    {
                        margin: [0, 40, 0, 0],
                        table: {
                            widths: ['100%'],
                            headerRows: 1,
                            body: [
                                [
                                    {
                                        text: `ໃບສະເໜີລາຄາ`,
                                        style: 'headercenter',

                                    },

                                ],
                                [
                                    {
                                        text: `Quotation`,
                                        style: 'headercenter',
                                        margin: [0, -5, 0, 0],
                                        fontSize: 14,
                                    },

                                ],

                            ],
                        },
                        layout: 'noBorders'
                    },

                    {
                        margin: [40, 0, 0, 0],
                        columns: [
                            // {
                            //     image: 'snow',
                            //     width: 40,
                            //     margin: [15, 0, 0, 0],
                            // },
                            {
                                table: {
                                    widths: [360, 200],
                                    headerRows: 1,
                                    body: [

                                        [
                                            {
                                                text: ``,


                                            },


                                            {
                                                text: `${t('No')}: ${quotationDataId?.quotation?.quote_number}`,
                                                style: 'normalleft',
                                                margin: [10, 0, 0, 0],
                                            },


                                        ],
                                        [
                                            {
                                                text: ``,


                                            },


                                            {
                                                text: `${t('Date')}: ${moment(quotationDataId?.quotation?.quote_date).format("DD/MM/YYYY")}`,
                                                style: 'normalleft',
                                                margin: [10, 0, 0, 0],
                                            },


                                        ],

                                    ],
                                },
                                layout: 'noBorders'
                            },
                        ],
                    },],

                content: [
                    {
                        table: {
                            widths: [505],
                            body: [
                                [
                                    { text: companyDataId?.name, style: 'companybold' }
                                ],
                                [
                                    { text: companyDataId?.address, style: 'company' }
                                ],
                                [
                                    { text: `${t('Phone')}: ${companyDataId?.phone}`, style: 'company' }
                                ],
                                [
                                    { text: `${t('Email')}: ${companyDataId?.email}`, style: 'company' }
                                ],
                            ],


                        },
                        layout: 'noBorders',
                    },
                    {
                        text: `${t('The executive’s board of TSD Sole Co., Ltd feels honored to announce the quotation to')}:`,
                        style: 'normalleft',
                        margin: [30, 5, 0, 0],
                    },
                    {
                        table: {
                            widths: [505],
                            body: [
                                [
                                    { text: customerDataId?.name, style: 'companybold', margin: [0, 5, 0, 0], }
                                ],
                                [
                                    { text: customerDataId?.address, style: 'company' }
                                ],
                                [
                                    { text: `${t('Phone')}: ${customerDataId?.phone}`, style: 'company' }
                                ],
                                [
                                    { text: `${t('Email')}: ${customerDataId?.email}`, style: 'company' }
                                ],
                            ],


                        },
                        layout: 'noBorders',
                    },
                    {
                        text: `${t('For the service, there is the details description as below')}:`,
                        style: 'normalleft',
                        margin: [30, 10, 0, 0],
                    },
                    {
                        margin: [0, 5, 0, 0],
                        table: {
                            widths: [26, 247, 40, 78, 78],
                            headerRows: 1,
                            body: [
                                [
                                    { text: t('No.'), style: 'tableHeader' },
                                    { text: t('Content'), style: 'tableHeader' },
                                    { text: t('Amount'), style: 'tableHeader' },
                                    { text: t('Unit price'), style: 'tableHeader' },
                                    { text: t('Sub Total'), style: 'tableHeader' },
                                ],
                                ...(quotationDataId?.items || []).map((item, index) => [
                                    {
                                        text: index + 1,
                                        style: 'table',
                                        alignment: 'center'
                                    },
                                    {
                                        table: {
                                            widths: ['100%'],
                                            body: [
                                                [
                                                    {
                                                        text: item.name,
                                                        style: 'table',
                                                        bold: true,
                                                        argument: 'left',
                                                    },
                                                ],
                                                [
                                                    {
                                                        text: item.description,
                                                        style: 'table',
                                                    },
                                                ],

                                            ],
                                        },
                                        layout: 'noBorders'
                                    },
                                    {
                                        // ຈຳນວນ
                                        text: item.quantity,
                                        style: 'table',
                                        alignment: 'center'
                                    },
                                    {
                                        // ລາຄາຫົວໜ່ວຍ
                                        text: numberDot(Number(item.unit_price)),
                                        style: 'table',
                                        alignment: 'right'
                                    },
                                    {
                                        // ລວມເປັນເງິນ
                                        text: numberDot(Number(item.quantity) * Number(item.unit_price)),
                                        style: 'table',
                                        alignment: 'right'
                                    },
                                ])

                            ]
                        },
                        layout: {
                            hLineWidth: function (i, node) {
                                return (i === 0 || i === node.table.body.length) ? 0.3 : 0.3;
                            },
                            vLineWidth: function (i, node) {
                                return (i === 0 || i === node.table.widths.length) ? 0.3 : 0.3;
                            },
                            hLineColor: function (i, node) {
                                return (i === 0 || i === node.table.body.length) ? 'black' : 'black';
                            },
                            vLineColor: function (i, node) {
                                return (i === 0 || i === node.table.widths.length) ? 'black' : 'black';
                            },
                        },
                    },
                    {
                        margin: [0, -0.3, 0, 0],
                        table: {
                            widths: [415.9, 78],
                            body: [

                                [

                                    {
                                        text: `${t('Total')} (KIP):`,
                                        style: 'table',
                                        alignment: 'right',
                                        bold: true,
                                        border: [false, false, false, false],
                                    },
                                    {
                                        // ລວມເປັນເງິນ
                                        text: numberDot((quotationDataId?.items ? quotationDataId?.items : []).reduce((total, currentValue) =>
                                            total = total + Number(currentValue.quantity * currentValue.unit_price), 0
                                        )),
                                        bold: true,
                                        style: 'table',
                                        alignment: 'right',
                                        fillColor: '#eeeeee',
                                        // border: [false, false, false, false],

                                    },
                                ],

                            ]
                        },
                        layout: {
                            hLineWidth: function (i, node) {
                                return (i === 0 || i === node.table.body.length) ? 0.3 : 0.3;
                            },
                            vLineWidth: function (i, node) {
                                return (i === 0 || i === node.table.widths.length) ? 0.3 : 0.3;
                            },
                            hLineColor: function (i, node) {
                                return (i === 0 || i === node.table.body.length) ? 'black' : 'black';
                            },
                            vLineColor: function (i, node) {
                                return (i === 0 || i === node.table.widths.length) ? 'black' : 'black';
                            },
                        },
                    },
                    {
                        margin: [0, 20, 100, 0],
                        text: t('Director'), style: 'companybold',
                        alignment: 'right',
                    },
                ],

                footer: function (currentPage, pageCount) {
                    return {
                        table: {
                            widths: ['100%'],
                            body: [
                                [
                                    {
                                        text: [
                                            { text: 'ໜ້າ ', style: 'normalright', font: 'PhetsarathOT', fontSize: 10, },
                                            { text: currentPage.toString(), style: 'normalright', font: 'TimesNewRoman', fontSize: 9 },
                                            { text: ' / ', style: 'normalright', font: 'TimesNewRoman', fontSize: 9, },
                                            { text: pageCount, style: 'normalright', font: 'TimesNewRoman', fontSize: 9, },
                                        ],
                                        alignment: 'right',
                                        margin: [0, 0, 23, 0]
                                    },
                                ],
                            ],
                        },
                        layout: "noBorders",
                    };
                },

                pageSize: 'A4',
                pageOrientation: 'portrait',
                pageMargins: [40, 130, 25, 26],
                styles: {
                    headercenter: {
                        fontSize: 17,
                        bold: true,
                        alignment: 'center',
                        margin: [0, 0, 0, -5],

                    },
                    subheadercenter: {
                        fontSize: 11,
                        alignment: 'center',
                        bold: true,
                        lineHeight: 0.8,

                    },
                    subheaderleft: {
                        fontSize: 11,
                        alignment: 'left',
                        bold: true,
                        lineHeight: 0.8,

                    },
                    headerleft: {
                        fontSize: 11,
                        bold: true,
                        alignment: 'left',
                        margin: [0, 0, 0, -5],
                        lineHeight: 0.8,
                    },
                    normalleft: {
                        fontSize: 11,
                        alignment: 'left',
                        lineHeight: 0.8,
                    },
                    normalright: {
                        fontSize: 11,
                        alignment: 'right',
                        lineHeight: 0.8,
                    },
                    table: {
                        fontSize: 11,
                        alignment: 'left',
                        lineHeight: 0.8,

                    },
                    tableHeader: {
                        fontSize: 11,
                        alignment: 'center',
                        bold: true,
                        fillColor: '#eeeeee',
                    },
                    tablenumber: {
                        fontSize: 11,
                        alignment: 'right',
                        lineHeight: 0.8,

                    },
                    tablenumberbold: {
                        fontSize: 11,
                        alignment: 'right',
                        bold: true,
                        lineHeight: 0.8,

                    },
                    tabledatail: {
                        fontSize: 11,
                        alignment: 'left',
                        lineHeight: 0.8,

                    },
                    companybold: {
                        fontSize: 11,
                        bold: true,
                        alignment: 'left',
                        lineHeight: 0.8,

                    },
                    company: {
                        fontSize: 11,
                        alignment: 'left',
                        lineHeight: 0.8,


                    },
                },
                defaultStyle: {
                    font: "PhetsarathOT",

                },
                info: {
                    name: 'Quotation',
                    title: 'Quotation',
                    author: 'Copyright © Tsd Sole Co.,Ltd 2022',
                    subject: 'Quotation',
                    keywords: 'tsd',
                    creator: 'tsd.la',
                },
            };
            pdfMake.createPdf(documentDefinition).getBlob((dataUrl) => {
                setUrl(URL.createObjectURL(dataUrl));
            });
        } catch (error) {
            return error
        }
    }, [
        t,
        companyDataId?.name,
        companyDataId?.address,
        companyDataId?.email,
        companyDataId?.phone,
        quotationDataId?.items,
        customerDataId?.name,
        customerDataId?.address,
        customerDataId?.phone,
        customerDataId?.email,
        quotationDataId?.quotation?.quote_date,
        quotationDataId?.quotation?.quote_number,
    ]);

    return (
        // <div className="shadow-lg hover:shadow-xl">
        //     {url ? (
        //         <div className="mt-3l">
        //             <button
        //                 type="button"
        //                 onClick={() => window.open(url)}
        //                 className="inline-flex items-center gap-x-2 rounded-md px-1.5 py-0.5 text-sm text-gray-600 border border-gray-200 shadow-lg hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        //             >
        //                 <ArrowTopRightOnSquareIcon aria-hidden="true" className="size-10" />
        //             </button>
        //             <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
        //                 <iframe
        //                     title="PDF Viewer"
        //                     src={url}
        //                     width="100%"
        //                     height="100%"
        //                     style={{
        //                         minHeight: '500px', // Ensures readability
        //                         maxWidth: '100%',
        //                         // border: 'none', // Clean appearance
        //                     }}
        //                 />
        //             </div>

        //         </div>
        //     ) : null}
        // </div>
        <> 
            {loading && <p className="text-sm text-gray-600">{t('Loading')}...</p>}
            {error ? <p className="text-sm text-red-600">{t('Error')}: {JSON.stringify(error)}</p> :
                quotationDataId?.items?.length > 0 ? url ? (
                    <div className="mt-3l">
                        <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
                            <iframe
                                title="PDF Viewer"
                                src={url}
                                width="100%"
                                height="100%"
                                style={{
                                    minHeight: '500px', // Ensures readability
                                    maxWidth: '100%',
                                    // border: 'none', // Clean appearance
                                }}
                            />
                        </div>

                    </div>
                ) : null : t('Data not found')}
        </>
    );
}
