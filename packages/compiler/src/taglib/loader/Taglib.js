"use strict";
var ok = require("assert").ok;
var path = require("path");
var loaders = require("./loaders");
var hasOwnProperty = Object.prototype.hasOwnProperty;

function handleImport(taglib, importedTaglib) {
  var importsLookup = taglib.importsLookup || (taglib.importsLookup = {});
  if (hasOwnProperty.call(importsLookup, importedTaglib.path)) {
    return;
  }

  importsLookup[importedTaglib.path] = importedTaglib;

  if (!taglib.imports) {
    taglib.imports = [];
  }

  taglib.imports.push(importedTaglib);

  if (importedTaglib.imports) {
    importedTaglib.imports.forEach(function (nestedImportedTaglib) {
      handleImport(taglib, nestedImportedTaglib);
    });
  }
}

class Taglib {
  constructor(filePath, isFromPackageJson) {
    ok(filePath, '"filePath" expected');
    this.filePath = this.path /* deprecated */ = this.id = filePath;
    this.isFromPackageJson = isFromPackageJson === true;
    this.dirname = path.dirname(this.filePath);
    this.scriptLang = undefined;
    this.tags = {};
    this.migrators = [];
    this.transformers = [];
    this.attributes = {};
    this.patternAttributes = [];
    this.imports = null;
    this.importsLookup = null;
  }

  addAttribute(attribute) {
    ok(attribute.key, '"key" is required for global attributes');

    attribute.filePath = this.filePath;

    if (!attribute.pattern && !attribute.name) {
      throw new Error("Invalid attribute: " + JSON.stringify(attribute));
    }

    this.attributes[attribute.key] = attribute;
  }
  getAttribute(name) {
    var attribute = this.attributes[name];
    if (!attribute) {
      for (var i = 0, len = this.patternAttributes.length; i < len; i++) {
        var patternAttribute = this.patternAttributes[i];
        if (patternAttribute.pattern.test(name)) {
          attribute = patternAttribute;
        }
      }
    }
    return attribute;
  }
  addTag(tag) {
    ok(arguments.length === 1, "Invalid args");
    if (!tag.name) {
      throw new Error('"tag.name" is required: ' + JSON.stringify(tag));
    }
    this.tags[tag.name] = tag;
    tag.taglibId = this.id || this.path;
  }

  addImport(path) {
    var importedTaglib = loaders.loadTaglibFromFile(path);
    handleImport(this, importedTaglib);
  }

  toJSON() {
    return {
      path: this.path,
      tags: this.tags,
      attributes: this.attributes,
      patternAttributes: this.patternAttributes,
      imports: this.imports,
    };
  }
}

module.exports = Taglib;
