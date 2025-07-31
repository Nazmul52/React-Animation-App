import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronUp } from "lucide-react";
import VerticalTabsAccordion from "./VerticalTabsAccordion";
import VideoCardGroup from "./VideoCardGroup";

const sections = [
	{
		title: "Contact Center Desktop",
		description:
			"Intelligently guide and seamlessly automate every customer service journey.",
		details:
			"Pega Customer Service™ is an industry-leading contact center solution built on the Pega Platform™. Designed for delivering seamless, personalized experiences across all channels, this AI-powered desktop makes every agent your best agent—driving efficiency, first-contact resolution, and revenue generation—all while making service effortless for everyone.",
		video: "/videos/customer-service.mp4",
		showVerticalTabsAccordion: true,
		buttonText: "Learn more how Pega Customer Service works",
	},
	{
		title: "Customer Service AI",
		description: "How AI improves customer service",
		details: `Transform customer service with AI\n\nEmpower your team with an AI copilot that understands customer intent and dynamically guides agents through customer service interactions. Pega's AI automates tasks and recommends next best actions, keeping your agents laser-focused on delivering exceptional experiences. With a seamless, guided user experience and dynamic training and coaching, every agent can be your best agent from day one.\n\nCustomer Service AI delivers faster resolutions and allows contact centers to personalize service at scale. In the backend, AI orchestrates processes and integrates legacy apps to improve efficiency and productivity.\n\nAI in customer service: What your organization should know\nAs organizations move toward a more autonomous operations model, AI for customer service can boost revenue and retention opportunities, reduce overhead costs, improve agent efficiency, and drive better outcomes for customers.`,
		showVerticalTabsAccordion: false,
		buttonText: "Unlock value for your contact center",
		showVideoCardGroup: true,
	},
	{
		title: "Digital engagement",
		description:
			"AI-driven engagement solutions help improve customer satisfaction and reduce response time through real-time insights.",
		details:
			"Give agents a complete view of customer history, preferences, and interactions to provide personalized support.",
		video: "/videos/engagement.mp4",
		showVerticalTabsAccordion: true,
	},
	{
		title: "Digital self-service",
		description:
			"Enhance your self-service capabilities for 24/7 support",
		details:
			"Contain calls, reduce cost to serve, and improve the customer experience using AI and workflow automation. Pega's self-service capabilities empower the customer to resolve many of their service needs on their own, in the channel they prefer. Place the customer journey at the center instead of the channel.",
		video: "/videos/self-service.mp4",
		showVerticalTabsAccordion: true,
		buttonText: "Get started with Self-Service",
	},
];

export default function FullscreenAccordion() {
	const [openIdx, setOpenIdx] = useState(null);
	const accordionRefs = useRef([]);

	const handleAccordionClick = (idx) => {
		const newOpenIdx = openIdx === idx ? null : idx;
		setOpenIdx(newOpenIdx);
		
		// Scroll to top of the clicked accordion item when opening
		if (newOpenIdx !== null && accordionRefs.current[idx]) {
			setTimeout(() => {
				accordionRefs.current[idx].scrollIntoView({ 
					behavior: 'smooth', 
					block: 'start' 
				});
			}, 100);
		}
	};

	return (
		<div className="flex flex-col w-full mt-28">
			{sections.map((section, idx) => (
				<motion.div
					key={idx}
					ref={(el) => (accordionRefs.current[idx] = el)}
					layout
					initial={{ y: 80, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className={`mb-4 rounded-2xl overflow-hidden shadow-lg transition-all duration-700 ${
						openIdx === idx ? "bg-blue-50" : "bg-white"
					}`}
				>
					<motion.button
						layout="position"
						onClick={() => handleAccordionClick(idx)}
						className={`w-full flex items-center justify-between text-left px-6 py-4 font-semibold text-lg transition focus:!outline-none focus:!ring-0 focus-visible:!outline-none focus-visible:!ring-0 ${
							openIdx === idx
								? "text-blue-900 bg-blue-50"
								: "text-gray-700 bg-gray-100"
						}`}
					>
						<span>{section.title}</span>
						<motion.span
							initial={false}
							animate={{ rotate: openIdx === idx ? 180 : 0 }}
							transition={{ duration: 0.3 }}
							className={`ml-4 flex items-center justify-center w-7 h-7 rounded-full border ${
								openIdx === idx
									? "border-[#002269] bg-[#002269] text-white"
									: "border-white bg-white text-gray-700"
							}`}
						>
							<ChevronUp size={20} />
						</motion.span>
					</motion.button>
					
					<motion.div
						layout
						initial={false}
						animate={
							openIdx === idx
								? { 
									height: "auto", 
									opacity: 1,
									y: 0
								}
								: { 
									height: 0, 
									opacity: 0,
									y: -20
								}
						}
						transition={{ 
							duration: 0.5, 
							ease: [0.04, 0.62, 0.23, 0.98],
							opacity: { duration: 0.3 }
						}}
						className="overflow-hidden"
					>
						<motion.div 
							layout
							className="px-8"
						>
							<div className="pt-6 flex flex-col items-start text-left px-24">
								<motion.h2
									layout
									className="text-3xl lg:text-4xl font-bold leading-tight pb-8 text-blue-900"
									style={{ fontFamily: "Georgia, serif" }}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: openIdx === idx ? 1 : 0, y: openIdx === idx ? 0 : 20 }}
									transition={{ delay: openIdx === idx ? 0.2 : 0, duration: 0.4 }}
								>
									{section.description}
								</motion.h2>
								
								<motion.p 
									layout
									className="text-base text-gray-700 pb-8 max-w-2xl whitespace-pre-line"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: openIdx === idx ? 1 : 0, y: openIdx === idx ? 0 : 20 }}
									transition={{ delay: openIdx === idx ? 0.3 : 0, duration: 0.4 }}
								>
									{section.details}
								</motion.p>
								
								{section.video && (
									<motion.div 
										layout
										className="w-full max-w-2xl aspect-video rounded-xl overflow-hidden shadow-lg mb-6 mx-auto bg-gradient-to-br from-purple-400 via-yellow-400 to-purple-600"
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ 
											opacity: openIdx === idx ? 1 : 0, 
											scale: openIdx === idx ? 1 : 0.9 
										}}
										transition={{ delay: openIdx === idx ? 0.4 : 0, duration: 0.5 }}
									>
										{/* Placeholder for video since actual video files aren't available */}
										<div className="w-full h-full flex items-center justify-center text-white font-bold text-xl">
											Video: {section.title}
										</div>
									</motion.div>
								)}

								<motion.div 
									layout
									className="w-full my-8"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: openIdx === idx ? 1 : 0, y: openIdx === idx ? 0 : 20 }}
									transition={{ delay: openIdx === idx ? 0.5 : 0, duration: 0.4 }}
								>
									{section.showVerticalTabsAccordion && <VerticalTabsAccordion />}
									{section.showVideoCardGroup && <VideoCardGroup />}
								</motion.div>
								
								{section.buttonText && (
									<motion.div
										layout
										className="flex justify-center my-8 w-full"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: openIdx === idx ? 1 : 0, y: openIdx === idx ? 0 : 20 }}
										transition={{ delay: openIdx === idx ? 0.6 : 0, duration: 0.4 }}
									>
										<button className="mx-auto bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 px-8 rounded-xl shadow-lg text-lg transition-all duration-200 block hover:transform hover:scale-105">
											{section.buttonText}
										</button>
									</motion.div>
								)}
							</div>
						</motion.div>
					</motion.div>
				</motion.div>
			))}
		</div>
	);
}