interface SubjectIconProps {
  subject: 'rhymes' | 'math' | 'gk' | 'social' | 'admissions' | 'contact';
  className?: string;
}

const iconPositions = {
  rhymes: { x: 0, y: 0 },
  math: { x: 170, y: 0 },
  gk: { x: 340, y: 0 },
  social: { x: 0, y: 170 },
  admissions: { x: 170, y: 170 },
  contact: { x: 340, y: 170 },
};

export default function SubjectIcon({ subject, className = '' }: SubjectIconProps) {
  const pos = iconPositions[subject];
  
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width: '64px', height: '64px' }}>
      <img
        src="/assets/generated/subject-icons-sprite.dim_1024x1024.png"
        alt={subject}
        className="absolute"
        style={{
          width: '1024px',
          height: '1024px',
          objectFit: 'none',
          objectPosition: `-${pos.x}px -${pos.y}px`,
          transform: 'scale(0.0625)',
          transformOrigin: 'top left',
        }}
      />
    </div>
  );
}

