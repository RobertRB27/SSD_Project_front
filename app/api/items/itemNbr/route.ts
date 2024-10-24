// app/api/items/itemNbr/route.ts

import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server"; // Cliente de supabase del lado del servidor

export async function POST(request: Request) {
  const supabase = createClient();
  const { selectedFamilies } = await request.json(); // Recibe las familias seleccionadas

  if (!selectedFamilies || selectedFamilies.length === 0) {
    return NextResponse.json({ items: [] });
  }

  // Consultar items según las familias seleccionadas
  const { data, error } = await supabase
    .from("items")
    .select("item_nbr")
    .in("family", selectedFamilies);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const itemNbrs = data.map((item) => item.item_nbr);

  return NextResponse.json({ items: itemNbrs });
}
