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
	const collapsedRefs = useRef<(HTMLDivElement | null)[]>([]);
	const chevronRefs = useRef<(HTMLDivElement | null)[]>([]);
	const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
	const subtitleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
	const descriptionRefs = useRef<(HTMLParagraphElement | null)[]>([]);
	const chatInterfaceRefs = useRef<(HTMLDivElement | null)[]>([]);

	// Initialize the first tab as expanded on mount
	useEffect(() => {
		const timer = setTimeout(() => {
			if (tabRefs.current[0]) {
				gsap.set(tabRefs.current[0], {
					width: "auto",
					flex: "1 1 0%"
				});
			}
		}, 50);
		
		return () => clearTimeout(timer);
	}, []);

	// Animation when tab becomes active
	useEffect(() => {
		tabRefs.current.forEach((tab, idx) => {
			if (tab) {
				// Kill any existing animations
				gsap.killTweensOf(tab);
				
				if (idx === activeIdx) {
					// Animate to expanded state
					gsap.to(tab, {
						width: "auto",
						flex: "1 1 0%",
						duration: 1.2,
						ease: "power2.out"
					});
				} else {
					// Animate to collapsed state
					gsap.to(tab, {
						width: "7rem",
						flex: "0 0 7rem",
						duration: 1.2,
						ease: "power2.out"
					});
				}
			}
		});

		// Animate collapsed content entrance
		collapsedRefs.current.forEach((collapsed, idx) => {
			if (collapsed) {
				// Kill any existing animations
				gsap.killTweensOf(collapsed);
				
				if (idx !== activeIdx) {
					gsap.fromTo(collapsed,
						{ opacity: 0, x: -20 },
						{ 
							opacity: 1, 
							x: 0, 
							duration: 0.8, 
							delay: 0.4,
							ease: "power2.out"
						}
					);
				}
			}
		});

		// Animate expanded content
		contentRefs.current.forEach((content, idx) => {
			if (content) {
				// Kill any existing animations
				gsap.killTweensOf(content);
				
				if (idx === activeIdx) {
					gsap.fromTo(content,
						{ opacity: 0, scale: 0.95 },
						{ 
							opacity: 1, 
							scale: 1, 
							duration: 0.8, 
							delay: 0.4,
							ease: "power2.out"
						}
					);
				}
			}
		});

		// Animate blue chevron in expanded state
		chevronRefs.current.forEach((chevron, idx) => {
			if (chevron) {
				// Kill any existing animations
				gsap.killTweensOf(chevron);
				
				if (idx === activeIdx) {
					gsap.fromTo(chevron,
						{ scale: 0 },
						{ 
							scale: 1, 
							duration: 0.5, 
							delay: 0.6,
							ease: "back.out(1.7)"
						}
					);
				}
			}
		});

		// Animate text content sequentially
		titleRefs.current.forEach((title, idx) => {
			if (title) {
				gsap.killTweensOf(title);
				
				if (idx === activeIdx) {
					gsap.fromTo(title,
						{ opacity: 0, y: 20 },
						{ 
							opacity: 1, 
							y: 0, 
							duration: 0.6, 
							delay: 0.7,
							ease: "power2.out"
						}
					);
				}
			}
		});

		subtitleRefs.current.forEach((subtitle, idx) => {
			if (subtitle) {
				gsap.killTweensOf(subtitle);
				
				if (idx === activeIdx) {
					gsap.fromTo(subtitle,
						{ opacity: 0, y: 20 },
						{ 
							opacity: 1, 
							y: 0, 
							duration: 0.6, 
							delay: 0.9,
							ease: "power2.out"
						}
					);
				}
			}
		});

		descriptionRefs.current.forEach((description, idx) => {
			if (description) {
				gsap.killTweensOf(description);
				
				if (idx === activeIdx) {
					gsap.fromTo(description,
						{ opacity: 0, y: 20 },
						{ 
							opacity: 1, 
							y: 0, 
							duration: 0.6, 
							delay: 1.1,
							ease: "power2.out"
						}
					);
				}
			}
		});

		// Animate chat interface
		chatInterfaceRefs.current.forEach((chatInterface, idx) => {
			if (chatInterface) {
				gsap.killTweensOf(chatInterface);
				
				if (idx === activeIdx) {
					gsap.fromTo(chatInterface,
						{ opacity: 0, scale: 0.9, y: 30 },
						{ 
							opacity: 1, 
							scale: 1, 
							y: 0,
							duration: 0.8, 
							delay: 1.3,
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

	const setCollapsedRef = (index) => (el) => {
		collapsedRefs.current[index] = el;
	};

	const setChevronRef = (index) => (el) => {
		chevronRefs.current[index] = el;
	};

	const setTitleRef = (index) => (el) => {
		titleRefs.current[index] = el;
	};

	const setSubtitleRef = (index) => (el) => {
		subtitleRefs.current[index] = el;
	};

	const setDescriptionRef = (index) => (el) => {
		descriptionRefs.current[index] = el;
	};

	const setChatInterfaceRef = (index) => (el) => {
		chatInterfaceRefs.current[index] = el;
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
			<div className="flex gap-4" style={{ height: "500px" }}>
				{tabItems.map((item, idx) => (
					<div
						key={idx}
						ref={setTabRef(idx)}
						className="bg-white rounded-xl shadow-lg cursor-pointer overflow-hidden"
						style={{
							display: "flex",
							flexDirection: "column",
							flex: "0 0 7rem",
							width: "7rem",
							minWidth: "7rem",
							height: "100%"
						}}
						onClick={() => handleTabClick(idx)}
						onMouseEnter={() => handleTabHover(idx)}
						onMouseLeave={() => handleTabLeave(idx)}
					>
						{/* Collapsed State - Vertical Text and Centered Chevron */}
						{activeIdx !== idx && (
							<div 
								ref={setCollapsedRef(idx)}
								className="h-full flex flex-col items-start justify-start px-10 pt-4"
							>
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
							<div 
								ref={setChevronRef(idx)}
								className="absolute top-4 right-4 w-7 h-7 rounded-full bg-blue-900 text-white flex items-center justify-center"
							>
								<ChevronLeft className="w-5 h-5 transform rotate-360" />
							</div>								{/* Content */}
								<div className="flex-1 flex flex-col lg:flex-row gap-8 mt-4 min-h-0">
									{/* Left side - Text content */}
									<div className="flex-1 flex flex-col justify-start min-w-0">
										{/* Title with number */}
										<h3 
											ref={setTitleRef(idx)}
											className="text-3xl font-bold text-blue-900 mb-4"
											style={{ opacity: 0 }}
										>
											{item.title}
										</h3>

										{/* Subtitle */}
										{item.subtitle && (
											<h4 
												ref={setSubtitleRef(idx)}
												className="text-xl font-medium text-gray-600 mb-6"
												style={{ opacity: 0 }}
											>
												{item.subtitle}
											</h4>
										)}

										{/* Description */}
										<p 
											ref={setDescriptionRef(idx)}
											className="text-gray-600 leading-relaxed text-lg"
											style={{ opacity: 0 }}
										>
											{item.description}
										</p>
									</div>

									{/* Right side - Always show mock interface */}
									<div className="flex-shrink-0 flex items-start justify-start">
										<div className="w-full max-w-sm">
											{/* Mock Chat Interface - Always show this */}
											<div 
												ref={setChatInterfaceRef(idx)}
												className="w-full h-80 bg-white rounded-lg shadow-lg border overflow-hidden"
												style={{ opacity: 0 }}
											>
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
