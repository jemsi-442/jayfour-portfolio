import express from "express";

const router = express.Router();

let services = [
  { title: "Web Development", description: "Modern websites & apps" },
  { title: "Mobile Apps", description: "Cross-platform mobile solutions" },
  { title: "Cloud Solutions", description: "Scalable cloud infrastructure" },
  { title: "Cybersecurity", description: "Protect your digital assets" },
  { title: "Data Analytics", description: "Smart insights & reporting" },
  { title: "AI Solutions", description: "Automated intelligent systems" },
  { title: "eRITA Services", description: "Vyeti vya kuzaliwa na vifo" },
  { title: "BRELA Services", description: "Business Registration & Licensing" },
  { title: "NIDA Services", description: "National ID & Citizen Services" },
  { title: "TAUSI Services", description: "Pension & Social Security Solutions" },
  { title: "IMMIGRATION Services", description: "Visa & Migration Assistance" },
  { title: "HESLB & LORMS Services", description: "Student Loans & School Management" },
  { title: "TRA Services", description: "Tax Management & Compliance" },
];

// GET all services
router.get("/", (req, res) => {
  res.json(services);
});

// POST new service
router.post("/", (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: "All fields required" });
  }

  const newService = { title, description };
  services.unshift(newService);

  res.status(201).json(newService);
});

export default router;
