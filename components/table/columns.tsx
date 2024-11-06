"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type Items = {
  item_nbr: number
  name: string
  store: string
  month: string
  amount: number
}

export const columns: ColumnDef<Items>[] = [
  {
    accessorKey: "item_nbr",
    header: "Codigo de Producto",
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nombre de Producto
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "store",
    header: "Local",
  },
  {
    accessorKey: "month",
    header: "Mes",
  },
  {
    accessorKey: "amount",
    header: "Cantidad",
  },
]
