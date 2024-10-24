// app/api/items/family/route.ts

import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET() {
  const supabase = createClient();

  // Consultar valores únicos de la columna 'family'
  const { data, error } = await supabase
    .from("items")
    .select("family");

  if (error) {
    console.error("Error fetching families:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Filtrar valores únicos
  const uniqueFamilies = Array.from(new Set(data.map((item) => item.family)));
  
  console.log("Fetched families: ", uniqueFamilies);

  return NextResponse.json({ families: uniqueFamilies });
}
