import { JobDetails } from "@/components/job-details"
import { JobDescription } from "@/components/job-description"
import { AdSection } from "@/components/ad-section"
import { JobListingsHeader } from "@/components/job-listings-header"
import { JobFooter } from "@/components/job-footer"

// Mock job data - in a real app, this would come from a database
const mockJobs = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    datePosted: "2 days ago",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description:
      "TechCorp Inc. is seeking a highly skilled Senior Frontend Developer to join our dynamic product team. In this role, you will take ownership of building and maintaining scalable, high-performance web applications that deliver exceptional user experiences. You will work closely with designers, backend engineers, and product managers to translate complex requirements into intuitive and visually appealing interfaces. As a senior member, you will play a key role in mentoring junior developers, reviewing code, and setting best practices for frontend development. If you are passionate about creating clean, maintainable code and staying at the forefront of modern frontend technologies, we’d love to hear from you.",
    requirements: [
      "5+ years of experience with React and TypeScript",
      "Strong understanding of modern web technologies",
      "Experience with state management libraries (Redux, Zustand)",
      "Familiarity with testing frameworks (Jest, Cypress)",
      "Bachelor's degree in Computer Science or related field",
    ],
    responsibilities: [
      "Develop and maintain high-quality web applications",
      "Collaborate with design and backend teams",
      "Optimize applications for maximum speed and scalability",
      "Mentor junior developers and conduct code reviews",
      "Stay up-to-date with emerging technologies",
    ],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health, dental, and vision insurance",
      "Flexible work arrangements and remote options",
      "Professional development budget",
      "401(k) with company matching",
    ],
  },
  {
    id: "2",
    title: "Backend Engineer",
    company: "CloudNova",
    location: "Remote",
    datePosted: "1 week ago",
    type: "Full-time",
    salary: "$110,000 - $140,000",
    description:
      "CloudNova is hiring a Backend Engineer to help us build the backbone of our cloud infrastructure platform. You will design, implement, and maintain robust APIs and services that power our applications. Working in an agile team, you will collaborate with frontend developers and DevOps engineers to ensure scalability, security, and performance. This role requires a passion for solving complex problems and the ability to work independently in a fast-paced environment.",
    requirements: [
      "4+ years of experience with Node.js, Python, or Go",
      "Proficiency in RESTful APIs and GraphQL",
      "Experience with relational and NoSQL databases",
      "Strong understanding of cloud services (AWS, GCP, or Azure)",
      "Knowledge of containerization (Docker, Kubernetes)",
    ],
    responsibilities: [
      "Develop and maintain backend services and APIs",
      "Design scalable database architectures",
      "Collaborate with cross-functional teams to deliver features",
      "Monitor and improve application performance",
      "Implement security and data protection best practices",
    ],
    benefits: [
      "Remote-first culture",
      "Health, dental, and vision insurance",
      "Generous PTO policy",
      "Learning and development stipend",
      "Equity options",
    ],
  },
  {
    id: "3",
    title: "UI/UX Designer",
    company: "PixelWorks Studio",
    location: "Austin, TX",
    datePosted: "3 days ago",
    type: "Full-time",
    salary: "$85,000 - $110,000",
    description:
      "PixelWorks Studio is seeking a creative and detail-oriented UI/UX Designer to craft engaging digital experiences for our clients. In this role, you’ll translate business requirements into user-friendly designs, wireframes, and prototypes. You’ll collaborate with developers to ensure smooth implementation of your designs and continuously refine them based on user feedback. If you are passionate about design systems, usability, and creating delightful products, this role is for you.",
    requirements: [
      "3+ years of experience in UI/UX design",
      "Proficiency with design tools (Figma, Sketch, Adobe XD)",
      "Strong portfolio showcasing web and mobile designs",
      "Knowledge of user-centered design principles",
      "Excellent communication and collaboration skills",
    ],
    responsibilities: [
      "Create wireframes, mockups, and prototypes",
      "Collaborate with product managers and developers",
      "Conduct user research and usability testing",
      "Maintain design consistency across products",
      "Contribute to building and evolving design systems",
    ],
    benefits: [
      "Flexible working hours",
      "Health and wellness programs",
      "Team-building retreats",
      "Creative work environment",
      "Professional growth opportunities",
    ],
  },
  {
    id: "4",
    title: "Data Scientist",
    company: "InsightAI",
    location: "New York, NY",
    datePosted: "5 days ago",
    type: "Full-time",
    salary: "$130,000 - $170,000",
    description:
      "InsightAI is looking for a Data Scientist to join our analytics team and help us uncover insights that drive product innovation and business growth. You will work with large datasets, build predictive models, and collaborate with engineers and product managers to turn data into actionable strategies. If you enjoy working with machine learning algorithms and have a strong statistical background, we want you on our team.",
    requirements: [
      "3+ years of experience as a Data Scientist",
      "Proficiency in Python or R for data analysis",
      "Strong skills in SQL and data manipulation",
      "Experience with machine learning frameworks (TensorFlow, scikit-learn, PyTorch)",
      "Background in statistics or applied mathematics",
    ],
    responsibilities: [
      "Analyze large datasets to extract insights",
      "Develop predictive and classification models",
      "Work closely with stakeholders to understand business needs",
      "Communicate findings through dashboards and reports",
      "Continuously improve data pipelines and workflows",
    ],
    benefits: [
      "Stock options",
      "Medical, dental, and vision coverage",
      "Company-sponsored conferences",
      "Flexible working policy",
      "Wellness programs",
    ],
  },
  {
    id: "5",
    title: "DevOps Engineer",
    company: "NextGen Systems",
    location: "Chicago, IL",
    datePosted: "4 days ago",
    type: "Full-time",
    salary: "$115,000 - $145,000",
    description:
      "NextGen Systems is hiring a DevOps Engineer to join our infrastructure team. You will be responsible for designing CI/CD pipelines, managing cloud infrastructure, and ensuring system reliability. The ideal candidate thrives in a collaborative environment and enjoys automating repetitive tasks to improve efficiency across teams.",
    requirements: [
      "3+ years of experience in DevOps or site reliability engineering",
      "Proficiency with CI/CD tools (Jenkins, GitHub Actions, GitLab CI)",
      "Experience with cloud platforms (AWS, Azure, GCP)",
      "Strong scripting skills (Bash, Python)",
      "Knowledge of Docker and Kubernetes",
    ],
    responsibilities: [
      "Build and maintain CI/CD pipelines",
      "Manage and monitor cloud infrastructure",
      "Automate deployment processes",
      "Collaborate with developers on performance tuning",
      "Ensure security and compliance of systems",
    ],
    benefits: [
      "Health and dental insurance",
      "401(k) with employer match",
      "Remote work flexibility",
      "Annual training allowance",
      "Paid parental leave",
    ],
  },
  {
    id: "6",
    title: "Mobile App Developer",
    company: "Appify Labs",
    location: "Seattle, WA",
    datePosted: "1 week ago",
    type: "Full-time",
    salary: "$95,000 - $130,000",
    description:
      "Appify Labs is searching for a Mobile App Developer to create intuitive, high-performance iOS and Android applications. You will collaborate with cross-functional teams to deliver features that delight users and meet business goals. This role requires strong coding skills, creativity, and attention to detail in order to bring mobile experiences to life.",
    requirements: [
      "2+ years of experience in mobile development",
      "Proficiency in React Native or Flutter",
      "Familiarity with native iOS/Android development",
      "Experience with REST APIs and third-party integrations",
      "Understanding of app store deployment processes",
    ],
    responsibilities: [
      "Develop and maintain mobile applications",
      "Collaborate with designers and product managers",
      "Ensure app performance and responsiveness",
      "Debug and fix issues across platforms",
      "Continuously improve development practices",
    ],
    benefits: [
      "Flexible schedule and remote options",
      "Medical and dental benefits",
      "Gym membership reimbursement",
      "Paid vacation and sick leave",
      "Career advancement opportunities",
    ],
  },
  {
    id: "7",
    title: "Full Stack Developer",
    company: "NovaTech",
    location: "Denver, CO",
    datePosted: "6 days ago",
    type: "Full-time",
    salary: "$105,000 - $140,000",
    description:
      "NovaTech is looking for a Full Stack Developer to build scalable web applications from end to end. You will work on both frontend and backend components, ensuring seamless integration and high performance. This position requires a problem solver who can adapt to different technologies and deliver high-quality software in an agile environment.",
    requirements: [
      "3+ years of experience in full stack development",
      "Proficiency in JavaScript, Node.js, and React",
      "Experience with databases (PostgreSQL, MongoDB)",
      "Knowledge of REST and GraphQL APIs",
      "Familiarity with cloud services",
    ],
    responsibilities: [
      "Design and implement web applications",
      "Work on frontend and backend components",
      "Collaborate with product and QA teams",
      "Write clean, maintainable, and testable code",
      "Participate in code reviews and team discussions",
    ],
    benefits: [
      "Competitive compensation",
      "Remote-friendly work culture",
      "Company-paid health coverage",
      "Learning and development budget",
      "Team outings and events",
    ],
  },
];


interface JobPageProps {
  params: {
    id: string
  }
}

export default function JobPage({ params }: JobPageProps) {
  // In a real app, you would fetch the job data based on the ID
  const job = mockJobs.find((j) => j.id === params.id) || mockJobs[0]

  return (
    <div className="min-h-screen bg-background">
      <JobListingsHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Job Details Section */}
            <JobDetails job={job} />

           

            {/* Job Description Section */}
            <JobDescription job={job} />

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Third Ad Section - Sidebar Top */}
            <div className="sticky top-4">
              <AdSection
                title="Get Job Alerts"
                description="Get notified when new jobs match your preferences."
                buttonText="Subscribe"
                variant="alerts"
              />
            </div>
          </div>
        </div>
      </main>

      <JobFooter />
    </div>
  )
}

// Generate metadata for SEO
export function generateMetadata({ params }: JobPageProps) {
  const job = mockJobs.find((j) => j.id === params.id) || mockJobs[0]

  return {
    title: `${job.title} at ${job.company} | Job Board`,
    description: `Apply for ${job.title} position at ${job.company} in ${job.location}. ${job.description.substring(0, 150)}...`,
  }
}
