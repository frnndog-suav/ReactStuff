import styles from "./Prato.module.scss";
import { useParams } from "react-router-dom";

export default function Prato() {
  const test = useParams();

  return <div>Prato</div>;
}
