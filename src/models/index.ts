export type Job = {
  company: string;
  contract: "Contract" | "Full Time" | "Part Time";
  featured: boolean;
  id: number;
  languages: string[];
  level: "Junior" | "Midweight" | "Senior";
  location: string;
  logo: string;
  new: boolean;
  position: string;
  postedAt: string;
  role: "Backend" | "Frontend" | "Fullstack";
  tools: string[];
};
