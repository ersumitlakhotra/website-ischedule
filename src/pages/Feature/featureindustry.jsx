import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Saloon from "../../Images/website/Salons.jpg";
import Clinic from "../../Images/website/Clinics.jpg";
import Consultants from "../../Images/website/Consultants.jpg";
import Fitness from "../../Images/website/Fitness.jpg";
import Education from "../../Images/website/Education.jpg";


const tabs = [
    {
        id: "salon",
        label: "Salons & Spas",
        title: "Salon & Spa Scheduling",
        desc: "Manage appointments, staff shifts, and customer bookings effortlessly.",
        img: Saloon,
    },
    {
        id: "clinic",
        label: "Clinics",
        title: "Clinic Appointment System",
        desc: "Streamline patient scheduling and reduce waiting time.",
        img: Clinic,
    },
    {
        id: "consulting",
        label: "Consultants",
        title: "Consultation Booking",
        desc: "Handle meetings and client bookings professionally.",
        img: Consultants,
    },
    {
        id: "fitness",
        label: "Fitness",
        title: "Fitness Scheduling",
        desc: "Manage classes, trainers, and sessions efficiently.",
        img: Fitness,
    },
    {
        id: "education",
        label: "Education",
        title: "Education Scheduling",
        desc: "Organize sessions, batches, and student appointments.",
        img: Education,
    },
];


export default function IndustriesSection() {

    const [active, setActive] = useState("salon");

    const activeTab = tabs.find((t) => t.id === active);


    return (

        <section
            className="
                relative
                min-h-screen
                overflow-hidden
                bg-white
                py-32
                text-slate-900
            "
        >

            {/* =====================================================
                SOFT BACKGROUND GLOW
            ===================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-[250px]
                    -top-[250px]
                    h-[700px]
                    w-[700px]
                    rounded-full
                    bg-cyan-300/20
                    blur-[180px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -left-[300px]
                    bottom-[-300px]
                    h-[700px]
                    w-[700px]
                    rounded-full
                    bg-purple-300/10
                    blur-[180px]
                "
            />


            {/* =====================================================
                SUBTLE GRID
            ===================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-[0.035]
                    [background-image:linear-gradient(rgba(15,23,42,1)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,1)_1px,transparent_1px)]
                    [background-size:70px_70px]
                "
            />


            <div
                className="
                    relative
                    z-10
                    mx-auto
                    max-w-7xl
                    px-6
                "
            >

                {/* =================================================
                    HEADER
                ================================================= */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                        mx-auto
                        mb-16
                        max-w-3xl
                        text-center
                    "
                >

                    {/* Eyebrow */}

                    <div
                        className="
                            mb-5
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-slate-200
                            bg-white/70
                            px-4
                            py-2
                            shadow-sm
                            backdrop-blur-xl
                        "
                    >

                        <span
                            className="
                                h-1.5
                                w-1.5
                                rounded-full
                                bg-cyan-500
                                shadow-[0_0_10px_rgba(6,182,212,0.7)]
                            "
                        />

                        <span
                            className="
                                text-xs
                                font-semibold
                                uppercase
                                tracking-[0.25em]
                                text-slate-500
                            "
                        >
                            Industries
                        </span>

                    </div>


                    <h2
                        className="
                            text-4xl
                            font-semibold
                            leading-tight
                            tracking-tight
                            text-slate-900
                            md:text-5xl
                            lg:text-6xl
                        "
                    >
                        Built for every
                        <br />

                        <span className="text-slate-400">
                            kind of business.
                        </span>
                    </h2>


                    <p
                        className="
                            mx-auto
                            mt-6
                            max-w-2xl
                            text-base
                            leading-7
                            text-slate-500
                            md:text-lg
                        "
                    >
                        Flexible scheduling tools designed around the way
                        your industry works.
                    </p>

                </motion.div>


                {/* =================================================
                    MAIN CONTENT
                ================================================= */}

                <div
                    className="
                        grid
                        gap-10
                        lg:grid-cols-[280px_1fr]
                        lg:items-start
                    "
                >

                    {/* =================================================
                        TABS
                    ================================================= */}

                    <div className="space-y-3">

                        {tabs.map((tab, index) => (

                            <motion.button
                                key={tab.id}
                                initial={{
                                    opacity: 0,
                                    x: -20,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.06,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                onClick={() => setActive(tab.id)}
                                className={`
                                    group
                                    relative
                                    w-full
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    px-5
                                    py-4
                                    text-left
                                    transition-all
                                    duration-300

                                    ${
                                        active === tab.id
                                            ? `
                                                border-slate-900
                                                bg-slate-900
                                                text-white
                                                shadow-[0_15px_40px_rgba(15,23,42,0.18)]
                                            `
                                            : `
                                                border-slate-200
                                                bg-white/70
                                                text-slate-600
                                                hover:border-slate-300
                                                hover:bg-white
                                                hover:text-slate-900
                                            `
                                    }
                                `}
                            >

                                {/* Active glow */}

                                {active === tab.id && (
                                    <motion.div
                                        layoutId="activeIndustry"
                                        className="
                                            absolute
                                            inset-y-0
                                            left-0
                                            w-1
                                            bg-cyan-400
                                            shadow-[0_0_15px_rgba(34,211,238,0.9)]
                                        "
                                    />
                                )}


                                <div className="flex items-center justify-between">

                                    <span
                                        className="
                                            text-sm
                                            font-medium
                                        "
                                    >
                                        {tab.label}
                                    </span>


                                    <span
                                        className={`
                                            text-xs
                                            transition-transform
                                            duration-300
                                            ${
                                                active === tab.id
                                                    ? "translate-x-0 text-cyan-300"
                                                    : "translate-x-[-4px] text-slate-300 group-hover:translate-x-0 group-hover:text-slate-500"
                                            }
                                        `}
                                    >
                                        →
                                    </span>

                                </div>

                            </motion.button>

                        ))}

                    </div>


                    {/* =================================================
                        CONTENT
                    ================================================= */}

                    <div className="min-w-0">

                        <AnimatePresence mode="wait">

                            <motion.div
                                key={activeTab.id}
                                initial={{
                                    opacity: 0,
                                    y: 25,
                                    scale: 0.985,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: -20,
                                    scale: 0.985,
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="
                                    overflow-hidden
                                    rounded-[28px]
                                    border
                                    border-slate-200
                                    bg-white
                                    shadow-[0_30px_80px_rgba(15,23,42,0.10)]
                                "
                            >

                                {/* =================================================
                                    IMAGE
                                ================================================= */}

                                <div
                                    className="
                                        group
                                        relative
                                        overflow-hidden
                                    "
                                >

                                    <img
                                        src={activeTab.img}
                                        alt={activeTab.title}
                                        className="
                                            h-[380px]
                                            w-full
                                            object-cover
                                            object-[center_30%]
                                            transition-transform
                                            duration-700
                                            ease-out
                                            group-hover:scale-[1.03]
                                        "
                                    />


                                    {/* Image gradient */}

                                    <div
                                        className="
                                            pointer-events-none
                                            absolute
                                            inset-0
                                            bg-gradient-to-t
                                            from-slate-950/50
                                            via-transparent
                                            to-transparent
                                        "
                                    />


                                    {/* Cyan glow */}

                                    <div
                                        className="
                                            pointer-events-none
                                            absolute
                                            inset-0
                                            opacity-0
                                            transition-opacity
                                            duration-500
                                            group-hover:opacity-100
                                            bg-cyan-400/5
                                        "
                                    />


                                    {/* Image label */}

                                    <div
                                        className="
                                            absolute
                                            bottom-6
                                            left-6
                                            rounded-full
                                            border
                                            border-white/20
                                            bg-black/20
                                            px-4
                                            py-2
                                            text-xs
                                            font-medium
                                            text-white
                                            backdrop-blur-xl
                                        "
                                    >
                                        {activeTab.label}
                                    </div>

                                </div>


                                {/* =================================================
                                    TEXT
                                ================================================= */}

                                <div
                                    className="
                                        flex
                                        flex-col
                                        gap-4
                                        p-7
                                        md:p-9
                                    "
                                >

                                    <div>

                                        <h3
                                            className="
                                                text-2xl
                                                font-semibold
                                                tracking-tight
                                                text-slate-900
                                                md:text-3xl
                                            "
                                        >
                                            {activeTab.title}
                                        </h3>

                                        <p
                                            className="
                                                mt-3
                                                max-w-2xl
                                                text-base
                                                leading-7
                                                text-slate-500
                                            "
                                        >
                                            {activeTab.desc}
                                        </p>

                                    </div>


                                    {/* Bottom accent */}

                                    <div
                                        className="
                                            h-px
                                            w-full
                                            bg-gradient-to-r
                                            from-cyan-400/40
                                            via-slate-200
                                            to-transparent
                                        "
                                    />

                                </div>

                            </motion.div>

                        </AnimatePresence>

                    </div>

                </div>

            </div>

        </section>
    );
}

