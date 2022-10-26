// Parameters used in step definitions
// Try to only add new ones if an existing one really cannot describe your scenario variable 

defineParameterType({
    name: "cypressId",
    regexp: new RegExp(/\S+/),
});

defineParameterType({
    name: "optionCypressId",
    regexp: new RegExp(/\S+/),
});

defineParameterType({
    name: "url",
    regexp: new RegExp(/\S+/),
});

defineParameterType({
    name: "dataValue",
    regexp: new RegExp(/\S+/),
});

defineParameterType({
    name: "file",
    regexp: new RegExp(".*"),
});

defineParameterType({
    name: "key",
    regexp: new RegExp(".*"),
});

defineParameterType({
    name: "attribute",
    regexp: new RegExp(".*"),
});

defineParameterType({
    name: "field",
    regexp: new RegExp(/\S+/),
});

defineParameterType({
    name: "value",
    regexp: new RegExp(".*"),
});

defineParameterType({
    name: "name",
    regexp: new RegExp(".*"),
});

defineParameterType({
    name: "alias",
    regexp: new RegExp(".*"),
});

defineParameterType({
    name: "copyAlias",
    regexp: new RegExp(".*"),
});

defineParameterType({
    name: "status",
    regexp: new RegExp(".*"),
});

defineParameterType({
    name: "checkboxAction",
    regexp: new RegExp(".*"),
});

defineParameterType({
    name: "columns",
    regexp: new RegExp(".*"),
});

defineParameterType({
    name: "column",
    regexp: new RegExp(".*"),
});

defineParameterType({
    name: "milliseconds",
    regexp: new RegExp(".*"),
});

defineParameterType({
    name: "reference",
    regexp: new RegExp(".*"),
});