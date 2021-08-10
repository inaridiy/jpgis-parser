interface Base {
  fid: string;
  lfSpanFr: string;
  devDate: string;
  orgGILvl: string | number;
  orgMDId?: string;
  vis?: "表示" | "非表示";
}

namespace shape {
  export type Surface = Point[];
  export type Curve = Point[];
  export type Point = [number, number];
}

export namespace unions {
  export type enumerationOfAdministrativeDivisionsByType =
    | "都道府県"
    | "郡市・東京都の区"
    | "町村・指定都市の区"
    | "大字・町・丁目"
    | "その他"
    | "不明"
    | "北海道総合振興局・振興局";
  export type buildingTypeEnum =
    | "普通建物"
    | "堅ろう建物"
    | "普通無壁舎"
    | "堅ろう無壁舎"
    | "その他"
    | "不明";
  export type coastlineTypeEnum =
    | "海岸線"
    | "露岩"
    | "その他"
    | "不明"
    | "桟橋（鉄，コンクリート）"
    | "桟橋（木製，浮桟橋）"
    | "被覆"
    | "防波堤"
    | "せき"
    | "水門"
    | "敷石斜坂";
  export type referencePointTypeEnum =
    | "電子基準点"
    | "三角点"
    | "水準点"
    | "多角点"
    | "その他の国家基準点"
    | "水路測量標"
    | "公共基準点"
    | "公共水準点"
    | "街区基準点"
    | "その他の基準点";
  export type contourTypeEnum = "一般等高線" | "凹地等高線" | "その他" | "不明";
  export type roadClassEnumType =
    | "真幅道路"
    | "軽車道"
    | "徒歩道"
    | "庭園路等"
    | "トンネル内の道路"
    | "建設中の道路"
    | "その他"
    | "不明";

  export type roadManagementEntityTypeEnum =
    | "国"
    | "都道府県"
    | "市町村"
    | "高速道路管理団体"
    | "その他"
    | "不明";

  export type watershedTypeEnum =
    | "海"
    | "河川"
    | "胡地"
    | "その他"
    | "不明"
    | "河川・胡地";

  export type WaterlineTypeEnumerated =
    | "水涯線（河川）"
    | "水涯線（湖池）"
    | "一条河川"
    | "用水路"
    | "露岩"
    | "その他"
    | "不明"
    | "桟橋（鉄，コンクリート）"
    | "桟橋（木製，浮桟橋）"
    | "被覆"
    | "せき"
    | "水門"
    | "敷石斜坂";

  export type elevationPointTypeEnum =
    | "標高点（測点）"
    | "等高線構成点"
    | "その他"
    | "不明";

  export type trackTypeEnum =
    | "普通鉄道"
    | "路面の鉄道"
    | "特殊軌道"
    | "索道"
    | "トンネル内の鉄道"
    | "建設中の鉄道"
    | "その他"
    | "不明";
  export type roadConfLineTypeEnum =
    | "歩道"
    | "側溝"
    | "分離帯"
    | "安全地帯"
    | "雨水桝"
    | "その他"
    | "不明";

  export type enumerationOfBoundaryTypesOfAdministrativeDivisions =
    | "都道府県界"
    | "郡市・東京都の区界"
    | "町村・指定都市の区界"
    | "大字・町・丁目界"
    | "その他"
    | "不明"
    | "北海道総合振興局・振興局界"
    | "市区町村界";

  export type EnumTypeByWaterStructureType =
    | "桟橋（鉄，コンクリート）"
    | "防波堤"
    | "ダム"
    | "砂防ダム"
    | "滝"
    | "せき"
    | "水門"
    | "不透過水制"
    | "透過水制"
    | "敷石斜坂"
    | "雨水桝"
    | "その他"
    | "不明";

  export type streetAreaTypeEnum = "住居表示地域" | "その他の地域" | "不明";
}

export namespace converted {
  export type convertedGML = {
    Cstline?: Cstline[];
    GCP?: GCP[];
    AdmArea?: AdmArea[];
    ElevPt?: ElevPt[];
    Cntr?: Cntr[];
    AdmPt?: AdmPt[];
    AdmBdry?: AdmBdry[];
    CommBdry?: CommBdry[];
    CommPt?: CommPt[];
    SBBdry?: SBBdry[];
    RailCL?: RailCL[];
    RdEdg?: RdEdg[];
    BldA?: BldA[];
    BldL?: BldL[];
    WStrA?: WStrA[];
    WStrL?: WStrL[];
    WL?: WL[];
    WA?: WA[];
    SBAPt?: SBAPt[];
    RdCompt?: RdCompt[];
  };

  export interface AdmArea extends Base {
    area: shape.Surface;
    type: unions.enumerationOfAdministrativeDivisionsByType;
    name: string;
    admCode: string;
    repPt?: any;
  }

  export interface BldA extends Base {
    area: shape.Surface;
    type: unions.buildingTypeEnum;
    name?: string;
  }
  export interface BldL extends Base {
    loc: shape.Curve;
    type: unions.buildingTypeEnum;
    name?: string;
  }

  export interface Cntr extends Base {
    loc: shape.Curve;
    type: unions.contourTypeEnum;
    alti: number;
  }

  export interface Cstline extends Base {
    loc: shape.Curve;
    type: unions.coastlineTypeEnum;
    name?: string;
  }

  export interface GCP extends Base {
    pos: shape.Point;
    advNo?: string;
    orgName: string;
    type: unions.referencePointTypeEnum;
    gcpClass?: string;
    gcpCode?: number;
    name: string;
    B?: number;
    L?: number;
    alti?: number;
    altiAcc?: number;
  }

  export interface RdEdg extends Base {
    loc: shape.Curve;
    type: unions.roadClassEnumType;
    name?: string;
    admOffice?: unions.roadManagementEntityTypeEnum;
  }

  export interface WA extends Base {
    area: shape.Surface;
    type: unions.watershedTypeEnum;
    name?: string;
  }

  export interface WL extends Base {
    loc: shape.Curve;
    type: unions.WaterlineTypeEnumerated;
    name?: string;
  }

  export interface AdmPt extends Base {
    pos: shape.Point;
    type: unions.enumerationOfAdministrativeDivisionsByType;
    name: string;
    admCode: string;
    admArea?: any;
  }

  export interface ElevPt extends Base {
    pos: shape.Point;
    type: unions.elevationPointTypeEnum;
    alti: number;
  }

  export interface RailCL extends Base {
    loc: shape.Curve;
    type: unions.trackTypeEnum;
    name?: string;
  }

  export interface RdCompt extends Base {
    loc: shape.Curve;
    type: unions.roadConfLineTypeEnum;
    name?: string;
    admOffice?: unions.roadManagementEntityTypeEnum;
  }

  export interface AdmBdry extends Base {
    loc: shape.Curve;
    type: unions.enumerationOfBoundaryTypesOfAdministrativeDivisions;
  }

  export interface WStrA extends Base {
    area: shape.Surface;
    type: unions.EnumTypeByWaterStructureType;
  }

  export interface WStrL extends Base {
    loc: shape.Curve;
    type: unions.EnumTypeByWaterStructureType;
    name?: string;
  }

  export interface CommBdry extends Base {
    loc: shape.Curve;
    type: unions.enumerationOfBoundaryTypesOfAdministrativeDivisions;
  }

  export interface CommPt extends Base {
    pos: shape.Point;
    type: unions.enumerationOfAdministrativeDivisionsByType;
    name: string;
    admCode: string;
    admArea?: any;
  }

  export interface SBAPt extends Base {
    pos: shape.Point;
    sbaNo?: string;
  }
  export interface typeSBArea extends Base {
    area: shape.Surface;
    type: unions.streetAreaTypeEnum;
    sbaNo?: string;
  }
  export interface SBBdry extends Base {
    area: shape.Surface;
    type: unions.streetAreaTypeEnum;
    sbaNo?: string;
  }
}

export namespace beforeConvert {
  export type typeGML = {
    Cstline?: typeCstline[];
    GCP?: typeGCP[];
    AdmArea?: typeAdmArea[];
    ElevPt?: typeElevPt[];
    Cntr?: typeCntr[];
    AdmPt?: typeAdmPt[];
    AdmBdry?: typeAdmBdry[];
    CommBdry?: typeCommBdry[];
    CommPt?: typeCommPt[];
    SBArea?: typeSBArea[];
    SBBdry?: typeSBBdry[];
    RailCL?: typeRailCL[];
    RdEdg?: typeRdEdg[];
    BldA?: typeBldA[];
    BldL?: typeBldL[];
    RvrMgtBdry?: typeRvrMgtBdry[];
    LeveeEdge?: typeLeveeEdge[];
    WStrA?: typeWStrA[];
    WStrL?: typeWStrL[];
    WL?: typeWL[];
    WA?: typeWA[];
    SBAPt?: typeSBAPt[];
    RdCompt?: typeRdCompt[];
  };

  interface GMLbase {
    fid: fid;
    lfSpanFr: { "gml:timePosition": typeDate };
    devDate: { "gml:timePosition": typeDate };
    orgGILvl: orgGILvl;
    vis: "非表示" | "表示";
  }

  type typeDate = string;
  type fid = string; // 基盤地図情報レコードID

  type orgGILvl =  //出典地図情報レベル?って何や
    | 0
    | 250
    | 500
    | 1000
    | 2500
    | 5000
    | 10000
    | 25000
    | "KJ10"
    | "KJ11"
    | "KJ12"
    | "KJ13"
    | "KJ14"
    | "KJ21"
    | "KJ22"
    | "KJ23"
    | "KJ24"
    | "KJ99"
    | "SJ10"
    | "SJ11"
    | "SJ12"
    | "SJ13"
    | "SJ21"
    | "SJ22"
    | "SJ23"
    | "SJ24"
    | "SJ99";

  export type gmlCurve = {
    "gml:Curve": gmlSegments;
  };
  export type gmlSegments = {
    "gml:segments": { "gml:LineStringSegment": { "gml:posList": string } };
  };
  export type gmlPoint = { "gml:Point": { "gml:pos": string } };
  export type gmlSurface = {
    "gml:Surface": {
      "gml:patches": {
        "gml:PolygonPatch": {
          "gml:exterior": { "gml:Ring": { "gml:curveMember": gmlCurve } };
        };
      };
    };
  };

  //標高点
  interface typeElevPt extends GMLbase {
    pos: gmlPoint;
    type: elevationPointTypeEnum;
    alti: number;
  }
  type elevationPointTypeEnum =
    | "標高点（測点）"
    | "等高線構成点"
    | "その他"
    | "不明";

  //等高線
  interface typeCntr extends GMLbase {
    loc: gmlCurve;
    type: contourTypeEnum;
    alti: number;
  }
  type contourTypeEnum = "一般等高線" | "凹地等高線" | "その他" | "不明";

  //測量の基準点
  interface typeGCP extends GMLbase {
    pos: gmlPoint;
    advNo?: string;
    orgName: string;
    type: referencePointTypeEnum;
    gcpClass?: string;
    gcpCode?: number;
    name: string;
    B?: number;
    L?: number;
    alti?: number;
    altiAcc?: number;
  }
  type referencePointTypeEnum =
    | "電子基準点"
    | "三角点"
    | "水準点"
    | "多角点"
    | "その他の国家基準点"
    | "水路測量標"
    | "公共基準点"
    | "公共水準点"
    | "街区基準点"
    | "その他の基準点";

  //行政区画 //一部ミカン
  interface typeAdmArea extends GMLbase {
    area: gmlSurface;
    type: enumerationOfAdministrativeDivisionsByType;
    name: string;
    admCode: string;
    repPt?: ref_AdmAreaType;
  }
  type ref_AdmAreaType = any;

  type enumerationOfAdministrativeDivisionsByType =
    | "都道府県"
    | "郡市・東京都の区"
    | "町村・指定都市の区"
    | "大字・町・丁目"
    | "その他"
    | "不明"
    | "北海道総合振興局・振興局";

  //行政区画界線
  interface typeAdmBdry extends GMLbase {
    loc: gmlCurve;
    type: enumerationOfBoundaryTypesOfAdministrativeDivisions;
  }
  type enumerationOfBoundaryTypesOfAdministrativeDivisions =
    | "都道府県界"
    | "郡市・東京都の区界"
    | "町村・指定都市の区界"
    | "大字・町・丁目界"
    | "その他"
    | "不明"
    | "北海道総合振興局・振興局界"
    | "市区町村界";

  //町字界線
  type typeCommBdry = typeAdmBdry;

  //行政区画代表点
  interface typeAdmPt extends GMLbase {
    pos: gmlPoint;
    type: enumerationOfAdministrativeDivisionsByType;
    name: string;
    admCode: string;
    admArea?: any;
  }

  //町字の代表点
  type typeCommPt = typeAdmPt;

  //街区域
  interface typeSBArea extends GMLbase {
    area: gmlSurface;
    type: streetAreaTypeEnum;
    sbaNo?: string;
  }
  type streetAreaTypeEnum = "住居表示地域" | "その他の地域" | "不明";

  //街区線
  type typeSBBdry = typeSBArea;

  //街区の代表点
  interface typeSBAPt extends GMLbase {
    pos: gmlPoint;
    sbaNo?: string;
  }

  //水域
  interface typeWA extends GMLbase {
    area: gmlSurface;
    type: watershedTypeEnum;
    name?: string;
  }
  type watershedTypeEnum =
    | "海"
    | "河川"
    | "胡地"
    | "その他"
    | "不明"
    | "河川・胡地";

  //水涯線
  interface typeWL extends GMLbase {
    loc: gmlCurve;
    type: WaterlineTypeEnumerated;
    name?: string;
  }
  type WaterlineTypeEnumerated =
    | "水涯線（河川）"
    | "水涯線（湖池）"
    | "一条河川"
    | "用水路"
    | "露岩"
    | "その他"
    | "不明"
    | "桟橋（鉄，コンクリート）"
    | "桟橋（木製，浮桟橋）"
    | "被覆"
    | "せき"
    | "水門"
    | "敷石斜坂";

  //海岸線
  interface typeCstline extends GMLbase {
    loc: gmlCurve;
    type: coastlineTypeEnum;
    name?: string;
  }

  type coastlineTypeEnum =
    | "海岸線"
    | "露岩"
    | "その他"
    | "不明"
    | "桟橋（鉄，コンクリート）"
    | "桟橋（木製，浮桟橋）"
    | "被覆"
    | "防波堤"
    | "せき"
    | "水門"
    | "敷石斜坂";

  //水部構造物線
  interface typeWStrL extends GMLbase {
    loc: gmlCurve;
    name?: string;
    surfA?: any;
    type: EnumTypeByWaterStructureType;
  }

  type EnumTypeByWaterStructureType =
    | "桟橋（鉄，コンクリート）"
    | "防波堤"
    | "ダム"
    | "砂防ダム"
    | "滝"
    | "せき"
    | "水門"
    | "不透過水制"
    | "透過水制"
    | "敷石斜坂"
    | "雨水桝"
    | "その他"
    | "不明";

  //水部構造物面
  interface typeWStrA extends GMLbase {
    area: gmlSurface;
    type: EnumTypeByWaterStructureType;
    name?: string;
    compL?: any;
  }

  //河川堤防表法肩法線
  interface typeLeveeEdge extends GMLbase {
    loc: [gmlCurve];
    name?: [string];
  }

  //河川区域界線
  interface typeRvrMgtBdry extends GMLbase {
    loc: [gmlCurve];
    name?: [string];
  }

  //建築物
  interface typeBldA extends GMLbase {
    area: gmlSurface;
    name?: string;
    compL: any;
    type: buildingTypeEnum;
  }
  type buildingTypeEnum =
    | "普通建物"
    | "堅ろう建物"
    | "普通無壁舎"
    | "堅ろう無壁舎"
    | "その他"
    | "不明";

  //建築物の外周線
  interface typeBldL extends GMLbase {
    loc: gmlCurve;
    type: buildingTypeEnum;
    name?: string;
    surfA?: any;
  }

  //道路縁
  interface typeRdEdg extends GMLbase {
    loc: gmlCurve;
    type: roadClassEnumType;
    name?: string;
    admOffice?: roadManagementEntityTypeEnum;
  }
  type roadClassEnumType =
    | "真幅道路"
    | "軽車道"
    | "徒歩道"
    | "庭園路等"
    | "トンネル内の道路"
    | "建設中の道路"
    | "その他"
    | "不明";

  type roadManagementEntityTypeEnum =
    | "国"
    | "都道府県"
    | "市町村"
    | "高速道路管理団体"
    | "その他"
    | "不明";

  //道路構成線
  interface typeRdCompt extends GMLbase {
    loc: gmlCurve;
    type: roadConfLineTypeEnum;
    name?: string;
    admOffice?: roadManagementEntityTypeEnum;
  }
  type roadConfLineTypeEnum =
    | "歩道"
    | "側溝"
    | "分離帯"
    | "安全地帯"
    | "雨水桝"
    | "その他"
    | "不明";

  //道路域分割線
  //道路域
  //道路区分面
  //道路区域界線

  //軌道の中心線
  interface typeRailCL extends GMLbase {
    loc: gmlCurve;
    type: trackTypeEnum;
    name?: string;
  }

  type trackTypeEnum =
    | "普通鉄道"
    | "路面の鉄道"
    | "特殊軌道"
    | "索道"
    | "トンネル内の鉄道"
    | "建設中の鉄道"
    | "その他"
    | "不明";
}
