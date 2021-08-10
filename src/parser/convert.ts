import { converted, beforeConvert } from "./type-gml";

export class Converter {
  static convertMany(objs: beforeConvert.typeGML[]) {
    const obj = objs.reduce((acc, obj) => {
      Object.entries(obj).forEach(([_key, value]) => {
        const key = _key as keyof beforeConvert.typeGML;
        if (acc[key] === undefined) {
          acc[key] = [] as any;
        }
        acc[key] = (acc[key] as any[]).concat(value);
      });
      return acc;
    });
    return this.convert(obj);
  }

  static convert(obj: beforeConvert.typeGML) {
    const result = {} as any;
    Object.entries(obj).forEach(([_key, value]) => {
      const converted = (() => {
        switch (_key) {
          case "gml:description":
            return;
          case "gml:name":
            return;
          case "AdmArea":
            return this.convertAdmArea(
              value as beforeConvert.typeGML["AdmArea"]
            );
          case "BldA":
            return this.convertBldA(value as beforeConvert.typeGML["BldA"]);
          case "BldL":
            return this.convertBldL(value as beforeConvert.typeGML["BldL"]);
          case "Cntr":
            return this.convertCntr(value as beforeConvert.typeGML["Cntr"]);
          case "Cstline":
            return this.convertCstline(
              value as beforeConvert.typeGML["Cstline"]
            );
          case "GCP":
            return this.convertGCP(value as beforeConvert.typeGML["GCP"]);
          case "RdEdg":
            return this.convertRdEdg(value as beforeConvert.typeGML["RdEdg"]);
          case "WA":
            return this.convertWA(value as beforeConvert.typeGML["WA"]);
          case "WL":
            return this.convertWL(value as beforeConvert.typeGML["WL"]);
          case "AdmPt":
            return this.convertAdmPt(value as beforeConvert.typeGML["AdmPt"]);
          case "ElevPt":
            return this.convertElevPt(value as beforeConvert.typeGML["ElevPt"]);
          case "RailCL":
            return this.convertRailCL(value as beforeConvert.typeGML["RailCL"]);
          case "AdmBdry":
            return this.convertAdmBdry(
              value as beforeConvert.typeGML["AdmBdry"]
            );
          case "WStrA":
            return this.convertWStrA(value as beforeConvert.typeGML["WStrA"]);
          case "WStrL":
            return this.convertWStrL(value as beforeConvert.typeGML["WStrL"]);
          case "CommPt":
            return this.convertCommPt(value as beforeConvert.typeGML["CommPt"]);
          case "SBAPt":
            return this.convertSBAPt(value as beforeConvert.typeGML["SBAPt"]);
          default:
            return console.error("対応してないkey: " + _key);
        }
      })();
      result[_key] = converted;
    });
    return result;
  }
  static convertArea(area: beforeConvert.gmlSurface) {
    const pointList = this.convertCurve(
      area["gml:Surface"]["gml:patches"]["gml:PolygonPatch"]["gml:exterior"][
        "gml:Ring"
      ]["gml:curveMember"]
    );
    return pointList;
  }
  static convertCurve(curve: beforeConvert.gmlCurve) {
    const pointListStr =
      curve["gml:Curve"]["gml:segments"]["gml:LineStringSegment"][
        "gml:posList"
      ];
    const pointList = pointListStr
      .split("\n")
      .map((point) => point.split(" ").map(parseFloat));
    return pointList as [number, number][];
  }
  static convertPos(point: beforeConvert.gmlPoint) {
    const pointAry = point["gml:Point"]["gml:pos"].split(" ").map(parseFloat);
    return pointAry as [number, number];
  }

  static convertAdmArea(
    ary: beforeConvert.typeGML["AdmArea"]
  ): converted.AdmArea[] | undefined {
    const result = ary?.map((obj) => {
      const {
        fid,
        lfSpanFr,
        devDate,
        orgGILvl,
        vis,
        area,
        admCode,
        type,
        name,
      } = obj;
      return {
        fid,
        orgGILvl,
        lfSpanFr: lfSpanFr["gml:timePosition"],
        devDate: devDate["gml:timePosition"],
        admCode,
        type,
        name,
        vis,
        area: this.convertArea(area),
      };
    });
    return result;
  }
  static convertBldA(
    ary: beforeConvert.typeGML["BldA"]
  ): converted.BldA[] | undefined {
    const result = ary?.map((obj) => {
      const { fid, lfSpanFr, devDate, orgGILvl, vis, area, type, name } = obj;
      return {
        fid,
        orgGILvl,
        lfSpanFr: lfSpanFr["gml:timePosition"],
        devDate: devDate["gml:timePosition"],
        vis,
        type,
        name,
        area: this.convertArea(area),
      };
    });
    return result;
  }
  static convertBldL(
    ary: beforeConvert.typeGML["BldL"]
  ): converted.BldL[] | undefined {
    const result = ary?.map((obj) => {
      const { fid, lfSpanFr, devDate, orgGILvl, vis, loc, type, name } = obj;
      return {
        fid,
        orgGILvl,
        lfSpanFr: lfSpanFr["gml:timePosition"],
        devDate: devDate["gml:timePosition"],
        vis,
        type,
        name,
        loc: this.convertCurve(loc),
      };
    });
    return result;
  }
  static convertCntr(
    ary: beforeConvert.typeGML["Cntr"]
  ): converted.Cntr[] | undefined {
    const result = ary?.map((obj) => {
      const { fid, lfSpanFr, devDate, orgGILvl, vis, loc, type, alti } = obj;
      return {
        fid,
        orgGILvl,
        lfSpanFr: lfSpanFr["gml:timePosition"],
        devDate: devDate["gml:timePosition"],
        vis,
        type,
        alti,
        loc: this.convertCurve(loc),
      };
    });
    return result;
  }
  static convertCstline(
    ary: beforeConvert.typeGML["Cstline"]
  ): converted.Cstline[] | undefined {
    const result = ary?.map((obj) => {
      const { fid, lfSpanFr, devDate, orgGILvl, vis, loc, type, name } = obj;
      return {
        fid,
        orgGILvl,
        lfSpanFr: lfSpanFr["gml:timePosition"],
        devDate: devDate["gml:timePosition"],
        vis,
        type,
        name,
        loc: this.convertCurve(loc),
      };
    });
    return result;
  }
  static convertGCP(
    ary: beforeConvert.typeGML["GCP"]
  ): converted.GCP[] | undefined {
    const result = ary?.map((obj) => {
      const {
        fid,
        lfSpanFr,
        devDate,
        orgGILvl,
        vis,
        pos,
        advNo,
        orgName,
        type,
        gcpClass,
        gcpCode,
        name,
        B,
        L,
        alti,
        altiAcc,
      } = obj;
      return {
        fid,
        orgGILvl,
        lfSpanFr: lfSpanFr["gml:timePosition"],
        devDate: devDate["gml:timePosition"],
        vis,
        pos: this.convertPos(pos),
        advNo,
        orgName,
        type,
        gcpClass,
        gcpCode,
        name,
        B,
        L,
        alti,
        altiAcc,
      };
    });
    return result;
  }
  static convertRdEdg(
    ary: beforeConvert.typeGML["RdEdg"]
  ): converted.RdEdg[] | undefined {
    const result = ary?.map((obj) => {
      const {
        fid,
        lfSpanFr,
        devDate,
        orgGILvl,
        vis,
        loc,
        type,
        name,
        admOffice,
      } = obj;
      return {
        fid,
        orgGILvl,
        lfSpanFr: lfSpanFr["gml:timePosition"],
        devDate: devDate["gml:timePosition"],
        vis,
        type,
        name,
        loc: this.convertCurve(loc),
        admOffice,
      };
    });
    return result;
  }
  static convertWA(
    ary: beforeConvert.typeGML["WA"]
  ): converted.WA[] | undefined {
    const result = ary?.map((obj) => {
      const { fid, lfSpanFr, devDate, orgGILvl, vis, area, type, name } = obj;
      return {
        fid,
        lfSpanFr: lfSpanFr["gml:timePosition"],
        devDate: devDate["gml:timePosition"],
        orgGILvl,
        vis,
        area: this.convertArea(area),
        type,
        name,
      };
    });
    return result;
  }
  static convertWL(
    ary: beforeConvert.typeGML["WL"]
  ): converted.WL[] | undefined {
    const result = ary?.map((obj) => {
      const { fid, lfSpanFr, devDate, orgGILvl, vis, loc, type, name } = obj;
      return {
        fid,
        lfSpanFr: lfSpanFr["gml:timePosition"],
        devDate: devDate["gml:timePosition"],
        orgGILvl,
        vis,
        loc: this.convertCurve(loc),
        type,
        name,
      };
    });
    return result;
  }
  static convertAdmPt(
    ary: beforeConvert.typeGML["AdmPt"]
  ): converted.AdmPt[] | undefined {
    const result = ary?.map((obj) => {
      const {
        fid,
        lfSpanFr,
        devDate,
        orgGILvl,
        vis,
        pos,
        type,
        name,
        admCode,
      } = obj;
      return {
        fid,
        lfSpanFr: lfSpanFr["gml:timePosition"],
        devDate: devDate["gml:timePosition"],
        orgGILvl,
        vis,
        pos: this.convertPos(pos),
        type,
        name,
        admCode,
      };
    });
    return result;
  }
  static convertElevPt(
    ary: beforeConvert.typeGML["ElevPt"]
  ): converted.ElevPt[] | undefined {
    const result = ary?.map((obj) => {
      const { fid, lfSpanFr, devDate, orgGILvl, vis, pos, type, alti } = obj;
      return {
        fid,
        lfSpanFr: lfSpanFr["gml:timePosition"],
        devDate: devDate["gml:timePosition"],
        orgGILvl,
        vis,
        pos: this.convertPos(pos),
        type,
        alti,
      };
    });
    return result;
  }
  static convertRailCL(
    ary: beforeConvert.typeGML["RailCL"]
  ): converted.RailCL[] | undefined {
    const result = ary?.map((obj) => {
      const { fid, lfSpanFr, devDate, orgGILvl, vis, loc, type, name } = obj;
      return {
        fid,
        lfSpanFr: lfSpanFr["gml:timePosition"],
        devDate: devDate["gml:timePosition"],
        orgGILvl,
        vis,
        loc: this.convertCurve(loc),
        type,
        name,
      };
    });
    return result;
  }
  static convertRdCompt(
    ary: beforeConvert.typeGML["RdCompt"]
  ): converted.RdCompt[] | undefined {
    const result = ary?.map((obj) => {
      const {
        fid,
        lfSpanFr,
        devDate,
        orgGILvl,
        vis,
        loc,
        type,
        name,
        admOffice,
      } = obj;
      return {
        fid,
        lfSpanFr: lfSpanFr["gml:timePosition"],
        devDate: devDate["gml:timePosition"],
        orgGILvl,
        vis,
        loc: this.convertCurve(loc),
        type,
        name,
        admOffice,
      };
    });
    return result;
  }
  static convertAdmBdry(
    ary: beforeConvert.typeGML["AdmBdry"]
  ): converted.AdmBdry[] | undefined {
    const result = ary?.map((obj) => {
      const { fid, lfSpanFr, devDate, orgGILvl, vis, loc, type } = obj;
      return {
        fid,
        lfSpanFr: lfSpanFr["gml:timePosition"],
        devDate: devDate["gml:timePosition"],
        orgGILvl,
        vis,
        loc: this.convertCurve(loc),
        type,
      };
    });
    return result;
  }
  static convertWStrA(
    ary: beforeConvert.typeGML["WStrA"]
  ): converted.WStrA[] | undefined {
    const result = ary?.map((obj) => {
      const { fid, lfSpanFr, devDate, orgGILvl, vis, area, type } = obj;
      return {
        fid,
        lfSpanFr: lfSpanFr["gml:timePosition"],
        devDate: devDate["gml:timePosition"],
        orgGILvl,
        vis,
        area: this.convertArea(area),
        type,
      };
    });
    return result;
  }
  static convertWStrL(
    ary: beforeConvert.typeGML["WStrL"]
  ): converted.WStrL[] | undefined {
    const result = ary?.map((obj) => {
      const { fid, lfSpanFr, devDate, orgGILvl, vis, loc, type, name } = obj;
      return {
        fid,
        lfSpanFr: lfSpanFr["gml:timePosition"],
        devDate: devDate["gml:timePosition"],
        orgGILvl,
        vis,
        loc: this.convertCurve(loc),
        type,
        name,
      };
    });
    return result;
  }
  static convertCommPt(
    ary: beforeConvert.typeGML["CommPt"]
  ): converted.CommPt[] | undefined {
    const result = ary?.map((obj) => {
      const {
        fid,
        lfSpanFr,
        devDate,
        orgGILvl,
        vis,
        pos,
        type,
        name,
        admCode,
      } = obj;
      return {
        fid,
        lfSpanFr: lfSpanFr["gml:timePosition"],
        devDate: devDate["gml:timePosition"],
        orgGILvl,
        vis,
        pos: this.convertPos(pos),
        type,
        name,
        admCode,
      };
    });
    return result;
  }
  static convertSBAPt(
    ary: beforeConvert.typeGML["SBAPt"]
  ): converted.SBAPt[] | undefined {
    const result = ary?.map((obj) => {
      const { fid, lfSpanFr, devDate, orgGILvl, vis, pos, sbaNo } = obj;
      return {
        fid,
        lfSpanFr: lfSpanFr["gml:timePosition"],
        devDate: devDate["gml:timePosition"],
        orgGILvl,
        vis,
        pos: this.convertPos(pos),
        sbaNo,
      };
    });
    return result;
  }
}
