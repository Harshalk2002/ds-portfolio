import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center mb-12">
      <div className="inline-block bg-[#FFD93D] border-2 border-black px-6 py-3 -rotate-2 shadow-[4px_4px_0px_#000]">
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-3xl font-extrabold tracking-tight text-black">
          {children}
        </h2>
      </div>
    </div>
  );
}

function NeoCard({
  children,
  className = "",
  bg = "bg-white",
}: {
  children: React.ReactNode;
  className?: string;
  bg?: string;
}) {
  return (
    <Card
      className={`${bg} border-[3px] border-black shadow-[8px_8px_0px_#000] transition-all duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[10px_10px_0px_#000] ${className}`}
    >
      {children}
    </Card>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF7]">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-white min-h-screen flex items-center">
        <div className="absolute z-0 top-0 left-0 w-[50px] h-full bg-[#FF1E8E]" />
        <div className="absolute z-[1] top-[-10%] left-[120px] w-[200px] h-[130%] bg-[#00DFFC] rotate-[12deg] origin-top-left" />
        <div className="absolute z-0 top-[-10%] right-[-20px] w-[220px] h-[130%] bg-[#FFD93D] -rotate-[12deg] origin-top-right" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
          <div>
            <h1 className="whitespace-nowrap font-[family-name:var(--font-space-grotesk)] text-6xl md:text-7xl font-extrabold tracking-tight text-black mb-6">
              HARSHAL KAMBLE
            </h1>

            <div className="space-y-1">
              <p className="text-xl font-medium text-black">
                Data Scientist &bull; Analytics &bull; ML Engineering
              </p>
              <p className="text-xl font-medium text-black">
                (MS Data Science @ GSU)
              </p>
            </div>

            <div className="mt-8 max-w-md bg-white border-[3px] border-black shadow-[8px_8px_0px_#000] p-5">
              <p className="text-base leading-relaxed">
                Building production analytics, ML systems, and predictive
                models. AWS Certified AI Practitioner. MS Data Science @
                Georgia State.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-[#FF1E8E] text-white border-[3px] border-black shadow-[6px_6px_0px_#000] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] px-6 py-3 font-bold uppercase tracking-wide"
              >
                <a href="#projects">VIEW MY WORK</a>
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px]">
              <div
                className="animate-float w-full h-full rounded-[55%_45%_50%_50%/60%_40%_55%_45%] border-[8px] border-[#FF1E8E] overflow-hidden bg-gray-100"
                style={{ animation: "float 3s ease-in-out infinite" }}
              >
                <Image
                  src="/photo.jpg"
                  alt="Harshal Kamble"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              <div
                className="animate-float absolute -top-2 -left-2 w-14 h-14 rounded-full bg-[#00DFFC] border-[3px] border-black flex items-center justify-center text-2xl shadow-[4px_4px_0px_#000] rotate-[-8deg]"
                style={{ animation: "float 3s ease-in-out infinite" }}
              >
                💼
              </div>
              <div
                className="animate-float absolute -top-2 -right-2 w-14 h-14 rounded-full bg-[#FFD93D] border-[3px] border-black flex items-center justify-center text-2xl shadow-[4px_4px_0px_#000] rotate-[12deg]"
                style={{ animation: "float 3.5s ease-in-out infinite 0.5s" }}
              >
                🚀
              </div>
              <div
                className="animate-float absolute top-1/2 -translate-y-1/2 -left-6 w-12 h-12 rounded-full bg-[#B4FF00] border-[3px] border-black flex items-center justify-center text-xl shadow-[4px_4px_0px_#000] rotate-[-5deg]"
                style={{ animation: "float 4s ease-in-out infinite 1s" }}
              >
                ⚡
              </div>

              <div className="flex flex-col items-end gap-2 mt-6">
                <span className="inline-block bg-[#00DFFC] border-2 border-black px-4 py-2 text-sm font-bold shadow-[3px_3px_0px_#000]">
                  ✨ Open to opportunities
                </span>
                <span className="inline-block bg-[#FFD93D] border-2 border-black px-4 py-2 text-sm font-bold shadow-[3px_3px_0px_#000]">
                  📍 Atlanta, GA
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT_ME ===== */}
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <SectionHeader>ABOUT_ME</SectionHeader>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <NeoCard bg="bg-[#FFD93D]" className="rotate-[-1deg]">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-xl font-extrabold">
                  🎓 Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-bold text-lg">Georgia State University</p>
                <p className="text-sm mt-1">MS Data Science &amp; Analytics</p>
                <p className="text-sm">GPA 3.97 / 4.0</p>
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-xs mt-2 font-bold">
                  2024 - 2025
                </p>
              </CardContent>
            </NeoCard>

            <NeoCard bg="bg-[#00DFFC]" className="rotate-[1deg]">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-xl font-extrabold">
                  💼 Current Role
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-bold text-lg">Amazon</p>
                <p className="text-sm mt-1">Business Analyst II</p>
                <p className="text-sm">Atlanta, GA</p>
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-xs mt-2 font-bold">
                  Mar 2026 - Present
                </p>
              </CardContent>
            </NeoCard>

            <NeoCard bg="bg-[#FF1E8E]" className="rotate-[-1deg] text-white">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-xl font-extrabold text-white">
                  📊 Builder
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-bold text-lg">Production Dashboards</p>
                <p className="text-sm mt-1">BI Systems &amp; ETL Pipelines</p>
                <p className="text-sm">150+ Sites at Amazon</p>
              </CardContent>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* ===== WORK_I'M_PROUD_OF ===== */}
      <section className="px-4 py-16 md:py-20 bg-[#F5F0E8]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader>WORK_I&apos;M_PROUD_OF</SectionHeader>

          <NeoCard bg="bg-white" className="mb-8">
            <CardContent className="pt-6">
              <p className="text-xl md:text-2xl font-bold leading-relaxed font-[family-name:var(--font-space-grotesk)] text-center">
                &ldquo;I love turning messy data into decisions. The best
                analytics work is invisible &mdash; it just makes the right
                answer obvious.&rdquo;
              </p>
            </CardContent>
          </NeoCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NeoCard bg="bg-[#FF1E8E]" className="text-white">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-xl font-extrabold text-white">
                  💡 Core Principle
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed">
                  &ldquo;Good data analysis isn&apos;t about more dashboards.
                  It&apos;s about finding the one number leadership needs to
                  make a call.&rdquo;
                </p>
              </CardContent>
            </NeoCard>

            <NeoCard bg="bg-black" className="text-white border-black">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-xl font-extrabold text-white">
                  🎯 What Drives Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-base">
                  <li>&bull; Clarity over complexity</li>
                  <li>&bull; Business impact &gt; model accuracy</li>
                  <li>&bull; Self-service tools</li>
                  <li>&bull; Insight at scale</li>
                </ul>
              </CardContent>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <SectionHeader>PROJECTS</SectionHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                color: "#FF1E8E",
                emoji: "\u26A1",
                title: "ResumeAI Pro",
                subtitle: "Solo Build, LIVE",
                desc: "Built this solo after watching too many friends get filtered out by ATS systems. It rewrites resumes for keyword matching using GPT-4 and a custom scoring engine. Hundreds of grads have used it to land interviews at FAANG and finance firms.",
                tags: ["PYTHON", "FASTAPI", "OPENAI", "RAILWAY"],
                url: "https://resume-ai-pro-production.up.railway.app",
                linkLabel: "View Live",
              },
              {
                color: "#00DFFC",
                emoji: "\uD83D\uDEE1\uFE0F",
                title: "Credit Card Fraud Detection",
                subtitle: "Real-Time ML Pipeline",
                desc: "Real-time ML pipeline that catches fraudulent credit card transactions on a brutally imbalanced dataset where fraud is 1 in 99. Used SMOTE rebalancing and an XGBoost ensemble hitting 80% recall and 85% precision. Caught 1,200 fraud cases worth around 30M in savings.",
                tags: ["PYTHON", "XGBOOST", "SMOTE", "ML"],
                url: "https://github.com/Harshalk2002/Real-Time-Credit-Card-Fraud-Detection-using-Machine-Learning",
                linkLabel: "View Project",
              },
              {
                color: "#FFD93D",
                emoji: "\uD83C\uDF93",
                title: "GSU Official ChatBot",
                subtitle: "RAG, Production",
                desc: "RAG-powered chatbot built for Georgia State students. Answers questions about courses, professors, deadlines, and campus services using LangChain over the official course catalog. No human intervention needed, used by hundreds of students every week.",
                tags: ["LANGCHAIN", "RAG", "OPENAI", "NLP"],
                url: "https://github.com/Harshalk2002/GENAI_003_PROJECT_02",
                linkLabel: "View Project",
              },
              {
                color: "#B4FF00",
                emoji: "\uD83E\uDDE0",
                title: "ChatDesk AI",
                subtitle: "Python Desktop App",
                desc: "Python desktop client for ChatGPT built with Tkinter and CustomTkinter. Has model switching, session history, and optional text-to-speech using the OpenAI Chat Completions API. Built it because I wanted a faster local interface than the browser.",
                tags: ["PYTHON", "TKINTER", "OPENAI API", "TTS"],
                url: "https://github.com/Harshalk2002/ChatDesk-AI",
                linkLabel: "View Project",
              },
              {
                color: "#B19CD9",
                emoji: "\uD83E\uDD16",
                title: "Deep Learning and RL Strategy",
                subtitle: "Image Classification + RL Agent",
                desc: "Two-part project. First half trains a deep learning model on image classification tasks. Second half builds a reinforcement learning agent that learns optimal strategies through trial and error. Good practice for combining supervised and RL paradigms in one workflow.",
                tags: ["PYTORCH", "DEEP LEARNING", "RL", "COMPUTER VISION"],
                url: "https://github.com/Harshalk2002/Image-Based-DeepLearning-and-RL",
                linkLabel: "View Project",
              },
              {
                color: "#FF1E8E",
                emoji: "\uD83D\uDCCA",
                title: "Shipping Analytics Dashboard",
                subtitle: "Power BI, 2024 Data",
                desc: "Interactive Power BI dashboard covering 2024 shipping data across carriers, methods, regions, and pack types. Shows cost breakdowns, delivery time patterns, and carrier reliability scores. Built to help logistics teams pick the right carrier mix per region.",
                tags: ["POWER BI", "DAX", "SQL", "ETL"],
                url: "https://github.com/Harshalk2002/Shipping-data-DASHBOARD-",
                linkLabel: "View Project",
              },
            ].map((project) => {
              const cardContent = (
                <NeoCard key={project.title} bg="bg-white" className="overflow-hidden h-full flex flex-col cursor-pointer">
                  <div
                    className="h-3 w-full"
                    style={{ backgroundColor: project.color }}
                  />
                  <CardHeader className="relative">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-full border-[3px] border-black flex items-center justify-center text-2xl shrink-0"
                        style={{ backgroundColor: project.color }}
                      >
                        {project.emoji}
                      </div>
                      <div>
                        <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-lg font-extrabold">
                          {project.title}
                        </CardTitle>
                        <p className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-bold text-black/60">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-sm leading-relaxed mb-4">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] font-bold bg-[#FFD93D] text-black border-2 border-black px-2 py-0.5"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <p className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-bold mt-auto pt-4 group-hover:text-[#FF1E8E] group-hover:underline">
                      {project.linkLabel} →
                    </p>
                  </CardContent>
                </NeoCard>
              );

              return (
                <a key={project.title} href={project.url} target="_blank" rel="noopener noreferrer" className="group h-full">
                  {cardContent}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== WORK_EXPERIENCE ===== */}
      <section id="experience" className="px-4 py-16 md:py-20 bg-[#F5F0E8]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader>WORK_EXPERIENCE</SectionHeader>
          <div className="space-y-8">
            {[
              {
                company: "Amazon",
                role: "Business Analyst II",
                location: "Atlanta, GA",
                date: "March 2026 \u2013 Present",
                subcategories: [
                  {
                    emoji: "📊",
                    name: "Business Intelligence & Reporting",
                    bullets: [
                      "Owned end-to-end BI for $67MM Relay Safety Rewards program \u2014 7+ ETL pipelines, 3 QuickSight dashboards, daily feeds to 24K+ carriers",
                      "Re-engineered legacy SQL pipeline (88min \u2192 23min, 74% faster), stabilizing dashboards for 50+ stakeholders",
                      "Standardized 8+ core performance metrics with product + operations leaders, reducing insight delivery 2 days \u2192 under 1 hour",
                    ],
                    tech: "SQL, Python, QuickSight, AWS Redshift, ETL",
                  },
                  {
                    emoji: "🤝",
                    name: "Cross-Functional Stakeholder Partnership",
                    bullets: [
                      "Partnered with PMs, SDEs, and Finance to define data elements, SLAs, and metric ownership across 50+ teams",
                      "Designed self-service QuickSight dashboards reducing ad-hoc analyst requests by 70%",
                      "Built GenAI deep-dive workflows cutting insight time from days to under an hour",
                    ],
                    tech: "QuickSight, SQL, Stakeholder Management, GenAI",
                  },
                ],
              },
              {
                company: "Georgia State University",
                role: "Data Scientist",
                location: "Atlanta, GA",
                date: "Aug 2024 \u2013 Dec 2025",
                subcategories: [
                  {
                    emoji: "📈",
                    name: "Predictive Modeling & Forecasting",
                    bullets: [
                      "Built predictive models for clinical workflows achieving 85% accuracy across 5 service lines",
                      "Improved data quality 40% through SQL feature engineering and consolidation of 5+ operational data sources",
                      "Reduced reporting cycles 35% via automated analytics dashboards and SQL pipelines",
                    ],
                    tech: "Python, SQL, scikit-learn, XGBoost, Power BI",
                  },
                  {
                    emoji: "🧠",
                    name: "LLM & NLP Analytics",
                    bullets: [
                      "Fine-tuned LLMs (LLaMA-2, Mistral, GPT-3.5) on 50,000+ records, improving accuracy 36% \u2192 77%",
                      "Built NLP pipelines for automated complaint classification, achieving 81% semantic accuracy",
                      "Designed eval frameworks with golden test sets and LLM-as-judge for production model validation",
                    ],
                    tech: "PyTorch, Hugging Face, LangChain, Pinecone",
                  },
                ],
              },
              {
                company: "Amazon",
                role: "Business Intelligence Engineer Intern",
                location: "Dallas, TX",
                date: "May 2025 \u2013 Aug 2025",
                techStack: "SQL, Python, AWS Redshift, Airflow, Tableau",
                bullets: [
                  "Built high-performance SQL pipelines using recursive CTEs and window functions across 150+ sites, improving analytics performance by 40%",
                  "Automated real-time data workflows shifting refresh cadence to 4x daily, cutting decision latency 80%",
                  "Integrated forecasting and anomaly detection models into BI dashboards, generating 2-week advance signals",
                  "Partnered with product + ops teams on agile sprints, code reviews, and analytics on-call rotation",
                ],
              },
              {
                company: "TDK Electronics",
                role: "Data Analyst",
                location: "Bengaluru, India",
                date: "Jul 2023 \u2013 Jul 2024",
                techStack: "Python, SQL, Power BI, PyTorch, Airflow",
                bullets: [
                  "Built data pipelines and dashboards for 80+ business units, improving resource allocation efficiency by 20%",
                  "Engineered demand forecasting models (PyTorch, XGBoost, ARIMA), achieving 15% lift in opportunity identification",
                  "Designed Power BI dashboards with DAX measures + Redshift integration via RLS",
                  "Orchestrated SQL/Python ETL jobs in Airflow, reducing pipeline failures by 45%",
                ],
              },
            ].map((job, i) => (
              <NeoCard key={i} bg="bg-white">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div>
                      <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-xl font-extrabold">
                        {job.company}
                      </CardTitle>
                      <p className="font-[family-name:var(--font-jetbrains-mono)] text-sm font-bold mt-1 text-[#FF1E8E]">
                        {job.role}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 shrink-0">
                      <span className="inline-block bg-[#FFD93D] border-2 border-black px-3 py-1 text-xs font-bold font-[family-name:var(--font-jetbrains-mono)]">
                        {job.location}
                      </span>
                      <span className="inline-block bg-[#FFD93D] border-2 border-black px-3 py-1 text-xs font-bold font-[family-name:var(--font-jetbrains-mono)]">
                        {job.date}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="border-t border-black/10 my-0 mb-4" />
                  {"subcategories" in job && job.subcategories ? (
                    <div className="space-y-6">
                      {job.subcategories.map((sub, j) => (
                        <div key={j}>
                          <span className="inline-block bg-[#00DFFC] border-[3px] border-black px-4 py-2 font-bold text-sm shadow-[3px_3px_0px_#000] -rotate-1 mb-3">
                            {sub.emoji} {sub.name}
                          </span>
                          <ul className="space-y-2 mt-2">
                            {sub.bullets.map((bullet, k) => (
                              <li key={k} className="flex items-start gap-2 text-sm leading-relaxed">
                                <span className="text-[#FF1E8E] font-bold shrink-0 mt-0.5">▸</span>
                                {bullet}
                              </li>
                            ))}
                          </ul>
                          <p className="text-xs font-bold mt-3">
                            Tech Stack:{" "}
                            <span className="font-[family-name:var(--font-jetbrains-mono)]">
                              {sub.tech}
                            </span>
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      <ul className="space-y-2">
                        {("bullets" in job ? job.bullets : []).map((bullet, k) => (
                          <li key={k} className="flex items-start gap-2 text-sm leading-relaxed">
                            <span className="text-[#FF1E8E] font-bold shrink-0 mt-0.5">▸</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      {"techStack" in job && (
                        <p className="text-xs font-bold mt-4">
                          Tech Stack:{" "}
                          <span className="font-[family-name:var(--font-jetbrains-mono)]">
                            {job.techStack}
                          </span>
                        </p>
                      )}
                    </>
                  )}
                </CardContent>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EDUCATION ===== */}
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <SectionHeader>EDUCATION</SectionHeader>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <NeoCard bg="bg-[#FFD93D]" className="rotate-[-1deg]">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-xl font-extrabold">
                  🎓 Georgia State University
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-bold text-lg">MS Data Science &amp; Analytics</p>
                <p className="text-sm mt-1">GPA 3.97 / 4.0</p>
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-xs mt-2 font-bold">
                  Aug 2024 – Dec 2025
                </p>
              </CardContent>
            </NeoCard>

            <NeoCard bg="bg-[#00DFFC]" className="rotate-[1deg]">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-xl font-extrabold">
                  📜 MIT School of Distance Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-bold text-lg">PG Certificate in Business Analytics</p>
                <p className="text-sm mt-1">GPA 4.0 / 4.0</p>
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-xs mt-2 font-bold">
                  2023 – 2024
                </p>
              </CardContent>
            </NeoCard>

            <NeoCard bg="bg-[#FF1E8E]" className="rotate-[-1deg] text-white">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-xl font-extrabold text-white">
                  🎓 Pune University
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-bold text-lg">Bachelor&apos;s in Computer Science</p>
                <p className="text-sm mt-1">GPA 3.8 / 4.0</p>
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-xs mt-2 font-bold">
                  2020 – 2023
                </p>
              </CardContent>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section className="px-4 py-16 md:py-20 bg-[#F5F0E8]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader>CERTIFICATIONS</SectionHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NeoCard bg="bg-white">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-xl font-extrabold">
                  ☁️ AWS Certified AI Practitioner
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-sm font-bold">
                  Sep 2025 – Sep 2028
                </p>
              </CardContent>
            </NeoCard>

            <NeoCard bg="bg-white">
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)] text-xl font-extrabold">
                  📊 Microsoft Certified Data Analyst Associate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-bold mb-1">Power BI</p>
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-sm font-bold">
                  Oct 2024 – Oct 2026
                </p>
              </CardContent>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* ===== TECH_STACK ===== */}
      <section className="px-4 py-16 md:py-20 bg-[#B4FF00]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader>TECH_STACK</SectionHeader>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "SQL", bg: "bg-[#FFD93D]" },
              { label: "PYTHON", bg: "bg-[#00DFFC]" },
              { label: "R", bg: "bg-white" },
              { label: "TABLEAU", bg: "bg-[#FF1E8E] text-white" },
              { label: "POWER BI", bg: "bg-[#FFD93D]" },
              { label: "QUICKSIGHT", bg: "bg-[#B19CD9]" },
              { label: "AWS REDSHIFT", bg: "bg-[#00DFFC]" },
              { label: "SNOWFLAKE", bg: "bg-white" },
              { label: "DATABRICKS", bg: "bg-[#FFD93D]" },
              { label: "AIRFLOW", bg: "bg-[#FF1E8E] text-white" },
              { label: "DBT", bg: "bg-[#B19CD9]" },
              { label: "PYTORCH", bg: "bg-[#00DFFC]" },
              { label: "TENSORFLOW", bg: "bg-white" },
              { label: "XGBOOST", bg: "bg-[#FFD93D]" },
              { label: "SCIKIT-LEARN", bg: "bg-[#FF1E8E] text-white" },
              { label: "LANGCHAIN", bg: "bg-[#B19CD9]" },
              { label: "HUGGING FACE", bg: "bg-[#00DFFC]" },
              { label: "AWS SAGEMAKER", bg: "bg-white" },
              { label: "EXCEL", bg: "bg-[#FFD93D]" },
              { label: "DAX", bg: "bg-[#00DFFC]" },
            ].map((tech) => (
              <span
                key={tech.label}
                className={`${tech.bg} font-[family-name:var(--font-jetbrains-mono)] text-sm font-bold px-4 py-2 border-[3px] border-black shadow-[4px_4px_0px_#000] inline-block whitespace-nowrap`}
              >
                {tech.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GET_IN_TOUCH ===== */}
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <SectionHeader>GET_IN_TOUCH</SectionHeader>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="https://linkedin.com/in/harshal-kamble-428b201b3"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <NeoCard bg="bg-[#00DFFC]" className="text-center aspect-square flex items-center justify-center">
                <CardContent className="flex flex-col items-center justify-center h-full gap-2">
                  <span className="text-4xl">💼</span>
                  <p className="font-[family-name:var(--font-space-grotesk)] text-lg font-extrabold">
                    LinkedIn
                  </p>
                  <p className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-bold">
                    @harshal-kamble-428b201b3
                  </p>
                </CardContent>
              </NeoCard>
            </a>

            <a
              href="https://github.com/Harshalk2002"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <NeoCard bg="bg-[#B19CD9]" className="text-center aspect-square flex items-center justify-center">
                <CardContent className="flex flex-col items-center justify-center h-full gap-2">
                  <span className="text-4xl">💻</span>
                  <p className="font-[family-name:var(--font-space-grotesk)] text-lg font-extrabold">
                    GitHub
                  </p>
                  <p className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-bold">
                    @Harshalk2002
                  </p>
                </CardContent>
              </NeoCard>
            </a>

            <a href="mailto:harshalkamble2511@gmail.com" className="block">
              <NeoCard bg="bg-[#FFD93D]" className="text-center aspect-square flex items-center justify-center">
                <CardContent className="flex flex-col items-center justify-center h-full gap-2">
                  <span className="text-4xl">📧</span>
                  <p className="font-[family-name:var(--font-space-grotesk)] text-lg font-extrabold">
                    Email
                  </p>
                  <p className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-bold break-all">
                    harshalkamble2511@gmail.com
                  </p>
                </CardContent>
              </NeoCard>
            </a>

            <a
              href="https://x.com/HarshalK2002"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <NeoCard bg="bg-[#FF1E8E]" className="text-center text-white aspect-square flex items-center justify-center">
                <CardContent className="flex flex-col items-center justify-center h-full gap-2">
                  <span className="text-4xl">🐦</span>
                  <p className="font-[family-name:var(--font-space-grotesk)] text-lg font-extrabold">
                    X / Twitter
                  </p>
                  <p className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-bold">
                    @HarshalK2002
                  </p>
                </CardContent>
              </NeoCard>
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t-[3px] border-black bg-white px-4 py-8">
        <p className="text-center font-[family-name:var(--font-jetbrains-mono)] text-sm font-bold">
          &copy; 2026 Harshal Kamble &bull; Atlanta, GA &bull; Built with
          NeoBrutalism ⚡
        </p>
      </footer>
    </div>
  );
}
