import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";

export default function PricingSection() {
    const plans = [
        {
            name: "Free Trial",
            price: "$0",
            sub: "/ month",
            description: "Explore everything you need to get started.",
            cta: "Get Started Free",
            highlight: false,
            features: [
                "Appointment Records",
                "Data Management",
                "Inventory Management",
                "Employee Performance",
                "Portal & Mobile App",
                "Priority Support",
            ],
        },
        {
            name: "Standard",
            price: "$49.99",
            sub: "+ Tax / month",
            description: "Everything your growing business needs.",
            cta: "Choose Plan",
            highlight: true,
            features: [
                "Appointment Records",
                "Data Management",
                "Inventory Management",
                "Employee Performance",
                "Portal & Mobile App",
                "Priority Support",
                "Text Messages (Paid)"
            ],
        },
        {
            name: "Enterprise",
            price: "$89.99",
            sub: "+ Tax / month",
            description: "Advanced tools for larger operations.",
            cta: "Start Enterprise",
            highlight: false,
            features: [
                "Appointment Records",
                "Data Management",
                "Inventory Management",
                "Employee Performance",
                "Portal & Mobile App",
                "Priority Support",
                "Website Included",
                "Text Messages (Paid)",
            ],
        },
    ];

    return (
        <section id="Pricing" className="relative overflow-hidden border-y border-white/[0.06] bg-[#071720] py-32 text-white">

            {/* =====================================================
                ATMOSPHERIC BACKGROUND
            ====================================================== */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                <div className="absolute left-1/2 top-[35%] h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-white/[0.055] blur-[180px]" />

                <div className="absolute -left-48 top-[-150px] h-[600px] w-[600px] rounded-full bg-cyan-300/[0.055] blur-[170px]" />

                <div className="absolute -right-48 bottom-[-200px] h-[650px] w-[650px] rounded-full bg-cyan-200/[0.045] blur-[180px]" />

                <div className="absolute left-[30%] top-[50%] h-[400px] w-[400px] rounded-full bg-sky-400/[0.025] blur-[140px]" />

                <div className="absolute inset-0 bg-white/[0.012]" />

                <div className="absolute inset-0 opacity-[0.10] [background-image:radial-gradient(rgba(255,255,255,0.4)_0.7px,transparent_0.7px)] [background-size:34px_34px]" />

                <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/[0.045] to-transparent" />

                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white/[0.035] to-transparent" />

            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6">

                {/* =====================================================
                    HEADER
                ====================================================== */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="mx-auto mb-20 max-w-3xl text-center"
                >

                    <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-cyan-100/15 bg-white/[0.05] px-4 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl">

                        <Sparkles size={14} strokeWidth={1.5} className="text-cyan-200" />

                        <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/50">
                            Simple & transparent
                        </span>

                    </div>

                    <h2 className="text-4xl font-light tracking-[-0.04em] text-white md:text-5xl lg:text-6xl">
                        Pricing that grows
                        <span className="mt-2 block bg-gradient-to-r from-cyan-100 via-white to-cyan-200 bg-clip-text text-transparent">
                            with your business.
                        </span>
                    </h2>

                    <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 tracking-wide text-white/40 md:text-base">
                        Start free, upgrade when you need more, and keep everything
                        your business needs in one place.
                    </p>

                </motion.div>

                {/* =====================================================
                    PRICING GRID
                ====================================================== */}

                <div className="grid items-stretch gap-6 lg:grid-cols-3">

                    {plans.map((plan, i) => (

                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.8,
                                delay: i * 0.12,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className={`relative ${plan.highlight ? "lg:-translate-y-3" : ""}`}
                        >

                            {/* POPULAR GLOW */}
                            {plan.highlight && (
                                <div className="pointer-events-none absolute -inset-1 rounded-[32px] bg-cyan-300/[0.08] blur-2xl" />
                            )}

                            {/* CARD */}
                            <div className={`group relative flex h-full flex-col overflow-hidden rounded-[30px] border p-8 backdrop-blur-2xl transition-all duration-700 ${plan.highlight ? "border-cyan-200/35 bg-cyan-100/[0.075] shadow-[0_30px_100px_rgba(34,211,238,0.12)]" : "border-white/[0.10] bg-white/[0.045] shadow-[0_25px_80px_rgba(0,0,0,0.10)] hover:border-cyan-100/25 hover:bg-white/[0.065]"}`}>

                                {/* CARD LIGHT */}
                                <div className={`pointer-events-none absolute ${plan.highlight ? "right-[-80px] top-[-80px]" : "right-[-100px] top-[-100px]"} h-52 w-52 rounded-full ${plan.highlight ? "bg-cyan-200/[0.10]" : "bg-white/[0.045]"} blur-[70px] transition-transform duration-1000 group-hover:scale-125`} />

                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.075] via-transparent to-cyan-300/[0.025]" />

                                <div className="pointer-events-none absolute inset-[1px] rounded-[29px] border border-white/[0.035]" />

                                {/* POPULAR BADGE */}
                                {plan.highlight && (
                                    <div className="absolute right-7 top-7 inline-flex items-center gap-2 rounded-full border border-cyan-100/20 bg-cyan-200/[0.10] px-3 py-1.5 backdrop-blur-xl">

                                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />

                                        <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-cyan-100/75">
                                            Most Popular
                                        </span>

                                    </div>
                                )}

                                {/* PLAN */}
                                <div className="relative z-10">

                                    <p className={`text-xs font-medium uppercase tracking-[0.2em] ${plan.highlight ? "text-cyan-200/70" : "text-white/35"}`}>
                                        {plan.name}
                                    </p>

                                    <p className="mt-4 max-w-[220px] text-sm leading-6 text-white/35">
                                        {plan.description}
                                    </p>

                                    {/* PRICE */}
                                    <div className="mt-8 flex items-end gap-2">

                                        <span className="text-4xl font-light tracking-[-0.04em] text-white md:text-5xl">
                                            {plan.price}
                                        </span>

                                        <span className="mb-1.5 text-xs text-white/30">
                                            {plan.sub}
                                        </span>

                                    </div>

                                    {/* BUTTON */}
                                    <button
                                        onClick={() => window.open("https://www.app.ischedule.ca/signup", "_blank")}
                                        className={`mt-8 flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-medium transition-all duration-500 ${plan.highlight ? "bg-cyan-100 text-[#071720] shadow-[0_10px_40px_rgba(103,232,249,0.16)] hover:bg-white hover:shadow-[0_15px_50px_rgba(103,232,249,0.25)]" : "border border-white/10 bg-white/[0.055] text-white/80 hover:border-cyan-100/25 hover:bg-white/[0.09] hover:text-white"}`}
                                    >
                                        {plan.cta}
                                        <ArrowRight size={15} strokeWidth={1.7} className="transition-transform duration-500 group-hover:translate-x-1" />
                                    </button>

                                </div>

                                {/* DIVIDER */}
                                <div className="relative z-10 my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                                {/* FEATURES */}
                                <div className="relative z-10 flex-1">

                                    <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-white/25">
                                        Included
                                    </p>

                                    <ul className="space-y-4">

                                        {plan.features.map((feature, idx) => (

                                            <li
                                                key={idx}
                                                className="flex items-start gap-3 text-sm text-white/55"
                                            >

                                                <span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${plan.highlight ? "border-cyan-200/25 bg-cyan-200/[0.08] text-cyan-200" : "border-white/10 bg-white/[0.04] text-white/40"}`}>
                                                    <Check size={10} strokeWidth={2.5} />
                                                </span>

                                                <span className="leading-5">
                                                    {feature}
                                                </span>

                                            </li>

                                        ))}

                                    </ul>

                                </div>

                                {/* BOTTOM LIGHT */}
                                <div className={`pointer-events-none absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent ${plan.highlight ? "via-cyan-200/40" : "via-white/10"} to-transparent`} />

                            </div>

                        </motion.div>

                    ))}

                </div>

                {/* BOTTOM NOTE */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-12 text-center"
                >

                    <p className="text-[10px] uppercase tracking-[0.28em] text-white/20">
                        No complicated setup · Start when you're ready
                    </p>

                </motion.div>

            </div>

        </section>
    );
}