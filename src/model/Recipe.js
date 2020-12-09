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
import Author from './Author';
import Category from './Category';
import Ingredient from './Ingredient';
import Step from './Step';

/**
* The Recipe model module.
* @module model/Recipe
* @version v0
*/
export default class Recipe {
    /**
    * Constructs a new <code>Recipe</code>.
    * @alias module:model/Recipe
    * @class
    * @param name {String} 
    */

    constructor(name) {
        
        
        this['name'] = name;
        
    }

    /**
    * Constructs a <code>Recipe</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Recipe} obj Optional instance to populate.
    * @return {module:model/Recipe} The populated <code>Recipe</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Recipe();
                        
            
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = Category.constructFromObject(data['category']);
            }
            if (data.hasOwnProperty('ingredients')) {
                obj['ingredients'] = ApiClient.convertToType(data['ingredients'], [Ingredient]);
            }
            if (data.hasOwnProperty('steps')) {
                obj['steps'] = ApiClient.convertToType(data['steps'], [Step]);
            }
            if (data.hasOwnProperty('mainImageUrl')) {
                obj['mainImageUrl'] = ApiClient.convertToType(data['mainImageUrl'], 'String');
            }
            if (data.hasOwnProperty('imageUrls')) {
                obj['imageUrls'] = ApiClient.convertToType(data['imageUrls'], ['String']);
            }
            if (data.hasOwnProperty('difficulty')) {
                obj['difficulty'] = ApiClient.convertToType(data['difficulty'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('rating')) {
                obj['rating'] = ApiClient.convertToType(data['rating'], 'String');
            }
            if (data.hasOwnProperty('author')) {
                obj['author'] = Author.constructFromObject(data['author']);
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
    * @member {String} notes
    */
    'notes' = undefined;
    /**
    * @member {module:model/Category} category
    */
    'category' = undefined;
    /**
    * @member {Array.<module:model/Ingredient>} ingredients
    */
    'ingredients' = undefined;
    /**
    * @member {Array.<module:model/Step>} steps
    */
    'steps' = undefined;
    /**
    * @member {String} mainImageUrl
    */
    'mainImageUrl' = undefined;
    /**
    * @member {Array.<String>} imageUrls
    */
    'imageUrls' = undefined;
    /**
    * @member {module:model/Recipe.DifficultyEnum} difficulty
    */
    'difficulty' = undefined;
    /**
    * @member {Date} date
    */
    'date' = undefined;
    /**
    * @member {module:model/Recipe.RatingEnum} rating
    */
    'rating' = undefined;
    /**
    * @member {module:model/Author} author
    */
    'author' = undefined;



    /**
    * Allowed values for the <code>difficulty</code> property.
    * @enum {String}
    * @readonly
    */
    static DifficultyEnum = {
        /**
         * value: "EASY"
         * @const
         */
        "EASY": "EASY",
        /**
         * value: "MEDIUM"
         * @const
         */
        "MEDIUM": "MEDIUM",
        /**
         * value: "EXPERT"
         * @const
         */
        "EXPERT": "EXPERT"    };
    /**
    * Allowed values for the <code>rating</code> property.
    * @enum {String}
    * @readonly
    */
    static RatingEnum = {
        /**
         * value: "ONE"
         * @const
         */
        "ONE": "ONE",
        /**
         * value: "TWO"
         * @const
         */
        "TWO": "TWO",
        /**
         * value: "THREE"
         * @const
         */
        "THREE": "THREE",
        /**
         * value: "FOUR"
         * @const
         */
        "FOUR": "FOUR",
        /**
         * value: "FIVE"
         * @const
         */
        "FIVE": "FIVE"    };

}