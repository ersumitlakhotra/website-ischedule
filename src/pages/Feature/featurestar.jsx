
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function FeatureStarSection({ sectionRef }) {

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 24,
        mass: 0.35,
    });

// =========================================================
// 400VH — STAR SECTION
// 0% → 40%
// =========================================================

const starScaleRaw = useTransform(
    smoothProgress,
    [0, 0.25, 0.32, 0.36, 0.39, 0.40],
    [1, 1, 1.05, 1.15, 1.3, 1.5]
);

const starScale = useSpring(starScaleRaw, {
    stiffness: 70,
    damping: 22,
    mass: 0.3,
});

const surroundingOpacity = useTransform(
    smoothProgress,
    [0, 0.28, 0.34, 0.38, 0.40, 0.43],
    [1, 1, 0.9, 0.5, 0.1, 0]
);

const contentOpacity = useTransform(
    smoothProgress,
    [0, 0.28, 0.34, 0.38, 0.40, 0.43],
    [1, 1, 0.8, 0.4, 0.1, 0]
);

// =========================================================
// 350VH — WHITE CORE
// 40% → 75%
// =========================================================

const whiteCoreScaleRaw = useTransform(
    smoothProgress,
    [0.40, 0.44, 0.49, 0.55, 0.62, 0.69, 0.75],
    [1, 1.05, 1.3, 2.5, 7, 25, 100]
);

const whiteCoreScale = useSpring(whiteCoreScaleRaw, {
    stiffness: 80,
    damping: 24,
    mass: 0.28,
});

const whiteCoreOpacity = useTransform(
    smoothProgress,
    [0.40, 0.44, 0.49, 0.55, 0.62, 0.69, 0.75],
    [0, 0.05, 0.12, 0.25, 0.55, 0.9, 1]
);

const finalWhiteOpacity = useTransform(
    smoothProgress,
    [0.62, 0.67, 0.72, 0.75, 0.78],
    [0, 0.2, 0.7, 1, 1]
);

// =========================================================
// 250VH — TESTIMONIALS
// 75% → 100%
// =========================================================

const nextSectionOpacity = useTransform(
    smoothProgress,
    [0.73, 0.76, 0.80, 1],
    [0, 0.25, 1, 1]
);

const nextSectionY = useTransform(
    smoothProgress,
    [0.73, 0.80, 1],
    [40, 0, 0]
);

  
    const starRotateRaw = useTransform(
        smoothProgress,
        [0, 1],
        [45, 45]
    );

    const starRotate = useSpring(starRotateRaw, {
        stiffness: 80,
        damping: 25,
        mass: 0.3,
    });

    const stats = [
        { value: "100+", label: "Businesses" },
        { value: "10K+", label: "Appointments Booked" },
        { value: "4.8★", label: "Average Rating" },
    ];

    const testimonials = [
        {
            name: "Rahul Sharma",
            role: "Salon Owner",
            text: "iSchedule completely transformed how we manage appointments. Our no-shows dropped and bookings increased significantly.",
        },
        {
            name: "Neha Verma",
            role: "Clinic Manager",
            text: "The interface is super clean and easy to use. My team adapted within a day and productivity improved instantly.",
        },
        {
            name: "Amit Patel",
            role: "Consultant",
            text: "We love the automation features. It saves us hours every week and helps us focus on customers.",
        },
    ];

    return (
        <div className="sticky top-0 h-screen overflow-hidden">

            {/* =====================================================
                STAGE 1
                DARK STAR
            ===================================================== */}

            <div className="absolute inset-0 bg-[#061a24]">

                <motion.div style={{ opacity: surroundingOpacity }} className="pointer-events-none absolute inset-0 z-0">

                    <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:60px_60px]" />

                    <div className="absolute -left-[250px] -top-[250px] h-[700px] w-[700px] rounded-full bg-cyan-400/[0.07] blur-[180px]" />

                    <div className="absolute -bottom-[250px] right-[5%] h-[600px] w-[600px] rounded-full bg-cyan-400/[0.05] blur-[180px]" />

                </motion.div>

                <motion.div style={{ opacity: contentOpacity }} className="absolute inset-0 z-20 flex items-center">

                    <div className="flex h-full w-[60%] items-center px-12 lg:px-20 xl:px-28">

                        <div className="max-w-3xl">

                            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/10 bg-cyan-400/[0.06] px-4 py-2 backdrop-blur-xl">

                                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />

                                <span className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-200/70">
                                    Powerful Features
                                </span>

                            </div>

                            <h2 className="max-w-2xl text-5xl font-semibold leading-[1.02] tracking-tight text-white lg:text-6xl xl:text-7xl">
                                Everything your
                                <br />
                                <span className="text-white/30">
                                    business needs.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-xl text-base leading-7 text-white/45 lg:text-lg">
                                Powerful tools designed to simplify scheduling,
                                customer management, team operations, and business growth.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-3">

                                {[
                                    "Easy Booking",
                                    "Smart Dashboard",
                                    "Inventory",
                                    "Attendance",
                                    "Customer Management",
                                    "Automation",
                                    "Team Management",
                                    "Analytics",
                                ].map((item) => (
                                    <div key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/50 backdrop-blur-xl">
                                        {item}
                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>

                    <div className="relative flex h-full w-[40%] items-center justify-center">

                        <motion.div style={{ scale: starScale, rotate: starRotate }} className="relative flex h-[180px] w-[180px] items-center justify-center will-change-transform">

                            <div className="absolute inset-[-100px] rounded-full bg-cyan-400/[0.08] blur-[90px]" />

                            <div className="absolute inset-[-55px] rounded-full bg-cyan-300/[0.12] blur-[45px]" />

                            <div className="absolute inset-[-25px] rounded-full border border-cyan-300/20 shadow-[0_0_40px_rgba(34,211,238,0.2)]" />

                            <div className="absolute inset-[-10px] rounded-full border border-cyan-200/20" />

                            <div className="relative h-32 w-32 rotate-45 rounded-[35%] border border-cyan-100/30 bg-gradient-to-br from-cyan-100/30 via-cyan-400/10 to-cyan-950/50 shadow-[0_0_35px_rgba(34,211,238,0.5),0_0_100px_rgba(34,211,238,0.25),inset_0_0_35px_rgba(103,232,249,0.2)]">

                                <div className="absolute left-1/2 top-1/2 h-[58px] w-[58px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-100/80 blur-[4px] shadow-[0_0_30px_rgba(165,243,252,1)]" />

                                <div className="absolute left-1/2 top-1/2 h-[40px] w-[40px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_25px_rgba(255,255,255,1)]" />

                            </div>

                            <div className="absolute h-px w-[300px] bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent" />

                            <div className="absolute h-[300px] w-px bg-gradient-to-b from-transparent via-cyan-200/40 to-transparent" />

                        </motion.div>

                        <motion.div style={{ opacity: surroundingOpacity }} animate={{ rotate: 360 }} transition={{ duration: 14, repeat: Infinity, ease: "linear" }} className="pointer-events-none absolute h-[330px] w-[330px] rounded-full border border-cyan-300/[0.08]">

                            <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-200 shadow-[0_0_15px_rgba(103,232,249,1)]" />

                        </motion.div>

                        <motion.div style={{ opacity: surroundingOpacity }} animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="pointer-events-none absolute h-[440px] w-[440px] rounded-full border border-cyan-300/[0.05]">

                            <div className="absolute bottom-10 right-10 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,1)]" />

                        </motion.div>

                    </div>

                </motion.div>

            </div>

            {/* =====================================================
                STAGE 2
                WHITE CORE
            ===================================================== */}

            <motion.div style={{ scale: whiteCoreScale, opacity: whiteCoreOpacity }} className="pointer-events-none absolute left-[80%] top-1/2 z-40 h-[40px] w-[40px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_40px_rgba(255,255,255,1),0_0_100px_rgba(255,255,255,0.9)] will-change-transform" />

            <motion.div style={{ opacity: finalWhiteOpacity }} className="pointer-events-none absolute inset-0 z-50 bg-white" />

            {/* =====================================================
                STAGE 3
                TESTIMONIALS
            ===================================================== */}

            <motion.div style={{ opacity: nextSectionOpacity, y: nextSectionY }} className="absolute inset-0 z-[60] overflow-hidden bg-white text-[#061a24] will-change-transform">

                <div className="pointer-events-none absolute -right-[180px] -top-[220px] h-[600px] w-[600px] rounded-full bg-cyan-400/[0.09] blur-[180px]" />

                <div className="pointer-events-none absolute -bottom-[280px] -left-[220px] h-[600px] w-[600px] rounded-full bg-cyan-300/[0.06] blur-[180px]" />

                <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(6,26,36,1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,26,36,1)_1px,transparent_1px)] [background-size:70px_70px]" />

                <div className="relative mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-6 py-16 lg:px-12">

                    <div className="mb-10 text-center">

                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/10 bg-cyan-500/[0.05] px-4 py-2">

                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />

                            <span className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-600">
                                Trusted by businesses
                            </span>

                        </div>

                        <h2 className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-[#061a24] md:text-5xl lg:text-6xl">
                            Loved by businesses
                            <br />
                            <span className="text-cyan-600">
                                built for growth.
                            </span>
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-black/40 md:text-base">
                            See how iSchedule helps businesses streamline bookings,
                            simplify operations, and create better customer experiences.
                        </p>

                    </div>

                    <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-3">

                        {stats.map((s, i) => (

                            <div key={i} className="group rounded-2xl border border-black/[0.06] bg-black/[0.02] p-5 text-center transition duration-500 hover:border-cyan-500/20 hover:bg-cyan-500/[0.025]">

                                <h3 className="text-3xl font-semibold tracking-tight text-cyan-600">
                                    {s.value}
                                </h3>

                                <p className="mt-1 text-xs text-black/35">
                                    {s.label}
                                </p>

                            </div>

                        ))}

                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

                        {testimonials.map((t, i) => (

                            <div key={i} className="group relative overflow-hidden rounded-3xl border border-black/[0.06] bg-black/[0.02] p-6 transition duration-500 hover:-translate-y-1 hover:border-cyan-500/20 hover:bg-cyan-500/[0.025]">

                                <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-400/[0.10] blur-[70px] opacity-0 transition duration-700 group-hover:opacity-100" />

                                <div className="absolute left-0 top-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-transparent transition-all duration-700 group-hover:w-full" />

                                <div className="relative z-10 mb-4 text-sm tracking-[0.2em] text-cyan-500">
                                    ★★★★★
                                </div>

                                <p className="relative z-10 min-h-[110px] text-sm leading-7 text-black/50">
                                    “{t.text}”
                                </p>

                                <div className="relative z-10 mt-6 flex items-center gap-3">

                                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/10 bg-cyan-500/[0.07] text-sm font-semibold text-cyan-700">
                                        {t.name.charAt(0)}
                                    </div>

                                    <div>

                                        <h4 className="text-sm font-semibold text-[#061a24]">
                                            {t.name}
                                        </h4>

                                        <span className="text-xs text-black/35">
                                            {t.role}
                                        </span>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </motion.div>

        </div>
    );
}
