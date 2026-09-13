"use client";

import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
        >
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Contact form submitted:", formData);
    };

    return (
        <main className="min-h-screen w-full bg-black text-white">

            {/* =====================================================
                FULL WIDTH CONTACT SECTION
            ===================================================== */}

            <section className="grid min-h-screen w-full lg:grid-cols-2">

                {/* =================================================
                    LEFT — DARK BLACK / PURPLE GRADIENT
                ================================================= */}

                <div
                    className="
                        relative
                        flex
                        min-h-screen
                        flex-col
                        justify-between
                        overflow-hidden
                        px-6
                        pb-12
                        pt-20
                        sm:px-10
                        sm:pb-16
                        sm:pt-24
                        md:px-12
                        lg:px-16
                        lg:pb-16
                        lg:pt-36
                    "
                    style={{
                        background: `
                            radial-gradient(
                                circle at 70% 45%,
                                rgba(125, 55, 175, 0.45) 0%,
                                rgba(75, 28, 105, 0.28) 35%,
                                rgba(18, 9, 25, 0.88) 65%,
                                #030303 100%
                            )
                        `,
                    }}
                >
                    {/* Atmospheric purple glow elements */}

                    <div className="pointer-events-none absolute -right-32 top-[10%] h-[550px] w-[550px] rounded-full bg-purple-600/[0.12] blur-[140px]" />

                    <div className="pointer-events-none absolute left-[-10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-violet-600/[0.08] blur-[140px]" />

                    {/* =================================================
                        TOP CONTENT
                    ================================================= */}

                    <div className="relative z-10">
                        <div className="mb-4 flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-violet-300" />

                            <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
                                Nirvana / Contact
                            </p>
                        </div>

                        <p className="max-w-[380px] text-[13px] leading-6 text-white/40 sm:text-[14px]">
                            Have an idea, collaboration or something
                            exciting in mind?
                        </p>
                    </div>

                    {/* =================================================
                        MAIN HEADING
                    ================================================= */}

                    <div className="relative z-10 my-auto py-16 sm:py-20 lg:py-24">
                        <p className="mb-6 text-[11px] uppercase tracking-[0.22em] text-violet-300/60 sm:mb-8">
                            Let&apos;s create something
                        </p>

                        <h1
                            className="
                                text-[clamp(3.5rem,14vw,8rem)]
                                font-black
                                uppercase
                                leading-[0.78]
                                tracking-[-0.07em]
                                text-white
                                lg:text-[clamp(5rem,10vw,10rem)]
                            "
                        >
                            Let&apos;s
                            <br />
                            Talk.
                        </h1>
                    </div>

                    {/* =================================================
                        CONTACT INFORMATION
                    ================================================= */}

                    <div className="relative z-10">
                        <div className="mb-8 h-px w-full bg-white/[0.1] lg:mb-10" />

                        <div className="grid grid-cols-2 gap-6 sm:gap-10">
                            <div>
                                <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-white/25 sm:mb-3">
                                    Email
                                </p>

                                <p className="text-[13px] text-white/60 sm:text-[14px]">
                                    nirvana@igdtuw.ac.in
                                </p>
                            </div>

                            <div>
                                <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-white/25 sm:mb-3">
                                    Location
                                </p>

                                <p className="text-[13px] text-white/60 sm:text-[14px]">
                                    New Delhi, India
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* =================================================
                    RIGHT — CONTACT FORM
                ================================================= */}

                <div className="flex min-h-0 items-center bg-[#030303] px-6 pb-16 pt-12 sm:px-10 md:px-12 lg:min-h-screen lg:px-20 lg:pt-28 xl:px-24">
                    <div className="w-full max-w-[620px]">

                        {/* =================================================
                            FORM INTRO
                        ================================================= */}

                        <div className="mb-10 lg:mb-14">
                            <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-violet-400 sm:mb-5">
                                Get in touch
                            </p>

                            <h2 className="text-[clamp(2rem,6vw,4rem)] font-medium leading-[0.92] tracking-[-0.055em]">
                                Tell us what&apos;s
                                <br />
                                on your mind.
                            </h2>

                            <p className="mt-4 max-w-[470px] text-[13px] leading-6 text-white/35 sm:mt-6 sm:text-[14px]">
                                Whether it&apos;s a collaboration, an idea,
                                an event or just a hello — we&apos;d love
                                to hear from you.
                            </p>
                        </div>

                        {/* =================================================
                            FORM
                        ================================================= */}

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6 sm:space-y-8"
                        >

                            {/* NAME + EMAIL */}

                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7">

                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-2.5 block text-[10px] uppercase tracking-[0.18em] text-white/40 sm:mb-3"
                                    >
                                        Name
                                    </label>

                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        required
                                        className="
                                            h-12
                                            w-full
                                            rounded-[5px]
                                            border
                                            border-white/[0.1]
                                            bg-white/[0.035]
                                            px-4
                                            text-[14px]
                                            text-white
                                            outline-none
                                            placeholder:text-white/20
                                            transition-all
                                            duration-300
                                            focus:border-violet-400/50
                                            focus:bg-white/[0.05]
                                            sm:h-14
                                            sm:px-5
                                        "
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2.5 block text-[10px] uppercase tracking-[0.18em] text-white/40 sm:mb-3"
                                    >
                                        Email
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        required
                                        className="
                                            h-12
                                            w-full
                                            rounded-[5px]
                                            border
                                            border-white/[0.1]
                                            bg-white/[0.035]
                                            px-4
                                            text-[14px]
                                            text-white
                                            outline-none
                                            placeholder:text-white/20
                                            transition-all
                                            duration-300
                                            focus:border-violet-400/50
                                            focus:bg-white/[0.05]
                                            sm:h-14
                                            sm:px-5
                                        "
                                    />
                                </div>

                            </div>

                            {/* SUBJECT */}

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="mb-2.5 block text-[10px] uppercase tracking-[0.18em] text-white/40 sm:mb-3"
                                >
                                    Subject
                                </label>

                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="What would you like to talk about?"
                                    required
                                    className="
                                        h-12
                                        w-full
                                        rounded-[5px]
                                        border
                                        border-white/[0.1]
                                        bg-white/[0.035]
                                        px-4
                                        text-[14px]
                                        text-white
                                        outline-none
                                        placeholder:text-white/20
                                        transition-all
                                        duration-300
                                        focus:border-violet-400/50
                                        focus:bg-white/[0.05]
                                        sm:h-14
                                        sm:px-5
                                    "
                                />
                            </div>

                            {/* MESSAGE */}

                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2.5 block text-[10px] uppercase tracking-[0.18em] text-white/40 sm:mb-3"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us a little more..."
                                    required
                                    rows={6}
                                    className="
                                        min-h-[150px]
                                        w-full
                                        resize-none
                                        rounded-[5px]
                                        border
                                        border-white/[0.1]
                                        bg-white/[0.035]
                                        px-4
                                        py-3.5
                                        text-[14px]
                                        leading-6
                                        text-white
                                        outline-none
                                        placeholder:text-white/20
                                        transition-all
                                        duration-300
                                        focus:border-violet-400/50
                                        focus:bg-white/[0.05]
                                        sm:min-h-[170px]
                                        sm:px-5
                                        sm:py-4
                                    "
                                />
                            </div>

                            {/* SUBMIT */}

                            <button
                                type="submit"
                                className="
                                    group
                                    flex
                                    h-12
                                    w-full
                                    cursor-pointer
                                    items-center
                                    justify-center
                                    gap-4
                                    rounded-[5px]
                                    bg-white
                                    text-[11px]
                                    font-medium
                                    uppercase
                                    tracking-[0.18em]
                                    text-black
                                    transition-all
                                    duration-300
                                    hover:bg-violet-300
                                    sm:h-14
                                "
                            >
                                <span>Send Message</span>

                                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </button>

                        </form>

                        {/* =================================================
                            FOOTER NOTE
                        ================================================= */}

                        <div className="mt-8 flex items-center justify-between sm:mt-10">
                            <p className="text-[10px] text-white/20">
                                We usually respond within 24–48 hours.
                            </p>

                            <p className="text-[10px] uppercase tracking-[0.16em] text-white/15">
                                Nirvana / 2026
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}