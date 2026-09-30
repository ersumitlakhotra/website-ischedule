import React from "react";
import {
    Activity,
    Users,
    BriefcaseBusiness,
    BookOpen,
    Camera,
    Heart,
    MessageCircle,
    Compass,
    Globe,
    Home,
    Truck,
    Star,
    Music,
    Sparkles,
} from "lucide-react";

const categories = [
    { title: "Beauty & Wellness", subtitle: "Salons, Spas", icon: Sparkles },
    { title: "Health & Fitness", subtitle: "Yoga, Trainers", icon: Activity },
    { title: "Events", subtitle: "Weddings, Coaches", icon: Users },
    { title: "Professional", subtitle: "Consultants", icon: BriefcaseBusiness },
    { title: "Education", subtitle: "Tutors, Schools", icon: BookOpen },
    { title: "Photography", subtitle: "Studios", icon: Camera },
    { title: "Pet Services", subtitle: "Groomers", icon: Heart },
    { title: "Counselling", subtitle: "Support", icon: MessageCircle },
    { title: "Activities", subtitle: "Outdoor", icon: Compass },
    { title: "Business", subtitle: "Offices", icon: Globe },
    { title: "Home Services", subtitle: "Repairs", icon: Home },
    { title: "Transport", subtitle: "Fleet", icon: Truck },
    { title: "Spiritual", subtitle: "Astrology", icon: Star },
    { title: "Music", subtitle: "Dance & Studios", icon: Music },
];

const row = [...categories, ...categories];

function IndustryCard({ item, reverse = false }) {
    const Icon = item.icon;

    return (
        <div className="group relative w-[250px] shrink-0 overflow-hidden rounded-[28px] border border-cyan-100/15 bg-white/[0.065] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-1 hover:border-cyan-100/35 hover:bg-white/[0.09]">

            <div className={`pointer-events-none absolute ${reverse ? "-bottom-16 -left-16" : "-right-16 -top-16"} h-40 w-40 rounded-full bg-cyan-300/10 blur-[55px] transition-transform duration-700 group-hover:scale-125`} />

            <div className={`pointer-events-none absolute ${reverse ? "-top-20 -right-10" : "-bottom-20 -left-10"} h-32 w-32 rounded-full bg-sky-400/[0.06] blur-[50px]`} />

            <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/[0.10] via-transparent to-cyan-300/[0.035]" />

            <div className="pointer-events-none absolute inset-[1px] rounded-[27px] border border-white/[0.045]" />

            <div className="relative z-10">

                <div className="mb-7 flex items-center justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-100/15 bg-cyan-200/[0.075] text-cyan-100 shadow-[0_0_30px_rgba(103,232,249,0.08)] transition-transform duration-500 group-hover:scale-105">

                        <Icon size={21} strokeWidth={1.5} />

                    </div>

                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-200/45 shadow-[0_0_12px_rgba(103,232,249,0.5)]" />

                </div>

                <h3 className="text-[15px] font-medium tracking-[-0.01em] text-white/90">
                    {item.title}
                </h3>

                <p className="mt-2 text-xs tracking-wide text-cyan-50/40">
                    {item.subtitle}
                </p>

            </div>

            <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-200/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        </div>
    );
}

export default function TrustedSection() {
    return (
        <section id="Industries" className="relative overflow-hidden border-y border-white/[0.06] bg-[#071720] py-32 text-white">

            {/* =====================================================
                STATIC BLURRED ATMOSPHERE
            ====================================================== */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                {/* Main white/cyan light */}
                <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.085] blur-[180px]" />

                {/* Cyan center glow */}
                <div className="absolute left-1/2 top-[48%] h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.055] blur-[160px]" />

                {/* Left atmosphere */}
                <div className="absolute -left-48 top-0 h-[600px] w-[600px] rounded-full bg-white/[0.07] blur-[170px]" />

                {/* Right atmosphere */}
                <div className="absolute -right-48 bottom-0 h-[650px] w-[650px] rounded-full bg-cyan-200/[0.055] blur-[180px]" />

                {/* Bottom glow */}
                <div className="absolute bottom-[-300px] left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-white/[0.045] blur-[170px]" />

                {/* Very subtle glass layer */}
                <div className="absolute inset-0 bg-white/[0.018]" />

                {/* Premium dot texture */}
                <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(rgba(255,255,255,0.45)_0.7px,transparent_0.7px)] [background-size:34px_34px]" />

                {/* Top light */}
                <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/[0.055] to-transparent" />

                {/* Bottom light */}
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white/[0.035] to-transparent" />

            </div>

            {/* =====================================================
                HEADER
            ====================================================== */}

            <div className="relative z-10 mx-auto mb-20 max-w-4xl px-6 text-center">

                <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-cyan-100/15 bg-white/[0.055] px-4 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl">

                    <Sparkles size={14} strokeWidth={1.5} className="text-cyan-200" />

                    <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/50">
                        Built for every industry
                    </span>

                </div>

                <h2 className="text-4xl font-light tracking-[-0.035em] text-white md:text-5xl lg:text-6xl">
                    One platform.
                    <span className="mt-2 block bg-gradient-to-r from-cyan-100 via-white to-cyan-200 bg-clip-text text-transparent">
                        Every kind of business.
                    </span>
                </h2>

                <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 tracking-wide text-white/40 md:text-base">
                    From appointments and classes to consultations and services,
                    iSchedule gives every business a simpler way to manage time,
                    customers, and growth.
                </p>

            </div>

            {/* =====================================================
                MARQUEE
            ====================================================== */}

            <div className="relative z-10 space-y-6">

                {/* LEFT GLASS FADE */}
                <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-28 bg-gradient-to-r from-[#071720] via-[#071720]/80 to-transparent md:w-48" />

                {/* RIGHT GLASS FADE */}
                <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-28 bg-gradient-to-l from-[#071720] via-[#071720]/80 to-transparent md:w-48" />

                {/* ROW ONE */}
                <div className="overflow-hidden py-2">

                    <div className="ischedule-marquee-right flex w-max gap-5">

                        {row.map((item, index) => (
                            <IndustryCard key={`row-one-${index}`} item={item} />
                        ))}

                    </div>

                </div>

                {/* ROW TWO */}
                <div className="overflow-hidden py-2">

                    <div className="ischedule-marquee-left flex w-max gap-5">

                        {row.map((item, index) => (
                            <IndustryCard key={`row-two-${index}`} item={item} reverse />
                        ))}

                    </div>

                </div>

            </div>

            {/* =====================================================
                FOOTER
            ====================================================== */}

            <div className="relative z-10 mx-auto mt-20 h-px max-w-5xl bg-gradient-to-r from-transparent via-cyan-200/20 to-transparent" />

            <p className="relative z-10 mt-8 text-center text-[10px] uppercase tracking-[0.32em] text-cyan-100/25">
                One scheduling platform · Endless possibilities
            </p>

            {/* =====================================================
                MARQUEE CSS
            ====================================================== */}

            <style>{`
                @keyframes ischedule-marquee-right {
                    from {
                        transform: translate3d(0, 0, 0);
                    }

                    to {
                        transform: translate3d(-50%, 0, 0);
                    }
                }

                @keyframes ischedule-marquee-left {
                    from {
                        transform: translate3d(-50%, 0, 0);
                    }

                    to {
                        transform: translate3d(0, 0, 0);
                    }
                }

                .ischedule-marquee-right {
                    animation: ischedule-marquee-right 72s linear infinite;
                    will-change: transform;
                    backface-visibility: hidden;
                    transform: translate3d(0, 0, 0);
                }

                .ischedule-marquee-left {
                    animation: ischedule-marquee-left 78s linear infinite;
                    will-change: transform;
                    backface-visibility: hidden;
                    transform: translate3d(-50%, 0, 0);
                }

                @media (prefers-reduced-motion: reduce) {
                    .ischedule-marquee-right,
                    .ischedule-marquee-left {
                        animation: none;
                    }
                }
            `}</style>

        </section>
    );
}