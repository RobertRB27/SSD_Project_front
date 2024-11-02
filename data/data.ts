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

export const cities = [
  {id: 'Ambato', value: 'Ambato' },
  {id: 'Quevedo', value: 'Quevedo'},
  {id: 'Manta', value: 'Manta'},
  {id: 'Machala', value: 'Machala'},
  {id: 'Puyo', value: 'Puyo'},
  {id: 'Quito', value: 'Quito'},
  {id: 'Playas', value: 'Playas'},
  {id: 'Libertad', value: 'Libertad'},
  {id: 'Cayambe', value: 'Cayambe'},
  {id: 'Guaranda', value: 'Guaranda'},
  {id: 'El Carmen', value: 'El Carmen'},
  {id: 'Guayaquil', value: 'Guayaquil'},
  {id: 'Daule', value: 'Daule'},
  {id: 'Esmeraldas', value: 'Esmeraldas'},
  {id: 'Babahoyo', value: 'Babahoyo'},
  {id: 'Latacunga', value: 'Latacunga'},
  {id: 'Cuenca', value: 'Cuenca'},
  {id: 'Riobamba', value: 'Riobamba'},
  {id: 'Ibarra', value: 'Ibarra'},
  {id: 'Santo Domingo', value: 'Santo Domingo'},
  {id: 'Salinas', value: 'Salinas'},
  {id: 'Loja', value: 'Loja'},
]

export const stores = 
  [
    {
      id: 50,
      value: "Megamaxi Mall de los Andes",
      label: "Megamaxi Mall de los Andes",
      city: "Ambato"
    },
    {
      id: 23,
      value: "Supermaxi Ficoa",
      label: "Supermaxi Ficoa",
      city: "Ambato"
    },
    {
      id: 33,
      value: "Supermaxi Quevedo",
      label: "Supermaxi Quevedo",
      city: "Quevedo"
    },
    {
      id: 52,
      value: "Megamaxi Mall del Pacifico",
      label: "Megamaxi Mall del Pacifico",
      city: "Manta"
    },
    {
      id: 53,
      value: "Supermaxi La Campiña",
      label: "Supermaxi La Campiña",
      city: "Manta"
    },
    {
      id: 40,
      value: "Megamaxi Machala",
      label: "Megamaxi Machala",
      city: "Machala"
    },
    {
      id: 41,
      value: "Supermaxi Vía al Puerto",
      label: "Supermaxi Vía al Puerto",
      city: "Machala"
    },
    {
      id: 38,
      value: "Supermaxi Centro Comercial La Pradera",
      label: "Supermaxi Centro Comercial La Pradera",
      city: "Loja"
    },
    {
      id: 25,
      value: "Supermaxi Salinas",
      label: "Supermaxi Salinas",
      city: "Salinas"
    },
    {
      id: 14,
      value: "Supermaxi Riobamba",
      label: "Supermaxi Riobamba",
      city: "Riobamba"
    },
    {
      id: 21,
      value: "Supermaxi Santo Domingo",
      label: "Supermaxi Santo Domingo",
      city: "Santo Domingo"
    },
    {
      id: 12,
      value: "Supermaxi Maltería Latacunga",
      label: "Supermaxi Maltería Latacunga",
      city: "Latacunga"
    },
    {
      id: 15,
      value: "Supermaxi La Plaza Shopping",
      label: "Supermaxi La Plaza Shopping",
      city: "Ibarra"
    },
    {
      id: 31,
      value: "Supermaxi Babahoyo",
      label: "Supermaxi Babahoyo",
      city: "Babahoyo"
    },
    {
      id: 39,
      value: "Megamaxi Wayra",
      label: "Megamaxi Wayra",
      city: "Cuenca"
    },
    {
      id: 42,
      value: "Supermaxi Las Américas",
      label: "Supermaxi Las Américas",
      city: "Cuenca"
    },
    {
      id: 37,
      value: "Supermaxi Don Bosco",
      label: "Supermaxi Don Bosco",
      city: "Cuenca"
    },
    {
      id: 43,
      value: "Supermaxi Esmeraldas",
      label: "Supermaxi Esmeraldas",
      city: "Esmeraldas"
    },
    {
      id: 54,
      value: "Supermaxi el Carmen",
      label: "Supermaxi el Carmen",
      city: "El Carmen"
    },
    {
      id: 27,
      value: "Supermaxi Daule",
      label: "Supermaxi Daule",
      city: "Daule"
    },
    {
      id: 19,
      value: "Supermaxi Guaranda",
      label: "Supermaxi Guaranda",
      city: "Guaranda"
    },
    {
      id: 51,
      value: "Megamaxi Mall del Sol",
      label: "Megamaxi Mall del Sol",
      city: "Guayaquil"
    },
    {
      id: 34,
      value: "Megamaxi City Mall",
      label: "Megamaxi City Mall",
      city: "Guayaquil"
    },
    {
      id: 32,
      value: "Supermaxi Ciudad Colón",
      label: "Supermaxi Ciudad Colón",
      city: "Guayaquil"
    },
    {
      id: 30,
      value: "Supermaxi Albán Borja",
      label: "Supermaxi Albán Borja",
      city: "Guayaquil"
    },
    {
      id: 24,
      value: "Megamaxi Mall del Sur",
      label: "Megamaxi Mall del Sur",
      city: "Guayaquil"
    },
    {
      id: 26,
      value: "Megamaxi Mall Los Ceibos",
      label: "Megamaxi Mall Los Ceibos",
      city: "Guayaquil"
    },
    {
      id: 28,
      value: "Supermaxi Parque California",
      label: "Supermaxi Parque California",
      city: "Guayaquil"
    },
    {
      id: 29,
      value: "Supermaxi Policentro",
      label: "Supermaxi Policentro",
      city: "Guayaquil"
    },
    {
      id: 11,
      value: "Supermaxi Cayambe",
      label: "Supermaxi Cayambe",
      city: "Cayambe"
    },
    {
      id: 13,
      value: "Supermaxi Latacunga",
      label: "Supermaxi Latacunga",
      city: "Latacunga"
    },
    {
      id: 36,
      value: "Supermaxi Libertad",
      label: "Supermaxi Libertad",
      city: "Libertad"
    },
    {
      id: 35,
      value: "Supermaxi Playas",
      label: "Supermaxi Playas",
      city: "Playas"
    },
    {
      id: 22,
      value: "Supermaxi Puyo",
      label: "Supermaxi Puyo",
      city: "Puyo"
    },
    {
      id: 16,
      value: "Supermaxi Santo Domingo 2",
      label: "Supermaxi Santo Domingo 2",
      city: "Santo Domingo"
    },
    {
      id: 5,
      value: "Supermaxi Santo Domingo 3",
      label: "Supermaxi Santo Domingo 3",
      city: "Santo Domingo"
    },
    {
      id: 47,
      value: "Megamaxi Scala",
      label: "Megamaxi Scala",
      city: "Quito"
    },
    {
      id: 46,
      value: "Megamaxi 6 de Diciembre",
      label: "Megamaxi 6 de Diciembre",
      city: "Quito"
    },
    {
      id: 49,
      value: "Megamaxi El Recreo",
      label: "Megamaxi El Recreo",
      city: "Quito"
    },
    {
      id: 48,
      value: "Megamaxi Quicentro Sur",
      label: "Megamaxi Quicentro Sur",
      city: "Quito"
    },
    {
      id: 45,
      value: "Megamaxi El Condado",
      label: "Megamaxi El Condado",
      city: "Quito"
    },
    {
      id: 44,
      value: "Megamaxi Portal",
      label: "Megamaxi Portal",
      city: "Quito"
    },
    {
      id: 18,
      value: "Megamaxi San Luis",
      label: "Megamaxi San Luis",
      city: "Quito"
    },
    {
      id: 9,
      value: "Supermaxi Iñaquito",
      label: "Supermaxi Iñaquito",
      city: "Quito"
    },
    {
      id: 20,
      value: "Supermaxi Quicentro Shopping",
      label: "Supermaxi Quicentro Shopping",
      city: "Quito"
    },
    {
      id: 10,
      value: "Supermaxi Eloy Alfaro",
      label: "Supermaxi Eloy Alfaro",
      city: "Quito"
    },
    {
      id: 17,
      value: "Supermaxi América",
      label: "Supermaxi América",
      city: "Quito"
    },
    {
      id: 2,
      value: "Supermaxi 12 de Octubre",
      label: "Supermaxi 12 de Octubre",
      city: "Quito"
    },
    {
      id: 7,
      value: "Supermaxi Multicentro",
      label: "Supermaxi Multicentro",
      city: "Quito"
    },
    {
      id: 3,
      value: "Supermaxi El Jardín",
      label: "Supermaxi El Jardín",
      city: "Quito"
    },
    {
      id: 6,
      value: "Supermaxi La Cerámica",
      label: "Supermaxi La Cerámica",
      city: "Quito"
    },
    {
      id: 4,
      value: "Supermaxi Plaza Atahualpa",
      label: "Supermaxi Plaza Atahualpa",
      city: "Quito"
    },
    {
      id: 8,
      value: "Supermaxi San Bartolo",
      label: "Supermaxi San Bartolo",
      city: "Quito"
    },
    {
      id: 1,
      value: "Supermaxi Bicentenario Plaz",
      label: "Supermaxi Bicentenario Plaz",
      city: "Quito"
    }
  ]

export const products = 
  [
    {
      value: "Large Cappuccino",
      label: "Large Cappuccino",
      family: "BEVERAGES",
      id: 1114566
    },
    {
      value: "Motor Oil",
      label: "Motor Oil",
      family: "AUTOMOTIVE",
      id: 1147731
    },
    {
      value: "Engine Coolant",
      label: "Engine Coolant",
      family: "AUTOMOTIVE",
      id: 270522
    },
    {
      value: "Brake Fluid",
      label: "Brake Fluid",
      family: "AUTOMOTIVE",
      id: 121964
    },
    {
      value: "Power Steering Fluid",
      label: "Power Steering Fluid",
      family: "AUTOMOTIVE",
      id: 1009512
    },
    {
      value: "Windshield Washer Fluid",
      label: "Windshield Washer Fluid",
      family: "AUTOMOTIVE",
      id: 461432
    },
    {
      value: "Transmission Fluid",
      label: "Transmission Fluid",
      family: "AUTOMOTIVE",
      id: 511394
    },
    {
      value: "Car Wash Soap ",
      label: "Car Wash Soap ",
      family: "AUTOMOTIVE",
      id: 312317
    },
    {
      value: "Perfume VS",
      label: "Perfume VS",
      family: "BEAUTY",
      id: 617763
    },
    {
      value: "Lipstick red",
      label: "Lipstick red",
      family: "BEAUTY",
      id: 958514
    },
    {
      value: "Small Water",
      label: "Small Water",
      family: "BEVERAGES",
      id: 1047790
    },
    {
      value: "Large Water",
      label: "Large Water",
      family: "BEVERAGES",
      id: 819932
    },
    {
      value: "Small Milk",
      label: "Small Milk",
      family: "BEVERAGES",
      id: 1047681
    },
    {
      value: "Large Milk",
      label: "Large Milk",
      family: "BEVERAGES",
      id: 839362
    },
    {
      value: "Small Orange Juice",
      label: "Small Orange Juice",
      family: "BEVERAGES",
      id: 839363
    },
    {
      value: "Large Orange Juice",
      label: "Large Orange Juice",
      family: "BEVERAGES",
      id: 1047756
    },
    {
      value: "Small Apple Juice",
      label: "Small Apple Juice",
      family: "BEVERAGES",
      id: 807493
    },
    {
      value: "Large Apple Juice",
      label: "Large Apple Juice",
      family: "BEVERAGES",
      id: 315176
    },
    {
      value: "Small Grape Juice",
      label: "Small Grape Juice",
      family: "BEVERAGES",
      id: 1047679
    },
    {
      value: "Large Grape Juice",
      label: "Large Grape Juice",
      family: "BEVERAGES",
      id: 368624
    },
    {
      value: "Small Cranberry Juice",
      label: "Small Cranberry Juice",
      family: "BEVERAGES",
      id: 1047690
    },
    {
      value: "Large Cranberry Juice",
      label: "Large Cranberry Juice",
      family: "BEVERAGES",
      id: 119624
    },
    {
      value: "Small Tomato Juice",
      label: "Small Tomato Juice",
      family: "BEVERAGES",
      id: 518094
    },
    {
      value: "Large Iced Coffee",
      label: "Large Iced Coffee",
      family: "BEVERAGES",
      id: 730258
    },
    {
      value: "Small Black Coffee",
      label: "Small Black Coffee",
      family: "BEVERAGES",
      id: 804932
    },
    {
      value: "Large Black Coffee",
      label: "Large Black Coffee",
      family: "BEVERAGES",
      id: 1047685
    },
    {
      value: "Small Latte",
      label: "Small Latte",
      family: "BEVERAGES",
      id: 1047775
    },
    {
      value: "Large Latte",
      label: "Large Latte",
      family: "BEVERAGES",
      id: 464374
    },
    {
      value: "Small Cappuccino",
      label: "Small Cappuccino",
      family: "BEVERAGES",
      id: 1047786
    },
    {
      value: "Small Black Tea",
      label: "Small Black Tea",
      family: "BEVERAGES",
      id: 1047733
    },
    {
      value: "Large Black Tea",
      label: "Large Black Tea",
      family: "BEVERAGES",
      id: 1066901
    },
    {
      value: "Small Green Tea",
      label: "Small Green Tea",
      family: "BEVERAGES",
      id: 1047735
    },
    {
      value: "Large Green Tea",
      label: "Large Green Tea",
      family: "BEVERAGES",
      id: 839364
    },
    {
      value: "Small Herbal Tea",
      label: "Small Herbal Tea",
      family: "BEVERAGES",
      id: 1047717
    },
    {
      value: "Large Herbal Tea",
      label: "Large Herbal Tea",
      family: "BEVERAGES",
      id: 1047699
    },
    {
      value: "Small Soda",
      label: "Small Soda",
      family: "BEVERAGES",
      id: 364738
    },
    {
      value: "Large Soda",
      label: "Large Soda",
      family: "BEVERAGES",
      id: 514172
    },
    {
      value: "Small Diet Soda",
      label: "Small Diet Soda",
      family: "BEVERAGES",
      id: 968432
    },
    {
      value: "Large Diet Soda",
      label: "Large Diet Soda",
      family: "BEVERAGES",
      id: 165550
    },
    {
      value: "Small Energy Drink",
      label: "Small Energy Drink",
      family: "BEVERAGES",
      id: 1037857
    },
    {
      value: "Large Energy Drink",
      label: "Large Energy Drink",
      family: "BEVERAGES",
      id: 716250
    },
    {
      value: "Small Sports Drink",
      label: "Small Sports Drink",
      family: "BEVERAGES",
      id: 1243814
    },
    {
      value: "Large Sports Drink",
      label: "Large Sports Drink",
      family: "BEVERAGES",
      id: 1047772
    },
    {
      value: "Small Iced Tea",
      label: "Small Iced Tea",
      family: "BEVERAGES",
      id: 1143685
    },
    {
      value: "Large Iced Tea",
      label: "Large Iced Tea",
      family: "BEVERAGES",
      id: 671039
    },
    {
      value: "Small Lemonade",
      label: "Small Lemonade",
      family: "BEVERAGES",
      id: 1243815
    },
    {
      value: "Large Lemonade",
      label: "Large Lemonade",
      family: "BEVERAGES",
      id: 1047740
    },
    {
      value: "Small Beer",
      label: "Small Beer",
      family: "BEVERAGES",
      id: 871421
    },
    {
      value: "Large Beer",
      label: "Large Beer",
      family: "BEVERAGES",
      id: 1047774
    },
    {
      value: "Small Red Wine",
      label: "Small Red Wine",
      family: "BEVERAGES",
      id: 568133
    },
    {
      value: "Large Red Wine",
      label: "Large Red Wine",
      family: "BEVERAGES",
      id: 805311
    },
    {
      value: "Small White Wine",
      label: "Small White Wine",
      family: "BEVERAGES",
      id: 1047757
    },
    {
      value: "Large White Wine",
      label: "Large White Wine",
      family: "BEVERAGES",
      id: 1109325
    },
    {
      value: "Small Rosé Wine",
      label: "Small Rosé Wine",
      family: "BEVERAGES",
      id: 1047773
    },
    {
      value: "Large Rosé Wine",
      label: "Large Rosé Wine",
      family: "BEVERAGES",
      id: 1150954
    },
    {
      value: "Small Frappuccino",
      label: "Small Frappuccino",
      family: "BEVERAGES",
      id: 1047705
    },
    {
      value: "Large Sparkling Wine",
      label: "Large Sparkling Wine",
      family: "BEVERAGES",
      id: 1134971
    },
    {
      value: "Small Champagne",
      label: "Small Champagne",
      family: "BEVERAGES",
      id: 1117661
    },
    {
      value: "Large Champagne",
      label: "Large Champagne",
      family: "BEVERAGES",
      id: 269036
    },
    {
      value: "Small Tequila",
      label: "Small Tequila",
      family: "BEVERAGES",
      id: 468265
    },
    {
      value: "Large Tequila",
      label: "Large Tequila",
      family: "BEVERAGES",
      id: 1104725
    },
    {
      value: "Small Affogato",
      label: "Small Affogato",
      family: "BEVERAGES",
      id: 1047674
    },
    {
      value: "Large Vodka",
      label: "Large Vodka",
      family: "BEVERAGES",
      id: 884878
    },
    {
      value: "Small Rum",
      label: "Small Rum",
      family: "BEVERAGES",
      id: 1167545
    },
    {
      value: "Large Rum",
      label: "Large Rum",
      family: "BEVERAGES",
      id: 1145597
    },
    {
      value: "Small Gin",
      label: "Small Gin",
      family: "BEVERAGES",
      id: 418238
    },
    {
      value: "Large Gin",
      label: "Large Gin",
      family: "BEVERAGES",
      id: 1047755
    },
    {
      value: "Small Whiskey",
      label: "Small Whiskey",
      family: "BEVERAGES",
      id: 1132005
    },
    {
      value: "Large Whiskey",
      label: "Large Whiskey",
      family: "BEVERAGES",
      id: 1060036
    },
    {
      value: "Small Brandy",
      label: "Small Brandy",
      family: "BEVERAGES",
      id: 257848
    },
    {
      value: "Large Brandy",
      label: "Large Brandy",
      family: "BEVERAGES",
      id: 219152
    },
    {
      value: "Small Cognac",
      label: "Small Cognac",
      family: "BEVERAGES",
      id: 1167544
    },
    {
      value: "Large Cognac",
      label: "Large Cognac",
      family: "BEVERAGES",
      id: 839367
    },
    {
      value: "Small Liqueur",
      label: "Small Liqueur",
      family: "BEVERAGES",
      id: 1102976
    },
    {
      value: "Large Liqueur",
      label: "Large Liqueur",
      family: "BEVERAGES",
      id: 1047680
    },
    {
      value: "Small Cocktail",
      label: "Small Cocktail",
      family: "BEVERAGES",
      id: 1047743
    },
    {
      value: "Large Cocktail",
      label: "Large Cocktail",
      family: "BEVERAGES",
      id: 938657
    },
    {
      value: "Small Sparkling Water",
      label: "Small Sparkling Water",
      family: "BEVERAGES",
      id: 219150
    },
    {
      value: "Large Sparkling Water",
      label: "Large Sparkling Water",
      family: "BEVERAGES",
      id: 1047696
    },
    {
      value: "Small Flavored Sparkling Water",
      label: "Small Flavored Sparkling Water",
      family: "BEVERAGES",
      id: 1166474
    },
    {
      value: "Large Flavored Sparkling Water",
      label: "Large Flavored Sparkling Water",
      family: "BEVERAGES",
      id: 1102975
    },
    {
      value: "Small Coconut Water",
      label: "Small Coconut Water",
      family: "BEVERAGES",
      id: 257847
    },
    {
      value: "Large Coconut Water",
      label: "Large Coconut Water",
      family: "BEVERAGES",
      id: 915980
    },
    {
      value: "Small Kombucha",
      label: "Small Kombucha",
      family: "BEVERAGES",
      id: 1088002
    },
    {
      value: "Large Kombucha",
      label: "Large Kombucha",
      family: "BEVERAGES",
      id: 1109326
    },
    {
      value: "Small Smoothie",
      label: "Small Smoothie",
      family: "BEVERAGES",
      id: 1102970
    },
    {
      value: "Large Smoothie",
      label: "Large Smoothie",
      family: "BEVERAGES",
      id: 1047695
    },
    {
      value: "Small Milkshake",
      label: "Small Milkshake",
      family: "BEVERAGES",
      id: 1047707
    },
    {
      value: "Large Milkshake",
      label: "Large Milkshake",
      family: "BEVERAGES",
      id: 1166475
    },
    {
      value: "Small Hot Chocolate",
      label: "Small Hot Chocolate",
      family: "BEVERAGES",
      id: 1101724
    },
    {
      value: "Large Hot Chocolate",
      label: "Large Hot Chocolate",
      family: "BEVERAGES",
      id: 821186
    },
    {
      value: "Small Apple Cider",
      label: "Small Apple Cider",
      family: "BEVERAGES",
      id: 315179
    },
    {
      value: "Large Apple Cider",
      label: "Large Apple Cider",
      family: "BEVERAGES",
      id: 1243816
    },
    {
      value: "Small Ginger Ale",
      label: "Small Ginger Ale",
      family: "BEVERAGES",
      id: 315178
    },
    {
      value: "Large Ginger Ale",
      label: "Large Ginger Ale",
      family: "BEVERAGES",
      id: 938659
    },
    {
      value: "Small Root Beer",
      label: "Small Root Beer",
      family: "BEVERAGES",
      id: 269029
    },
    {
      value: "Large Root Beer",
      label: "Large Root Beer",
      family: "BEVERAGES",
      id: 174081
    },
    {
      value: "Small Shirley Temple",
      label: "Small Shirley Temple",
      family: "BEVERAGES",
      id: 1022053
    },
    {
      value: "Large Horchata",
      label: "Large Horchata",
      family: "BEVERAGES",
      id: 1071949
    },
    {
      value: "Small Egg Cream",
      label: "Small Egg Cream",
      family: "BEVERAGES",
      id: 418235
    },
    {
      value: "Large Boba Tea",
      label: "Large Boba Tea",
      family: "BEVERAGES",
      id: 1243817
    },
    {
      value: "Small Arnold Palmer",
      label: "Small Arnold Palmer",
      family: "BEVERAGES",
      id: 1047682
    },
    {
      value: "Large Vietnamese Iced Coffee",
      label: "Large Vietnamese Iced Coffee",
      family: "BEVERAGES",
      id: 1102971
    },
    {
      value: "Small Thai Iced Tea",
      label: "Small Thai Iced Tea",
      family: "BEVERAGES",
      id: 1047709
    },
    {
      value: "Large Thai Iced Tea",
      label: "Large Thai Iced Tea",
      family: "BEVERAGES",
      id: 805310
    },
    {
      value: "Small Masala Chai",
      label: "Small Masala Chai",
      family: "BEVERAGES",
      id: 319272
    },
    {
      value: "Large Shrub",
      label: "Large Shrub",
      family: "BEVERAGES",
      id: 730259
    },
    {
      value: "Small Turmeric Latte",
      label: "Small Turmeric Latte",
      family: "BEVERAGES",
      id: 1074327
    },
    {
      value: "Large Turmeric Latte",
      label: "Large Turmeric Latte",
      family: "BEVERAGES",
      id: 1047734
    },
    {
      value: "Small Matcha Latte",
      label: "Small Matcha Latte",
      family: "BEVERAGES",
      id: 1243803
    },
    {
      value: "Large Matcha Latte",
      label: "Large Matcha Latte",
      family: "BEVERAGES",
      id: 1124165
    },
    {
      value: "Small Kefir",
      label: "Small Kefir",
      family: "BEVERAGES",
      id: 1114567
    },
    {
      value: "Large Kefir",
      label: "Large Kefir",
      family: "BEVERAGES",
      id: 1047758
    },
    {
      value: "Small Kvass",
      label: "Small Kvass",
      family: "BEVERAGES",
      id: 686034
    },
    {
      value: "Large Kvass",
      label: "Large Kvass",
      family: "BEVERAGES",
      id: 1066900
    },
    {
      value: "Small Lassi",
      label: "Small Lassi",
      family: "BEVERAGES",
      id: 518091
    },
    {
      value: "Large Lassi",
      label: "Large Lassi",
      family: "BEVERAGES",
      id: 686035
    },
    {
      value: "Small Shrub",
      label: "Small Shrub",
      family: "BEVERAGES",
      id: 308085
    },
    {
      value: "Small White Bread",
      label: "Small White Bread",
      family: "BREAD/BAKERY",
      id: 265279
    },
    {
      value: "Large White Bread",
      label: "Large White Bread",
      family: "BREAD/BAKERY",
      id: 502331
    },
    {
      value: "Small Wheat Bread",
      label: "Small Wheat Bread",
      family: "BREAD/BAKERY",
      id: 315474
    },
    {
      value: "Large Wheat Bread",
      label: "Large Wheat Bread",
      family: "BREAD/BAKERY",
      id: 165718
    },
    {
      value: "Small Rye Bread",
      label: "Small Rye Bread",
      family: "BREAD/BAKERY",
      id: 409738
    },
    {
      value: "Large Rye Bread",
      label: "Large Rye Bread",
      family: "BREAD/BAKERY",
      id: 736128
    },
    {
      value: "Small Sourdough Bread",
      label: "Small Sourdough Bread",
      family: "BREAD/BAKERY",
      id: 559494
    },
    {
      value: "Large Sourdough Bread",
      label: "Large Sourdough Bread",
      family: "BREAD/BAKERY",
      id: 153395
    },
    {
      value: "Small Baguette",
      label: "Small Baguette",
      family: "BREAD/BAKERY",
      id: 1149579
    },
    {
      value: "Large Baguette",
      label: "Large Baguette",
      family: "BREAD/BAKERY",
      id: 269084
    },
    {
      value: "Small Ciabatta",
      label: "Small Ciabatta",
      family: "BREAD/BAKERY",
      id: 1033395
    },
    {
      value: "Large Ciabatta",
      label: "Large Ciabatta",
      family: "BREAD/BAKERY",
      id: 564287
    },
    {
      value: "Small Croissant",
      label: "Small Croissant",
      family: "BREAD/BAKERY",
      id: 1179580
    },
    {
      value: "Large Croissant",
      label: "Large Croissant",
      family: "BREAD/BAKERY",
      id: 459762
    },
    {
      value: "Small Pain au Chocolat",
      label: "Small Pain au Chocolat",
      family: "BREAD/BAKERY",
      id: 564288
    },
    {
      value: "Large Pain au Chocolat",
      label: "Large Pain au Chocolat",
      family: "BREAD/BAKERY",
      id: 696183
    },
    {
      value: "Small Bagel",
      label: "Small Bagel",
      family: "BREAD/BAKERY",
      id: 215370
    },
    {
      value: "Large Bagel",
      label: "Large Bagel",
      family: "BREAD/BAKERY",
      id: 312113
    },
    {
      value: "Small Donut",
      label: "Small Donut",
      family: "BREAD/BAKERY",
      id: 414478
    },
    {
      value: "Large Donut",
      label: "Large Donut",
      family: "BREAD/BAKERY",
      id: 452212
    },
    {
      value: "Small Muffin",
      label: "Small Muffin",
      family: "BREAD/BAKERY",
      id: 153398
    },
    {
      value: "Large Muffin",
      label: "Large Muffin",
      family: "BREAD/BAKERY",
      id: 1303141
    },
    {
      value: "Small Cupcake",
      label: "Small Cupcake",
      family: "BREAD/BAKERY",
      id: 153239
    },
    {
      value: "Large Cupcake",
      label: "Large Cupcake",
      family: "BREAD/BAKERY",
      id: 1313222
    },
    {
      value: "Small Cookie",
      label: "Small Cookie",
      family: "BREAD/BAKERY",
      id: 1313223
    },
    {
      value: "Large Cookie",
      label: "Large Cookie",
      family: "BREAD/BAKERY",
      id: 858872
    },
    {
      value: "Small Brownie",
      label: "Small Brownie",
      family: "BREAD/BAKERY",
      id: 1321497
    },
    {
      value: "Large Brownie",
      label: "Large Brownie",
      family: "BREAD/BAKERY",
      id: 511172
    },
    {
      value: "Small Pie",
      label: "Small Pie",
      family: "BREAD/BAKERY",
      id: 302952
    },
    {
      value: "Large Pie",
      label: "Large Pie",
      family: "BREAD/BAKERY",
      id: 809882
    },
    {
      value: "Small Cake",
      label: "Small Cake",
      family: "BREAD/BAKERY",
      id: 594045
    },
    {
      value: "All-Purpose Cleaner",
      label: "All-Purpose Cleaner",
      family: "CLEANING",
      id: 513855
    },
    {
      value: "Disinfectant Spray",
      label: "Disinfectant Spray",
      family: "CLEANING",
      id: 877513
    },
    {
      value: "Glass Cleaner",
      label: "Glass Cleaner",
      family: "CLEANING",
      id: 648313
    },
    {
      value: "Floor Cleaner",
      label: "Floor Cleaner",
      family: "CLEANING",
      id: 115267
    },
    {
      value: "Furniture Polish",
      label: "Furniture Polish",
      family: "CLEANING",
      id: 463598
    },
    {
      value: "Toilet Bowl Cleaner",
      label: "Toilet Bowl Cleaner",
      family: "CLEANING",
      id: 352513
    },
    {
      value: "Bathroom Cleaner",
      label: "Bathroom Cleaner",
      family: "CLEANING",
      id: 769312
    },
    {
      value: "Drain Cleaner",
      label: "Drain Cleaner",
      family: "CLEANING",
      id: 358232
    },
    {
      value: "Dish Soap",
      label: "Dish Soap",
      family: "CLEANING",
      id: 812725
    },
    {
      value: "Dishwasher Detergent",
      label: "Dishwasher Detergent",
      family: "CLEANING",
      id: 311954
    },
    {
      value: "Oven Cleaner",
      label: "Oven Cleaner",
      family: "CLEANING",
      id: 940592
    },
    {
      value: "Microwave Cleaner",
      label: "Microwave Cleaner",
      family: "CLEANING",
      id: 214862
    },
    {
      value: "Carpet Cleaner",
      label: "Carpet Cleaner",
      family: "CLEANING",
      id: 949296
    },
    {
      value: "Upholstery Cleaner",
      label: "Upholstery Cleaner",
      family: "CLEANING",
      id: 1121513
    },
    {
      value: "Metal Cleaner",
      label: "Metal Cleaner",
      family: "CLEANING",
      id: 716241
    },
    {
      value: "Wood Cleaner",
      label: "Wood Cleaner",
      family: "CLEANING",
      id: 949297
    },
    {
      value: "Laundry Detergent",
      label: "Laundry Detergent",
      family: "CLEANING",
      id: 214381
    },
    {
      value: "Fabric Softener",
      label: "Fabric Softener",
      family: "CLEANING",
      id: 877514
    },
    {
      value: "Bleach",
      label: "Bleach",
      family: "CLEANING",
      id: 1121514
    },
    {
      value: "Stain Remover",
      label: "Stain Remover",
      family: "CLEANING",
      id: 759893
    },
    {
      value: "Sponges",
      label: "Sponges",
      family: "CLEANING",
      id: 979196
    },
    {
      value: "Scrub Brushes",
      label: "Scrub Brushes",
      family: "CLEANING",
      id: 463901
    },
    {
      value: "Cleaning Cloths",
      label: "Cleaning Cloths",
      family: "CLEANING",
      id: 668752
    },
    {
      value: "Mops",
      label: "Mops",
      family: "CLEANING",
      id: 457688
    },
    {
      value: "Brooms",
      label: "Brooms",
      family: "CLEANING",
      id: 226126
    },
    {
      value: "Dustpans",
      label: "Dustpans",
      family: "CLEANING",
      id: 801934
    },
    {
      value: "Buckets",
      label: "Buckets",
      family: "CLEANING",
      id: 314570
    },
    {
      value: "Gloves",
      label: "Gloves",
      family: "CLEANING",
      id: 979195
    },
    {
      value: "Trash Bags",
      label: "Trash Bags",
      family: "CLEANING",
      id: 757888
    },
    {
      value: "Mrs. Meyer s Clean Day Multi-Surface Everyday Cleaner",
      label: "Mrs. Meyer s Clean Day Multi-Surface Everyday Cleaner",
      family: "CLEANING",
      id: 1178691
    },
    {
      value: "Lysol Disinfectant Spray",
      label: "Lysol Disinfectant Spray",
      family: "CLEANING",
      id: 314393
    },
    {
      value: "Windex Original Glass Cleaner",
      label: "Windex Original Glass Cleaner",
      family: "CLEANING",
      id: 314879
    },
    {
      value: "Bona Hardwood Floor Cleaner Spray",
      label: "Bona Hardwood Floor Cleaner Spray",
      family: "CLEANING",
      id: 275823
    },
    {
      value: "Pledge Lemon Clean Furniture Polish",
      label: "Pledge Lemon Clean Furniture Polish",
      family: "CLEANING",
      id: 463903
    },
    {
      value: "Clorox Toilet Bowl Cleaner",
      label: "Clorox Toilet Bowl Cleaner",
      family: "CLEANING",
      id: 264299
    },
    {
      value: "Scrubbing Bubbles Bathroom Grime Fighter",
      label: "Scrubbing Bubbles Bathroom Grime Fighter",
      family: "CLEANING",
      id: 1111202
    },
    {
      value: "Drano Max Gel Clog Remover",
      label: "Drano Max Gel Clog Remover",
      family: "CLEANING",
      id: 759890
    },
    {
      value: "Dawn Ultra Dishwashing Liquid Dish Soap",
      label: "Dawn Ultra Dishwashing Liquid Dish Soap",
      family: "CLEANING",
      id: 264752
    },
    {
      value: "Cascade Platinum ActionPacs Dishwasher Detergent",
      label: "Cascade Platinum ActionPacs Dishwasher Detergent",
      family: "CLEANING",
      id: 716242
    },
    {
      value: "Easy-Off Fume Free Oven Cleaner",
      label: "Easy-Off Fume Free Oven Cleaner",
      family: "CLEANING",
      id: 1021281
    },
    {
      value: "Angry Mama Microwave Cleaner",
      label: "Angry Mama Microwave Cleaner",
      family: "CLEANING",
      id: 1089046
    },
    {
      value: "Resolve Carpet Cleaner Spray",
      label: "Resolve Carpet Cleaner Spray",
      family: "CLEANING",
      id: 853196
    },
    {
      value: "Bissell Little Green Portable Carpet and Upholstery Cleaner",
      label: "Bissell Little Green Portable Carpet and Upholstery Cleaner",
      family: "CLEANING",
      id: 401911
    },
    {
      value: "Bar Keepers Friend Cleanser & Polish",
      label: "Bar Keepers Friend Cleanser & Polish",
      family: "CLEANING",
      id: 258376
    },
    {
      value: "Murphy Oil Soap",
      label: "Murphy Oil Soap",
      family: "CLEANING",
      id: 977007
    },
    {
      value: "Tide Original Scent Liquid Laundry Detergent",
      label: "Tide Original Scent Liquid Laundry Detergent",
      family: "CLEANING",
      id: 830625
    },
    {
      value: "Downy Ultra Liquid Fabric Softener",
      label: "Downy Ultra Liquid Fabric Softener",
      family: "CLEANING",
      id: 740714
    },
    {
      value: "Clorox Regular Bleach",
      label: "Clorox Regular Bleach",
      family: "CLEANING",
      id: 959502
    },
    {
      value: "Shout Advanced Stain Remover",
      label: "Shout Advanced Stain Remover",
      family: "CLEANING",
      id: 164647
    },
    {
      value: "Microfiber Cleaning Cloths",
      label: "Microfiber Cleaning Cloths",
      family: "CLEANING",
      id: 1057491
    },
    {
      value: "Cotton Cleaning Cloths",
      label: "Cotton Cleaning Cloths",
      family: "CLEANING",
      id: 940590
    },
    {
      value: "Wet Mops",
      label: "Wet Mops",
      family: "CLEANING",
      id: 581078
    },
    {
      value: "Dry Mops",
      label: "Dry Mops",
      family: "CLEANING",
      id: 830624
    },
    {
      value: "Steam Mops",
      label: "Steam Mops",
      family: "CLEANING",
      id: 314881
    },
    {
      value: "Rubber Gloves",
      label: "Rubber Gloves",
      family: "CLEANING",
      id: 214860
    },
    {
      value: "Disposable Gloves",
      label: "Disposable Gloves",
      family: "CLEANING",
      id: 574898
    },
    {
      value: "Small Trash Bags",
      label: "Small Trash Bags",
      family: "CLEANING",
      id: 108786
    },
    {
      value: "Large Trash Bags",
      label: "Large Trash Bags",
      family: "CLEANING",
      id: 158788
    },
    {
      value: "Mr. Clean All-Purpose Cleaner",
      label: "Mr. Clean All-Purpose Cleaner",
      family: "CLEANING",
      id: 570922
    },
    {
      value: "Pine-Sol Multi-Surface Cleaner",
      label: "Pine-Sol Multi-Surface Cleaner",
      family: "CLEANING",
      id: 314880
    },
    {
      value: "Fantastik All-Purpose Cleaner",
      label: "Fantastik All-Purpose Cleaner",
      family: "CLEANING",
      id: 358231
    },
    {
      value: "Formula 409 All-Purpose Cleaner",
      label: "Formula 409 All-Purpose Cleaner",
      family: "CLEANING",
      id: 371438
    },
    {
      value: "Seventh Generation Disinfectant Spray",
      label: "Seventh Generation Disinfectant Spray",
      family: "CLEANING",
      id: 108952
    },
    {
      value: "Clorox Disinfectant Wipes",
      label: "Clorox Disinfectant Wipes",
      family: "CLEANING",
      id: 158956
    },
    {
      value: "Method All-Purpose Cleaner",
      label: "Method All-Purpose Cleaner",
      family: "CLEANING",
      id: 1079220
    },
    {
      value: "Simple Green All-Purpose Cleaner",
      label: "Simple Green All-Purpose Cleaner",
      family: "CLEANING",
      id: 771156
    },
    {
      value: "Dr. Bronners Pure-Castile Soap",
      label: "Dr. Bronners Pure-Castile Soap",
      family: "CLEANING",
      id: 364413
    },
    {
      value: "Arm & Hammer Baking Soda",
      label: "Arm & Hammer Baking Soda",
      family: "CLEANING",
      id: 413987
    },
    {
      value: "White Vinegar",
      label: "White Vinegar",
      family: "CLEANING",
      id: 458029
    },
    {
      value: "Lemon-Scented All-Purpose Cleaner",
      label: "Lemon-Scented All-Purpose Cleaner",
      family: "CLEANING",
      id: 264751
    },
    {
      value: "Lavender-Scented All-Purpose Cleaner",
      label: "Lavender-Scented All-Purpose Cleaner",
      family: "CLEANING",
      id: 322095
    },
    {
      value: "Antibacterial All-Purpose Cleaner",
      label: "Antibacterial All-Purpose Cleaner",
      family: "CLEANING",
      id: 1178692
    },
    {
      value: "Concentrated All-Purpose Cleaner",
      label: "Concentrated All-Purpose Cleaner",
      family: "CLEANING",
      id: 853195
    },
    {
      value: "Refill All-Purpose Cleaner",
      label: "Refill All-Purpose Cleaner",
      family: "CLEANING",
      id: 214859
    },
    {
      value: "Small Disinfectant Spray",
      label: "Small Disinfectant Spray",
      family: "CLEANING",
      id: 841614
    },
    {
      value: "Large Disinfectant Spray",
      label: "Large Disinfectant Spray",
      family: "CLEANING",
      id: 740713
    },
    {
      value: "Small Glass Cleaner",
      label: "Small Glass Cleaner",
      family: "CLEANING",
      id: 940591
    },
    {
      value: "Large Glass Cleaner",
      label: "Large Glass Cleaner",
      family: "CLEANING",
      id: 953404
    },
    {
      value: "Small Floor Cleaner",
      label: "Small Floor Cleaner",
      family: "CLEANING",
      id: 1089045
    },
    {
      value: "Large Floor Cleaner",
      label: "Large Floor Cleaner",
      family: "CLEANING",
      id: 268440
    },
    {
      value: "Small Furniture Polish",
      label: "Small Furniture Polish",
      family: "CLEANING",
      id: 572838
    },
    {
      value: "Large Furniture Polish",
      label: "Large Furniture Polish",
      family: "CLEANING",
      id: 470760
    },
    {
      value: "Small Toilet Bowl Cleaner",
      label: "Small Toilet Bowl Cleaner",
      family: "CLEANING",
      id: 586823
    },
    {
      value: "Large Toilet Bowl Cleaner",
      label: "Large Toilet Bowl Cleaner",
      family: "CLEANING",
      id: 1079214
    },
    {
      value: "Small Bathroom Cleaner",
      label: "Small Bathroom Cleaner",
      family: "CLEANING",
      id: 209085
    },
    {
      value: "Large Bathroom Cleaner",
      label: "Large Bathroom Cleaner",
      family: "CLEANING",
      id: 1079257
    },
    {
      value: "Small Drain Cleaner",
      label: "Small Drain Cleaner",
      family: "CLEANING",
      id: 308924
    },
    {
      value: "Large Drain Cleaner",
      label: "Large Drain Cleaner",
      family: "CLEANING",
      id: 371437
    },
    {
      value: "Small Dish Soap",
      label: "Small Dish Soap",
      family: "CLEANING",
      id: 308916
    },
    {
      value: "Large Dish Soap",
      label: "Large Dish Soap",
      family: "CLEANING",
      id: 867850
    },
    {
      value: "Small Dishwasher Detergent",
      label: "Small Dishwasher Detergent",
      family: "CLEANING",
      id: 771157
    },
    {
      value: "Large Dishwasher Detergent",
      label: "Large Dishwasher Detergent",
      family: "CLEANING",
      id: 769314
    },
    {
      value: "Small Oven Cleaner",
      label: "Small Oven Cleaner",
      family: "CLEANING",
      id: 358561
    },
    {
      value: "Large Oven Cleaner",
      label: "Large Oven Cleaner",
      family: "CLEANING",
      id: 119023
    },
    {
      value: "Small Microwave Cleaner",
      label: "Small Microwave Cleaner",
      family: "CLEANING",
      id: 686036
    },
    {
      value: "Large Microwave Cleaner",
      label: "Large Microwave Cleaner",
      family: "CLEANING",
      id: 982726
    },
    {
      value: "Small Carpet Cleaner",
      label: "Small Carpet Cleaner",
      family: "CLEANING",
      id: 716245
    },
    {
      value: "Large Carpet Cleaner",
      label: "Large Carpet Cleaner",
      family: "CLEANING",
      id: 371130
    },
    {
      value: "Small Upholstery Cleaner",
      label: "Small Upholstery Cleaner",
      family: "CLEANING",
      id: 514757
    },
    {
      value: "Large Upholstery Cleaner",
      label: "Large Upholstery Cleaner",
      family: "CLEANING",
      id: 658609
    },
    {
      value: "Small Metal Cleaner",
      label: "Small Metal Cleaner",
      family: "CLEANING",
      id: 668754
    },
    {
      value: "Large Metal Cleaner",
      label: "Large Metal Cleaner",
      family: "CLEANING",
      id: 1114914
    },
    {
      value: "Small Wood Cleaner",
      label: "Small Wood Cleaner",
      family: "CLEANING",
      id: 1079215
    },
    {
      value: "Large Wood Cleaner",
      label: "Large Wood Cleaner",
      family: "CLEANING",
      id: 1119216
    },
    {
      value: "Small Laundry Detergent",
      label: "Small Laundry Detergent",
      family: "CLEANING",
      id: 655427
    },
    {
      value: "Large Laundry Detergent",
      label: "Large Laundry Detergent",
      family: "CLEANING",
      id: 467808
    },
    {
      value: "Small Fabric Softener",
      label: "Small Fabric Softener",
      family: "CLEANING",
      id: 982727
    },
    {
      value: "Large Fabric Softener",
      label: "Large Fabric Softener",
      family: "CLEANING",
      id: 1119217
    },
    {
      value: "Small Bleach",
      label: "Small Bleach",
      family: "CLEANING",
      id: 470624
    },
    {
      value: "Large Bleach",
      label: "Large Bleach",
      family: "CLEANING",
      id: 159242
    },
    {
      value: "Small Stain Remover",
      label: "Small Stain Remover",
      family: "CLEANING",
      id: 1213906
    },
    {
      value: "Large Stain Remover",
      label: "Large Stain Remover",
      family: "CLEANING",
      id: 265700
    },
    {
      value: "Sponges Multi-Pack",
      label: "Sponges Multi-Pack",
      family: "CLEANING",
      id: 793341
    },
    {
      value: "Scrub Brushes Multi-Pack",
      label: "Scrub Brushes Multi-Pack",
      family: "CLEANING",
      id: 324206
    },
    {
      value: "Cleaning Cloths Multi-Pack",
      label: "Cleaning Cloths Multi-Pack",
      family: "CLEANING",
      id: 322094
    },
    {
      value: "Mops with Refill Pads",
      label: "Mops with Refill Pads",
      family: "CLEANING",
      id: 911871
    },
    {
      value: "Brooms with Dustpans",
      label: "Brooms with Dustpans",
      family: "CLEANING",
      id: 428488
    },
    {
      value: "Buckets with Wringers",
      label: "Buckets with Wringers",
      family: "CLEANING",
      id: 801217
    },
    {
      value: "Gloves in Different Sizes",
      label: "Gloves in Different Sizes",
      family: "CLEANING",
      id: 738219
    },
    {
      value: "Trash Bags in Different Strengths",
      label: "Trash Bags in Different Strengths",
      family: "CLEANING",
      id: 224081
    },
    {
      value: "Jewelry Cleaner",
      label: "Jewelry Cleaner",
      family: "CLEANING",
      id: 221506
    },
    {
      value: "Eyeglass Cleaner",
      label: "Eyeglass Cleaner",
      family: "CLEANING",
      id: 999547
    },
    {
      value: "Electronics Cleaner",
      label: "Electronics Cleaner",
      family: "CLEANING",
      id: 953609
    },
    {
      value: "Leather Cleaner",
      label: "Leather Cleaner",
      family: "CLEANING",
      id: 122425
    },
    {
      value: "Granite Cleaner",
      label: "Granite Cleaner",
      family: "CLEANING",
      id: 1057515
    },
    {
      value: "Stainless Steel Cleaner",
      label: "Stainless Steel Cleaner",
      family: "CLEANING",
      id: 638240
    },
    {
      value: "Silver Cleaner",
      label: "Silver Cleaner",
      family: "CLEANING",
      id: 464940
    },
    {
      value: "Window Cleaner with Vinegar",
      label: "Window Cleaner with Vinegar",
      family: "CLEANING",
      id: 365264
    },
    {
      value: "Floor Cleaner with Bleach",
      label: "Floor Cleaner with Bleach",
      family: "CLEANING",
      id: 407769
    },
    {
      value: "Furniture Polish with Beeswax",
      label: "Furniture Polish with Beeswax",
      family: "CLEANING",
      id: 414888
    },
    {
      value: "Toilet Bowl Cleaner with Bleach",
      label: "Toilet Bowl Cleaner with Bleach",
      family: "CLEANING",
      id: 321798
    },
    {
      value: "Bathroom Cleaner with Lime",
      label: "Bathroom Cleaner with Lime",
      family: "CLEANING",
      id: 513853
    },
    {
      value: "Drain Cleaner with Enzymes",
      label: "Drain Cleaner with Enzymes",
      family: "CLEANING",
      id: 841612
    },
    {
      value: "Dish Soap with Grease-Cutting Power",
      label: "Dish Soap with Grease-Cutting Power",
      family: "CLEANING",
      id: 456875
    },
    {
      value: "Dishwasher Detergent with Rinse Aid",
      label: "Dishwasher Detergent with Rinse Aid",
      family: "CLEANING",
      id: 1079254
    },
    {
      value: "Oven Cleaner with Fume-Free Formula",
      label: "Oven Cleaner with Fume-Free Formula",
      family: "CLEANING",
      id: 1114903
    },
    {
      value: "Microwave Cleaner with Steam Action",
      label: "Microwave Cleaner with Steam Action",
      family: "CLEANING",
      id: 953413
    },
    {
      value: "Carpet Cleaner with Stain Guard",
      label: "Carpet Cleaner with Stain Guard",
      family: "CLEANING",
      id: 308766
    },
    {
      value: "Upholstery Cleaner with Odor Eliminator",
      label: "Upholstery Cleaner with Odor Eliminator",
      family: "CLEANING",
      id: 932281
    },
    {
      value: "Metal Cleaner with Rust Remover",
      label: "Metal Cleaner with Rust Remover",
      family: "CLEANING",
      id: 470762
    },
    {
      value: "Wood Cleaner with Lemon Oil",
      label: "Wood Cleaner with Lemon Oil",
      family: "CLEANING",
      id: 119187
    },
    {
      value: "Laundry Detergent with Fabric Softener",
      label: "Laundry Detergent with Fabric Softener",
      family: "CLEANING",
      id: 406965
    },
    {
      value: "Fabric Softener with Dryer Sheets",
      label: "Fabric Softener with Dryer Sheets",
      family: "CLEANING",
      id: 1178696
    },
    {
      value: "Bleach with Color-Safe Formula",
      label: "Bleach with Color-Safe Formula",
      family: "CLEANING",
      id: 522721
    },
    {
      value: "Stain Remover with OxiClean",
      label: "Stain Remover with OxiClean",
      family: "CLEANING",
      id: 1178697
    },
    {
      value: "Sponges with Scrubbing Pads",
      label: "Sponges with Scrubbing Pads",
      family: "CLEANING",
      id: 859932
    },
    {
      value: "Scrub Brushes with Long Handles",
      label: "Scrub Brushes with Long Handles",
      family: "CLEANING",
      id: 1260238
    },
    {
      value: "Cleaning Cloths with Microfiber Technology",
      label: "Cleaning Cloths with Microfiber Technology",
      family: "CLEANING",
      id: 762405
    },
    {
      value: "Mops with Spray Functions",
      label: "Mops with Spray Functions",
      family: "CLEANING",
      id: 507927
    },
    {
      value: "Brooms with Angled Bristles",
      label: "Brooms with Angled Bristles",
      family: "CLEANING",
      id: 949298
    },
    {
      value: "Dustpans with Rubber Edges",
      label: "Dustpans with Rubber Edges",
      family: "CLEANING",
      id: 411487
    },
    {
      value: "Buckets with Pour Spouts",
      label: "Buckets with Pour Spouts",
      family: "CLEANING",
      id: 208498
    },
    {
      value: "Gloves with Non-Slip Grip",
      label: "Gloves with Non-Slip Grip",
      family: "CLEANING",
      id: 812726
    },
    {
      value: "Trash Bags with Odor Control",
      label: "Trash Bags with Odor Control",
      family: "CLEANING",
      id: 463816
    },
    {
      value: "Goo Gone Original Liquid - Surface Safe Adhesive Remover",
      label: "Goo Gone Original Liquid - Surface Safe Adhesive Remover",
      family: "CLEANING",
      id: 1089044
    },
    {
      value: "Goo Gone Grout & Tile Cleaner",
      label: "Goo Gone Grout & Tile Cleaner",
      family: "CLEANING",
      id: 1121515
    },
    {
      value: "Clorox Bleach Crystals",
      label: "Clorox Bleach Crystals",
      family: "CLEANING",
      id: 949299
    },
    {
      value: "Clorox 2 Stain Remover and Color Booster",
      label: "Clorox 2 Stain Remover and Color Booster",
      family: "CLEANING",
      id: 363895
    },
    {
      value: "OxiClean White Revive Laundry Whitener + Stain Remover",
      label: "OxiClean White Revive Laundry Whitener + Stain Remover",
      family: "CLEANING",
      id: 463458
    },
    {
      value: "OxiClean Versatile Stain Remover Powder",
      label: "OxiClean Versatile Stain Remover Powder",
      family: "CLEANING",
      id: 841607
    },
    {
      value: "Borax 20 Mule Team Laundry Booster",
      label: "Borax 20 Mule Team Laundry Booster",
      family: "CLEANING",
      id: 1079258
    },
    {
      value: "Borax 20 Mule Team Multi-Purpose Cleaner",
      label: "Borax 20 Mule Team Multi-Purpose Cleaner",
      family: "CLEANING",
      id: 1346632
    },
    {
      value: "Pine-Sol Original Multi-Surface Cleaner",
      label: "Pine-Sol Original Multi-Surface Cleaner",
      family: "CLEANING",
      id: 1346626
    },
    {
      value: "Pine-Sol Lavender Clean Multi-Surface Cleaner",
      label: "Pine-Sol Lavender Clean Multi-Surface Cleaner",
      family: "CLEANING",
      id: 171890
    },
    {
      value: "Fantastik All-Purpose Cleaner - Original Scent",
      label: "Fantastik All-Purpose Cleaner - Original Scent",
      family: "CLEANING",
      id: 1346628
    },
    {
      value: "Fantastik All-Purpose Cleaner - Lemon Scent",
      label: "Fantastik All-Purpose Cleaner - Lemon Scent",
      family: "CLEANING",
      id: 1346627
    },
    {
      value: "Formula 409 All-Purpose Cleaner - Lemon Fresh",
      label: "Formula 409 All-Purpose Cleaner - Lemon Fresh",
      family: "CLEANING",
      id: 1346625
    },
    {
      value: "Formula 409 All-Purpose Cleaner - Antibacterial",
      label: "Formula 409 All-Purpose Cleaner - Antibacterial",
      family: "CLEANING",
      id: 1306197
    },
    {
      value: "Method Squirt + Mop Hard Floor Cleaner - Clementine",
      label: "Method Squirt + Mop Hard Floor Cleaner - Clementine",
      family: "CLEANING",
      id: 1306198
    },
    {
      value: "Method Squirt + Mop Hard Floor Cleaner - Wild Rhubarb",
      label: "Method Squirt + Mop Hard Floor Cleaner - Wild Rhubarb",
      family: "CLEANING",
      id: 1346643
    },
    {
      value: "OxiClean Versatile Stain",
      label: "OxiClean Versatile Stain",
      family: "CLEANING",
      id: 668753
    },
    {
      value: "Mop Hard Floor Cleaner x2",
      label: "Mop Hard Floor Cleaner x2",
      family: "CLEANING",
      id: 1306199
    },
    {
      value: "Wild Rhubarb x2",
      label: "Wild Rhubarb x2",
      family: "CLEANING",
      id: 1149225
    },
    {
      value: "Wild Rhubarb x3",
      label: "Wild Rhubarb x3",
      family: "CLEANING",
      id: 1090419
    },
    {
      value: "Wild Rhubarb x4",
      label: "Wild Rhubarb x4",
      family: "CLEANING",
      id: 1346637
    },
    {
      value: "Sponges x2",
      label: "Sponges x2",
      family: "CLEANING",
      id: 1214325
    },
    {
      value: "Sponges x3",
      label: "Sponges x3",
      family: "CLEANING",
      id: 269287
    },
    {
      value: "Furniture Polish LG",
      label: "Furniture Polish LG",
      family: "CLEANING",
      id: 1346638
    },
    {
      value: "Floor Cleaner LG",
      label: "Floor Cleaner LG",
      family: "CLEANING",
      id: 1306196
    },
    {
      value: "Soy Milk",
      label: "Soy Milk",
      family: "DAIRY",
      id: 1239810
    },
    {
      value: "Oat Milk",
      label: "Oat Milk",
      family: "DAIRY",
      id: 1239815
    },
    {
      value: "Coconut Milk",
      label: "Coconut Milk",
      family: "DAIRY",
      id: 1239819
    },
    {
      value: "Yogurt",
      label: "Yogurt",
      family: "DAIRY",
      id: 939207
    },
    {
      value: "Plain Yogurt",
      label: "Plain Yogurt",
      family: "DAIRY",
      id: 1239809
    },
    {
      value: "Greek Yogurt",
      label: "Greek Yogurt",
      family: "DAIRY",
      id: 1239817
    },
    {
      value: "Flavored Yogurt",
      label: "Flavored Yogurt",
      family: "DAIRY",
      id: 557408
    },
    {
      value: "Fruit Yogurt",
      label: "Fruit Yogurt",
      family: "DAIRY",
      id: 1239812
    },
    {
      value: "Yogurt Drinks",
      label: "Yogurt Drinks",
      family: "DAIRY",
      id: 1239911
    },
    {
      value: "Cheese",
      label: "Cheese",
      family: "DAIRY",
      id: 1239906
    },
    {
      value: "Cheddar Cheese",
      label: "Cheddar Cheese",
      family: "DAIRY",
      id: 838216
    },
    {
      value: "Swiss Cheese",
      label: "Swiss Cheese",
      family: "DAIRY",
      id: 1239808
    },
    {
      value: "Mozzarella Cheese",
      label: "Mozzarella Cheese",
      family: "DAIRY",
      id: 1239795
    },
    {
      value: "Provolone Cheese",
      label: "Provolone Cheese",
      family: "DAIRY",
      id: 1239956
    },
    {
      value: "Parmesan Cheese",
      label: "Parmesan Cheese",
      family: "DAIRY",
      id: 1239905
    },
    {
      value: "Pepper Jack Cheese",
      label: "Pepper Jack Cheese",
      family: "DAIRY",
      id: 1239740
    },
    {
      value: "American Cheese",
      label: "American Cheese",
      family: "DAIRY",
      id: 1239955
    },
    {
      value: "Cream Cheese",
      label: "Cream Cheese",
      family: "DAIRY",
      id: 838215
    },
    {
      value: "Cottage Cheese",
      label: "Cottage Cheese",
      family: "DAIRY",
      id: 1239908
    },
    {
      value: "Ricotta Cheese",
      label: "Ricotta Cheese",
      family: "DAIRY",
      id: 1239913
    },
    {
      value: "Feta Cheese",
      label: "Feta Cheese",
      family: "DAIRY",
      id: 1083152
    },
    {
      value: "Goat Cheese",
      label: "Goat Cheese",
      family: "DAIRY",
      id: 882624
    },
    {
      value: "Butter",
      label: "Butter",
      family: "DAIRY",
      id: 1083196
    },
    {
      value: "Salted Butter",
      label: "Salted Butter",
      family: "DAIRY",
      id: 1239783
    },
    {
      value: "Unsalted Butter",
      label: "Unsalted Butter",
      family: "DAIRY",
      id: 1239918
    },
    {
      value: "Margarine",
      label: "Margarine",
      family: "DAIRY",
      id: 939210
    },
    {
      value: "Sour Cream",
      label: "Sour Cream",
      family: "DAIRY",
      id: 129635
    },
    {
      value: "Milk",
      label: "Milk",
      family: "DAIRY",
      id: 1239746
    },
    {
      value: "Whole Milk",
      label: "Whole Milk",
      family: "DAIRY",
      id: 1239954
    },
    {
      value: "2% Milk",
      label: "2% Milk",
      family: "DAIRY",
      id: 939129
    },
    {
      value: "Skim Milk",
      label: "Skim Milk",
      family: "DAIRY",
      id: 1239807
    },
    {
      value: "Lactose-Free Milk",
      label: "Lactose-Free Milk",
      family: "DAIRY",
      id: 1239797
    },
    {
      value: "Almond Milk",
      label: "Almond Milk",
      family: "DAIRY",
      id: 1239749
    },
    {
      value: "Chocolate Ice Cream",
      label: "Chocolate Ice Cream",
      family: "DAIRY",
      id: 1239739
    },
    {
      value: "Vanilla Ice Cream",
      label: "Vanilla Ice Cream",
      family: "DAIRY",
      id: 1239785
    },
    {
      value: "Strawberry Ice Cream",
      label: "Strawberry Ice Cream",
      family: "DAIRY",
      id: 1239793
    },
    {
      value: "Chocolate Chip Cookie Dough Ice Cream",
      label: "Chocolate Chip Cookie Dough Ice Cream",
      family: "DAIRY",
      id: 1239741
    },
    {
      value: "Butter Pecan Ice Cream",
      label: "Butter Pecan Ice Cream",
      family: "DAIRY",
      id: 378685
    },
    {
      value: "Coffee Ice Cream",
      label: "Coffee Ice Cream",
      family: "DAIRY",
      id: 723184
    },
    {
      value: "Neapolitan Ice Cream",
      label: "Neapolitan Ice Cream",
      family: "DAIRY",
      id: 838408
    },
    {
      value: "Sherbet",
      label: "Sherbet",
      family: "DAIRY",
      id: 849098
    },
    {
      value: "Frozen Yogurt",
      label: "Frozen Yogurt",
      family: "DAIRY",
      id: 471985
    },
    {
      value: "Chocolate Frozen Yogurt",
      label: "Chocolate Frozen Yogurt",
      family: "DAIRY",
      id: 1239914
    },
    {
      value: "Vanilla Frozen Yogurt",
      label: "Vanilla Frozen Yogurt",
      family: "DAIRY",
      id: 838412
    },
    {
      value: "Strawberry Frozen Yogurt",
      label: "Strawberry Frozen Yogurt",
      family: "DAIRY",
      id: 578097
    },
    {
      value: "Eggs",
      label: "Eggs",
      family: "DAIRY",
      id: 1239915
    },
    {
      value: "Large Eggs",
      label: "Large Eggs",
      family: "DAIRY",
      id: 939130
    },
    {
      value: "Medium Eggs",
      label: "Medium Eggs",
      family: "DAIRY",
      id: 838217
    },
    {
      value: "Small Eggs",
      label: "Small Eggs",
      family: "DAIRY",
      id: 1044592
    },
    {
      value: "Egg Whites",
      label: "Egg Whites",
      family: "DAIRY",
      id: 898656
    },
    {
      value: "Egg Beaters",
      label: "Egg Beaters",
      family: "DAIRY",
      id: 1239736
    },
    {
      value: "Cheese Slices",
      label: "Cheese Slices",
      family: "DAIRY",
      id: 939131
    },
    {
      value: "Cheddar Cheese Slices",
      label: "Cheddar Cheese Slices",
      family: "DAIRY",
      id: 1239912
    },
    {
      value: "Swiss Cheese Slices",
      label: "Swiss Cheese Slices",
      family: "DAIRY",
      id: 841667
    },
    {
      value: "Provolone Cheese Slices",
      label: "Provolone Cheese Slices",
      family: "DAIRY",
      id: 838407
    },
    {
      value: "American Cheese Slices",
      label: "American Cheese Slices",
      family: "DAIRY",
      id: 1239806
    },
    {
      value: "Pepper Jack Cheese Slices",
      label: "Pepper Jack Cheese Slices",
      family: "DAIRY",
      id: 1164290
    },
    {
      value: "String Cheese",
      label: "String Cheese",
      family: "DAIRY",
      id: 1239916
    },
    {
      value: "Yogurt Tubes",
      label: "Yogurt Tubes",
      family: "DAIRY",
      id: 1239789
    },
    {
      value: "Flavored Yogurt Tubes",
      label: "Flavored Yogurt Tubes",
      family: "DAIRY",
      id: 1239720
    },
    {
      value: "Fruit Yogurt Tubes",
      label: "Fruit Yogurt Tubes",
      family: "DAIRY",
      id: 1239796
    },
    {
      value: "Pudding",
      label: "Pudding",
      family: "DAIRY",
      id: 164088
    },
    {
      value: "Chocolate Pudding",
      label: "Chocolate Pudding",
      family: "DAIRY",
      id: 838413
    },
    {
      value: "Vanilla Pudding",
      label: "Vanilla Pudding",
      family: "DAIRY",
      id: 358272
    },
    {
      value: "Buttermilk",
      label: "Buttermilk",
      family: "DAIRY",
      id: 179615
    },
    {
      value: "Kefir",
      label: "Kefir",
      family: "DAIRY",
      id: 1239794
    },
    {
      value: "Custard",
      label: "Custard",
      family: "DAIRY",
      id: 1014865
    },
    {
      value: "Cream Cheese Spreads",
      label: "Cream Cheese Spreads",
      family: "DAIRY",
      id: 1239790
    },
    {
      value: "Flavored Cream Cheese Spreads",
      label: "Flavored Cream Cheese Spreads",
      family: "DAIRY",
      id: 1239798
    },
    {
      value: "Whipped Cream Cheese",
      label: "Whipped Cream Cheese",
      family: "DAIRY",
      id: 372369
    },
    {
      value: "Cottage Cheese with Fruits",
      label: "Cottage Cheese with Fruits",
      family: "DAIRY",
      id: 592801
    },
    {
      value: "Ricotta Cheese with Herbs",
      label: "Ricotta Cheese with Herbs",
      family: "DAIRY",
      id: 1124973
    },
    {
      value: "Yogurt Parfaits",
      label: "Yogurt Parfaits",
      family: "DAIRY",
      id: 329397
    },
    {
      value: "Greek Yogurt Parfaits",
      label: "Greek Yogurt Parfaits",
      family: "DAIRY",
      id: 1239792
    },
    {
      value: "Fruit Yogurt Parfaits",
      label: "Fruit Yogurt Parfaits",
      family: "DAIRY",
      id: 838415
    },
    {
      value: "Sliced Roast Beef",
      label: "Sliced Roast Beef",
      family: "DELI",
      id: 319093
    },
    {
      value: "Sliced Salami",
      label: "Sliced Salami",
      family: "DELI",
      id: 732006
    },
    {
      value: "Sliced Bologna",
      label: "Sliced Bologna",
      family: "DELI",
      id: 732007
    },
    {
      value: "Sliced Chicken Breast",
      label: "Sliced Chicken Breast",
      family: "DELI",
      id: 557285
    },
    {
      value: "Sliced Cheese",
      label: "Sliced Cheese",
      family: "DELI",
      id: 866927
    },
    {
      value: "Cheddar Cheese",
      label: "Cheddar Cheese",
      family: "DELI",
      id: 671076
    },
    {
      value: "Swiss Cheese",
      label: "Swiss Cheese",
      family: "DELI",
      id: 318935
    },
    {
      value: "Provolone Cheese",
      label: "Provolone Cheese",
      family: "DELI",
      id: 1121615
    },
    {
      value: "Mozzarella Cheese",
      label: "Mozzarella Cheese",
      family: "DELI",
      id: 671062
    },
    {
      value: "Pepper Jack Cheese",
      label: "Pepper Jack Cheese",
      family: "DELI",
      id: 671079
    },
    {
      value: "American Cheese",
      label: "American Cheese",
      family: "DELI",
      id: 567779
    },
    {
      value: "Potato Salad",
      label: "Potato Salad",
      family: "DELI",
      id: 671083
    },
    {
      value: "Macaroni Salad",
      label: "Macaroni Salad",
      family: "DELI",
      id: 828630
    },
    {
      value: "Coleslaw",
      label: "Coleslaw",
      family: "DELI",
      id: 828632
    },
    {
      value: "Chicken Salad",
      label: "Chicken Salad",
      family: "DELI",
      id: 567778
    },
    {
      value: "Tuna Salad",
      label: "Tuna Salad",
      family: "DELI",
      id: 671051
    },
    {
      value: "Egg Salad",
      label: "Egg Salad",
      family: "DELI",
      id: 1113847
    },
    {
      value: "Pasta Salad",
      label: "Pasta Salad",
      family: "DELI",
      id: 1072167
    },
    {
      value: "Olives",
      label: "Olives",
      family: "DELI",
      id: 418025
    },
    {
      value: "Pickles",
      label: "Pickles",
      family: "DELI",
      id: 888763
    },
    {
      value: "Dips",
      label: "Dips",
      family: "DELI",
      id: 517906
    },
    {
      value: "Hummus",
      label: "Hummus",
      family: "DELI",
      id: 318932
    },
    {
      value: "Guacamole",
      label: "Guacamole",
      family: "DELI",
      id: 220613
    },
    {
      value: "Salsa",
      label: "Salsa",
      family: "DELI",
      id: 517904
    },
    {
      value: "Prepared Sandwiches",
      label: "Prepared Sandwiches",
      family: "DELI",
      id: 407533
    },
    {
      value: "Turkey Sandwich",
      label: "Turkey Sandwich",
      family: "DELI",
      id: 517905
    },
    {
      value: "Ham Sandwich",
      label: "Ham Sandwich",
      family: "DELI",
      id: 418026
    },
    {
      value: "Roast Beef Sandwich",
      label: "Roast Beef Sandwich",
      family: "DELI",
      id: 844017
    },
    {
      value: "Vegetarian Sandwich",
      label: "Vegetarian Sandwich",
      family: "DELI",
      id: 671908
    },
    {
      value: "Wraps",
      label: "Wraps",
      family: "DELI",
      id: 357996
    },
    {
      value: "Chicken Caesar Wrap",
      label: "Chicken Caesar Wrap",
      family: "DELI",
      id: 843462
    },
    {
      value: "Greek Wrap",
      label: "Greek Wrap",
      family: "DELI",
      id: 108701
    },
    {
      value: "Soup",
      label: "Soup",
      family: "DELI",
      id: 619965
    },
    {
      value: "Chicken Noodle Soup",
      label: "Chicken Noodle Soup",
      family: "DELI",
      id: 368419
    },
    {
      value: "Tomato Soup",
      label: "Tomato Soup",
      family: "DELI",
      id: 946671
    },
    {
      value: "Clam Chowder",
      label: "Clam Chowder",
      family: "DELI",
      id: 1305845
    },
    {
      value: "Side Dishes",
      label: "Side Dishes",
      family: "DELI",
      id: 1121616
    },
    {
      value: "Mashed Potatoes",
      label: "Mashed Potatoes",
      family: "DELI",
      id: 319095
    },
    {
      value: "Green Bean Casserole",
      label: "Green Bean Casserole",
      family: "DELI",
      id: 108696
    },
    {
      value: "Stuffing",
      label: "Stuffing",
      family: "DELI",
      id: 208426
    },
    {
      value: "Chicken Eggs SM",
      label: "Chicken Eggs SM",
      family: "EGGS",
      id: 208384
    },
    {
      value: "Chicken Eggs MD",
      label: "Chicken Eggs MD",
      family: "EGGS",
      id: 557257
    },
    {
      value: "Chicken Eggs LG",
      label: "Chicken Eggs LG",
      family: "EGGS",
      id: 557256
    },
    {
      value: "Chicken Eggs XL",
      label: "Chicken Eggs XL",
      family: "EGGS",
      id: 376427
    },
    {
      value: "Quali Eggs",
      label: "Quali Eggs",
      family: "EGGS",
      id: 1089163
    },
    {
      value: "Frozen Chicken",
      label: "Frozen Chicken",
      family: "FROZEN FOODS",
      id: 1152348
    },
    {
      value: "Frozen Vegetables",
      label: "Frozen Vegetables",
      family: "FROZEN FOODS",
      id: 1127862
    },
    {
      value: "Frozen Fruit",
      label: "Frozen Fruit",
      family: "FROZEN FOODS",
      id: 1152350
    },
    {
      value: "Frozen Meals",
      label: "Frozen Meals",
      family: "FROZEN FOODS",
      id: 1152346
    },
    {
      value: "Frozen Breakfast Foods",
      label: "Frozen Breakfast Foods",
      family: "FROZEN FOODS",
      id: 700610
    },
    {
      value: "Frozen Ice Cream",
      label: "Frozen Ice Cream",
      family: "FROZEN FOODS",
      id: 258411
    },
    {
      value: "Frozen Desserts",
      label: "Frozen Desserts",
      family: "FROZEN FOODS",
      id: 700609
    },
    {
      value: "Frozen Meat",
      label: "Frozen Meat",
      family: "FROZEN FOODS",
      id: 507457
    },
    {
      value: "Frozen Poultry",
      label: "Frozen Poultry",
      family: "FROZEN FOODS",
      id: 852938
    },
    {
      value: "Frozen Seafood",
      label: "Frozen Seafood",
      family: "FROZEN FOODS",
      id: 852937
    },
    {
      value: "Frozen French Fries",
      label: "Frozen French Fries",
      family: "FROZEN FOODS",
      id: 788708
    },
    {
      value: "Frozen Appetizers",
      label: "Frozen Appetizers",
      family: "FROZEN FOODS",
      id: 979554
    },
    {
      value: "Frozen Snacks",
      label: "Frozen Snacks",
      family: "FROZEN FOODS",
      id: 1152355
    },
    {
      value: "Small Red Apples",
      label: "Small Red Apples",
      family: "GROCERY I",
      id: 692537
    },
    {
      value: "Large Red Apples",
      label: "Large Red Apples",
      family: "GROCERY I",
      id: 938574
    },
    {
      value: "Red Apples Bag",
      label: "Red Apples Bag",
      family: "GROCERY I",
      id: 114790
    },
    {
      value: "Small Green Apples",
      label: "Small Green Apples",
      family: "GROCERY I",
      id: 464302
    },
    {
      value: "Large Green Apples",
      label: "Large Green Apples",
      family: "GROCERY I",
      id: 567623
    },
    {
      value: "Green Apples Bag",
      label: "Green Apples Bag",
      family: "GROCERY I",
      id: 205387
    },
    {
      value: "Small Bananas",
      label: "Small Bananas",
      family: "GROCERY I",
      id: 358096
    },
    {
      value: "Large Bananas",
      label: "Large Bananas",
      family: "GROCERY I",
      id: 1146801
    },
    {
      value: "Bananas Bunch",
      label: "Bananas Bunch",
      family: "GROCERY I",
      id: 1084881
    },
    {
      value: "Small Avocados",
      label: "Small Avocados",
      family: "GROCERY I",
      id: 1146802
    },
    {
      value: "Large Avocados",
      label: "Large Avocados",
      family: "GROCERY I",
      id: 570917
    },
    {
      value: "Avocados Bag",
      label: "Avocados Bag",
      family: "GROCERY I",
      id: 804503
    },
    {
      value: "Small Lemons",
      label: "Small Lemons",
      family: "GROCERY I",
      id: 208514
    },
    {
      value: "Large Lemons",
      label: "Large Lemons",
      family: "GROCERY I",
      id: 850460
    },
    {
      value: "Lemons Bag",
      label: "Lemons Bag",
      family: "GROCERY I",
      id: 627263
    },
    {
      value: "Small Limes",
      label: "Small Limes",
      family: "GROCERY I",
      id: 819194
    },
    {
      value: "Large Limes",
      label: "Large Limes",
      family: "GROCERY I",
      id: 421066
    },
    {
      value: "Limes Bag",
      label: "Limes Bag",
      family: "GROCERY I",
      id: 364606
    },
    {
      value: "Small Oranges",
      label: "Small Oranges",
      family: "GROCERY I",
      id: 657869
    },
    {
      value: "Large Oranges",
      label: "Large Oranges",
      family: "GROCERY I",
      id: 1157462
    },
    {
      value: "Oranges Bag",
      label: "Oranges Bag",
      family: "GROCERY I",
      id: 314384
    },
    {
      value: "Small Strawberries",
      label: "Small Strawberries",
      family: "GROCERY I",
      id: 1146800
    },
    {
      value: "Large Strawberries",
      label: "Large Strawberries",
      family: "GROCERY I",
      id: 567588
    },
    {
      value: "Strawberries Box",
      label: "Strawberries Box",
      family: "GROCERY I",
      id: 559870
    },
    {
      value: "Small Blueberries",
      label: "Small Blueberries",
      family: "GROCERY I",
      id: 261700
    },
    {
      value: "Large Blueberries",
      label: "Large Blueberries",
      family: "GROCERY I",
      id: 261052
    },
    {
      value: "Blueberries Box",
      label: "Blueberries Box",
      family: "GROCERY I",
      id: 315460
    },
    {
      value: "Small Raspberries",
      label: "Small Raspberries",
      family: "GROCERY I",
      id: 580929
    },
    {
      value: "Large Raspberries",
      label: "Large Raspberries",
      family: "GROCERY I",
      id: 864511
    },
    {
      value: "Raspberries Box",
      label: "Raspberries Box",
      family: "GROCERY I",
      id: 207857
    },
    {
      value: "Small Blackberries",
      label: "Small Blackberries",
      family: "GROCERY I",
      id: 1157564
    },
    {
      value: "Large Blackberries",
      label: "Large Blackberries",
      family: "GROCERY I",
      id: 850333
    },
    {
      value: "Blackberries Box",
      label: "Blackberries Box",
      family: "GROCERY I",
      id: 1159413
    },
    {
      value: "Small Potatoes",
      label: "Small Potatoes",
      family: "GROCERY I",
      id: 211203
    },
    {
      value: "Large Potatoes",
      label: "Large Potatoes",
      family: "GROCERY I",
      id: 876663
    },
    {
      value: "Potatoes Bag",
      label: "Potatoes Bag",
      family: "GROCERY I",
      id: 115850
    },
    {
      value: "Small Sweet Potatoes",
      label: "Small Sweet Potatoes",
      family: "GROCERY I",
      id: 315322
    },
    {
      value: "Large Sweet Potatoes",
      label: "Large Sweet Potatoes",
      family: "GROCERY I",
      id: 1036689
    },
    {
      value: "Sweet Potatoes Bag",
      label: "Sweet Potatoes Bag",
      family: "GROCERY I",
      id: 215356
    },
    {
      value: "Small Onions",
      label: "Small Onions",
      family: "GROCERY I",
      id: 265237
    },
    {
      value: "Large Onions",
      label: "Large Onions",
      family: "GROCERY I",
      id: 841842
    },
    {
      value: "Onions Bag",
      label: "Onions Bag",
      family: "GROCERY I",
      id: 162066
    },
    {
      value: "Small Garlic",
      label: "Small Garlic",
      family: "GROCERY I",
      id: 414621
    },
    {
      value: "Large Garlic",
      label: "Large Garlic",
      family: "GROCERY I",
      id: 165594
    },
    {
      value: "Garlic Bag",
      label: "Garlic Bag",
      family: "GROCERY I",
      id: 1162382
    },
    {
      value: "Small Carrots",
      label: "Small Carrots",
      family: "GROCERY I",
      id: 847863
    },
    {
      value: "Large Carrots",
      label: "Large Carrots",
      family: "GROCERY I",
      id: 265559
    },
    {
      value: "Carrots Bag",
      label: "Carrots Bag",
      family: "GROCERY I",
      id: 1057034
    },
    {
      value: "Small Celery",
      label: "Small Celery",
      family: "GROCERY I",
      id: 108797
    },
    {
      value: "Large Celery",
      label: "Large Celery",
      family: "GROCERY I",
      id: 165704
    },
    {
      value: "Celery Bunch",
      label: "Celery Bunch",
      family: "GROCERY I",
      id: 621300
    },
    {
      value: "Small Broccoli",
      label: "Small Broccoli",
      family: "GROCERY I",
      id: 848765
    },
    {
      value: "Large Broccoli",
      label: "Large Broccoli",
      family: "GROCERY I",
      id: 1159415
    },
    {
      value: "Broccoli Head",
      label: "Broccoli Head",
      family: "GROCERY I",
      id: 1052563
    },
    {
      value: "Small Cauliflower",
      label: "Small Cauliflower",
      family: "GROCERY I",
      id: 1105212
    },
    {
      value: "Large Cauliflower",
      label: "Large Cauliflower",
      family: "GROCERY I",
      id: 213652
    },
    {
      value: "Cauliflower Head",
      label: "Cauliflower Head",
      family: "GROCERY I",
      id: 165988
    },
    {
      value: "Small Spinach",
      label: "Small Spinach",
      family: "GROCERY I",
      id: 414750
    },
    {
      value: "Large Spinach",
      label: "Large Spinach",
      family: "GROCERY I",
      id: 165693
    },
    {
      value: "Spinach Bag",
      label: "Spinach Bag",
      family: "GROCERY I",
      id: 362548
    },
    {
      value: "Small Lettuce",
      label: "Small Lettuce",
      family: "GROCERY I",
      id: 510055
    },
    {
      value: "Large Lettuce",
      label: "Large Lettuce",
      family: "GROCERY I",
      id: 414455
    },
    {
      value: "Lettuce Head",
      label: "Lettuce Head",
      family: "GROCERY I",
      id: 268834
    },
    {
      value: "Small Cucumbers",
      label: "Small Cucumbers",
      family: "GROCERY I",
      id: 1084437
    },
    {
      value: "Large Cucumbers",
      label: "Large Cucumbers",
      family: "GROCERY I",
      id: 938566
    },
    {
      value: "Cucumbers Bag",
      label: "Cucumbers Bag",
      family: "GROCERY I",
      id: 368136
    },
    {
      value: "Small Bell Peppers",
      label: "Small Bell Peppers",
      family: "GROCERY I",
      id: 1137146
    },
    {
      value: "Large Bell Peppers",
      label: "Large Bell Peppers",
      family: "GROCERY I",
      id: 1105211
    },
    {
      value: "Bell Peppers Bag",
      label: "Bell Peppers Bag",
      family: "GROCERY I",
      id: 765518
    },
    {
      value: "Small Tomatoes",
      label: "Small Tomatoes",
      family: "GROCERY I",
      id: 564110
    },
    {
      value: "Large Tomatoes",
      label: "Large Tomatoes",
      family: "GROCERY I",
      id: 111397
    },
    {
      value: "Tomatoes Bag",
      label: "Tomatoes Bag",
      family: "GROCERY I",
      id: 464339
    },
    {
      value: "Small Mushrooms",
      label: "Small Mushrooms",
      family: "GROCERY I",
      id: 1146786
    },
    {
      value: "Large Mushrooms",
      label: "Large Mushrooms",
      family: "GROCERY I",
      id: 514149
    },
    {
      value: "Mushrooms Box",
      label: "Mushrooms Box",
      family: "GROCERY I",
      id: 302997
    },
    {
      value: "Small Corn",
      label: "Small Corn",
      family: "GROCERY I",
      id: 378330
    },
    {
      value: "Large Corn",
      label: "Large Corn",
      family: "GROCERY I",
      id: 172343
    },
    {
      value: "Corn Pack",
      label: "Corn Pack",
      family: "GROCERY I",
      id: 158875
    },
    {
      value: "Small Green Beans",
      label: "Small Green Beans",
      family: "GROCERY I",
      id: 315220
    },
    {
      value: "Large Green Beans",
      label: "Large Green Beans",
      family: "GROCERY I",
      id: 417835
    },
    {
      value: "Green Beans Bag",
      label: "Green Beans Bag",
      family: "GROCERY I",
      id: 1146795
    },
    {
      value: "Small Peas",
      label: "Small Peas",
      family: "GROCERY I",
      id: 1159414
    },
    {
      value: "Large Peas",
      label: "Large Peas",
      family: "GROCERY I",
      id: 850334
    },
    {
      value: "Peas Bag",
      label: "Peas Bag",
      family: "GROCERY I",
      id: 129297
    },
    {
      value: "Small Asparagus",
      label: "Small Asparagus",
      family: "GROCERY I",
      id: 926958
    },
    {
      value: "Large Asparagus",
      label: "Large Asparagus",
      family: "GROCERY I",
      id: 153267
    },
    {
      value: "Asparagus Bunch",
      label: "Asparagus Bunch",
      family: "GROCERY I",
      id: 115720
    },
    {
      value: "Small Zucchini",
      label: "Small Zucchini",
      family: "GROCERY I",
      id: 953562
    },
    {
      value: "Large Zucchini",
      label: "Large Zucchini",
      family: "GROCERY I",
      id: 564274
    },
    {
      value: "Zucchini Bag",
      label: "Zucchini Bag",
      family: "GROCERY I",
      id: 724498
    },
    {
      value: "Small Eggplant",
      label: "Small Eggplant",
      family: "GROCERY I",
      id: 355090
    },
    {
      value: "Large Eggplant",
      label: "Large Eggplant",
      family: "GROCERY I",
      id: 414353
    },
    {
      value: "Eggplant Each",
      label: "Eggplant Each",
      family: "GROCERY I",
      id: 414454
    },
    {
      value: "Small Ginger",
      label: "Small Ginger",
      family: "GROCERY I",
      id: 215331
    },
    {
      value: "Large Ginger",
      label: "Large Ginger",
      family: "GROCERY I",
      id: 368260
    },
    {
      value: "Ginger Root",
      label: "Ginger Root",
      family: "GROCERY I",
      id: 1003679
    },
    {
      value: "Small Cilantro",
      label: "Small Cilantro",
      family: "GROCERY I",
      id: 1146784
    },
    {
      value: "Large Cilantro",
      label: "Large Cilantro",
      family: "GROCERY I",
      id: 258396
    },
    {
      value: "Cilantro Bunch",
      label: "Cilantro Bunch",
      family: "GROCERY I",
      id: 577740
    },
    {
      value: "Small Parsley",
      label: "Small Parsley",
      family: "GROCERY I",
      id: 258395
    },
    {
      value: "Large Parsley",
      label: "Large Parsley",
      family: "GROCERY I",
      id: 1146787
    },
    {
      value: "Parsley Bunch",
      label: "Parsley Bunch",
      family: "GROCERY I",
      id: 459804
    },
    {
      value: "Small Basil",
      label: "Small Basil",
      family: "GROCERY I",
      id: 567750
    },
    {
      value: "Large Basil",
      label: "Large Basil",
      family: "GROCERY I",
      id: 805321
    },
    {
      value: "Basil Bunch",
      label: "Basil Bunch",
      family: "GROCERY I",
      id: 456870
    },
    {
      value: "Small Rosemary",
      label: "Small Rosemary",
      family: "GROCERY I",
      id: 507870
    },
    {
      value: "Large Rosemary",
      label: "Large Rosemary",
      family: "GROCERY I",
      id: 1146797
    },
    {
      value: "Rosemary Bunch",
      label: "Rosemary Bunch",
      family: "GROCERY I",
      id: 939661
    },
    {
      value: "Small Thyme",
      label: "Small Thyme",
      family: "GROCERY I",
      id: 122419
    },
    {
      value: "Large Thyme",
      label: "Large Thyme",
      family: "GROCERY I",
      id: 315221
    },
    {
      value: "Thyme Bunch",
      label: "Thyme Bunch",
      family: "GROCERY I",
      id: 457556
    },
    {
      value: "Small Oregano",
      label: "Small Oregano",
      family: "GROCERY I",
      id: 402175
    },
    {
      value: "Large Oregano",
      label: "Large Oregano",
      family: "GROCERY I",
      id: 938576
    },
    {
      value: "Oregano Bunch",
      label: "Oregano Bunch",
      family: "GROCERY I",
      id: 1084882
    },
    {
      value: "Small Mint",
      label: "Small Mint",
      family: "GROCERY I",
      id: 949053
    },
    {
      value: "Large Mint",
      label: "Large Mint",
      family: "GROCERY I",
      id: 129296
    },
    {
      value: "Mint Bunch",
      label: "Mint Bunch",
      family: "GROCERY I",
      id: 1157329
    },
    {
      value: "Small Green Onions",
      label: "Small Green Onions",
      family: "GROCERY I",
      id: 268662
    },
    {
      value: "Large Green Onions",
      label: "Large Green Onions",
      family: "GROCERY I",
      id: 1136979
    },
    {
      value: "Green Onions Bunch",
      label: "Green Onions Bunch",
      family: "GROCERY I",
      id: 116017
    },
    {
      value: "Small Chives",
      label: "Small Chives",
      family: "GROCERY I",
      id: 557810
    },
    {
      value: "Large Chives",
      label: "Large Chives",
      family: "GROCERY I",
      id: 521818
    },
    {
      value: "Chives Bunch",
      label: "Chives Bunch",
      family: "GROCERY I",
      id: 1246784
    },
    {
      value: "Small Dill",
      label: "Small Dill",
      family: "GROCERY I",
      id: 517615
    },
    {
      value: "Large Dill",
      label: "Large Dill",
      family: "GROCERY I",
      id: 172184
    },
    {
      value: "Dill Bunch",
      label: "Dill Bunch",
      family: "GROCERY I",
      id: 302998
    },
    {
      value: "Small Bay Leaves",
      label: "Small Bay Leaves",
      family: "GROCERY I",
      id: 414426
    },
    {
      value: "Large Bay Leaves",
      label: "Large Bay Leaves",
      family: "GROCERY I",
      id: 1146783
    },
    {
      value: "Bay Leaves Bag",
      label: "Bay Leaves Bag",
      family: "GROCERY I",
      id: 464334
    },
    {
      value: "Small Brown Rice",
      label: "Small Brown Rice",
      family: "GROCERY I",
      id: 222975
    },
    {
      value: "Large Brown Rice",
      label: "Large Brown Rice",
      family: "GROCERY I",
      id: 559873
    },
    {
      value: "Brown Rice Bag",
      label: "Brown Rice Bag",
      family: "GROCERY I",
      id: 1165989
    },
    {
      value: "Small White Rice",
      label: "Small White Rice",
      family: "GROCERY I",
      id: 1037846
    },
    {
      value: "Large White Rice",
      label: "Large White Rice",
      family: "GROCERY I",
      id: 1109389
    },
    {
      value: "White Rice Bag",
      label: "White Rice Bag",
      family: "GROCERY I",
      id: 938567
    },
    {
      value: "Small Quinoa",
      label: "Small Quinoa",
      family: "GROCERY I",
      id: 830797
    },
    {
      value: "Large Quinoa",
      label: "Large Quinoa",
      family: "GROCERY I",
      id: 1080756
    },
    {
      value: "Quinoa Bag",
      label: "Quinoa Bag",
      family: "GROCERY I",
      id: 687549
    },
    {
      value: "Small Oats",
      label: "Small Oats",
      family: "GROCERY I",
      id: 123601
    },
    {
      value: "Large Oats",
      label: "Large Oats",
      family: "GROCERY I",
      id: 464336
    },
    {
      value: "Oats Container",
      label: "Oats Container",
      family: "GROCERY I",
      id: 1156722
    },
    {
      value: "Small Pasta",
      label: "Small Pasta",
      family: "GROCERY I",
      id: 765519
    },
    {
      value: "Large Pasta",
      label: "Large Pasta",
      family: "GROCERY I",
      id: 1171142
    },
    {
      value: "Pasta Box",
      label: "Pasta Box",
      family: "GROCERY I",
      id: 554049
    },
    {
      value: "Small Canned Tomatoes",
      label: "Small Canned Tomatoes",
      family: "GROCERY I",
      id: 1012787
    },
    {
      value: "Large Canned Tomatoes",
      label: "Large Canned Tomatoes",
      family: "GROCERY I",
      id: 401817
    },
    {
      value: "Canned Tomatoes Pack",
      label: "Canned Tomatoes Pack",
      family: "GROCERY I",
      id: 567579
    },
    {
      value: "Small Canned Beans",
      label: "Small Canned Beans",
      family: "GROCERY I",
      id: 564533
    },
    {
      value: "Large Canned Beans",
      label: "Large Canned Beans",
      family: "GROCERY I",
      id: 1012788
    },
    {
      value: "Canned Beans Pack",
      label: "Canned Beans Pack",
      family: "GROCERY I",
      id: 212552
    },
    {
      value: "Small Canned Corn",
      label: "Small Canned Corn",
      family: "GROCERY I",
      id: 1168718
    },
    {
      value: "Large Canned Corn",
      label: "Large Canned Corn",
      family: "GROCERY I",
      id: 964752
    },
    {
      value: "Canned Corn Pack",
      label: "Canned Corn Pack",
      family: "GROCERY I",
      id: 828204
    },
    {
      value: "Small Canned Peas",
      label: "Small Canned Peas",
      family: "GROCERY I",
      id: 213788
    },
    {
      value: "Large Canned Peas",
      label: "Large Canned Peas",
      family: "GROCERY I",
      id: 765520
    },
    {
      value: "Canned Peas Pack",
      label: "Canned Peas Pack",
      family: "GROCERY I",
      id: 1165988
    },
    {
      value: "Small Canned Tuna",
      label: "Small Canned Tuna",
      family: "GROCERY I",
      id: 564534
    },
    {
      value: "Large Canned Tuna",
      label: "Large Canned Tuna",
      family: "GROCERY I",
      id: 155610
    },
    {
      value: "Canned Tuna Pack",
      label: "Canned Tuna Pack",
      family: "GROCERY I",
      id: 759694
    },
    {
      value: "Small Canned Salmon",
      label: "Small Canned Salmon",
      family: "GROCERY I",
      id: 750857
    },
    {
      value: "Large Canned Salmon",
      label: "Large Canned Salmon",
      family: "GROCERY I",
      id: 511397
    },
    {
      value: "Canned Salmon Pack",
      label: "Canned Salmon Pack",
      family: "GROCERY I",
      id: 514597
    },
    {
      value: "Small Olive Oil",
      label: "Small Olive Oil",
      family: "GROCERY I",
      id: 155607
    },
    {
      value: "Large Olive Oil",
      label: "Large Olive Oil",
      family: "GROCERY I",
      id: 222879
    },
    {
      value: "Olive Oil Bottle",
      label: "Olive Oil Bottle",
      family: "GROCERY I",
      id: 933780
    },
    {
      value: "Small Vegetable Oil",
      label: "Small Vegetable Oil",
      family: "GROCERY I",
      id: 804974
    },
    {
      value: "Large Vegetable Oil",
      label: "Large Vegetable Oil",
      family: "GROCERY I",
      id: 843585
    },
    {
      value: "Vegetable Oil Bottle",
      label: "Vegetable Oil Bottle",
      family: "GROCERY I",
      id: 1037845
    },
    {
      value: "Small Vinegar",
      label: "Small Vinegar",
      family: "GROCERY I",
      id: 1070962
    },
    {
      value: "Large Vinegar",
      label: "Large Vinegar",
      family: "GROCERY I",
      id: 683720
    },
    {
      value: "Vinegar Bottle",
      label: "Vinegar Bottle",
      family: "GROCERY I",
      id: 938570
    },
    {
      value: "Small Soy Sauce",
      label: "Small Soy Sauce",
      family: "GROCERY I",
      id: 223434
    },
    {
      value: "Large Soy Sauce",
      label: "Large Soy Sauce",
      family: "GROCERY I",
      id: 265254
    },
    {
      value: "Soy Sauce Bottle",
      label: "Soy Sauce Bottle",
      family: "GROCERY I",
      id: 261053
    },
    {
      value: "Small Honey",
      label: "Small Honey",
      family: "GROCERY I",
      id: 229368
    },
    {
      value: "Large Honey",
      label: "Large Honey",
      family: "GROCERY I",
      id: 1146785
    },
    {
      value: "Honey Jar",
      label: "Honey Jar",
      family: "GROCERY I",
      id: 510054
    },
    {
      value: "Small Maple Syrup",
      label: "Small Maple Syrup",
      family: "GROCERY I",
      id: 598414
    },
    {
      value: "Large Maple Syrup",
      label: "Large Maple Syrup",
      family: "GROCERY I",
      id: 1246758
    },
    {
      value: "Maple Syrup Bottle",
      label: "Maple Syrup Bottle",
      family: "GROCERY I",
      id: 1078288
    },
    {
      value: "Small Salt",
      label: "Small Salt",
      family: "GROCERY I",
      id: 868529
    },
    {
      value: "Large Salt",
      label: "Large Salt",
      family: "GROCERY I",
      id: 502067
    },
    {
      value: "Salt Container",
      label: "Salt Container",
      family: "GROCERY I",
      id: 115693
    },
    {
      value: "Small Pepper",
      label: "Small Pepper",
      family: "GROCERY I",
      id: 1168717
    },
    {
      value: "Large Pepper",
      label: "Large Pepper",
      family: "GROCERY I",
      id: 371434
    },
    {
      value: "Pepper Container",
      label: "Pepper Container",
      family: "GROCERY I",
      id: 462673
    },
    {
      value: "Red Apples",
      label: "Red Apples",
      family: "GROCERY I",
      id: 323013
    },
    {
      value: "Red Apples Bag x3",
      label: "Red Apples Bag x3",
      family: "GROCERY I",
      id: 358515
    },
    {
      value: "Red Apples Bag x6",
      label: "Red Apples Bag x6",
      family: "GROCERY I",
      id: 215352
    },
    {
      value: "Green Apples",
      label: "Green Apples",
      family: "GROCERY I",
      id: 1176558
    },
    {
      value: "Green Apples Bag x4",
      label: "Green Apples Bag x4",
      family: "GROCERY I",
      id: 262991
    },
    {
      value: "Green Apples Bag x8",
      label: "Green Apples Bag x8",
      family: "GROCERY I",
      id: 862454
    },
    {
      value: "Bananas",
      label: "Bananas",
      family: "GROCERY I",
      id: 255161
    },
    {
      value: "Bananas Bunch x5",
      label: "Bananas Bunch x5",
      family: "GROCERY I",
      id: 890374
    },
    {
      value: "Bananas Bunch x10",
      label: "Bananas Bunch x10",
      family: "GROCERY I",
      id: 1146796
    },
    {
      value: "Avocados",
      label: "Avocados",
      family: "GROCERY I",
      id: 841841
    },
    {
      value: "Avocados Bag x2",
      label: "Avocados Bag x2",
      family: "GROCERY I",
      id: 111223
    },
    {
      value: "Avocados Bag x4",
      label: "Avocados Bag x4",
      family: "GROCERY I",
      id: 939663
    },
    {
      value: "Lemons",
      label: "Lemons",
      family: "GROCERY I",
      id: 329070
    },
    {
      value: "Lemons Bag x6",
      label: "Lemons Bag x6",
      family: "GROCERY I",
      id: 1165987
    },
    {
      value: "Lemons Bag x12",
      label: "Lemons Bag x12",
      family: "GROCERY I",
      id: 210798
    },
    {
      value: "Limes",
      label: "Limes",
      family: "GROCERY I",
      id: 279137
    },
    {
      value: "Limes Bag x3",
      label: "Limes Bag x3",
      family: "GROCERY I",
      id: 683723
    },
    {
      value: "Limes Bag x6",
      label: "Limes Bag x6",
      family: "GROCERY I",
      id: 627887
    },
    {
      value: "Oranges",
      label: "Oranges",
      family: "GROCERY I",
      id: 115892
    },
    {
      value: "Oranges Bag x5",
      label: "Oranges Bag x5",
      family: "GROCERY I",
      id: 454589
    },
    {
      value: "Oranges Bag x10",
      label: "Oranges Bag x10",
      family: "GROCERY I",
      id: 365139
    },
    {
      value: "Strawberries",
      label: "Strawberries",
      family: "GROCERY I",
      id: 750856
    },
    {
      value: "Strawberries Box x2",
      label: "Strawberries Box x2",
      family: "GROCERY I",
      id: 472314
    },
    {
      value: "Strawberries Box x4",
      label: "Strawberries Box x4",
      family: "GROCERY I",
      id: 514729
    },
    {
      value: "Blueberries",
      label: "Blueberries",
      family: "GROCERY I",
      id: 213066
    },
    {
      value: "Blueberries Box x2",
      label: "Blueberries Box x2",
      family: "GROCERY I",
      id: 872307
    },
    {
      value: "Blueberries Box x4",
      label: "Blueberries Box x4",
      family: "GROCERY I",
      id: 409904
    },
    {
      value: "Raspberries",
      label: "Raspberries",
      family: "GROCERY I",
      id: 365138
    },
    {
      value: "Raspberries Box x2",
      label: "Raspberries Box x2",
      family: "GROCERY I",
      id: 956011
    },
    {
      value: "Raspberries Box x4",
      label: "Raspberries Box x4",
      family: "GROCERY I",
      id: 502227
    },
    {
      value: "Blackberries",
      label: "Blackberries",
      family: "GROCERY I",
      id: 1178687
    },
    {
      value: "Blackberries Box x2",
      label: "Blackberries Box x2",
      family: "GROCERY I",
      id: 368140
    },
    {
      value: "Blackberries Box x4",
      label: "Blackberries Box x4",
      family: "GROCERY I",
      id: 683721
    },
    {
      value: "Potatoes",
      label: "Potatoes",
      family: "GROCERY I",
      id: 422452
    },
    {
      value: "Potatoes Bag x5",
      label: "Potatoes Bag x5",
      family: "GROCERY I",
      id: 502230
    },
    {
      value: "Potatoes Bag x10",
      label: "Potatoes Bag x10",
      family: "GROCERY I",
      id: 253145
    },
    {
      value: "Sweet Potatoes",
      label: "Sweet Potatoes",
      family: "GROCERY I",
      id: 472658
    },
    {
      value: "Sweet Potatoes Bag x3",
      label: "Sweet Potatoes Bag x3",
      family: "GROCERY I",
      id: 1176559
    },
    {
      value: "Sweet Potatoes Bag x6",
      label: "Sweet Potatoes Bag x6",
      family: "GROCERY I",
      id: 115894
    },
    {
      value: "Onions",
      label: "Onions",
      family: "GROCERY I",
      id: 564272
    },
    {
      value: "Onions Bag x2",
      label: "Onions Bag x2",
      family: "GROCERY I",
      id: 841583
    },
    {
      value: "Onions Bag x4",
      label: "Onions Bag x4",
      family: "GROCERY I",
      id: 890371
    },
    {
      value: "Garlic",
      label: "Garlic",
      family: "GROCERY I",
      id: 223068
    },
    {
      value: "Garlic Bag x3",
      label: "Garlic Bag x3",
      family: "GROCERY I",
      id: 1109390
    },
    {
      value: "Garlic Bag x6",
      label: "Garlic Bag x6",
      family: "GROCERY I",
      id: 414752
    },
    {
      value: "Carrots",
      label: "Carrots",
      family: "GROCERY I",
      id: 116018
    },
    {
      value: "Carrots Bag x2",
      label: "Carrots Bag x2",
      family: "GROCERY I",
      id: 749421
    },
    {
      value: "Carrots Bag x4",
      label: "Carrots Bag x4",
      family: "GROCERY I",
      id: 754103
    },
    {
      value: "Celery",
      label: "Celery",
      family: "GROCERY I",
      id: 305344
    },
    {
      value: "Celery Bunch x2",
      label: "Celery Bunch x2",
      family: "GROCERY I",
      id: 169028
    },
    {
      value: "Celery Bunch x4",
      label: "Celery Bunch x4",
      family: "GROCERY I",
      id: 1076155
    },
    {
      value: "Broccoli",
      label: "Broccoli",
      family: "GROCERY I",
      id: 414354
    },
    {
      value: "Broccoli Head x2",
      label: "Broccoli Head x2",
      family: "GROCERY I",
      id: 464906
    },
    {
      value: "Broccoli Head x4",
      label: "Broccoli Head x4",
      family: "GROCERY I",
      id: 364724
    },
    {
      value: "Cauliflower",
      label: "Cauliflower",
      family: "GROCERY I",
      id: 454596
    },
    {
      value: "Cauliflower Head x2",
      label: "Cauliflower Head x2",
      family: "GROCERY I",
      id: 562568
    },
    {
      value: "Cauliflower Head x4",
      label: "Cauliflower Head x4",
      family: "GROCERY I",
      id: 411555
    },
    {
      value: "Spinach",
      label: "Spinach",
      family: "GROCERY I",
      id: 213653
    },
    {
      value: "Spinach Bag x2",
      label: "Spinach Bag x2",
      family: "GROCERY I",
      id: 964753
    },
    {
      value: "Spinach Bag x4",
      label: "Spinach Bag x4",
      family: "GROCERY I",
      id: 155621
    },
    {
      value: "Lettuce",
      label: "Lettuce",
      family: "GROCERY I",
      id: 683722
    },
    {
      value: "Lettuce Head x2",
      label: "Lettuce Head x2",
      family: "GROCERY I",
      id: 1157561
    },
    {
      value: "Lettuce Head x4",
      label: "Lettuce Head x4",
      family: "GROCERY I",
      id: 812735
    },
    {
      value: "Cucumbers",
      label: "Cucumbers",
      family: "GROCERY I",
      id: 871600
    },
    {
      value: "Cucumbers Bag x3",
      label: "Cucumbers Bag x3",
      family: "GROCERY I",
      id: 1160796
    },
    {
      value: "Cucumbers Bag x6",
      label: "Cucumbers Bag x6",
      family: "GROCERY I",
      id: 838875
    },
    {
      value: "Bell Peppers",
      label: "Bell Peppers",
      family: "GROCERY I",
      id: 358100
    },
    {
      value: "Bell Peppers Bag x2",
      label: "Bell Peppers Bag x2",
      family: "GROCERY I",
      id: 315277
    },
    {
      value: "Bell Peppers Bag x4",
      label: "Bell Peppers Bag x4",
      family: "GROCERY I",
      id: 326951
    },
    {
      value: "Tomatoes",
      label: "Tomatoes",
      family: "GROCERY I",
      id: 514144
    },
    {
      value: "Tomatoes Bag x6",
      label: "Tomatoes Bag x6",
      family: "GROCERY I",
      id: 428054
    },
    {
      value: "Tomatoes Bag x12",
      label: "Tomatoes Bag x12",
      family: "GROCERY I",
      id: 1176560
    },
    {
      value: "Mushrooms",
      label: "Mushrooms",
      family: "GROCERY I",
      id: 651326
    },
    {
      value: "Mushrooms Box x2",
      label: "Mushrooms Box x2",
      family: "GROCERY I",
      id: 956014
    },
    {
      value: "Mushrooms Box x4",
      label: "Mushrooms Box x4",
      family: "GROCERY I",
      id: 215303
    },
    {
      value: "Corn",
      label: "Corn",
      family: "GROCERY I",
      id: 106716
    },
    {
      value: "Corn Pack x3",
      label: "Corn Pack x3",
      family: "GROCERY I",
      id: 645294
    },
    {
      value: "Corn Pack x6",
      label: "Corn Pack x6",
      family: "GROCERY I",
      id: 215896
    },
    {
      value: "Green Beans",
      label: "Green Beans",
      family: "GROCERY I",
      id: 956013
    },
    {
      value: "Green Beans Bag x2",
      label: "Green Beans Bag x2",
      family: "GROCERY I",
      id: 410257
    },
    {
      value: "Green Beans Bag x4",
      label: "Green Beans Bag x4",
      family: "GROCERY I",
      id: 168989
    },
    {
      value: "Peas",
      label: "Peas",
      family: "GROCERY I",
      id: 1109391
    },
    {
      value: "Peas Bag x2",
      label: "Peas Bag x2",
      family: "GROCERY I",
      id: 414421
    },
    {
      value: "Peas Bag x4",
      label: "Peas Bag x4",
      family: "GROCERY I",
      id: 211999
    },
    {
      value: "Asparagus",
      label: "Asparagus",
      family: "GROCERY I",
      id: 1158719
    },
    {
      value: "Asparagus Bunch x2",
      label: "Asparagus Bunch x2",
      family: "GROCERY I",
      id: 460804
    },
    {
      value: "Asparagus Bunch x4",
      label: "Asparagus Bunch x4",
      family: "GROCERY I",
      id: 464333
    },
    {
      value: "Zucchini",
      label: "Zucchini",
      family: "GROCERY I",
      id: 1160872
    },
    {
      value: "Zucchini Bag x3",
      label: "Zucchini Bag x3",
      family: "GROCERY I",
      id: 329071
    },
    {
      value: "Zucchini Bag x6",
      label: "Zucchini Bag x6",
      family: "GROCERY I",
      id: 592942
    },
    {
      value: "Eggplant",
      label: "Eggplant",
      family: "GROCERY I",
      id: 885553
    },
    {
      value: "Eggplant Each x2",
      label: "Eggplant Each x2",
      family: "GROCERY I",
      id: 361502
    },
    {
      value: "Eggplant Each x4",
      label: "Eggplant Each x4",
      family: "GROCERY I",
      id: 724003
    },
    {
      value: "Ginger",
      label: "Ginger",
      family: "GROCERY I",
      id: 1173853
    },
    {
      value: "Ginger Root x2",
      label: "Ginger Root x2",
      family: "GROCERY I",
      id: 872306
    },
    {
      value: "Ginger Root x4",
      label: "Ginger Root x4",
      family: "GROCERY I",
      id: 1148972
    },
    {
      value: "Cilantro",
      label: "Cilantro",
      family: "GROCERY I",
      id: 890372
    },
    {
      value: "Cilantro Bunch x2",
      label: "Cilantro Bunch x2",
      family: "GROCERY I",
      id: 305341
    },
    {
      value: "Cilantro Bunch x4",
      label: "Cilantro Bunch x4",
      family: "GROCERY I",
      id: 1235251
    },
    {
      value: "Parsley",
      label: "Parsley",
      family: "GROCERY I",
      id: 1080021
    },
    {
      value: "Parsley Bunch x2",
      label: "Parsley Bunch x2",
      family: "GROCERY I",
      id: 577743
    },
    {
      value: "Parsley Bunch x4",
      label: "Parsley Bunch x4",
      family: "GROCERY I",
      id: 364832
    },
    {
      value: "Basil",
      label: "Basil",
      family: "GROCERY I",
      id: 881701
    },
    {
      value: "Basil Bunch x2",
      label: "Basil Bunch x2",
      family: "GROCERY I",
      id: 1179109
    },
    {
      value: "Basil Bunch x4",
      label: "Basil Bunch x4",
      family: "GROCERY I",
      id: 847569
    },
    {
      value: "Rosemary",
      label: "Rosemary",
      family: "GROCERY I",
      id: 752167
    },
    {
      value: "Rosemary Bunch x2",
      label: "Rosemary Bunch x2",
      family: "GROCERY I",
      id: 211205
    },
    {
      value: "Rosemary Bunch x4",
      label: "Rosemary Bunch x4",
      family: "GROCERY I",
      id: 598492
    },
    {
      value: "Thyme",
      label: "Thyme",
      family: "GROCERY I",
      id: 802832
    },
    {
      value: "Thyme Bunch x2",
      label: "Thyme Bunch x2",
      family: "GROCERY I",
      id: 577741
    },
    {
      value: "Thyme Bunch x4",
      label: "Thyme Bunch x4",
      family: "GROCERY I",
      id: 956012
    },
    {
      value: "Oregano",
      label: "Oregano",
      family: "GROCERY I",
      id: 886396
    },
    {
      value: "Oregano Bunch x2",
      label: "Oregano Bunch x2",
      family: "GROCERY I",
      id: 692531
    },
    {
      value: "Oregano Bunch x4",
      label: "Oregano Bunch x4",
      family: "GROCERY I",
      id: 522383
    },
    {
      value: "Mint",
      label: "Mint",
      family: "GROCERY I",
      id: 522941
    },
    {
      value: "Mint Bunch x2",
      label: "Mint Bunch x2",
      family: "GROCERY I",
      id: 1057033
    },
    {
      value: "Mint Bunch x4",
      label: "Mint Bunch x4",
      family: "GROCERY I",
      id: 310671
    },
    {
      value: "Green Onions",
      label: "Green Onions",
      family: "GROCERY I",
      id: 346065
    },
    {
      value: "Green Onions Bunch x2",
      label: "Green Onions Bunch x2",
      family: "GROCERY I",
      id: 177395
    },
    {
      value: "Green Onions Bunch x4",
      label: "Green Onions Bunch x4",
      family: "GROCERY I",
      id: 770511
    },
    {
      value: "Chives",
      label: "Chives",
      family: "GROCERY I",
      id: 514242
    },
    {
      value: "Chives Bunch x2",
      label: "Chives Bunch x2",
      family: "GROCERY I",
      id: 355091
    },
    {
      value: "Chives Bunch x4",
      label: "Chives Bunch x4",
      family: "GROCERY I",
      id: 173111
    },
    {
      value: "Dill",
      label: "Dill",
      family: "GROCERY I",
      id: 115893
    },
    {
      value: "Dill Bunch x2",
      label: "Dill Bunch x2",
      family: "GROCERY I",
      id: 1116370
    },
    {
      value: "Dill Bunch x4",
      label: "Dill Bunch x4",
      family: "GROCERY I",
      id: 471980
    },
    {
      value: "Bay Leaves",
      label: "Bay Leaves",
      family: "GROCERY I",
      id: 364829
    },
    {
      value: "Bay Leaves Bag x2",
      label: "Bay Leaves Bag x2",
      family: "GROCERY I",
      id: 525887
    },
    {
      value: "Bay Leaves Bag x4",
      label: "Bay Leaves Bag x4",
      family: "GROCERY I",
      id: 103520
    },
    {
      value: "Brown Rice",
      label: "Brown Rice",
      family: "GROCERY I",
      id: 305345
    },
    {
      value: "Brown Rice Bag x2",
      label: "Brown Rice Bag x2",
      family: "GROCERY I",
      id: 1161572
    },
    {
      value: "Brown Rice Bag x5",
      label: "Brown Rice Bag x5",
      family: "GROCERY I",
      id: 841514
    },
    {
      value: "White Rice",
      label: "White Rice",
      family: "GROCERY I",
      id: 872309
    },
    {
      value: "White Rice Bag x2",
      label: "White Rice Bag x2",
      family: "GROCERY I",
      id: 802831
    },
    {
      value: "White Rice Bag x5",
      label: "White Rice Bag x5",
      family: "GROCERY I",
      id: 1158720
    },
    {
      value: "Quinoa",
      label: "Quinoa",
      family: "GROCERY I",
      id: 841570
    },
    {
      value: "Quinoa Bag x2",
      label: "Quinoa Bag x2",
      family: "GROCERY I",
      id: 265672
    },
    {
      value: "Quinoa Bag x3",
      label: "Quinoa Bag x3",
      family: "GROCERY I",
      id: 215304
    },
    {
      value: "Oats",
      label: "Oats",
      family: "GROCERY I",
      id: 890375
    },
    {
      value: "Oats Container x2",
      label: "Oats Container x2",
      family: "GROCERY I",
      id: 414425
    },
    {
      value: "Oats Container x3",
      label: "Oats Container x3",
      family: "GROCERY I",
      id: 1105214
    },
    {
      value: "Pasta",
      label: "Pasta",
      family: "GROCERY I",
      id: 405304
    },
    {
      value: "Pasta Box x2",
      label: "Pasta Box x2",
      family: "GROCERY I",
      id: 372924
    },
    {
      value: "Pasta Box x4",
      label: "Pasta Box x4",
      family: "GROCERY I",
      id: 581742
    },
    {
      value: "Canned Tomatoes",
      label: "Canned Tomatoes",
      family: "GROCERY I",
      id: 464263
    },
    {
      value: "Canned Tomatoes Pack x3",
      label: "Canned Tomatoes Pack x3",
      family: "GROCERY I",
      id: 1105213
    },
    {
      value: "Canned Tomatoes Pack x6",
      label: "Canned Tomatoes Pack x6",
      family: "GROCERY I",
      id: 783243
    },
    {
      value: "Canned Beans",
      label: "Canned Beans",
      family: "GROCERY I",
      id: 346066
    },
    {
      value: "Canned Beans Pack x2",
      label: "Canned Beans Pack x2",
      family: "GROCERY I",
      id: 750855
    },
    {
      value: "Canned Beans Pack x4",
      label: "Canned Beans Pack x4",
      family: "GROCERY I",
      id: 637016
    },
    {
      value: "Canned Corn",
      label: "Canned Corn",
      family: "GROCERY I",
      id: 578467
    },
    {
      value: "Canned Corn Pack x3",
      label: "Canned Corn Pack x3",
      family: "GROCERY I",
      id: 890213
    },
    {
      value: "Canned Corn Pack x6",
      label: "Canned Corn Pack x6",
      family: "GROCERY I",
      id: 587069
    },
    {
      value: "Canned Peas",
      label: "Canned Peas",
      family: "GROCERY I",
      id: 586969
    },
    {
      value: "Canned Peas Pack x2",
      label: "Canned Peas Pack x2",
      family: "GROCERY I",
      id: 1160873
    },
    {
      value: "Canned Peas Pack x4",
      label: "Canned Peas Pack x4",
      family: "GROCERY I",
      id: 765517
    },
    {
      value: "Canned Tuna",
      label: "Canned Tuna",
      family: "GROCERY I",
      id: 1081359
    },
    {
      value: "Canned Tuna Pack x3",
      label: "Canned Tuna Pack x3",
      family: "GROCERY I",
      id: 872317
    },
    {
      value: "Canned Tuna Pack x6",
      label: "Canned Tuna Pack x6",
      family: "GROCERY I",
      id: 223136
    },
    {
      value: "Canned Salmon",
      label: "Canned Salmon",
      family: "GROCERY I",
      id: 830749
    },
    {
      value: "Canned Salmon Pack x2",
      label: "Canned Salmon Pack x2",
      family: "GROCERY I",
      id: 638296
    },
    {
      value: "Canned Salmon Pack x4",
      label: "Canned Salmon Pack x4",
      family: "GROCERY I",
      id: 939662
    },
    {
      value: "Olive Oil",
      label: "Olive Oil",
      family: "GROCERY I",
      id: 911429
    },
    {
      value: "Olive Oil Bottle x2",
      label: "Olive Oil Bottle x2",
      family: "GROCERY I",
      id: 260669
    },
    {
      value: "Olive Oil Bottle x3",
      label: "Olive Oil Bottle x3",
      family: "GROCERY I",
      id: 987308
    },
    {
      value: "Vegetable Oil",
      label: "Vegetable Oil",
      family: "GROCERY I",
      id: 627885
    },
    {
      value: "Vegetable Oil Bottle x2",
      label: "Vegetable Oil Bottle x2",
      family: "GROCERY I",
      id: 323227
    },
    {
      value: "Vegetable Oil Bottle x3",
      label: "Vegetable Oil Bottle x3",
      family: "GROCERY I",
      id: 1235364
    },
    {
      value: "Vinegar",
      label: "Vinegar",
      family: "GROCERY I",
      id: 641042
    },
    {
      value: "Vinegar Bottle x2",
      label: "Vinegar Bottle x2",
      family: "GROCERY I",
      id: 268676
    },
    {
      value: "Vinegar Bottle x3",
      label: "Vinegar Bottle x3",
      family: "GROCERY I",
      id: 638308
    },
    {
      value: "Soy Sauce",
      label: "Soy Sauce",
      family: "GROCERY I",
      id: 467887
    },
    {
      value: "Soy Sauce Bottle x2",
      label: "Soy Sauce Bottle x2",
      family: "GROCERY I",
      id: 279494
    },
    {
      value: "Soy Sauce Bottle x3",
      label: "Soy Sauce Bottle x3",
      family: "GROCERY I",
      id: 886398
    },
    {
      value: "Honey",
      label: "Honey",
      family: "GROCERY I",
      id: 770461
    },
    {
      value: "Honey Jar x2",
      label: "Honey Jar x2",
      family: "GROCERY I",
      id: 872310
    },
    {
      value: "Honey Jar x3",
      label: "Honey Jar x3",
      family: "GROCERY I",
      id: 115611
    },
    {
      value: "Maple Syrup",
      label: "Maple Syrup",
      family: "GROCERY I",
      id: 1235365
    },
    {
      value: "Maple Syrup Bottle x2",
      label: "Maple Syrup Bottle x2",
      family: "GROCERY I",
      id: 1250226
    },
    {
      value: "Maple Syrup Bottle x3",
      label: "Maple Syrup Bottle x3",
      family: "GROCERY I",
      id: 554152
    },
    {
      value: "Salt",
      label: "Salt",
      family: "GROCERY I",
      id: 220435
    },
    {
      value: "Salt Container x2",
      label: "Salt Container x2",
      family: "GROCERY I",
      id: 374464
    },
    {
      value: "Salt Container x3",
      label: "Salt Container x3",
      family: "GROCERY I",
      id: 890214
    },
    {
      value: "Pepper",
      label: "Pepper",
      family: "GROCERY I",
      id: 157956
    },
    {
      value: "Pepper Container x2",
      label: "Pepper Container x2",
      family: "GROCERY I",
      id: 506717
    },
    {
      value: "Pepper Container x3",
      label: "Pepper Container x3",
      family: "GROCERY I",
      id: 749729
    },
    {
      value: "Canned Pineapple",
      label: "Canned Pineapple",
      family: "GROCERY I",
      id: 1076335
    },
    {
      value: "Canned Pineapple Pack x2",
      label: "Canned Pineapple Pack x2",
      family: "GROCERY I",
      id: 872308
    },
    {
      value: "Canned Pineapple Pack x4",
      label: "Canned Pineapple Pack x4",
      family: "GROCERY I",
      id: 573832
    },
    {
      value: "Canned Peaches",
      label: "Canned Peaches",
      family: "GROCERY I",
      id: 875604
    },
    {
      value: "Canned Peaches Pack x2",
      label: "Canned Peaches Pack x2",
      family: "GROCERY I",
      id: 1159726
    },
    {
      value: "Canned Peaches Pack x4",
      label: "Canned Peaches Pack x4",
      family: "GROCERY I",
      id: 876223
    },
    {
      value: "Canned Pears",
      label: "Canned Pears",
      family: "GROCERY I",
      id: 320682
    },
    {
      value: "Canned Pears Pack x2",
      label: "Canned Pears Pack x2",
      family: "GROCERY I",
      id: 881912
    },
    {
      value: "Canned Pears Pack x4",
      label: "Canned Pears Pack x4",
      family: "GROCERY I",
      id: 1009539
    },
    {
      value: "Canned Fruit Cocktail",
      label: "Canned Fruit Cocktail",
      family: "GROCERY I",
      id: 770453
    },
    {
      value: "Canned Fruit Cocktail Pack x2",
      label: "Canned Fruit Cocktail Pack x2",
      family: "GROCERY I",
      id: 881911
    },
    {
      value: "Canned Fruit Cocktail Pack x4",
      label: "Canned Fruit Cocktail Pack x4",
      family: "GROCERY I",
      id: 902839
    },
    {
      value: "Canned Mandarin Oranges",
      label: "Canned Mandarin Oranges",
      family: "GROCERY I",
      id: 1228320
    },
    {
      value: "Canned Mandarin Oranges Pack x2",
      label: "Canned Mandarin Oranges Pack x2",
      family: "GROCERY I",
      id: 119141
    },
    {
      value: "Canned Mandarin Oranges Pack x4",
      label: "Canned Mandarin Oranges Pack x4",
      family: "GROCERY I",
      id: 890215
    },
    {
      value: "Pickles",
      label: "Pickles",
      family: "GROCERY I",
      id: 414620
    },
    {
      value: "Pickles Jar x2",
      label: "Pickles Jar x2",
      family: "GROCERY I",
      id: 1228321
    },
    {
      value: "Pickles Jar x4",
      label: "Pickles Jar x4",
      family: "GROCERY I",
      id: 472645
    },
    {
      value: "Olives",
      label: "Olives",
      family: "GROCERY I",
      id: 700607
    },
    {
      value: "Olives Jar x2",
      label: "Olives Jar x2",
      family: "GROCERY I",
      id: 1105228
    },
    {
      value: "Olives Jar x4",
      label: "Olives Jar x4",
      family: "GROCERY I",
      id: 105693
    },
    {
      value: "Jams",
      label: "Jams",
      family: "GROCERY I",
      id: 278806
    },
    {
      value: "Jams Jar x2",
      label: "Jams Jar x2",
      family: "GROCERY I",
      id: 838832
    },
    {
      value: "Jams Jar x4",
      label: "Jams Jar x4",
      family: "GROCERY I",
      id: 1324667
    },
    {
      value: "Jellies",
      label: "Jellies",
      family: "GROCERY I",
      id: 472526
    },
    {
      value: "Jellies Jar x2",
      label: "Jellies Jar x2",
      family: "GROCERY I",
      id: 1118775
    },
    {
      value: "Jellies Jar x4",
      label: "Jellies Jar x4",
      family: "GROCERY I",
      id: 575675
    },
    {
      value: "Peanut Butter",
      label: "Peanut Butter",
      family: "GROCERY I",
      id: 1324670
    },
    {
      value: "Peanut Butter Jar x2",
      label: "Peanut Butter Jar x2",
      family: "GROCERY I",
      id: 1260242
    },
    {
      value: "Peanut Butter Jar x3",
      label: "Peanut Butter Jar x3",
      family: "GROCERY I",
      id: 364834
    },
    {
      value: "Breakfast Cereal",
      label: "Breakfast Cereal",
      family: "GROCERY I",
      id: 829389
    },
    {
      value: "Breakfast Cereal Box x2",
      label: "Breakfast Cereal Box x2",
      family: "GROCERY I",
      id: 514730
    },
    {
      value: "Breakfast Cereal Box Family Size",
      label: "Breakfast Cereal Box Family Size",
      family: "GROCERY I",
      id: 116279
    },
    {
      value: "Granola",
      label: "Granola",
      family: "GROCERY I",
      id: 1105210
    },
    {
      value: "Granola Bag x2",
      label: "Granola Bag x2",
      family: "GROCERY I",
      id: 226857
    },
    {
      value: "Granola Bag Family Size",
      label: "Granola Bag Family Size",
      family: "GROCERY I",
      id: 881910
    },
    {
      value: "Oatmeal",
      label: "Oatmeal",
      family: "GROCERY I",
      id: 830829
    },
    {
      value: "Oatmeal Container x2",
      label: "Oatmeal Container x2",
      family: "GROCERY I",
      id: 363868
    },
    {
      value: "Oatmeal Container Family Size",
      label: "Oatmeal Container Family Size",
      family: "GROCERY I",
      id: 313641
    },
    {
      value: "Crackers",
      label: "Crackers",
      family: "GROCERY I",
      id: 125430
    },
    {
      value: "Crackers Box x2",
      label: "Crackers Box x2",
      family: "GROCERY I",
      id: 108079
    },
    {
      value: "Crackers Box Family Size",
      label: "Crackers Box Family Size",
      family: "GROCERY I",
      id: 215332
    },
    {
      value: "Cookies",
      label: "Cookies",
      family: "GROCERY I",
      id: 354922
    },
    {
      value: "Cookies Bag x2",
      label: "Cookies Bag x2",
      family: "GROCERY I",
      id: 579759
    },
    {
      value: "Cookies Bag Family Size",
      label: "Cookies Bag Family Size",
      family: "GROCERY I",
      id: 1260241
    },
    {
      value: "Chocolate",
      label: "Chocolate",
      family: "GROCERY I",
      id: 1342003
    },
    {
      value: "Chocolate Bar x2",
      label: "Chocolate Bar x2",
      family: "GROCERY I",
      id: 1345067
    },
    {
      value: "Chocolate Bar Family Size",
      label: "Chocolate Bar Family Size",
      family: "GROCERY I",
      id: 312324
    },
    {
      value: "Candy",
      label: "Candy",
      family: "GROCERY I",
      id: 212550
    },
    {
      value: "Candy Bag x2",
      label: "Candy Bag x2",
      family: "GROCERY I",
      id: 263583
    },
    {
      value: "Candy Bag Family Size",
      label: "Candy Bag Family Size",
      family: "GROCERY I",
      id: 1342008
    },
    {
      value: "Chips",
      label: "Chips",
      family: "GROCERY I",
      id: 559680
    },
    {
      value: "Chips Bag x2",
      label: "Chips Bag x2",
      family: "GROCERY I",
      id: 215327
    },
    {
      value: "Chips Bag Family Size",
      label: "Chips Bag Family Size",
      family: "GROCERY I",
      id: 464907
    },
    {
      value: "Popcorn",
      label: "Popcorn",
      family: "GROCERY I",
      id: 864508
    },
    {
      value: "Popcorn Bag x2",
      label: "Popcorn Bag x2",
      family: "GROCERY I",
      id: 246052
    },
    {
      value: "Popcorn Bag Family Size",
      label: "Popcorn Bag Family Size",
      family: "GROCERY I",
      id: 469643
    },
    {
      value: "Nuts",
      label: "Nuts",
      family: "GROCERY I",
      id: 988408
    },
    {
      value: "Nuts Bag x2",
      label: "Nuts Bag x2",
      family: "GROCERY I",
      id: 1342007
    },
    {
      value: "Nuts Bag Family Size",
      label: "Nuts Bag Family Size",
      family: "GROCERY I",
      id: 1342006
    },
    {
      value: "Dried Fruit",
      label: "Dried Fruit",
      family: "GROCERY I",
      id: 864510
    },
    {
      value: "Dried Fruit Bag x2",
      label: "Dried Fruit Bag x2",
      family: "GROCERY I",
      id: 1116113
    },
    {
      value: "Dried Fruit Bag Family Size",
      label: "Dried Fruit Bag Family Size",
      family: "GROCERY I",
      id: 315712
    },
    {
      value: "Coffee Beans",
      label: "Coffee Beans",
      family: "GROCERY I",
      id: 1245918
    },
    {
      value: "Coffee Beans Bag x2",
      label: "Coffee Beans Bag x2",
      family: "GROCERY I",
      id: 114778
    },
    {
      value: "Coffee Beans Bag Family Size",
      label: "Coffee Beans Bag Family Size",
      family: "GROCERY I",
      id: 315320
    },
    {
      value: "Ground Coffee",
      label: "Ground Coffee",
      family: "GROCERY I",
      id: 1127860
    },
    {
      value: "Ground Coffee Bag x2",
      label: "Ground Coffee Bag x2",
      family: "GROCERY I",
      id: 1281253
    },
    {
      value: "Ground Coffee Bag Family Size",
      label: "Ground Coffee Bag Family Size",
      family: "GROCERY I",
      id: 315279
    },
    {
      value: "Tea Bags",
      label: "Tea Bags",
      family: "GROCERY I",
      id: 211206
    },
    {
      value: "Tea Bags Box x2",
      label: "Tea Bags Box x2",
      family: "GROCERY I",
      id: 1156724
    },
    {
      value: "Tea Bags Box Family Size",
      label: "Tea Bags Box Family Size",
      family: "GROCERY I",
      id: 1226920
    },
    {
      value: "Instant Coffee",
      label: "Instant Coffee",
      family: "GROCERY I",
      id: 838842
    },
    {
      value: "Instant Coffee Jar x2",
      label: "Instant Coffee Jar x2",
      family: "GROCERY I",
      id: 936994
    },
    {
      value: "Instant Coffee Jar Family Size",
      label: "Instant Coffee Jar Family Size",
      family: "GROCERY I",
      id: 1046272
    },
    {
      value: "Cocoa Powder",
      label: "Cocoa Powder",
      family: "GROCERY I",
      id: 217827
    },
    {
      value: "Cocoa Powder Container x2",
      label: "Cocoa Powder Container x2",
      family: "GROCERY I",
      id: 1345072
    },
    {
      value: "Cocoa Powder Container Family Size",
      label: "Cocoa Powder Container Family Size",
      family: "GROCERY I",
      id: 1345068
    },
    {
      value: "Sugar",
      label: "Sugar",
      family: "GROCERY I",
      id: 112830
    },
    {
      value: "Sugar Bag x2",
      label: "Sugar Bag x2",
      family: "GROCERY II",
      id: 364865
    },
    {
      value: "Sugar Bag Family Size",
      label: "Sugar Bag Family Size",
      family: "GROCERY II",
      id: 315463
    },
    {
      value: "Power bank",
      label: "Power bank",
      family: "HARDWARE",
      id: 818590
    },
    {
      value: "UPS supply",
      label: "UPS supply",
      family: "HARDWARE",
      id: 820500
    },
    {
      value: "Battery",
      label: "Battery",
      family: "HARDWARE",
      id: 818588
    },
    {
      value: "Home and kitchen I",
      label: "Home and kitchen I",
      family: "HOME AND KITCHEN II",
      id: 1410850
    },
    {
      value: "Home appliances",
      label: "Home appliances",
      family: "HOME APPLIANCES",
      id: 250782
    },
    {
      value: "Lingerie I",
      label: "Lingerie I",
      family: "LINGERIE",
      id: 759657
    },
    {
      value: "Lingerie II",
      label: "Lingerie II",
      family: "LINGERIE",
      id: 655744
    },
    {
      value: "Red Wine",
      label: "Red Wine",
      family: "LIQUOR,WINE,BEER",
      id: 1004550
    },
    {
      value: "White Wine",
      label: "White Wine",
      family: "LIQUOR,WINE,BEER",
      id: 1004551
    },
    {
      value: "Rose Wine",
      label: "Rose Wine",
      family: "LIQUOR,WINE,BEER",
      id: 812751
    },
    {
      value: "Sparkling Wine",
      label: "Sparkling Wine",
      family: "LIQUOR,WINE,BEER",
      id: 1080001
    },
    {
      value: "Champagne",
      label: "Champagne",
      family: "LIQUOR,WINE,BEER",
      id: 812757
    },
    {
      value: "Beer",
      label: "Beer",
      family: "LIQUOR,WINE,BEER",
      id: 377978
    },
    {
      value: "Lager",
      label: "Lager",
      family: "LIQUOR,WINE,BEER",
      id: 968936
    },
    {
      value: "IPA",
      label: "IPA",
      family: "LIQUOR,WINE,BEER",
      id: 812716
    },
    {
      value: "Cider",
      label: "Cider",
      family: "LIQUOR,WINE,BEER",
      id: 1079329
    },
    {
      value: "Spirits",
      label: "Spirits",
      family: "LIQUOR,WINE,BEER",
      id: 968937
    },
    {
      value: "Vodka",
      label: "Vodka",
      family: "LIQUOR,WINE,BEER",
      id: 968935
    },
    {
      value: "Rum",
      label: "Rum",
      family: "LIQUOR,WINE,BEER",
      id: 1028589
    },
    {
      value: "White Rum",
      label: "White Rum",
      family: "LIQUOR,WINE,BEER",
      id: 812769
    },
    {
      value: "Body Lotion",
      label: "Body Lotion",
      family: "PERSONAL CARE",
      id: 851982
    },
    {
      value: "Hand Soap",
      label: "Hand Soap",
      family: "PERSONAL CARE",
      id: 273528
    },
    {
      value: "Hand Sanitizer",
      label: "Hand Sanitizer",
      family: "PERSONAL CARE",
      id: 793345
    },
    {
      value: "Face Wash",
      label: "Face Wash",
      family: "PERSONAL CARE",
      id: 114799
    },
    {
      value: "Face Moisturizer",
      label: "Face Moisturizer",
      family: "PERSONAL CARE",
      id: 759894
    },
    {
      value: "Face Mask",
      label: "Face Mask",
      family: "PERSONAL CARE",
      id: 1087269
    },
    {
      value: "Face Serum",
      label: "Face Serum",
      family: "PERSONAL CARE",
      id: 363049
    },
    {
      value: "Eye Cream",
      label: "Eye Cream",
      family: "PERSONAL CARE",
      id: 664543
    },
    {
      value: "Lip Balm",
      label: "Lip Balm",
      family: "PERSONAL CARE",
      id: 1230418
    },
    {
      value: "Sunscreen",
      label: "Sunscreen",
      family: "PERSONAL CARE",
      id: 1104599
    },
    {
      value: "Deodorant",
      label: "Deodorant",
      family: "PERSONAL CARE",
      id: 843411
    },
    {
      value: "Toothpaste",
      label: "Toothpaste",
      family: "PERSONAL CARE",
      id: 1071928
    },
    {
      value: "Toothbrush",
      label: "Toothbrush",
      family: "PERSONAL CARE",
      id: 1229676
    },
    {
      value: "Mouthwash",
      label: "Mouthwash",
      family: "PERSONAL CARE",
      id: 1096235
    },
    {
      value: "Dental Floss",
      label: "Dental Floss",
      family: "PERSONAL CARE",
      id: 1104598
    },
    {
      value: "Shaving Cream",
      label: "Shaving Cream",
      family: "PERSONAL CARE",
      id: 1230426
    },
    {
      value: "Razor",
      label: "Razor",
      family: "PERSONAL CARE",
      id: 793346
    },
    {
      value: "Aftershave",
      label: "Aftershave",
      family: "PERSONAL CARE",
      id: 1229469
    },
    {
      value: "Perfume",
      label: "Perfume",
      family: "PERSONAL CARE",
      id: 1230417
    },
    {
      value: "Cologne",
      label: "Cologne",
      family: "PERSONAL CARE",
      id: 664545
    },
    {
      value: "Body Spray",
      label: "Body Spray",
      family: "PERSONAL CARE",
      id: 1229935
    },
    {
      value: "Nail Polish",
      label: "Nail Polish",
      family: "PERSONAL CARE",
      id: 870544
    },
    {
      value: "Nail Polish Remover",
      label: "Nail Polish Remover",
      family: "PERSONAL CARE",
      id: 1230416
    },
    {
      value: "Makeup Remover",
      label: "Makeup Remover",
      family: "PERSONAL CARE",
      id: 323921
    },
    {
      value: "Foundation",
      label: "Foundation",
      family: "PERSONAL CARE",
      id: 865147
    },
    {
      value: "Concealer",
      label: "Concealer",
      family: "PERSONAL CARE",
      id: 1229636
    },
    {
      value: "Powder",
      label: "Powder",
      family: "PERSONAL CARE",
      id: 915310
    },
    {
      value: "Blush",
      label: "Blush",
      family: "PERSONAL CARE",
      id: 1230430
    },
    {
      value: "Bronzer",
      label: "Bronzer",
      family: "PERSONAL CARE",
      id: 870545
    },
    {
      value: "Highlighter",
      label: "Highlighter",
      family: "PERSONAL CARE",
      id: 664539
    },
    {
      value: "Eyeshadow",
      label: "Eyeshadow",
      family: "PERSONAL CARE",
      id: 1230461
    },
    {
      value: "Eyeliner",
      label: "Eyeliner",
      family: "PERSONAL CARE",
      id: 1229591
    },
    {
      value: "Mascara",
      label: "Mascara",
      family: "PERSONAL CARE",
      id: 1229440
    },
    {
      value: "Lipstick",
      label: "Lipstick",
      family: "PERSONAL CARE",
      id: 1254013
    },
    {
      value: "Lip Gloss",
      label: "Lip Gloss",
      family: "PERSONAL CARE",
      id: 1229664
    },
    {
      value: "Soap",
      label: "Soap",
      family: "PERSONAL CARE",
      id: 1253765
    },
    {
      value: "Feminine Hygiene Products",
      label: "Feminine Hygiene Products",
      family: "PERSONAL CARE",
      id: 617548
    },
    {
      value: "Tampons",
      label: "Tampons",
      family: "PERSONAL CARE",
      id: 1229584
    },
    {
      value: "Pads",
      label: "Pads",
      family: "PERSONAL CARE",
      id: 1229576
    },
    {
      value: "Liners",
      label: "Liners",
      family: "PERSONAL CARE",
      id: 949243
    },
    {
      value: "Baby Wipes",
      label: "Baby Wipes",
      family: "PERSONAL CARE",
      id: 759651
    },
    {
      value: "Diapers",
      label: "Diapers",
      family: "PERSONAL CARE",
      id: 1230060
    },
    {
      value: "Rash Cream",
      label: "Rash Cream",
      family: "PERSONAL CARE",
      id: 1229025
    },
    {
      value: "Baby Lotion",
      label: "Baby Lotion",
      family: "PERSONAL CARE",
      id: 1228937
    },
    {
      value: "Baby Wash",
      label: "Baby Wash",
      family: "PERSONAL CARE",
      id: 586911
    },
    {
      value: "Baby Powder",
      label: "Baby Powder",
      family: "PERSONAL CARE",
      id: 1228995
    },
    {
      value: "Cotton Balls",
      label: "Cotton Balls",
      family: "PERSONAL CARE",
      id: 1230003
    },
    {
      value: "Cotton Swabs",
      label: "Cotton Swabs",
      family: "PERSONAL CARE",
      id: 1229023
    },
    {
      value: "Hair Dye",
      label: "Hair Dye",
      family: "PERSONAL CARE",
      id: 1037654
    },
    {
      value: "Hair Removal Cream",
      label: "Hair Removal Cream",
      family: "PERSONAL CARE",
      id: 1229643
    },
    {
      value: "Shampoo",
      label: "Shampoo",
      family: "PERSONAL CARE",
      id: 1229625
    },
    {
      value: "Conditioner",
      label: "Conditioner",
      family: "PERSONAL CARE",
      id: 1228945
    },
    {
      value: "Chicken drumsticks",
      label: "Chicken drumsticks",
      family: "POULTRY",
      id: 1239860
    },
    {
      value: "Sliced turkey breast",
      label: "Sliced turkey breast",
      family: "POULTRY",
      id: 1239856
    },
    {
      value: "Whole chicken",
      label: "Whole chicken",
      family: "POULTRY",
      id: 457928
    },
    {
      value: "Chicken wings",
      label: "Chicken wings",
      family: "POULTRY",
      id: 903285
    },
    {
      value: "Chicken burgers",
      label: "Chicken burgers",
      family: "POULTRY",
      id: 903284
    },
    {
      value: "Chicken sausages",
      label: "Chicken sausages",
      family: "POULTRY",
      id: 1239862
    },
    {
      value: "Chicken nuggets",
      label: "Chicken nuggets",
      family: "POULTRY",
      id: 1239852
    },
    {
      value: "Frozen whole duck",
      label: "Frozen whole duck",
      family: "POULTRY",
      id: 903286
    },
    {
      value: "Quail",
      label: "Quail",
      family: "POULTRY",
      id: 903283
    },
    {
      value: "Lasagna",
      label: "Lasagna",
      family: "PREPARED FOODS",
      id: 514327
    },
    {
      value: "Quesadillas",
      label: "Quesadillas",
      family: "PREPARED FOODS",
      id: 885543
    },
    {
      value: "Frozen Pizza",
      label: "Frozen Pizza",
      family: "PREPARED FOODS",
      id: 426155
    },
    {
      value: "Fillet Mignon",
      label: "Fillet Mignon",
      family: "PREPARED FOODS",
      id: 410866
    },
    {
      value: "Shrimps",
      label: "Shrimps",
      family: "SEAFOOD",
      id: 1247036
    }
  ]


export const families = 
[
  {
    value: "POULTRY",
    label: "POULTRY",
    count: 9
  },
  {
    value: "BREAD/BAKERY",
    label: "BREAD/BAKERY",
    count: 31
  },
  {
    value: "BEAUTY",
    label: "BEAUTY",
    count: 2
  },
  {
    value: "GROCERY II",
    label: "GROCERY II",
    count: 2
  },
  {
    value: "HARDWARE",
    label: "HARDWARE",
    count: 3
  },
  {
    value: "EGGS",
    label: "EGGS",
    count: 5
  },
  {
    value: "FROZEN FOODS",
    label: "FROZEN FOODS",
    count: 13
  },
  {
    value: "HOME APPLIANCES",
    label: "HOME APPLIANCES",
    count: 1
  },
  {
    value: "LINGERIE",
    label: "LINGERIE",
    count: 2
  },
  {
    value: "BEVERAGES",
    label: "BEVERAGES",
    count: 109
  },
  {
    value: "PERSONAL CARE",
    label: "PERSONAL CARE",
    count: 52
  },
  {
    value: "SEAFOOD",
    label: "SEAFOOD",
    count: 1
  },
  {
    value: "PREPARED FOODS",
    label: "PREPARED FOODS",
    count: 4
  },
  {
    value: "CLEANING",
    label: "CLEANING",
    count: 179
  },
  {
    value: "LIQUOR,WINE,BEER",
    label: "LIQUOR,WINE,BEER",
    count: 13
  },
  {
    value: "AUTOMOTIVE",
    label: "AUTOMOTIVE",
    count: 7
  },
  {
    value: "DELI",
    label: "DELI",
    count: 40
  },
  {
    value: "HOME AND KITCHEN II",
    label: "HOME AND KITCHEN II",
    count: 1
  },
  {
    value: "GROCERY I",
    label: "GROCERY I",
    count: 451
  },
  {
    value: "DAIRY",
    label: "DAIRY",
    count: 75
  }
]



