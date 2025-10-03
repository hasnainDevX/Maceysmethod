import { Sparkles, Briefcase, Zap } from "lucide-react";

// Packages content
const categories = {
  social: {
    name: "Social Media",
    icon: Sparkles,
    description:
      "Transform your digital presence with strategic content and engagement",
    bgImage:
      "https://plus.unsplash.com/premium_photo-1680680514687-1402428204c2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    packages: [
      {
        title: "ESSENTIALS",
        price: "£297",
        duration: "per month",
        features: [
          "15 posts every 4 weeks",
          "Basic content creation",
          "Content calendar",
          "Captions, hashtags & scheduling",
          "15 minutes daily engagement",
          "Monthly analytics report",
        ],
        hours: "12 hours",
        weekly: "3 hours per week",
        note: "TikTok & Reels creation charged at hourly rate",
        popular: false,
        gradient: "from-mint/5 via-sage/5 to-mint/10",
        img: "https://plus.unsplash.com/premium_photo-1685287732060-12bea9dee1c7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "ELEVATE",
        price: "£497",
        duration: "per month",
        features: [
          "20 posts every 4 weeks",
          "Premium content creation",
          "Content calendar",
          "Captions, hashtags & scheduling",
          "20 minutes daily engagement",
          "Monthly analytics report",
          "Weekly catch-up calls",
        ],
        hours: "20 hours",
        weekly: "5 hours per week",
        note: "TikTok & Reels creation charged at hourly rate",
        popular: true,
        gradient: "from-rose/5 via-sage/5 to-rose/10",
        img: "https://plus.unsplash.com/premium_photo-1748106667800-16a64574c05f?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  admin: {
    name: "Administrative",
    icon: Briefcase,
    description:
      "Streamline operations with comprehensive administrative support",
    bgImage:
      "https://images.unsplash.com/photo-1652734446502-9abaead195b8?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    packages: [
      {
        title: "BASICS",
        price: "£320",
        duration: "per month",
        features: [
          "20 hours per month",
          "4 hours per week",
          "Email marketing support",
          "Inbox/Calendar management",
          "Onboarding assistance",
          "CRMs management",
          "Invoice management",
        ],
        popular: false,
        hours: "20 hours",
        weekly: "4 hours per week",
        gradient: "from-mint/5 via-sage/5 to-mint/10",
        img: "https://plus.unsplash.com/premium_photo-1748106667638-68b409400a14?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "PREMIUM",
        price: "£600",
        duration: "per month",
        features: [
          "30-40 hours per month",
          "7.5-10 hours per week",
          "All Basic features included",
          "Advanced project management",
          "Client communication support",
          "Database management",
          "Priority support",
        ],
        popular: true,
        hours: "30-40 hours",
        weekly: "7.5-10 hours per week",
        gradient: "from-rose/5 via-sage/5 to-rose/10",
        img: "https://plus.unsplash.com/premium_photo-1745495072244-3ae40416b8c7?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  hybrid: {
    name: "Hybrid",
    icon: Zap,
    description:
      "The perfect blend of social media and administrative excellence",
    bgImage:
      "https://plus.unsplash.com/premium_photo-1732721750556-f5aef2460dfd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    packages: [
      {
        title: "PACKAGE ONE",
        price: "£450",
        duration: "per month",
        features: [
          "10 hours admin support/month",
          "8 posts every 4 weeks",
          "Content calendar",
          "Captions, hashtags & scheduling",
          "15 minutes daily engagement",
          "Monthly check-in calls",
        ],
        popular: false,
        hours: "10 hours",
        weekly: "2 hours per week",
        gradient: "from-mint/5 via-sage/5 to-mint/10",
        img: "https://plus.unsplash.com/premium_photo-1732721750834-9041a9ce16e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "PACKAGE TWO",
        price: "£650",
        duration: "per month",
        features: [
          "16 hours admin support/month",
          "14 posts every 4 weeks",
          "Full content calendar",
          "Caption, hashtags & scheduling",
          "20 minutes daily engagement",
          "Weekly strategy calls",
          "Priority support",
        ],
        popular: true,
        hours: "16 hours",
        weekly: "4 hours per week",
        gradient: "from-rose/5 via-sage/5 to-rose/10",
        img: "https://plus.unsplash.com/premium_photo-1683769289724-17c7b6ab3258?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
};

// testimonials content 
const testimonials = [
  {
    name: "Mark Adiele", //client name
    role: "Founder of Markeb Media", //client role
    image: //client image
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150",
    quote:
      "Working with Macey has been an absolute pleasure. What really stands out is her remarkable adaptability - no matter the situation or challenge, she's able to adjust seamlessly while still maintaining the highest standards.", //review
  },
  {
    name: "Mark Adielee", //client name
    role: "Founder of Markeb Media", //client role
    image: //client image
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150",
    quote:
      "Communication is always clear, timely, and easy to follow, which makes the whole process smooth and stress-free. It's rare to find someone who combines such professionalism with genuine dedication, and Macey's Method delivers on every front", //review
  },
  {
    name: "Ruth Gilbey", //client name
    role: "Business Development Coach",   //client role
    image: //client image
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150",
    quote: //review
      "I've worked with several virtual assistants, but Macey's level of excellence is unmatched. She grasps complex projects immediately and executes flawlessly. Her proactive communication eliminates stress and uncertainty.",
  },
  {
    name: "Beth Kirk", //client name
    role: "LinkedIn Marketer & Trainer", //client role
    image: //client image
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150",
    quote: //review
      "Choosing Macey's Method was one of the best decisions for my business. She handles multiple priorities without dropping the ball. Communication is seamless, and her problem-solving abilities have saved me countless hours",
  },
];



export { categories, testimonials };
