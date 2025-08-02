import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BadgeCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Jenn Wade",
    subtitle: "Elevance Health",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    description:
      "What you're looking for is somebody to be there in that journey when you need them most. And that's what Pega is doing with us.",
    brand: "Elevance Health",
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Elevance_Health_logo.png/120px-Elevance_Health_logo.png",
  },
  {
    title: "Nicola Bakermans",
    subtitle: "Athora",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    description:
      "Pega was the only single platform that seamlessly integrated CRM and BPM capabilities.",
    brand: "ATHORA",
    brandLogo: "https://www.athora.com/fileadmin/templates/img/logo-athora.png",
  },
  {
    title: "Angus Sullivan",
    subtitle: "Commonwealth Bank of Australia",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description: "We just did our 50 millionth next best conversation in person.",
    brand: "Commonwealth Bank",
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Commonwealth_Bank_logo.png/120px-Commonwealth_Bank_logo.png",
  },
];

export default function VideoCardGroup() {
  const cardsRef = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    // Animate title
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );

    // Animate cards
    cardsRef.current.forEach((card, idx) => {
      if (card) {
        gsap.fromTo(card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            delay: idx * 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    });
  }, []);

  const setCardRef = (index) => (el) => {
    cardsRef.current[index] = el;
  };

  return (
    <div className="w-full flex flex-col items-center mb-8">
      <h2 
        ref={titleRef}
        className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-10 mt-2" 
        style={{fontFamily: 'Georgia, serif'}}
      >
        Our clients use Pega AI in customer service to drive<br />
        massive value and competitive advantage.
      </h2>
      <div className="flex justify-center items-end gap-8 w-full mt-16">
        {cards.map((card, idx) => (
          <div
            ref={setCardRef(idx)}
            key={idx}
            className={`relative rounded-2xl shadow-lg flex flex-col items-center justify-between overflow-hidden bg-white ${idx === 1 ? "h-[420px] w-[220px] mt-[-32px]" : "h-[400px] w-[180px]"}`}
          >
            {/* Top: Name & Designation */}
            <div className="absolute top-4 left-0 w-full px-5 z-10 flex flex-col items-start">
              <span className="text-base font-bold text-white drop-shadow-lg">{card.title}</span>
              <span className="text-xs font-medium text-white drop-shadow-lg">{card.subtitle}</span>
            </div>
            {/* Image with Play Button Overlay */}
            <div className="w-full h-2/3 relative flex items-center justify-center">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.85)" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white bg-opacity-80 rounded-full p-2 shadow-lg">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#fff"/><polygon points="13,11 22,16 13,21" fill="#002269"/></svg>
                </div>
              </div>
            </div>
            {/* Card Content */}
            <div className="px-6 pb-6 pt-4 w-full flex flex-col items-center justify-end h-1/3 bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 left-0">
              <div className="text-sm text-white font-medium mb-2 leading-tight text-center">{card.description}</div>
              <div className="flex items-center gap-2 mt-2 justify-center w-full">
                {card.brandLogo ? (
                  <img src={card.brandLogo} alt={card.brand} className="h-6 w-auto bg-white rounded shadow border border-white" style={{maxWidth:'60px',objectFit:'contain',background:'#fff'}} onError={e => {e.target.style.display='none';}} />
                ) : (
                  <BadgeCheck className="h-6 w-6 text-white" />
                )}
                <span className="text-xs text-white font-bold ml-1 text-center">{card.brand}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
