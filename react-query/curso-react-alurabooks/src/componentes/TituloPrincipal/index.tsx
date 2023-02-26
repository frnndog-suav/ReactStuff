import "./styles.css";

interface TituloPrincipalProps {
  title?: string;
}

export const TituloPrincipal = ({ title = '' }: TituloPrincipalProps) => {
  return <h1 className="TituloPrincipal">{title}</h1>;
};
