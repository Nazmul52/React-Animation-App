import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

// Mock components for demo - replace with your actual components
const VerticalTabsAccordion = () => (
  <div className="bg-gray-100 p-6 rounded-lg border">
    <h3 className="font-semibold text-gray-800 mb-4">Vertical Tabs Accordion</h3>
    <div className="space-y-2">
      <div className="bg-white p-3 rounded border-l-4 border-blue-500">
        <p className="text-sm text-gray-600">Tab 1: Feature Overview</p>
      </div>
      <div className="bg-white p-3 rounded border-l-4 border-gray-300">
        <p className="text-sm text-gray-600">Tab 2: Implementation Details</p>
      </div>
      <div className="bg-white p-3 rounded border-l-4 border-gray-300">
        <p className="text-sm text-gray-600">Tab 3: Best Practices</p>
      </div>
    </div>
  </div>
);

const VideoCardGroup = () => (
  <div className="bg-gray-100 p-6 rounded-lg border">
    <h3 className="font-semibold text-gray-800 mb-4">Video Card Group</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="bg-gradient-to-br from-blue-400 to-purple-500 h-32 rounded mb-3"></div>
        <p className="text-sm font-medium">Customer Success Story</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="bg-gradient-to-br from-green-400 to-blue-500 h-32 rounded mb-3"></div>
        <p className="text-sm font-medium">Product Demo</p>
      </div>
    </div>
  </div>
);

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
		details: `Transform customer service with AI

Empower your team with an AI copilot that understands customer intent and dynamically guides agents through customer service interactions. Pega's AI automates tasks and recommends next best actions, keeping your agents laser-focused on delivering exceptional experiences. With a seamless, guided user experience and dynamic training and coaching, every agent can be your best agent from day one.

Customer Service AI delivers faster resolutions and allows contact centers to personalize service at scale. In the backend, AI orchestrates processes and integrates legacy apps to improve efficiency and productivity.

AI in customer service: What your organization should know
As organizations move toward a more autonomous operations model, AI for customer service can boost revenue and retention opportunities, reduce overhead costs, improve agent efficiency, and drive better outcomes for customers.`,
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

export default function PositionBasedAccordion() {
	const [openIdx, setOpenIdx] = useState<number | null>(null);
	const [hasAutoOpened, setHasAutoOpened] = useState(false);
	const accordionRef = useRef<HTMLDivElement>(null);

	const handleAccordionClick = (idx: number) => {
		const newOpenIdx = openIdx === idx ? null : idx;
		setOpenIdx(newOpenIdx);
	};

	// Auto-open first accordion when scrolling past the three cards
	useEffect(() => {
		if (hasAutoOpened || !accordionRef.current) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				
				// Trigger as soon as any part of the accordion becomes visible
				if (entry.isIntersecting && entry.intersectionRatio > 0) {
					setOpenIdx(0);
					setHasAutoOpened(true);
				}
			},
			{
				threshold: [0], // Trigger as soon as any pixel is visible
				rootMargin: '50px 0px 0px 0px' // Start observing 50px before the element comes into view
			}
		);

		observer.observe(accordionRef.current);

		return () => {
			observer.disconnect();
		};
	}, [hasAutoOpened]);

	// Calculate positions for each section
	const getPositionInfo = (idx) => {
		const headerHeight = 48; // Height per closed header
		const sectionsAbove = idx; // Number of sections above the open item
		const sectionsBelow = sections.length - idx - 1; // Number of sections below the open item
		
		const topOffset = sectionsAbove * headerHeight;
		const bottomOffset = sectionsBelow * headerHeight;
		const availableHeight = window.innerHeight - topOffset - bottomOffset;
		
		return { topOffset, bottomOffset, availableHeight };
	};

	return (
		<div className="w-full" ref={accordionRef}>
			{/* Show all sections normally when nothing is open */}
			{openIdx === null && (
				<div className="flex flex-col w-full mt-28">
					{sections.map((section, idx) => (
						<motion.div
							key={`initial-${idx}`}
							layout
							initial={{ y: 80, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.7, ease: "easeOut" }}
							className="mb-4 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 bg-white"
						>
							<button
								onClick={() => handleAccordionClick(idx)}
								className="w-full flex items-center justify-between text-left px-6 py-4 font-semibold text-lg transition focus:outline-none text-gray-700 bg-gray-100 hover:bg-gray-200"
							>
								<span>{section.title}</span>
								<span className="ml-4 flex items-center justify-center w-7 h-7 rounded-full border border-white bg-white text-gray-700">
									<ChevronUp size={20} />
								</span>
							</button>
						</motion.div>
					))}
				</div>
			)}

			{/* When an accordion is open */}
			{openIdx !== null && (
				<>
					{/* Closed sections above the open item */}
					{sections.map((section, idx) => {
						if (idx >= openIdx) return null; // Only show sections above
						return (
							<div
								key={`top-${idx}`}
								className="fixed left-0 right-0 z-60 bg-gray-50 border-b border-gray-200"
								style={{ 
									top: `${idx * 48}px`
								}}
							>
								<button
									onClick={() => handleAccordionClick(idx)}
									className="w-full flex items-center justify-between text-left px-6 py-3 font-semibold text-sm transition focus:outline-none text-gray-700 bg-gray-50 hover:bg-gray-100"
								>
									<span>{section.title}</span>
									<span className="ml-4 flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 bg-gray-300 text-gray-600">
										<ChevronUp size={16} />
									</span>
								</button>
							</div>
						);
					})}

					{/* Currently open section - expands from current position upward */}
					<motion.div
						key={`open-${openIdx}`}
						initial={{ 
							height: "48px", 
							opacity: 1
						}}
						animate={{ 
							height: `${getPositionInfo(openIdx).availableHeight}px`,
							opacity: 1
						}}
						exit={{ 
							height: "48px", 
							opacity: 0
						}}
						transition={{ 
							duration: 2, 
							ease: [0.04, 0.62, 0.23, 0.98],
							opacity: { duration: 0.3 },
							height: { duration: 2, ease: [0.32, 0.72, 0, 1] }
						}}
						className="fixed left-0 right-0 z-50 bg-blue-50 shadow-xl overflow-hidden"
						style={{ 
							bottom: `${getPositionInfo(openIdx).bottomOffset}px`,
							transformOrigin: "bottom" // Expand from bottom upward
						}}
					>
						{/* Header */}
						<div className="sticky top-0 bg-blue-50 z-10 border-b border-blue-200">
							<button
								onClick={() => handleAccordionClick(openIdx)}
								className="w-full flex items-center justify-between text-left px-6 py-4 font-semibold text-lg text-blue-900 bg-blue-50 hover:bg-blue-100 transition"
							>
								<span>{sections[openIdx].title}</span>
								<motion.span
									animate={{ rotate: 180 }}
									transition={{ duration: 0.3 }}
									className="ml-4 flex items-center justify-center w-7 h-7 rounded-full border border-[#002269] bg-[#002269] text-white"
								>
									<ChevronUp size={20} />
								</motion.span>
							</button>
						</div>
						
						{/* Content */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.5, duration: 0.4 }}
							className="px-8 pb-16 bg-blue-50 overflow-y-auto"
							style={{ height: 'calc(100% - 72px)' }} // Subtract header height
						>
							<div className="pt-6 flex flex-col items-start text-left px-4 lg:px-24 max-w-6xl mx-auto">
								<motion.h2
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.4, duration: 0.4 }}
									className="text-3xl lg:text-4xl font-bold leading-tight pb-8 text-blue-900"
									style={{ fontFamily: "Georgia, serif" }}
								>
									{sections[openIdx].description}
								</motion.h2>
								
								<motion.p 
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.5, duration: 0.4 }}
									className="text-base text-gray-700 pb-8 max-w-2xl whitespace-pre-line"
								>
									{sections[openIdx].details}
								</motion.p>
								
								{sections[openIdx].video && (
									<motion.div 
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ delay: 0.6, duration: 0.5 }}
										className="w-full max-w-2xl aspect-video rounded-xl overflow-hidden shadow-lg mb-6 mx-auto bg-gradient-to-br from-purple-400 via-yellow-400 to-purple-600"
									>
										<div className="w-full h-full flex items-center justify-center text-white font-bold text-xl">
											Video: {sections[openIdx].title}
										</div>
									</motion.div>
								)}

								<motion.div 
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.7, duration: 0.4 }}
									className="w-full my-8"
								>
									{sections[openIdx].showVerticalTabsAccordion && <VerticalTabsAccordion />}
									{sections[openIdx].showVideoCardGroup && <VideoCardGroup />}
								</motion.div>
								
								{sections[openIdx].buttonText && (
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.8, duration: 0.4 }}
										className="flex justify-center my-8 w-full"
									>
										<button className="mx-auto bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 px-8 rounded-xl shadow-lg text-lg transition-all duration-200 hover:transform hover:scale-105">
											{sections[openIdx].buttonText}
										</button>
									</motion.div>
								)}
							</div>
						</motion.div>
					</motion.div>

					{/* Closed sections below the open item */}
					{sections.map((section, idx) => {
						if (idx <= openIdx) return null; // Only show sections below
						const bottomPosition = (sections.length - 1 - idx) * 48; // Calculate position from bottom
						return (
							<div
								key={`bottom-${idx}`}
								className="fixed left-0 right-0 z-60 bg-gray-50 border-t border-gray-200"
								style={{ 
									bottom: `${bottomPosition}px`
								}}
							>
								<button
									onClick={() => handleAccordionClick(idx)}
									className="w-full flex items-center justify-between text-left px-6 py-3 font-semibold text-sm transition focus:outline-none text-gray-700 bg-gray-50 hover:bg-gray-100"
								>
									<span>{section.title}</span>
									<span className="ml-4 flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 bg-gray-300 text-gray-600">
										<ChevronUp size={16} />
									</span>
								</button>
							</div>
						);
					})}
				</>
			)}
		</div>
	);
}