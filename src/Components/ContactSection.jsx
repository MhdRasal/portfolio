import { motion } from 'framer-motion';

const ContactSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const socialPlatforms = [
        {
            name: 'LinkedIn',
            subtitle: 'Connect with me professionally',
            url: 'https://www.linkedin.com/in/muhammed-rasal-67624b298',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            ),
            color: 'text-blue-400 hover:text-blue-300',
            bgColor: 'bg-blue-900/30 hover:bg-blue-800/40'
        },
        {
            name: 'GitHub',
            subtitle: 'Explore my open-source work',
            url: 'https://github.com/MhdRasal',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
            ),
            color: 'text-gray-300 hover:text-white',
            bgColor: 'bg-gray-800/30 hover:bg-gray-700/40'
        },
        {
            name: 'Loom Demo',
            subtitle: 'Watch SocialAgent in action',
            url: 'https://www.loom.com/share/2a28b321cc164d3a8041e712d249f3a1',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 8.25 16 12l-6 3.75z" />
                </svg>
            ),
            color: 'text-purple-400 hover:text-purple-300',
            bgColor: 'bg-purple-900/30 hover:bg-purple-800/40'
        },
        {
            name: 'Tiny Swords',
            subtitle: 'Play my first game',
            url: 'https://tinyswordsweb.vercel.app',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 11h4M8 9v4m7-1h.01M18 10h.01" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
                </svg>
            ),
            color: 'text-emerald-400 hover:text-emerald-300',
            bgColor: 'bg-emerald-900/30 hover:bg-emerald-800/40'
        },
    ];

    return (
        <section className="py-20 px-6">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
                <p className="text-gray-400 text-lg">Connect with me or explore what I've built</p>
            </motion.div>

            <motion.div
                className="max-w-4xl mx-auto grid grid-cols-1"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Social Media Links */}
                <motion.div variants={itemVariants} className="space-y-6">
                    <h3 className="text-2xl font-semibold text-white mb-6">Find Me Online</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {socialPlatforms.map((platform) => (
                            <a
                                key={platform.name}
                                href={platform.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${platform.bgColor} flex items-center space-x-4 p-4 rounded-lg border border-gray-700/30 hover:border-cyan-400/50 transition-all duration-300`}
                            >
                                <div className={`${platform.bgColor} w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300`}>
                                    <div className={`${platform.color} transition-colors duration-300`}>
                                        {platform.icon}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-white font-medium transition-colors duration-300 hover:text-cyan-300">
                                        {platform.name}
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        {platform.subtitle}
                                    </p>
                                </div>
                                <div className="ml-auto">
                                    <svg
                                        className="w-5 h-5 text-gray-400 transition-colors duration-300 hover:text-cyan-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <motion.div
                        className="mt-8 p-6 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-lg border border-cyan-400/30"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <h4 className="text-xl font-semibold text-white mb-2">Let's Collaborate!</h4>
                        <p className="text-gray-400 mb-4">
                            I'm always open to discussing AI products, automations, or interesting builds. Reach out on LinkedIn or GitHub.
                        </p>
                        <motion.div
                            className="flex flex-wrap gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1 }}
                        >
                            {['AI Products', 'Full-Stack Apps', 'Automation & Agents'].map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-cyan-900/30 text-cyan-300 text-sm rounded-full border border-cyan-400/30"
                                >
                                    {tag}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ContactSection;
