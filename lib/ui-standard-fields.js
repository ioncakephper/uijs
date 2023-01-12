const {UiField} = require('../lib/ui-field');

/**
 * A text field that can be used in a UI.           
 * @extends UiField           
 */
class UiTextField extends UiField {

    /**
     * Creates an instance of UiTextField.
     * @param {*} [options={}] - the options for the UiTextField.
     * @memberof UiTextField
     */
    constructor(options = {}) {
        super(options);
        this.props.type = 'text';
    }
}

/**
 * A text field that displays a color picker when clicked.           
 * @extends UiTextField           
 */
class UiColorField extends UiTextField {

    /**
     * Creates an instance of UiColorField.
     * @param {*} [options={}] - the options for the UiColorField.
     * @memberof UiColorField
     */
    constructor(options = {}) {
        super(options);
        this.props.type = 'color'
    }

    /**
     * @override
     */
    getTemplateFilename() {
        return 'text'
    }
}

/**
 * A text field that displays a date.           
 */
class UiDateField extends UiTextField {
    
    constructor(options = {}) {
        super(options);
        this.props.type = 'date';
    }

    /**
     * @override
     */
    getTemplateFilename() {
        return 'text';
    }
}

/**
 * A text field that displays a date and time.       
 * @extends UiTextField       
 */
class UiDateTimeField extends UiTextField {
    
    constructor(options = {}) {
        super(options);
        this.props.type = 'datetime';
    }

    /**
     * @override
     */
    getTemplateFilename() {
        return 'text';
    }
}

/**
 * A text field that accepts a date and time in the format of a local date and time.           
 * @extends UiTextField           
 */
class UiDateTimeLocalField extends UiTextField {
    
    constructor(options = {}) {
        super(options);
        this.props.type = 'datetime-local';
    }

    /**
     * @override
     */
    getTemplateFilename() {
        return 'text';
    }    
}

/**
 * A text field that is used to enter an email address.           
 * @extends UiTextField           
 */
class UiEmailField extends UiTextField {
    
    constructor(options = {}) {
        super(options);
        this.props.type = 'email';
    }

    /**
     * @override
     */
    getTemplateFilename() {
        return 'text';
    }    
}    

/**
 * A text field that can be used to enter a file path.           
 * @extends UiTextField           
 */
class UiFileField extends UiTextField {
    
    constructor(options = {}) {
        super(options);
        this.props.type = 'file';
    }

    /**
     * @override
     */
    getTemplateFilename() {
        return 'text';
    }        
}

/**
 * A text field that is hidden from the user.           
 * @extends UiTextField           
 */
class UiHiddenField extends UiTextField {
      
    constructor(options = {}) {
        super(options);
        this.props.type = 'hidden';
    }

    /**
     * @override
     */
    getTemplateFilename() {
        return 'text';
    }   
}

module.exports = {
    UiTextField,
    UiColorField,
    UiDateField,
    UiDateTimeField,
    UiDateTimeLocalField,
    UiEmailField,
    UiFileField,
    UiHiddenField,
}