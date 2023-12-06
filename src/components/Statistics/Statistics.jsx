import {
  Section,
  TitleH2,
  StatList,
  StatItem,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      
      {title && <TitleH2>{title}</TitleH2>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id} className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </StatItem>
        ))}
      </StatList>
    </Section>
  );
};
