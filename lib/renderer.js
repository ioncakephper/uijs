
const hbsr = require('hbsr')

/**
 * A class that represents a Renderer object.
 */
class Renderer {

    /**
     * Creates an instance of Renderer.
     * @param {object} options - An object containing the following options:
     * @param {boolean} [options.useTemplateFile=false] - Whether or not to use a template file.
     * @param {string} [options.templateFilename=""] - The name of the template file.
     * @param {string} [options.templateString=""] - The string of the template.
     * @memberof Renderer
     */
    constructor(options = {}) {
        let {useTemplateFile, templateFilename, templateString} = options;
        this.useTemplateFile = useTemplateFile;
        this.templateFilename = templateFilename;
        this.templateString = templateString;
    }

    /**
     * Renders the template file with the given values.
     * @param {string} filename - the name of the template file.
     * @param {object} values - the values to pass to the template file.
     * @returns {string} the rendered template file.
     */
    render(values = {}) {
        return this.usesTemplateFile()
            ? this.renderTemplateFile(this.getTemplateFilename(), values)
            : this.renderTemplateString(this.getTemplateString(), values)
    }

    /**
     * Renders a template file with the given values.
     * @param {string} templateFilename - the name of the template file.
     * @param {object} [values={}] - the values to render the template with.
     * @returns None
     */
    renderTemplateFile(templateFilename, values = {}) {
        throw new Error("Method not implemented");
    }

    /**
     * Takes in a template string and replaces the placeholders with the values in the values object.
     * @param {string} templateString - the template string to render.
     * @param {object} [values={}] - the values to replace the placeholders with.
     * @returns {string} the rendered template string.
     */
    renderTemplateString(templateString, values = {}) {
        throw new Error("Method not implemented")
    }

    /**
     * Returns the filename of the template file that is used to generate the style sheet.
     * @returns {string} the filename of the template file that is used to generate the style sheet.
     */
    getTemplateFilename() {
        return this.templateFilename;
    }

    /**
     * Returns whether or not the template file should be used.
     * @returns {boolean} whether or not the template file should be used.
     */
    usesTemplateFile() {
        return this.useTemplateFile;
    }

    /**
     * Returns the template string for the style sheet.
     * @returns {string} the template string for the style sheet.
     */
    getTemplateString() {
        return this.templateString;
    }
}

/**
 * A Renderer that can be rendered by the Handlebars renderer.
 */
class HandlebarsRenderer extends Renderer {

    constructor(options = {}) {
        super(options)
        let {templateOptions = {}} = options;
        this.templateOptions = templateOptions;
    }
    /**
     * @override
     */
    renderTemplateFile(templateFilename, values = {}) {
        return hbsr.render_template(templateFilename, values, this.templateOptions)
    }

    /**
     * @override
     */
    renderTemplateString(templateString, values = {}) {
        return hbsr.render(templateString, values, this.templateOptions)
    }
}

module.exports = {
    Renderer,
    HandlebarsRenderer,
}