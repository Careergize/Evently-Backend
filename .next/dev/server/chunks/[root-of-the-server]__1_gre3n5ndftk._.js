module.exports = [
(()=>{"use strict";return[
"[externals]/bcryptjs [external] (bcryptjs, esm_import, [project]/node_modules/bcryptjs)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
var mod = await __turbopack_context__.y("bcryptjs-ee66c2bdc904f2cf");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/nodemailer [external] (nodemailer, esm_import, [project]/node_modules/nodemailer)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
var mod = await __turbopack_context__.y("nodemailer-9c35dd349a8aaa9f");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
var mod = await __turbopack_context__.y("pg-587764f78a6c7a9c");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/node_modules/@prisma/adapter-pg/dist/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "PrismaPg",
    ()=>PrismaPgAdapterFactory
]);
// src/pg.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$debug$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/debug/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/driver-adapter-utils/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postgres$2d$array$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/postgres-array/index.js [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
// package.json
var name = "@prisma/adapter-pg";
// src/constants.ts
var FIRST_NORMAL_OBJECT_ID = 16384;
;
;
;
var { types } = __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["default"];
var { builtins: ScalarColumnType, getTypeParser } = types;
var AdditionalScalarColumnType = {
    NAME: 19
};
var ArrayColumnType = {
    BIT_ARRAY: 1561,
    BOOL_ARRAY: 1e3,
    BYTEA_ARRAY: 1001,
    BPCHAR_ARRAY: 1014,
    CHAR_ARRAY: 1002,
    CIDR_ARRAY: 651,
    DATE_ARRAY: 1182,
    FLOAT4_ARRAY: 1021,
    FLOAT8_ARRAY: 1022,
    INET_ARRAY: 1041,
    INT2_ARRAY: 1005,
    INT4_ARRAY: 1007,
    INT8_ARRAY: 1016,
    JSONB_ARRAY: 3807,
    JSON_ARRAY: 199,
    MONEY_ARRAY: 791,
    NUMERIC_ARRAY: 1231,
    OID_ARRAY: 1028,
    TEXT_ARRAY: 1009,
    TIMESTAMP_ARRAY: 1115,
    TIMESTAMPTZ_ARRAY: 1185,
    TIME_ARRAY: 1183,
    UUID_ARRAY: 2951,
    VARBIT_ARRAY: 1563,
    VARCHAR_ARRAY: 1015,
    XML_ARRAY: 143
};
var UnsupportedNativeDataType = class _UnsupportedNativeDataType extends Error {
    // map of type codes to type names
    static typeNames = {
        16: "bool",
        17: "bytea",
        18: "char",
        19: "name",
        20: "int8",
        21: "int2",
        22: "int2vector",
        23: "int4",
        24: "regproc",
        25: "text",
        26: "oid",
        27: "tid",
        28: "xid",
        29: "cid",
        30: "oidvector",
        32: "pg_ddl_command",
        71: "pg_type",
        75: "pg_attribute",
        81: "pg_proc",
        83: "pg_class",
        114: "json",
        142: "xml",
        194: "pg_node_tree",
        269: "table_am_handler",
        325: "index_am_handler",
        600: "point",
        601: "lseg",
        602: "path",
        603: "box",
        604: "polygon",
        628: "line",
        650: "cidr",
        700: "float4",
        701: "float8",
        705: "unknown",
        718: "circle",
        774: "macaddr8",
        790: "money",
        829: "macaddr",
        869: "inet",
        1033: "aclitem",
        1042: "bpchar",
        1043: "varchar",
        1082: "date",
        1083: "time",
        1114: "timestamp",
        1184: "timestamptz",
        1186: "interval",
        1266: "timetz",
        1560: "bit",
        1562: "varbit",
        1700: "numeric",
        1790: "refcursor",
        2202: "regprocedure",
        2203: "regoper",
        2204: "regoperator",
        2205: "regclass",
        2206: "regtype",
        2249: "record",
        2275: "cstring",
        2276: "any",
        2277: "anyarray",
        2278: "void",
        2279: "trigger",
        2280: "language_handler",
        2281: "internal",
        2283: "anyelement",
        2287: "_record",
        2776: "anynonarray",
        2950: "uuid",
        2970: "txid_snapshot",
        3115: "fdw_handler",
        3220: "pg_lsn",
        3310: "tsm_handler",
        3361: "pg_ndistinct",
        3402: "pg_dependencies",
        3500: "anyenum",
        3614: "tsvector",
        3615: "tsquery",
        3642: "gtsvector",
        3734: "regconfig",
        3769: "regdictionary",
        3802: "jsonb",
        3831: "anyrange",
        3838: "event_trigger",
        3904: "int4range",
        3906: "numrange",
        3908: "tsrange",
        3910: "tstzrange",
        3912: "daterange",
        3926: "int8range",
        4072: "jsonpath",
        4089: "regnamespace",
        4096: "regrole",
        4191: "regcollation",
        4451: "int4multirange",
        4532: "nummultirange",
        4533: "tsmultirange",
        4534: "tstzmultirange",
        4535: "datemultirange",
        4536: "int8multirange",
        4537: "anymultirange",
        4538: "anycompatiblemultirange",
        4600: "pg_brin_bloom_summary",
        4601: "pg_brin_minmax_multi_summary",
        5017: "pg_mcv_list",
        5038: "pg_snapshot",
        5069: "xid8",
        5077: "anycompatible",
        5078: "anycompatiblearray",
        5079: "anycompatiblenonarray",
        5080: "anycompatiblerange"
    };
    type;
    constructor(code){
        super();
        this.type = _UnsupportedNativeDataType.typeNames[code] || "Unknown";
        this.message = `Unsupported column type ${this.type}`;
    }
};
function fieldToColumnType(fieldTypeId) {
    switch(fieldTypeId){
        case ScalarColumnType.INT2:
        case ScalarColumnType.INT4:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int32;
        case ScalarColumnType.INT8:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int64;
        case ScalarColumnType.FLOAT4:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Float;
        case ScalarColumnType.FLOAT8:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Double;
        case ScalarColumnType.BOOL:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Boolean;
        case ScalarColumnType.DATE:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Date;
        case ScalarColumnType.TIME:
        case ScalarColumnType.TIMETZ:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Time;
        case ScalarColumnType.TIMESTAMP:
        case ScalarColumnType.TIMESTAMPTZ:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].DateTime;
        case ScalarColumnType.NUMERIC:
        case ScalarColumnType.MONEY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Numeric;
        case ScalarColumnType.JSON:
        case ScalarColumnType.JSONB:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Json;
        case ScalarColumnType.UUID:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Uuid;
        case ScalarColumnType.OID:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int64;
        case ScalarColumnType.BPCHAR:
        case ScalarColumnType.TEXT:
        case ScalarColumnType.VARCHAR:
        case ScalarColumnType.BIT:
        case ScalarColumnType.VARBIT:
        case ScalarColumnType.INET:
        case ScalarColumnType.CIDR:
        case ScalarColumnType.XML:
        case AdditionalScalarColumnType.NAME:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Text;
        case ScalarColumnType.BYTEA:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Bytes;
        case ArrayColumnType.INT2_ARRAY:
        case ArrayColumnType.INT4_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int32Array;
        case ArrayColumnType.FLOAT4_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].FloatArray;
        case ArrayColumnType.FLOAT8_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].DoubleArray;
        case ArrayColumnType.NUMERIC_ARRAY:
        case ArrayColumnType.MONEY_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].NumericArray;
        case ArrayColumnType.BOOL_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].BooleanArray;
        case ArrayColumnType.CHAR_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].CharacterArray;
        case ArrayColumnType.BPCHAR_ARRAY:
        case ArrayColumnType.TEXT_ARRAY:
        case ArrayColumnType.VARCHAR_ARRAY:
        case ArrayColumnType.VARBIT_ARRAY:
        case ArrayColumnType.BIT_ARRAY:
        case ArrayColumnType.INET_ARRAY:
        case ArrayColumnType.CIDR_ARRAY:
        case ArrayColumnType.XML_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].TextArray;
        case ArrayColumnType.DATE_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].DateArray;
        case ArrayColumnType.TIME_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].TimeArray;
        case ArrayColumnType.TIMESTAMP_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].DateTimeArray;
        case ArrayColumnType.TIMESTAMPTZ_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].DateTimeArray;
        case ArrayColumnType.JSON_ARRAY:
        case ArrayColumnType.JSONB_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].JsonArray;
        case ArrayColumnType.BYTEA_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].BytesArray;
        case ArrayColumnType.UUID_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].UuidArray;
        case ArrayColumnType.INT8_ARRAY:
        case ArrayColumnType.OID_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int64Array;
        default:
            if (fieldTypeId >= FIRST_NORMAL_OBJECT_ID) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Text;
            }
            throw new UnsupportedNativeDataType(fieldTypeId);
    }
}
function normalize_array(element_normalizer) {
    return (str)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postgres$2d$array$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parse"])(str, element_normalizer);
}
function normalize_numeric(numeric) {
    return numeric;
}
function normalize_date(date) {
    return date;
}
function normalize_timestamp(time) {
    return `${time.replace(" ", "T")}+00:00`;
}
function normalize_timestamptz(time) {
    return time.replace(" ", "T").replace(/[+-]\d{2}(:\d{2})?$/, "+00:00");
}
function normalize_time(time) {
    return time;
}
function normalize_timez(time) {
    return time.replace(/[+-]\d{2}(:\d{2})?$/, "");
}
function normalize_money(money) {
    return money.slice(1);
}
function normalize_xml(xml) {
    return xml;
}
function toJson(json) {
    return json;
}
var parsePgBytes = getTypeParser(ScalarColumnType.BYTEA);
var normalizeByteaArray = getTypeParser(ArrayColumnType.BYTEA_ARRAY);
function convertBytes(serializedBytes) {
    return parsePgBytes(serializedBytes);
}
function normalizeBit(bit) {
    return bit;
}
var customParsers = {
    [ScalarColumnType.NUMERIC]: normalize_numeric,
    [ArrayColumnType.NUMERIC_ARRAY]: normalize_array(normalize_numeric),
    [ScalarColumnType.TIME]: normalize_time,
    [ArrayColumnType.TIME_ARRAY]: normalize_array(normalize_time),
    [ScalarColumnType.TIMETZ]: normalize_timez,
    [ScalarColumnType.DATE]: normalize_date,
    [ArrayColumnType.DATE_ARRAY]: normalize_array(normalize_date),
    [ScalarColumnType.TIMESTAMP]: normalize_timestamp,
    [ArrayColumnType.TIMESTAMP_ARRAY]: normalize_array(normalize_timestamp),
    [ScalarColumnType.TIMESTAMPTZ]: normalize_timestamptz,
    [ArrayColumnType.TIMESTAMPTZ_ARRAY]: normalize_array(normalize_timestamptz),
    [ScalarColumnType.MONEY]: normalize_money,
    [ArrayColumnType.MONEY_ARRAY]: normalize_array(normalize_money),
    [ScalarColumnType.JSON]: toJson,
    [ArrayColumnType.JSON_ARRAY]: normalize_array(toJson),
    [ScalarColumnType.JSONB]: toJson,
    [ArrayColumnType.JSONB_ARRAY]: normalize_array(toJson),
    [ScalarColumnType.BYTEA]: convertBytes,
    [ArrayColumnType.BYTEA_ARRAY]: normalizeByteaArray,
    [ArrayColumnType.BIT_ARRAY]: normalize_array(normalizeBit),
    [ArrayColumnType.VARBIT_ARRAY]: normalize_array(normalizeBit),
    [ArrayColumnType.XML_ARRAY]: normalize_array(normalize_xml)
};
function mapArg(arg, argType) {
    if (arg === null) {
        return null;
    }
    if (Array.isArray(arg) && argType.arity === "list") {
        return arg.map((value)=>mapArg(value, argType));
    }
    if (typeof arg === "string" && argType.scalarType === "datetime") {
        arg = new Date(arg);
    }
    if (arg instanceof Date) {
        switch(argType.dbType){
            case "TIME":
            case "TIMETZ":
                return formatTime(arg);
            case "DATE":
                return formatDate(arg);
            default:
                return formatDateTime(arg);
        }
    }
    if (typeof arg === "string" && argType.scalarType === "bytes") {
        return Buffer.from(arg, "base64");
    }
    if (ArrayBuffer.isView(arg)) {
        return new Uint8Array(arg.buffer, arg.byteOffset, arg.byteLength);
    }
    return arg;
}
function formatDateTime(date) {
    const pad = (n, z = 2)=>String(n).padStart(z, "0");
    const ms = date.getUTCMilliseconds();
    return pad(date.getUTCFullYear(), 4) + "-" + pad(date.getUTCMonth() + 1) + "-" + pad(date.getUTCDate()) + " " + pad(date.getUTCHours()) + ":" + pad(date.getUTCMinutes()) + ":" + pad(date.getUTCSeconds()) + (ms ? "." + String(ms).padStart(3, "0") : "");
}
function formatDate(date) {
    const pad = (n, z = 2)=>String(n).padStart(z, "0");
    return pad(date.getUTCFullYear(), 4) + "-" + pad(date.getUTCMonth() + 1) + "-" + pad(date.getUTCDate());
}
function formatTime(date) {
    const pad = (n, z = 2)=>String(n).padStart(z, "0");
    const ms = date.getUTCMilliseconds();
    return pad(date.getUTCHours()) + ":" + pad(date.getUTCMinutes()) + ":" + pad(date.getUTCSeconds()) + (ms ? "." + String(ms).padStart(3, "0") : "");
}
// src/errors.ts
var TLS_ERRORS = /* @__PURE__ */ new Set([
    "UNABLE_TO_GET_ISSUER_CERT",
    "UNABLE_TO_GET_CRL",
    "UNABLE_TO_DECRYPT_CERT_SIGNATURE",
    "UNABLE_TO_DECRYPT_CRL_SIGNATURE",
    "UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY",
    "CERT_SIGNATURE_FAILURE",
    "CRL_SIGNATURE_FAILURE",
    "CERT_NOT_YET_VALID",
    "CERT_HAS_EXPIRED",
    "CRL_NOT_YET_VALID",
    "CRL_HAS_EXPIRED",
    "ERROR_IN_CERT_NOT_BEFORE_FIELD",
    "ERROR_IN_CERT_NOT_AFTER_FIELD",
    "ERROR_IN_CRL_LAST_UPDATE_FIELD",
    "ERROR_IN_CRL_NEXT_UPDATE_FIELD",
    "DEPTH_ZERO_SELF_SIGNED_CERT",
    "SELF_SIGNED_CERT_IN_CHAIN",
    "UNABLE_TO_GET_ISSUER_CERT_LOCALLY",
    "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
    "CERT_CHAIN_TOO_LONG",
    "CERT_REVOKED",
    "INVALID_CA",
    "INVALID_PURPOSE",
    "CERT_UNTRUSTED",
    "CERT_REJECTED",
    "HOSTNAME_MISMATCH",
    "ERR_TLS_CERT_ALTNAME_FORMAT",
    "ERR_TLS_CERT_ALTNAME_INVALID"
]);
var SOCKET_ERRORS = /* @__PURE__ */ new Set([
    "ENOTFOUND",
    "ECONNREFUSED",
    "ECONNRESET",
    "ETIMEDOUT"
]);
function convertDriverError(error) {
    if (isSocketError(error)) {
        return mapSocketError(error);
    }
    if (isTlsError(error)) {
        return {
            kind: "TlsConnectionError",
            reason: error.message
        };
    }
    if (isDriverError(error)) {
        return {
            originalCode: error.code,
            originalMessage: error.message,
            ...mapDriverError(error)
        };
    }
    throw error;
}
function mapDriverError(error) {
    switch(error.code){
        case "22001":
            return {
                kind: "LengthMismatch",
                column: error.column
            };
        case "22003":
            return {
                kind: "ValueOutOfRange",
                cause: error.message
            };
        case "22P02":
            return {
                kind: "InvalidInputValue",
                message: error.message
            };
        case "23505":
            {
                const fields = error.detail?.match(/Key \(([^)]+)\)/)?.at(1)?.split(", ");
                let constraint;
                if (error.constraint) {
                    constraint = {
                        index: error.constraint
                    };
                } else if (fields !== void 0) {
                    constraint = {
                        fields
                    };
                }
                let table = error.table;
                if (table === void 0 && fields !== void 0 && fields.length > 0) {
                    const suffix = `_${fields.join("_")}_key`;
                    if (error.constraint?.endsWith(suffix)) {
                        table = error.constraint.slice(0, -suffix.length);
                    }
                }
                return {
                    kind: "UniqueConstraintViolation",
                    constraint,
                    table
                };
            }
        case "23502":
            {
                const fields = error.detail?.match(/Key \(([^)]+)\)/)?.at(1)?.split(", ");
                return {
                    kind: "NullConstraintViolation",
                    constraint: fields !== void 0 ? {
                        fields
                    } : void 0
                };
            }
        case "23503":
            {
                let constraint;
                if (error.column) {
                    constraint = {
                        fields: [
                            error.column
                        ]
                    };
                } else if (error.constraint) {
                    constraint = {
                        index: error.constraint
                    };
                }
                return {
                    kind: "ForeignKeyConstraintViolation",
                    constraint
                };
            }
        case "23001":
            {
                let constraint;
                if (error.column) {
                    constraint = {
                        fields: [
                            error.column
                        ]
                    };
                } else if (error.constraint) {
                    constraint = {
                        index: error.constraint
                    };
                }
                return {
                    kind: "RestrictViolation",
                    constraint
                };
            }
        case "3D000":
            return {
                kind: "DatabaseDoesNotExist",
                db: error.message.split(" ").at(1)?.split('"').at(1)
            };
        case "28000":
            return {
                kind: "DatabaseAccessDenied",
                db: error.message.split(",").find((s)=>s.startsWith(" database"))?.split('"').at(1)
            };
        case "28P01":
            return {
                kind: "AuthenticationFailed",
                user: error.message.split(" ").pop()?.split('"').at(1)
            };
        case "40001":
        case "40P01":
            return {
                kind: "TransactionWriteConflict"
            };
        case "42P01":
            return {
                kind: "TableDoesNotExist",
                table: error.message.split(" ").at(1)?.split('"').at(1)
            };
        case "42703":
            {
                const rawColumn = error.message.match(/^column (.+) does not exist$/)?.at(1);
                return {
                    kind: "ColumnNotFound",
                    column: rawColumn?.replace(/"((?:""|[^"])*)"/g, (_, id)=>id.replaceAll('""', '"'))
                };
            }
        case "42P04":
            return {
                kind: "DatabaseAlreadyExists",
                db: error.message.split(" ").at(1)?.split('"').at(1)
            };
        case "53300":
            return {
                kind: "TooManyConnections",
                cause: error.message
            };
        default:
            return {
                kind: "postgres",
                code: error.code ?? "N/A",
                severity: error.severity ?? "N/A",
                message: error.message,
                detail: error.detail,
                column: error.column,
                hint: error.hint
            };
    }
}
function isDriverError(error) {
    return typeof error.code === "string" && typeof error.message === "string" && typeof error.severity === "string" && (typeof error.detail === "string" || error.detail === void 0) && (typeof error.column === "string" || error.column === void 0) && (typeof error.hint === "string" || error.hint === void 0);
}
function mapSocketError(error) {
    switch(error.code){
        case "ENOTFOUND":
        case "ECONNREFUSED":
            return {
                kind: "DatabaseNotReachable",
                host: error.address ?? error.hostname,
                port: error.port
            };
        case "ECONNRESET":
            return {
                kind: "ConnectionClosed"
            };
        case "ETIMEDOUT":
            return {
                kind: "SocketTimeout"
            };
    }
}
function isSocketError(error) {
    return typeof error.code === "string" && typeof error.syscall === "string" && typeof error.errno === "number" && SOCKET_ERRORS.has(error.code);
}
function isTlsError(error) {
    if (typeof error.code === "string") {
        return TLS_ERRORS.has(error.code);
    }
    switch(error.message){
        case "The server does not support SSL connections":
        case "There was an error establishing an SSL connection":
            return true;
    }
    return false;
}
// src/pg.ts
var types2 = __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["default"].types;
var debug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$debug$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Debug"])("prisma:driver-adapter:pg");
var PgQueryable = class {
    constructor(client, pgOptions){
        this.client = client;
        this.pgOptions = pgOptions;
    }
    provider = "postgres";
    adapterName = name;
    /**
   * Execute a query given as SQL, interpolating the given parameters.
   */ async queryRaw(query) {
        const tag = "[js::query_raw]";
        debug(`${tag} %O`, query);
        const { fields, rows } = await this.performIO(query);
        const columnNames = fields.map((field)=>field.name);
        let columnTypes = [];
        try {
            columnTypes = fields.map((field)=>fieldToColumnType(field.dataTypeID));
        } catch (e) {
            if (e instanceof UnsupportedNativeDataType) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DriverAdapterError"]({
                    kind: "UnsupportedNativeDataType",
                    type: e.type
                });
            }
            throw e;
        }
        const udtParser = this.pgOptions?.userDefinedTypeParser;
        if (udtParser) {
            for(let i = 0; i < fields.length; i++){
                const field = fields[i];
                if (field.dataTypeID >= FIRST_NORMAL_OBJECT_ID && !Object.hasOwn(customParsers, field.dataTypeID)) {
                    for(let j = 0; j < rows.length; j++){
                        rows[j][i] = await udtParser(field.dataTypeID, rows[j][i], this);
                    }
                }
            }
        }
        return {
            columnNames,
            columnTypes,
            rows
        };
    }
    /**
   * Execute a query given as SQL, interpolating the given parameters and
   * returning the number of affected rows.
   * Note: Queryable expects a u64, but napi.rs only supports u32.
   */ async executeRaw(query) {
        const tag = "[js::execute_raw]";
        debug(`${tag} %O`, query);
        return (await this.performIO(query)).rowCount ?? 0;
    }
    /**
   * Run a query against the database, returning the result set.
   * Should the query fail due to a connection error, the connection is
   * marked as unhealthy.
   */ async performIO(query) {
        const { sql, args } = query;
        const values = args.map((arg, i)=>mapArg(arg, query.argTypes[i]));
        try {
            const result = await this.client.query({
                name: this.pgOptions?.statementNameGenerator?.(query),
                text: sql,
                values,
                rowMode: "array",
                types: {
                    getTypeParser: (oid, format)=>{
                        if (format === "text" && customParsers[oid]) {
                            return customParsers[oid];
                        }
                        return types2.getTypeParser(oid, format);
                    }
                }
            });
            return result;
        } catch (e) {
            this.onError(e);
        }
    }
    onError(error) {
        debug("Error in performIO: %O", error);
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DriverAdapterError"](convertDriverError(error));
    }
};
var PgTransaction = class extends PgQueryable {
    constructor(client, options, pgOptions, cleanup){
        super(client, pgOptions);
        this.options = options;
        this.pgOptions = pgOptions;
        this.cleanup = cleanup;
    }
    async commit() {
        debug(`[js::commit]`);
        this.cleanup?.();
        this.client.release();
    }
    async rollback() {
        debug(`[js::rollback]`);
        this.cleanup?.();
        this.client.release();
    }
    async createSavepoint(name2) {
        await this.executeRaw({
            sql: `SAVEPOINT ${name2}`,
            args: [],
            argTypes: []
        });
    }
    async rollbackToSavepoint(name2) {
        await this.executeRaw({
            sql: `ROLLBACK TO SAVEPOINT ${name2}`,
            args: [],
            argTypes: []
        });
    }
    async releaseSavepoint(name2) {
        await this.executeRaw({
            sql: `RELEASE SAVEPOINT ${name2}`,
            args: [],
            argTypes: []
        });
    }
};
var PrismaPgAdapter = class extends PgQueryable {
    constructor(client, pgOptions, release){
        super(client);
        this.pgOptions = pgOptions;
        this.release = release;
    }
    async startTransaction(isolationLevel) {
        const options = {
            usePhantomQuery: false
        };
        const tag = "[js::startTransaction]";
        debug("%s options: %O", tag, options);
        const conn = await this.client.connect().catch((error)=>this.onError(error));
        const onError = (err)=>{
            debug(`Error from pool connection: ${err.message} %O`, err);
            this.pgOptions?.onConnectionError?.(err);
        };
        conn.on("error", onError);
        const cleanup = ()=>{
            conn.removeListener("error", onError);
        };
        try {
            const tx = new PgTransaction(conn, options, this.pgOptions, cleanup);
            await tx.executeRaw({
                sql: "BEGIN",
                args: [],
                argTypes: []
            });
            if (isolationLevel) {
                await tx.executeRaw({
                    sql: `SET TRANSACTION ISOLATION LEVEL ${isolationLevel}`,
                    args: [],
                    argTypes: []
                });
            }
            return tx;
        } catch (error) {
            cleanup();
            conn.release(error);
            this.onError(error);
        }
    }
    async executeScript(script) {
        const statements = script.split(";").map((stmt)=>stmt.trim()).filter((stmt)=>stmt.length > 0);
        for (const stmt of statements){
            try {
                await this.client.query(stmt);
            } catch (error) {
                this.onError(error);
            }
        }
    }
    getConnectionInfo() {
        return {
            schemaName: this.pgOptions?.schema,
            supportsRelationJoins: true
        };
    }
    async dispose() {
        return this.release?.();
    }
    underlyingDriver() {
        return this.client;
    }
};
var PrismaPgAdapterFactory = class {
    constructor(poolOrConfig, options){
        this.options = options;
        if (poolOrConfig instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["default"].Pool) {
            this.externalPool = poolOrConfig;
            this.config = poolOrConfig.options;
        } else if (typeof poolOrConfig === "string") {
            this.externalPool = null;
            this.config = {
                connectionString: poolOrConfig
            };
        } else {
            this.externalPool = null;
            this.config = poolOrConfig;
        }
    }
    provider = "postgres";
    adapterName = name;
    config;
    externalPool;
    async connect() {
        const client = this.externalPool ?? new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["default"].Pool(this.config);
        const onIdleClientError = (err)=>{
            debug(`Error from idle pool client: ${err.message} %O`, err);
            this.options?.onPoolError?.(err);
        };
        client.on("error", onIdleClientError);
        return new PrismaPgAdapter(client, this.options, async ()=>{
            if (this.externalPool) {
                if (this.options?.disposeExternalPool) {
                    await this.externalPool.end();
                    this.externalPool = null;
                } else {
                    this.externalPool.removeListener("error", onIdleClientError);
                }
            } else {
                await client.end();
            }
        });
    }
    async connectToShadowDb() {
        const conn = await this.connect();
        const database = `prisma_migrate_shadow_db_${globalThis.crypto.randomUUID()}`;
        await conn.executeScript(`CREATE DATABASE "${database}"`);
        const client = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["default"].Pool({
            ...this.config,
            database
        });
        return new PrismaPgAdapter(client, void 0, async ()=>{
            await conn.executeScript(`DROP DATABASE "${database}"`);
            await client.end();
        });
    }
};
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/@prisma/debug/dist/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Debug",
    ()=>Debug,
    "clearLogs",
    ()=>clearLogs,
    "default",
    ()=>index_default,
    "getLogs",
    ()=>getLogs
]);
var __defProp = Object.defineProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
// ../../node_modules/.pnpm/kleur@4.1.5/node_modules/kleur/colors.mjs
var colors_exports = {};
__export(colors_exports, {
    $: ()=>$,
    bgBlack: ()=>bgBlack,
    bgBlue: ()=>bgBlue,
    bgCyan: ()=>bgCyan,
    bgGreen: ()=>bgGreen,
    bgMagenta: ()=>bgMagenta,
    bgRed: ()=>bgRed,
    bgWhite: ()=>bgWhite,
    bgYellow: ()=>bgYellow,
    black: ()=>black,
    blue: ()=>blue,
    bold: ()=>bold,
    cyan: ()=>cyan,
    dim: ()=>dim,
    gray: ()=>gray,
    green: ()=>green,
    grey: ()=>grey,
    hidden: ()=>hidden,
    inverse: ()=>inverse,
    italic: ()=>italic,
    magenta: ()=>magenta,
    red: ()=>red,
    reset: ()=>reset,
    strikethrough: ()=>strikethrough,
    underline: ()=>underline,
    white: ()=>white,
    yellow: ()=>yellow
});
var FORCE_COLOR;
var NODE_DISABLE_COLORS;
var NO_COLOR;
var TERM;
var isTTY = true;
if (typeof process !== "undefined") {
    ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {});
    isTTY = process.stdout && process.stdout.isTTY;
}
var $ = {
    enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY)
};
function init(x, y) {
    let rgx = new RegExp(`\\x1b\\[${y}m`, "g");
    let open = `\x1B[${x}m`, close = `\x1B[${y}m`;
    return function(txt) {
        if (!$.enabled || txt == null) return txt;
        return open + (!!~("" + txt).indexOf(close) ? txt.replace(rgx, close + open) : txt) + close;
    };
}
var reset = init(0, 0);
var bold = init(1, 22);
var dim = init(2, 22);
var italic = init(3, 23);
var underline = init(4, 24);
var inverse = init(7, 27);
var hidden = init(8, 28);
var strikethrough = init(9, 29);
var black = init(30, 39);
var red = init(31, 39);
var green = init(32, 39);
var yellow = init(33, 39);
var blue = init(34, 39);
var magenta = init(35, 39);
var cyan = init(36, 39);
var white = init(37, 39);
var gray = init(90, 39);
var grey = init(90, 39);
var bgBlack = init(40, 49);
var bgRed = init(41, 49);
var bgGreen = init(42, 49);
var bgYellow = init(43, 49);
var bgBlue = init(44, 49);
var bgMagenta = init(45, 49);
var bgCyan = init(46, 49);
var bgWhite = init(47, 49);
// src/index.ts
var MAX_ARGS_HISTORY = 100;
var COLORS = [
    "green",
    "yellow",
    "blue",
    "magenta",
    "cyan",
    "red"
];
var argsHistory = [];
var lastTimestamp = Date.now();
var lastColor = 0;
var processEnv = typeof process !== "undefined" ? process.env : {};
globalThis.DEBUG ??= processEnv.DEBUG ?? "";
globalThis.DEBUG_COLORS ??= processEnv.DEBUG_COLORS ? processEnv.DEBUG_COLORS === "true" : true;
var topProps = {
    enable (namespace) {
        if (typeof namespace === "string") {
            globalThis.DEBUG = namespace;
        }
    },
    disable () {
        const prev = globalThis.DEBUG;
        globalThis.DEBUG = "";
        return prev;
    },
    // this is the core logic to check if logging should happen or not
    enabled (namespace) {
        const listenedNamespaces = globalThis.DEBUG.split(",").map((s)=>{
            return s.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
        });
        const isListened = listenedNamespaces.some((listenedNamespace)=>{
            if (listenedNamespace === "" || listenedNamespace[0] === "-") return false;
            return namespace.match(RegExp(listenedNamespace.split("*").join(".*") + "$"));
        });
        const isExcluded = listenedNamespaces.some((listenedNamespace)=>{
            if (listenedNamespace === "" || listenedNamespace[0] !== "-") return false;
            return namespace.match(RegExp(listenedNamespace.slice(1).split("*").join(".*") + "$"));
        });
        return isListened && !isExcluded;
    },
    log: (...args)=>{
        const [namespace, format, ...rest] = args;
        const logWithFormatting = console.warn ?? console.log;
        logWithFormatting(`${namespace} ${format}`, ...rest);
    },
    formatters: {}
};
function debugCreate(namespace) {
    const instanceProps = {
        color: COLORS[lastColor++ % COLORS.length],
        enabled: topProps.enabled(namespace),
        namespace,
        log: topProps.log,
        extend: ()=>{}
    };
    const debugCall = (...args)=>{
        const { enabled, namespace: namespace2, color, log } = instanceProps;
        if (args.length !== 0) {
            argsHistory.push([
                namespace2,
                ...args
            ]);
        }
        if (argsHistory.length > MAX_ARGS_HISTORY) {
            argsHistory.shift();
        }
        if (topProps.enabled(namespace2) || enabled) {
            const stringArgs = args.map((arg)=>{
                if (typeof arg === "string") {
                    return arg;
                }
                return safeStringify(arg);
            });
            const ms = `+${Date.now() - lastTimestamp}ms`;
            lastTimestamp = Date.now();
            if (globalThis.DEBUG_COLORS) {
                log(colors_exports[color](bold(namespace2)), ...stringArgs, colors_exports[color](ms));
            } else {
                log(namespace2, ...stringArgs, ms);
            }
        }
    };
    return new Proxy(debugCall, {
        get: (_, prop)=>instanceProps[prop],
        set: (_, prop, value)=>instanceProps[prop] = value
    });
}
var Debug = new Proxy(debugCreate, {
    get: (_, prop)=>topProps[prop],
    set: (_, prop, value)=>topProps[prop] = value
});
function safeStringify(value, indent = 2) {
    const cache = /* @__PURE__ */ new Set();
    return JSON.stringify(value, (key, value2)=>{
        if (typeof value2 === "object" && value2 !== null) {
            if (cache.has(value2)) {
                return `[Circular *]`;
            }
            cache.add(value2);
        } else if (typeof value2 === "bigint") {
            return value2.toString();
        }
        return value2;
    }, indent);
}
function getLogs(numChars = 7500) {
    const logs = argsHistory.map(([namespace, ...args])=>{
        return `${namespace} ${args.map((arg)=>{
            if (typeof arg === "string") {
                return arg;
            } else {
                return JSON.stringify(arg);
            }
        }).join(" ")}`;
    }).join("\n");
    if (logs.length < numChars) {
        return logs;
    }
    return logs.slice(-numChars);
}
function clearLogs() {
    argsHistory.length = 0;
}
var index_default = Debug;
;
}),
"[project]/node_modules/@prisma/driver-adapter-utils/dist/index.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ColumnTypeEnum",
    ()=>ColumnTypeEnum,
    "DriverAdapterError",
    ()=>DriverAdapterError,
    "bindAdapter",
    ()=>bindAdapter,
    "bindMigrationAwareSqlAdapterFactory",
    ()=>bindMigrationAwareSqlAdapterFactory,
    "bindSqlAdapterFactory",
    ()=>bindSqlAdapterFactory,
    "err",
    ()=>err,
    "isDriverAdapterError",
    ()=>isDriverAdapterError,
    "mockAdapter",
    ()=>mockAdapter,
    "mockAdapterErrors",
    ()=>mockAdapterErrors,
    "mockAdapterFactory",
    ()=>mockAdapterFactory,
    "mockMigrationAwareAdapterFactory",
    ()=>mockMigrationAwareAdapterFactory,
    "ok",
    ()=>ok
]);
// src/debug.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$debug$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/debug/dist/index.mjs [app-route] (ecmascript)");
;
// src/error.ts
var DriverAdapterError = class extends Error {
    name = "DriverAdapterError";
    cause;
    constructor(payload){
        super(typeof payload["message"] === "string" ? payload["message"] : payload.kind);
        this.cause = payload;
    }
};
function isDriverAdapterError(error) {
    return error["name"] === "DriverAdapterError" && typeof error["cause"] === "object";
}
// src/result.ts
function ok(value) {
    return {
        ok: true,
        value,
        map (fn) {
            return ok(fn(value));
        },
        flatMap (fn) {
            return fn(value);
        }
    };
}
function err(error) {
    return {
        ok: false,
        error,
        map () {
            return err(error);
        },
        flatMap () {
            return err(error);
        }
    };
}
// src/binder.ts
var debug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$debug$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Debug"])("driver-adapter-utils");
var ErrorRegistryInternal = class {
    registeredErrors = [];
    consumeError(id) {
        return this.registeredErrors[id];
    }
    registerNewError(error) {
        let i = 0;
        while(this.registeredErrors[i] !== void 0){
            i++;
        }
        this.registeredErrors[i] = {
            error
        };
        return i;
    }
};
function copySymbolsFromSource(source, target) {
    const symbols = Object.getOwnPropertySymbols(source);
    const symbolObject = Object.fromEntries(symbols.map((symbol)=>[
            symbol,
            true
        ]));
    Object.assign(target, symbolObject);
}
var bindMigrationAwareSqlAdapterFactory = (adapterFactory)=>{
    const errorRegistry = new ErrorRegistryInternal();
    const boundFactory = {
        adapterName: adapterFactory.adapterName,
        provider: adapterFactory.provider,
        errorRegistry,
        connect: async (...args)=>{
            const ctx = await wrapAsync(errorRegistry, adapterFactory.connect.bind(adapterFactory))(...args);
            return ctx.map((ctx2)=>bindAdapter(ctx2, errorRegistry));
        },
        connectToShadowDb: async (...args)=>{
            const ctx = await wrapAsync(errorRegistry, adapterFactory.connectToShadowDb.bind(adapterFactory))(...args);
            return ctx.map((ctx2)=>bindAdapter(ctx2, errorRegistry));
        }
    };
    copySymbolsFromSource(adapterFactory, boundFactory);
    return boundFactory;
};
var bindSqlAdapterFactory = (adapterFactory)=>{
    const errorRegistry = new ErrorRegistryInternal();
    const boundFactory = {
        adapterName: adapterFactory.adapterName,
        provider: adapterFactory.provider,
        errorRegistry,
        connect: async (...args)=>{
            const ctx = await wrapAsync(errorRegistry, adapterFactory.connect.bind(adapterFactory))(...args);
            return ctx.map((ctx2)=>bindAdapter(ctx2, errorRegistry));
        }
    };
    copySymbolsFromSource(adapterFactory, boundFactory);
    return boundFactory;
};
var bindAdapter = (adapter, errorRegistry = new ErrorRegistryInternal())=>{
    const boundAdapter = {
        adapterName: adapter.adapterName,
        errorRegistry,
        queryRaw: wrapAsync(errorRegistry, adapter.queryRaw.bind(adapter)),
        executeRaw: wrapAsync(errorRegistry, adapter.executeRaw.bind(adapter)),
        executeScript: wrapAsync(errorRegistry, adapter.executeScript.bind(adapter)),
        dispose: wrapAsync(errorRegistry, adapter.dispose.bind(adapter)),
        provider: adapter.provider,
        startTransaction: async (...args)=>{
            const ctx = await wrapAsync(errorRegistry, adapter.startTransaction.bind(adapter))(...args);
            return ctx.map((ctx2)=>bindTransaction(errorRegistry, ctx2));
        }
    };
    if (adapter.getConnectionInfo) {
        boundAdapter.getConnectionInfo = wrapSync(errorRegistry, adapter.getConnectionInfo.bind(adapter));
    }
    return boundAdapter;
};
var bindTransaction = (errorRegistry, transaction)=>{
    const boundTransaction = {
        adapterName: transaction.adapterName,
        provider: transaction.provider,
        options: transaction.options,
        queryRaw: wrapAsync(errorRegistry, transaction.queryRaw.bind(transaction)),
        executeRaw: wrapAsync(errorRegistry, transaction.executeRaw.bind(transaction)),
        commit: wrapAsync(errorRegistry, transaction.commit.bind(transaction)),
        rollback: wrapAsync(errorRegistry, transaction.rollback.bind(transaction))
    };
    if (transaction.createSavepoint) {
        boundTransaction.createSavepoint = wrapAsync(errorRegistry, transaction.createSavepoint.bind(transaction));
    }
    if (transaction.rollbackToSavepoint) {
        boundTransaction.rollbackToSavepoint = wrapAsync(errorRegistry, transaction.rollbackToSavepoint.bind(transaction));
    }
    if (transaction.releaseSavepoint) {
        boundTransaction.releaseSavepoint = wrapAsync(errorRegistry, transaction.releaseSavepoint.bind(transaction));
    }
    return boundTransaction;
};
function wrapAsync(registry, fn) {
    return async (...args)=>{
        try {
            return ok(await fn(...args));
        } catch (error) {
            debug("[error@wrapAsync]", error);
            if (isDriverAdapterError(error)) {
                return err(error.cause);
            }
            const id = registry.registerNewError(error);
            return err({
                kind: "GenericJs",
                id
            });
        }
    };
}
function wrapSync(registry, fn) {
    return (...args)=>{
        try {
            return ok(fn(...args));
        } catch (error) {
            debug("[error@wrapSync]", error);
            if (isDriverAdapterError(error)) {
                return err(error.cause);
            }
            const id = registry.registerNewError(error);
            return err({
                kind: "GenericJs",
                id
            });
        }
    };
}
// src/const.ts
var ColumnTypeEnum = {
    // Scalars
    Int32: 0,
    Int64: 1,
    Float: 2,
    Double: 3,
    Numeric: 4,
    Boolean: 5,
    Character: 6,
    Text: 7,
    Date: 8,
    Time: 9,
    DateTime: 10,
    Json: 11,
    Enum: 12,
    Bytes: 13,
    Set: 14,
    Uuid: 15,
    // Arrays
    Int32Array: 64,
    Int64Array: 65,
    FloatArray: 66,
    DoubleArray: 67,
    NumericArray: 68,
    BooleanArray: 69,
    CharacterArray: 70,
    TextArray: 71,
    DateArray: 72,
    TimeArray: 73,
    DateTimeArray: 74,
    JsonArray: 75,
    EnumArray: 76,
    BytesArray: 77,
    UuidArray: 78,
    // Custom
    UnknownNumber: 128
};
// src/mock.ts
var mockAdapterErrors = {
    queryRaw: new Error("Not implemented: queryRaw"),
    executeRaw: new Error("Not implemented: executeRaw"),
    startTransaction: new Error("Not implemented: startTransaction"),
    executeScript: new Error("Not implemented: executeScript"),
    dispose: new Error("Not implemented: dispose")
};
function mockAdapter(provider) {
    return {
        provider,
        adapterName: "@prisma/adapter-mock",
        queryRaw: ()=>Promise.reject(mockAdapterErrors.queryRaw),
        executeRaw: ()=>Promise.reject(mockAdapterErrors.executeRaw),
        startTransaction: ()=>Promise.reject(mockAdapterErrors.startTransaction),
        executeScript: ()=>Promise.reject(mockAdapterErrors.executeScript),
        dispose: ()=>Promise.reject(mockAdapterErrors.dispose),
        [Symbol.for("adapter.mockAdapter")]: true
    };
}
function mockAdapterFactory(provider) {
    return {
        provider,
        adapterName: "@prisma/adapter-mock",
        connect: ()=>Promise.resolve(mockAdapter(provider)),
        [Symbol.for("adapter.mockAdapterFactory")]: true
    };
}
function mockMigrationAwareAdapterFactory(provider) {
    return {
        provider,
        adapterName: "@prisma/adapter-mock",
        connect: ()=>Promise.resolve(mockAdapter(provider)),
        connectToShadowDb: ()=>Promise.resolve(mockAdapter(provider)),
        [Symbol.for("adapter.mockMigrationAwareAdapterFactory")]: true
    };
}
;
}),
"[project]/node_modules/csv-parse/lib/api/CsvError.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CsvError",
    ()=>CsvError
]);
class CsvError extends Error {
    constructor(code, message, options, ...contexts){
        if (Array.isArray(message)) message = message.join(" ").trim();
        super(message);
        if (Error.captureStackTrace !== undefined) {
            Error.captureStackTrace(this, CsvError);
        }
        this.code = code;
        for (const context of contexts){
            for(const key in context){
                const value = context[key];
                this[key] = Buffer.isBuffer(value) ? value.toString(options.encoding) : value == null ? value : JSON.parse(JSON.stringify(value));
            }
        }
    }
}
;
}),
"[project]/node_modules/csv-parse/lib/api/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "transform",
    ()=>transform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$normalize_columns_array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/csv-parse/lib/api/normalize_columns_array.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$init_state$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/csv-parse/lib/api/init_state.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$normalize_options$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/csv-parse/lib/api/normalize_options.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/csv-parse/lib/api/CsvError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$utils$2f$delimiter_discover$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/csv-parse/lib/utils/delimiter_discover.js [app-route] (ecmascript)");
;
;
;
;
;
const isRecordEmpty = function(record) {
    return record.every((field)=>field == null || field.toString && field.toString().trim() === "");
};
const cr = 13; // `\r`, carriage return, 0x0D in hexadécimal, 13 in decimal
const nl = 10; // `\n`, newline, 0x0A in hexadecimal, 10 in decimal
const boms = {
    // Note, the following are equals:
    // Buffer.from("\ufeff")
    // Buffer.from([239, 187, 191])
    // Buffer.from('EFBBBF', 'hex')
    utf8: Buffer.from([
        239,
        187,
        191
    ]),
    // Note, the following are equals:
    // Buffer.from "\ufeff", 'utf16le
    // Buffer.from([255, 254])
    utf16le: Buffer.from([
        255,
        254
    ])
};
const transform = function(original_options = {}) {
    const info = {
        bytes: 0,
        bytes_records: 0,
        comment_lines: 0,
        empty_lines: 0,
        invalid_field_length: 0,
        lines: 1,
        records: 0
    };
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$normalize_options$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalize_options"])(original_options);
    return {
        info: info,
        original_options: original_options,
        options: options,
        state: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$init_state$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["init_state"])(options),
        __needMoreData: function(i, bufLen, end) {
            if (end) return false;
            const { encoding, escape, quote } = this.options;
            const { quoting, needMoreDataSize, recordDelimiterMaxLength } = this.state;
            const numOfCharLeft = bufLen - i - 1;
            const requiredLength = Math.max(needMoreDataSize, // Skip if the remaining buffer smaller than record delimiter
            // If "record_delimiter" is yet to be discovered:
            // 1. It is equals to `[]` and "recordDelimiterMaxLength" equals `0`
            // 2. We set the length to windows line ending in the current encoding
            // Note, that encoding is known from user or bom discovery at that point
            // recordDelimiterMaxLength,
            recordDelimiterMaxLength === 0 ? Buffer.from("\r\n", encoding).length : recordDelimiterMaxLength, // Skip if remaining buffer can be an escaped quote
            quoting ? (escape === null ? 0 : escape.length) + quote.length : 0, // Skip if remaining buffer can be record delimiter following the closing quote
            quoting ? quote.length + recordDelimiterMaxLength : 0);
            return numOfCharLeft < requiredLength;
        },
        // Central parser implementation
        parse: function(nextBuf, end, push, close) {
            const { bom, comment_no_infix, delimiter_auto, encoding, from_line, ltrim, max_record_size, raw, relax_quotes, rtrim, skip_empty_lines, to, to_line } = this.options;
            let { comment, escape, quote, record_delimiter } = this.options;
            const { bomSkipped, delimiterDiscovered, delimiterBufPrevious, rawBuffer, escapeIsQuote } = this.state;
            // Automatic delimiter discovery
            if (!delimiterDiscovered && delimiter_auto) {
                let delimiterBuf;
                if (delimiterBufPrevious === undefined) {
                    delimiterBuf = nextBuf;
                } else if (delimiterBufPrevious !== undefined && nextBuf === undefined) {
                    delimiterBuf = delimiterBufPrevious;
                } else {
                    delimiterBuf = Buffer.concat([
                        delimiterBufPrevious,
                        nextBuf
                    ]);
                }
                // Ensure that nextBuf is not concatenated a second time during buffer reconciliation
                nextBuf = undefined;
                // this.delimiterBufPrevious = delimiterBuf;
                if (end || delimiterBuf.length > delimiter_auto.size) {
                    this.options.delimiter = [
                        Buffer.from((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$utils$2f$delimiter_discover$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["delimiter_discover"])(delimiterBuf, this.options.delimiter_auto))
                    ];
                    this.state.previousBuf = delimiterBuf;
                    this.state.delimiterBufPrevious = undefined;
                    this.state.delimiterDiscovered = true;
                } else {
                    this.state.delimiterBufPrevious = delimiterBuf;
                    return;
                }
            }
            // Previous buffers reconciliation
            const { previousBuf } = this.state;
            let buf;
            if (previousBuf === undefined) {
                if (nextBuf === undefined) {
                    // Handle empty string
                    close();
                    return;
                } else {
                    buf = nextBuf;
                }
            } else if (previousBuf !== undefined && nextBuf === undefined) {
                buf = previousBuf;
            } else {
                buf = Buffer.concat([
                    previousBuf,
                    nextBuf
                ]);
            }
            // Handle UTF BOM
            if (bomSkipped === false) {
                if (bom === false) {
                    this.state.bomSkipped = true;
                } else if (buf.length < 3) {
                    // No enough data
                    if (end === false) {
                        // Wait for more data
                        this.state.previousBuf = buf;
                        return;
                    }
                } else {
                    for(const encoding in boms){
                        if (boms[encoding].compare(buf, 0, boms[encoding].length) === 0) {
                            // Skip BOM
                            const bomLength = boms[encoding].length;
                            this.state.bufBytesStart += bomLength;
                            buf = buf.slice(bomLength);
                            // Renormalize original options with the new encoding
                            const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$normalize_options$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalize_options"])({
                                ...this.original_options,
                                encoding: encoding
                            });
                            // Properties are merged with the existing options instance
                            for(const key in options){
                                this.options[key] = options[key];
                            }
                            // Options will re-evaluate the Buffer with the new encoding
                            ({ comment, escape, quote } = this.options);
                            break;
                        }
                    }
                    this.state.bomSkipped = true;
                }
            }
            const bufLen = buf.length;
            let pos;
            for(pos = 0; pos < bufLen; pos++){
                // Ensure we get enough space to look ahead
                // There should be a way to move this out of the loop
                if (this.__needMoreData(pos, bufLen, end)) {
                    break;
                }
                if (this.state.wasRowDelimiter === true) {
                    this.info.lines++;
                    this.state.wasRowDelimiter = false;
                }
                if (to_line !== -1 && this.info.lines > to_line) {
                    this.state.stop = true;
                    close();
                    return;
                }
                // Auto discovery of record_delimiter, unix, mac and windows supported
                if (this.state.quoting === false && record_delimiter.length === 0) {
                    const record_delimiterCount = this.__autoDiscoverRecordDelimiter(buf, pos);
                    if (record_delimiterCount) {
                        record_delimiter = this.options.record_delimiter;
                    }
                }
                const chr = buf[pos];
                if (raw === true) {
                    rawBuffer.append(chr);
                }
                if ((chr === cr || chr === nl) && this.state.wasRowDelimiter === false) {
                    this.state.wasRowDelimiter = true;
                }
                // Previous char was a valid escape char
                // treat the current char as a regular char
                if (this.state.escaping === true) {
                    this.state.escaping = false;
                } else {
                    // Escape is only active inside quoted fields
                    // We are quoting, the char is an escape chr and there is a chr to escape
                    // if(escape !== null && this.state.quoting === true && chr === escape && pos + 1 < bufLen){
                    if (escape !== null && this.state.quoting === true && this.__isEscape(buf, pos, chr) && pos + escape.length < bufLen) {
                        if (escapeIsQuote) {
                            if (this.__isQuote(buf, pos + escape.length)) {
                                this.state.escaping = true;
                                pos += escape.length - 1;
                                continue;
                            }
                        } else {
                            this.state.escaping = true;
                            pos += escape.length - 1;
                            continue;
                        }
                    }
                    // Not currently escaping and chr is a quote
                    // TODO: need to compare bytes instead of single char
                    if (this.state.commenting === false && this.__isQuote(buf, pos)) {
                        if (this.state.quoting === true) {
                            const nextChr = buf[pos + quote.length];
                            const isNextChrTrimable = rtrim && this.__isCharTrimable(buf, pos + quote.length);
                            const isNextChrComment = comment !== null && this.__compareBytes(comment, buf, pos + quote.length, nextChr);
                            const isNextChrDelimiter = this.__isDelimiter(buf, pos + quote.length, nextChr);
                            const isNextChrRecordDelimiter = record_delimiter.length === 0 ? this.__autoDiscoverRecordDelimiter(buf, pos + quote.length) : this.__isRecordDelimiter(nextChr, buf, pos + quote.length);
                            // Escape a quote
                            // Treat next char as a regular character
                            if (escape !== null && this.__isEscape(buf, pos, chr) && this.__isQuote(buf, pos + escape.length)) {
                                pos += escape.length - 1;
                            } else if (!nextChr || isNextChrDelimiter || isNextChrRecordDelimiter || isNextChrComment || isNextChrTrimable) {
                                this.state.quoting = false;
                                this.state.wasQuoting = true;
                                pos += quote.length - 1;
                                continue;
                            } else if (relax_quotes === false) {
                                const err = this.__error(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_CLOSING_QUOTE", [
                                    "Invalid Closing Quote:",
                                    `got "${String.fromCharCode(nextChr)}"`,
                                    `at line ${this.info.lines}`,
                                    "instead of delimiter, record delimiter, trimable character",
                                    "(if activated) or comment"
                                ], this.options, this.__infoField()));
                                if (err !== undefined) return err;
                            } else {
                                this.state.quoting = false;
                                this.state.wasQuoting = true;
                                this.state.field.prepend(quote);
                                pos += quote.length - 1;
                            }
                        } else {
                            if (this.state.field.length !== 0) {
                                // In relax_quotes mode, treat opening quote preceded by chrs as regular
                                if (relax_quotes === false) {
                                    const info = this.__infoField();
                                    const bom = Object.keys(boms).map((b)=>boms[b].equals(this.state.field.toString()) ? b : false).filter(Boolean)[0];
                                    const err = this.__error(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CsvError"]("INVALID_OPENING_QUOTE", [
                                        "Invalid Opening Quote:",
                                        `a quote is found on field ${JSON.stringify(info.column)} at line ${info.lines}, value is ${JSON.stringify(this.state.field.toString(encoding))}`,
                                        bom ? `(${bom} bom)` : undefined
                                    ], this.options, info, {
                                        field: this.state.field
                                    }));
                                    if (err !== undefined) return err;
                                }
                            } else {
                                this.state.quoting = true;
                                pos += quote.length - 1;
                                continue;
                            }
                        }
                    }
                    if (this.state.quoting === false) {
                        const recordDelimiterLength = this.__isRecordDelimiter(chr, buf, pos);
                        if (recordDelimiterLength !== 0) {
                            // Do not emit comments which take a full line
                            const skipCommentLine = this.state.commenting && this.state.wasQuoting === false && this.state.record.length === 0 && this.state.field.length === 0;
                            if (skipCommentLine) {
                                this.info.comment_lines++;
                            // Skip full comment line
                            } else {
                                // Activate records emission if above from_line
                                if (this.state.enabled === false && this.info.lines + (this.state.wasRowDelimiter === true ? 1 : 0) >= from_line) {
                                    this.state.enabled = true;
                                    this.__resetField();
                                    this.__resetRecord();
                                    pos += recordDelimiterLength - 1;
                                    continue;
                                }
                                // Skip if line is empty and skip_empty_lines activated
                                if (skip_empty_lines === true && this.state.wasQuoting === false && this.state.record.length === 0 && this.state.field.length === 0) {
                                    this.info.empty_lines++;
                                    pos += recordDelimiterLength - 1;
                                    continue;
                                }
                                this.info.bytes = this.state.bufBytesStart + pos;
                                const errField = this.__onField();
                                if (errField !== undefined) return errField;
                                this.info.bytes = this.state.bufBytesStart + pos + recordDelimiterLength;
                                const errRecord = this.__onRecord(push);
                                if (errRecord !== undefined) return errRecord;
                                if (to !== -1 && this.info.records >= to) {
                                    this.state.stop = true;
                                    close();
                                    return;
                                }
                            }
                            this.state.commenting = false;
                            pos += recordDelimiterLength - 1;
                            continue;
                        }
                        if (this.state.commenting) {
                            continue;
                        }
                        if (comment !== null && (comment_no_infix === false || this.state.record.length === 0 && this.state.field.length === 0)) {
                            const commentCount = this.__compareBytes(comment, buf, pos, chr);
                            if (commentCount !== 0) {
                                this.state.commenting = true;
                                continue;
                            }
                        }
                        const delimiterLength = this.__isDelimiter(buf, pos, chr);
                        if (delimiterLength !== 0) {
                            this.info.bytes = this.state.bufBytesStart + pos;
                            const errField = this.__onField();
                            if (errField !== undefined) return errField;
                            pos += delimiterLength - 1;
                            continue;
                        }
                    }
                }
                if (this.state.commenting === false) {
                    if (max_record_size !== 0 && this.state.record_length + this.state.field.length > max_record_size) {
                        return this.__error(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CsvError"]("CSV_MAX_RECORD_SIZE", [
                            "Max Record Size:",
                            "record exceed the maximum number of tolerated bytes",
                            `of ${max_record_size}`,
                            `at line ${this.info.lines}`
                        ], this.options, this.__infoField()));
                    }
                }
                const lappend = ltrim === false || this.state.quoting === true || this.state.field.length !== 0 || !this.__isCharTrimable(buf, pos);
                // rtrim in non quoting is handle in __onField
                const rappend = rtrim === false || this.state.wasQuoting === false;
                if (lappend === true && rappend === true) {
                    this.state.field.append(chr);
                } else if (rtrim === true && !this.__isCharTrimable(buf, pos)) {
                    return this.__error(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CsvError"]("CSV_NON_TRIMABLE_CHAR_AFTER_CLOSING_QUOTE", [
                        "Invalid Closing Quote:",
                        "found non trimable byte after quote",
                        `at line ${this.info.lines}`
                    ], this.options, this.__infoField()));
                } else {
                    if (lappend === false) {
                        pos += this.__isCharTrimable(buf, pos) - 1;
                    }
                    continue;
                }
            }
            if (end === true) {
                // Ensure we are not ending in a quoting state
                if (this.state.quoting === true) {
                    const err = this.__error(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CsvError"]("CSV_QUOTE_NOT_CLOSED", [
                        "Quote Not Closed:",
                        `the parsing is finished with an opening quote at line ${this.info.lines}`
                    ], this.options, this.__infoField()));
                    if (err !== undefined) return err;
                } else {
                    // Skip last line if it has no characters
                    if (this.state.wasQuoting === true || this.state.record.length !== 0 || this.state.field.length !== 0) {
                        this.info.bytes = this.state.bufBytesStart + pos;
                        const errField = this.__onField();
                        if (errField !== undefined) return errField;
                        const errRecord = this.__onRecord(push);
                        if (errRecord !== undefined) return errRecord;
                    } else if (this.state.wasRowDelimiter === true) {
                        this.info.empty_lines++;
                    } else if (this.state.commenting === true) {
                        this.info.comment_lines++;
                    }
                }
            } else {
                this.state.bufBytesStart += pos;
                this.state.previousBuf = buf.slice(pos);
            }
            if (this.state.wasRowDelimiter === true) {
                this.info.lines++;
                this.state.wasRowDelimiter = false;
            }
        },
        __onRecord: function(push) {
            const { columns, group_columns_by_name, encoding, info, from, relax_column_count, relax_column_count_less, relax_column_count_more, raw, skip_records_with_empty_values } = this.options;
            const { enabled, record } = this.state;
            if (enabled === false) {
                return this.__resetRecord();
            }
            // Convert the first line into column names
            const recordLength = record.length;
            if (columns === true) {
                if (skip_records_with_empty_values === true && isRecordEmpty(record)) {
                    this.__resetRecord();
                    return;
                }
                return this.__firstLineToColumns(record);
            }
            if (columns === false && this.info.records === 0) {
                this.state.expectedRecordLength = recordLength;
            }
            if (recordLength !== this.state.expectedRecordLength) {
                const err = columns === false ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CsvError"]("CSV_RECORD_INCONSISTENT_FIELDS_LENGTH", [
                    "Invalid Record Length:",
                    `expect ${this.state.expectedRecordLength},`,
                    `got ${recordLength} on line ${this.info.lines}`
                ], this.options, this.__infoField(), {
                    record: record
                }) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CsvError"]("CSV_RECORD_INCONSISTENT_COLUMNS", [
                    "Invalid Record Length:",
                    `columns length is ${columns.length},`,
                    `got ${recordLength} on line ${this.info.lines}`
                ], this.options, this.__infoField(), {
                    record: record
                });
                if (relax_column_count === true || relax_column_count_less === true && recordLength < this.state.expectedRecordLength || relax_column_count_more === true && recordLength > this.state.expectedRecordLength) {
                    this.info.invalid_field_length++;
                    this.state.error = err;
                // Error is undefined with skip_records_with_error
                } else {
                    const finalErr = this.__error(err);
                    if (finalErr) return finalErr;
                }
            }
            if (skip_records_with_empty_values === true && isRecordEmpty(record)) {
                this.__resetRecord();
                return;
            }
            if (this.state.recordHasError === true) {
                this.__resetRecord();
                this.state.recordHasError = false;
                return;
            }
            this.info.records++;
            if (from === 1 || this.info.records >= from) {
                const { objname } = this.options;
                // With columns, records are object
                if (columns !== false) {
                    const obj = {};
                    // Transform record array to an object
                    for(let i = 0, l = record.length; i < l; i++){
                        if (columns[i] === undefined || columns[i].disabled) continue;
                        // Turn duplicate columns into an array
                        if (group_columns_by_name === true && Object.hasOwn(obj, columns[i].name)) {
                            if (Array.isArray(obj[columns[i].name])) {
                                obj[columns[i].name] = obj[columns[i].name].concat(record[i]);
                            } else {
                                obj[columns[i].name] = [
                                    obj[columns[i].name],
                                    record[i]
                                ];
                            }
                        } else {
                            Object.defineProperty(obj, columns[i].name, {
                                value: record[i],
                                enumerable: true,
                                writable: true,
                                configurable: true
                            });
                        }
                    }
                    // Without objname (default)
                    if (raw === true || info === true) {
                        const extRecord = Object.assign({
                            record: obj
                        }, raw === true ? {
                            raw: this.state.rawBuffer.toString(encoding)
                        } : {}, info === true ? {
                            info: this.__infoRecord()
                        } : {});
                        const err = this.__push(objname === undefined ? extRecord : [
                            obj[objname],
                            extRecord
                        ], push);
                        if (err) {
                            return err;
                        }
                    } else {
                        const err = this.__push(objname === undefined ? obj : [
                            obj[objname],
                            obj
                        ], push);
                        if (err) {
                            return err;
                        }
                    }
                // Without columns, records are array
                } else {
                    if (raw === true || info === true) {
                        const extRecord = Object.assign({
                            record: record
                        }, raw === true ? {
                            raw: this.state.rawBuffer.toString(encoding)
                        } : {}, info === true ? {
                            info: this.__infoRecord()
                        } : {});
                        const err = this.__push(objname === undefined ? extRecord : [
                            record[objname],
                            extRecord
                        ], push);
                        if (err) {
                            return err;
                        }
                    } else {
                        const err = this.__push(objname === undefined ? record : [
                            record[objname],
                            record
                        ], push);
                        if (err) {
                            return err;
                        }
                    }
                }
            }
            this.__resetRecord();
        },
        __firstLineToColumns: function(record) {
            const { firstLineToHeaders } = this.state;
            try {
                const headers = firstLineToHeaders === undefined ? record : firstLineToHeaders.call(null, record);
                if (!Array.isArray(headers)) {
                    return this.__error(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_COLUMN_MAPPING", [
                        "Invalid Column Mapping:",
                        "expect an array from column function,",
                        `got ${JSON.stringify(headers)}`
                    ], this.options, this.__infoField(), {
                        headers: headers
                    }));
                }
                const normalizedHeaders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$normalize_columns_array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalize_columns_array"])(headers);
                this.state.expectedRecordLength = normalizedHeaders.length;
                this.options.columns = normalizedHeaders;
                this.__resetRecord();
                return;
            } catch (err) {
                return err;
            }
        },
        __resetRecord: function() {
            if (this.options.raw === true) {
                this.state.rawBuffer.reset();
            }
            this.state.error = undefined;
            this.state.record = [];
            this.state.record_length = 0;
        },
        __onField: function() {
            const { cast, encoding, rtrim, max_record_size } = this.options;
            const { enabled, wasQuoting } = this.state;
            // Short circuit for the from_line options
            if (enabled === false) {
                return this.__resetField();
            }
            let field = this.state.field.toString(encoding);
            if (rtrim === true && wasQuoting === false) {
                field = field.trimRight();
            }
            if (cast === true) {
                const [err, f] = this.__cast(field);
                if (err !== undefined) return err;
                field = f;
            }
            this.state.record.push(field);
            // Increment record length if record size must not exceed a limit
            if (max_record_size !== 0 && typeof field === "string") {
                this.state.record_length += field.length;
            }
            this.__resetField();
        },
        __resetField: function() {
            this.state.field.reset();
            this.state.wasQuoting = false;
        },
        __push: function(record, push) {
            const { on_record } = this.options;
            if (on_record !== undefined) {
                const info = this.__infoRecord();
                try {
                    record = on_record.call(null, record, info);
                } catch (err) {
                    return err;
                }
                if (record === undefined || record === null) {
                    return;
                }
            }
            this.info.bytes_records += this.info.bytes;
            push(record);
        },
        // Return a tuple with the error and the casted value
        __cast: function(field) {
            const { columns, relax_column_count } = this.options;
            const isColumns = Array.isArray(columns);
            // Dont loose time calling cast
            // because the final record is an object
            // and this field can't be associated to a key present in columns
            if (isColumns === true && relax_column_count && this.options.columns.length <= this.state.record.length) {
                return [
                    undefined,
                    undefined
                ];
            }
            if (this.state.castField !== null) {
                try {
                    const info = this.__infoField();
                    return [
                        undefined,
                        this.state.castField.call(null, field, info)
                    ];
                } catch (err) {
                    return [
                        err
                    ];
                }
            }
            if (this.__isFloat(field)) {
                return [
                    undefined,
                    parseFloat(field)
                ];
            } else if (this.options.cast_date !== false) {
                const info = this.__infoField();
                return [
                    undefined,
                    this.options.cast_date.call(null, field, info)
                ];
            }
            return [
                undefined,
                field
            ];
        },
        __compareBytes: function(sourceBuf, targetBuf, targetPos, firstByte) {
            if (sourceBuf[0] !== firstByte) return 0;
            const sourceLength = sourceBuf.length;
            for(let i = 1; i < sourceLength; i++){
                if (sourceBuf[i] !== targetBuf[targetPos + i]) return 0;
            }
            return sourceLength;
        },
        // Helper to test if a character is trimable
        __isCharTrimable: function(buf, pos) {
            const { timchars, timcharFirstBytes } = this.state;
            // Fast bail-out: non-whitespace bytes (the common case) are rejected
            // without scanning the full timchar list.
            const first = buf[pos];
            if (first === undefined || timcharFirstBytes[first] === 0) return 0;
            loop1: for(let i = 0; i < timchars.length; i++){
                const timchar = timchars[i];
                for(let j = 0; j < timchar.length; j++){
                    if (timchar[j] !== buf[pos + j]) continue loop1;
                }
                return timchar.length;
            }
            return 0;
        },
        __isDelimiter: function(buf, pos, chr) {
            const { delimiter, ignore_last_delimiters } = this.options;
            if (ignore_last_delimiters === true && this.state.record.length === this.options.columns.length - 1) {
                return 0;
            } else if (ignore_last_delimiters !== false && typeof ignore_last_delimiters === "number" && this.state.record.length === ignore_last_delimiters - 1) {
                return 0;
            }
            loop1: for(let i = 0; i < delimiter.length; i++){
                const del = delimiter[i];
                if (del[0] === chr) {
                    for(let j = 1; j < del.length; j++){
                        if (del[j] !== buf[pos + j]) continue loop1;
                    }
                    return del.length;
                }
            }
            return 0;
        },
        __isEscape: function(buf, pos, chr) {
            const { escape } = this.options;
            if (escape === null) return false;
            const l = escape.length;
            if (escape[0] === chr) {
                for(let i = 0; i < l; i++){
                    if (escape[i] !== buf[pos + i]) {
                        return false;
                    }
                }
                return true;
            }
            return false;
        },
        __isFloat: function(value) {
            return value - parseFloat(value) + 1 >= 0; // Borrowed from jquery
        },
        // Keep it in case we implement the `cast_int` option
        // __isInt(value){
        //   // return Number.isInteger(parseInt(value))
        //   // return !isNaN( parseInt( obj ) );
        //   return /^(\-|\+)?[1-9][0-9]*$/.test(value)
        // }
        __isQuote: function(buf, pos) {
            const { quote } = this.options;
            if (quote === null) return false;
            const l = quote.length;
            for(let i = 0; i < l; i++){
                if (quote[i] !== buf[pos + i]) {
                    return false;
                }
            }
            return true;
        },
        __isRecordDelimiter: function(chr, buf, pos) {
            const { record_delimiter } = this.options;
            const recordDelimiterLength = record_delimiter.length;
            loop1: for(let i = 0; i < recordDelimiterLength; i++){
                const rd = record_delimiter[i];
                const rdLength = rd.length;
                if (rd[0] !== chr) {
                    continue;
                }
                for(let j = 1; j < rdLength; j++){
                    if (rd[j] !== buf[pos + j]) {
                        continue loop1;
                    }
                }
                return rd.length;
            }
            return 0;
        },
        __autoDiscoverRecordDelimiter: function(buf, pos) {
            const { encoding } = this.options;
            // Note, we don't need to cache this information in state,
            // It is only called on the first line until we find out a suitable
            // record delimiter.
            const rds = [
                // Important, the windows line ending must be before mac os 9
                Buffer.from("\r\n", encoding),
                Buffer.from("\n", encoding),
                Buffer.from("\r", encoding)
            ];
            loop: for(let i = 0; i < rds.length; i++){
                const l = rds[i].length;
                for(let j = 0; j < l; j++){
                    if (rds[i][j] !== buf[pos + j]) {
                        continue loop;
                    }
                }
                this.options.record_delimiter.push(rds[i]);
                this.state.recordDelimiterMaxLength = rds[i].length;
                return rds[i].length;
            }
            return 0;
        },
        __error: function(msg) {
            const { encoding, raw, skip_records_with_error } = this.options;
            const err = typeof msg === "string" ? new Error(msg) : msg;
            if (skip_records_with_error) {
                this.state.recordHasError = true;
                if (this.options.on_skip !== undefined) {
                    try {
                        this.options.on_skip(err, raw ? this.state.rawBuffer.toString(encoding) : undefined);
                    } catch (err) {
                        return err;
                    }
                }
                // this.emit('skip', err, raw ? this.state.rawBuffer.toString(encoding) : undefined);
                return undefined;
            } else {
                return err;
            }
        },
        __infoDataSet: function() {
            return {
                ...this.info,
                columns: this.options.columns
            };
        },
        __infoRecord: function() {
            const { columns, raw, encoding } = this.options;
            return {
                ...this.__infoDataSet(),
                bytes_records: this.info.bytes,
                error: this.state.error,
                header: columns === true,
                index: this.state.record.length,
                raw: raw ? this.state.rawBuffer.toString(encoding) : undefined
            };
        },
        __infoField: function() {
            const { columns } = this.options;
            const isColumns = Array.isArray(columns);
            // Bytes records are only incremented when all records'fields are parsed
            const bytes_records = this.info.bytes_records;
            return {
                ...this.__infoRecord(),
                bytes_records: bytes_records,
                column: isColumns === true ? columns.length > this.state.record.length ? columns[this.state.record.length].name : null : this.state.record.length,
                quoting: this.state.wasQuoting
            };
        }
    };
};
;
}),
"[project]/node_modules/csv-parse/lib/api/init_state.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "init_state",
    ()=>init_state
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$utils$2f$ResizeableBuffer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/csv-parse/lib/utils/ResizeableBuffer.js [app-route] (ecmascript)");
;
const init_state = function(options) {
    // ECMAScript WhiteSpace + LineTerminator codepoints, encoded under
    // `options.encoding`. Aligns trimming with `String.prototype.trim()`.
    // https://tc39.es/ecma262/#sec-white-space
    // https://tc39.es/ecma262/#sec-line-terminators
    //
    // Codepoints unrepresentable in the target encoding are dropped: Node's
    // Buffer substitutes them with `?` (0x3F), and including those would cause
    // literal `?` bytes in the input to be trimmed under `latin1`/`ascii`.
    const timchars = [
        // Basic Latin
        0x0020,
        0x0009,
        0x000a,
        0x000d,
        0x000c,
        0x000b,
        // Latin-1 Supplement
        0x00a0,
        // Ogham
        0x1680,
        // General Punctuation
        0x2000,
        0x2001,
        0x2002,
        0x2003,
        0x2004,
        0x2005,
        0x2006,
        0x2007,
        0x2008,
        0x2009,
        0x200a,
        0x2028,
        0x2029,
        0x202f,
        0x205f,
        0x3000,
        0xfeff
    ].reduce((acc, codepoint)=>{
        const encoded = Buffer.from(String.fromCharCode(codepoint), options.encoding);
        if (codepoint !== 0x3f && encoded.length === 1 && encoded[0] === 0x3f) {
            return acc;
        }
        acc.push(encoded);
        return acc;
    }, []);
    // First-byte lookup table for `__isCharTrimable`. Non-whitespace bytes
    // (the common case) bail out in O(1) without scanning every timchar.
    const timcharFirstBytes = new Uint8Array(256);
    for (const t of timchars)timcharFirstBytes[t[0]] = 1;
    return {
        bomSkipped: false,
        bufBytesStart: 0,
        castField: options.cast_function,
        commenting: false,
        delimiterBufPrevious: undefined,
        delimiterDiscovered: false,
        // Current error encountered by a record
        error: undefined,
        enabled: options.from_line === 1,
        escaping: false,
        escapeIsQuote: Buffer.isBuffer(options.escape) && Buffer.isBuffer(options.quote) && Buffer.compare(options.escape, options.quote) === 0,
        // columns can be `false`, `true`, `Array`
        expectedRecordLength: Array.isArray(options.columns) ? options.columns.length : undefined,
        field: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$utils$2f$ResizeableBuffer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](20),
        firstLineToHeaders: options.cast_first_line_to_header,
        needMoreDataSize: Math.max(// Skip if the remaining buffer smaller than comment
        options.comment !== null ? options.comment.length : 0, // Skip if the remaining buffer can be delimiter
        ...options.delimiter ? options.delimiter.map((delimiter)=>delimiter.length) : [], // Auto discovery of delimiter is limited to 1 character
        options.delimiter_auto ? 1 : 0, // Skip if the remaining buffer can be escape sequence
        options.quote !== null ? options.quote.length : 0, // Skip if the remaining buffer can be a multi-byte trim character
        ...timchars.map((t)=>t.length)),
        previousBuf: undefined,
        quoting: false,
        stop: false,
        rawBuffer: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$utils$2f$ResizeableBuffer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](100),
        record: [],
        recordHasError: false,
        record_length: 0,
        recordDelimiterMaxLength: options.record_delimiter.length === 0 ? 0 : Math.max(...options.record_delimiter.map((v)=>v.length)),
        trimChars: [
            Buffer.from(" ", options.encoding)[0],
            Buffer.from("\t", options.encoding)[0]
        ],
        wasQuoting: false,
        wasRowDelimiter: false,
        timchars: timchars,
        timcharFirstBytes: timcharFirstBytes
    };
};
;
}),
"[project]/node_modules/csv-parse/lib/api/normalize_columns_array.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalize_columns_array",
    ()=>normalize_columns_array
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/csv-parse/lib/api/CsvError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$utils$2f$is_object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/csv-parse/lib/utils/is_object.js [app-route] (ecmascript)");
;
;
const normalize_columns_array = function(columns) {
    const normalizedColumns = [];
    for(let i = 0, l = columns.length; i < l; i++){
        const column = columns[i];
        if (column === undefined || column === null || column === false) {
            normalizedColumns[i] = {
                disabled: true
            };
        } else if (typeof column === "string" || typeof column === "number") {
            normalizedColumns[i] = {
                name: `${column}`
            };
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$utils$2f$is_object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is_object"])(column)) {
            if (typeof column.name !== "string") {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CsvError"]("CSV_OPTION_COLUMNS_MISSING_NAME", [
                    "Option columns missing name:",
                    `property "name" is required at position ${i}`,
                    "when column is an object literal"
                ]);
            }
            normalizedColumns[i] = column;
        } else {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_COLUMN_DEFINITION", [
                "Invalid column definition:",
                "expect a string or a literal object,",
                `got ${JSON.stringify(column)} at position ${i}`
            ]);
        }
    }
    return normalizedColumns;
};
;
}),
"[project]/node_modules/csv-parse/lib/api/normalize_options.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalize_options",
    ()=>normalize_options
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$normalize_columns_array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/csv-parse/lib/api/normalize_columns_array.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/csv-parse/lib/api/CsvError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$utils$2f$underscore$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/csv-parse/lib/utils/underscore.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$utils$2f$is_object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/csv-parse/lib/utils/is_object.js [app-route] (ecmascript)");
;
;
;
;
const normalize_options = function(opts) {
    const options = {};
    // Merge with user options
    for(const opt in opts){
        options[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$utils$2f$underscore$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["underscore"])(opt)] = opts[opt];
    }
    // Normalize option `encoding`
    // Note: defined first because other options depends on it
    // to convert chars/strings into buffers.
    if (options.encoding === undefined || options.encoding === true) {
        options.encoding = "utf8";
    } else if (options.encoding === null || options.encoding === false) {
        options.encoding = null;
    } else if (typeof options.encoding !== "string" && options.encoding !== null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_ENCODING", [
            "Invalid option encoding:",
            "encoding must be a string or null to return a buffer,",
            `got ${JSON.stringify(options.encoding)}`
        ], options);
    }
    // Normalize option `bom`
    if (options.bom === undefined || options.bom === null || options.bom === false) {
        options.bom = false;
    } else if (options.bom !== true) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_BOM", [
            "Invalid option bom:",
            "bom must be true,",
            `got ${JSON.stringify(options.bom)}`
        ], options);
    }
    // Normalize option `cast`
    options.cast_function = null;
    if (options.cast === undefined || options.cast === null || options.cast === false || options.cast === "") {
        options.cast = undefined;
    } else if (typeof options.cast === "function") {
        options.cast_function = options.cast;
        options.cast = true;
    } else if (options.cast !== true) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_CAST", [
            "Invalid option cast:",
            "cast must be true or a function,",
            `got ${JSON.stringify(options.cast)}`
        ], options);
    }
    // Normalize option `cast_date`
    if (options.cast_date === undefined || options.cast_date === null || options.cast_date === false || options.cast_date === "") {
        options.cast_date = false;
    } else if (options.cast_date === true) {
        options.cast_date = function(value) {
            const date = Date.parse(value);
            return !isNaN(date) ? new Date(date) : value;
        };
    } else if (typeof options.cast_date !== "function") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_CAST_DATE", [
            "Invalid option cast_date:",
            "cast_date must be true or a function,",
            `got ${JSON.stringify(options.cast_date)}`
        ], options);
    }
    // Normalize option `columns`
    options.cast_first_line_to_header = undefined;
    if (options.columns === true) {
        // Fields in the first line are converted as-is to columns
        options.cast_first_line_to_header = undefined;
    } else if (typeof options.columns === "function") {
        options.cast_first_line_to_header = options.columns;
        options.columns = true;
    } else if (Array.isArray(options.columns)) {
        options.columns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$normalize_columns_array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalize_columns_array"])(options.columns);
    } else if (options.columns === undefined || options.columns === null || options.columns === false) {
        options.columns = false;
    } else {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_COLUMNS", [
            "Invalid option columns:",
            "expect an array, a function or true,",
            `got ${JSON.stringify(options.columns)}`
        ], options);
    }
    // Normalize option `group_columns_by_name`
    if (options.group_columns_by_name === undefined || options.group_columns_by_name === null || options.group_columns_by_name === false) {
        options.group_columns_by_name = false;
    } else if (options.group_columns_by_name !== true) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_GROUP_COLUMNS_BY_NAME", [
            "Invalid option group_columns_by_name:",
            "expect an boolean,",
            `got ${JSON.stringify(options.group_columns_by_name)}`
        ], options);
    } else if (options.columns === false) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_GROUP_COLUMNS_BY_NAME", [
            "Invalid option group_columns_by_name:",
            "the `columns` mode must be activated."
        ], options);
    }
    // Normalize option `comment`
    if (options.comment === undefined || options.comment === null || options.comment === false || options.comment === "") {
        options.comment = null;
    } else {
        if (typeof options.comment === "string") {
            options.comment = Buffer.from(options.comment, options.encoding);
        }
        if (!Buffer.isBuffer(options.comment)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_COMMENT", [
                "Invalid option comment:",
                "comment must be a buffer or a string,",
                `got ${JSON.stringify(options.comment)}`
            ], options);
        }
    }
    // Normalize option `comment_no_infix`
    if (options.comment_no_infix === undefined || options.comment_no_infix === null || options.comment_no_infix === false) {
        options.comment_no_infix = false;
    } else if (options.comment_no_infix !== true) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_COMMENT", [
            "Invalid option comment_no_infix:",
            "value must be a boolean,",
            `got ${JSON.stringify(options.comment_no_infix)}`
        ], options);
    }
    // Normalize option `delimiter_auto`
    if (options.delimiter_auto === undefined || options.delimiter_auto === null || options.delimiter_auto === false) {
        options.delimiter_auto = false;
    } else if (options.delimiter_auto === true) {
        options.delimiter_auto = {};
    } else if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$utils$2f$is_object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is_object"])(options.delimiter_auto)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_DELIMITER_AUTO", [
            "Invalid option delimiter_auto:",
            "delimiter_auto must be a boolean or a configuration object,",
            `got ${JSON.stringify(options.delimiter_auto)}`
        ], options);
    }
    if (options.delimiter_auto) {
        if (options.delimiter_auto.preferred === undefined) options.delimiter_auto.preferred = {
            [",".charCodeAt(0)]: 1.8,
            ["\t".charCodeAt(0)]: 1.8,
            [";".charCodeAt(0)]: 1.6,
            [" ".charCodeAt(0)]: 1.6,
            [":".charCodeAt(0)]: 1.5,
            [".".charCodeAt(0)]: 1.4,
            ["/".charCodeAt(0)]: 1.4
        };
        else if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$utils$2f$is_object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is_object"])(options.delimiter_auto.preferred)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_DELIMITER_AUTO", [
                "Invalid option delimiter_auto:",
                "preferred must be an object,",
                `got ${JSON.stringify(options.delimiter_auto.preferred)}`
            ], options);
        }
        if (options.delimiter_auto.score === undefined) options.delimiter_auto.score = (info, options)=>{
            return (info.total - info.std) * (options.preferred[info.char_code] || 1);
        };
        else if (typeof options.delimiter_auto.score !== "function") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_DELIMITER_AUTO", [
                "Invalid option delimiter_auto:",
                "score must be a function,",
                `got ${JSON.stringify(options.delimiter_auto.score)}`
            ], options);
        }
        if (options.delimiter_auto.size === undefined) options.delimiter_auto.size = 2048;
        else if (typeof options.delimiter_auto.size !== "number") {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_DELIMITER_AUTO", [
                "Invalid option delimiter_auto:",
                "size must be a number,",
                `got ${JSON.stringify(options.delimiter_auto.size)}`
            ], options);
        }
    }
    // Normalize option `delimiter`
    const delimiter_json = JSON.stringify(options.delimiter);
    if (options.delimiter_auto !== false) {
        options.delimiter = [];
    }
    if (!Array.isArray(options.delimiter)) {
        if (options.delimiter === undefined || options.delimiter === null || options.delimiter === false) {
            options.delimiter = Buffer.from(",", options.encoding);
        }
        options.delimiter = [
            options.delimiter
        ];
    }
    options.delimiter = options.delimiter.map(function(delimiter) {
        if (typeof delimiter === "string") {
            delimiter = Buffer.from(delimiter, options.encoding);
        }
        if (!Buffer.isBuffer(delimiter) || delimiter.length === 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_DELIMITER", [
                "Invalid option delimiter:",
                "delimiter must be a non empty string or buffer or array of string|buffer,",
                `got ${delimiter_json}`
            ], options);
        }
        return delimiter;
    });
    // Normalize option `escape`
    if (options.escape === undefined || options.escape === true) {
        options.escape = Buffer.from('"', options.encoding);
    } else if (typeof options.escape === "string") {
        options.escape = Buffer.from(options.escape, options.encoding);
    } else if (options.escape === null || options.escape === false) {
        options.escape = null;
    }
    if (options.escape !== null) {
        if (!Buffer.isBuffer(options.escape)) {
            throw new Error(`Invalid Option: escape must be a buffer, a string or a boolean, got ${JSON.stringify(options.escape)}`);
        }
    }
    // Normalize option `from`
    if (options.from === undefined || options.from === null) {
        options.from = 1;
    } else {
        if (typeof options.from === "string" && /\d+/.test(options.from)) {
            options.from = parseInt(options.from);
        }
        if (Number.isInteger(options.from)) {
            if (options.from < 0) {
                throw new Error(`Invalid Option: from must be a positive integer, got ${JSON.stringify(opts.from)}`);
            }
        } else {
            throw new Error(`Invalid Option: from must be an integer, got ${JSON.stringify(options.from)}`);
        }
    }
    // Normalize option `from_line`
    if (options.from_line === undefined || options.from_line === null) {
        options.from_line = 1;
    } else {
        if (typeof options.from_line === "string" && /\d+/.test(options.from_line)) {
            options.from_line = parseInt(options.from_line);
        }
        if (Number.isInteger(options.from_line)) {
            if (options.from_line <= 0) {
                throw new Error(`Invalid Option: from_line must be a positive integer greater than 0, got ${JSON.stringify(opts.from_line)}`);
            }
        } else {
            throw new Error(`Invalid Option: from_line must be an integer, got ${JSON.stringify(opts.from_line)}`);
        }
    }
    // Normalize options `ignore_last_delimiters`
    if (options.ignore_last_delimiters === undefined || options.ignore_last_delimiters === null) {
        options.ignore_last_delimiters = false;
    } else if (typeof options.ignore_last_delimiters === "number") {
        options.ignore_last_delimiters = Math.floor(options.ignore_last_delimiters);
        if (options.ignore_last_delimiters === 0) {
            options.ignore_last_delimiters = false;
        }
    } else if (typeof options.ignore_last_delimiters !== "boolean") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_IGNORE_LAST_DELIMITERS", [
            "Invalid option `ignore_last_delimiters`:",
            "the value must be a boolean value or an integer,",
            `got ${JSON.stringify(options.ignore_last_delimiters)}`
        ], options);
    }
    if (options.ignore_last_delimiters === true && options.columns === false) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CsvError"]("CSV_IGNORE_LAST_DELIMITERS_REQUIRES_COLUMNS", [
            "The option `ignore_last_delimiters`",
            "requires the activation of the `columns` option"
        ], options);
    }
    // Normalize option `info`
    if (options.info === undefined || options.info === null || options.info === false) {
        options.info = false;
    } else if (options.info !== true) {
        throw new Error(`Invalid Option: info must be true, got ${JSON.stringify(options.info)}`);
    }
    // Normalize option `max_record_size`
    if (options.max_record_size === undefined || options.max_record_size === null || options.max_record_size === false) {
        options.max_record_size = 0;
    } else if (Number.isInteger(options.max_record_size) && options.max_record_size >= 0) {
    // Great, nothing to do
    } else if (typeof options.max_record_size === "string" && /\d+/.test(options.max_record_size)) {
        options.max_record_size = parseInt(options.max_record_size);
    } else {
        throw new Error(`Invalid Option: max_record_size must be a positive integer, got ${JSON.stringify(options.max_record_size)}`);
    }
    // Normalize option `objname`
    if (options.objname === undefined || options.objname === null || options.objname === false) {
        options.objname = undefined;
    } else if (Buffer.isBuffer(options.objname)) {
        if (options.objname.length === 0) {
            throw new Error(`Invalid Option: objname must be a non empty buffer`);
        }
        if (options.encoding === null) {
        // Don't call `toString`, leave objname as a buffer
        } else {
            options.objname = options.objname.toString(options.encoding);
        }
    } else if (typeof options.objname === "string") {
        if (options.objname.length === 0) {
            throw new Error(`Invalid Option: objname must be a non empty string`);
        }
    // Great, nothing to do
    } else if (typeof options.objname === "number") {
    // if(options.objname.length === 0){
    //   throw new Error(`Invalid Option: objname must be a non empty string`);
    // }
    // Great, nothing to do
    } else {
        throw new Error(`Invalid Option: objname must be a string or a buffer, got ${options.objname}`);
    }
    if (options.objname !== undefined) {
        if (typeof options.objname === "number") {
            if (options.columns !== false) {
                throw Error("Invalid Option: objname index cannot be combined with columns or be defined as a field");
            }
        } else {
            // A string or a buffer
            if (options.columns === false) {
                throw Error("Invalid Option: objname field must be combined with columns or be defined as an index");
            }
        }
    }
    // Normalize option `on_record`
    if (options.on_record === undefined || options.on_record === null) {
        options.on_record = undefined;
    } else if (typeof options.on_record !== "function") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_ON_RECORD", [
            "Invalid option `on_record`:",
            "expect a function,",
            `got ${JSON.stringify(options.on_record)}`
        ], options);
    }
    // Normalize option `on_skip`
    // options.on_skip ??= (err, chunk) => {
    //   this.emit('skip', err, chunk);
    // };
    if (options.on_skip !== undefined && options.on_skip !== null && typeof options.on_skip !== "function") {
        throw new Error(`Invalid Option: on_skip must be a function, got ${JSON.stringify(options.on_skip)}`);
    }
    // Normalize option `quote`
    if (options.quote === null || options.quote === false || options.quote === "") {
        options.quote = null;
    } else {
        if (options.quote === undefined || options.quote === true) {
            options.quote = Buffer.from('"', options.encoding);
        } else if (typeof options.quote === "string") {
            options.quote = Buffer.from(options.quote, options.encoding);
        }
        if (!Buffer.isBuffer(options.quote)) {
            throw new Error(`Invalid Option: quote must be a buffer or a string, got ${JSON.stringify(options.quote)}`);
        }
    }
    // Normalize option `raw`
    if (options.raw === undefined || options.raw === null || options.raw === false) {
        options.raw = false;
    } else if (options.raw !== true) {
        throw new Error(`Invalid Option: raw must be true, got ${JSON.stringify(options.raw)}`);
    }
    // Normalize option `record_delimiter`
    if (options.record_delimiter === undefined) {
        options.record_delimiter = [];
    } else if (typeof options.record_delimiter === "string" || Buffer.isBuffer(options.record_delimiter)) {
        if (options.record_delimiter.length === 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_RECORD_DELIMITER", [
                "Invalid option `record_delimiter`:",
                "value must be a non empty string or buffer,",
                `got ${JSON.stringify(options.record_delimiter)}`
            ], options);
        }
        options.record_delimiter = [
            options.record_delimiter
        ];
    } else if (!Array.isArray(options.record_delimiter)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_RECORD_DELIMITER", [
            "Invalid option `record_delimiter`:",
            "value must be a string, a buffer or array of string|buffer,",
            `got ${JSON.stringify(options.record_delimiter)}`
        ], options);
    }
    options.record_delimiter = options.record_delimiter.map(function(rd, i) {
        if (typeof rd !== "string" && !Buffer.isBuffer(rd)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_RECORD_DELIMITER", [
                "Invalid option `record_delimiter`:",
                "value must be a string, a buffer or array of string|buffer",
                `at index ${i},`,
                `got ${JSON.stringify(rd)}`
            ], options);
        } else if (rd.length === 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CsvError"]("CSV_INVALID_OPTION_RECORD_DELIMITER", [
                "Invalid option `record_delimiter`:",
                "value must be a non empty string or buffer",
                `at index ${i},`,
                `got ${JSON.stringify(rd)}`
            ], options);
        }
        if (typeof rd === "string") {
            rd = Buffer.from(rd, options.encoding);
        }
        return rd;
    });
    // Normalize option `relax_column_count`
    if (typeof options.relax_column_count === "boolean") {
    // Great, nothing to do
    } else if (options.relax_column_count === undefined || options.relax_column_count === null) {
        options.relax_column_count = false;
    } else {
        throw new Error(`Invalid Option: relax_column_count must be a boolean, got ${JSON.stringify(options.relax_column_count)}`);
    }
    if (typeof options.relax_column_count_less === "boolean") {
    // Great, nothing to do
    } else if (options.relax_column_count_less === undefined || options.relax_column_count_less === null) {
        options.relax_column_count_less = false;
    } else {
        throw new Error(`Invalid Option: relax_column_count_less must be a boolean, got ${JSON.stringify(options.relax_column_count_less)}`);
    }
    if (typeof options.relax_column_count_more === "boolean") {
    // Great, nothing to do
    } else if (options.relax_column_count_more === undefined || options.relax_column_count_more === null) {
        options.relax_column_count_more = false;
    } else {
        throw new Error(`Invalid Option: relax_column_count_more must be a boolean, got ${JSON.stringify(options.relax_column_count_more)}`);
    }
    // Normalize option `relax_quotes`
    if (typeof options.relax_quotes === "boolean") {
    // Great, nothing to do
    } else if (options.relax_quotes === undefined || options.relax_quotes === null) {
        options.relax_quotes = false;
    } else {
        throw new Error(`Invalid Option: relax_quotes must be a boolean, got ${JSON.stringify(options.relax_quotes)}`);
    }
    // Normalize option `skip_empty_lines`
    if (typeof options.skip_empty_lines === "boolean") {
    // Great, nothing to do
    } else if (options.skip_empty_lines === undefined || options.skip_empty_lines === null) {
        options.skip_empty_lines = false;
    } else {
        throw new Error(`Invalid Option: skip_empty_lines must be a boolean, got ${JSON.stringify(options.skip_empty_lines)}`);
    }
    // Normalize option `skip_records_with_empty_values`
    if (typeof options.skip_records_with_empty_values === "boolean") {
    // Great, nothing to do
    } else if (options.skip_records_with_empty_values === undefined || options.skip_records_with_empty_values === null) {
        options.skip_records_with_empty_values = false;
    } else {
        throw new Error(`Invalid Option: skip_records_with_empty_values must be a boolean, got ${JSON.stringify(options.skip_records_with_empty_values)}`);
    }
    // Normalize option `skip_records_with_error`
    if (typeof options.skip_records_with_error === "boolean") {
    // Great, nothing to do
    } else if (options.skip_records_with_error === undefined || options.skip_records_with_error === null) {
        options.skip_records_with_error = false;
    } else {
        throw new Error(`Invalid Option: skip_records_with_error must be a boolean, got ${JSON.stringify(options.skip_records_with_error)}`);
    }
    // Normalize option `rtrim`
    if (options.rtrim === undefined || options.rtrim === null || options.rtrim === false) {
        options.rtrim = false;
    } else if (options.rtrim !== true) {
        throw new Error(`Invalid Option: rtrim must be a boolean, got ${JSON.stringify(options.rtrim)}`);
    }
    // Normalize option `ltrim`
    if (options.ltrim === undefined || options.ltrim === null || options.ltrim === false) {
        options.ltrim = false;
    } else if (options.ltrim !== true) {
        throw new Error(`Invalid Option: ltrim must be a boolean, got ${JSON.stringify(options.ltrim)}`);
    }
    // Normalize option `trim`
    if (options.trim === undefined || options.trim === null || options.trim === false) {
        options.trim = false;
    } else if (options.trim !== true) {
        throw new Error(`Invalid Option: trim must be a boolean, got ${JSON.stringify(options.trim)}`);
    }
    // Normalize options `trim`, `ltrim` and `rtrim`
    if (options.trim === true && opts.ltrim !== false) {
        options.ltrim = true;
    } else if (options.ltrim !== true) {
        options.ltrim = false;
    }
    if (options.trim === true && opts.rtrim !== false) {
        options.rtrim = true;
    } else if (options.rtrim !== true) {
        options.rtrim = false;
    }
    // Normalize option `to`
    if (options.to === undefined || options.to === null) {
        options.to = -1;
    } else if (options.to !== -1) {
        if (typeof options.to === "string" && /\d+/.test(options.to)) {
            options.to = parseInt(options.to);
        }
        if (Number.isInteger(options.to)) {
            if (options.to <= 0) {
                throw new Error(`Invalid Option: to must be a positive integer greater than 0, got ${JSON.stringify(opts.to)}`);
            }
        } else {
            throw new Error(`Invalid Option: to must be an integer, got ${JSON.stringify(opts.to)}`);
        }
    }
    // Normalize option `to_line`
    if (options.to_line === undefined || options.to_line === null) {
        options.to_line = -1;
    } else if (options.to_line !== -1) {
        if (typeof options.to_line === "string" && /\d+/.test(options.to_line)) {
            options.to_line = parseInt(options.to_line);
        }
        if (Number.isInteger(options.to_line)) {
            if (options.to_line <= 0) {
                throw new Error(`Invalid Option: to_line must be a positive integer greater than 0, got ${JSON.stringify(opts.to_line)}`);
            }
        } else {
            throw new Error(`Invalid Option: to_line must be an integer, got ${JSON.stringify(opts.to_line)}`);
        }
    }
    return options;
};
;
}),
"[project]/node_modules/csv-parse/lib/sync.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parse",
    ()=>parse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/csv-parse/lib/api/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$CsvError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/csv-parse/lib/api/CsvError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$normalize_options$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/csv-parse/lib/api/normalize_options.js [app-route] (ecmascript)");
;
;
const parse = function(data, opts = {}) {
    if (typeof data === "string") {
        data = Buffer.from(data);
    }
    const records = opts && opts.objname ? Object.create(null) : [];
    const parser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["transform"])(opts);
    const push = (record)=>{
        if (parser.options.objname === undefined) records.push(record);
        else {
            records[record[0]] = record[1];
        }
    };
    const close = ()=>{};
    const error = parser.parse(data, true, push, close);
    if (error !== undefined) throw error;
    return records;
};
;
}),
"[project]/node_modules/csv-parse/lib/utils/ResizeableBuffer.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
class ResizeableBuffer {
    constructor(size = 100){
        this.size = size;
        this.length = 0;
        this.buf = Buffer.allocUnsafe(size);
    }
    prepend(val) {
        if (Buffer.isBuffer(val)) {
            const length = this.length + val.length;
            if (length >= this.size) {
                this.resize();
                if (length >= this.size) {
                    throw Error("INVALID_BUFFER_STATE");
                }
            }
            const buf = this.buf;
            this.buf = Buffer.allocUnsafe(this.size);
            val.copy(this.buf, 0);
            buf.copy(this.buf, val.length);
            this.length += val.length;
        } else {
            const length = this.length++;
            if (length === this.size) {
                this.resize();
            }
            const buf = this.clone();
            this.buf[0] = val;
            buf.copy(this.buf, 1, 0, length);
        }
    }
    append(val) {
        const length = this.length++;
        if (length === this.size) {
            this.resize();
        }
        this.buf[length] = val;
    }
    clone() {
        return Buffer.from(this.buf.slice(0, this.length));
    }
    resize() {
        const length = this.length;
        this.size = this.size * 2;
        const buf = Buffer.allocUnsafe(this.size);
        this.buf.copy(buf, 0, 0, length);
        this.buf = buf;
    }
    toString(encoding) {
        if (encoding) {
            return this.buf.toString(encoding, 0, this.length);
        } else {
            return Uint8Array.prototype.slice.call(this.buf.slice(0, this.length));
        }
    }
    toJSON() {
        return this.toString("utf8");
    }
    reset() {
        this.length = 0;
    }
}
const __TURBOPACK__default__export__ = ResizeableBuffer;
}),
"[project]/node_modules/csv-parse/lib/utils/delimiter_discover.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "delimiter_discover",
    ()=>delimiter_discover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$normalize_options$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/csv-parse/lib/api/normalize_options.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/csv-parse/lib/api/index.js [app-route] (ecmascript) <locals>");
;
;
// Discussed in [issue #400](https://github.com/adaltas/node-csv/issues/400)
// See https://github.com/python/cpython/blob/ea1b1c579f600cc85d145c60862b2e6b98701b24/Lib/csv.py#L349
const delimiter_discover = function(records, options) {
    // Normalize the configuration
    if (!options) {
        ({ delimiter_auto: options } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$normalize_options$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalize_options"])({
            delimiter_auto: true
        }));
    }
    // Convert String to Buffer
    if (typeof records === "string") {
        records = Buffer.from(records);
    }
    // Convert Buffer to an array of records
    if (Buffer.isBuffer(records)) {
        records = ((data)=>{
            const records = [];
            const parser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$csv$2d$parse$2f$lib$2f$api$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["transform"])({
                delimiter: []
            });
            const push = (record)=>records.push(record);
            const close = ()=>{};
            const error = parser.parse(data, true, push, close);
            if (error !== undefined) throw error;
            return records;
        })(records);
    }
    // Info array initialization, 127 entries, one per char code
    const info = Array(127).fill().map(()=>({
            lines: []
        }));
    // Traverse each records, count occurences per char code
    records.map(([record], line)=>{
        for(let i = 0, l = record.length; i < l; i++){
            // Count the character frequency
            const code = record.charCodeAt(i);
            if (info[code].lines[line] === undefined) info[code].lines[line] = 0;
            info[code].lines[line]++;
        }
    });
    // Traverse each char code, compute the score
    info.map((info, i)=>{
        info.char_code = i;
        info.std = std(info.lines);
        info.total = info.lines.reduce((acc, val)=>acc + val, 0);
        info.preferred = !!options.preferred[i];
        info.score = options.score(info, options);
    });
    // Extract the dominant character
    const result = info.reduce((acc, info)=>acc.score > info.score ? acc : info, {});
    return String.fromCharCode(result.char_code);
};
const std = function(array) {
    const n = array.length;
    if (n === 0) return 0;
    const mean = array.reduce((a, b)=>a + b) / n;
    return Math.sqrt(array.map((x)=>Math.pow(x - mean, 2)).reduce((a, b)=>a + b) / n);
};
;
}),
"[project]/node_modules/csv-parse/lib/utils/is_object.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "is_object",
    ()=>is_object
]);
const is_object = function(obj) {
    return typeof obj === "object" && obj !== null && !Array.isArray(obj);
};
;
}),
"[project]/node_modules/csv-parse/lib/utils/underscore.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "underscore",
    ()=>underscore
]);
const underscore = function(str) {
    return str.replace(/([A-Z])/g, function(_, match) {
        return "_" + match.toLowerCase();
    });
};
;
}),
"[project]/node_modules/postgres-array/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const BACKSLASH = '\\';
const DQUOT = '"';
const LBRACE = '{';
const RBRACE = '}';
const LBRACKET = '[';
const EQUALS = '=';
const COMMA = ',';
/** When the raw value is this, it means a literal `null` */ const NULL_STRING = 'NULL';
/**
 * Parses an array according to
 * https://www.postgresql.org/docs/17/arrays.html#ARRAYS-IO
 *
 * Trusts the data (mostly), so only hook up to trusted Postgres servers.
 */ function makeParseArrayWithTransform(transform) {
    const haveTransform = transform != null;
    return function parseArray(str) {
        const rbraceIndex = str.length - 1;
        if (rbraceIndex === 1) {
            return [];
        }
        if (str[rbraceIndex] !== RBRACE) {
            throw new Error('Invalid array text - must end with }');
        }
        // If starts with `[`, it is specifying the index boundas. Skip past first `=`.
        let position = 0;
        if (str[position] === LBRACKET) {
            position = str.indexOf(EQUALS) + 1;
        }
        if (str[position++] !== LBRACE) {
            throw new Error('Invalid array text - must start with {');
        }
        const output = [];
        let current = output;
        const stack = [];
        let currentStringStart = position;
        let currentString = '';
        let expectValue = true;
        for(; position < rbraceIndex; ++position){
            let char = str[position];
            // > The array output routine will put double quotes around element values if
            // > they are empty strings, contain curly braces, delimiter characters, double
            // > quotes, backslashes, or white space, or match the word NULL. Double quotes
            // > and backslashes embedded in element values will be backslash-escaped.
            if (char === DQUOT) {
                // It's escaped
                currentStringStart = ++position;
                let dquot = str.indexOf(DQUOT, currentStringStart);
                let backSlash = str.indexOf(BACKSLASH, currentStringStart);
                while(backSlash !== -1 && backSlash < dquot){
                    position = backSlash;
                    const part = str.slice(currentStringStart, position);
                    currentString += part;
                    currentStringStart = ++position;
                    if (dquot === position++) {
                        // This was an escaped doublequote; find the next one!
                        dquot = str.indexOf(DQUOT, position);
                    }
                    // Either way, find the next backslash
                    backSlash = str.indexOf(BACKSLASH, position);
                }
                position = dquot;
                const part = str.slice(currentStringStart, position);
                currentString += part;
                current.push(haveTransform ? transform(currentString) : currentString);
                currentString = '';
                expectValue = false;
            } else if (char === LBRACE) {
                const newArray = [];
                current.push(newArray);
                stack.push(current);
                current = newArray;
                currentStringStart = position + 1;
                expectValue = true;
            } else if (char === COMMA) {
                expectValue = true;
            } else if (char === RBRACE) {
                expectValue = false;
                const arr = stack.pop();
                if (arr === undefined) {
                    throw new Error("Invalid array text - too many '}'");
                }
                current = arr;
            } else if (expectValue) {
                currentStringStart = position;
                while((char = str[position]) !== COMMA && char !== RBRACE && position < rbraceIndex){
                    ++position;
                }
                const part = str.slice(currentStringStart, position--);
                current.push(part === NULL_STRING ? null : haveTransform ? transform(part) : part);
                expectValue = false;
            } else {
                throw new Error('Was expecting delimeter');
            }
        }
        return output;
    };
}
const parseArray = makeParseArrayWithTransform();
exports.parse = (source, transform)=>transform != null ? makeParseArrayWithTransform(transform)(source) : parseArray(source);
}),
]})(),
"[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("@prisma/client-2c3a283f134fdcb6", () => require("@prisma/client-2c3a283f134fdcb6"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1_gre3n5ndftk._.js.map