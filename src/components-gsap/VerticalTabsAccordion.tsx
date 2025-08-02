import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
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
	const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
	const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

	// Animation when tab becomes active
	useEffect(() => {
		tabRefs.current.forEach((tab, idx) => {
			if (tab) {
				if (idx === activeIdx) {
					// Animate active tab expansion
					gsap.to(tab, {
						flex: 1,
						duration: 0.6,
						ease: "power2.out"
					});
				} else {
					// Animate inactive tab contraction
					gsap.to(tab, {
						flex: "none",
						width: "7rem", // w-28 in tailwind
						duration: 0.6,
						ease: "power2.out"
					});
				}
			}
		});

		// Animate content
		contentRefs.current.forEach((content, idx) => {
			if (content) {
				if (idx === activeIdx) {
					gsap.fromTo(content,
						{ opacity: 0, scale: 0.95 },
						{ 
							opacity: 1, 
							scale: 1, 
							duration: 0.5, 
							delay: 0.2,
							ease: "power2.out"
						}
					);
				}
			}
		});
	}, [activeIdx]);

	const setTabRef = (index) => (el) => {
		tabRefs.current[index] = el;
	};

	const setContentRef = (index) => (el) => {
		contentRefs.current[index] = el;
	};

	const handleTabClick = (idx) => {
		setActiveIdx(idx);
	};

	const handleTabHover = (idx) => {
		if (activeIdx !== idx) {
			const tab = tabRefs.current[idx];
			if (tab) {
				gsap.to(tab, { scale: 1.02, duration: 0.2 });
			}
		}
	};

	const handleTabLeave = (idx) => {
		if (activeIdx !== idx) {
			const tab = tabRefs.current[idx];
			if (tab) {
				gsap.to(tab, { scale: 1, duration: 0.2 });
			}
		}
	};

	return (
		<div className="w-full p-8">
			{/* Horizontal Cards Layout */}
			<div className="flex gap-4">
				{tabItems.map((item, idx) => (
					<div
						key={idx}
						ref={setTabRef(idx)}
						className={`bg-white rounded-xl shadow-lg cursor-pointer overflow-hidden ${
							activeIdx === idx ? "flex-1" : "w-28"
						}`}
						onClick={() => handleTabClick(idx)}
						onMouseEnter={() => handleTabHover(idx)}
						onMouseLeave={() => handleTabLeave(idx)}
					>
						{/* Collapsed State - Vertical Text and Centered Chevron */}
						{activeIdx !== idx && (
							<div className="h-full flex flex-col items-start justify-start px-10 pt-4">
								<span className={`flex items-center justify-center w-7 h-7 rounded-full border bg-[#DDE5F3] border-[#DDE5F3] text-gray-700`}>
									<ChevronRight className="w-6 h-6 text-gray-400" />
								</span>
								<div className="transform rotate-90 origin-left whitespace-nowrap pb-[24px]">
									<span className="text-blue-900 font-bold text-2xl leading-tight text-left font-serif block">
										{item.title}
									</span>
								</div>
							</div>
						)}

						{/* Expanded State - Full Content */}
						{activeIdx === idx && (
							<div
								ref={setContentRef(idx)}
								className="h-full p-8 flex flex-col relative"
							>
								{/* Blue chevron circle in top-right corner */}
								<div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-blue-900 text-white flex items-center justify-center">
									<ChevronLeft className="w-5 h-5 transform rotate-360" />
								</div>

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
													<div className="bg-blue-900 text-white p-3 flex items-center justify-between">
														<span className="font-medium text-sm">
															Chat with U+Bank
														</span>
														<div className="flex space-x-1">
															<div className="w-2 h-2 bg-white bg-opacity-50 rounded-full"></div>
															<div className="w-2 h-2 bg-white bg-opacity-50 rounded-full"></div>
															<div className="w-2 h-2 bg-white bg-opacity-50 rounded-full"></div>
														</div>
													</div>

													{/* Chat content area */}
													<div className="flex-1 p-4 bg-gray-50 flex items-center justify-center">
														<div className="w-32 h-24 bg-blue-200 rounded-lg flex items-center justify-center">
															<div className="text-center">
																<div className="w-8 h-8 bg-blue-900 rounded mx-auto mb-2"></div>
																<div className="text-xs text-blue-900 font-medium">
																	Interface Preview
																</div>
															</div>
														</div>
													</div>

													{/* Chat input */}
													<div className="p-3 border-t bg-white">
														<div className="flex gap-2">
															<div className="flex-1 h-8 bg-gray-100 rounded border"></div>
															<div className="w-12 h-8 bg-blue-900 rounded"></div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
