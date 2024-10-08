// import { useState } from 'react';

const logos = [
    { icon: '🤝', text: 'Layanan Masyarakat' },
    { icon: '🌍', text: 'Keberagaman' },
    { icon: '🎭', text: 'Budaya' },
    { icon: '🛡️', text: 'Keamanan' },
    { icon: '📚', text: 'Pendidikan' },
];
const repeatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos];

export default function VisidanMisi() {
    return (
        <div className="relative bg-base-200 px-4 lg:px-0 flex flex-col justify-between">
            <div className="hidden xl:block container sm:pt-20 justify-center items-center mx-auto relative lg:px-40 z-10"
                data-aos="zoom-in"
                data-aos-offset="50"
                data-aos-duration="500">
                <div className="flex justify-between gap-4">
                    <div className="flex items-center">
                        <span className="text-4xl">🤝</span>
                        <span className="dark:text-slate-400">Layanan Masyarakat</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-4xl">🌍</span>
                        <span className="dark:text-slate-400">Keberagaman</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-4xl">🎭</span>
                        <span className="dark:text-slate-400">Budaya</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-4xl">🛡️</span>
                        <span className="dark:text-slate-400">Keamanan</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-4xl">📚</span>
                        <span className="dark:text-slate-400">Pendidikan</span>
                    </div>
                </div>
            </div>
            <div className="xl:hidden container sm:pt-20 justify-center items-center mx-auto relative lg:px-40 z-10 overflow-hidden"
                data-aos="zoom-in"
                data-aos-offset="50"
                data-aos-duration="500">
                <div className="flex justify-between gap-4 animate-loop flex-shrink-0 whitespace-nowrap">
                    {repeatedLogos.map((logo, index) => (
                        <div className="flex items-center" key={index}>
                            <span className="text-4xl">{logo.icon}</span>
                            <span className="dark:text-slate-400 ml-2">{logo.text}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container mx-auto sm:pb-28 sm:pt-10 flex lg:px-32 flex-col lg:flex-row relative z-10">
                {/* Aside Kiri: Visi */}
                <aside className="lg:w-1/2 p-4"
                    data-aos="fade-right"
                    data-aos-offset="50"
                    data-aos-duration="500">
                    <h1 className="text-4xl font-bold mb-4 dark:text-slate-200">Visi Kabupaten Pemalang</h1>
                    <p className="mb-4 dark:text-slate-400">
                        Terwujudnya Pemalang Hebat yang berdaulat, berjati diri, mandiri dan sejahtera.
                    </p>
                </aside>

                {/* Aside Kanan: Misi */}
                <aside className="lg:w-1/2 p-4"
                    data-aos="fade-left"
                    data-aos-offset="50"
                    data-aos-duration="500">
                    <h2 className="text-4xl font-bold mb-2 text-sky-600">Misi Kabupaten Pemalang</h2>
                    <ul className="list-decimal list-inside dark:text-slate-400 space-y-2">
                        <li>Menjunjung tinggi kedaulatan rakyat melalui permusyawaratan dan perwakilan.</li>
                        <li>Mewujudkan kesempatan dan kualitas pendidikan serta kesehatan yang merata dan berkeadilan.</li>
                        <li>Meneguhkan ekonomi kerakyatan berbasis pertanian, kelautan, perdagangan, UMKM serta penanggulangan kemiskinan.</li>
                        <li>Mewujudkan sarana dan prasarana dasar yang merata untuk memperkuat sentra industri berbasis kewilayahan.</li>
                        <li>Mewujudkan tata kelola pemerintahan terpercaya dengan reformasi sistem yang efektif dan demokratis.</li>
                        <li>Menumbuhkan kembali budaya asli daerah sebagai pembentukan jati diri Pemalang.</li>
                        <li>Memberikan rasa aman kepada masyarakat serta memperkokoh Kebhinekaan dengan mengembangkan kehidupan beragama yang toleran dan harmonis.</li>
                    </ul>
                </aside>
            </div>

        </div>
    );
}
