import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { months, models } from "@/lib/data"

import MultipleSelect from "@/components/multiple-select"

export default function ModelCard() {
  
  return (
    <Card className="w-[400px]">
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Clases</Label>
              <Input id="name" placeholder="Ingresa nuevo nombre " />
            </div>
            
            <MultipleSelect title="Modelos" options={models} isMulti={false} />
            <div className="flex flex-row justify-start items-start">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-red-500 mr-1" />
                <CardDescription>Random Forest deshabilitado temporalmente.</CardDescription>
              </div>
            <MultipleSelect title="Meses" options={months} isMulti={true}/>
            
          </div>
        </form>
      </CardContent>

    </Card>
  )
}