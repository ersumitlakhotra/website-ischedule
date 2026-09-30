
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useRef, useState } from "react";
import { FrameContent } from "./frame_content";
import ExperienceLoader from "../loading.jsx";
import { motion } from "framer-motion";
import {
    HeartHandshake,
    Megaphone,
    MessageCircle,
    TrendingUp,
} from "lucide-react";

export default function Home() {

    const TOTAL_FRAMES = 695;

    const [frame, setFrame] = useState(1);
    const [loadedFrames, setLoadedFrames] = useState(0);
    const [isReady, setIsReady] = useState(false);

    const targetFrame = useRef(1);
    const currentFrame = useRef(1);
    const lastFrame = useRef(1);

    const rafRef = useRef(null);
    const imageCache = useRef([]);

    /*
    |--------------------------------------------------------------------------
    | FRAME PATH
    |--------------------------------------------------------------------------
    */

    const getFramePath = (frameNumber) => {
        return `/frames/frame_${String(frameNumber).padStart(4, "0")}.jpg`;
    };

    /*
    |--------------------------------------------------------------------------
    | LOAD ALL FRAMES
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        let cancelled = false;

        const loadAllFrames = async () => {

            const promises = Array.from(
                { length: TOTAL_FRAMES },
                (_, index) => {

                    const frameNumber = index + 1;

                    return new Promise((resolve) => {

                        const image = new Image();

                        image.onload = () => {

                            if (!cancelled) {
                                imageCache.current[index] = image;

                                setLoadedFrames(
                                    (previous) => previous + 1
                                );
                            }

                            resolve();

                        };

                        image.onerror = () => {

                            if (!cancelled) {
                                setLoadedFrames(
                                    (previous) => previous + 1
                                );
                            }

                            resolve();

                        };

                        image.src = getFramePath(frameNumber);

                    });

                }
            );

            await Promise.all(promises);

            if (!cancelled) {
                setIsReady(true);
            }

        };

        loadAllFrames();

        return () => {
            cancelled = true;
        };

    }, []);

    useEffect(() => {
    if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    return () => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "auto";
        }
    };
}, []);

    /*
    |--------------------------------------------------------------------------
    | LOCK PAGE WHILE IMAGES LOAD
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        if (isReady) {

            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";

            return;

        }

        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";

        return () => {

            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";

        };

    }, [isReady]);

    /*
    |--------------------------------------------------------------------------
    | CURRENT IMAGE
    |--------------------------------------------------------------------------
    */

    const currentImage =
        imageCache.current[frame - 1];

    const currentImageSrc =
        currentImage?.src ||
        getFramePath(1);

    /*
    |--------------------------------------------------------------------------
    | SMOOTH SCROLL → FRAME
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        if (!isReady) return;

        const handleScroll = () => {

            const maxScroll =
                document.documentElement.scrollHeight -
                window.innerHeight;

            if (maxScroll <= 0) return;

            const progress =
                Math.max(
                    0,
                    Math.min(
                        1,
                        window.scrollY / maxScroll
                    )
                );

            targetFrame.current =
                1 + progress * (TOTAL_FRAMES - 1);

        };

        const animate = () => {

            const difference =
                targetFrame.current -
                currentFrame.current;

            currentFrame.current +=
                difference * 0.10;

            if (Math.abs(difference) < 0.01) {
                currentFrame.current =
                    targetFrame.current;
            }

            const requestedFrame =
                Math.max(
                    1,
                    Math.min(
                        TOTAL_FRAMES,
                        Math.round(
                            currentFrame.current
                        )
                    )
                );

            if (
                requestedFrame !==
                lastFrame.current
            ) {

                lastFrame.current =
                    requestedFrame;

                setFrame(requestedFrame);

            }

            rafRef.current =
                requestAnimationFrame(animate);

        };

        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );

        handleScroll();

        rafRef.current =
            requestAnimationFrame(animate);

        return () => {

            window.removeEventListener(
                "scroll",
                handleScroll
            );

            if (rafRef.current) {
                cancelAnimationFrame(
                    rafRef.current
                );
            }

        };

    }, [isReady]);

    /*
    |--------------------------------------------------------------------------
    | MARKETING STEPS
    |--------------------------------------------------------------------------
    */

    const marketingSteps = [
        {
            icon: HeartHandshake,
            title: "Loyalty",
            label: "Build Relationships",
            desc: "Reward loyal customers and encourage them to keep coming back.",
            points: ["Rewards", "Points", "Repeat Visits"],
        },
        {
            icon: Megaphone,
            title: "Promote",
            label: "Reach Customers",
            desc: "Create targeted promotions that help turn more customers into bookings.",
            points: ["Offers", "Campaigns", "Promotions"],
        },
        {
            icon: MessageCircle,
            title: "Engage",
            label: "Stay Connected",
            desc: "Keep customers engaged with timely communication and automated updates.",
            points: ["Messages", "Reminders", "Notifications"],
        },
        {
            icon: TrendingUp,
            title: "Grow",
            label: "Drive Growth",
            desc: "Understand customer behavior and use insights to increase retention and bookings.",
            points: ["Insights", "Retention", "Bookings"],
        },
    ];

    /*
    |--------------------------------------------------------------------------
    | LOADING SCREEN
    |--------------------------------------------------------------------------
    */

    const loadingPercentage = Math.min(
        100,
        Math.round(
            (loadedFrames / TOTAL_FRAMES) * 100
        )
    );

    if (!isReady) {

        return (
            <ExperienceLoader
                progress={loadingPercentage}
            />
        );

    }

    return (
        <>

            {/* Background */}

            <div className="fixed inset-0 z-0 h-screen w-screen overflow-hidden bg-black">

                <img
                    src={currentImageSrc}
                    alt=""
                    draggable="false"
                    className="absolute inset-0 h-full w-full select-none object-cover"
                />

            </div>


            {/* First */}

            <FrameContent
                frame={frame}
                startFrame={30}
                position="middle-left"
                eyebrow="Smart Appointment Management"
                title={
                    <>
                        Your time
                        <br />

                        <span className="text-cyan-400">
                            Perfectly scheduled
                        </span>
                    </>
                }
                description="A modern appointment platform designed to help businesses manage bookings, customers, employees and growth."
            />


            {/* Second */}

            <FrameContent
                frame={frame}
                startFrame={120}
                position="bottom-right"
                eyebrow="Real-time availability 24/7"
                title={
                    <>
                        Online Booking
                        <br />

                        <span className="text-cyan-400">
                            Automated confirmations
                        </span>
                    </>
                }
                description="Let customers book appointments 24/7 with a seamless online experience—anytime, anywhere, without the need for calls or manual scheduling."
            />


            {/* Third */}

            <FrameContent
                frame={frame}
                startFrame={200}
                position="bottom-left"
                eyebrow="Marketing & Growth Tools"
                title={
                    <>
                        QR Booking Link
                        <br />

                        <span className="text-cyan-400">
                            Mobile Application
                        </span>
                    </>
                }
                description="Build stronger customer relationships and drive repeat business with powerful tools designed to increase engagement, loyalty, and bookings."
            />


            {/* Fourth */}

            <FrameContent
                frame={frame}
                startFrame={300}
                holdFrames={100}
                position="middle-left"
                eyebrow=""
                title=""
                description={
                    <div className="mt-8 space-y-3">

                        {marketingSteps.map((item, index) => {

                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{
                                        opacity: 0,
                                        x: -120,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.22,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    className="group relative flex w-[480px] shrink-0 items-center gap-4 overflow-hidden rounded-2xl border border-cyan-300/30 bg-gradient-to-br from-cyan-400/[0.12] via-white/[0.07] to-cyan-950/[0.15] px-5 py-4 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.35),0_0_25px_rgba(34,211,238,0.12),inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(34,211,238,0.15)]"
                                >

                                    {/* Outer glow */}

                                    <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-300/30 via-cyan-400/5 to-cyan-300/20 opacity-70 blur-sm" />

                                    {/* Top reflection */}

                                    <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />

                                    {/* Inner glow */}

                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-400/[0.08] via-transparent to-cyan-300/[0.04]" />

                                    {/* Icon */}

                                    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-200/20 bg-gradient-to-br from-cyan-300/[0.18] to-cyan-500/[0.05] shadow-[0_0_20px_rgba(34,211,238,0.18),inset_0_1px_0_rgba(255,255,255,0.2)]">

                                        <Icon
                                            size={19}
                                            strokeWidth={1.8}
                                            className="text-cyan-200 drop-shadow-[0_0_8px_rgba(103,232,249,0.8)]"
                                        />

                                    </div>

                                    {/* Content */}

                                    <div className="relative min-w-0">

                                        <div className="flex items-center gap-2">

                                            <span className="text-sm font-semibold tracking-wide text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]">
                                                {item.title}
                                            </span>

                                            <span className="text-xs text-cyan-300/50">
                                                •
                                            </span>

                                            <span className="text-xs text-cyan-100/60">
                                                {item.label}
                                            </span>

                                        </div>

                                        <p className="mt-1 text-xs leading-5 text-white/55">
                                            {item.desc}
                                        </p>

                                        <div className="mt-2 flex items-center gap-2">

                                            {item.points.map((point) => (

                                                <span
                                                    key={point}
                                                    className="rounded-full border border-cyan-300/15 bg-cyan-400/[0.06] px-2.5 py-1 text-[10px] font-medium text-cyan-100/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                                                >
                                                    {point}
                                                </span>

                                            ))}

                                        </div>

                                    </div>

                                    {/* Bottom reflection */}

                                    <div className="pointer-events-none absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

                                    {/* Corner glow */}

                                    <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl" />

                                </motion.div>
                            );

                        })}

                    </div>
                }
            />


            {/* Scroll Indicator */}

            {frame < 70 && (

                <motion.div
                    className="pointer-events-none fixed inset-0 z-40"
                    animate={{
                        opacity: Math.max(
                            0,
                            1 - frame / 45
                        ),
                    }}
                    transition={{
                        duration: 0.15,
                        ease: "linear",
                    }}
                >

                    {/* Black cinematic overlay */}

                    <div className="absolute inset-0 bg-black/55" />

                    {/* Right-side content */}

                    <div className="relative flex h-full items-center justify-end">

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 60,
                            }}
                            animate={{
                                opacity: Math.max(
                                    0,
                                    1 - frame / 35
                                ),
                                x: Math.min(
                                    60,
                                    frame * 1.5
                                ),
                            }}
                            transition={{
                                duration: 0.2,
                                ease: "easeOut",
                            }}
                            className="flex w-[60%] flex-col items-start px-8 text-left md:px-14 lg:px-20 xl:px-24"
                        >

                            <h1 className="max-w-4xl text-4xl font-medium leading-[0.92] tracking-[-0.05em] text-white">
                                Scroll to explore the software
                            </h1>

                            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/60">
                                Powerful appointment management designed to keep your
                                business organized, your customers connected, and your
                                day running effortlessly.
                            </p>

                        </motion.div>

                    </div>

                    {/* Bottom-center scroll indicator */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: Math.max(
                                0,
                                1 - frame / 30
                            ),
                            y: frame === 1 ? 0 : 20,
                        }}
                        transition={{
                            duration: 0.25,
                            ease: "easeOut",
                        }}
                        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center"
                    >

                        <div className="flex items-center gap-4">

                            {/* Mouse */}

                            <div className="relative flex h-11 w-7 items-start justify-center overflow-hidden rounded-full border border-white/30 bg-white/5 p-1.5 shadow-[0_0_30px_rgba(255,255,255,0.08)]">

                                <motion.div
                                    animate={{
                                        y: [0, 19, 0],
                                        opacity: [1, 0.25, 1],
                                    }}
                                    transition={{
                                        duration: 1.8,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,1)]"
                                />

                            </div>

                            {/* Text */}

                            <div className="text-left">

                                <div className="text-xs font-semibold uppercase tracking-[0.45em] text-white/85">
                                    Scroll to explore
                                </div>

                                <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-cyan-400/60">
                                    Discover iSchedule
                                </div>

                            </div>

                        </div>

                        {/* Bottom line */}

                        <motion.div
                            animate={{
                                scaleX: [0.3, 1, 0.3],
                                opacity: [0.2, 0.6, 0.2],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="mt-5 h-px w-20 origin-center bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                        />

                    </motion.div>

                </motion.div>

            )}

        </>
    );
}