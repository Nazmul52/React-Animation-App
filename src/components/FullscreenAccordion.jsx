import { useState } from "react";
import AccordionItem from "./AccordionItem";

const items = [
  {
    title: "Customer Service AI",
    content:
      "Empower your team with an AI copilot that understands customer intent and dynamically guides agents.",
    video: "/videos/customer-service.mp4",
  },
  {
    title: "Digital Engagement",
    content:
      "Engage customers across multiple channels using AI-driven tools that personalize every interaction.",
    video: "/videos/digital-engagement.mp4",
  },
  {
    title: "Self-Service Solutions",
    content:
      "Reduce workload and improve satisfaction by offering intelligent self-service options powered by automation.",
    video: "/videos/self-service.mp4",
  },
  {
    title: "AI Insights",
    content:
      "Gain deep insights into customer behavior and automate decisions using predictive analytics.",
    video: "/videos/ai-insights.mp4",
  },
];

export default function FullscreenAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="space-y-10">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          title={item.title}
          content={item.content}
          video={item.video}
        />
      ))}
    </div>
  );
}
