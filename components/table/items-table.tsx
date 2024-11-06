import { Items, columns } from "./columns";
import { DataTable } from "./data-table";

interface ItemTableProps {
  data: Items[];
}

export default function ItemTable({ data }: ItemTableProps) {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

