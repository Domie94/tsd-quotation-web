import React from "react";
import { ArchiveBoxIcon, DocumentChartBarIcon, DocumentPlusIcon, UsersIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

const people = [
    {
        id: 2,
        name: 'Customers',
        icon: UsersIcon,
        href: '/customers'
    },
    {
        id: 3,
        name: 'Products',
        icon: ArchiveBoxIcon,
        href: '/products'
    },
    {
        id: 4,
        name: 'Quotations',
        icon: DocumentPlusIcon,
        href: '/quotations'
    },
    {
        id: 5,
        name: 'Quotation Lists',
        icon: DocumentChartBarIcon,
        href: '/quotation/lists'
    },

    // More people...
]

export default function Dashboard() {

    const { t } = useTranslation();

    const handleNavigate = (id) => {
        localStorage.setItem('current', Number(id));
    }

    return (
        <>
            <ul className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-8 xl:grid-cols-10">
                {people.map((person, index) => (
                    <div key={index} className="text-center *:hover:text-indigo-600">
                        <a
                            href={person.href}
                            onClick={() => handleNavigate(person.id)}
                            className="inline-flex items-center gap-x-2 rounded-md px-3.5 py-2.5 text-sm text-gray-600 border border-gray-200 shadow-lg hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            <person.icon aria-hidden="true" className="size-12" />
                        </a>
                        <p className="text-sm mt-1 whitespace-nowrap font-bold">{t(person.name)}</p>
                    </div>

                ))}
            </ul>
        </>
    );
}
