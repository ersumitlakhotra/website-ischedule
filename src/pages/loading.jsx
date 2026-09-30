import { motion } from "framer-motion";

export default function Loading({ progress }) {
    return (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#061a24] text-white">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />

            <div className="relative w-[320px]">

                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <div className="text-3xl font-bold tracking-tight">
                        i<span className="text-cyan-400">Schedule</span>
                    </div>

                    <p className="mt-2 text-[10px] uppercase tracking-[0.35em] text-white/30">
                        Your time. Perfectly scheduled.
                    </p>
                </motion.div>

                {/* Percentage */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-16 text-center"
                >
                    <div className="text-7xl font-semibold tracking-tight">
                        {progress}
                        <span className="text-cyan-400">%</span>
                    </div>

                    <motion.p
                        key={progress}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-3 text-xs text-white/40"
                    >
                        {progress < 100
                            ? "Preparing your experience"
                            : "Experience ready"}
                    </motion.p>
                </motion.div>

                {/* Progress */}
                <div className="mt-8 h-[2px] overflow-hidden rounded-full bg-white/10">
                    <motion.div
                        className="h-full origin-left rounded-full bg-cyan-400"
                        animate={{ width: `${progress}%` }}
                        transition={{
                            duration: 0.25,
                            ease: "easeOut",
                        }}
                    />
                </div>

                {/* Loading status */}
                <div className="mt-3 flex items-center justify-between text-[9px] uppercase tracking-[0.2em] text-white/20">
                    <span>
                        {progress < 100
                            ? "Loading experience"
                            : "Ready"}
                    </span>

                    <span>
                        {progress} / 100
                    </span>
                </div>

                {/* Bottom animated line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="mx-auto mt-10 h-px w-24 origin-left bg-cyan-400/40"
                />
            </div>
        </div>
    );
}