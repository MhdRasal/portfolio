import { motion } from 'framer-motion';
import { useState } from 'react';
import SocialAgentImg from '../assets/projects/socialagent.jpg';
import NikahImg from '../assets/projects/nikah.jpg';
import TinySwordsImg from '../assets/projects/tinyswords.jpg';

const ProjectsSection = () => {
    const [playingVideo, setPlayingVideo] = useState(null);

    const projects = [
        {
            id: 1,
            title: "SocialAgent",
            description: "An AI content workforce that plans, generates and publishes short-form video across YouTube, Facebook and Instagram.",
            tech: ["React", "Node.js", "Express", "MongoDB", "AI Agents", "Media APIs"],
            github: null,
            live: null,
            demo: "https://www.loom.com/share/2a28b321cc164d3a8041e712d249f3a1",
            gradient: "from-blue-500 to-purple-500",
            status: "AI Product",
            image: SocialAgentImg,
            video: null
        },
        {
            id: 2,
            title: "WanStudio",
            description: "Full-stack AI video generation studio with Kaggle and Modal GPU backends, credits, job history and cloud storage.",
            tech: ["React", "TypeScript", "Express", "Kaggle", "Modal", "Cloud Storage"],
            github: null,
            live: null,
            gradient: "from-violet-500 to-fuchsia-500",
            status: "Private",
            image: null,
            video: null
        },
        {
            id: 3,
            title: "Wan2GP Finetune",
            description: "A custom WanGP build for finetunes, checkpoints and low-VRAM video, image, audio and 3D generation.",
            tech: ["Python", "WanGP", "LoRA", "Text-to-Video", "Low VRAM"],
            github: "https://github.com/MhdRasal/Wan2GP-finetune",
            live: null,
            gradient: "from-emerald-500 to-cyan-500",
            status: "Open Source",
            image: null,
            video: null
        },
        {
            id: 4,
            title: "Lightning Control",
            description: "Operations console for WanGP and Kaggle video generation — account pools, templates, job control and live logs.",
            tech: ["React", "TypeScript", "Express", "MongoDB", "Kaggle"],
            github: null,
            live: null,
            gradient: "from-amber-500 to-orange-500",
            status: "Private",
            image: null,
            video: null
        },
        {
            id: 5,
            title: "Nikah Invitation",
            description: "A digital nikah invitation with animated UI, RSVP flow, admin dashboard and a Supabase backend.",
            tech: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
            github: null,
            live: "https://nikah-invitation-kunjimol.vercel.app",
            gradient: "from-rose-500 to-pink-500",
            status: "Live",
            image: NikahImg,
            video: null
        },
        {
            id: 6,
            title: "Tiny Swords",
            description: "My first game — a wave-survival arena built with Godot 4 and shipped for web and Android.",
            tech: ["Godot 4", "GDScript", "WebAssembly", "Android"],
            github: "https://github.com/MhdRasal/TinySwordsWeb",
            live: "https://tinyswordsweb.vercel.app",
            gradient: "from-teal-500 to-green-500",
            status: "Live",
            image: TinySwordsImg,
            video: null
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15 // Reduced from 0.2 for better performance
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 30, // Reduced from 50
            rotateX: -10 // Reduced from -15
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration: 0.5, // Reduced from 0.6
                ease: "easeOut"
            }
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Featured': return 'bg-gradient-to-r from-yellow-500 to-orange-500';
            case 'In Progress': return 'bg-gradient-to-r from-blue-500 to-cyan-500';
            case 'Beta': return 'bg-gradient-to-r from-purple-500 to-pink-500';
            case 'Completed': return 'bg-gradient-to-r from-green-500 to-emerald-500';
            case 'AI Product': return 'bg-gradient-to-r from-purple-500 to-pink-500';
            case 'Open Source': return 'bg-gradient-to-r from-emerald-500 to-teal-500';
            case 'Live': return 'bg-gradient-to-r from-green-500 to-emerald-500';
            case 'Private': return 'bg-gradient-to-r from-slate-600 to-gray-600';
            default: return 'bg-gray-500';
        }
    };

    const handleVideoPlay = (projectId) => {
        setPlayingVideo(playingVideo === projectId ? null : projectId);
    };

    const MediaContent = ({ project }) => {
        const hasVideo = project.video;
        const hasImage = project.image;
        const isVideoPlaying = playingVideo === project.id;

        if (hasVideo && isVideoPlaying) {
            return (
                <div className="relative w-full h-40 bg-black rounded-lg overflow-hidden">
                    <video
                        className="w-full h-full object-cover"
                        controls
                        autoPlay
                        muted
                        onEnded={() => setPlayingVideo(null)}
                    >
                        <source src={project.video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <button
                        onClick={() => setPlayingVideo(null)}
                        className="absolute top-2 right-2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            );
        }

        if (hasImage) {
            return (
                <div className="relative w-full h-40 rounded-lg overflow-hidden group">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300"
                        onError={(e) => {
                            // Fallback to gradient if image fails to load
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                        }}
                    />
                    {/* Fallback gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 items-center justify-center hidden`}>
                        <div className="text-white text-2xl font-bold tracking-wider">
                            {project.title.split(' ')[0]}
                        </div>
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 transition-colors duration-300"></div>

                    {/* Video play button if video exists */}
                    {hasVideo && (
                        <motion.button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleVideoPlay(project.id);
                            }}
                            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors duration-300"
                        >
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/30">
                                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z"/>
                                </svg>
                            </div>
                        </motion.button>
                    )}

                    {/* Media indicators */}
                    <div className="absolute bottom-2 left-2 flex gap-1">
                        <div className="px-2 py-1 bg-black/50 rounded text-white text-xs flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                <circle cx="8.5" cy="8.5" r="1.5"/>
                                <polyline points="21,15 16,10 5,21"/>
                            </svg>
                            Image
                        </div>
                        {hasVideo && (
                            <div className="px-2 py-1 bg-black/50 rounded text-white text-xs flex items-center gap-1">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <polygon points="23 7 16 12 23 17 23 7"/>
                                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                                </svg>
                                Video
                            </div>
                        )}
                    </div>
                </div>
            );
        }

        // Fallback to original gradient design
        return (
            <div className={`w-full h-40 bg-gradient-to-br ${project.gradient} rounded-lg opacity-80 transition-opacity duration-300 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="w-full h-full flex items-center justify-center relative z-10">
                    <div
                        className="text-white text-2xl font-bold tracking-wider"
                    >
                        {project.title.split(' ')[0]}
                    </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute bottom-2 right-2 w-16 h-16 border-2 border-white/20 rounded-full"></div>
                <div className="absolute top-2 left-2 w-8 h-8 border-2 border-white/20 rounded-full"></div>
            </div>
        );
    };

    return (
        <section className="py-20 px-6">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
                <p className="text-gray-400 text-lg">AI products, apps and experiments I've shipped</p>
                <motion.div
                    className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                />
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        variants={cardVariants}
                        className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/30 rounded-xl p-6 transition-all duration-300 group cursor-pointer relative overflow-hidden"
                    >
                        {/* Status Badge */}
                        <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(project.status)} z-10`}>
                            {project.status}
                        </div>

                        {/* Project Media */}
                        <div className="mb-4">
                            <MediaContent project={project} />
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white transition-colors duration-300">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-cyan-900/30 text-cyan-300 text-xs rounded-full border border-cyan-400/30"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 pt-2">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                                        </svg>
                                        <span>Code</span>
                                    </a>
                                )}

                                {project.live && project.live !== '#' && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        <span>Live Demo</span>
                                    </a>
                                )}

                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <circle cx="12" cy="12" r="9" />
                                            <path d="M10 8.25 16 12l-6 3.75z" />
                                        </svg>
                                        <span>Watch Demo</span>
                                    </a>
                                )}

                                {!project.github && !project.live && !project.demo && (
                                    <span className="flex items-center gap-2 text-gray-500 text-sm">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <rect x="4" y="10" width="16" height="10" rx="2" />
                                            <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                                        </svg>
                                        <span>Private build</span>
                                    </span>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* GitHub Profile Link */}
            <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
            >
                <a
                    href="https://github.com/MhdRasal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white rounded-lg border border-gray-600 transition-all duration-300"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span>View More Projects on GitHub</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            </motion.div>
        </section>
    );
};

export default ProjectsSection;
