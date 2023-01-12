const { UiField } = require("./lib/ui-field");
const { UiTextField, UiColorField, UiDateField, UiDateTimeField, UiDateTimeLocalField, UiEmailField, UiFileField, UiHiddenField } = require("./lib/ui-standard-fields");

let f = new UiField({templateOptions: {
    template_path: './lib/templates'
}});
let o = f.render({});

console.log(o)

f = new UiTextField({templateOptions: {
    template_path: './lib/templates'
}})
o = f.render({})

console.log(o)

f = new UiColorField({templateOptions: {
    template_path: './lib/templates'
}})
o = f.render({})

console.log(o)

f = new UiDateField({templateOptions: {
    template_path: './lib/templates'
}})
o = f.render({})

console.log(o)

f = new UiDateTimeField({templateOptions: {
    template_path: './lib/templates'
}})
o = f.render({})

console.log(o)

f = new UiDateTimeLocalField({templateOptions: {
    template_path: './lib/templates'
}})
o = f.render({})

console.log(o)

f = new UiEmailField({templateOptions: {
    template_path: './lib/templates'
}})
o = f.render({})

console.log(o)

f = new UiFileField({templateOptions: {
    template_path: './lib/templates'
}})
o = f.render({})

console.log(o)

f = new UiHiddenField({templateOptions: {
    template_path: './lib/templates'
}})
o = f.render({})

console.log(o)