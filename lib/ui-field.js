const {camelCase} = require("camel-case");

const { HandlebarsRenderer } = require("./renderer");

/**
 * Define choice for a field as label and value pair.
 * @typedef {object} LabelValueChoice
 * @property {string} label - the label of the choice.
 * @property {string|number} [value=undefined] - the value of the choice. 
 */

/**
 * A class that represents a field in the UI.
 */
class UiField {

    /**
     * Creates an instance of UiField.
     * @param {*} [options={}] - the options for the UiField.
     * @param {string} [options.label = 'No label'] - the label for the field.
     * @param {string} [options.type = 'text'] - the type of the field.
     * @param {string} [options.name = 'noLabel'] - the name of the field.
     * @param {boolean} [options.useTemplateFile = true] - whether the field uses a template file.
     * @param {UiField[]} [items=[]] - items of current field.
     * @param {LabelValueChoice[]} [choices = []] - choices of label/value pairs.
     * @param {boolean} [required=false] - whether the field is required on the form.
     * @memberof UiField
     */
    constructor(options = {}) {
        options = {
            ...{
                label: 'No label',
                type: 'text',
                items: [],
                choices: [],
                required: false,
            },
            ...options,
        }
        options = {
            ...{
                name: camelCase(options.label)
            },
            ...options,
        }
        this.props = options;
        this.templateOptions = options.templateOptions || {}
        this.useTemplateFile = options.useTemplateFile || true;
    }

    /**
     * Renders the template with the given values.
     * @param {object} values - the values to render the template with.
     * @returns {string} the rendered template.
     */
    render(values = {}) {
        let content = this.getContentRenderer().render(this.variables(values))
        return this.getWrapperRenderer().render({...this.defaultVariables(values), ...{content}})
    }

    /**
     * Returns a new object with the default variables and the given values.
     * @param {object} values - the values to add to the variables object.
     * @returns {object} - the new variables object.
     */
    variables(values = {}) {
        return {
            ...this.defaultVariables(values),
            ...{value: this.getValue(values)}
        }
    }

    /**
     * Returns the default values for the props of the component.
     * @param {object} values - the values to override the default values with.
     * @returns {object} the default values for the props of the component.
     */
    defaultVariables(values = {}) {
        return {
            ...{id: this.props.name},
            ...this.props,
        }
    }

    /**
     * Gets the value of the property from the values object.
     * @param {object} values - the object containing the values of the properties.
     * @returns The value of the property.
     */
    getValue(values = {}) {
        return values[this.props.name]
    }

    /**
     * Returns a function that can be used to render the content of the page.
     * @returns {string} A function that can be used to render the content of the page.
     */
    getContentRenderer() {
        let contentOptions = {
            useTemplateFile: this.usesTemplateFile(),
            templateFilename: this.getTemplateFilename(),
            templateString: this.getTemplateString(),
        }
        return this.createRenderer(contentOptions);
    }

    /**
     * Returns whether or not the template file should be used.
     * @returns {boolean} - whether or not the template file should be used.
     */
    usesTemplateFile() {
        return this.useTemplateFile;
    }

    /**
     * Returns the filename of the template file that should be used for the given type.
     * @returns {string} the filename of the template file that should be used for the given type.
     */
    getTemplateFilename() {
        return this.props.type;
    }

    /**
     * Returns the template string for the given template.
     * @returns {string} The template string.
     */
    getTemplateString() {
        return `{{{content}}}`;
    }

    /**
     * Returns the filename of the wrapper template.
     * @returns {string} The filename of the wrapper template.
     */
    getWrapperTemplateFilename() {
        return `wrapper`;
    }

    /**
     * Returns the template string for the wrapper element.
     * @returns {string} The template string for the wrapper element.
     */
    getWrapperTemplateString() {
        return `{{{content}}}`
    }

    /**
     * Returns a renderer for the wrapper template.
     * @returns {Renderer} - The renderer for the wrapper template.
     */
    getWrapperRenderer() {
        let wrapperOptions = {
            useTemplateFile: this.usesTemplateFile(),
            templateFilename: this.getWrapperTemplateFilename(),
            templateString: this.getWrapperTemplateString(),
        }
        return this.createRenderer(wrapperOptions)
    }

    /**
     * Creates a new HandlebarsRenderer object.
     * @param {object} [options={}] - The options object.
     * @returns {HandlebarsRenderer} - A new HandlebarsRenderer object.
     */
    createRenderer(options = {}) {
        options = {
            ...{templateOptions: this.templateOptions},
            ...options,
        }
        return new HandlebarsRenderer(options)
    }
}

function newField(options = {}) {
    return new UiField(options)
}

module.exports = {
    UiField
}