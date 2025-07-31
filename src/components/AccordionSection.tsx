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
		details: `Transform customer service with AI\n\nEmpower your team with an AI copilot that understands customer intent and dynamically guides agents through customer service interactions. Pega’s AI automates tasks and recommends next best actions, keeping your agents laser-focused on delivering exceptional experiences. With a seamless, guided user experience and dynamic training and coaching, every agent can be your best agent from day one.\n\nCustomer Service AI delivers faster resolutions and allows contact centers to personalize service at scale. In the backend, AI orchestrates processes and integrates legacy apps to improve efficiency and productivity.\n\nAI in customer service: What your organization should know\nAs organizations move toward a more autonomous operations model, AI for customer service can boost revenue and retention opportunities, reduce overhead costs, improve agent efficiency, and drive better outcomes for customers.`,
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
			"Contain calls, reduce cost to serve, and improve the customer experience using AI and workflow automation. Pega’s self-service capabilities empower the customer to resolve many of their service needs on their own, in the channel they prefer. Place the customer journey at the center instead of the channel.",
		video: "/videos/self-service.mp4",
		showVerticalTabsAccordion: true,
		buttonText: "Get started with Self-Service",
	},
];

export default function FullscreenAccordion() {
	const [openIdx, setOpenIdx] = useState<number | null>(null);
	return (
		<div className="flex flex-col w-full  mt-10">
			{sections.map((section, idx) => (
				<motion.div
					key={idx}
					initial={{ y: 80, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className={`mb-4 rounded-2xl overflow-hidden shadow-lg transition-all duration-700 ${
						openIdx === idx ? "bg-blue-50" : "bg-white"
					}`}
				>
					<button
						onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
						className={`w-full flex items-center justify-between text-left px-6 py-5 font-semibold text-lg transition focus:!outline-none focus:!ring-0 focus-visible:!outline-none focus-visible:!ring-0 ${
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
					</button>
					<motion.div
            initial={false}
            animate={openIdx === idx ? { opacity: 1, transform: "translateY(0px)" } : { opacity: 0, transform: "translateY(40px)" }}
            transition={{ duration: 0.3 }}
						style={{ maxHeight: openIdx === idx ? '100%' : 0 }}
						className="overflow-hidden px-8"
					>
						<div className="pt-6 flex flex-col items-start text-left px-24">
							<h2
								className="text-3xl lg:text-4xl font-bold leading-tight pb-8 text-blue-900"
								style={{ fontFamily: "Georgia, serif" }}
							>
								{section.description}
							</h2>
							<p className="text-base text-gray-700 pb-8 max-w-2xl">
								{section.details}
							</p>
							{section.video && (
								<div className="w-full max-w-2xl aspect-video rounded-xl overflow-hidden shadow-lg mb-6 mx-auto">
									<video
										className="w-full h-full object-cover"
										src={section.video}
										autoPlay
										muted
										loop
										playsInline
									/>
								</div>
							)}

							<div className="w-full my-8">
								{section.showVerticalTabsAccordion && <VerticalTabsAccordion />}
							</div>
							{/* Dynamic video card group for any accordion item */}
							{section.showVideoCardGroup && <VideoCardGroup />}
							{/* Dynamic button for any accordion item */}
							{section.buttonText && (
								<motion.div
									className="flex justify-center my-8 w-full"
								>
									<button className="mx-auto bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 px-8 rounded-xl shadow-lg text-lg transition-all duration-200 block">
										{section.buttonText}
									</button>
								</motion.div>
							)}
						</div>
					</motion.div>
				</motion.div>
			))}
		</div>
	);
}

function AccordionItem({ title, description, video, innerAccordion }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.6, once: false });
	const [openIndex, setOpenIndex] = useState(null);

	return (
		<motion.section
			ref={ref}
			initial={false}
			animate={{
				height: isInView ? "100vh" : "300px",
				transition: { duration: 0.8, ease: "easeInOut" },
			}}
			className="overflow-hidden w-full bg-white shadow-md rounded-2xl transition-all duration-700"
		>
			<motion.div
				initial={{ y: 100, opacity: 0 }}
				animate={
					isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
				}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="max-w-6xl py-20 flex flex-col items-center justify-center"
			>
				<h2 className="text-4xl lg:text-5xl max-w-2xl font-bold leading-tight pb-8 text-left">
					{title}
				</h2>
				<p className="text-lg text-gray-700 mb-12 max-w-2xl text-left">
					{description}
				</p>

				<div className="w-full max-w-2xl aspect-video rounded-xl overflow-hidden shadow-lg mb-10">
					<video
						className="w-full h-full object-cover"
						src={video}
						autoPlay
						muted
						loop
						playsInline
					/>
				</div>

				{innerAccordion && (
					<div className="w-full max-w-2xl">
						{innerAccordion.map((item, idx) => (
							<div
								key={idx}
								className="mb-4 border rounded-xl overflow-hidden"
							>
								<button
									onClick={() =>
										setOpenIndex(openIndex === idx ? null : idx)
									}
									className="w-full text-left p-4 font-semibold text-blue-700 bg-gray-100 hover:bg-gray-200 transition"
								>
									{item.heading}
								</button>
								<motion.div
									initial={false}
									animate={{
										height: openIndex === idx ? "auto" : 0,
										opacity: openIndex === idx ? 1 : 0,
									}}
									transition={{ duration: 0.4, ease: "easeInOut" }}
									className="overflow-hidden px-4 pb-4 text-gray-600"
								>
									{openIndex === idx && <p>{item.text}</p>}
								</motion.div>
							</div>
						))}
					</div>
				)}
			</motion.div>
		</motion.section>
	);
}
