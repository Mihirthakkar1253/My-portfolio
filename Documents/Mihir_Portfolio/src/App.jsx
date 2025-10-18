import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter, Mail, ExternalLink, Send } from 'lucide-react';
// All Firebase imports have been removed as requested.

// --- PERSONALIZED DATA ---
const developerInfo = {
    name: "Mihir Thakkar",
    title: "Software Engineer",
    bio: "I am a dedicated Software Engineer with hands-on experience in the MERN stack. I specialize in developing and maintaining full-stack web applications using React.js and Node.js. My focus is on building responsive, scalable UI components and optimizing application performance to enhance the user experience. I thrive in collaborative, agile environments and enjoy tackling new challenges in web development.",
    contact: {
        email: "mihirthakkar1253@gmail.com", // Your target email address
        github: "https://github.com/Mihirthakkar1253",
        linkedin: "https://www.linkedin.com/in/mihir-thakkar-730308210/",
        twitter: "#", // Placeholder, update if you have one
    },
    skills: ["React.js", "Node.js", "JavaScript", "Redux", "PostgreSQL", "Firebase", "AWS", "Prisma ORM"]
};

const experiences = [
    {
        company: "Tata Consultancy Services",
        title: "Assistant System Engineer",
        date: "Sep 2024 - Present",
        description: [
            "Developing and maintaining a pharma client website using React.js, Node.js, and AWS.",
            "Building and optimizing scalable frontend components to enhance user experience and performance.",
            "Implementing RESTful APIs and integrating third-party services for seamless functionality.",
            "Collaborating with cross-functional teams to deliver high-quality, production-ready features."
        ]
    },
    {
        company: "FXIS.AI",
        title: "Full Stack Intern",
        date: "June 2024 - Sep 2024",
        description: [
            "Developed and maintained full-stack web applications using React.js and Node.js.",
            "Built responsive UI components and improved user experience through optimized design.",
            "Created a chatbot for a live project using Material UI and Tailwind CSS with a ReactJS frontend.",
            "Explored Django and Django Rest Framework (DRF) to strengthen backend development skills."
        ]
    },
    {
        company: "Inara Consultancy",
        title: "Intern, Software Engineer",
        date: "Jan 2024 - May 2024",
        description: [
            "Developed web applications using the MERN (MongoDB, Express.js, React.js, Node.js) stack.",
            "Assisted in the design and implementation of front-end and back-end components.",
            "Gained hands-on experience in full-stack development practices and methodologies.",
        ]
    }
];

const projects = [
    {
        title: "FoodHub",
        description: "A food ordering web application that fetches real-time restaurant data using the Swiggy API. Implemented state management with Redux and designed a responsive UI with CSS for a seamless cross-device experience.",
        tags: ["ReactJS", "Redux", "CSS", "Firebase", "Swiggy API"],
        liveUrl: "#", // Add live URL if available
        repoUrl: "https://github.com/Mihirthakkar1253/Foodhub",
    },
    {
        title: "Sparxio - Web Parking Solution",
        description: "A parking management system with React components for managing parking floors. The backend uses Node.js, PostgreSQL, and Prisma for CRUD operations, with Firebase for notifications and Stripe for payments.",
        tags: ["ReactJS", "Node.js", "PostgreSQL", "Prisma-ORM", "Firebase", "Stripe"],
        liveUrl: "#", // Add live URL if available
        repoUrl: "#", // Add repo URL if available
    },
     {
        title: "Real-time Chat Application",
        description: "Developed a real-time chat application using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.io. Features include user authentication, private messaging, and online status indicators.",
        tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io"],
        liveUrl: "#", // Add live URL if available
        repoUrl: "https://github.com/Mihirthakkar1253/Chat-app",
    },
];

// --- COMPONENTS ---

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navLinks = ["About", "Experience", "Projects", "Contact"];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" onClick={() => scrollToSection('home')} className="text-2xl font-bold text-teal-400 hover:text-teal-300 transition-colors">
                    {developerInfo.name.split(' ').map(n => n[0]).join('')}
                </a>
                <div className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <a key={link} href={`#${link.toLowerCase()}`} onClick={() => scrollToSection(link)} className="text-slate-300 hover:text-teal-400 transition-colors">
                            {link}
                        </a>
                    ))}
                    {/* Link this to your actual resume file */}
                    <a href="/Mihir_Thakkar_latest_resume.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-teal-400 text-teal-400 rounded-md hover:bg-teal-400 hover:text-slate-900 transition-all duration-300">
                        Resume
                    </a>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 focus:outline-none">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-900/95">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                        {navLinks.map((link) => (
                            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => scrollToSection(link)} className="text-slate-300 hover:text-teal-400 block px-3 py-2 rounded-md text-base font-medium">
                                {link}
                            </a>
                        ))}
                         {/* Link this to your actual resume file */}
                        <a href="/Mihir_Thakkar_latest_resume.pdf" target="_blank" rel="noopener noreferrer" className="mt-2 px-4 py-2 border border-teal-400 text-teal-400 rounded-md hover:bg-teal-400 hover:text-slate-900 transition-all duration-300">
                            Resume
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}

function Hero() {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="container mx-auto px-6 py-32 md:py-48 flex flex-col items-start justify-center min-h-screen">
            <h1 className="text-teal-400 font-mono text-lg mb-4">Hi, my name is</h1>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-slate-100">{developerInfo.name}.</h2>
            <h3 className="text-4xl sm:text-6xl md:text-7xl font-bold text-slate-400 mt-2">I build things for the web.</h3>
            <p className="mt-6 max-w-xl text-slate-400 text-lg">
                I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on developing high-quality, production-ready web applications.
            </p>
            <button onClick={scrollToContact} className="mt-8 px-8 py-4 border border-teal-400 text-teal-400 rounded-md hover:bg-teal-400/10 transition-all duration-300 text-lg font-mono">
                Get In Touch
            </button>
        </section>
    );
}

function About() {
    return (
        <section id="about" className="container mx-auto px-6 py-24">
            <h2 className="text-3xl font-bold text-slate-200 mb-8 flex items-center">
                <span className="text-teal-400 font-mono mr-2 text-2xl">01.</span> About Me
                <span className="ml-4 h-px w-24 bg-slate-600"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
                <div className="md:col-span-3 text-slate-400 space-y-4 text-lg">
                    <p>{developerInfo.bio}</p>
                    <p>Here are a few technologies I've been working with recently:</p>
                    <ul className="grid grid-cols-2 gap-2 font-mono text-slate-300">
                        {developerInfo.skills.map((skill, i) => (
                            <li key={i} className="flex items-center">
                                <span className="text-teal-400 mr-2">▹</span>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="md:col-span-2 flex justify-center items-start">
                    <div className="w-64 h-64 rounded-lg bg-teal-400 relative group">
                         <img 
                            src={`https://placehold.co/400x400/1e293b/99f6e4?text=${developerInfo.name.split(' ').map(n=>n[0]).join('')}`}
                            alt={developerInfo.name}
                            className="w-full h-full rounded-lg object-cover absolute transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2"
                        />
                        <div className="w-full h-full rounded-lg border-2 border-teal-400 absolute top-0 left-0 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Experience() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="experience" className="container mx-auto px-6 py-24">
            <h2 className="text-3xl font-bold text-slate-200 mb-8 flex items-center">
                <span className="text-teal-400 font-mono mr-2 text-2xl">02.</span> Where I've Worked
                <span className="ml-4 h-px w-24 bg-slate-600"></span>
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible">
                    {experiences.map((exp, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`px-4 py-3 text-left whitespace-nowrap font-mono text-sm border-b-2 md:border-b-0 md:border-l-2 transition-all duration-300 ${
                                activeTab === index
                                    ? 'border-teal-400 text-teal-400 bg-slate-800'
                                    : 'border-slate-700 text-slate-400 hover:bg-slate-800/50 hover:text-teal-400'
                            }`}
                        >
                            {exp.company}
                        </button>
                    ))}
                </div>
                <div className="md:w-3/4">
                    <div className="p-1">
                        <h3 className="text-xl font-bold text-slate-200">{experiences[activeTab].title} @ <span className="text-teal-400">{experiences[activeTab].company}</span></h3>
                        <p className="font-mono text-sm text-slate-500 mt-1 mb-4">{experiences[activeTab].date}</p>
                        <ul className="space-y-3 text-slate-400">
                            {experiences[activeTab].description.map((item, i) => (
                                <li key={i} className="flex">
                                    <span className="text-teal-400 mr-3 mt-1 flex-shrink-0">▹</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project }) {
    return (
        <div className="bg-slate-800 rounded-md shadow-lg p-6 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
            <div>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-slate-200">{project.title}</h3>
                    <div className="flex space-x-3">
                        {project.repoUrl && project.repoUrl !== "#" && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors"><Github /></a>}
                        {project.liveUrl && project.liveUrl !== "#" && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors"><ExternalLink /></a>}
                    </div>
                </div>
                <p className="text-slate-400 mb-4">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 font-mono text-sm text-teal-400 mt-4">
                {project.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                ))}
            </div>
        </div>
    );
}


function Projects() {
    return (
        <section id="projects" className="container mx-auto px-6 py-24">
            <h2 className="text-3xl font-bold text-slate-200 mb-8 flex items-center">
                <span className="text-teal-400 font-mono mr-2 text-2xl">03.</span> Some Things I've Built
                 <span className="ml-4 h-px w-24 bg-slate-600"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
}


function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, sending, sent, error

    // Form input handler
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    // Mailto submission handler (no backend)
    const handleSubmit = (e) => {
        e.preventDefault();
        
        setStatus('sending');

        // Construct the mailto link
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(`Email: ${formData.email}\n\nMessage:\n${formData.message}`);
        
        const mailtoLink = `mailto:${developerInfo.contact.email}?subject=${subject}&body=${body}`;

        // Attempt to open the user's mail client
        try {
            // Note: window.open is used to prevent the main page from navigating away
            const newWindow = window.open(mailtoLink, '_self'); 
            
            // Give a brief moment for the mail client to open before showing the message
            setTimeout(() => {
                // If the user's mail client opens, the form technically "succeeded" in its function
                if (newWindow && newWindow.closed) {
                     // This indicates the browser prevented opening the mail client, which happens in some sandboxed environments or if the user cancels.
                    setStatus('error');
                    console.error("Mail client failed to open. Submission failed.");
                } else {
                    setStatus('sent');
                    setFormData({ name: '', email: '', message: '' }); // Clear form immediately
                }
            }, 500);
            
        } catch (error) {
            console.error("Mailto link failed:", error);
            setStatus('error');
        }
    };
    
    // Status message renderer
    const renderStatusMessage = () => {
        if (status === 'sending') {
            return <p className="text-teal-400 mt-4 flex items-center justify-center font-mono text-sm">Preparing email draft...</p>;
        }
        if (status === 'sent') {
            return <p className="text-green-400 mt-4 font-mono text-sm">Email draft created! Please check your local email client to send it.</p>;
        }
        if (status === 'error') {
            return <p className="text-red-400 mt-4 font-mono text-sm">Failed to open mail client. Please send an email directly to <a href={`mailto:${developerInfo.contact.email}`} className='underline text-red-300'>{developerInfo.contact.email}</a>.</p>;
        }
        return null;
    };

    return (
        <section id="contact" className="container mx-auto px-6 py-24 text-center">
             <h2 className="text-3xl font-bold text-slate-200 mb-4 flex items-center justify-center">
                <span className="text-teal-400 font-mono mr-2 text-2xl">04.</span> What's Next?
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Get In Touch</h3>
            <p className="max-w-2xl mx-auto text-slate-400 mb-8">
                I'm currently open to new opportunities and my inbox is always open. Filling out this form will prepare a draft in your email client, which you will need to manually send.
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-8 bg-slate-800 rounded-lg shadow-2xl space-y-4 text-left">
                {/* Name Field */}
                <div>
                    <label htmlFor="name" className="block text-slate-300 font-bold mb-1">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md bg-slate-700 text-slate-200 border border-slate-700 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 outline-none transition-colors"
                        placeholder="Your Name"
                    />
                </div>
                
                {/* Email Field */}
                <div>
                    <label htmlFor="email" className="block text-slate-300 font-bold mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md bg-slate-700 text-slate-200 border border-slate-700 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 outline-none transition-colors"
                        placeholder="your.email@example.com"
                    />
                </div>
                
                {/* Message Field */}
                <div>
                    <label htmlFor="message" className="block text-slate-300 font-bold mb-1">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full px-4 py-3 rounded-md bg-slate-700 text-slate-200 border border-slate-700 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 outline-none transition-colors"
                        placeholder="I'd love to chat about..."
                    ></textarea>
                </div>
                
                <button 
                    type="submit" 
                    disabled={status === 'sending'}
                    className={`w-full px-8 py-3 rounded-md text-lg font-mono flex items-center justify-center transition-all duration-300 ${
                        status === 'sending'
                            ? 'bg-teal-700 text-slate-900 cursor-not-allowed opacity-50' 
                            : 'bg-teal-400 text-slate-900 hover:bg-teal-300'
                    }`}
                >
                    {status === 'sending' ? 'Preparing Draft...' : 'Send Message'}
                    <Send className={`ml-2 h-5 w-5 ${status === 'sending' ? 'animate-pulse' : ''}`} />
                </button>
                
                {renderStatusMessage()}
            </form>
            
        </section>
    );
}

function Footer() {
    return (
        <footer className="container mx-auto px-6 py-8 text-center text-slate-500">
            <div className="md:hidden flex justify-center space-x-6 mb-4">
                <a href={developerInfo.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors"><Github /></a>
                <a href={developerInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors"><Linkedin /></a>
                <a href={developerInfo.contact.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors"><Twitter /></a>
                <a href={`mailto:${developerInfo.contact.email}`} className="hover:text-teal-400 transition-colors"><Mail /></a>
            </div>
            <p className="font-mono text-sm">Designed & Built by {developerInfo.name}</p>
        </footer>
    );
}

function SocialLinks() {
    return (
        <div className="hidden md:flex flex-col items-center fixed bottom-0 left-10 z-10">
            <a href={developerInfo.contact.github} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-teal-400 hover:-translate-y-1 transition-transform"><Github /></a>
            <a href={developerInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-teal-400 hover:-translate-y-1 transition-transform"><Linkedin /></a>
            <a href={developerInfo.contact.twitter} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-teal-400 hover:-translate-y-1 transition-transform"><Twitter /></a>
            <div className="h-24 w-px bg-slate-600 mt-4"></div>
        </div>
    );
}

function EmailLink() {
     return (
        <div className="hidden md:flex flex-col items-center fixed bottom-0 right-10 z-10">
            <a href={`mailto:${developerInfo.contact.email}`} className="p-2 font-mono text-sm text-slate-400 hover:text-teal-400 tracking-widest" style={{ writingMode: 'vertical-rl' }}>
                {developerInfo.contact.email}
            </a>
            <div className="h-24 w-px bg-slate-600 mt-4"></div>
        </div>
    );
}


export default function App() {
    // Firebase auth logic has been removed.
    return (
        <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
            <div className="relative">
                <Header />
                <SocialLinks />
                <EmailLink />
                <main>
                    <Hero />
                    <About />
                    <Experience />
                    <Projects />
                    {/* Contact component is rendered directly now */}
                    <Contact /> 
                </main>
                <Footer />
            </div>
        </div>
    );
}
