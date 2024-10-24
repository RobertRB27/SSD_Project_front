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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Crear Nuevo Pronóstico</CardTitle>
        <CardDescription>Selecciona los meses, productos y locales a incluir en el pronóstico.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Planificación</Label>
              <Input id="name" placeholder="Ingresa nuevo nombre " />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="model">Modelo</Label>
              <Select>
                <SelectTrigger id="model">
                  <SelectValue placeholder="Selecciona un modelo" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="DecisionTree">Decision Tree</SelectItem>
                  <SelectItem value="XGBoost">XGBoost</SelectItem>
                  <SelectItem value="RandomForest" disabled>Random Forest</SelectItem>
                  <SelectItem value="LinearRegression">Linear Regression</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex flex-row justify-center items-start">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-red-500 mr-1" />
                <CardDescription>Random Forest deshabilitado temporalmente.</CardDescription>
              </div>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="model">Meses</Label>
              <Select>
                <SelectTrigger id="model">
                  <SelectValue placeholder="Selecciona un modelo" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="DecisionTree">Decision Tree</SelectItem>
                  <SelectItem value="XGBoost">XGBoost</SelectItem>
                  <SelectItem value="RandomForest" disabled>Random Forest</SelectItem>
                  <SelectItem value="LinearRegression">Linear Regression</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}