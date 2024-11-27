import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

interface TimelineItemProps {
  date: string;
  title: string;
  company: string;
  description: string[];
  type: 'work' | 'education';
}

const TimelineItem = ({ date, title, company, description, type }: TimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-12 sm:pl-32 py-6 group"
    >
      {/* Line */}
      <div className="absolute top-0 left-8 sm:left-20 h-full w-[2px] bg-gradient-to-b from-secondary to-accent" />
      
      {/* Dot */}
      <div className="absolute left-[30px] sm:left-[78px] h-4 w-4 rounded-full bg-secondary group-hover:bg-accent transition-colors duration-300">
        <div className="absolute left-[-4px] top-[-4px] h-6 w-6 rounded-full border-2 border-secondary group-hover:border-accent transition-colors duration-300" />
      </div>

      {/* Icon */}
      <div className="absolute left-[20px] sm:left-[68px] top-7 p-2 rounded-full bg-primary text-white">
        {type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
      </div>

      {/* Content */}
      <div className="flex flex-col sm:flex-row items-start mb-1">
        <time className="text-sm text-gray-500 mb-2 sm:mb-0 sm:absolute sm:left-0 sm:w-[72px] sm:text-right sm:pr-8">
          {date}
        </time>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-lg text-gray-600 mb-2">{company}</p>
          {description.length > 0 && (
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {description.map((item, index) => (
                <li key={index} className="text-base">{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  const experiences = [
    {
      date: "Jul 2022 - Present",
      title: "Founder & CEO",
      company: "Zaida Agri-Solutions",
      type: "work" as const,
      description: [
        "Spearheaded mission and vision alignment focusing on regenerative agriculture and waste management",
        "Established learning framework to train youth-led enterprises in regenerative practices",
        "Integrated SDGs into operational goals, ensuring measurable impacts in food systems",
        "Reached 150+ farmers through innovative agricultural training"
      ]
    },
    {
      date: "Dec 2021 - Apr 2024",
      title: "Project Manager & Strategic Consultant",
      company: "Optifluence Limited",
      type: "work" as const,
      description: [
        "Built comprehensive impact tracking system increasing measurable project outcomes by 200%",
        "Designed and implemented impact measurement system for 1,800+ change-makers",
        "Developed network analysis tools to optimize collaboration",
        "Created scalable framework for assessing intervention effectiveness"
      ]
    },
    {
      date: "Jan 2020 - Jun 2020",
      title: "Regional Marketing Manager",
      company: "Apollo Agriculture",
      type: "work" as const,
      description: [
        "Developed evidence-based marketing strategies for rural communities",
        "Implemented rapid iteration methodology for testing multiple intervention channels",
        "Built resilient systems for agricultural support during COVID-19 crisis",
        "Created scalable framework for rural technology adoption"
      ]
    },
    {
      date: "Apr 2017 - May 2019",
      title: "Innovations Associate & Regional Monitoring Manager",
      company: "Educate!",
      type: "work" as const,
      description: [
        "Designed fail-fast innovation framework reducing project iteration time by 40%",
        "Created automated data collection and analysis systems across three countries",
        "Developed evidence-based approach to program scaling and replication"
      ]
    },
    {
      date: "Mar 2014 - Feb 2017",
      title: "Project Manager",
      company: "GiveDirectly",
      type: "work" as const,
      description: [
        "Scaled operations 26x, distributing $30M to 26,000 families",
        "Achieved 99% enrollment rate through systematic process optimization",
        "Implemented data-driven monitoring systems using Tableau and Jira",
        "Developed scalable operational procedures enabling rapid regional expansion"
      ]
    },
    {
      date: "2024",
      title: "Bachelor of Science (Information Technology)",
      company: "KCA University",
      type: "education" as const,
      description: []
    },
    {
      date: "2009",
      title: "Diploma (Information Technology)",
      company: "Jomo Kenyatta University of Agriculture & Technology",
      type: "education" as const,
      description: []
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {experiences.map((experience, index) => (
        <TimelineItem key={index} {...experience} />
      ))}
    </div>
  );
};

export default Timeline;
