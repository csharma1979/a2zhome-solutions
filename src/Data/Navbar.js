import {
  FaBath,
  FaSnowflake,
  FaBolt,
  FaThLarge,
  FaUtensils,
  FaHammer,
  FaShower,
  FaHome,
  FaSeedling,
  FaRoad,
  FaWarehouse,
  FaDoorClosed,
  FaWindowRestore,
  FaBoxes,
  FaBorderAll,
  FaBuilding,
  FaHotTub,
  FaPaintRoller,
  
} from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";

export const features = [
  {
    title: "Plumbing Service",
    link: "/plumbing",
    icon: <FaBath fontSize="large" />,
    description:
      "Leak repairs, pipe installations, and general plumbing maintenance.",
  },
  {
    title: "HVAC Services",
    link: "/hvac",
    icon: <FaSnowflake fontSize="large" />,
    description:
      "Heating, cooling, and ventilation solutions for a comfortable home.",
  },
  {
    title: "Electrical Services",
    link: "/electricals",
    icon: <FaBolt fontSize="large" />,
    description:
      "Safe and efficient electrical installations, repairs, and upgrades.",
  },
  {
    title: "Flooring Services",
    link: "/flooring",
    icon: <FaThLarge fontSize="large" />,
    description:
      "Professional installation and refinishing for all types of flooring.",
  },
  {
    title: "Kitchen & Bathroom Remodeling",
    link: "/countertop-kitchen-bath",
    icon: <FaUtensils fontSize="large" />,
    description:
      "Modern upgrades to enhance the look and functionality of your spaces.",
  },
  {
    title: "Roofing Services",
    link: "/roof",
    icon: <FaHammer fontSize="large" />,
    description: "Durable roofing installations, repairs, and maintenance.",
  },
  {
    title: "Shower Services",
    link: "/shower",
    icon: <FaShower fontSize="large" />,
    description: "Custom shower installations and bathroom enhancements.",
  },
  {
    title: "Digital Home Services",
    link: "/digital-home",
    icon: <FaHome fontSize="large" />,
    description: "Smart home automation, security, and digital solutions.",
  },
  {
    title: "Irrigation Services",
    link: "/irrigation",
    icon: <FaSeedling fontSize="large" />,
    description:
      "Efficient irrigation systems for healthy and lush landscapes.",
  },
  {
    title: "Driveway & Walkway Services",
    link: "/driveway-walkway",
    icon: <FaRoad fontSize="large" />,
    description:
      "Paved and decorative driveways and walkways for a welcoming entrance.",
  },
  {
    title: "Glass Services",
    link: "/glass",
    icon: <FaWarehouse fontSize="large" />,
    description: "Custom glass installations, repairs, and replacements.",
  },
  {
    title: "Door Services",
    link: "/doors",
    icon: <FaDoorClosed fontSize="large" />,
    description: "Installation and repair of interior and exterior doors.",
  },
  {
    title: "Window Services",
    link: "/windows",
    icon: <FaWindowRestore fontSize="large" />,
    description: "Energy-efficient window installations and repairs.",
  },
  {
    title: "Cabinet Services",
    link: "/cabinets",
    icon: <FaBoxes fontSize="large" />,
    description:
      "Custom cabinetry for kitchens, bathrooms, and storage spaces.",
  },
  {
    title: "Fence Services",
    link: "/fence",
    icon: <FaBorderAll fontSize="large" />,
    description:
      "Durable and stylish fencing solutions for privacy and security.",
  },
  {
    title: "Structural Services",
    link: "/structure",
    icon: <FaBuilding fontSize="large" />,
    description: "Structural inspections, reinforcements, and repairs.",
  },
  {
    title: "Water Heater Services",
    link: "/water-heater",
    icon: <FaHotTub fontSize="large" />,
    description:
      "Installation, repair, and maintenance of water heating systems.",
  },
  {
    title: "Painting Services",
    link: "/painting",
    icon: <FaPaintRoller fontSize="large" />,
    description: "Interior and exterior painting for a fresh and vibrant look.",
  },
];

export const navbarFeatures = [
  { title: "Plumbing", link: "/plumbing", icon: <FaBath /> },
  { title: "Flooring", link: "/flooring", icon: <FaThLarge /> },
  { title: "Structure", link: "/structure", icon: <FaBuilding /> },
  { title: "Fence", link: "/fence", icon: <FaBorderAll /> },
  { title: "Water Heater", link: "/water-heater", icon: <FaHotTub /> },
  { title: "HVAC", link: "/hvac", icon: <FaSnowflake /> },
  { title: "Shower", link: "/shower", icon: <FaShower /> },
  { title: "Cabinets", link: "/cabinets", icon: <FaBoxes /> },
  { title: "Painting", link: "/painting", icon: <FaPaintRoller /> },
  { title: "Electricals", link: "/electricals", icon: <FaBolt /> },
  { title: "Digital Home", link: "/digital-home", icon: <FaHome /> },
  { title: "Windows", link: "/windows", icon: <FaWindowRestore /> },
  { title: "Doors", link: "/doors", icon: <FaDoorClosed /> },
  { title: "Glass", link: "/glass", icon: <FaWarehouse /> },
  { title: "Roof", link: "/roof", icon: <FaHammer /> },
  { title: "Driveway/walkway", link: "/driveway-walkway", icon: <FaRoad /> },
  { title: "Irrigation", link: "/irrigation", icon: <FaSeedling /> },
  {
    title: "Kitchen/Bath",
    link: "/countertop-kitchen-bath",
    icon: < ImSpoonKnife />,
  },
];
