"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { Separator } from "../components/ui/separator";
import {
  ExternalLink,
  Download,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
} from "lucide-react";
import resumeImage from "figma:asset/c17f10f88369945d2828f45ce290b1938c1758fe.png";
import {
  CLOZER_LINK,
  CLOZER_LINKEDIN_LINK,
  CODEAVENUE_LINK,
  DADE_AUCTION_LINK,
  GITHUB_LINK,
  LUMIRX_LINK,
  STEXITY_LINK,
  TRAKKER_LINK,
  USTAFF360_LINK,
} from "@/constants";

interface Project {
  name: string;
  period: string;
  description: string;
  technologies: string[];
  details: string;
  links?: { name: string; url: string }[];
}

interface Experience {
  title: string;
  company: string;
  period: string;
  type: string;
  description: string;
  linkedinUrl: string;
}

const InteractivePortfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const skills = {
    frontend: [
      "React JS",
      "Next JS",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
    backend: [
      "Firebase",
      "React Router",
      "React Hooks",
      "React Redux",
      "Redux Saga",
    ],
    ui: ["Shadcn UI", "Styled Components", "Ant Design", "Material UI"],
    tools: [
      "Git",
      "GitHub",
      "GitLab",
      "SASS",
      "Algolia Search",
      "dnd kit",
      "React Query",
      "Recharts",
    ],
  };

  const projects: Project[] = [
    {
      name: "Clozer (Web App)",
      period: "06/2023 - 05/2024",
      description:
        "Web app that enables users to support various local talent...",
      technologies: ["React JS", "TypeScript", "Next JS", "Tailwind CSS"],
      details:
        "A comprehensive platform that enables users to support various local talent and artists. Users can make their own platforms to advertise their talent, tracks and news to fans. Music artists can customize their main page and add latest releases, and other stuff related to their career.",
      links: [{ name: "Live Site", url: CLOZER_LINK }],
    },
    {
      name: "Dade Auctions (Web App)",
      period: "06/2022 - 04/2023",
      description:
        "Web application where users can buy/sell/auction products...",
      technologies: ["React JS", "JavaScript", "Firebase"],
      details:
        "A full-featured auction platform where users can buy/sell/auction products. The app uses Firebase for cloud storage and Firestore database, with all transactions being handled from backend. Users can place bids on products and view products sold by other users. User can create their own products and has access to dashboard where they can view products sales.",
      links: [{ name: "Live Site", url: DADE_AUCTION_LINK }],
    },
    {
      name: "Trakker Applications (Web Apps)",
      period: "05/2021 - 06/2022",
      description:
        "Used React JS, React Redux to make and maintain several accounting web applications...",
      technologies: ["React JS", "React Redux", "Firebase", "Ant Design"],
      details:
        "A suite of accounting web applications including EscrowTrakker for landlord, EscrowTrakker for lawyers and Invoice4Business for invoices and add transactions in respective bank accounts. Redux Saga was implemented to receive and send data to backend, while Ant Design was primarily used for components related to the designs of the screens.",
      links: [{ name: "Live Site", url: TRAKKER_LINK }],
    },
  ];

  const experiences: Experience[] = [
    {
      title: "Frontend Developer",
      company: "Ustaff360",
      period: "08/2024 - Present",
      type: "Remote",
      description:
        "Development of Web applications through the tech stack of Next JS, TypeScript, React JS, HTML, CSS, SCSS etc.",
      linkedinUrl: USTAFF360_LINK,
    },
    {
      title: "Frontend Developer",
      company: "LumiRx",
      period: "01/2024 - 07/2024",
      type: "Remote",
      description:
        "Development of Web applications through the tech stack of React JS, HTML, CSS, SCSS, React Redux etc.",
      linkedinUrl: LUMIRX_LINK,
    },
    {
      title: "Frontend Developer",
      company: "Clozer",
      period: "06/2023 - 05/2024",
      type: "Remote",
      description:
        "Development of Web applications through the tech stack of Next JS, TypeScript, React JS and Firebase.",
      linkedinUrl: CLOZER_LINKEDIN_LINK,
    },
    {
      title: "Software Engineer",
      company: "Stexity",
      period: "06/2021 - 07/2023",
      type: "Hybrid",
      description:
        "Web Application Development through the use of React JS, TypeScript, Next JS, Firebase.",
      linkedinUrl: STEXITY_LINK,
    },
    {
      title: "Junior Software Engineer",
      company: "Code Avenue",
      period: "03/2021 - 06/2022",
      type: "Onsite",
      description:
        "Development of Web Applications using React JS, Creating Reusable App Components and Making use of React Hooks.",
      linkedinUrl: CODEAVENUE_LINK,
    },
  ];

  const handleDownloadResume = () => {
    window.open("Safeer_Humayoon-Resume.pdf", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Section */}
        <Card className="overflow-hidden">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <h1 className="text-4xl mb-2">Safeer Humayoon</h1>
                <p className="text-xl text-slate-300 mb-6">Software Engineer</p>
                <p className="text-slate-200 leading-relaxed max-w-2xl">
                  Frontend Developer with over 4+ years of experience. Finished
                  my BSCS at Bahria University. I am motivated in solving
                  programming problems and learning about the various aspects of
                  programming in general. Experienced with stages of the
                  development cycle for dynamic web projects.
                </p>

                <div className="flex flex-wrap gap-6 mt-6">
                  <a href="mailto:safeerhumayoon@gmail.com">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>safeerhumayoon@gmail.com</span>
                    </div>
                  </a>
                  <a href="tel:+923099825078">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>+92 3099825078</span>
                    </div>
                  </a>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Karachi, Pakistan</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      window.open(
                        "https://linkedin.com/in/safeer-humayoon-8149101a8",
                        "_blank"
                      )
                    }
                    className="text-white border-white bg-white text-slate-900"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(GITHUB_LINK, "_blank")}
                    className="text-white border-white bg-white text-slate-900"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>

                  <Button
                    onClick={handleDownloadResume}
                    className="bg-slate-800 hover:bg-slate-700"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </div>

              <div className="flex justify-center w-full sm:w-auto">
                <Avatar className="w-32 h-32 border-4 border-white shadow-xl">
                  <AvatarImage
                    src={"/Picture.png"}
                    alt="Safeer Humayoon"
                    className="object-cover"
                  />
                  <AvatarFallback>SH</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Skills Section */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="mb-2 text-slate-600">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 text-slate-600">
                    Backend & State Management
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 text-slate-600">UI Libraries</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.ui.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 text-slate-600">Tools & Others</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4>Bachelor of Computer Science</h4>
                  <p className="text-slate-600">
                    Bahria University Karachi Campus
                  </p>
                  <p className="text-sm text-slate-500">
                    01/2017 - 01/2021 • Karachi, Pakistan
                  </p>
                </div>
                <Separator />
                <div>
                  <h4>A levels</h4>
                  <p className="text-slate-600">Private</p>
                  <p className="text-sm text-slate-500">
                    05/2015 - 10/2016 • Karachi, Pakistan
                  </p>
                </div>
                <Separator />
                <div>
                  <h4>O Levels</h4>
                  <p className="text-slate-600">Falconhouse Grammar School</p>
                  <p className="text-sm text-slate-500">
                    05/2012 - 05/2013 • Karachi, Pakistan
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card>
              <CardHeader>
                <CardTitle>Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>English</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className="w-3 h-3 rounded-full bg-slate-800"
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Urdu</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className="w-3 h-3 rounded-full bg-slate-800"
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Projects and Experience */}
          <div className="lg:col-span-2 space-y-8">
            {/* Projects Section */}
            <Card>
              <CardHeader>
                <CardTitle>Projects Developed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-3 flex-col sm:flex-row">
                        <h4>{project.name}</h4>
                        <span className="text-sm text-slate-500">
                          {project.period}
                        </span>
                      </div>
                      <p className="text-slate-600 mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            View Details{" "}
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>{project.name}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <p className="text-slate-600">{project.details}</p>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                            {project.links && (
                              <div className="flex gap-2">
                                {project.links.map((link, linkIndex) => (
                                  <Button
                                    key={linkIndex}
                                    variant="outline"
                                    size="sm"
                                    onClick={() =>
                                      window.open(link.url, "_blank")
                                    }
                                  >
                                    <ExternalLink className="w-3 h-3 mr-1" />
                                    {link.name}
                                  </Button>
                                ))}
                              </div>
                            )}
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Work Experience */}
            <Card>
              <CardHeader>
                <CardTitle>Work Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4>{exp.title}</h4>
                          <Button
                            variant="link"
                            className="p-0 h-auto text-blue-600 hover:text-blue-800"
                            onClick={() =>
                              window.open(exp.linkedinUrl, "_blank")
                            }
                          >
                            {exp.company}{" "}
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </Button>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-slate-600">{exp.period}</p>
                          <Badge variant="outline" className="text-xs">
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-slate-600">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractivePortfolio;
