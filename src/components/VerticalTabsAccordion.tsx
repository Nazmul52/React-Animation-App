import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const tabItems = [
	{
		title: "1. Contain more inquiries",
		subtitle: "Your always-on digital assistant",
		description:
			"Reduce contact center volume and deliver faster service with AI-powered chatbots and email bots that help resolve inquiries.",
		image: "/images/inquiries.png",
	},
	{
		title: "2. Integrated self-service",
		subtitle: "",
		description:
			"Empower customers to resolve their own needs in their preferred channel.",
		image: "/images/self-service.png",
	},
	{
		title: "3. Contextual insights",
		subtitle: "",
		description:
			"Provide agents and customers with real-time insights for better decision making.",
		image: "/images/insights.png",
	},
	{
		title: "4. Automate digital messaging",
		subtitle: "",
		description:
			"Automate communications across channels for seamless customer journeys.",
		image: "/images/messaging.png",
	},
];

export default function HorizontalTabsAccordion() {
	const [activeIdx, setActiveIdx] = useState(0);

	return (
		<div className="w-full p-8">
			{/* Header
			<div className="flex items-center justify-between mb-8">
				<h2 className="text-xl font-semibold text-gray-800">
					Digital self-service
				</h2>
				<ChevronDown className="w-6 h-6 text-gray-600" />
			</div> */}

			{/* Horizontal Cards Layout */}
			<div className="flex gap-4">
				{tabItems.map((item, idx) => (
					<motion.div
						key={idx}
						layout
						className={`bg-white rounded-xl shadow-lg cursor-pointer overflow-hidden ${
							activeIdx === idx ? "flex-1" : "w-28"
						}`}
						onClick={() => setActiveIdx(idx)}
						whileHover={{ scale: activeIdx === idx ? 1 : 1.02 }}
						transition={{
							layout: { duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] },
							opacity: { duration: 0.4 },
						}}
					>
						{/* Collapsed State - Vertical Text and Centered Chevron */}
						{activeIdx !== idx && (
							<motion.div
								className="h-full flex flex-col items-start justify-start px-10 pt-4"
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -20 }}
								transition={{ duration: 0.5, delay: 0.2 }}
							>
                <motion.span
                  initial={false}
                  transition={{ duration: 0.3 }}
                  animate={{ rotate: activeIdx === idx ? 360 : 0 }}
                  className={`flex items-center justify-center w-7 h-7 rounded-full border ${activeIdx === idx ? 'border-[#002269] bg-[#002269] text-white' : 'bg-[#DDE5F3] border-[#DDE5F3]  text-gray-700'}`}
                >
								  <ChevronRight className="w-6 h-6 text-gray-400" />
                </motion.span>
								<div className="transform rotate-90 origin-left whitespace-nowrap pb-[24px]">
									<span className="text-blue-900 font-bold text-2xl leading-tight text-left font-serif block">
										{item.title}
									</span>
								</div>
							</motion.div>
						)}

						{/* Expanded State - Full Content */}
						{activeIdx === idx && (
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.95 }}
								transition={{
									duration: 0.5,
									delay: 0.2,
									ease: [0.04, 0.62, 0.23, 0.98],
								}}
								className="h-full p-8 flex flex-col relative"
							>
								{/* Blue chevron circle in top-right corner */}
								<motion.div
									className="absolute top-4 right-4 w-7 h-7 rounded-full bg-blue-900 text-white flex items-center justify-center"
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									transition={{ duration: 0.3, delay: 0.3 }}
								>
									<ChevronLeft className="w-5 h-5 transform rotate-360" />
								</motion.div>

								{/* Content */}
								<div className="flex-1 flex flex-col lg:flex-col gap-8 mt-4">
									{/* Left side - Text content */}
									<div className="flex-1 flex flex-col justify-start">
										{/* Title with number */}
										<h3 className="text-3xl font-bold text-blue-900 mb-4">
											{item.title}
										</h3>

										{/* Subtitle */}
										{item.subtitle && (
											<h4 className="text-xl font-medium text-gray-600 mb-6">
												{item.subtitle}
											</h4>
										)}

										{/* Description */}
										<p className="text-gray-600 leading-relaxed text-lg">
											{item.description}
										</p>
									</div>

									{/* Right side - Always show mock interface */}
									<div className="flex-1 flex items-start justify-start">
										<div className="w-full max-w-sm">
											{/* Mock Chat Interface - Always show this */}
											<div className="w-full h-80 bg-white rounded-lg shadow-lg border overflow-hidden">
												<div className="h-full flex flex-col">
													{/* Chat header */}
													<motion.div
														className="bg-blue-900 text-white p-3 flex items-center justify-between"
														initial={{ y: -10, opacity: 0 }}
														animate={{ y: 0, opacity: 1 }}
														transition={{ duration: 0.4, delay: 0.7 }}
													>
														<span className="font-medium text-sm">
															Chat with U+Bank
														</span>
														<div className="flex space-x-1">
															<div className="w-2 h-2 bg-white bg-opacity-50 rounded-full"></div>
															<div className="w-2 h-2 bg-white bg-opacity-50 rounded-full"></div>
															<div className="w-2 h-2 bg-white bg-opacity-50 rounded-full"></div>
														</div>
													</motion.div>

													{/* Chat content area */}
													<motion.div
														className="flex-1 p-4 bg-gray-50 flex items-center justify-center"
														initial={{ opacity: 0 }}
														animate={{ opacity: 1 }}
														transition={{ duration: 0.5, delay: 0.8 }}
													>
														<motion.div
															className="w-32 h-24 bg-blue-200 rounded-lg flex items-center justify-center"
															initial={{ scale: 0.8 }}
															animate={{ scale: 1 }}
															transition={{ duration: 0.4, delay: 0.9 }}
														>
															<div className="text-center">
																<div className="w-8 h-8 bg-blue-900 rounded mx-auto mb-2"></div>
																<div className="text-xs text-blue-900 font-medium">
																	Interface Preview
																</div>
															</div>
														</motion.div>
													</motion.div>

													{/* Chat input */}
													<motion.div
														className="p-3 border-t bg-white"
														initial={{ y: 10, opacity: 0 }}
														animate={{ y: 0, opacity: 1 }}
														transition={{ duration: 0.4, delay: 1.0 }}
													>
														<div className="flex gap-2">
															<div className="flex-1 h-8 bg-gray-100 rounded border"></div>
															<div className="w-12 h-8 bg-blue-900 rounded"></div>
														</div>
													</motion.div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</motion.div>
						)}
					</motion.div>
				))}
			</div>
		</div>
	);
}