
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Saloon from "../../Images/website/Salons.webp";
import Clinic from "../../Images/website/Clinics.webp";
import Consultants from "../../Images/website/Consultants.webp";
import Fitness from "../../Images/website/Fitness.webp";
import Education from "../../Images/website/Education.webp";

const features = [
    {
        image: Saloon,
        eyebrow: "For Salons & Beauty",
        title: "Fill your calendar. Delight every client.",
        description: "Manage appointments, staff schedules and client bookings effortlessly while giving every customer a smooth experience from booking to checkout.",
        cards: [
            {
                label: "Online Booking",
                title: "Let clients book anytime.",
                description: "Give clients a simple booking experience while keeping your calendar automatically organized.",
            },
            {
                label: "Client Experience",
                title: "Every client, always within reach.",
                description: "Keep profiles, appointment history and preferences organized in one beautiful workspace.",
            },
        ],
    },
    {
        image: Clinic,
        eyebrow: "For Clinics & Healthcare",
        title: "A simpler way to manage every appointment.",
        description: "Keep schedules, clients, staff and daily appointments organized in one connected workspace built to keep your clinic running smoothly.",
        cards: [
            {
                label: "Appointment Flow",
                title: "Keep every appointment moving.",
                description: "See your day at a glance and keep schedules organized across providers and time slots.",
            },
            {
                label: "Client Records",
                title: "Everything in one place.",
                description: "Keep customer details, appointment history and communication connected to every booking.",
            },
        ],
    },
    {
        image: Consultants,
        eyebrow: "For Consultants & Professionals",
        title: "Turn your time into your biggest advantage.",
        description: "Organize consultations, meetings and availability while giving clients a simple way to book time with you whenever they need it.",
        cards: [
            {
                label: "Consultations",
                title: "Make booking effortless.",
                description: "Let clients choose available times while you stay focused on your work.",
            },
            {
                label: "Availability",
                title: "Your time, your rules.",
                description: "Control working hours, breaks and availability without manually managing every appointment.",
            },
        ],
    },
    {
        image: Fitness,
        eyebrow: "For Fitness & Wellness",
        title: "Keep every class moving perfectly.",
        description: "Manage classes, trainers, members and bookings from one place so your team can focus on delivering an exceptional fitness experience.",
        cards: [
            {
                label: "Classes",
                title: "Make every class easy to book.",
                description: "Create schedules, manage capacity and let members reserve their spot with ease.",
            },
            {
                label: "Members",
                title: "Know your members better.",
                description: "Keep member profiles, bookings and attendance connected in one simple workspace.",
            },
        ],
    },
    {
        image: Education,
        eyebrow: "For Education & Training",
        title: "Bring your entire schedule together.",
        description: "Coordinate classes, instructors, students and appointments with a smarter scheduling system designed for growing education businesses.",
        cards: [
            {
                label: "Class Scheduling",
                title: "Organize every class.",
                description: "Manage instructors, schedules and classes without juggling multiple calendars.",
            },
            {
                label: "Students",
                title: "Keep every student connected.",
                description: "Track bookings, attendance and appointment history from one centralized workspace.",
            },
        ],
    },
];

const smoothEase = [0.22, 1, 0.36, 1];

function FeatureImage({
    feature,
    index,
    progress,
}) {
    const start = index / features.length;
    const end = (index + 1) / features.length;

    const opacity = useTransform(
        progress,
        [
            start,
            start + 0.055,
            end - 0.055,
            end,
        ],
        [
            index === 0 ? 1 : 0,
            1,
            1,
            index === features.length - 1 ? 1 : 0,
        ]
    );

    const scale = useTransform(
        progress,
        [start, end],
        [1.035, 1]
    );

    const y = useTransform(
        progress,
        [start, end],
        [12, -8]
    );

    const contentOpacity = useTransform(
        progress,
        [
            start,
            start + 0.06,
            end - 0.06,
            end,
        ],
        [
            index === 0 ? 1 : 0,
            1,
            1,
            index === features.length - 1 ? 1 : 0,
        ]
    );

    const contentY = useTransform(
        progress,
        [
            start,
            start + 0.07,
            end - 0.06,
            end,
        ],
        [
            22,
            0,
            0,
            -18,
        ]
    );

    const contentBlur = useTransform(
        progress,
        [
            start,
            start + 0.07,
            end - 0.06,
            end,
        ],
        [
            6,
            0,
            0,
            4,
        ]
    );

    const filter = useTransform(
        contentBlur,
        (value) => `blur(${value}px)`
    );

    return (
        <>
            <motion.img
                src={feature.image}
                alt={feature.eyebrow}
                style={{
                    opacity,
                    scale,
                    y,
                }}
                transition={{
                    duration: 1.2,
                    ease: smoothEase,
                }}
                className="absolute inset-0 h-full w-full object-cover"
            />

            <motion.div
                style={{
                    opacity: contentOpacity,
                    y: contentY,
                    filter,
                }}
                className="pointer-events-none absolute inset-x-0 bottom-0 p-8 lg:p-10"
            >
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
                    {feature.eyebrow}
                </p>

                <h2 className="max-w-2xl text-4xl font-light leading-tight tracking-tight text-white lg:text-5xl">
                    {feature.title}
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 lg:text-base">
                    {feature.description}
                </p>
            </motion.div>
        </>
    );
}

function FeatureCards({
    feature,
    index,
    progress,
}) {
    const start = index / features.length;
    const end = (index + 1) / features.length;

    const opacity = useTransform(
        progress,
        [
            start,
            start + 0.07,
            end - 0.07,
            end,
        ],
        [
            index === 0 ? 1 : 0,
            1,
            1,
            index === features.length - 1 ? 1 : 0,
        ]
    );

    const y = useTransform(
        progress,
        [
            start,
            start + 0.08,
            end - 0.08,
            end,
        ],
        [
            28,
            0,
            0,
            -28,
        ]
    );

    const scale = useTransform(
        progress,
        [
            start,
            start + 0.08,
            end - 0.08,
            end,
        ],
        [
            0.985,
            1,
            1,
            0.985,
        ]
    );

    const blurValue = useTransform(
        progress,
        [
            start,
            start + 0.08,
            end - 0.08,
            end,
        ],
        [
            5,
            0,
            0,
            5,
        ]
    );

    const filter = useTransform(
        blurValue,
        (value) => `blur(${value}px)`
    );

    return (
        <motion.div
            style={{
                opacity,
                y,
                scale,
                filter,
            }}
            className="absolute left-0 right-0 flex flex-col gap-5"
        >
            {feature.cards.map((card, cardIndex) => (
                <div
                    key={cardIndex}
                    className="relative h-[31vh] overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                >
                    <div className={`absolute ${cardIndex === 0 ? "-right-20 -top-20" : "-bottom-20 -right-20"} h-48 w-48 rounded-full ${cardIndex === 0 ? "bg-cyan-400/10" : "bg-blue-500/10"} blur-3xl`} />

                    <div className="relative p-8">
                        <div className={`mb-5 h-1 w-12 rounded-full ${cardIndex === 0 ? "bg-gradient-to-r from-cyan-300 to-blue-500" : "bg-gradient-to-r from-blue-300 to-cyan-400"}`} />

                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-500">
                            {card.label}
                        </p>

                        <h3 className="mt-3 text-2xl font-light tracking-tight text-slate-900">
                            {card.title}
                        </h3>

                        <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
                            {card.description}
                        </p>

                        <button
                            type="button"
                            className="mt-6 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-cyan-500 transition-all duration-500 hover:gap-3"
                        >
                            Learn More
                            <ArrowUpRight size={14} />
                        </button>
                    </div>
                </div>
            ))}
        </motion.div>
    );
}

export default function FeatureShowcase({ sectionRef }) {
    const progress = useMotionValue(0);

    const smoothProgress = useSpring(progress, {
        stiffness: 45,
        damping: 24,
        mass: 0.8,
    });

    const [activeIndex, setActiveIndex] = useState(0);
    const lastIndex = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const section = sectionRef?.current;

            if (!section) return;

            const rect = section.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            const totalScroll = rect.height - viewportHeight;

            if (totalScroll <= 0) return;

            const scrolled = Math.max(
                0,
                Math.min(totalScroll, -rect.top)
            );

            const rawProgress = scrolled / totalScroll;

            progress.set(rawProgress);

            const newIndex = Math.min(
                features.length - 1,
                Math.floor(rawProgress * features.length)
            );

            if (newIndex !== lastIndex.current) {
                lastIndex.current = newIndex;
                setActiveIndex(newIndex);
            }
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [sectionRef, progress]);

    return (
        <div className="sticky top-0 h-screen w-full overflow-hidden">
            <div className="mx-auto flex h-full w-full max-w-[1600px] items-center px-6 lg:px-12">
                <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">

                    {/* LEFT */}
                    <div className="lg:col-span-7">
                        <div className="relative h-[72vh] w-full overflow-hidden rounded-[36px] bg-slate-100 shadow-[0_30px_100px_rgba(0,0,0,0.12)]">

                            {features.map((feature, index) => (
                                <FeatureImage
                                    key={index}
                                    feature={feature}
                                    index={index}
                                    progress={smoothProgress}
                                />
                            ))}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            <div className="absolute bottom-7 right-8 flex items-center gap-2">
                                {features.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`h-1.5 rounded-full transition-all duration-700 ${activeIndex === index ? "w-[34px] bg-white" : "w-[7px] bg-white/40"}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative flex h-[72vh] flex-col justify-center lg:col-span-5">
                        {features.map((feature, index) => (
                            <FeatureCards
                                key={index}
                                feature={feature}
                                index={index}
                                progress={smoothProgress}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}

