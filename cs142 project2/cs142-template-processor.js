"use strict";

window.Cs142TemplateProcessor = class Cs142TemplateProcessor{
	constructor(template){
		this.template = template;
	}
	fillIn(dictionary){
		for(const key of Object.keys(dictionary)){
			const regex = new RegExp("{{" + key + "}}");
			this.template = this.template.replace(regex, dictionary[key]);
		}
		this.template = this.template.replace(/{{\w+}}/g, "");
		return this.template;
	}
};