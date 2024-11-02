import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("stores")
    .select("city");

  if (error) {
    console.error("Error fetching cities:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Filtrar valores únicos
  const uniqueCities = Array.from(new Set(data.map((item) => item.city)));
  
  console.log("Fetched cities: ", uniqueCities);

  return NextResponse.json({ cities: uniqueCities });
}