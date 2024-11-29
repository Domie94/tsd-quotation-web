import React, { useEffect, useState } from "react";
import pdfFonts from "../../assets/fonts/vfs_fonts";
import pdfMake from "pdfmake/build/pdfmake";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";


export default function Quotation() {

    const [url, setUrl] = useState("");

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
        try {
            const documentDefinition = {
                images: {
                    snow: 'http://192.168.100.130:3000/api/logo',
                },

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
                            {
                                image: 'snow',
                                width: 40,
                                margin: [15, 0, 0, 0],
                            },
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
                                                text: `ເລກທີ: 001/2022`,
                                                style: 'normalleft',
                                                margin: [10, 0, 0, 0],
                                            },


                                        ],
                                        [
                                            {
                                                text: ``,


                                            },


                                            {
                                                text: `ວັນທີ: 01/01/2022`,
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
                                    { text: 'ບໍລິສັດ ທີເອັດສດີ ຈຳກັດຜູ້ດຽວ', style: 'companybold' }
                                ],
                                [
                                    { text: 'ສຳນັກງານຕັ້ງຢູ່ ບ້ານ ຖິ່ນຕົມ, ເມືອງ ຫາດຊານຟອງ, ນະຄອນຫຼວງວຽງຈັນ ', style: 'company' }
                                ],
                                [
                                    { text: 'ໂທລະສັບ 020 9259 8985', style: 'company' }
                                ],
                                [
                                    { text: 'ອີເມວ info@tsd.la', style: 'company' }
                                ],
                            ],


                        },
                        layout: 'noBorders',
                    },
                    {
                        text: `ຄະນະຜູ້ບໍລິຫານ ບໍລິສັດ ທີເອັດສດີ ຈຳກັດຜູ້ດຽວ ຮູ້ສຶກເປັນກຽດໃນການແຈ້ງໃບສະເໜີລາຄາມາຍັງ:`,
                        style: 'normalleft',
                        margin: [30, 5, 0, 0],
                    },
                    {
                        table: {
                            widths: [505],
                            body: [
                                [
                                    { text: 'ບໍລິສັດ ໄປສະນີລາວ ຈໍາກັດ ', style: 'companybold', margin: [0, 5, 0, 0], }
                                ],
                                [
                                    { text: 'ບ້ານ ຊຽງຍືນ, ເມືອງ: ຈັນທະບູລີ , ແຂວງ ນະຄອນຫຼວງວຽງຈັນ', style: 'company' }
                                ],
                                [
                                    { text: 'ໂທລະສັບ 020 9259 8985', style: 'company' }
                                ],
                                [
                                    { text: 'ອີເມວ info@tsd.la', style: 'company' }
                                ],
                            ],


                        },
                        layout: 'noBorders',
                    },
                    {
                        text: `ສຳລັບການບໍລິການມີລາຍລະອຽດດັັ່ງລຸ່ມນີ້:`,
                        style: 'normalleft',
                        margin: [30, 10, 0, 0],
                    },
                    {
                        margin: [0, 5, 0, 0],
                        table: {
                            widths: [26, 252, 35, 78, 78],
                            headerRows: 1,
                            body: [
                                [{ text: 'ລຳດັບ', style: 'tableHeader' }, { text: 'ເນື້ອໃນລາຍການ', style: 'tableHeader' }, { text: 'ຈຳນວນ', style: 'tableHeader' }, { text: 'ລາຄາຫົວໜ່ວຍ', style: 'tableHeader' }, { text: 'ລວມເປັນເງິນ', style: 'tableHeader' }],
                                [
                                    {
                                        // ລຳດັບ
                                        text: '99',
                                        style: 'table',
                                        alignment: 'center'
                                    },
                                    {
                                        // ເນື້ອໃນລາຍການ
                                        table: {
                                            widths: ['100%'],
                                            body: [

                                                [
                                                    {
                                                        // Product Name
                                                        text: `ບໍລິການ ໂປຣແກຣມບັນຊີ ແລະ ບໍລິການເຊີເວີ (Server ງວດທີ 2 ປະຈຳປີ 2024)"`,
                                                        style: 'table',
                                                        bold: true,
                                                        argument: 'left',
                                                      
                                                    },

                                                ],
                                                [

                                                    {
                                                        // product detail
                                                        text: `ບໍລິການ ໂປຣແກຣມບັນຊີ ແລະ ບໍລິການເຊີເວີ (Server ງວດທີ 2 ປະຈຳປີ 2024)`,
                                                        style: 'table',
                                                    },

                                                ],

                                            ],
                                        },
                                        layout: 'noBorders'
                                    },
                                    {
                                        // ຈຳນວນ
                                        text: '1000',
                                        style: 'table',
                                        alignment: 'center'
                                    },
                                    {
                                        // ລາຄາຫົວໜ່ວຍ
                                        text: '1,000,000,000.00',
                                        style: 'table',
                                        alignment: 'right'
                                    },
                                    {
                                        // ລວມເປັນເງິນ
                                        text: '1,000,000,000.00',
                                        style: 'table',
                                        alignment: 'right'
                                    },
                                ],
                                [
                                    {
                                        // ລຳດັບ
                                        text: '99',
                                        style: 'table',
                                        alignment: 'center'
                                    },
                                    {
                                        // ເນື້ອໃນລາຍການ
                                        table: {
                                            widths: ['100%'],
                                            body: [

                                                [
                                                    {
                                                        // Product Name
                                                        text: `ບໍລິການ ໂປຣແກຣມບັນຊີ ແລະ ບໍລິການເຊີເວີ (Server ງວດທີ 2 ປະຈຳປີ 2024)"`,
                                                        style: 'table',
                                                        bold: true,
                                                        argument: 'left',
                                                      
                                                    },

                                                ],
                                                [

                                                    {
                                                        // product detail
                                                        text: `ບໍລິການ ໂປຣແກຣມບັນຊີ ແລະ ບໍລິການເຊີເວີ (Server ງວດທີ 2 ປະຈຳປີ 2024)`,
                                                        style: 'table',
                                                    },

                                                ],

                                            ],
                                        },
                                        layout: 'noBorders'
                                    },
                                    {
                                        // ຈຳນວນ
                                        text: '1000',
                                        style: 'table',
                                        alignment: 'center'
                                    },
                                    {
                                        // ລາຄາຫົວໜ່ວຍ
                                        text: '1,000,000,000.00',
                                        style: 'table',
                                        alignment: 'right'
                                    },
                                    {
                                        // ລວມເປັນເງິນ
                                        text: '1,000,000,000.00',
                                        style: 'table',
                                        alignment: 'right'
                                    },
                                ],
                                [
                                    {
                                        // ລຳດັບ
                                        text: '99',
                                        style: 'table',
                                        alignment: 'center'
                                    },
                                    {
                                        // ເນື້ອໃນລາຍການ
                                        table: {
                                            widths: ['100%'],
                                            body: [

                                                [
                                                    {
                                                        // Product Name
                                                        text: `ບໍລິການ ໂປຣແກຣມບັນຊີ ແລະ ບໍລິການເຊີເວີ (Server ງວດທີ 2 ປະຈຳປີ 2024)"`,
                                                        style: 'table',
                                                        bold: true,
                                                        argument: 'left',
                                                      
                                                    },

                                                ],
                                                [

                                                    {
                                                        // product detail
                                                        text: `ບໍລິການ ໂປຣແກຣມບັນຊີ ແລະ ບໍລິການເຊີເວີ (Server ງວດທີ 2 ປະຈຳປີ 2024)`,
                                                        style: 'table',
                                                    },

                                                ],

                                            ],
                                        },
                                        layout: 'noBorders'
                                    },
                                    {
                                        // ຈຳນວນ
                                        text: '1000',
                                        style: 'table',
                                        alignment: 'center'
                                    },
                                    {
                                        // ລາຄາຫົວໜ່ວຍ
                                        text: '1,000,000,000.00',
                                        style: 'table',
                                        alignment: 'right'
                                    },
                                    {
                                        // ລວມເປັນເງິນ
                                        text: '1,000,000,000.00',
                                        style: 'table',
                                        alignment: 'right'
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
                        margin: [0, -0.3, 0, 0],
                        table: {
                            widths: [415.9, 78],
                            body: [

                                [

                                    {
                                        text: 'ມູນຄ່າລວມທັງໝົດ (currency):',
                                        style: 'table',
                                        alignment: 'right',
                                        bold: true,
                                        border: [false, false, false, false],
                                    },
                                    {
                                        // ລວມເປັນເງິນ
                                        text: '1,000,000,000.00',
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
                        text: 'ຜູ້ອຳນວຍການ', style: 'companybold',
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
                        lineHeight: 1,
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
            // pdfMake.createPdf(documentDefinition).open();
            pdfMake.createPdf(documentDefinition).getBlob((dataUrl) => {
                setUrl(URL.createObjectURL(dataUrl));
            });
            // pdfMake.createPdf(documentDefinition).getDataUrl().then((dataUrl) => {
            //     setUrl(URL.createObjectURL(dataUrl));
            // }, err => {
            //     console.error(err);
            // });
        } catch (error) {
            return error
        }
    }, []);

    return (
        <div className="shadow-lg hover:shadow-xl">
            {url ? (
                <div className="mt-3l">
                    <button
                        type="button"
                        onClick={() => window.open(url)}
                        className="inline-flex items-center gap-x-2 rounded-md px-1.5 py-0.5 text-sm text-gray-600 border border-gray-200 shadow-lg hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                        <ArrowTopRightOnSquareIcon aria-hidden="true" className="size-10" />
                    </button>
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
            ) : null}
        </div>
    );
}
