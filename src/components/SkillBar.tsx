import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface SkillBarProps {
  skill: string;
  level: number;
  color?: string;
}

const SkillBar = ({ skill, level, color = "#FF6B35" }: SkillBarProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        width: `${level}%`,
        transition: { duration: 1, ease: "easeOut" },
      });
    }
  }, [controls, inView, level]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-lg font-medium text-gray-700">{skill}</span>
        <span className="text-lg font-medium text-gray-700">{level}%</span>
      </div>
      <div className="h-4 bg-gray-200 rounded-full overflow-hidden" ref={ref}>
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={controls}
        />
      </div>
    </div>
  );
};

export default SkillBar;
