import { default as Ingredient } from "./Ingredient";


export default class UnitOptions {
    
    static options = 
    [{value: Ingredient.UnitEnum.GRAM,label: "g"},
    {value: Ingredient.UnitEnum.KILOGRAM,label: "kg"},
    {value: Ingredient.UnitEnum.PIECE,label: "stk"},
    {value: Ingredient.UnitEnum.TABLESPOON,label: "el"},
    {value: Ingredient.UnitEnum.TEASPOON,label: "tl"},
    {value: Ingredient.UnitEnum.LITER,label: "l"},
    {value: Ingredient.UnitEnum.MILILITER,label: "ml"}
    
    ]

}



