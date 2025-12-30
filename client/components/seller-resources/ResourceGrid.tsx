import ResourceCard from "./ResourceCard";
import { SellerResource } from "@/data/seller-resources";

interface ResourceGridProps {
  resources: SellerResource[];
  columns?: 1 | 2 | 3;
}

export default function ResourceGrid({
  resources,
  columns = 3,
}: ResourceGridProps) {
  const gridColsClass =
    columns === 1
      ? "grid-cols-1"
      : columns === 2
        ? "grid-cols-1 md:grid-cols-2"
        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid ${gridColsClass} gap-8`}>
      {resources.map((resource) => (
        <ResourceCard key={resource.id} resource={resource} />
      ))}
    </div>
  );
}
