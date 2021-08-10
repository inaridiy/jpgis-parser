import { Converter } from "./parser/convert";
import { parse } from "fast-xml-parser";
import { converted } from "./parser/type-gml";

export class Parser {
  static parseMany(xmls: string[]) {
    const parsedXmls = xmls.map((xml) => parse(xml).Dataset);
    return Converter.convertMany(parsedXmls) as converted.convertedGML;
  }
  static parse(xml: string) {
    const parsedXml = parse(xml).Dataset;
    return Converter.convert(parsedXml) as converted.convertedGML;
  }
}
