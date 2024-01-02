import { useParams } from "react-router-dom";
import { DisplayCard } from "./components/DisplayCard";

export function DetailsPage() {
  const { id = "" } = useParams();

  return (
    <>
      <DisplayCard />
    </>
  );
}
