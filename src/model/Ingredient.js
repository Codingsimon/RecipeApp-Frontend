/**
 * OpenAPI definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Nutrient from './Nutrient';

/**
* The Ingredient model module.
* @module model/Ingredient
* @version v0
*/
export default class Ingredient {
    /**
    * Constructs a new <code>Ingredient</code>.
    * @alias module:model/Ingredient
    * @class
    * @param name {String} 
    */

    constructor(name) {
        
        
        this['name'] = name;
        
    }

    /**
    * Constructs a <code>Ingredient</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Ingredient} obj Optional instance to populate.
    * @return {module:model/Ingredient} The populated <code>Ingredient</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Ingredient();
                        
            
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
            if (data.hasOwnProperty('nutrients')) {
                obj['nutrients'] = ApiClient.convertToType(data['nutrients'], [Nutrient]);
            }
        }
        return obj;
    }

    /**
    * @member {String} uuid
    */
    'uuid' = undefined;
    /**
    * @member {String} name
    */
    'name' = undefined;
    /**
    * @member {String} description
    */
    'description' = undefined;
    /**
    * @member {Number} amount
    */
    'amount' = undefined;
    /**
    * @member {module:model/Ingredient.UnitEnum} unit
    */
    'unit' = undefined;
    /**
    * @member {Array.<module:model/Nutrient>} nutrients
    */
    'nutrients' = undefined;



    /**
    * Allowed values for the <code>unit</code> property.
    * @enum {String}
    * @readonly
    */
    static UnitEnum = {
        /**
         * value: "MILILITER"
         * @const
         */
        "MILILITER": "MILILITER",
        /**
         * value: "LITER"
         * @const
         */
        "LITER": "LITER",
        /**
         * value: "GRAM"
         * @const
         */
        "GRAM": "GRAM",
        /**
         * value: "KILOGRAM"
         * @const
         */
        "KILOGRAM": "KILOGRAM",
        /**
         * value: "TEASPOON"
         * @const
         */
        "TEASPOON": "TEASPOON",
        /**
         * value: "TABLESPOON"
         * @const
         */
        "TABLESPOON": "TABLESPOON",
        /**
         * value: "PIECE"
         * @const
         */
        "PIECE": "PIECE"    };

}