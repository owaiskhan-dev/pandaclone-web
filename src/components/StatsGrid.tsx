interface StatItemProps {
  number: string;
  label: string;
}

const StatItem = ({ number, label }: StatItemProps) => {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
        {number}
      </div>
      <div className="text-muted-foreground text-sm md:text-base mt-2">
        {label}
      </div>
    </div>
  );
};

interface StatsGridProps {
  stats: StatItemProps[];
  className?: string;
}

const StatsGrid = ({ stats, className = "" }: StatsGridProps) => {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-${stats.length} gap-8 md:gap-12 ${className}`}>
      {stats.map((stat, index) => (
        <StatItem key={index} {...stat} />
      ))}
    </div>
  );
};

export { StatItem, StatsGrid };
