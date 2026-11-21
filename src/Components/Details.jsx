import { motion } from 'framer-motion';
import PythonLogo from '../assets/icons/python.svg';
import JsLogo from '../assets/icons/javascript.svg';
import TsLogo from '../assets/icons/typescript.svg';
import TailwindCSS from '../assets/icons/tailwindcss.svg';
import ReactLogo from '../assets/icons/react.svg';
import GitLogo from '../assets/icons/git.svg';
import NodeJSLogo from '../assets/icons/nodedotjs.svg';
import ExpressLogo from '../assets/icons/express.svg';
import SupabaseLogo from '../assets/icons/supabase.svg';
import MongoDBLogo from '../assets/icons/mongodb.svg';

function SkillDetails() {
    const SharedStyles = "flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-300";

    const skills = [
        { img: PythonLogo, name: "Python", className: "w-10 h-10" },
        { img: TsLogo, name: "TypeScript", className: "w-10 h-10" },
        { img: JsLogo, name: "JavaScript", className: "w-10 h-10" },
        { img: ReactLogo, name: "React JS", className: "w-10 h-10" },
        { img: NodeJSLogo, name: "Node JS", className: "w-12 h-10 object-contain" },
        { img: ExpressLogo, name: "Express", className: "w-14 h-10 object-contain" },
        { img: TailwindCSS, name: "Tailwind CSS", className: "w-10 h-10" },
        { img: SupabaseLogo, name: "Supabase", className: "w-9 h-9" },
        { img: MongoDBLogo, name: "MongoDB", className: "w-9 h-9" },
        { img: GitLogo, name: "Git", className: "w-11 h-10 object-contain" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.03
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 8,
            scale: 0.98
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.25,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            className='w-full h-full grid grid-cols-2 gap-2 auto-rows-max'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {skills.map((skill, index) => (
                <motion.div
                    key={index}
                    className={`${SharedStyles} bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/30`}
                    variants={itemVariants}
                >
                    <motion.img
                        className={`${skill.className} transition-all duration-300`}
                        src={skill.img}
                        alt={skill.name}
                    />
                    <motion.h3
                        className="text-sm mt-2 text-gray-300"
                    >
                        {skill.name}
                    </motion.h3>
                </motion.div>
            ))}
        </motion.div>
    )
}

function EduDetails() {
    const journey = [
        {
            marker: "AI",
            markerClass: "bg-gradient-to-br from-fuchsia-500 to-purple-600",
            period: "Now",
            title: "AI Product Engineering",
            detail: "WanStudio, SocialAgent and Lightning Control — video generation, content automation and GPU workflows."
        },
        {
            marker: "FS",
            markerClass: "bg-gradient-to-br from-cyan-500 to-blue-600",
            period: "Ongoing",
            title: "Full-Stack Development",
            detail: "React, TypeScript, Node.js and Supabase — dashboards, APIs and production apps shipped on Vercel."
        },
        {
            marker: "GD",
            markerClass: "bg-gradient-to-br from-emerald-500 to-teal-600",
            period: "Ongoing",
            title: "Games & Interactive",
            detail: "Godot 4 and Three.js experiments, from Tiny Swords: Arena Survivor to 3D digital humans."
        },
    ];

    const timelineVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            x: -50
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            className='relative'
            variants={timelineVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Timeline line */}
            <motion.div
                className='absolute ml-10 h-full border border-cyan-400/50'
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
            ></motion.div>

            {/* Timeline dots */}
            <motion.div
                className='absolute size-4 bg-cyan-400 rounded-full ml-8.5 mt-8 shadow-[0_0_15px_rgba(34,211,238,0.8)]'
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            ></motion.div>
            <motion.div
                className='absolute size-4 bg-cyan-400 rounded-full ml-8.5 top-1/2 shadow-[0_0_15px_rgba(34,211,238,0.8)]'
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.95 }}
            ></motion.div>
            <motion.div
                className='absolute size-4 bg-cyan-400 rounded-full ml-8.5 bottom-8 shadow-[0_0_15px_rgba(34,211,238,0.8)]'
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
            ></motion.div>

            {/* Journey entries */}
            {journey.map((entry, index) => (
                <motion.div
                    key={entry.title}
                    variants={itemVariants}
                    className="relative"
                >
                    <motion.div
                        className={`absolute flex items-center justify-center size-14 rounded-full ml-3.5 mt-5 border-2 border-cyan-400/50 text-white font-semibold tracking-wide ${entry.markerClass}`}
                    >
                        {entry.marker}
                    </motion.div>
                    <motion.div
                        className={`ml-22 pt-5 ${index === journey.length - 1 ? 'pb-4' : ''} bg-gradient-to-r from-gray-800/30 to-transparent p-4 rounded-r-lg border-l-4 border-cyan-400/50 transition-colors duration-300`}
                    >
                        <p className='text-xs text-cyan-300'>{entry.period}</p>
                        <h3 className='text-xl text-white'>{entry.title}</h3>
                        <p className='text-xs text-gray-300'>{entry.detail}</p>
                    </motion.div>
                </motion.div>
            ))}
        </motion.div>
    )
}

export {SkillDetails, EduDetails}
