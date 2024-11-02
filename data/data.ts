import { Store, Package, ChartLineIcon} from "lucide-react"

export const items = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: ChartLineIcon,
    },
    {
      title: "Locales",
      url: "/stores",
      icon: Store,
    },
    {
      title: "Productos",
      url: "/packages",
      icon: Package,
    },
  ]

export const months = [
    { id: "enero", value: "Enero" },
    { id: "febrero", value: "Febrero" },
    { id: "marzo", value: "Marzo" },
    { id: "abril", value: "Abril" },
    { id: "mayo", value: "Mayo" },
    { id: "junio", value: "Junio" },
    { id: "julio", value: "Julio" },
    { id: "agosto", value: "Agosto" },
    { id: "septiembre", value: "Septiembre" },
    { id: "octubre", value: "Octubre" },
    { id: "noviembre", value: "Noviembre" },
    { id: "diciembre", value: "Diciembre" },
]

export const models = [
    { id: "DecisionTree", value: "Decision Tree", isDisabled: false },
    { id: "XGBoost", value: "eXtreme Gradient Boosting", isDisabled: false },
    { id: "RandomForest", value: "RandomForest", isDisabled: true },
    { id: "LinearRegression", value: "Linear Regression", isDisabled: false }
]