import { useParams } from "react-router-dom";

export function DetailsPage() {
  const { id = "" } = useParams();

  return <div>details page {id}</div>;
}
