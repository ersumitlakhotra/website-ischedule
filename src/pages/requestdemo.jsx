import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Locate, Mail, Map, Phone, Sparkles } from "lucide-react";
import { apiEmailSend } from "../hook/apiCall.js";

export default function RequestDemo() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await sendEmail(form.name, form.phone, form.email, form.message);

        alert("We have received your request and a member of our team will follow up with you shortly.  🚀");

        setForm({
            name: "",
            phone: "",
            email: "",
            message: "",
        });
    };

    const sendEmail = async (name, cell, email, additionalmessage) => {
       

        let message = '<p>Name : ' + name + '</p>';
        message += '<p>Cell : ' + cell + '</p>';
        message += '<p>Email : ' + email + '</p>';
        message += '<p>Additional Message : ' + additionalmessage + '</p>';

        const res=await apiEmailSend(message);
        console.log(res)
    }

    return (
        <section id="Demo" className="relative bg-[#071720] text-white py-32 overflow-hidden">
            {/* Background Atmosphere */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-40 top-20 h-[650px] w-[650px] rounded-full bg-cyan-300/[0.045] blur-[180px]" />
                <div className="absolute -right-40 top-0 h-[700px] w-[700px] rounded-full bg-white/[0.065] blur-[190px]" />
                <div className="absolute bottom-[-250px] left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-300/[0.035] blur-[180px]" />

                <div className="absolute inset-0 bg-white/[0.008]" />

                <div className="absolute inset-0 opacity-[0.14]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)", backgroundSize: "34px 34px" }} />

                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#071720] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#071720] to-transparent" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-2 text-sm text-cyan-200 backdrop-blur-xl">
                            <Sparkles className="h-4 w-4" />
                            <span>Let's talk</span>
                        </div>

                        <h2 className="max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                            Let's build a better
                            <span className="block bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
                                way to schedule.
                            </span>
                        </h2>

                        <p className="mt-7 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
                            Tell us a little about your business and discover how iSchedule can simplify appointments, customers, staff, and everyday operations.
                        </p>

                        <div className="mt-10 space-y-5">
                            {[
                                "Submit the form",
                                "We'll contact you within 1 business day",
                                "Start using iSchedule immediately",
                            ].map((item, index) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="flex items-center gap-4"
                                >
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/[0.08]">
                                        <Check className="h-4 w-4 text-cyan-300" />
                                    </div>

                                    <span className="text-sm text-white/65 sm:text-base">
                                        {item}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Support Card */}
                        <div className="mt-12 rounded-3xl border border-white/[0.08] bg-white/[0.035] p-6 backdrop-blur-xl">
                            <div className="flex items-start justify-between gap-6">
                                <div>
                                    <p className="text-sm text-white/40">Need help?</p>
                                    <h3 className="mt-1 text-lg font-medium text-white">
                                        Customer Support
                                    </h3>
                                </div>

                                <div className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.8)]" />
                            </div>

                            <div className="mt-5 grid gap-4 sm:grid-cols-2">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.05]">
                                        <Phone className="h-4 w-4 text-cyan-300" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/30">Phone</p>
                                        <p className="text-sm text-white/70">+1 (905) 363-1515</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.05]">
                                        <Mail className="h-4 w-4 text-cyan-300" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/30">Email</p>
                                        <p className="text-sm text-white/70">admin@ischedule.ca</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" mt-5 flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.05]">
                                        <Map className="h-4 w-4 text-cyan-300" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/30">Address</p>
                                        <p className="text-sm text-white/70">Unit 1000, 10 Four Season PI, Etobicoke ON M9B 0A6 CA</p>
                                    </div>
                                </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 35, scale: 0.98 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="relative"
                    >
                        <div className="absolute -inset-6 rounded-[40px] bg-cyan-300/[0.025] blur-3xl" />

                        <div className="relative overflow-hidden rounded-[32px] border border-white/[0.09] bg-white/[0.045] p-7 shadow-2xl backdrop-blur-xl sm:p-9">
                            <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent" />
                            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-300/[0.06] blur-3xl" />

                            <div className="relative">
                                <div className="flex items-start justify-between gap-6">
                                    <div>
                                        <p className="text-sm font-medium text-cyan-200/70">
                                            Get started
                                        </p>

                                        <h3 className="mt-2 text-3xl font-semibold tracking-tight">
                                            Request a demo
                                        </h3>

                                        <p className="mt-3 max-w-md text-sm leading-6 text-white/40">
                                            Let's see what iSchedule can do for your business.
                                        </p>
                                    </div>

                                    <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.05] sm:flex">
                                        <ArrowUpRight className="h-5 w-5 text-cyan-300" />
                                    </div>
                                </div>

                                <form className="mt-9 space-y-5" onSubmit={handleSubmit}>
                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <div>
                                            <label className="mb-2 block text-sm text-white/55">
                                                Name
                                            </label>

                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your name"
                                                value={form.name}
                                                onChange={handleChange}

                                                required
                                                className="h-14 w-full rounded-2xl border border-white/[0.08] bg-white/[0.035] px-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-cyan-300/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-cyan-300/20"
                                            />
                                        </div>

                                        <div>
                                            <label className="mb-2 block text-sm text-white/55">
                                                Phone
                                            </label>

                                            <input
                                                type="tel"
                                                name="phone"
                                                value={form.phone}
                                                onChange={handleChange}
                                                placeholder="Your phone number"

                                                required
                                                className="h-14 w-full rounded-2xl border border-white/[0.08] bg-white/[0.035] px-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-cyan-300/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-cyan-300/20"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm text-white/55">
                                            Email
                                        </label>

                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}

                                            required
                                            placeholder="you@company.com"
                                            className="h-14 w-full rounded-2xl border border-white/[0.08] bg-white/[0.035] px-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-cyan-300/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-cyan-300/20"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm text-white/55">
                                            Message
                                        </label>

                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            rows={5}
                                            placeholder="Tell us a little about your business..."
                                            className="w-full resize-none rounded-2xl border border-white/[0.08] bg-white/[0.035] px-4 py-4 text-sm leading-6 text-white outline-none transition placeholder:text-white/25 focus:border-cyan-300/40 focus:bg-white/[0.05] focus:ring-1 focus:ring-cyan-300/20"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="group flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-cyan-200 px-6 text-sm font-semibold text-[#071720] transition duration-300 hover:bg-cyan-100 hover:shadow-[0_0_35px_rgba(103,232,249,0.18)]"
                                    >
                                        <span>Send Request</span>

                                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </button>

                                    <p className="text-center text-xs text-white/25">
                                        We'll never share your information with third parties.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
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
                    © 2026 iSchedule. All rights reserved.
                </p>

            </motion.div>
        </section>
    );
}