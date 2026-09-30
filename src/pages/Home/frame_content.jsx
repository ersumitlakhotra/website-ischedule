import { motion } from "framer-motion";

export function FrameContent({
    frame,
    startFrame,
    inFrames = 10,
    holdFrames = 50,
    outFrames = 10,

    eyebrow,
    title,
    description,

    position = "center",
}) {
    const enterEnd = startFrame + inFrames;
    const holdEnd = enterEnd + holdFrames;
    const exitEnd = holdEnd + outFrames;

    const positions = {
        "top-left": {
            container: "items-start justify-start text-left",
            initial: { x: -100, y: -70 },
        },

        "top-center": {
            container: "items-start justify-center text-center",
            initial: { x: 0, y: -100 },
        },

        "top-right": {
            container: "items-start justify-end text-right",
            initial: { x: 100, y: -70 },
        },

        "middle-left": {
            container: "items-center justify-start text-left",
            initial: { x: -120, y: 0 },
        },

        "center": {
            container: "items-center justify-center text-center",
            initial: { x: 0, y: 40, scale: 0.96 },
        },

        "middle-right": {
            container: "items-center justify-end text-right",
            initial: { x: 120, y: 0 },
        },

        "bottom-left": {
            container: "items-end justify-start text-left",
            initial: { x: -100, y: 70 },
        },

        "bottom-center": {
            container: "items-end justify-center text-center",
            initial: { x: 0, y: 100 },
        },

        "bottom-right": {
            container: "items-end justify-end text-right",
            initial: { x: 100, y: 70 },
        },
    };

    const config = positions[position] || positions.center;

    /*
        Before entering
    */
    if (frame < startFrame) {
        return null;
    }

    /*
        After exiting
    */
    if (frame > exitEnd) {
        return null;
    }

    /*
        ENTER
    */
    if (frame <= enterEnd) {
        const progress =
            (frame - startFrame) / inFrames;

        // Smooth ease-out
        const eased =
            1 - Math.pow(1 - progress, 3);

        return (
            <motion.div
                initial={false}
                animate={{
                    opacity: eased,
                    x: config.initial.x * (1 - eased),
                    y: config.initial.y * (1 - eased),
                    scale:
                        config.initial.scale
                            ? config.initial.scale +
                              (1 - config.initial.scale) * eased
                            : 1,
                }}
                transition={{
                    duration: 0.12,
                    ease: "linear",
                }}
                className={`
                    pointer-events-none
                    fixed inset-0
                    z-20
                    flex
                    px-6
                    py-16
                    ${config.container}
                `}
            >
                <Content
                    eyebrow={eyebrow}
                    title={title}
                    description={description}
                />
            </motion.div>
        );
    }

    /*
        HOLD
    */
    if (frame <= holdEnd) {
        return (
            <motion.div
                initial={false}
                animate={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                }}
                transition={{
                    duration: 0.15,
                    ease: "linear",
                }}
                className={`
                    pointer-events-none
                    fixed inset-0
                    z-20
                    flex
                    px-6
                    py-16
                    ${config.container}
                `}
            >
                <Content
                    eyebrow={eyebrow}
                    title={title}
                    description={description}
                />
            </motion.div>
        );
    }

    /*
        EXIT
    */
    const progress =
        (frame - holdEnd) / outFrames;

    // Smooth ease-in
    const eased = Math.pow(progress, 3);

    return (
        <motion.div
            initial={false}
            animate={{
                opacity: 1 - eased,
                x: config.initial.x * eased,
                y: config.initial.y * eased,
                scale:
                    config.initial.scale
                        ? 1 -
                          (1 - config.initial.scale) *
                              eased
                        : 1,
            }}
            transition={{
                duration: 0.12,
                ease: "linear",
            }}
            className={`
                pointer-events-none
                fixed inset-0
                z-20
                flex
                px-6
                py-16
                ${config.container}
            `}
        >
            <Content
                eyebrow={eyebrow}
                title={title}
                description={description}
            />
        </motion.div>
    );
}


/*
    Content
*/
function Content({
    eyebrow,
    title,
    description,
}) {
    return (
        <div className="max-w-4xl text-white">

            <p className="text-xs font-semibold uppercase tracking-[0.35em] ">
                {eyebrow}
            </p>

            <h2 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-tight ">
                {title}
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/60 md:text-lg">
                {description}
            </p>

        </div>
    );
}