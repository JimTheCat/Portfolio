interface SectionHeadProps {
  num: string;
  title: string;
}

export const SectionHead = ({ num, title }: SectionHeadProps) => (
  <div className="section-head">
    <span className="section-num">{num} /</span>
    <h2>{title}</h2>
    <span className="section-rule" />
  </div>
);
