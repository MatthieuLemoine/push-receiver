/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.checkin_proto = (function() {

    /**
     * Namespace checkin_proto.
     * @exports checkin_proto
     * @namespace
     */
    var checkin_proto = {};

    checkin_proto.ChromeBuildProto = (function() {

        /**
         * Properties of a ChromeBuildProto.
         * @memberof checkin_proto
         * @interface IChromeBuildProto
         * @property {checkin_proto.ChromeBuildProto.Platform|null} [platform] ChromeBuildProto platform
         * @property {string|null} [chromeVersion] ChromeBuildProto chromeVersion
         * @property {checkin_proto.ChromeBuildProto.Channel|null} [channel] ChromeBuildProto channel
         */

        /**
         * Constructs a new ChromeBuildProto.
         * @memberof checkin_proto
         * @classdesc Represents a ChromeBuildProto.
         * @implements IChromeBuildProto
         * @constructor
         * @param {checkin_proto.IChromeBuildProto=} [properties] Properties to set
         */
        function ChromeBuildProto(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChromeBuildProto platform.
         * @member {checkin_proto.ChromeBuildProto.Platform} platform
         * @memberof checkin_proto.ChromeBuildProto
         * @instance
         */
        ChromeBuildProto.prototype.platform = 1;

        /**
         * ChromeBuildProto chromeVersion.
         * @member {string} chromeVersion
         * @memberof checkin_proto.ChromeBuildProto
         * @instance
         */
        ChromeBuildProto.prototype.chromeVersion = "";

        /**
         * ChromeBuildProto channel.
         * @member {checkin_proto.ChromeBuildProto.Channel} channel
         * @memberof checkin_proto.ChromeBuildProto
         * @instance
         */
        ChromeBuildProto.prototype.channel = 1;

        /**
         * Creates a new ChromeBuildProto instance using the specified properties.
         * @function create
         * @memberof checkin_proto.ChromeBuildProto
         * @static
         * @param {checkin_proto.IChromeBuildProto=} [properties] Properties to set
         * @returns {checkin_proto.ChromeBuildProto} ChromeBuildProto instance
         */
        ChromeBuildProto.create = function create(properties) {
            return new ChromeBuildProto(properties);
        };

        /**
         * Encodes the specified ChromeBuildProto message. Does not implicitly {@link checkin_proto.ChromeBuildProto.verify|verify} messages.
         * @function encode
         * @memberof checkin_proto.ChromeBuildProto
         * @static
         * @param {checkin_proto.IChromeBuildProto} message ChromeBuildProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChromeBuildProto.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.platform != null && Object.hasOwnProperty.call(message, "platform"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.platform);
            if (message.chromeVersion != null && Object.hasOwnProperty.call(message, "chromeVersion"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.chromeVersion);
            if (message.channel != null && Object.hasOwnProperty.call(message, "channel"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.channel);
            return writer;
        };

        /**
         * Encodes the specified ChromeBuildProto message, length delimited. Does not implicitly {@link checkin_proto.ChromeBuildProto.verify|verify} messages.
         * @function encodeDelimited
         * @memberof checkin_proto.ChromeBuildProto
         * @static
         * @param {checkin_proto.IChromeBuildProto} message ChromeBuildProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChromeBuildProto.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChromeBuildProto message from the specified reader or buffer.
         * @function decode
         * @memberof checkin_proto.ChromeBuildProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {checkin_proto.ChromeBuildProto} ChromeBuildProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChromeBuildProto.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.checkin_proto.ChromeBuildProto();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.platform = reader.int32();
                        break;
                    }
                case 2: {
                        message.chromeVersion = reader.string();
                        break;
                    }
                case 3: {
                        message.channel = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChromeBuildProto message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof checkin_proto.ChromeBuildProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {checkin_proto.ChromeBuildProto} ChromeBuildProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChromeBuildProto.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChromeBuildProto message.
         * @function verify
         * @memberof checkin_proto.ChromeBuildProto
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChromeBuildProto.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.platform != null && message.hasOwnProperty("platform"))
                switch (message.platform) {
                default:
                    return "platform: enum value expected";
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.chromeVersion != null && message.hasOwnProperty("chromeVersion"))
                if (!$util.isString(message.chromeVersion))
                    return "chromeVersion: string expected";
            if (message.channel != null && message.hasOwnProperty("channel"))
                switch (message.channel) {
                default:
                    return "channel: enum value expected";
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            return null;
        };

        /**
         * Creates a ChromeBuildProto message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof checkin_proto.ChromeBuildProto
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {checkin_proto.ChromeBuildProto} ChromeBuildProto
         */
        ChromeBuildProto.fromObject = function fromObject(object) {
            if (object instanceof $root.checkin_proto.ChromeBuildProto)
                return object;
            var message = new $root.checkin_proto.ChromeBuildProto();
            switch (object.platform) {
            default:
                if (typeof object.platform === "number") {
                    message.platform = object.platform;
                    break;
                }
                break;
            case "PLATFORM_WIN":
            case 1:
                message.platform = 1;
                break;
            case "PLATFORM_MAC":
            case 2:
                message.platform = 2;
                break;
            case "PLATFORM_LINUX":
            case 3:
                message.platform = 3;
                break;
            case "PLATFORM_CROS":
            case 4:
                message.platform = 4;
                break;
            case "PLATFORM_IOS":
            case 5:
                message.platform = 5;
                break;
            case "PLATFORM_ANDROID":
            case 6:
                message.platform = 6;
                break;
            }
            if (object.chromeVersion != null)
                message.chromeVersion = String(object.chromeVersion);
            switch (object.channel) {
            default:
                if (typeof object.channel === "number") {
                    message.channel = object.channel;
                    break;
                }
                break;
            case "CHANNEL_STABLE":
            case 1:
                message.channel = 1;
                break;
            case "CHANNEL_BETA":
            case 2:
                message.channel = 2;
                break;
            case "CHANNEL_DEV":
            case 3:
                message.channel = 3;
                break;
            case "CHANNEL_CANARY":
            case 4:
                message.channel = 4;
                break;
            case "CHANNEL_UNKNOWN":
            case 5:
                message.channel = 5;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a ChromeBuildProto message. Also converts values to other types if specified.
         * @function toObject
         * @memberof checkin_proto.ChromeBuildProto
         * @static
         * @param {checkin_proto.ChromeBuildProto} message ChromeBuildProto
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChromeBuildProto.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.platform = options.enums === String ? "PLATFORM_WIN" : 1;
                object.chromeVersion = "";
                object.channel = options.enums === String ? "CHANNEL_STABLE" : 1;
            }
            if (message.platform != null && message.hasOwnProperty("platform"))
                object.platform = options.enums === String ? $root.checkin_proto.ChromeBuildProto.Platform[message.platform] === undefined ? message.platform : $root.checkin_proto.ChromeBuildProto.Platform[message.platform] : message.platform;
            if (message.chromeVersion != null && message.hasOwnProperty("chromeVersion"))
                object.chromeVersion = message.chromeVersion;
            if (message.channel != null && message.hasOwnProperty("channel"))
                object.channel = options.enums === String ? $root.checkin_proto.ChromeBuildProto.Channel[message.channel] === undefined ? message.channel : $root.checkin_proto.ChromeBuildProto.Channel[message.channel] : message.channel;
            return object;
        };

        /**
         * Converts this ChromeBuildProto to JSON.
         * @function toJSON
         * @memberof checkin_proto.ChromeBuildProto
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChromeBuildProto.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ChromeBuildProto
         * @function getTypeUrl
         * @memberof checkin_proto.ChromeBuildProto
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ChromeBuildProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/checkin_proto.ChromeBuildProto";
        };

        /**
         * Platform enum.
         * @name checkin_proto.ChromeBuildProto.Platform
         * @enum {number}
         * @property {number} PLATFORM_WIN=1 PLATFORM_WIN value
         * @property {number} PLATFORM_MAC=2 PLATFORM_MAC value
         * @property {number} PLATFORM_LINUX=3 PLATFORM_LINUX value
         * @property {number} PLATFORM_CROS=4 PLATFORM_CROS value
         * @property {number} PLATFORM_IOS=5 PLATFORM_IOS value
         * @property {number} PLATFORM_ANDROID=6 PLATFORM_ANDROID value
         */
        ChromeBuildProto.Platform = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "PLATFORM_WIN"] = 1;
            values[valuesById[2] = "PLATFORM_MAC"] = 2;
            values[valuesById[3] = "PLATFORM_LINUX"] = 3;
            values[valuesById[4] = "PLATFORM_CROS"] = 4;
            values[valuesById[5] = "PLATFORM_IOS"] = 5;
            values[valuesById[6] = "PLATFORM_ANDROID"] = 6;
            return values;
        })();

        /**
         * Channel enum.
         * @name checkin_proto.ChromeBuildProto.Channel
         * @enum {number}
         * @property {number} CHANNEL_STABLE=1 CHANNEL_STABLE value
         * @property {number} CHANNEL_BETA=2 CHANNEL_BETA value
         * @property {number} CHANNEL_DEV=3 CHANNEL_DEV value
         * @property {number} CHANNEL_CANARY=4 CHANNEL_CANARY value
         * @property {number} CHANNEL_UNKNOWN=5 CHANNEL_UNKNOWN value
         */
        ChromeBuildProto.Channel = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "CHANNEL_STABLE"] = 1;
            values[valuesById[2] = "CHANNEL_BETA"] = 2;
            values[valuesById[3] = "CHANNEL_DEV"] = 3;
            values[valuesById[4] = "CHANNEL_CANARY"] = 4;
            values[valuesById[5] = "CHANNEL_UNKNOWN"] = 5;
            return values;
        })();

        return ChromeBuildProto;
    })();

    checkin_proto.AndroidCheckinProto = (function() {

        /**
         * Properties of an AndroidCheckinProto.
         * @memberof checkin_proto
         * @interface IAndroidCheckinProto
         * @property {Long|null} [lastCheckinMsec] AndroidCheckinProto lastCheckinMsec
         * @property {string|null} [cellOperator] AndroidCheckinProto cellOperator
         * @property {string|null} [simOperator] AndroidCheckinProto simOperator
         * @property {string|null} [roaming] AndroidCheckinProto roaming
         * @property {number|null} [userNumber] AndroidCheckinProto userNumber
         * @property {checkin_proto.DeviceType|null} [type] AndroidCheckinProto type
         * @property {checkin_proto.IChromeBuildProto|null} [chromeBuild] AndroidCheckinProto chromeBuild
         */

        /**
         * Constructs a new AndroidCheckinProto.
         * @memberof checkin_proto
         * @classdesc Represents an AndroidCheckinProto.
         * @implements IAndroidCheckinProto
         * @constructor
         * @param {checkin_proto.IAndroidCheckinProto=} [properties] Properties to set
         */
        function AndroidCheckinProto(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AndroidCheckinProto lastCheckinMsec.
         * @member {Long} lastCheckinMsec
         * @memberof checkin_proto.AndroidCheckinProto
         * @instance
         */
        AndroidCheckinProto.prototype.lastCheckinMsec = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AndroidCheckinProto cellOperator.
         * @member {string} cellOperator
         * @memberof checkin_proto.AndroidCheckinProto
         * @instance
         */
        AndroidCheckinProto.prototype.cellOperator = "";

        /**
         * AndroidCheckinProto simOperator.
         * @member {string} simOperator
         * @memberof checkin_proto.AndroidCheckinProto
         * @instance
         */
        AndroidCheckinProto.prototype.simOperator = "";

        /**
         * AndroidCheckinProto roaming.
         * @member {string} roaming
         * @memberof checkin_proto.AndroidCheckinProto
         * @instance
         */
        AndroidCheckinProto.prototype.roaming = "";

        /**
         * AndroidCheckinProto userNumber.
         * @member {number} userNumber
         * @memberof checkin_proto.AndroidCheckinProto
         * @instance
         */
        AndroidCheckinProto.prototype.userNumber = 0;

        /**
         * AndroidCheckinProto type.
         * @member {checkin_proto.DeviceType} type
         * @memberof checkin_proto.AndroidCheckinProto
         * @instance
         */
        AndroidCheckinProto.prototype.type = 1;

        /**
         * AndroidCheckinProto chromeBuild.
         * @member {checkin_proto.IChromeBuildProto|null|undefined} chromeBuild
         * @memberof checkin_proto.AndroidCheckinProto
         * @instance
         */
        AndroidCheckinProto.prototype.chromeBuild = null;

        /**
         * Creates a new AndroidCheckinProto instance using the specified properties.
         * @function create
         * @memberof checkin_proto.AndroidCheckinProto
         * @static
         * @param {checkin_proto.IAndroidCheckinProto=} [properties] Properties to set
         * @returns {checkin_proto.AndroidCheckinProto} AndroidCheckinProto instance
         */
        AndroidCheckinProto.create = function create(properties) {
            return new AndroidCheckinProto(properties);
        };

        /**
         * Encodes the specified AndroidCheckinProto message. Does not implicitly {@link checkin_proto.AndroidCheckinProto.verify|verify} messages.
         * @function encode
         * @memberof checkin_proto.AndroidCheckinProto
         * @static
         * @param {checkin_proto.IAndroidCheckinProto} message AndroidCheckinProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AndroidCheckinProto.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.lastCheckinMsec != null && Object.hasOwnProperty.call(message, "lastCheckinMsec"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.lastCheckinMsec);
            if (message.cellOperator != null && Object.hasOwnProperty.call(message, "cellOperator"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.cellOperator);
            if (message.simOperator != null && Object.hasOwnProperty.call(message, "simOperator"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.simOperator);
            if (message.roaming != null && Object.hasOwnProperty.call(message, "roaming"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.roaming);
            if (message.userNumber != null && Object.hasOwnProperty.call(message, "userNumber"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.userNumber);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.type);
            if (message.chromeBuild != null && Object.hasOwnProperty.call(message, "chromeBuild"))
                $root.checkin_proto.ChromeBuildProto.encode(message.chromeBuild, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AndroidCheckinProto message, length delimited. Does not implicitly {@link checkin_proto.AndroidCheckinProto.verify|verify} messages.
         * @function encodeDelimited
         * @memberof checkin_proto.AndroidCheckinProto
         * @static
         * @param {checkin_proto.IAndroidCheckinProto} message AndroidCheckinProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AndroidCheckinProto.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AndroidCheckinProto message from the specified reader or buffer.
         * @function decode
         * @memberof checkin_proto.AndroidCheckinProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {checkin_proto.AndroidCheckinProto} AndroidCheckinProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AndroidCheckinProto.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.checkin_proto.AndroidCheckinProto();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.lastCheckinMsec = reader.int64();
                        break;
                    }
                case 6: {
                        message.cellOperator = reader.string();
                        break;
                    }
                case 7: {
                        message.simOperator = reader.string();
                        break;
                    }
                case 8: {
                        message.roaming = reader.string();
                        break;
                    }
                case 9: {
                        message.userNumber = reader.int32();
                        break;
                    }
                case 12: {
                        message.type = reader.int32();
                        break;
                    }
                case 13: {
                        message.chromeBuild = $root.checkin_proto.ChromeBuildProto.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AndroidCheckinProto message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof checkin_proto.AndroidCheckinProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {checkin_proto.AndroidCheckinProto} AndroidCheckinProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AndroidCheckinProto.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AndroidCheckinProto message.
         * @function verify
         * @memberof checkin_proto.AndroidCheckinProto
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AndroidCheckinProto.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.lastCheckinMsec != null && message.hasOwnProperty("lastCheckinMsec"))
                if (!$util.isInteger(message.lastCheckinMsec) && !(message.lastCheckinMsec && $util.isInteger(message.lastCheckinMsec.low) && $util.isInteger(message.lastCheckinMsec.high)))
                    return "lastCheckinMsec: integer|Long expected";
            if (message.cellOperator != null && message.hasOwnProperty("cellOperator"))
                if (!$util.isString(message.cellOperator))
                    return "cellOperator: string expected";
            if (message.simOperator != null && message.hasOwnProperty("simOperator"))
                if (!$util.isString(message.simOperator))
                    return "simOperator: string expected";
            if (message.roaming != null && message.hasOwnProperty("roaming"))
                if (!$util.isString(message.roaming))
                    return "roaming: string expected";
            if (message.userNumber != null && message.hasOwnProperty("userNumber"))
                if (!$util.isInteger(message.userNumber))
                    return "userNumber: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.chromeBuild != null && message.hasOwnProperty("chromeBuild")) {
                var error = $root.checkin_proto.ChromeBuildProto.verify(message.chromeBuild);
                if (error)
                    return "chromeBuild." + error;
            }
            return null;
        };

        /**
         * Creates an AndroidCheckinProto message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof checkin_proto.AndroidCheckinProto
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {checkin_proto.AndroidCheckinProto} AndroidCheckinProto
         */
        AndroidCheckinProto.fromObject = function fromObject(object) {
            if (object instanceof $root.checkin_proto.AndroidCheckinProto)
                return object;
            var message = new $root.checkin_proto.AndroidCheckinProto();
            if (object.lastCheckinMsec != null)
                if ($util.Long)
                    (message.lastCheckinMsec = $util.Long.fromValue(object.lastCheckinMsec)).unsigned = false;
                else if (typeof object.lastCheckinMsec === "string")
                    message.lastCheckinMsec = parseInt(object.lastCheckinMsec, 10);
                else if (typeof object.lastCheckinMsec === "number")
                    message.lastCheckinMsec = object.lastCheckinMsec;
                else if (typeof object.lastCheckinMsec === "object")
                    message.lastCheckinMsec = new $util.LongBits(object.lastCheckinMsec.low >>> 0, object.lastCheckinMsec.high >>> 0).toNumber();
            if (object.cellOperator != null)
                message.cellOperator = String(object.cellOperator);
            if (object.simOperator != null)
                message.simOperator = String(object.simOperator);
            if (object.roaming != null)
                message.roaming = String(object.roaming);
            if (object.userNumber != null)
                message.userNumber = object.userNumber | 0;
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "DEVICE_ANDROID_OS":
            case 1:
                message.type = 1;
                break;
            case "DEVICE_IOS_OS":
            case 2:
                message.type = 2;
                break;
            case "DEVICE_CHROME_BROWSER":
            case 3:
                message.type = 3;
                break;
            case "DEVICE_CHROME_OS":
            case 4:
                message.type = 4;
                break;
            }
            if (object.chromeBuild != null) {
                if (typeof object.chromeBuild !== "object")
                    throw TypeError(".checkin_proto.AndroidCheckinProto.chromeBuild: object expected");
                message.chromeBuild = $root.checkin_proto.ChromeBuildProto.fromObject(object.chromeBuild);
            }
            return message;
        };

        /**
         * Creates a plain object from an AndroidCheckinProto message. Also converts values to other types if specified.
         * @function toObject
         * @memberof checkin_proto.AndroidCheckinProto
         * @static
         * @param {checkin_proto.AndroidCheckinProto} message AndroidCheckinProto
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AndroidCheckinProto.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.lastCheckinMsec = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lastCheckinMsec = options.longs === String ? "0" : 0;
                object.cellOperator = "";
                object.simOperator = "";
                object.roaming = "";
                object.userNumber = 0;
                object.type = options.enums === String ? "DEVICE_ANDROID_OS" : 1;
                object.chromeBuild = null;
            }
            if (message.lastCheckinMsec != null && message.hasOwnProperty("lastCheckinMsec"))
                if (typeof message.lastCheckinMsec === "number")
                    object.lastCheckinMsec = options.longs === String ? String(message.lastCheckinMsec) : message.lastCheckinMsec;
                else
                    object.lastCheckinMsec = options.longs === String ? $util.Long.prototype.toString.call(message.lastCheckinMsec) : options.longs === Number ? new $util.LongBits(message.lastCheckinMsec.low >>> 0, message.lastCheckinMsec.high >>> 0).toNumber() : message.lastCheckinMsec;
            if (message.cellOperator != null && message.hasOwnProperty("cellOperator"))
                object.cellOperator = message.cellOperator;
            if (message.simOperator != null && message.hasOwnProperty("simOperator"))
                object.simOperator = message.simOperator;
            if (message.roaming != null && message.hasOwnProperty("roaming"))
                object.roaming = message.roaming;
            if (message.userNumber != null && message.hasOwnProperty("userNumber"))
                object.userNumber = message.userNumber;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.checkin_proto.DeviceType[message.type] === undefined ? message.type : $root.checkin_proto.DeviceType[message.type] : message.type;
            if (message.chromeBuild != null && message.hasOwnProperty("chromeBuild"))
                object.chromeBuild = $root.checkin_proto.ChromeBuildProto.toObject(message.chromeBuild, options);
            return object;
        };

        /**
         * Converts this AndroidCheckinProto to JSON.
         * @function toJSON
         * @memberof checkin_proto.AndroidCheckinProto
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AndroidCheckinProto.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AndroidCheckinProto
         * @function getTypeUrl
         * @memberof checkin_proto.AndroidCheckinProto
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AndroidCheckinProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/checkin_proto.AndroidCheckinProto";
        };

        return AndroidCheckinProto;
    })();

    /**
     * DeviceType enum.
     * @name checkin_proto.DeviceType
     * @enum {number}
     * @property {number} DEVICE_ANDROID_OS=1 DEVICE_ANDROID_OS value
     * @property {number} DEVICE_IOS_OS=2 DEVICE_IOS_OS value
     * @property {number} DEVICE_CHROME_BROWSER=3 DEVICE_CHROME_BROWSER value
     * @property {number} DEVICE_CHROME_OS=4 DEVICE_CHROME_OS value
     */
    checkin_proto.DeviceType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "DEVICE_ANDROID_OS"] = 1;
        values[valuesById[2] = "DEVICE_IOS_OS"] = 2;
        values[valuesById[3] = "DEVICE_CHROME_BROWSER"] = 3;
        values[valuesById[4] = "DEVICE_CHROME_OS"] = 4;
        return values;
    })();

    checkin_proto.GservicesSetting = (function() {

        /**
         * Properties of a GservicesSetting.
         * @memberof checkin_proto
         * @interface IGservicesSetting
         * @property {Uint8Array} name GservicesSetting name
         * @property {Uint8Array} value GservicesSetting value
         */

        /**
         * Constructs a new GservicesSetting.
         * @memberof checkin_proto
         * @classdesc Represents a GservicesSetting.
         * @implements IGservicesSetting
         * @constructor
         * @param {checkin_proto.IGservicesSetting=} [properties] Properties to set
         */
        function GservicesSetting(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GservicesSetting name.
         * @member {Uint8Array} name
         * @memberof checkin_proto.GservicesSetting
         * @instance
         */
        GservicesSetting.prototype.name = $util.newBuffer([]);

        /**
         * GservicesSetting value.
         * @member {Uint8Array} value
         * @memberof checkin_proto.GservicesSetting
         * @instance
         */
        GservicesSetting.prototype.value = $util.newBuffer([]);

        /**
         * Creates a new GservicesSetting instance using the specified properties.
         * @function create
         * @memberof checkin_proto.GservicesSetting
         * @static
         * @param {checkin_proto.IGservicesSetting=} [properties] Properties to set
         * @returns {checkin_proto.GservicesSetting} GservicesSetting instance
         */
        GservicesSetting.create = function create(properties) {
            return new GservicesSetting(properties);
        };

        /**
         * Encodes the specified GservicesSetting message. Does not implicitly {@link checkin_proto.GservicesSetting.verify|verify} messages.
         * @function encode
         * @memberof checkin_proto.GservicesSetting
         * @static
         * @param {checkin_proto.IGservicesSetting} message GservicesSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GservicesSetting.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.name);
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
            return writer;
        };

        /**
         * Encodes the specified GservicesSetting message, length delimited. Does not implicitly {@link checkin_proto.GservicesSetting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof checkin_proto.GservicesSetting
         * @static
         * @param {checkin_proto.IGservicesSetting} message GservicesSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GservicesSetting.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GservicesSetting message from the specified reader or buffer.
         * @function decode
         * @memberof checkin_proto.GservicesSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {checkin_proto.GservicesSetting} GservicesSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GservicesSetting.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.checkin_proto.GservicesSetting();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.bytes();
                        break;
                    }
                case 2: {
                        message.value = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("value"))
                throw $util.ProtocolError("missing required 'value'", { instance: message });
            return message;
        };

        /**
         * Decodes a GservicesSetting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof checkin_proto.GservicesSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {checkin_proto.GservicesSetting} GservicesSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GservicesSetting.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GservicesSetting message.
         * @function verify
         * @memberof checkin_proto.GservicesSetting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GservicesSetting.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!(message.name && typeof message.name.length === "number" || $util.isString(message.name)))
                return "name: buffer expected";
            if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                return "value: buffer expected";
            return null;
        };

        /**
         * Creates a GservicesSetting message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof checkin_proto.GservicesSetting
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {checkin_proto.GservicesSetting} GservicesSetting
         */
        GservicesSetting.fromObject = function fromObject(object) {
            if (object instanceof $root.checkin_proto.GservicesSetting)
                return object;
            var message = new $root.checkin_proto.GservicesSetting();
            if (object.name != null)
                if (typeof object.name === "string")
                    $util.base64.decode(object.name, message.name = $util.newBuffer($util.base64.length(object.name)), 0);
                else if (object.name.length >= 0)
                    message.name = object.name;
            if (object.value != null)
                if (typeof object.value === "string")
                    $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                else if (object.value.length >= 0)
                    message.value = object.value;
            return message;
        };

        /**
         * Creates a plain object from a GservicesSetting message. Also converts values to other types if specified.
         * @function toObject
         * @memberof checkin_proto.GservicesSetting
         * @static
         * @param {checkin_proto.GservicesSetting} message GservicesSetting
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GservicesSetting.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.name = "";
                else {
                    object.name = [];
                    if (options.bytes !== Array)
                        object.name = $util.newBuffer(object.name);
                }
                if (options.bytes === String)
                    object.value = "";
                else {
                    object.value = [];
                    if (options.bytes !== Array)
                        object.value = $util.newBuffer(object.value);
                }
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = options.bytes === String ? $util.base64.encode(message.name, 0, message.name.length) : options.bytes === Array ? Array.prototype.slice.call(message.name) : message.name;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
            return object;
        };

        /**
         * Converts this GservicesSetting to JSON.
         * @function toJSON
         * @memberof checkin_proto.GservicesSetting
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GservicesSetting.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GservicesSetting
         * @function getTypeUrl
         * @memberof checkin_proto.GservicesSetting
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GservicesSetting.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/checkin_proto.GservicesSetting";
        };

        return GservicesSetting;
    })();

    checkin_proto.AndroidCheckinRequest = (function() {

        /**
         * Properties of an AndroidCheckinRequest.
         * @memberof checkin_proto
         * @interface IAndroidCheckinRequest
         * @property {string|null} [imei] AndroidCheckinRequest imei
         * @property {string|null} [meid] AndroidCheckinRequest meid
         * @property {Array.<string>|null} [macAddr] AndroidCheckinRequest macAddr
         * @property {Array.<string>|null} [macAddrType] AndroidCheckinRequest macAddrType
         * @property {string|null} [serialNumber] AndroidCheckinRequest serialNumber
         * @property {string|null} [esn] AndroidCheckinRequest esn
         * @property {Long|null} [id] AndroidCheckinRequest id
         * @property {Long|null} [loggingId] AndroidCheckinRequest loggingId
         * @property {string|null} [digest] AndroidCheckinRequest digest
         * @property {string|null} [locale] AndroidCheckinRequest locale
         * @property {checkin_proto.IAndroidCheckinProto} checkin AndroidCheckinRequest checkin
         * @property {string|null} [desiredBuild] AndroidCheckinRequest desiredBuild
         * @property {string|null} [marketCheckin] AndroidCheckinRequest marketCheckin
         * @property {Array.<string>|null} [accountCookie] AndroidCheckinRequest accountCookie
         * @property {string|null} [timeZone] AndroidCheckinRequest timeZone
         * @property {Long|null} [securityToken] AndroidCheckinRequest securityToken
         * @property {number|null} [version] AndroidCheckinRequest version
         * @property {Array.<string>|null} [otaCert] AndroidCheckinRequest otaCert
         * @property {number|null} [fragment] AndroidCheckinRequest fragment
         * @property {string|null} [userName] AndroidCheckinRequest userName
         * @property {number|null} [userSerialNumber] AndroidCheckinRequest userSerialNumber
         */

        /**
         * Constructs a new AndroidCheckinRequest.
         * @memberof checkin_proto
         * @classdesc Represents an AndroidCheckinRequest.
         * @implements IAndroidCheckinRequest
         * @constructor
         * @param {checkin_proto.IAndroidCheckinRequest=} [properties] Properties to set
         */
        function AndroidCheckinRequest(properties) {
            this.macAddr = [];
            this.macAddrType = [];
            this.accountCookie = [];
            this.otaCert = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AndroidCheckinRequest imei.
         * @member {string} imei
         * @memberof checkin_proto.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.imei = "";

        /**
         * AndroidCheckinRequest meid.
         * @member {string} meid
         * @memberof checkin_proto.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.meid = "";

        /**
         * AndroidCheckinRequest macAddr.
         * @member {Array.<string>} macAddr
         * @memberof checkin_proto.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.macAddr = $util.emptyArray;

        /**
         * AndroidCheckinRequest macAddrType.
         * @member {Array.<string>} macAddrType
         * @memberof checkin_proto.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.macAddrType = $util.emptyArray;

        /**
         * AndroidCheckinRequest serialNumber.
         * @member {string} serialNumber
         * @memberof checkin_proto.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.serialNumber = "";

        /**
         * AndroidCheckinRequest esn.
         * @member {string} esn
         * @memberof checkin_proto.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.esn = "";

        /**
         * AndroidCheckinRequest id.
         * @member {Long} id
         * @memberof checkin_proto.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AndroidCheckinRequest loggingId.
         * @member {Long} loggingId
         * @memberof checkin_proto.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.loggingId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AndroidCheckinRequest digest.
         * @member {string} digest
         * @memberof checkin_proto.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.digest = "";

        /**
         * AndroidCheckinRequest locale.
         * @member {string} locale
         * @memberof checkin_proto.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.locale = "";

        /**
         * AndroidCheckinRequest checkin.
         * @member {checkin_proto.IAndroidCheckinProto} checkin
         * @memberof checkin_proto.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.checkin = null;

        /**
         * AndroidCheckinRequest desiredBuild.
         * @member {string} desiredBuild
         * @memberof checkin_proto.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.desiredBuild = "";

        /**
         * AndroidCheckinRequest marketCheckin.
         * @member {string} marketCheckin
         * @memberof checkin_proto.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.marketCheckin = "";

        /**
         * AndroidCheckinRequest accountCookie.
         * @member {Array.<string>} accountCookie
         * @memberof checkin_proto.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.accountCookie = $util.emptyArray;

        /**
         * AndroidCheckinRequest timeZone.
         * @member {string} timeZone
         * @memberof checkin_proto.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.timeZone = "";

        /**
         * AndroidCheckinRequest securityToken.
         * @member {Long} securityToken
         * @memberof checkin_proto.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.securityToken = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AndroidCheckinRequest version.
         * @member {number} version
         * @memberof checkin_proto.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.version = 0;

        /**
         * AndroidCheckinRequest otaCert.
         * @member {Array.<string>} otaCert
         * @memberof checkin_proto.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.otaCert = $util.emptyArray;

        /**
         * AndroidCheckinRequest fragment.
         * @member {number} fragment
         * @memberof checkin_proto.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.fragment = 0;

        /**
         * AndroidCheckinRequest userName.
         * @member {string} userName
         * @memberof checkin_proto.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.userName = "";

        /**
         * AndroidCheckinRequest userSerialNumber.
         * @member {number} userSerialNumber
         * @memberof checkin_proto.AndroidCheckinRequest
         * @instance
         */
        AndroidCheckinRequest.prototype.userSerialNumber = 0;

        /**
         * Creates a new AndroidCheckinRequest instance using the specified properties.
         * @function create
         * @memberof checkin_proto.AndroidCheckinRequest
         * @static
         * @param {checkin_proto.IAndroidCheckinRequest=} [properties] Properties to set
         * @returns {checkin_proto.AndroidCheckinRequest} AndroidCheckinRequest instance
         */
        AndroidCheckinRequest.create = function create(properties) {
            return new AndroidCheckinRequest(properties);
        };

        /**
         * Encodes the specified AndroidCheckinRequest message. Does not implicitly {@link checkin_proto.AndroidCheckinRequest.verify|verify} messages.
         * @function encode
         * @memberof checkin_proto.AndroidCheckinRequest
         * @static
         * @param {checkin_proto.IAndroidCheckinRequest} message AndroidCheckinRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AndroidCheckinRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.imei != null && Object.hasOwnProperty.call(message, "imei"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.imei);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.id);
            if (message.digest != null && Object.hasOwnProperty.call(message, "digest"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.digest);
            $root.checkin_proto.AndroidCheckinProto.encode(message.checkin, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.desiredBuild != null && Object.hasOwnProperty.call(message, "desiredBuild"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.desiredBuild);
            if (message.locale != null && Object.hasOwnProperty.call(message, "locale"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.locale);
            if (message.loggingId != null && Object.hasOwnProperty.call(message, "loggingId"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.loggingId);
            if (message.marketCheckin != null && Object.hasOwnProperty.call(message, "marketCheckin"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.marketCheckin);
            if (message.macAddr != null && message.macAddr.length)
                for (var i = 0; i < message.macAddr.length; ++i)
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.macAddr[i]);
            if (message.meid != null && Object.hasOwnProperty.call(message, "meid"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.meid);
            if (message.accountCookie != null && message.accountCookie.length)
                for (var i = 0; i < message.accountCookie.length; ++i)
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.accountCookie[i]);
            if (message.timeZone != null && Object.hasOwnProperty.call(message, "timeZone"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.timeZone);
            if (message.securityToken != null && Object.hasOwnProperty.call(message, "securityToken"))
                writer.uint32(/* id 13, wireType 1 =*/105).fixed64(message.securityToken);
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.version);
            if (message.otaCert != null && message.otaCert.length)
                for (var i = 0; i < message.otaCert.length; ++i)
                    writer.uint32(/* id 15, wireType 2 =*/122).string(message.otaCert[i]);
            if (message.serialNumber != null && Object.hasOwnProperty.call(message, "serialNumber"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.serialNumber);
            if (message.esn != null && Object.hasOwnProperty.call(message, "esn"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.esn);
            if (message.macAddrType != null && message.macAddrType.length)
                for (var i = 0; i < message.macAddrType.length; ++i)
                    writer.uint32(/* id 19, wireType 2 =*/154).string(message.macAddrType[i]);
            if (message.fragment != null && Object.hasOwnProperty.call(message, "fragment"))
                writer.uint32(/* id 20, wireType 0 =*/160).int32(message.fragment);
            if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                writer.uint32(/* id 21, wireType 2 =*/170).string(message.userName);
            if (message.userSerialNumber != null && Object.hasOwnProperty.call(message, "userSerialNumber"))
                writer.uint32(/* id 22, wireType 0 =*/176).int32(message.userSerialNumber);
            return writer;
        };

        /**
         * Encodes the specified AndroidCheckinRequest message, length delimited. Does not implicitly {@link checkin_proto.AndroidCheckinRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof checkin_proto.AndroidCheckinRequest
         * @static
         * @param {checkin_proto.IAndroidCheckinRequest} message AndroidCheckinRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AndroidCheckinRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AndroidCheckinRequest message from the specified reader or buffer.
         * @function decode
         * @memberof checkin_proto.AndroidCheckinRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {checkin_proto.AndroidCheckinRequest} AndroidCheckinRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AndroidCheckinRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.checkin_proto.AndroidCheckinRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.imei = reader.string();
                        break;
                    }
                case 10: {
                        message.meid = reader.string();
                        break;
                    }
                case 9: {
                        if (!(message.macAddr && message.macAddr.length))
                            message.macAddr = [];
                        message.macAddr.push(reader.string());
                        break;
                    }
                case 19: {
                        if (!(message.macAddrType && message.macAddrType.length))
                            message.macAddrType = [];
                        message.macAddrType.push(reader.string());
                        break;
                    }
                case 16: {
                        message.serialNumber = reader.string();
                        break;
                    }
                case 17: {
                        message.esn = reader.string();
                        break;
                    }
                case 2: {
                        message.id = reader.int64();
                        break;
                    }
                case 7: {
                        message.loggingId = reader.int64();
                        break;
                    }
                case 3: {
                        message.digest = reader.string();
                        break;
                    }
                case 6: {
                        message.locale = reader.string();
                        break;
                    }
                case 4: {
                        message.checkin = $root.checkin_proto.AndroidCheckinProto.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.desiredBuild = reader.string();
                        break;
                    }
                case 8: {
                        message.marketCheckin = reader.string();
                        break;
                    }
                case 11: {
                        if (!(message.accountCookie && message.accountCookie.length))
                            message.accountCookie = [];
                        message.accountCookie.push(reader.string());
                        break;
                    }
                case 12: {
                        message.timeZone = reader.string();
                        break;
                    }
                case 13: {
                        message.securityToken = reader.fixed64();
                        break;
                    }
                case 14: {
                        message.version = reader.int32();
                        break;
                    }
                case 15: {
                        if (!(message.otaCert && message.otaCert.length))
                            message.otaCert = [];
                        message.otaCert.push(reader.string());
                        break;
                    }
                case 20: {
                        message.fragment = reader.int32();
                        break;
                    }
                case 21: {
                        message.userName = reader.string();
                        break;
                    }
                case 22: {
                        message.userSerialNumber = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("checkin"))
                throw $util.ProtocolError("missing required 'checkin'", { instance: message });
            return message;
        };

        /**
         * Decodes an AndroidCheckinRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof checkin_proto.AndroidCheckinRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {checkin_proto.AndroidCheckinRequest} AndroidCheckinRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AndroidCheckinRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AndroidCheckinRequest message.
         * @function verify
         * @memberof checkin_proto.AndroidCheckinRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AndroidCheckinRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.imei != null && message.hasOwnProperty("imei"))
                if (!$util.isString(message.imei))
                    return "imei: string expected";
            if (message.meid != null && message.hasOwnProperty("meid"))
                if (!$util.isString(message.meid))
                    return "meid: string expected";
            if (message.macAddr != null && message.hasOwnProperty("macAddr")) {
                if (!Array.isArray(message.macAddr))
                    return "macAddr: array expected";
                for (var i = 0; i < message.macAddr.length; ++i)
                    if (!$util.isString(message.macAddr[i]))
                        return "macAddr: string[] expected";
            }
            if (message.macAddrType != null && message.hasOwnProperty("macAddrType")) {
                if (!Array.isArray(message.macAddrType))
                    return "macAddrType: array expected";
                for (var i = 0; i < message.macAddrType.length; ++i)
                    if (!$util.isString(message.macAddrType[i]))
                        return "macAddrType: string[] expected";
            }
            if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
                if (!$util.isString(message.serialNumber))
                    return "serialNumber: string expected";
            if (message.esn != null && message.hasOwnProperty("esn"))
                if (!$util.isString(message.esn))
                    return "esn: string expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.loggingId != null && message.hasOwnProperty("loggingId"))
                if (!$util.isInteger(message.loggingId) && !(message.loggingId && $util.isInteger(message.loggingId.low) && $util.isInteger(message.loggingId.high)))
                    return "loggingId: integer|Long expected";
            if (message.digest != null && message.hasOwnProperty("digest"))
                if (!$util.isString(message.digest))
                    return "digest: string expected";
            if (message.locale != null && message.hasOwnProperty("locale"))
                if (!$util.isString(message.locale))
                    return "locale: string expected";
            {
                var error = $root.checkin_proto.AndroidCheckinProto.verify(message.checkin);
                if (error)
                    return "checkin." + error;
            }
            if (message.desiredBuild != null && message.hasOwnProperty("desiredBuild"))
                if (!$util.isString(message.desiredBuild))
                    return "desiredBuild: string expected";
            if (message.marketCheckin != null && message.hasOwnProperty("marketCheckin"))
                if (!$util.isString(message.marketCheckin))
                    return "marketCheckin: string expected";
            if (message.accountCookie != null && message.hasOwnProperty("accountCookie")) {
                if (!Array.isArray(message.accountCookie))
                    return "accountCookie: array expected";
                for (var i = 0; i < message.accountCookie.length; ++i)
                    if (!$util.isString(message.accountCookie[i]))
                        return "accountCookie: string[] expected";
            }
            if (message.timeZone != null && message.hasOwnProperty("timeZone"))
                if (!$util.isString(message.timeZone))
                    return "timeZone: string expected";
            if (message.securityToken != null && message.hasOwnProperty("securityToken"))
                if (!$util.isInteger(message.securityToken) && !(message.securityToken && $util.isInteger(message.securityToken.low) && $util.isInteger(message.securityToken.high)))
                    return "securityToken: integer|Long expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.otaCert != null && message.hasOwnProperty("otaCert")) {
                if (!Array.isArray(message.otaCert))
                    return "otaCert: array expected";
                for (var i = 0; i < message.otaCert.length; ++i)
                    if (!$util.isString(message.otaCert[i]))
                        return "otaCert: string[] expected";
            }
            if (message.fragment != null && message.hasOwnProperty("fragment"))
                if (!$util.isInteger(message.fragment))
                    return "fragment: integer expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.userSerialNumber != null && message.hasOwnProperty("userSerialNumber"))
                if (!$util.isInteger(message.userSerialNumber))
                    return "userSerialNumber: integer expected";
            return null;
        };

        /**
         * Creates an AndroidCheckinRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof checkin_proto.AndroidCheckinRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {checkin_proto.AndroidCheckinRequest} AndroidCheckinRequest
         */
        AndroidCheckinRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.checkin_proto.AndroidCheckinRequest)
                return object;
            var message = new $root.checkin_proto.AndroidCheckinRequest();
            if (object.imei != null)
                message.imei = String(object.imei);
            if (object.meid != null)
                message.meid = String(object.meid);
            if (object.macAddr) {
                if (!Array.isArray(object.macAddr))
                    throw TypeError(".checkin_proto.AndroidCheckinRequest.macAddr: array expected");
                message.macAddr = [];
                for (var i = 0; i < object.macAddr.length; ++i)
                    message.macAddr[i] = String(object.macAddr[i]);
            }
            if (object.macAddrType) {
                if (!Array.isArray(object.macAddrType))
                    throw TypeError(".checkin_proto.AndroidCheckinRequest.macAddrType: array expected");
                message.macAddrType = [];
                for (var i = 0; i < object.macAddrType.length; ++i)
                    message.macAddrType[i] = String(object.macAddrType[i]);
            }
            if (object.serialNumber != null)
                message.serialNumber = String(object.serialNumber);
            if (object.esn != null)
                message.esn = String(object.esn);
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            if (object.loggingId != null)
                if ($util.Long)
                    (message.loggingId = $util.Long.fromValue(object.loggingId)).unsigned = false;
                else if (typeof object.loggingId === "string")
                    message.loggingId = parseInt(object.loggingId, 10);
                else if (typeof object.loggingId === "number")
                    message.loggingId = object.loggingId;
                else if (typeof object.loggingId === "object")
                    message.loggingId = new $util.LongBits(object.loggingId.low >>> 0, object.loggingId.high >>> 0).toNumber();
            if (object.digest != null)
                message.digest = String(object.digest);
            if (object.locale != null)
                message.locale = String(object.locale);
            if (object.checkin != null) {
                if (typeof object.checkin !== "object")
                    throw TypeError(".checkin_proto.AndroidCheckinRequest.checkin: object expected");
                message.checkin = $root.checkin_proto.AndroidCheckinProto.fromObject(object.checkin);
            }
            if (object.desiredBuild != null)
                message.desiredBuild = String(object.desiredBuild);
            if (object.marketCheckin != null)
                message.marketCheckin = String(object.marketCheckin);
            if (object.accountCookie) {
                if (!Array.isArray(object.accountCookie))
                    throw TypeError(".checkin_proto.AndroidCheckinRequest.accountCookie: array expected");
                message.accountCookie = [];
                for (var i = 0; i < object.accountCookie.length; ++i)
                    message.accountCookie[i] = String(object.accountCookie[i]);
            }
            if (object.timeZone != null)
                message.timeZone = String(object.timeZone);
            if (object.securityToken != null)
                if ($util.Long)
                    (message.securityToken = $util.Long.fromValue(object.securityToken)).unsigned = false;
                else if (typeof object.securityToken === "string")
                    message.securityToken = parseInt(object.securityToken, 10);
                else if (typeof object.securityToken === "number")
                    message.securityToken = object.securityToken;
                else if (typeof object.securityToken === "object")
                    message.securityToken = new $util.LongBits(object.securityToken.low >>> 0, object.securityToken.high >>> 0).toNumber();
            if (object.version != null)
                message.version = object.version | 0;
            if (object.otaCert) {
                if (!Array.isArray(object.otaCert))
                    throw TypeError(".checkin_proto.AndroidCheckinRequest.otaCert: array expected");
                message.otaCert = [];
                for (var i = 0; i < object.otaCert.length; ++i)
                    message.otaCert[i] = String(object.otaCert[i]);
            }
            if (object.fragment != null)
                message.fragment = object.fragment | 0;
            if (object.userName != null)
                message.userName = String(object.userName);
            if (object.userSerialNumber != null)
                message.userSerialNumber = object.userSerialNumber | 0;
            return message;
        };

        /**
         * Creates a plain object from an AndroidCheckinRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof checkin_proto.AndroidCheckinRequest
         * @static
         * @param {checkin_proto.AndroidCheckinRequest} message AndroidCheckinRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AndroidCheckinRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.macAddr = [];
                object.accountCookie = [];
                object.otaCert = [];
                object.macAddrType = [];
            }
            if (options.defaults) {
                object.imei = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.digest = "";
                object.checkin = null;
                object.desiredBuild = "";
                object.locale = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.loggingId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.loggingId = options.longs === String ? "0" : 0;
                object.marketCheckin = "";
                object.meid = "";
                object.timeZone = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.securityToken = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.securityToken = options.longs === String ? "0" : 0;
                object.version = 0;
                object.serialNumber = "";
                object.esn = "";
                object.fragment = 0;
                object.userName = "";
                object.userSerialNumber = 0;
            }
            if (message.imei != null && message.hasOwnProperty("imei"))
                object.imei = message.imei;
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.digest != null && message.hasOwnProperty("digest"))
                object.digest = message.digest;
            if (message.checkin != null && message.hasOwnProperty("checkin"))
                object.checkin = $root.checkin_proto.AndroidCheckinProto.toObject(message.checkin, options);
            if (message.desiredBuild != null && message.hasOwnProperty("desiredBuild"))
                object.desiredBuild = message.desiredBuild;
            if (message.locale != null && message.hasOwnProperty("locale"))
                object.locale = message.locale;
            if (message.loggingId != null && message.hasOwnProperty("loggingId"))
                if (typeof message.loggingId === "number")
                    object.loggingId = options.longs === String ? String(message.loggingId) : message.loggingId;
                else
                    object.loggingId = options.longs === String ? $util.Long.prototype.toString.call(message.loggingId) : options.longs === Number ? new $util.LongBits(message.loggingId.low >>> 0, message.loggingId.high >>> 0).toNumber() : message.loggingId;
            if (message.marketCheckin != null && message.hasOwnProperty("marketCheckin"))
                object.marketCheckin = message.marketCheckin;
            if (message.macAddr && message.macAddr.length) {
                object.macAddr = [];
                for (var j = 0; j < message.macAddr.length; ++j)
                    object.macAddr[j] = message.macAddr[j];
            }
            if (message.meid != null && message.hasOwnProperty("meid"))
                object.meid = message.meid;
            if (message.accountCookie && message.accountCookie.length) {
                object.accountCookie = [];
                for (var j = 0; j < message.accountCookie.length; ++j)
                    object.accountCookie[j] = message.accountCookie[j];
            }
            if (message.timeZone != null && message.hasOwnProperty("timeZone"))
                object.timeZone = message.timeZone;
            if (message.securityToken != null && message.hasOwnProperty("securityToken"))
                if (typeof message.securityToken === "number")
                    object.securityToken = options.longs === String ? String(message.securityToken) : message.securityToken;
                else
                    object.securityToken = options.longs === String ? $util.Long.prototype.toString.call(message.securityToken) : options.longs === Number ? new $util.LongBits(message.securityToken.low >>> 0, message.securityToken.high >>> 0).toNumber() : message.securityToken;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.otaCert && message.otaCert.length) {
                object.otaCert = [];
                for (var j = 0; j < message.otaCert.length; ++j)
                    object.otaCert[j] = message.otaCert[j];
            }
            if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
                object.serialNumber = message.serialNumber;
            if (message.esn != null && message.hasOwnProperty("esn"))
                object.esn = message.esn;
            if (message.macAddrType && message.macAddrType.length) {
                object.macAddrType = [];
                for (var j = 0; j < message.macAddrType.length; ++j)
                    object.macAddrType[j] = message.macAddrType[j];
            }
            if (message.fragment != null && message.hasOwnProperty("fragment"))
                object.fragment = message.fragment;
            if (message.userName != null && message.hasOwnProperty("userName"))
                object.userName = message.userName;
            if (message.userSerialNumber != null && message.hasOwnProperty("userSerialNumber"))
                object.userSerialNumber = message.userSerialNumber;
            return object;
        };

        /**
         * Converts this AndroidCheckinRequest to JSON.
         * @function toJSON
         * @memberof checkin_proto.AndroidCheckinRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AndroidCheckinRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AndroidCheckinRequest
         * @function getTypeUrl
         * @memberof checkin_proto.AndroidCheckinRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AndroidCheckinRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/checkin_proto.AndroidCheckinRequest";
        };

        return AndroidCheckinRequest;
    })();

    checkin_proto.AndroidCheckinResponse = (function() {

        /**
         * Properties of an AndroidCheckinResponse.
         * @memberof checkin_proto
         * @interface IAndroidCheckinResponse
         * @property {boolean} statsOk AndroidCheckinResponse statsOk
         * @property {Long|null} [timeMsec] AndroidCheckinResponse timeMsec
         * @property {string|null} [digest] AndroidCheckinResponse digest
         * @property {boolean|null} [settingsDiff] AndroidCheckinResponse settingsDiff
         * @property {Array.<string>|null} [deleteSetting] AndroidCheckinResponse deleteSetting
         * @property {Array.<checkin_proto.IGservicesSetting>|null} [setting] AndroidCheckinResponse setting
         * @property {boolean|null} [marketOk] AndroidCheckinResponse marketOk
         * @property {Long|null} [androidId] AndroidCheckinResponse androidId
         * @property {Long|null} [securityToken] AndroidCheckinResponse securityToken
         * @property {string|null} [versionInfo] AndroidCheckinResponse versionInfo
         */

        /**
         * Constructs a new AndroidCheckinResponse.
         * @memberof checkin_proto
         * @classdesc Represents an AndroidCheckinResponse.
         * @implements IAndroidCheckinResponse
         * @constructor
         * @param {checkin_proto.IAndroidCheckinResponse=} [properties] Properties to set
         */
        function AndroidCheckinResponse(properties) {
            this.deleteSetting = [];
            this.setting = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AndroidCheckinResponse statsOk.
         * @member {boolean} statsOk
         * @memberof checkin_proto.AndroidCheckinResponse
         * @instance
         */
        AndroidCheckinResponse.prototype.statsOk = false;

        /**
         * AndroidCheckinResponse timeMsec.
         * @member {Long} timeMsec
         * @memberof checkin_proto.AndroidCheckinResponse
         * @instance
         */
        AndroidCheckinResponse.prototype.timeMsec = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AndroidCheckinResponse digest.
         * @member {string} digest
         * @memberof checkin_proto.AndroidCheckinResponse
         * @instance
         */
        AndroidCheckinResponse.prototype.digest = "";

        /**
         * AndroidCheckinResponse settingsDiff.
         * @member {boolean} settingsDiff
         * @memberof checkin_proto.AndroidCheckinResponse
         * @instance
         */
        AndroidCheckinResponse.prototype.settingsDiff = false;

        /**
         * AndroidCheckinResponse deleteSetting.
         * @member {Array.<string>} deleteSetting
         * @memberof checkin_proto.AndroidCheckinResponse
         * @instance
         */
        AndroidCheckinResponse.prototype.deleteSetting = $util.emptyArray;

        /**
         * AndroidCheckinResponse setting.
         * @member {Array.<checkin_proto.IGservicesSetting>} setting
         * @memberof checkin_proto.AndroidCheckinResponse
         * @instance
         */
        AndroidCheckinResponse.prototype.setting = $util.emptyArray;

        /**
         * AndroidCheckinResponse marketOk.
         * @member {boolean} marketOk
         * @memberof checkin_proto.AndroidCheckinResponse
         * @instance
         */
        AndroidCheckinResponse.prototype.marketOk = false;

        /**
         * AndroidCheckinResponse androidId.
         * @member {Long} androidId
         * @memberof checkin_proto.AndroidCheckinResponse
         * @instance
         */
        AndroidCheckinResponse.prototype.androidId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AndroidCheckinResponse securityToken.
         * @member {Long} securityToken
         * @memberof checkin_proto.AndroidCheckinResponse
         * @instance
         */
        AndroidCheckinResponse.prototype.securityToken = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AndroidCheckinResponse versionInfo.
         * @member {string} versionInfo
         * @memberof checkin_proto.AndroidCheckinResponse
         * @instance
         */
        AndroidCheckinResponse.prototype.versionInfo = "";

        /**
         * Creates a new AndroidCheckinResponse instance using the specified properties.
         * @function create
         * @memberof checkin_proto.AndroidCheckinResponse
         * @static
         * @param {checkin_proto.IAndroidCheckinResponse=} [properties] Properties to set
         * @returns {checkin_proto.AndroidCheckinResponse} AndroidCheckinResponse instance
         */
        AndroidCheckinResponse.create = function create(properties) {
            return new AndroidCheckinResponse(properties);
        };

        /**
         * Encodes the specified AndroidCheckinResponse message. Does not implicitly {@link checkin_proto.AndroidCheckinResponse.verify|verify} messages.
         * @function encode
         * @memberof checkin_proto.AndroidCheckinResponse
         * @static
         * @param {checkin_proto.IAndroidCheckinResponse} message AndroidCheckinResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AndroidCheckinResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.statsOk);
            if (message.timeMsec != null && Object.hasOwnProperty.call(message, "timeMsec"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.timeMsec);
            if (message.digest != null && Object.hasOwnProperty.call(message, "digest"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.digest);
            if (message.setting != null && message.setting.length)
                for (var i = 0; i < message.setting.length; ++i)
                    $root.checkin_proto.GservicesSetting.encode(message.setting[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.marketOk != null && Object.hasOwnProperty.call(message, "marketOk"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.marketOk);
            if (message.androidId != null && Object.hasOwnProperty.call(message, "androidId"))
                writer.uint32(/* id 7, wireType 1 =*/57).fixed64(message.androidId);
            if (message.securityToken != null && Object.hasOwnProperty.call(message, "securityToken"))
                writer.uint32(/* id 8, wireType 1 =*/65).fixed64(message.securityToken);
            if (message.settingsDiff != null && Object.hasOwnProperty.call(message, "settingsDiff"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.settingsDiff);
            if (message.deleteSetting != null && message.deleteSetting.length)
                for (var i = 0; i < message.deleteSetting.length; ++i)
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.deleteSetting[i]);
            if (message.versionInfo != null && Object.hasOwnProperty.call(message, "versionInfo"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.versionInfo);
            return writer;
        };

        /**
         * Encodes the specified AndroidCheckinResponse message, length delimited. Does not implicitly {@link checkin_proto.AndroidCheckinResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof checkin_proto.AndroidCheckinResponse
         * @static
         * @param {checkin_proto.IAndroidCheckinResponse} message AndroidCheckinResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AndroidCheckinResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AndroidCheckinResponse message from the specified reader or buffer.
         * @function decode
         * @memberof checkin_proto.AndroidCheckinResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {checkin_proto.AndroidCheckinResponse} AndroidCheckinResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AndroidCheckinResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.checkin_proto.AndroidCheckinResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.statsOk = reader.bool();
                        break;
                    }
                case 3: {
                        message.timeMsec = reader.int64();
                        break;
                    }
                case 4: {
                        message.digest = reader.string();
                        break;
                    }
                case 9: {
                        message.settingsDiff = reader.bool();
                        break;
                    }
                case 10: {
                        if (!(message.deleteSetting && message.deleteSetting.length))
                            message.deleteSetting = [];
                        message.deleteSetting.push(reader.string());
                        break;
                    }
                case 5: {
                        if (!(message.setting && message.setting.length))
                            message.setting = [];
                        message.setting.push($root.checkin_proto.GservicesSetting.decode(reader, reader.uint32()));
                        break;
                    }
                case 6: {
                        message.marketOk = reader.bool();
                        break;
                    }
                case 7: {
                        message.androidId = reader.fixed64();
                        break;
                    }
                case 8: {
                        message.securityToken = reader.fixed64();
                        break;
                    }
                case 11: {
                        message.versionInfo = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("statsOk"))
                throw $util.ProtocolError("missing required 'statsOk'", { instance: message });
            return message;
        };

        /**
         * Decodes an AndroidCheckinResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof checkin_proto.AndroidCheckinResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {checkin_proto.AndroidCheckinResponse} AndroidCheckinResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AndroidCheckinResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AndroidCheckinResponse message.
         * @function verify
         * @memberof checkin_proto.AndroidCheckinResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AndroidCheckinResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.statsOk !== "boolean")
                return "statsOk: boolean expected";
            if (message.timeMsec != null && message.hasOwnProperty("timeMsec"))
                if (!$util.isInteger(message.timeMsec) && !(message.timeMsec && $util.isInteger(message.timeMsec.low) && $util.isInteger(message.timeMsec.high)))
                    return "timeMsec: integer|Long expected";
            if (message.digest != null && message.hasOwnProperty("digest"))
                if (!$util.isString(message.digest))
                    return "digest: string expected";
            if (message.settingsDiff != null && message.hasOwnProperty("settingsDiff"))
                if (typeof message.settingsDiff !== "boolean")
                    return "settingsDiff: boolean expected";
            if (message.deleteSetting != null && message.hasOwnProperty("deleteSetting")) {
                if (!Array.isArray(message.deleteSetting))
                    return "deleteSetting: array expected";
                for (var i = 0; i < message.deleteSetting.length; ++i)
                    if (!$util.isString(message.deleteSetting[i]))
                        return "deleteSetting: string[] expected";
            }
            if (message.setting != null && message.hasOwnProperty("setting")) {
                if (!Array.isArray(message.setting))
                    return "setting: array expected";
                for (var i = 0; i < message.setting.length; ++i) {
                    var error = $root.checkin_proto.GservicesSetting.verify(message.setting[i]);
                    if (error)
                        return "setting." + error;
                }
            }
            if (message.marketOk != null && message.hasOwnProperty("marketOk"))
                if (typeof message.marketOk !== "boolean")
                    return "marketOk: boolean expected";
            if (message.androidId != null && message.hasOwnProperty("androidId"))
                if (!$util.isInteger(message.androidId) && !(message.androidId && $util.isInteger(message.androidId.low) && $util.isInteger(message.androidId.high)))
                    return "androidId: integer|Long expected";
            if (message.securityToken != null && message.hasOwnProperty("securityToken"))
                if (!$util.isInteger(message.securityToken) && !(message.securityToken && $util.isInteger(message.securityToken.low) && $util.isInteger(message.securityToken.high)))
                    return "securityToken: integer|Long expected";
            if (message.versionInfo != null && message.hasOwnProperty("versionInfo"))
                if (!$util.isString(message.versionInfo))
                    return "versionInfo: string expected";
            return null;
        };

        /**
         * Creates an AndroidCheckinResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof checkin_proto.AndroidCheckinResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {checkin_proto.AndroidCheckinResponse} AndroidCheckinResponse
         */
        AndroidCheckinResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.checkin_proto.AndroidCheckinResponse)
                return object;
            var message = new $root.checkin_proto.AndroidCheckinResponse();
            if (object.statsOk != null)
                message.statsOk = Boolean(object.statsOk);
            if (object.timeMsec != null)
                if ($util.Long)
                    (message.timeMsec = $util.Long.fromValue(object.timeMsec)).unsigned = false;
                else if (typeof object.timeMsec === "string")
                    message.timeMsec = parseInt(object.timeMsec, 10);
                else if (typeof object.timeMsec === "number")
                    message.timeMsec = object.timeMsec;
                else if (typeof object.timeMsec === "object")
                    message.timeMsec = new $util.LongBits(object.timeMsec.low >>> 0, object.timeMsec.high >>> 0).toNumber();
            if (object.digest != null)
                message.digest = String(object.digest);
            if (object.settingsDiff != null)
                message.settingsDiff = Boolean(object.settingsDiff);
            if (object.deleteSetting) {
                if (!Array.isArray(object.deleteSetting))
                    throw TypeError(".checkin_proto.AndroidCheckinResponse.deleteSetting: array expected");
                message.deleteSetting = [];
                for (var i = 0; i < object.deleteSetting.length; ++i)
                    message.deleteSetting[i] = String(object.deleteSetting[i]);
            }
            if (object.setting) {
                if (!Array.isArray(object.setting))
                    throw TypeError(".checkin_proto.AndroidCheckinResponse.setting: array expected");
                message.setting = [];
                for (var i = 0; i < object.setting.length; ++i) {
                    if (typeof object.setting[i] !== "object")
                        throw TypeError(".checkin_proto.AndroidCheckinResponse.setting: object expected");
                    message.setting[i] = $root.checkin_proto.GservicesSetting.fromObject(object.setting[i]);
                }
            }
            if (object.marketOk != null)
                message.marketOk = Boolean(object.marketOk);
            if (object.androidId != null)
                if ($util.Long)
                    (message.androidId = $util.Long.fromValue(object.androidId)).unsigned = false;
                else if (typeof object.androidId === "string")
                    message.androidId = parseInt(object.androidId, 10);
                else if (typeof object.androidId === "number")
                    message.androidId = object.androidId;
                else if (typeof object.androidId === "object")
                    message.androidId = new $util.LongBits(object.androidId.low >>> 0, object.androidId.high >>> 0).toNumber();
            if (object.securityToken != null)
                if ($util.Long)
                    (message.securityToken = $util.Long.fromValue(object.securityToken)).unsigned = false;
                else if (typeof object.securityToken === "string")
                    message.securityToken = parseInt(object.securityToken, 10);
                else if (typeof object.securityToken === "number")
                    message.securityToken = object.securityToken;
                else if (typeof object.securityToken === "object")
                    message.securityToken = new $util.LongBits(object.securityToken.low >>> 0, object.securityToken.high >>> 0).toNumber();
            if (object.versionInfo != null)
                message.versionInfo = String(object.versionInfo);
            return message;
        };

        /**
         * Creates a plain object from an AndroidCheckinResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof checkin_proto.AndroidCheckinResponse
         * @static
         * @param {checkin_proto.AndroidCheckinResponse} message AndroidCheckinResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AndroidCheckinResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.setting = [];
                object.deleteSetting = [];
            }
            if (options.defaults) {
                object.statsOk = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timeMsec = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timeMsec = options.longs === String ? "0" : 0;
                object.digest = "";
                object.marketOk = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.androidId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.androidId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.securityToken = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.securityToken = options.longs === String ? "0" : 0;
                object.settingsDiff = false;
                object.versionInfo = "";
            }
            if (message.statsOk != null && message.hasOwnProperty("statsOk"))
                object.statsOk = message.statsOk;
            if (message.timeMsec != null && message.hasOwnProperty("timeMsec"))
                if (typeof message.timeMsec === "number")
                    object.timeMsec = options.longs === String ? String(message.timeMsec) : message.timeMsec;
                else
                    object.timeMsec = options.longs === String ? $util.Long.prototype.toString.call(message.timeMsec) : options.longs === Number ? new $util.LongBits(message.timeMsec.low >>> 0, message.timeMsec.high >>> 0).toNumber() : message.timeMsec;
            if (message.digest != null && message.hasOwnProperty("digest"))
                object.digest = message.digest;
            if (message.setting && message.setting.length) {
                object.setting = [];
                for (var j = 0; j < message.setting.length; ++j)
                    object.setting[j] = $root.checkin_proto.GservicesSetting.toObject(message.setting[j], options);
            }
            if (message.marketOk != null && message.hasOwnProperty("marketOk"))
                object.marketOk = message.marketOk;
            if (message.androidId != null && message.hasOwnProperty("androidId"))
                if (typeof message.androidId === "number")
                    object.androidId = options.longs === String ? String(message.androidId) : message.androidId;
                else
                    object.androidId = options.longs === String ? $util.Long.prototype.toString.call(message.androidId) : options.longs === Number ? new $util.LongBits(message.androidId.low >>> 0, message.androidId.high >>> 0).toNumber() : message.androidId;
            if (message.securityToken != null && message.hasOwnProperty("securityToken"))
                if (typeof message.securityToken === "number")
                    object.securityToken = options.longs === String ? String(message.securityToken) : message.securityToken;
                else
                    object.securityToken = options.longs === String ? $util.Long.prototype.toString.call(message.securityToken) : options.longs === Number ? new $util.LongBits(message.securityToken.low >>> 0, message.securityToken.high >>> 0).toNumber() : message.securityToken;
            if (message.settingsDiff != null && message.hasOwnProperty("settingsDiff"))
                object.settingsDiff = message.settingsDiff;
            if (message.deleteSetting && message.deleteSetting.length) {
                object.deleteSetting = [];
                for (var j = 0; j < message.deleteSetting.length; ++j)
                    object.deleteSetting[j] = message.deleteSetting[j];
            }
            if (message.versionInfo != null && message.hasOwnProperty("versionInfo"))
                object.versionInfo = message.versionInfo;
            return object;
        };

        /**
         * Converts this AndroidCheckinResponse to JSON.
         * @function toJSON
         * @memberof checkin_proto.AndroidCheckinResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AndroidCheckinResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AndroidCheckinResponse
         * @function getTypeUrl
         * @memberof checkin_proto.AndroidCheckinResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AndroidCheckinResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/checkin_proto.AndroidCheckinResponse";
        };

        return AndroidCheckinResponse;
    })();

    return checkin_proto;
})();

$root.mcs_proto = (function() {

    /**
     * Namespace mcs_proto.
     * @exports mcs_proto
     * @namespace
     */
    var mcs_proto = {};

    mcs_proto.HeartbeatPing = (function() {

        /**
         * Properties of a HeartbeatPing.
         * @memberof mcs_proto
         * @interface IHeartbeatPing
         * @property {number|null} [streamId] HeartbeatPing streamId
         * @property {number|null} [lastStreamIdReceived] HeartbeatPing lastStreamIdReceived
         * @property {Long|null} [status] HeartbeatPing status
         */

        /**
         * Constructs a new HeartbeatPing.
         * @memberof mcs_proto
         * @classdesc TAG: 0
         * @implements IHeartbeatPing
         * @constructor
         * @param {mcs_proto.IHeartbeatPing=} [properties] Properties to set
         */
        function HeartbeatPing(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeartbeatPing streamId.
         * @member {number} streamId
         * @memberof mcs_proto.HeartbeatPing
         * @instance
         */
        HeartbeatPing.prototype.streamId = 0;

        /**
         * HeartbeatPing lastStreamIdReceived.
         * @member {number} lastStreamIdReceived
         * @memberof mcs_proto.HeartbeatPing
         * @instance
         */
        HeartbeatPing.prototype.lastStreamIdReceived = 0;

        /**
         * HeartbeatPing status.
         * @member {Long} status
         * @memberof mcs_proto.HeartbeatPing
         * @instance
         */
        HeartbeatPing.prototype.status = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new HeartbeatPing instance using the specified properties.
         * @function create
         * @memberof mcs_proto.HeartbeatPing
         * @static
         * @param {mcs_proto.IHeartbeatPing=} [properties] Properties to set
         * @returns {mcs_proto.HeartbeatPing} HeartbeatPing instance
         */
        HeartbeatPing.create = function create(properties) {
            return new HeartbeatPing(properties);
        };

        /**
         * Encodes the specified HeartbeatPing message. Does not implicitly {@link mcs_proto.HeartbeatPing.verify|verify} messages.
         * @function encode
         * @memberof mcs_proto.HeartbeatPing
         * @static
         * @param {mcs_proto.IHeartbeatPing} message HeartbeatPing message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartbeatPing.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.streamId != null && Object.hasOwnProperty.call(message, "streamId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.streamId);
            if (message.lastStreamIdReceived != null && Object.hasOwnProperty.call(message, "lastStreamIdReceived"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.lastStreamIdReceived);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.status);
            return writer;
        };

        /**
         * Encodes the specified HeartbeatPing message, length delimited. Does not implicitly {@link mcs_proto.HeartbeatPing.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mcs_proto.HeartbeatPing
         * @static
         * @param {mcs_proto.IHeartbeatPing} message HeartbeatPing message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartbeatPing.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartbeatPing message from the specified reader or buffer.
         * @function decode
         * @memberof mcs_proto.HeartbeatPing
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mcs_proto.HeartbeatPing} HeartbeatPing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartbeatPing.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mcs_proto.HeartbeatPing();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.streamId = reader.int32();
                        break;
                    }
                case 2: {
                        message.lastStreamIdReceived = reader.int32();
                        break;
                    }
                case 3: {
                        message.status = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeartbeatPing message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mcs_proto.HeartbeatPing
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mcs_proto.HeartbeatPing} HeartbeatPing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartbeatPing.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartbeatPing message.
         * @function verify
         * @memberof mcs_proto.HeartbeatPing
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartbeatPing.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.streamId != null && message.hasOwnProperty("streamId"))
                if (!$util.isInteger(message.streamId))
                    return "streamId: integer expected";
            if (message.lastStreamIdReceived != null && message.hasOwnProperty("lastStreamIdReceived"))
                if (!$util.isInteger(message.lastStreamIdReceived))
                    return "lastStreamIdReceived: integer expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status) && !(message.status && $util.isInteger(message.status.low) && $util.isInteger(message.status.high)))
                    return "status: integer|Long expected";
            return null;
        };

        /**
         * Creates a HeartbeatPing message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mcs_proto.HeartbeatPing
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mcs_proto.HeartbeatPing} HeartbeatPing
         */
        HeartbeatPing.fromObject = function fromObject(object) {
            if (object instanceof $root.mcs_proto.HeartbeatPing)
                return object;
            var message = new $root.mcs_proto.HeartbeatPing();
            if (object.streamId != null)
                message.streamId = object.streamId | 0;
            if (object.lastStreamIdReceived != null)
                message.lastStreamIdReceived = object.lastStreamIdReceived | 0;
            if (object.status != null)
                if ($util.Long)
                    (message.status = $util.Long.fromValue(object.status)).unsigned = false;
                else if (typeof object.status === "string")
                    message.status = parseInt(object.status, 10);
                else if (typeof object.status === "number")
                    message.status = object.status;
                else if (typeof object.status === "object")
                    message.status = new $util.LongBits(object.status.low >>> 0, object.status.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a HeartbeatPing message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mcs_proto.HeartbeatPing
         * @static
         * @param {mcs_proto.HeartbeatPing} message HeartbeatPing
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartbeatPing.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.streamId = 0;
                object.lastStreamIdReceived = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.status = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.status = options.longs === String ? "0" : 0;
            }
            if (message.streamId != null && message.hasOwnProperty("streamId"))
                object.streamId = message.streamId;
            if (message.lastStreamIdReceived != null && message.hasOwnProperty("lastStreamIdReceived"))
                object.lastStreamIdReceived = message.lastStreamIdReceived;
            if (message.status != null && message.hasOwnProperty("status"))
                if (typeof message.status === "number")
                    object.status = options.longs === String ? String(message.status) : message.status;
                else
                    object.status = options.longs === String ? $util.Long.prototype.toString.call(message.status) : options.longs === Number ? new $util.LongBits(message.status.low >>> 0, message.status.high >>> 0).toNumber() : message.status;
            return object;
        };

        /**
         * Converts this HeartbeatPing to JSON.
         * @function toJSON
         * @memberof mcs_proto.HeartbeatPing
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartbeatPing.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HeartbeatPing
         * @function getTypeUrl
         * @memberof mcs_proto.HeartbeatPing
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HeartbeatPing.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mcs_proto.HeartbeatPing";
        };

        return HeartbeatPing;
    })();

    mcs_proto.HeartbeatAck = (function() {

        /**
         * Properties of a HeartbeatAck.
         * @memberof mcs_proto
         * @interface IHeartbeatAck
         * @property {number|null} [streamId] HeartbeatAck streamId
         * @property {number|null} [lastStreamIdReceived] HeartbeatAck lastStreamIdReceived
         * @property {Long|null} [status] HeartbeatAck status
         */

        /**
         * Constructs a new HeartbeatAck.
         * @memberof mcs_proto
         * @classdesc TAG: 1
         * @implements IHeartbeatAck
         * @constructor
         * @param {mcs_proto.IHeartbeatAck=} [properties] Properties to set
         */
        function HeartbeatAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeartbeatAck streamId.
         * @member {number} streamId
         * @memberof mcs_proto.HeartbeatAck
         * @instance
         */
        HeartbeatAck.prototype.streamId = 0;

        /**
         * HeartbeatAck lastStreamIdReceived.
         * @member {number} lastStreamIdReceived
         * @memberof mcs_proto.HeartbeatAck
         * @instance
         */
        HeartbeatAck.prototype.lastStreamIdReceived = 0;

        /**
         * HeartbeatAck status.
         * @member {Long} status
         * @memberof mcs_proto.HeartbeatAck
         * @instance
         */
        HeartbeatAck.prototype.status = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new HeartbeatAck instance using the specified properties.
         * @function create
         * @memberof mcs_proto.HeartbeatAck
         * @static
         * @param {mcs_proto.IHeartbeatAck=} [properties] Properties to set
         * @returns {mcs_proto.HeartbeatAck} HeartbeatAck instance
         */
        HeartbeatAck.create = function create(properties) {
            return new HeartbeatAck(properties);
        };

        /**
         * Encodes the specified HeartbeatAck message. Does not implicitly {@link mcs_proto.HeartbeatAck.verify|verify} messages.
         * @function encode
         * @memberof mcs_proto.HeartbeatAck
         * @static
         * @param {mcs_proto.IHeartbeatAck} message HeartbeatAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartbeatAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.streamId != null && Object.hasOwnProperty.call(message, "streamId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.streamId);
            if (message.lastStreamIdReceived != null && Object.hasOwnProperty.call(message, "lastStreamIdReceived"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.lastStreamIdReceived);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.status);
            return writer;
        };

        /**
         * Encodes the specified HeartbeatAck message, length delimited. Does not implicitly {@link mcs_proto.HeartbeatAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mcs_proto.HeartbeatAck
         * @static
         * @param {mcs_proto.IHeartbeatAck} message HeartbeatAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartbeatAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartbeatAck message from the specified reader or buffer.
         * @function decode
         * @memberof mcs_proto.HeartbeatAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mcs_proto.HeartbeatAck} HeartbeatAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartbeatAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mcs_proto.HeartbeatAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.streamId = reader.int32();
                        break;
                    }
                case 2: {
                        message.lastStreamIdReceived = reader.int32();
                        break;
                    }
                case 3: {
                        message.status = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeartbeatAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mcs_proto.HeartbeatAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mcs_proto.HeartbeatAck} HeartbeatAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartbeatAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartbeatAck message.
         * @function verify
         * @memberof mcs_proto.HeartbeatAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartbeatAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.streamId != null && message.hasOwnProperty("streamId"))
                if (!$util.isInteger(message.streamId))
                    return "streamId: integer expected";
            if (message.lastStreamIdReceived != null && message.hasOwnProperty("lastStreamIdReceived"))
                if (!$util.isInteger(message.lastStreamIdReceived))
                    return "lastStreamIdReceived: integer expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status) && !(message.status && $util.isInteger(message.status.low) && $util.isInteger(message.status.high)))
                    return "status: integer|Long expected";
            return null;
        };

        /**
         * Creates a HeartbeatAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mcs_proto.HeartbeatAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mcs_proto.HeartbeatAck} HeartbeatAck
         */
        HeartbeatAck.fromObject = function fromObject(object) {
            if (object instanceof $root.mcs_proto.HeartbeatAck)
                return object;
            var message = new $root.mcs_proto.HeartbeatAck();
            if (object.streamId != null)
                message.streamId = object.streamId | 0;
            if (object.lastStreamIdReceived != null)
                message.lastStreamIdReceived = object.lastStreamIdReceived | 0;
            if (object.status != null)
                if ($util.Long)
                    (message.status = $util.Long.fromValue(object.status)).unsigned = false;
                else if (typeof object.status === "string")
                    message.status = parseInt(object.status, 10);
                else if (typeof object.status === "number")
                    message.status = object.status;
                else if (typeof object.status === "object")
                    message.status = new $util.LongBits(object.status.low >>> 0, object.status.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a HeartbeatAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mcs_proto.HeartbeatAck
         * @static
         * @param {mcs_proto.HeartbeatAck} message HeartbeatAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartbeatAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.streamId = 0;
                object.lastStreamIdReceived = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.status = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.status = options.longs === String ? "0" : 0;
            }
            if (message.streamId != null && message.hasOwnProperty("streamId"))
                object.streamId = message.streamId;
            if (message.lastStreamIdReceived != null && message.hasOwnProperty("lastStreamIdReceived"))
                object.lastStreamIdReceived = message.lastStreamIdReceived;
            if (message.status != null && message.hasOwnProperty("status"))
                if (typeof message.status === "number")
                    object.status = options.longs === String ? String(message.status) : message.status;
                else
                    object.status = options.longs === String ? $util.Long.prototype.toString.call(message.status) : options.longs === Number ? new $util.LongBits(message.status.low >>> 0, message.status.high >>> 0).toNumber() : message.status;
            return object;
        };

        /**
         * Converts this HeartbeatAck to JSON.
         * @function toJSON
         * @memberof mcs_proto.HeartbeatAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartbeatAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HeartbeatAck
         * @function getTypeUrl
         * @memberof mcs_proto.HeartbeatAck
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HeartbeatAck.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mcs_proto.HeartbeatAck";
        };

        return HeartbeatAck;
    })();

    mcs_proto.ErrorInfo = (function() {

        /**
         * Properties of an ErrorInfo.
         * @memberof mcs_proto
         * @interface IErrorInfo
         * @property {number} code ErrorInfo code
         * @property {string|null} [message] ErrorInfo message
         * @property {string|null} [type] ErrorInfo type
         * @property {mcs_proto.IExtension|null} [extension] ErrorInfo extension
         */

        /**
         * Constructs a new ErrorInfo.
         * @memberof mcs_proto
         * @classdesc Represents an ErrorInfo.
         * @implements IErrorInfo
         * @constructor
         * @param {mcs_proto.IErrorInfo=} [properties] Properties to set
         */
        function ErrorInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ErrorInfo code.
         * @member {number} code
         * @memberof mcs_proto.ErrorInfo
         * @instance
         */
        ErrorInfo.prototype.code = 0;

        /**
         * ErrorInfo message.
         * @member {string} message
         * @memberof mcs_proto.ErrorInfo
         * @instance
         */
        ErrorInfo.prototype.message = "";

        /**
         * ErrorInfo type.
         * @member {string} type
         * @memberof mcs_proto.ErrorInfo
         * @instance
         */
        ErrorInfo.prototype.type = "";

        /**
         * ErrorInfo extension.
         * @member {mcs_proto.IExtension|null|undefined} extension
         * @memberof mcs_proto.ErrorInfo
         * @instance
         */
        ErrorInfo.prototype.extension = null;

        /**
         * Creates a new ErrorInfo instance using the specified properties.
         * @function create
         * @memberof mcs_proto.ErrorInfo
         * @static
         * @param {mcs_proto.IErrorInfo=} [properties] Properties to set
         * @returns {mcs_proto.ErrorInfo} ErrorInfo instance
         */
        ErrorInfo.create = function create(properties) {
            return new ErrorInfo(properties);
        };

        /**
         * Encodes the specified ErrorInfo message. Does not implicitly {@link mcs_proto.ErrorInfo.verify|verify} messages.
         * @function encode
         * @memberof mcs_proto.ErrorInfo
         * @static
         * @param {mcs_proto.IErrorInfo} message ErrorInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ErrorInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.type);
            if (message.extension != null && Object.hasOwnProperty.call(message, "extension"))
                $root.mcs_proto.Extension.encode(message.extension, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ErrorInfo message, length delimited. Does not implicitly {@link mcs_proto.ErrorInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mcs_proto.ErrorInfo
         * @static
         * @param {mcs_proto.IErrorInfo} message ErrorInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ErrorInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ErrorInfo message from the specified reader or buffer.
         * @function decode
         * @memberof mcs_proto.ErrorInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mcs_proto.ErrorInfo} ErrorInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ErrorInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mcs_proto.ErrorInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.message = reader.string();
                        break;
                    }
                case 3: {
                        message.type = reader.string();
                        break;
                    }
                case 4: {
                        message.extension = $root.mcs_proto.Extension.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            return message;
        };

        /**
         * Decodes an ErrorInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mcs_proto.ErrorInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mcs_proto.ErrorInfo} ErrorInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ErrorInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ErrorInfo message.
         * @function verify
         * @memberof mcs_proto.ErrorInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ErrorInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.code))
                return "code: integer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.extension != null && message.hasOwnProperty("extension")) {
                var error = $root.mcs_proto.Extension.verify(message.extension);
                if (error)
                    return "extension." + error;
            }
            return null;
        };

        /**
         * Creates an ErrorInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mcs_proto.ErrorInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mcs_proto.ErrorInfo} ErrorInfo
         */
        ErrorInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.mcs_proto.ErrorInfo)
                return object;
            var message = new $root.mcs_proto.ErrorInfo();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.message != null)
                message.message = String(object.message);
            if (object.type != null)
                message.type = String(object.type);
            if (object.extension != null) {
                if (typeof object.extension !== "object")
                    throw TypeError(".mcs_proto.ErrorInfo.extension: object expected");
                message.extension = $root.mcs_proto.Extension.fromObject(object.extension);
            }
            return message;
        };

        /**
         * Creates a plain object from an ErrorInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mcs_proto.ErrorInfo
         * @static
         * @param {mcs_proto.ErrorInfo} message ErrorInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ErrorInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.message = "";
                object.type = "";
                object.extension = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.extension != null && message.hasOwnProperty("extension"))
                object.extension = $root.mcs_proto.Extension.toObject(message.extension, options);
            return object;
        };

        /**
         * Converts this ErrorInfo to JSON.
         * @function toJSON
         * @memberof mcs_proto.ErrorInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ErrorInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ErrorInfo
         * @function getTypeUrl
         * @memberof mcs_proto.ErrorInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ErrorInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mcs_proto.ErrorInfo";
        };

        return ErrorInfo;
    })();

    mcs_proto.Setting = (function() {

        /**
         * Properties of a Setting.
         * @memberof mcs_proto
         * @interface ISetting
         * @property {string} name Setting name
         * @property {string} value Setting value
         */

        /**
         * Constructs a new Setting.
         * @memberof mcs_proto
         * @classdesc Represents a Setting.
         * @implements ISetting
         * @constructor
         * @param {mcs_proto.ISetting=} [properties] Properties to set
         */
        function Setting(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Setting name.
         * @member {string} name
         * @memberof mcs_proto.Setting
         * @instance
         */
        Setting.prototype.name = "";

        /**
         * Setting value.
         * @member {string} value
         * @memberof mcs_proto.Setting
         * @instance
         */
        Setting.prototype.value = "";

        /**
         * Creates a new Setting instance using the specified properties.
         * @function create
         * @memberof mcs_proto.Setting
         * @static
         * @param {mcs_proto.ISetting=} [properties] Properties to set
         * @returns {mcs_proto.Setting} Setting instance
         */
        Setting.create = function create(properties) {
            return new Setting(properties);
        };

        /**
         * Encodes the specified Setting message. Does not implicitly {@link mcs_proto.Setting.verify|verify} messages.
         * @function encode
         * @memberof mcs_proto.Setting
         * @static
         * @param {mcs_proto.ISetting} message Setting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Setting.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
            return writer;
        };

        /**
         * Encodes the specified Setting message, length delimited. Does not implicitly {@link mcs_proto.Setting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mcs_proto.Setting
         * @static
         * @param {mcs_proto.ISetting} message Setting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Setting.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Setting message from the specified reader or buffer.
         * @function decode
         * @memberof mcs_proto.Setting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mcs_proto.Setting} Setting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Setting.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mcs_proto.Setting();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.value = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("value"))
                throw $util.ProtocolError("missing required 'value'", { instance: message });
            return message;
        };

        /**
         * Decodes a Setting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mcs_proto.Setting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mcs_proto.Setting} Setting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Setting.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Setting message.
         * @function verify
         * @memberof mcs_proto.Setting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Setting.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isString(message.value))
                return "value: string expected";
            return null;
        };

        /**
         * Creates a Setting message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mcs_proto.Setting
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mcs_proto.Setting} Setting
         */
        Setting.fromObject = function fromObject(object) {
            if (object instanceof $root.mcs_proto.Setting)
                return object;
            var message = new $root.mcs_proto.Setting();
            if (object.name != null)
                message.name = String(object.name);
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };

        /**
         * Creates a plain object from a Setting message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mcs_proto.Setting
         * @static
         * @param {mcs_proto.Setting} message Setting
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Setting.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.value = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this Setting to JSON.
         * @function toJSON
         * @memberof mcs_proto.Setting
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Setting.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Setting
         * @function getTypeUrl
         * @memberof mcs_proto.Setting
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Setting.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mcs_proto.Setting";
        };

        return Setting;
    })();

    mcs_proto.HeartbeatStat = (function() {

        /**
         * Properties of a HeartbeatStat.
         * @memberof mcs_proto
         * @interface IHeartbeatStat
         * @property {string} ip HeartbeatStat ip
         * @property {boolean} timeout HeartbeatStat timeout
         * @property {number} intervalMs HeartbeatStat intervalMs
         */

        /**
         * Constructs a new HeartbeatStat.
         * @memberof mcs_proto
         * @classdesc Represents a HeartbeatStat.
         * @implements IHeartbeatStat
         * @constructor
         * @param {mcs_proto.IHeartbeatStat=} [properties] Properties to set
         */
        function HeartbeatStat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeartbeatStat ip.
         * @member {string} ip
         * @memberof mcs_proto.HeartbeatStat
         * @instance
         */
        HeartbeatStat.prototype.ip = "";

        /**
         * HeartbeatStat timeout.
         * @member {boolean} timeout
         * @memberof mcs_proto.HeartbeatStat
         * @instance
         */
        HeartbeatStat.prototype.timeout = false;

        /**
         * HeartbeatStat intervalMs.
         * @member {number} intervalMs
         * @memberof mcs_proto.HeartbeatStat
         * @instance
         */
        HeartbeatStat.prototype.intervalMs = 0;

        /**
         * Creates a new HeartbeatStat instance using the specified properties.
         * @function create
         * @memberof mcs_proto.HeartbeatStat
         * @static
         * @param {mcs_proto.IHeartbeatStat=} [properties] Properties to set
         * @returns {mcs_proto.HeartbeatStat} HeartbeatStat instance
         */
        HeartbeatStat.create = function create(properties) {
            return new HeartbeatStat(properties);
        };

        /**
         * Encodes the specified HeartbeatStat message. Does not implicitly {@link mcs_proto.HeartbeatStat.verify|verify} messages.
         * @function encode
         * @memberof mcs_proto.HeartbeatStat
         * @static
         * @param {mcs_proto.IHeartbeatStat} message HeartbeatStat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartbeatStat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ip);
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.timeout);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.intervalMs);
            return writer;
        };

        /**
         * Encodes the specified HeartbeatStat message, length delimited. Does not implicitly {@link mcs_proto.HeartbeatStat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mcs_proto.HeartbeatStat
         * @static
         * @param {mcs_proto.IHeartbeatStat} message HeartbeatStat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartbeatStat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartbeatStat message from the specified reader or buffer.
         * @function decode
         * @memberof mcs_proto.HeartbeatStat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mcs_proto.HeartbeatStat} HeartbeatStat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartbeatStat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mcs_proto.HeartbeatStat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.ip = reader.string();
                        break;
                    }
                case 2: {
                        message.timeout = reader.bool();
                        break;
                    }
                case 3: {
                        message.intervalMs = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ip"))
                throw $util.ProtocolError("missing required 'ip'", { instance: message });
            if (!message.hasOwnProperty("timeout"))
                throw $util.ProtocolError("missing required 'timeout'", { instance: message });
            if (!message.hasOwnProperty("intervalMs"))
                throw $util.ProtocolError("missing required 'intervalMs'", { instance: message });
            return message;
        };

        /**
         * Decodes a HeartbeatStat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mcs_proto.HeartbeatStat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mcs_proto.HeartbeatStat} HeartbeatStat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartbeatStat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartbeatStat message.
         * @function verify
         * @memberof mcs_proto.HeartbeatStat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartbeatStat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.ip))
                return "ip: string expected";
            if (typeof message.timeout !== "boolean")
                return "timeout: boolean expected";
            if (!$util.isInteger(message.intervalMs))
                return "intervalMs: integer expected";
            return null;
        };

        /**
         * Creates a HeartbeatStat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mcs_proto.HeartbeatStat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mcs_proto.HeartbeatStat} HeartbeatStat
         */
        HeartbeatStat.fromObject = function fromObject(object) {
            if (object instanceof $root.mcs_proto.HeartbeatStat)
                return object;
            var message = new $root.mcs_proto.HeartbeatStat();
            if (object.ip != null)
                message.ip = String(object.ip);
            if (object.timeout != null)
                message.timeout = Boolean(object.timeout);
            if (object.intervalMs != null)
                message.intervalMs = object.intervalMs | 0;
            return message;
        };

        /**
         * Creates a plain object from a HeartbeatStat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mcs_proto.HeartbeatStat
         * @static
         * @param {mcs_proto.HeartbeatStat} message HeartbeatStat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartbeatStat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ip = "";
                object.timeout = false;
                object.intervalMs = 0;
            }
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                object.timeout = message.timeout;
            if (message.intervalMs != null && message.hasOwnProperty("intervalMs"))
                object.intervalMs = message.intervalMs;
            return object;
        };

        /**
         * Converts this HeartbeatStat to JSON.
         * @function toJSON
         * @memberof mcs_proto.HeartbeatStat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartbeatStat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HeartbeatStat
         * @function getTypeUrl
         * @memberof mcs_proto.HeartbeatStat
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HeartbeatStat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mcs_proto.HeartbeatStat";
        };

        return HeartbeatStat;
    })();

    mcs_proto.HeartbeatConfig = (function() {

        /**
         * Properties of a HeartbeatConfig.
         * @memberof mcs_proto
         * @interface IHeartbeatConfig
         * @property {boolean|null} [uploadStat] HeartbeatConfig uploadStat
         * @property {string|null} [ip] HeartbeatConfig ip
         * @property {number|null} [intervalMs] HeartbeatConfig intervalMs
         */

        /**
         * Constructs a new HeartbeatConfig.
         * @memberof mcs_proto
         * @classdesc Represents a HeartbeatConfig.
         * @implements IHeartbeatConfig
         * @constructor
         * @param {mcs_proto.IHeartbeatConfig=} [properties] Properties to set
         */
        function HeartbeatConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeartbeatConfig uploadStat.
         * @member {boolean} uploadStat
         * @memberof mcs_proto.HeartbeatConfig
         * @instance
         */
        HeartbeatConfig.prototype.uploadStat = false;

        /**
         * HeartbeatConfig ip.
         * @member {string} ip
         * @memberof mcs_proto.HeartbeatConfig
         * @instance
         */
        HeartbeatConfig.prototype.ip = "";

        /**
         * HeartbeatConfig intervalMs.
         * @member {number} intervalMs
         * @memberof mcs_proto.HeartbeatConfig
         * @instance
         */
        HeartbeatConfig.prototype.intervalMs = 0;

        /**
         * Creates a new HeartbeatConfig instance using the specified properties.
         * @function create
         * @memberof mcs_proto.HeartbeatConfig
         * @static
         * @param {mcs_proto.IHeartbeatConfig=} [properties] Properties to set
         * @returns {mcs_proto.HeartbeatConfig} HeartbeatConfig instance
         */
        HeartbeatConfig.create = function create(properties) {
            return new HeartbeatConfig(properties);
        };

        /**
         * Encodes the specified HeartbeatConfig message. Does not implicitly {@link mcs_proto.HeartbeatConfig.verify|verify} messages.
         * @function encode
         * @memberof mcs_proto.HeartbeatConfig
         * @static
         * @param {mcs_proto.IHeartbeatConfig} message HeartbeatConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartbeatConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uploadStat != null && Object.hasOwnProperty.call(message, "uploadStat"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.uploadStat);
            if (message.ip != null && Object.hasOwnProperty.call(message, "ip"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ip);
            if (message.intervalMs != null && Object.hasOwnProperty.call(message, "intervalMs"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.intervalMs);
            return writer;
        };

        /**
         * Encodes the specified HeartbeatConfig message, length delimited. Does not implicitly {@link mcs_proto.HeartbeatConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mcs_proto.HeartbeatConfig
         * @static
         * @param {mcs_proto.IHeartbeatConfig} message HeartbeatConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartbeatConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartbeatConfig message from the specified reader or buffer.
         * @function decode
         * @memberof mcs_proto.HeartbeatConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mcs_proto.HeartbeatConfig} HeartbeatConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartbeatConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mcs_proto.HeartbeatConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.uploadStat = reader.bool();
                        break;
                    }
                case 2: {
                        message.ip = reader.string();
                        break;
                    }
                case 3: {
                        message.intervalMs = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeartbeatConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mcs_proto.HeartbeatConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mcs_proto.HeartbeatConfig} HeartbeatConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartbeatConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartbeatConfig message.
         * @function verify
         * @memberof mcs_proto.HeartbeatConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartbeatConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uploadStat != null && message.hasOwnProperty("uploadStat"))
                if (typeof message.uploadStat !== "boolean")
                    return "uploadStat: boolean expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            if (message.intervalMs != null && message.hasOwnProperty("intervalMs"))
                if (!$util.isInteger(message.intervalMs))
                    return "intervalMs: integer expected";
            return null;
        };

        /**
         * Creates a HeartbeatConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mcs_proto.HeartbeatConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mcs_proto.HeartbeatConfig} HeartbeatConfig
         */
        HeartbeatConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.mcs_proto.HeartbeatConfig)
                return object;
            var message = new $root.mcs_proto.HeartbeatConfig();
            if (object.uploadStat != null)
                message.uploadStat = Boolean(object.uploadStat);
            if (object.ip != null)
                message.ip = String(object.ip);
            if (object.intervalMs != null)
                message.intervalMs = object.intervalMs | 0;
            return message;
        };

        /**
         * Creates a plain object from a HeartbeatConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mcs_proto.HeartbeatConfig
         * @static
         * @param {mcs_proto.HeartbeatConfig} message HeartbeatConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartbeatConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uploadStat = false;
                object.ip = "";
                object.intervalMs = 0;
            }
            if (message.uploadStat != null && message.hasOwnProperty("uploadStat"))
                object.uploadStat = message.uploadStat;
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            if (message.intervalMs != null && message.hasOwnProperty("intervalMs"))
                object.intervalMs = message.intervalMs;
            return object;
        };

        /**
         * Converts this HeartbeatConfig to JSON.
         * @function toJSON
         * @memberof mcs_proto.HeartbeatConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartbeatConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HeartbeatConfig
         * @function getTypeUrl
         * @memberof mcs_proto.HeartbeatConfig
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HeartbeatConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mcs_proto.HeartbeatConfig";
        };

        return HeartbeatConfig;
    })();

    mcs_proto.ClientEvent = (function() {

        /**
         * Properties of a ClientEvent.
         * @memberof mcs_proto
         * @interface IClientEvent
         * @property {mcs_proto.ClientEvent.Type|null} [type] ClientEvent type
         * @property {number|null} [numberDiscardedEvents] ClientEvent numberDiscardedEvents
         * @property {number|null} [networkType] ClientEvent networkType
         * @property {Long|null} [timeConnectionStartedMs] ClientEvent timeConnectionStartedMs
         * @property {Long|null} [timeConnectionEndedMs] ClientEvent timeConnectionEndedMs
         * @property {number|null} [errorCode] ClientEvent errorCode
         * @property {Long|null} [timeConnectionEstablishedMs] ClientEvent timeConnectionEstablishedMs
         */

        /**
         * Constructs a new ClientEvent.
         * @memberof mcs_proto
         * @classdesc Represents a ClientEvent.
         * @implements IClientEvent
         * @constructor
         * @param {mcs_proto.IClientEvent=} [properties] Properties to set
         */
        function ClientEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClientEvent type.
         * @member {mcs_proto.ClientEvent.Type} type
         * @memberof mcs_proto.ClientEvent
         * @instance
         */
        ClientEvent.prototype.type = 0;

        /**
         * ClientEvent numberDiscardedEvents.
         * @member {number} numberDiscardedEvents
         * @memberof mcs_proto.ClientEvent
         * @instance
         */
        ClientEvent.prototype.numberDiscardedEvents = 0;

        /**
         * ClientEvent networkType.
         * @member {number} networkType
         * @memberof mcs_proto.ClientEvent
         * @instance
         */
        ClientEvent.prototype.networkType = 0;

        /**
         * ClientEvent timeConnectionStartedMs.
         * @member {Long} timeConnectionStartedMs
         * @memberof mcs_proto.ClientEvent
         * @instance
         */
        ClientEvent.prototype.timeConnectionStartedMs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * ClientEvent timeConnectionEndedMs.
         * @member {Long} timeConnectionEndedMs
         * @memberof mcs_proto.ClientEvent
         * @instance
         */
        ClientEvent.prototype.timeConnectionEndedMs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * ClientEvent errorCode.
         * @member {number} errorCode
         * @memberof mcs_proto.ClientEvent
         * @instance
         */
        ClientEvent.prototype.errorCode = 0;

        /**
         * ClientEvent timeConnectionEstablishedMs.
         * @member {Long} timeConnectionEstablishedMs
         * @memberof mcs_proto.ClientEvent
         * @instance
         */
        ClientEvent.prototype.timeConnectionEstablishedMs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new ClientEvent instance using the specified properties.
         * @function create
         * @memberof mcs_proto.ClientEvent
         * @static
         * @param {mcs_proto.IClientEvent=} [properties] Properties to set
         * @returns {mcs_proto.ClientEvent} ClientEvent instance
         */
        ClientEvent.create = function create(properties) {
            return new ClientEvent(properties);
        };

        /**
         * Encodes the specified ClientEvent message. Does not implicitly {@link mcs_proto.ClientEvent.verify|verify} messages.
         * @function encode
         * @memberof mcs_proto.ClientEvent
         * @static
         * @param {mcs_proto.IClientEvent} message ClientEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.numberDiscardedEvents != null && Object.hasOwnProperty.call(message, "numberDiscardedEvents"))
                writer.uint32(/* id 100, wireType 0 =*/800).uint32(message.numberDiscardedEvents);
            if (message.networkType != null && Object.hasOwnProperty.call(message, "networkType"))
                writer.uint32(/* id 200, wireType 0 =*/1600).int32(message.networkType);
            if (message.timeConnectionStartedMs != null && Object.hasOwnProperty.call(message, "timeConnectionStartedMs"))
                writer.uint32(/* id 202, wireType 0 =*/1616).uint64(message.timeConnectionStartedMs);
            if (message.timeConnectionEndedMs != null && Object.hasOwnProperty.call(message, "timeConnectionEndedMs"))
                writer.uint32(/* id 203, wireType 0 =*/1624).uint64(message.timeConnectionEndedMs);
            if (message.errorCode != null && Object.hasOwnProperty.call(message, "errorCode"))
                writer.uint32(/* id 204, wireType 0 =*/1632).int32(message.errorCode);
            if (message.timeConnectionEstablishedMs != null && Object.hasOwnProperty.call(message, "timeConnectionEstablishedMs"))
                writer.uint32(/* id 300, wireType 0 =*/2400).uint64(message.timeConnectionEstablishedMs);
            return writer;
        };

        /**
         * Encodes the specified ClientEvent message, length delimited. Does not implicitly {@link mcs_proto.ClientEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mcs_proto.ClientEvent
         * @static
         * @param {mcs_proto.IClientEvent} message ClientEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClientEvent message from the specified reader or buffer.
         * @function decode
         * @memberof mcs_proto.ClientEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mcs_proto.ClientEvent} ClientEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mcs_proto.ClientEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 100: {
                        message.numberDiscardedEvents = reader.uint32();
                        break;
                    }
                case 200: {
                        message.networkType = reader.int32();
                        break;
                    }
                case 202: {
                        message.timeConnectionStartedMs = reader.uint64();
                        break;
                    }
                case 203: {
                        message.timeConnectionEndedMs = reader.uint64();
                        break;
                    }
                case 204: {
                        message.errorCode = reader.int32();
                        break;
                    }
                case 300: {
                        message.timeConnectionEstablishedMs = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ClientEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mcs_proto.ClientEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mcs_proto.ClientEvent} ClientEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClientEvent message.
         * @function verify
         * @memberof mcs_proto.ClientEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClientEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.numberDiscardedEvents != null && message.hasOwnProperty("numberDiscardedEvents"))
                if (!$util.isInteger(message.numberDiscardedEvents))
                    return "numberDiscardedEvents: integer expected";
            if (message.networkType != null && message.hasOwnProperty("networkType"))
                if (!$util.isInteger(message.networkType))
                    return "networkType: integer expected";
            if (message.timeConnectionStartedMs != null && message.hasOwnProperty("timeConnectionStartedMs"))
                if (!$util.isInteger(message.timeConnectionStartedMs) && !(message.timeConnectionStartedMs && $util.isInteger(message.timeConnectionStartedMs.low) && $util.isInteger(message.timeConnectionStartedMs.high)))
                    return "timeConnectionStartedMs: integer|Long expected";
            if (message.timeConnectionEndedMs != null && message.hasOwnProperty("timeConnectionEndedMs"))
                if (!$util.isInteger(message.timeConnectionEndedMs) && !(message.timeConnectionEndedMs && $util.isInteger(message.timeConnectionEndedMs.low) && $util.isInteger(message.timeConnectionEndedMs.high)))
                    return "timeConnectionEndedMs: integer|Long expected";
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                if (!$util.isInteger(message.errorCode))
                    return "errorCode: integer expected";
            if (message.timeConnectionEstablishedMs != null && message.hasOwnProperty("timeConnectionEstablishedMs"))
                if (!$util.isInteger(message.timeConnectionEstablishedMs) && !(message.timeConnectionEstablishedMs && $util.isInteger(message.timeConnectionEstablishedMs.low) && $util.isInteger(message.timeConnectionEstablishedMs.high)))
                    return "timeConnectionEstablishedMs: integer|Long expected";
            return null;
        };

        /**
         * Creates a ClientEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mcs_proto.ClientEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mcs_proto.ClientEvent} ClientEvent
         */
        ClientEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.mcs_proto.ClientEvent)
                return object;
            var message = new $root.mcs_proto.ClientEvent();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                message.type = 0;
                break;
            case "DISCARDED_EVENTS":
            case 1:
                message.type = 1;
                break;
            case "FAILED_CONNECTION":
            case 2:
                message.type = 2;
                break;
            case "SUCCESSFUL_CONNECTION":
            case 3:
                message.type = 3;
                break;
            }
            if (object.numberDiscardedEvents != null)
                message.numberDiscardedEvents = object.numberDiscardedEvents >>> 0;
            if (object.networkType != null)
                message.networkType = object.networkType | 0;
            if (object.timeConnectionStartedMs != null)
                if ($util.Long)
                    (message.timeConnectionStartedMs = $util.Long.fromValue(object.timeConnectionStartedMs)).unsigned = true;
                else if (typeof object.timeConnectionStartedMs === "string")
                    message.timeConnectionStartedMs = parseInt(object.timeConnectionStartedMs, 10);
                else if (typeof object.timeConnectionStartedMs === "number")
                    message.timeConnectionStartedMs = object.timeConnectionStartedMs;
                else if (typeof object.timeConnectionStartedMs === "object")
                    message.timeConnectionStartedMs = new $util.LongBits(object.timeConnectionStartedMs.low >>> 0, object.timeConnectionStartedMs.high >>> 0).toNumber(true);
            if (object.timeConnectionEndedMs != null)
                if ($util.Long)
                    (message.timeConnectionEndedMs = $util.Long.fromValue(object.timeConnectionEndedMs)).unsigned = true;
                else if (typeof object.timeConnectionEndedMs === "string")
                    message.timeConnectionEndedMs = parseInt(object.timeConnectionEndedMs, 10);
                else if (typeof object.timeConnectionEndedMs === "number")
                    message.timeConnectionEndedMs = object.timeConnectionEndedMs;
                else if (typeof object.timeConnectionEndedMs === "object")
                    message.timeConnectionEndedMs = new $util.LongBits(object.timeConnectionEndedMs.low >>> 0, object.timeConnectionEndedMs.high >>> 0).toNumber(true);
            if (object.errorCode != null)
                message.errorCode = object.errorCode | 0;
            if (object.timeConnectionEstablishedMs != null)
                if ($util.Long)
                    (message.timeConnectionEstablishedMs = $util.Long.fromValue(object.timeConnectionEstablishedMs)).unsigned = true;
                else if (typeof object.timeConnectionEstablishedMs === "string")
                    message.timeConnectionEstablishedMs = parseInt(object.timeConnectionEstablishedMs, 10);
                else if (typeof object.timeConnectionEstablishedMs === "number")
                    message.timeConnectionEstablishedMs = object.timeConnectionEstablishedMs;
                else if (typeof object.timeConnectionEstablishedMs === "object")
                    message.timeConnectionEstablishedMs = new $util.LongBits(object.timeConnectionEstablishedMs.low >>> 0, object.timeConnectionEstablishedMs.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a ClientEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mcs_proto.ClientEvent
         * @static
         * @param {mcs_proto.ClientEvent} message ClientEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClientEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "UNKNOWN" : 0;
                object.numberDiscardedEvents = 0;
                object.networkType = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.timeConnectionStartedMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timeConnectionStartedMs = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.timeConnectionEndedMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timeConnectionEndedMs = options.longs === String ? "0" : 0;
                object.errorCode = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.timeConnectionEstablishedMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timeConnectionEstablishedMs = options.longs === String ? "0" : 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.mcs_proto.ClientEvent.Type[message.type] === undefined ? message.type : $root.mcs_proto.ClientEvent.Type[message.type] : message.type;
            if (message.numberDiscardedEvents != null && message.hasOwnProperty("numberDiscardedEvents"))
                object.numberDiscardedEvents = message.numberDiscardedEvents;
            if (message.networkType != null && message.hasOwnProperty("networkType"))
                object.networkType = message.networkType;
            if (message.timeConnectionStartedMs != null && message.hasOwnProperty("timeConnectionStartedMs"))
                if (typeof message.timeConnectionStartedMs === "number")
                    object.timeConnectionStartedMs = options.longs === String ? String(message.timeConnectionStartedMs) : message.timeConnectionStartedMs;
                else
                    object.timeConnectionStartedMs = options.longs === String ? $util.Long.prototype.toString.call(message.timeConnectionStartedMs) : options.longs === Number ? new $util.LongBits(message.timeConnectionStartedMs.low >>> 0, message.timeConnectionStartedMs.high >>> 0).toNumber(true) : message.timeConnectionStartedMs;
            if (message.timeConnectionEndedMs != null && message.hasOwnProperty("timeConnectionEndedMs"))
                if (typeof message.timeConnectionEndedMs === "number")
                    object.timeConnectionEndedMs = options.longs === String ? String(message.timeConnectionEndedMs) : message.timeConnectionEndedMs;
                else
                    object.timeConnectionEndedMs = options.longs === String ? $util.Long.prototype.toString.call(message.timeConnectionEndedMs) : options.longs === Number ? new $util.LongBits(message.timeConnectionEndedMs.low >>> 0, message.timeConnectionEndedMs.high >>> 0).toNumber(true) : message.timeConnectionEndedMs;
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                object.errorCode = message.errorCode;
            if (message.timeConnectionEstablishedMs != null && message.hasOwnProperty("timeConnectionEstablishedMs"))
                if (typeof message.timeConnectionEstablishedMs === "number")
                    object.timeConnectionEstablishedMs = options.longs === String ? String(message.timeConnectionEstablishedMs) : message.timeConnectionEstablishedMs;
                else
                    object.timeConnectionEstablishedMs = options.longs === String ? $util.Long.prototype.toString.call(message.timeConnectionEstablishedMs) : options.longs === Number ? new $util.LongBits(message.timeConnectionEstablishedMs.low >>> 0, message.timeConnectionEstablishedMs.high >>> 0).toNumber(true) : message.timeConnectionEstablishedMs;
            return object;
        };

        /**
         * Converts this ClientEvent to JSON.
         * @function toJSON
         * @memberof mcs_proto.ClientEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClientEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ClientEvent
         * @function getTypeUrl
         * @memberof mcs_proto.ClientEvent
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ClientEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mcs_proto.ClientEvent";
        };

        /**
         * Type enum.
         * @name mcs_proto.ClientEvent.Type
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} DISCARDED_EVENTS=1 DISCARDED_EVENTS value
         * @property {number} FAILED_CONNECTION=2 FAILED_CONNECTION value
         * @property {number} SUCCESSFUL_CONNECTION=3 SUCCESSFUL_CONNECTION value
         */
        ClientEvent.Type = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "DISCARDED_EVENTS"] = 1;
            values[valuesById[2] = "FAILED_CONNECTION"] = 2;
            values[valuesById[3] = "SUCCESSFUL_CONNECTION"] = 3;
            return values;
        })();

        return ClientEvent;
    })();

    mcs_proto.LoginRequest = (function() {

        /**
         * Properties of a LoginRequest.
         * @memberof mcs_proto
         * @interface ILoginRequest
         * @property {string} id LoginRequest id
         * @property {string} domain LoginRequest domain
         * @property {string} user LoginRequest user
         * @property {string} resource LoginRequest resource
         * @property {string} authToken LoginRequest authToken
         * @property {string|null} [deviceId] LoginRequest deviceId
         * @property {Long|null} [lastRmqId] LoginRequest lastRmqId
         * @property {Array.<mcs_proto.ISetting>|null} [setting] LoginRequest setting
         * @property {Array.<string>|null} [receivedPersistentId] LoginRequest receivedPersistentId
         * @property {boolean|null} [adaptiveHeartbeat] LoginRequest adaptiveHeartbeat
         * @property {mcs_proto.IHeartbeatStat|null} [heartbeatStat] LoginRequest heartbeatStat
         * @property {boolean|null} [useRmq2] LoginRequest useRmq2
         * @property {Long|null} [accountId] LoginRequest accountId
         * @property {mcs_proto.LoginRequest.AuthService|null} [authService] LoginRequest authService
         * @property {number|null} [networkType] LoginRequest networkType
         * @property {Long|null} [status] LoginRequest status
         * @property {Array.<mcs_proto.IClientEvent>|null} [clientEvent] LoginRequest clientEvent
         */

        /**
         * Constructs a new LoginRequest.
         * @memberof mcs_proto
         * @classdesc TAG: 2
         * @implements ILoginRequest
         * @constructor
         * @param {mcs_proto.ILoginRequest=} [properties] Properties to set
         */
        function LoginRequest(properties) {
            this.setting = [];
            this.receivedPersistentId = [];
            this.clientEvent = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRequest id.
         * @member {string} id
         * @memberof mcs_proto.LoginRequest
         * @instance
         */
        LoginRequest.prototype.id = "";

        /**
         * LoginRequest domain.
         * @member {string} domain
         * @memberof mcs_proto.LoginRequest
         * @instance
         */
        LoginRequest.prototype.domain = "";

        /**
         * LoginRequest user.
         * @member {string} user
         * @memberof mcs_proto.LoginRequest
         * @instance
         */
        LoginRequest.prototype.user = "";

        /**
         * LoginRequest resource.
         * @member {string} resource
         * @memberof mcs_proto.LoginRequest
         * @instance
         */
        LoginRequest.prototype.resource = "";

        /**
         * LoginRequest authToken.
         * @member {string} authToken
         * @memberof mcs_proto.LoginRequest
         * @instance
         */
        LoginRequest.prototype.authToken = "";

        /**
         * LoginRequest deviceId.
         * @member {string} deviceId
         * @memberof mcs_proto.LoginRequest
         * @instance
         */
        LoginRequest.prototype.deviceId = "";

        /**
         * LoginRequest lastRmqId.
         * @member {Long} lastRmqId
         * @memberof mcs_proto.LoginRequest
         * @instance
         */
        LoginRequest.prototype.lastRmqId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LoginRequest setting.
         * @member {Array.<mcs_proto.ISetting>} setting
         * @memberof mcs_proto.LoginRequest
         * @instance
         */
        LoginRequest.prototype.setting = $util.emptyArray;

        /**
         * LoginRequest receivedPersistentId.
         * @member {Array.<string>} receivedPersistentId
         * @memberof mcs_proto.LoginRequest
         * @instance
         */
        LoginRequest.prototype.receivedPersistentId = $util.emptyArray;

        /**
         * LoginRequest adaptiveHeartbeat.
         * @member {boolean} adaptiveHeartbeat
         * @memberof mcs_proto.LoginRequest
         * @instance
         */
        LoginRequest.prototype.adaptiveHeartbeat = false;

        /**
         * LoginRequest heartbeatStat.
         * @member {mcs_proto.IHeartbeatStat|null|undefined} heartbeatStat
         * @memberof mcs_proto.LoginRequest
         * @instance
         */
        LoginRequest.prototype.heartbeatStat = null;

        /**
         * LoginRequest useRmq2.
         * @member {boolean} useRmq2
         * @memberof mcs_proto.LoginRequest
         * @instance
         */
        LoginRequest.prototype.useRmq2 = false;

        /**
         * LoginRequest accountId.
         * @member {Long} accountId
         * @memberof mcs_proto.LoginRequest
         * @instance
         */
        LoginRequest.prototype.accountId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LoginRequest authService.
         * @member {mcs_proto.LoginRequest.AuthService} authService
         * @memberof mcs_proto.LoginRequest
         * @instance
         */
        LoginRequest.prototype.authService = 2;

        /**
         * LoginRequest networkType.
         * @member {number} networkType
         * @memberof mcs_proto.LoginRequest
         * @instance
         */
        LoginRequest.prototype.networkType = 0;

        /**
         * LoginRequest status.
         * @member {Long} status
         * @memberof mcs_proto.LoginRequest
         * @instance
         */
        LoginRequest.prototype.status = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LoginRequest clientEvent.
         * @member {Array.<mcs_proto.IClientEvent>} clientEvent
         * @memberof mcs_proto.LoginRequest
         * @instance
         */
        LoginRequest.prototype.clientEvent = $util.emptyArray;

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @function create
         * @memberof mcs_proto.LoginRequest
         * @static
         * @param {mcs_proto.ILoginRequest=} [properties] Properties to set
         * @returns {mcs_proto.LoginRequest} LoginRequest instance
         */
        LoginRequest.create = function create(properties) {
            return new LoginRequest(properties);
        };

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link mcs_proto.LoginRequest.verify|verify} messages.
         * @function encode
         * @memberof mcs_proto.LoginRequest
         * @static
         * @param {mcs_proto.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.domain);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.user);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.resource);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.authToken);
            if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.deviceId);
            if (message.lastRmqId != null && Object.hasOwnProperty.call(message, "lastRmqId"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.lastRmqId);
            if (message.setting != null && message.setting.length)
                for (var i = 0; i < message.setting.length; ++i)
                    $root.mcs_proto.Setting.encode(message.setting[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.receivedPersistentId != null && message.receivedPersistentId.length)
                for (var i = 0; i < message.receivedPersistentId.length; ++i)
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.receivedPersistentId[i]);
            if (message.adaptiveHeartbeat != null && Object.hasOwnProperty.call(message, "adaptiveHeartbeat"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.adaptiveHeartbeat);
            if (message.heartbeatStat != null && Object.hasOwnProperty.call(message, "heartbeatStat"))
                $root.mcs_proto.HeartbeatStat.encode(message.heartbeatStat, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.useRmq2 != null && Object.hasOwnProperty.call(message, "useRmq2"))
                writer.uint32(/* id 14, wireType 0 =*/112).bool(message.useRmq2);
            if (message.accountId != null && Object.hasOwnProperty.call(message, "accountId"))
                writer.uint32(/* id 15, wireType 0 =*/120).int64(message.accountId);
            if (message.authService != null && Object.hasOwnProperty.call(message, "authService"))
                writer.uint32(/* id 16, wireType 0 =*/128).int32(message.authService);
            if (message.networkType != null && Object.hasOwnProperty.call(message, "networkType"))
                writer.uint32(/* id 17, wireType 0 =*/136).int32(message.networkType);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 18, wireType 0 =*/144).int64(message.status);
            if (message.clientEvent != null && message.clientEvent.length)
                for (var i = 0; i < message.clientEvent.length; ++i)
                    $root.mcs_proto.ClientEvent.encode(message.clientEvent[i], writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link mcs_proto.LoginRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mcs_proto.LoginRequest
         * @static
         * @param {mcs_proto.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @function decode
         * @memberof mcs_proto.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mcs_proto.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mcs_proto.LoginRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.domain = reader.string();
                        break;
                    }
                case 3: {
                        message.user = reader.string();
                        break;
                    }
                case 4: {
                        message.resource = reader.string();
                        break;
                    }
                case 5: {
                        message.authToken = reader.string();
                        break;
                    }
                case 6: {
                        message.deviceId = reader.string();
                        break;
                    }
                case 7: {
                        message.lastRmqId = reader.int64();
                        break;
                    }
                case 8: {
                        if (!(message.setting && message.setting.length))
                            message.setting = [];
                        message.setting.push($root.mcs_proto.Setting.decode(reader, reader.uint32()));
                        break;
                    }
                case 10: {
                        if (!(message.receivedPersistentId && message.receivedPersistentId.length))
                            message.receivedPersistentId = [];
                        message.receivedPersistentId.push(reader.string());
                        break;
                    }
                case 12: {
                        message.adaptiveHeartbeat = reader.bool();
                        break;
                    }
                case 13: {
                        message.heartbeatStat = $root.mcs_proto.HeartbeatStat.decode(reader, reader.uint32());
                        break;
                    }
                case 14: {
                        message.useRmq2 = reader.bool();
                        break;
                    }
                case 15: {
                        message.accountId = reader.int64();
                        break;
                    }
                case 16: {
                        message.authService = reader.int32();
                        break;
                    }
                case 17: {
                        message.networkType = reader.int32();
                        break;
                    }
                case 18: {
                        message.status = reader.int64();
                        break;
                    }
                case 22: {
                        if (!(message.clientEvent && message.clientEvent.length))
                            message.clientEvent = [];
                        message.clientEvent.push($root.mcs_proto.ClientEvent.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("domain"))
                throw $util.ProtocolError("missing required 'domain'", { instance: message });
            if (!message.hasOwnProperty("user"))
                throw $util.ProtocolError("missing required 'user'", { instance: message });
            if (!message.hasOwnProperty("resource"))
                throw $util.ProtocolError("missing required 'resource'", { instance: message });
            if (!message.hasOwnProperty("authToken"))
                throw $util.ProtocolError("missing required 'authToken'", { instance: message });
            return message;
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mcs_proto.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mcs_proto.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRequest message.
         * @function verify
         * @memberof mcs_proto.LoginRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.id))
                return "id: string expected";
            if (!$util.isString(message.domain))
                return "domain: string expected";
            if (!$util.isString(message.user))
                return "user: string expected";
            if (!$util.isString(message.resource))
                return "resource: string expected";
            if (!$util.isString(message.authToken))
                return "authToken: string expected";
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                if (!$util.isString(message.deviceId))
                    return "deviceId: string expected";
            if (message.lastRmqId != null && message.hasOwnProperty("lastRmqId"))
                if (!$util.isInteger(message.lastRmqId) && !(message.lastRmqId && $util.isInteger(message.lastRmqId.low) && $util.isInteger(message.lastRmqId.high)))
                    return "lastRmqId: integer|Long expected";
            if (message.setting != null && message.hasOwnProperty("setting")) {
                if (!Array.isArray(message.setting))
                    return "setting: array expected";
                for (var i = 0; i < message.setting.length; ++i) {
                    var error = $root.mcs_proto.Setting.verify(message.setting[i]);
                    if (error)
                        return "setting." + error;
                }
            }
            if (message.receivedPersistentId != null && message.hasOwnProperty("receivedPersistentId")) {
                if (!Array.isArray(message.receivedPersistentId))
                    return "receivedPersistentId: array expected";
                for (var i = 0; i < message.receivedPersistentId.length; ++i)
                    if (!$util.isString(message.receivedPersistentId[i]))
                        return "receivedPersistentId: string[] expected";
            }
            if (message.adaptiveHeartbeat != null && message.hasOwnProperty("adaptiveHeartbeat"))
                if (typeof message.adaptiveHeartbeat !== "boolean")
                    return "adaptiveHeartbeat: boolean expected";
            if (message.heartbeatStat != null && message.hasOwnProperty("heartbeatStat")) {
                var error = $root.mcs_proto.HeartbeatStat.verify(message.heartbeatStat);
                if (error)
                    return "heartbeatStat." + error;
            }
            if (message.useRmq2 != null && message.hasOwnProperty("useRmq2"))
                if (typeof message.useRmq2 !== "boolean")
                    return "useRmq2: boolean expected";
            if (message.accountId != null && message.hasOwnProperty("accountId"))
                if (!$util.isInteger(message.accountId) && !(message.accountId && $util.isInteger(message.accountId.low) && $util.isInteger(message.accountId.high)))
                    return "accountId: integer|Long expected";
            if (message.authService != null && message.hasOwnProperty("authService"))
                switch (message.authService) {
                default:
                    return "authService: enum value expected";
                case 2:
                    break;
                }
            if (message.networkType != null && message.hasOwnProperty("networkType"))
                if (!$util.isInteger(message.networkType))
                    return "networkType: integer expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status) && !(message.status && $util.isInteger(message.status.low) && $util.isInteger(message.status.high)))
                    return "status: integer|Long expected";
            if (message.clientEvent != null && message.hasOwnProperty("clientEvent")) {
                if (!Array.isArray(message.clientEvent))
                    return "clientEvent: array expected";
                for (var i = 0; i < message.clientEvent.length; ++i) {
                    var error = $root.mcs_proto.ClientEvent.verify(message.clientEvent[i]);
                    if (error)
                        return "clientEvent." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mcs_proto.LoginRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mcs_proto.LoginRequest} LoginRequest
         */
        LoginRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.mcs_proto.LoginRequest)
                return object;
            var message = new $root.mcs_proto.LoginRequest();
            if (object.id != null)
                message.id = String(object.id);
            if (object.domain != null)
                message.domain = String(object.domain);
            if (object.user != null)
                message.user = String(object.user);
            if (object.resource != null)
                message.resource = String(object.resource);
            if (object.authToken != null)
                message.authToken = String(object.authToken);
            if (object.deviceId != null)
                message.deviceId = String(object.deviceId);
            if (object.lastRmqId != null)
                if ($util.Long)
                    (message.lastRmqId = $util.Long.fromValue(object.lastRmqId)).unsigned = false;
                else if (typeof object.lastRmqId === "string")
                    message.lastRmqId = parseInt(object.lastRmqId, 10);
                else if (typeof object.lastRmqId === "number")
                    message.lastRmqId = object.lastRmqId;
                else if (typeof object.lastRmqId === "object")
                    message.lastRmqId = new $util.LongBits(object.lastRmqId.low >>> 0, object.lastRmqId.high >>> 0).toNumber();
            if (object.setting) {
                if (!Array.isArray(object.setting))
                    throw TypeError(".mcs_proto.LoginRequest.setting: array expected");
                message.setting = [];
                for (var i = 0; i < object.setting.length; ++i) {
                    if (typeof object.setting[i] !== "object")
                        throw TypeError(".mcs_proto.LoginRequest.setting: object expected");
                    message.setting[i] = $root.mcs_proto.Setting.fromObject(object.setting[i]);
                }
            }
            if (object.receivedPersistentId) {
                if (!Array.isArray(object.receivedPersistentId))
                    throw TypeError(".mcs_proto.LoginRequest.receivedPersistentId: array expected");
                message.receivedPersistentId = [];
                for (var i = 0; i < object.receivedPersistentId.length; ++i)
                    message.receivedPersistentId[i] = String(object.receivedPersistentId[i]);
            }
            if (object.adaptiveHeartbeat != null)
                message.adaptiveHeartbeat = Boolean(object.adaptiveHeartbeat);
            if (object.heartbeatStat != null) {
                if (typeof object.heartbeatStat !== "object")
                    throw TypeError(".mcs_proto.LoginRequest.heartbeatStat: object expected");
                message.heartbeatStat = $root.mcs_proto.HeartbeatStat.fromObject(object.heartbeatStat);
            }
            if (object.useRmq2 != null)
                message.useRmq2 = Boolean(object.useRmq2);
            if (object.accountId != null)
                if ($util.Long)
                    (message.accountId = $util.Long.fromValue(object.accountId)).unsigned = false;
                else if (typeof object.accountId === "string")
                    message.accountId = parseInt(object.accountId, 10);
                else if (typeof object.accountId === "number")
                    message.accountId = object.accountId;
                else if (typeof object.accountId === "object")
                    message.accountId = new $util.LongBits(object.accountId.low >>> 0, object.accountId.high >>> 0).toNumber();
            switch (object.authService) {
            default:
                if (typeof object.authService === "number") {
                    message.authService = object.authService;
                    break;
                }
                break;
            case "ANDROID_ID":
            case 2:
                message.authService = 2;
                break;
            }
            if (object.networkType != null)
                message.networkType = object.networkType | 0;
            if (object.status != null)
                if ($util.Long)
                    (message.status = $util.Long.fromValue(object.status)).unsigned = false;
                else if (typeof object.status === "string")
                    message.status = parseInt(object.status, 10);
                else if (typeof object.status === "number")
                    message.status = object.status;
                else if (typeof object.status === "object")
                    message.status = new $util.LongBits(object.status.low >>> 0, object.status.high >>> 0).toNumber();
            if (object.clientEvent) {
                if (!Array.isArray(object.clientEvent))
                    throw TypeError(".mcs_proto.LoginRequest.clientEvent: array expected");
                message.clientEvent = [];
                for (var i = 0; i < object.clientEvent.length; ++i) {
                    if (typeof object.clientEvent[i] !== "object")
                        throw TypeError(".mcs_proto.LoginRequest.clientEvent: object expected");
                    message.clientEvent[i] = $root.mcs_proto.ClientEvent.fromObject(object.clientEvent[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mcs_proto.LoginRequest
         * @static
         * @param {mcs_proto.LoginRequest} message LoginRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.setting = [];
                object.receivedPersistentId = [];
                object.clientEvent = [];
            }
            if (options.defaults) {
                object.id = "";
                object.domain = "";
                object.user = "";
                object.resource = "";
                object.authToken = "";
                object.deviceId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.lastRmqId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lastRmqId = options.longs === String ? "0" : 0;
                object.adaptiveHeartbeat = false;
                object.heartbeatStat = null;
                object.useRmq2 = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.accountId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.accountId = options.longs === String ? "0" : 0;
                object.authService = options.enums === String ? "ANDROID_ID" : 2;
                object.networkType = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.status = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.status = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.domain != null && message.hasOwnProperty("domain"))
                object.domain = message.domain;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = message.user;
            if (message.resource != null && message.hasOwnProperty("resource"))
                object.resource = message.resource;
            if (message.authToken != null && message.hasOwnProperty("authToken"))
                object.authToken = message.authToken;
            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                object.deviceId = message.deviceId;
            if (message.lastRmqId != null && message.hasOwnProperty("lastRmqId"))
                if (typeof message.lastRmqId === "number")
                    object.lastRmqId = options.longs === String ? String(message.lastRmqId) : message.lastRmqId;
                else
                    object.lastRmqId = options.longs === String ? $util.Long.prototype.toString.call(message.lastRmqId) : options.longs === Number ? new $util.LongBits(message.lastRmqId.low >>> 0, message.lastRmqId.high >>> 0).toNumber() : message.lastRmqId;
            if (message.setting && message.setting.length) {
                object.setting = [];
                for (var j = 0; j < message.setting.length; ++j)
                    object.setting[j] = $root.mcs_proto.Setting.toObject(message.setting[j], options);
            }
            if (message.receivedPersistentId && message.receivedPersistentId.length) {
                object.receivedPersistentId = [];
                for (var j = 0; j < message.receivedPersistentId.length; ++j)
                    object.receivedPersistentId[j] = message.receivedPersistentId[j];
            }
            if (message.adaptiveHeartbeat != null && message.hasOwnProperty("adaptiveHeartbeat"))
                object.adaptiveHeartbeat = message.adaptiveHeartbeat;
            if (message.heartbeatStat != null && message.hasOwnProperty("heartbeatStat"))
                object.heartbeatStat = $root.mcs_proto.HeartbeatStat.toObject(message.heartbeatStat, options);
            if (message.useRmq2 != null && message.hasOwnProperty("useRmq2"))
                object.useRmq2 = message.useRmq2;
            if (message.accountId != null && message.hasOwnProperty("accountId"))
                if (typeof message.accountId === "number")
                    object.accountId = options.longs === String ? String(message.accountId) : message.accountId;
                else
                    object.accountId = options.longs === String ? $util.Long.prototype.toString.call(message.accountId) : options.longs === Number ? new $util.LongBits(message.accountId.low >>> 0, message.accountId.high >>> 0).toNumber() : message.accountId;
            if (message.authService != null && message.hasOwnProperty("authService"))
                object.authService = options.enums === String ? $root.mcs_proto.LoginRequest.AuthService[message.authService] === undefined ? message.authService : $root.mcs_proto.LoginRequest.AuthService[message.authService] : message.authService;
            if (message.networkType != null && message.hasOwnProperty("networkType"))
                object.networkType = message.networkType;
            if (message.status != null && message.hasOwnProperty("status"))
                if (typeof message.status === "number")
                    object.status = options.longs === String ? String(message.status) : message.status;
                else
                    object.status = options.longs === String ? $util.Long.prototype.toString.call(message.status) : options.longs === Number ? new $util.LongBits(message.status.low >>> 0, message.status.high >>> 0).toNumber() : message.status;
            if (message.clientEvent && message.clientEvent.length) {
                object.clientEvent = [];
                for (var j = 0; j < message.clientEvent.length; ++j)
                    object.clientEvent[j] = $root.mcs_proto.ClientEvent.toObject(message.clientEvent[j], options);
            }
            return object;
        };

        /**
         * Converts this LoginRequest to JSON.
         * @function toJSON
         * @memberof mcs_proto.LoginRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LoginRequest
         * @function getTypeUrl
         * @memberof mcs_proto.LoginRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mcs_proto.LoginRequest";
        };

        /**
         * AuthService enum.
         * @name mcs_proto.LoginRequest.AuthService
         * @enum {number}
         * @property {number} ANDROID_ID=2 ANDROID_ID value
         */
        LoginRequest.AuthService = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[2] = "ANDROID_ID"] = 2;
            return values;
        })();

        return LoginRequest;
    })();

    mcs_proto.LoginResponse = (function() {

        /**
         * Properties of a LoginResponse.
         * @memberof mcs_proto
         * @interface ILoginResponse
         * @property {string} id LoginResponse id
         * @property {string|null} [jid] LoginResponse jid
         * @property {mcs_proto.IErrorInfo|null} [error] LoginResponse error
         * @property {Array.<mcs_proto.ISetting>|null} [setting] LoginResponse setting
         * @property {number|null} [streamId] LoginResponse streamId
         * @property {number|null} [lastStreamIdReceived] LoginResponse lastStreamIdReceived
         * @property {mcs_proto.IHeartbeatConfig|null} [heartbeatConfig] LoginResponse heartbeatConfig
         * @property {Long|null} [serverTimestamp] LoginResponse serverTimestamp
         */

        /**
         * Constructs a new LoginResponse.
         * @memberof mcs_proto
         * @classdesc TAG: 3
         * @implements ILoginResponse
         * @constructor
         * @param {mcs_proto.ILoginResponse=} [properties] Properties to set
         */
        function LoginResponse(properties) {
            this.setting = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginResponse id.
         * @member {string} id
         * @memberof mcs_proto.LoginResponse
         * @instance
         */
        LoginResponse.prototype.id = "";

        /**
         * LoginResponse jid.
         * @member {string} jid
         * @memberof mcs_proto.LoginResponse
         * @instance
         */
        LoginResponse.prototype.jid = "";

        /**
         * LoginResponse error.
         * @member {mcs_proto.IErrorInfo|null|undefined} error
         * @memberof mcs_proto.LoginResponse
         * @instance
         */
        LoginResponse.prototype.error = null;

        /**
         * LoginResponse setting.
         * @member {Array.<mcs_proto.ISetting>} setting
         * @memberof mcs_proto.LoginResponse
         * @instance
         */
        LoginResponse.prototype.setting = $util.emptyArray;

        /**
         * LoginResponse streamId.
         * @member {number} streamId
         * @memberof mcs_proto.LoginResponse
         * @instance
         */
        LoginResponse.prototype.streamId = 0;

        /**
         * LoginResponse lastStreamIdReceived.
         * @member {number} lastStreamIdReceived
         * @memberof mcs_proto.LoginResponse
         * @instance
         */
        LoginResponse.prototype.lastStreamIdReceived = 0;

        /**
         * LoginResponse heartbeatConfig.
         * @member {mcs_proto.IHeartbeatConfig|null|undefined} heartbeatConfig
         * @memberof mcs_proto.LoginResponse
         * @instance
         */
        LoginResponse.prototype.heartbeatConfig = null;

        /**
         * LoginResponse serverTimestamp.
         * @member {Long} serverTimestamp
         * @memberof mcs_proto.LoginResponse
         * @instance
         */
        LoginResponse.prototype.serverTimestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @function create
         * @memberof mcs_proto.LoginResponse
         * @static
         * @param {mcs_proto.ILoginResponse=} [properties] Properties to set
         * @returns {mcs_proto.LoginResponse} LoginResponse instance
         */
        LoginResponse.create = function create(properties) {
            return new LoginResponse(properties);
        };

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link mcs_proto.LoginResponse.verify|verify} messages.
         * @function encode
         * @memberof mcs_proto.LoginResponse
         * @static
         * @param {mcs_proto.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.jid != null && Object.hasOwnProperty.call(message, "jid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.jid);
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                $root.mcs_proto.ErrorInfo.encode(message.error, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.setting != null && message.setting.length)
                for (var i = 0; i < message.setting.length; ++i)
                    $root.mcs_proto.Setting.encode(message.setting[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.streamId != null && Object.hasOwnProperty.call(message, "streamId"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.streamId);
            if (message.lastStreamIdReceived != null && Object.hasOwnProperty.call(message, "lastStreamIdReceived"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.lastStreamIdReceived);
            if (message.heartbeatConfig != null && Object.hasOwnProperty.call(message, "heartbeatConfig"))
                $root.mcs_proto.HeartbeatConfig.encode(message.heartbeatConfig, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.serverTimestamp != null && Object.hasOwnProperty.call(message, "serverTimestamp"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.serverTimestamp);
            return writer;
        };

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link mcs_proto.LoginResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mcs_proto.LoginResponse
         * @static
         * @param {mcs_proto.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @function decode
         * @memberof mcs_proto.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mcs_proto.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mcs_proto.LoginResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.jid = reader.string();
                        break;
                    }
                case 3: {
                        message.error = $root.mcs_proto.ErrorInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        if (!(message.setting && message.setting.length))
                            message.setting = [];
                        message.setting.push($root.mcs_proto.Setting.decode(reader, reader.uint32()));
                        break;
                    }
                case 5: {
                        message.streamId = reader.int32();
                        break;
                    }
                case 6: {
                        message.lastStreamIdReceived = reader.int32();
                        break;
                    }
                case 7: {
                        message.heartbeatConfig = $root.mcs_proto.HeartbeatConfig.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.serverTimestamp = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            return message;
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mcs_proto.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mcs_proto.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginResponse message.
         * @function verify
         * @memberof mcs_proto.LoginResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.id))
                return "id: string expected";
            if (message.jid != null && message.hasOwnProperty("jid"))
                if (!$util.isString(message.jid))
                    return "jid: string expected";
            if (message.error != null && message.hasOwnProperty("error")) {
                var error = $root.mcs_proto.ErrorInfo.verify(message.error);
                if (error)
                    return "error." + error;
            }
            if (message.setting != null && message.hasOwnProperty("setting")) {
                if (!Array.isArray(message.setting))
                    return "setting: array expected";
                for (var i = 0; i < message.setting.length; ++i) {
                    var error = $root.mcs_proto.Setting.verify(message.setting[i]);
                    if (error)
                        return "setting." + error;
                }
            }
            if (message.streamId != null && message.hasOwnProperty("streamId"))
                if (!$util.isInteger(message.streamId))
                    return "streamId: integer expected";
            if (message.lastStreamIdReceived != null && message.hasOwnProperty("lastStreamIdReceived"))
                if (!$util.isInteger(message.lastStreamIdReceived))
                    return "lastStreamIdReceived: integer expected";
            if (message.heartbeatConfig != null && message.hasOwnProperty("heartbeatConfig")) {
                var error = $root.mcs_proto.HeartbeatConfig.verify(message.heartbeatConfig);
                if (error)
                    return "heartbeatConfig." + error;
            }
            if (message.serverTimestamp != null && message.hasOwnProperty("serverTimestamp"))
                if (!$util.isInteger(message.serverTimestamp) && !(message.serverTimestamp && $util.isInteger(message.serverTimestamp.low) && $util.isInteger(message.serverTimestamp.high)))
                    return "serverTimestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mcs_proto.LoginResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mcs_proto.LoginResponse} LoginResponse
         */
        LoginResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.mcs_proto.LoginResponse)
                return object;
            var message = new $root.mcs_proto.LoginResponse();
            if (object.id != null)
                message.id = String(object.id);
            if (object.jid != null)
                message.jid = String(object.jid);
            if (object.error != null) {
                if (typeof object.error !== "object")
                    throw TypeError(".mcs_proto.LoginResponse.error: object expected");
                message.error = $root.mcs_proto.ErrorInfo.fromObject(object.error);
            }
            if (object.setting) {
                if (!Array.isArray(object.setting))
                    throw TypeError(".mcs_proto.LoginResponse.setting: array expected");
                message.setting = [];
                for (var i = 0; i < object.setting.length; ++i) {
                    if (typeof object.setting[i] !== "object")
                        throw TypeError(".mcs_proto.LoginResponse.setting: object expected");
                    message.setting[i] = $root.mcs_proto.Setting.fromObject(object.setting[i]);
                }
            }
            if (object.streamId != null)
                message.streamId = object.streamId | 0;
            if (object.lastStreamIdReceived != null)
                message.lastStreamIdReceived = object.lastStreamIdReceived | 0;
            if (object.heartbeatConfig != null) {
                if (typeof object.heartbeatConfig !== "object")
                    throw TypeError(".mcs_proto.LoginResponse.heartbeatConfig: object expected");
                message.heartbeatConfig = $root.mcs_proto.HeartbeatConfig.fromObject(object.heartbeatConfig);
            }
            if (object.serverTimestamp != null)
                if ($util.Long)
                    (message.serverTimestamp = $util.Long.fromValue(object.serverTimestamp)).unsigned = false;
                else if (typeof object.serverTimestamp === "string")
                    message.serverTimestamp = parseInt(object.serverTimestamp, 10);
                else if (typeof object.serverTimestamp === "number")
                    message.serverTimestamp = object.serverTimestamp;
                else if (typeof object.serverTimestamp === "object")
                    message.serverTimestamp = new $util.LongBits(object.serverTimestamp.low >>> 0, object.serverTimestamp.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mcs_proto.LoginResponse
         * @static
         * @param {mcs_proto.LoginResponse} message LoginResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.setting = [];
            if (options.defaults) {
                object.id = "";
                object.jid = "";
                object.error = null;
                object.streamId = 0;
                object.lastStreamIdReceived = 0;
                object.heartbeatConfig = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.serverTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.serverTimestamp = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.jid != null && message.hasOwnProperty("jid"))
                object.jid = message.jid;
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = $root.mcs_proto.ErrorInfo.toObject(message.error, options);
            if (message.setting && message.setting.length) {
                object.setting = [];
                for (var j = 0; j < message.setting.length; ++j)
                    object.setting[j] = $root.mcs_proto.Setting.toObject(message.setting[j], options);
            }
            if (message.streamId != null && message.hasOwnProperty("streamId"))
                object.streamId = message.streamId;
            if (message.lastStreamIdReceived != null && message.hasOwnProperty("lastStreamIdReceived"))
                object.lastStreamIdReceived = message.lastStreamIdReceived;
            if (message.heartbeatConfig != null && message.hasOwnProperty("heartbeatConfig"))
                object.heartbeatConfig = $root.mcs_proto.HeartbeatConfig.toObject(message.heartbeatConfig, options);
            if (message.serverTimestamp != null && message.hasOwnProperty("serverTimestamp"))
                if (typeof message.serverTimestamp === "number")
                    object.serverTimestamp = options.longs === String ? String(message.serverTimestamp) : message.serverTimestamp;
                else
                    object.serverTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.serverTimestamp) : options.longs === Number ? new $util.LongBits(message.serverTimestamp.low >>> 0, message.serverTimestamp.high >>> 0).toNumber() : message.serverTimestamp;
            return object;
        };

        /**
         * Converts this LoginResponse to JSON.
         * @function toJSON
         * @memberof mcs_proto.LoginResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LoginResponse
         * @function getTypeUrl
         * @memberof mcs_proto.LoginResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mcs_proto.LoginResponse";
        };

        return LoginResponse;
    })();

    mcs_proto.StreamErrorStanza = (function() {

        /**
         * Properties of a StreamErrorStanza.
         * @memberof mcs_proto
         * @interface IStreamErrorStanza
         * @property {string} type StreamErrorStanza type
         * @property {string|null} [text] StreamErrorStanza text
         */

        /**
         * Constructs a new StreamErrorStanza.
         * @memberof mcs_proto
         * @classdesc Represents a StreamErrorStanza.
         * @implements IStreamErrorStanza
         * @constructor
         * @param {mcs_proto.IStreamErrorStanza=} [properties] Properties to set
         */
        function StreamErrorStanza(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StreamErrorStanza type.
         * @member {string} type
         * @memberof mcs_proto.StreamErrorStanza
         * @instance
         */
        StreamErrorStanza.prototype.type = "";

        /**
         * StreamErrorStanza text.
         * @member {string} text
         * @memberof mcs_proto.StreamErrorStanza
         * @instance
         */
        StreamErrorStanza.prototype.text = "";

        /**
         * Creates a new StreamErrorStanza instance using the specified properties.
         * @function create
         * @memberof mcs_proto.StreamErrorStanza
         * @static
         * @param {mcs_proto.IStreamErrorStanza=} [properties] Properties to set
         * @returns {mcs_proto.StreamErrorStanza} StreamErrorStanza instance
         */
        StreamErrorStanza.create = function create(properties) {
            return new StreamErrorStanza(properties);
        };

        /**
         * Encodes the specified StreamErrorStanza message. Does not implicitly {@link mcs_proto.StreamErrorStanza.verify|verify} messages.
         * @function encode
         * @memberof mcs_proto.StreamErrorStanza
         * @static
         * @param {mcs_proto.IStreamErrorStanza} message StreamErrorStanza message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StreamErrorStanza.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
            return writer;
        };

        /**
         * Encodes the specified StreamErrorStanza message, length delimited. Does not implicitly {@link mcs_proto.StreamErrorStanza.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mcs_proto.StreamErrorStanza
         * @static
         * @param {mcs_proto.IStreamErrorStanza} message StreamErrorStanza message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StreamErrorStanza.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StreamErrorStanza message from the specified reader or buffer.
         * @function decode
         * @memberof mcs_proto.StreamErrorStanza
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mcs_proto.StreamErrorStanza} StreamErrorStanza
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StreamErrorStanza.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mcs_proto.StreamErrorStanza();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.string();
                        break;
                    }
                case 2: {
                        message.text = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            return message;
        };

        /**
         * Decodes a StreamErrorStanza message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mcs_proto.StreamErrorStanza
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mcs_proto.StreamErrorStanza} StreamErrorStanza
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StreamErrorStanza.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StreamErrorStanza message.
         * @function verify
         * @memberof mcs_proto.StreamErrorStanza
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StreamErrorStanza.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.type))
                return "type: string expected";
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            return null;
        };

        /**
         * Creates a StreamErrorStanza message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mcs_proto.StreamErrorStanza
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mcs_proto.StreamErrorStanza} StreamErrorStanza
         */
        StreamErrorStanza.fromObject = function fromObject(object) {
            if (object instanceof $root.mcs_proto.StreamErrorStanza)
                return object;
            var message = new $root.mcs_proto.StreamErrorStanza();
            if (object.type != null)
                message.type = String(object.type);
            if (object.text != null)
                message.text = String(object.text);
            return message;
        };

        /**
         * Creates a plain object from a StreamErrorStanza message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mcs_proto.StreamErrorStanza
         * @static
         * @param {mcs_proto.StreamErrorStanza} message StreamErrorStanza
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StreamErrorStanza.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = "";
                object.text = "";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            return object;
        };

        /**
         * Converts this StreamErrorStanza to JSON.
         * @function toJSON
         * @memberof mcs_proto.StreamErrorStanza
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StreamErrorStanza.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StreamErrorStanza
         * @function getTypeUrl
         * @memberof mcs_proto.StreamErrorStanza
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StreamErrorStanza.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mcs_proto.StreamErrorStanza";
        };

        return StreamErrorStanza;
    })();

    mcs_proto.Close = (function() {

        /**
         * Properties of a Close.
         * @memberof mcs_proto
         * @interface IClose
         */

        /**
         * Constructs a new Close.
         * @memberof mcs_proto
         * @classdesc TAG: 4
         * @implements IClose
         * @constructor
         * @param {mcs_proto.IClose=} [properties] Properties to set
         */
        function Close(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Close instance using the specified properties.
         * @function create
         * @memberof mcs_proto.Close
         * @static
         * @param {mcs_proto.IClose=} [properties] Properties to set
         * @returns {mcs_proto.Close} Close instance
         */
        Close.create = function create(properties) {
            return new Close(properties);
        };

        /**
         * Encodes the specified Close message. Does not implicitly {@link mcs_proto.Close.verify|verify} messages.
         * @function encode
         * @memberof mcs_proto.Close
         * @static
         * @param {mcs_proto.IClose} message Close message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Close.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Close message, length delimited. Does not implicitly {@link mcs_proto.Close.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mcs_proto.Close
         * @static
         * @param {mcs_proto.IClose} message Close message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Close.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Close message from the specified reader or buffer.
         * @function decode
         * @memberof mcs_proto.Close
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mcs_proto.Close} Close
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Close.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mcs_proto.Close();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Close message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mcs_proto.Close
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mcs_proto.Close} Close
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Close.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Close message.
         * @function verify
         * @memberof mcs_proto.Close
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Close.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a Close message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mcs_proto.Close
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mcs_proto.Close} Close
         */
        Close.fromObject = function fromObject(object) {
            if (object instanceof $root.mcs_proto.Close)
                return object;
            return new $root.mcs_proto.Close();
        };

        /**
         * Creates a plain object from a Close message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mcs_proto.Close
         * @static
         * @param {mcs_proto.Close} message Close
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Close.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Close to JSON.
         * @function toJSON
         * @memberof mcs_proto.Close
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Close.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Close
         * @function getTypeUrl
         * @memberof mcs_proto.Close
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Close.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mcs_proto.Close";
        };

        return Close;
    })();

    mcs_proto.Extension = (function() {

        /**
         * Properties of an Extension.
         * @memberof mcs_proto
         * @interface IExtension
         * @property {number} id Extension id
         * @property {Uint8Array} data Extension data
         */

        /**
         * Constructs a new Extension.
         * @memberof mcs_proto
         * @classdesc Represents an Extension.
         * @implements IExtension
         * @constructor
         * @param {mcs_proto.IExtension=} [properties] Properties to set
         */
        function Extension(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Extension id.
         * @member {number} id
         * @memberof mcs_proto.Extension
         * @instance
         */
        Extension.prototype.id = 0;

        /**
         * Extension data.
         * @member {Uint8Array} data
         * @memberof mcs_proto.Extension
         * @instance
         */
        Extension.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new Extension instance using the specified properties.
         * @function create
         * @memberof mcs_proto.Extension
         * @static
         * @param {mcs_proto.IExtension=} [properties] Properties to set
         * @returns {mcs_proto.Extension} Extension instance
         */
        Extension.create = function create(properties) {
            return new Extension(properties);
        };

        /**
         * Encodes the specified Extension message. Does not implicitly {@link mcs_proto.Extension.verify|verify} messages.
         * @function encode
         * @memberof mcs_proto.Extension
         * @static
         * @param {mcs_proto.IExtension} message Extension message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Extension.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
            return writer;
        };

        /**
         * Encodes the specified Extension message, length delimited. Does not implicitly {@link mcs_proto.Extension.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mcs_proto.Extension
         * @static
         * @param {mcs_proto.IExtension} message Extension message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Extension.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Extension message from the specified reader or buffer.
         * @function decode
         * @memberof mcs_proto.Extension
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mcs_proto.Extension} Extension
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Extension.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mcs_proto.Extension();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.data = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("data"))
                throw $util.ProtocolError("missing required 'data'", { instance: message });
            return message;
        };

        /**
         * Decodes an Extension message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mcs_proto.Extension
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mcs_proto.Extension} Extension
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Extension.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Extension message.
         * @function verify
         * @memberof mcs_proto.Extension
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Extension.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
            return null;
        };

        /**
         * Creates an Extension message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mcs_proto.Extension
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mcs_proto.Extension} Extension
         */
        Extension.fromObject = function fromObject(object) {
            if (object instanceof $root.mcs_proto.Extension)
                return object;
            var message = new $root.mcs_proto.Extension();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            return message;
        };

        /**
         * Creates a plain object from an Extension message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mcs_proto.Extension
         * @static
         * @param {mcs_proto.Extension} message Extension
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Extension.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };

        /**
         * Converts this Extension to JSON.
         * @function toJSON
         * @memberof mcs_proto.Extension
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Extension.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Extension
         * @function getTypeUrl
         * @memberof mcs_proto.Extension
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Extension.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mcs_proto.Extension";
        };

        return Extension;
    })();

    mcs_proto.IqStanza = (function() {

        /**
         * Properties of an IqStanza.
         * @memberof mcs_proto
         * @interface IIqStanza
         * @property {Long|null} [rmqId] IqStanza rmqId
         * @property {mcs_proto.IqStanza.IqType} type IqStanza type
         * @property {string} id IqStanza id
         * @property {string|null} [from] IqStanza from
         * @property {string|null} [to] IqStanza to
         * @property {mcs_proto.IErrorInfo|null} [error] IqStanza error
         * @property {mcs_proto.IExtension|null} [extension] IqStanza extension
         * @property {string|null} [persistentId] IqStanza persistentId
         * @property {number|null} [streamId] IqStanza streamId
         * @property {number|null} [lastStreamIdReceived] IqStanza lastStreamIdReceived
         * @property {Long|null} [accountId] IqStanza accountId
         * @property {Long|null} [status] IqStanza status
         */

        /**
         * Constructs a new IqStanza.
         * @memberof mcs_proto
         * @classdesc TAG: 7
         * IqRequest must contain a single extension.  IqResponse may contain 0 or 1
         * extensions.
         * @implements IIqStanza
         * @constructor
         * @param {mcs_proto.IIqStanza=} [properties] Properties to set
         */
        function IqStanza(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IqStanza rmqId.
         * @member {Long} rmqId
         * @memberof mcs_proto.IqStanza
         * @instance
         */
        IqStanza.prototype.rmqId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * IqStanza type.
         * @member {mcs_proto.IqStanza.IqType} type
         * @memberof mcs_proto.IqStanza
         * @instance
         */
        IqStanza.prototype.type = 0;

        /**
         * IqStanza id.
         * @member {string} id
         * @memberof mcs_proto.IqStanza
         * @instance
         */
        IqStanza.prototype.id = "";

        /**
         * IqStanza from.
         * @member {string} from
         * @memberof mcs_proto.IqStanza
         * @instance
         */
        IqStanza.prototype.from = "";

        /**
         * IqStanza to.
         * @member {string} to
         * @memberof mcs_proto.IqStanza
         * @instance
         */
        IqStanza.prototype.to = "";

        /**
         * IqStanza error.
         * @member {mcs_proto.IErrorInfo|null|undefined} error
         * @memberof mcs_proto.IqStanza
         * @instance
         */
        IqStanza.prototype.error = null;

        /**
         * IqStanza extension.
         * @member {mcs_proto.IExtension|null|undefined} extension
         * @memberof mcs_proto.IqStanza
         * @instance
         */
        IqStanza.prototype.extension = null;

        /**
         * IqStanza persistentId.
         * @member {string} persistentId
         * @memberof mcs_proto.IqStanza
         * @instance
         */
        IqStanza.prototype.persistentId = "";

        /**
         * IqStanza streamId.
         * @member {number} streamId
         * @memberof mcs_proto.IqStanza
         * @instance
         */
        IqStanza.prototype.streamId = 0;

        /**
         * IqStanza lastStreamIdReceived.
         * @member {number} lastStreamIdReceived
         * @memberof mcs_proto.IqStanza
         * @instance
         */
        IqStanza.prototype.lastStreamIdReceived = 0;

        /**
         * IqStanza accountId.
         * @member {Long} accountId
         * @memberof mcs_proto.IqStanza
         * @instance
         */
        IqStanza.prototype.accountId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * IqStanza status.
         * @member {Long} status
         * @memberof mcs_proto.IqStanza
         * @instance
         */
        IqStanza.prototype.status = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new IqStanza instance using the specified properties.
         * @function create
         * @memberof mcs_proto.IqStanza
         * @static
         * @param {mcs_proto.IIqStanza=} [properties] Properties to set
         * @returns {mcs_proto.IqStanza} IqStanza instance
         */
        IqStanza.create = function create(properties) {
            return new IqStanza(properties);
        };

        /**
         * Encodes the specified IqStanza message. Does not implicitly {@link mcs_proto.IqStanza.verify|verify} messages.
         * @function encode
         * @memberof mcs_proto.IqStanza
         * @static
         * @param {mcs_proto.IIqStanza} message IqStanza message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IqStanza.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rmqId != null && Object.hasOwnProperty.call(message, "rmqId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.rmqId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.id);
            if (message.from != null && Object.hasOwnProperty.call(message, "from"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.from);
            if (message.to != null && Object.hasOwnProperty.call(message, "to"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.to);
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                $root.mcs_proto.ErrorInfo.encode(message.error, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.extension != null && Object.hasOwnProperty.call(message, "extension"))
                $root.mcs_proto.Extension.encode(message.extension, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.persistentId != null && Object.hasOwnProperty.call(message, "persistentId"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.persistentId);
            if (message.streamId != null && Object.hasOwnProperty.call(message, "streamId"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.streamId);
            if (message.lastStreamIdReceived != null && Object.hasOwnProperty.call(message, "lastStreamIdReceived"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.lastStreamIdReceived);
            if (message.accountId != null && Object.hasOwnProperty.call(message, "accountId"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.accountId);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.status);
            return writer;
        };

        /**
         * Encodes the specified IqStanza message, length delimited. Does not implicitly {@link mcs_proto.IqStanza.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mcs_proto.IqStanza
         * @static
         * @param {mcs_proto.IIqStanza} message IqStanza message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IqStanza.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an IqStanza message from the specified reader or buffer.
         * @function decode
         * @memberof mcs_proto.IqStanza
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mcs_proto.IqStanza} IqStanza
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IqStanza.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mcs_proto.IqStanza();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.rmqId = reader.int64();
                        break;
                    }
                case 2: {
                        message.type = reader.int32();
                        break;
                    }
                case 3: {
                        message.id = reader.string();
                        break;
                    }
                case 4: {
                        message.from = reader.string();
                        break;
                    }
                case 5: {
                        message.to = reader.string();
                        break;
                    }
                case 6: {
                        message.error = $root.mcs_proto.ErrorInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.extension = $root.mcs_proto.Extension.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.persistentId = reader.string();
                        break;
                    }
                case 9: {
                        message.streamId = reader.int32();
                        break;
                    }
                case 10: {
                        message.lastStreamIdReceived = reader.int32();
                        break;
                    }
                case 11: {
                        message.accountId = reader.int64();
                        break;
                    }
                case 12: {
                        message.status = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            return message;
        };

        /**
         * Decodes an IqStanza message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mcs_proto.IqStanza
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mcs_proto.IqStanza} IqStanza
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IqStanza.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IqStanza message.
         * @function verify
         * @memberof mcs_proto.IqStanza
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IqStanza.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rmqId != null && message.hasOwnProperty("rmqId"))
                if (!$util.isInteger(message.rmqId) && !(message.rmqId && $util.isInteger(message.rmqId.low) && $util.isInteger(message.rmqId.high)))
                    return "rmqId: integer|Long expected";
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
            if (!$util.isString(message.id))
                return "id: string expected";
            if (message.from != null && message.hasOwnProperty("from"))
                if (!$util.isString(message.from))
                    return "from: string expected";
            if (message.to != null && message.hasOwnProperty("to"))
                if (!$util.isString(message.to))
                    return "to: string expected";
            if (message.error != null && message.hasOwnProperty("error")) {
                var error = $root.mcs_proto.ErrorInfo.verify(message.error);
                if (error)
                    return "error." + error;
            }
            if (message.extension != null && message.hasOwnProperty("extension")) {
                var error = $root.mcs_proto.Extension.verify(message.extension);
                if (error)
                    return "extension." + error;
            }
            if (message.persistentId != null && message.hasOwnProperty("persistentId"))
                if (!$util.isString(message.persistentId))
                    return "persistentId: string expected";
            if (message.streamId != null && message.hasOwnProperty("streamId"))
                if (!$util.isInteger(message.streamId))
                    return "streamId: integer expected";
            if (message.lastStreamIdReceived != null && message.hasOwnProperty("lastStreamIdReceived"))
                if (!$util.isInteger(message.lastStreamIdReceived))
                    return "lastStreamIdReceived: integer expected";
            if (message.accountId != null && message.hasOwnProperty("accountId"))
                if (!$util.isInteger(message.accountId) && !(message.accountId && $util.isInteger(message.accountId.low) && $util.isInteger(message.accountId.high)))
                    return "accountId: integer|Long expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status) && !(message.status && $util.isInteger(message.status.low) && $util.isInteger(message.status.high)))
                    return "status: integer|Long expected";
            return null;
        };

        /**
         * Creates an IqStanza message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mcs_proto.IqStanza
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mcs_proto.IqStanza} IqStanza
         */
        IqStanza.fromObject = function fromObject(object) {
            if (object instanceof $root.mcs_proto.IqStanza)
                return object;
            var message = new $root.mcs_proto.IqStanza();
            if (object.rmqId != null)
                if ($util.Long)
                    (message.rmqId = $util.Long.fromValue(object.rmqId)).unsigned = false;
                else if (typeof object.rmqId === "string")
                    message.rmqId = parseInt(object.rmqId, 10);
                else if (typeof object.rmqId === "number")
                    message.rmqId = object.rmqId;
                else if (typeof object.rmqId === "object")
                    message.rmqId = new $util.LongBits(object.rmqId.low >>> 0, object.rmqId.high >>> 0).toNumber();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "GET":
            case 0:
                message.type = 0;
                break;
            case "SET":
            case 1:
                message.type = 1;
                break;
            case "RESULT":
            case 2:
                message.type = 2;
                break;
            case "IQ_ERROR":
            case 3:
                message.type = 3;
                break;
            }
            if (object.id != null)
                message.id = String(object.id);
            if (object.from != null)
                message.from = String(object.from);
            if (object.to != null)
                message.to = String(object.to);
            if (object.error != null) {
                if (typeof object.error !== "object")
                    throw TypeError(".mcs_proto.IqStanza.error: object expected");
                message.error = $root.mcs_proto.ErrorInfo.fromObject(object.error);
            }
            if (object.extension != null) {
                if (typeof object.extension !== "object")
                    throw TypeError(".mcs_proto.IqStanza.extension: object expected");
                message.extension = $root.mcs_proto.Extension.fromObject(object.extension);
            }
            if (object.persistentId != null)
                message.persistentId = String(object.persistentId);
            if (object.streamId != null)
                message.streamId = object.streamId | 0;
            if (object.lastStreamIdReceived != null)
                message.lastStreamIdReceived = object.lastStreamIdReceived | 0;
            if (object.accountId != null)
                if ($util.Long)
                    (message.accountId = $util.Long.fromValue(object.accountId)).unsigned = false;
                else if (typeof object.accountId === "string")
                    message.accountId = parseInt(object.accountId, 10);
                else if (typeof object.accountId === "number")
                    message.accountId = object.accountId;
                else if (typeof object.accountId === "object")
                    message.accountId = new $util.LongBits(object.accountId.low >>> 0, object.accountId.high >>> 0).toNumber();
            if (object.status != null)
                if ($util.Long)
                    (message.status = $util.Long.fromValue(object.status)).unsigned = false;
                else if (typeof object.status === "string")
                    message.status = parseInt(object.status, 10);
                else if (typeof object.status === "number")
                    message.status = object.status;
                else if (typeof object.status === "object")
                    message.status = new $util.LongBits(object.status.low >>> 0, object.status.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an IqStanza message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mcs_proto.IqStanza
         * @static
         * @param {mcs_proto.IqStanza} message IqStanza
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IqStanza.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.rmqId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.rmqId = options.longs === String ? "0" : 0;
                object.type = options.enums === String ? "GET" : 0;
                object.id = "";
                object.from = "";
                object.to = "";
                object.error = null;
                object.extension = null;
                object.persistentId = "";
                object.streamId = 0;
                object.lastStreamIdReceived = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.accountId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.accountId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.status = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.status = options.longs === String ? "0" : 0;
            }
            if (message.rmqId != null && message.hasOwnProperty("rmqId"))
                if (typeof message.rmqId === "number")
                    object.rmqId = options.longs === String ? String(message.rmqId) : message.rmqId;
                else
                    object.rmqId = options.longs === String ? $util.Long.prototype.toString.call(message.rmqId) : options.longs === Number ? new $util.LongBits(message.rmqId.low >>> 0, message.rmqId.high >>> 0).toNumber() : message.rmqId;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.mcs_proto.IqStanza.IqType[message.type] === undefined ? message.type : $root.mcs_proto.IqStanza.IqType[message.type] : message.type;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.from != null && message.hasOwnProperty("from"))
                object.from = message.from;
            if (message.to != null && message.hasOwnProperty("to"))
                object.to = message.to;
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = $root.mcs_proto.ErrorInfo.toObject(message.error, options);
            if (message.extension != null && message.hasOwnProperty("extension"))
                object.extension = $root.mcs_proto.Extension.toObject(message.extension, options);
            if (message.persistentId != null && message.hasOwnProperty("persistentId"))
                object.persistentId = message.persistentId;
            if (message.streamId != null && message.hasOwnProperty("streamId"))
                object.streamId = message.streamId;
            if (message.lastStreamIdReceived != null && message.hasOwnProperty("lastStreamIdReceived"))
                object.lastStreamIdReceived = message.lastStreamIdReceived;
            if (message.accountId != null && message.hasOwnProperty("accountId"))
                if (typeof message.accountId === "number")
                    object.accountId = options.longs === String ? String(message.accountId) : message.accountId;
                else
                    object.accountId = options.longs === String ? $util.Long.prototype.toString.call(message.accountId) : options.longs === Number ? new $util.LongBits(message.accountId.low >>> 0, message.accountId.high >>> 0).toNumber() : message.accountId;
            if (message.status != null && message.hasOwnProperty("status"))
                if (typeof message.status === "number")
                    object.status = options.longs === String ? String(message.status) : message.status;
                else
                    object.status = options.longs === String ? $util.Long.prototype.toString.call(message.status) : options.longs === Number ? new $util.LongBits(message.status.low >>> 0, message.status.high >>> 0).toNumber() : message.status;
            return object;
        };

        /**
         * Converts this IqStanza to JSON.
         * @function toJSON
         * @memberof mcs_proto.IqStanza
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IqStanza.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for IqStanza
         * @function getTypeUrl
         * @memberof mcs_proto.IqStanza
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        IqStanza.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mcs_proto.IqStanza";
        };

        /**
         * IqType enum.
         * @name mcs_proto.IqStanza.IqType
         * @enum {number}
         * @property {number} GET=0 GET value
         * @property {number} SET=1 SET value
         * @property {number} RESULT=2 RESULT value
         * @property {number} IQ_ERROR=3 IQ_ERROR value
         */
        IqStanza.IqType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "GET"] = 0;
            values[valuesById[1] = "SET"] = 1;
            values[valuesById[2] = "RESULT"] = 2;
            values[valuesById[3] = "IQ_ERROR"] = 3;
            return values;
        })();

        return IqStanza;
    })();

    mcs_proto.AppData = (function() {

        /**
         * Properties of an AppData.
         * @memberof mcs_proto
         * @interface IAppData
         * @property {string} key AppData key
         * @property {string} value AppData value
         */

        /**
         * Constructs a new AppData.
         * @memberof mcs_proto
         * @classdesc Represents an AppData.
         * @implements IAppData
         * @constructor
         * @param {mcs_proto.IAppData=} [properties] Properties to set
         */
        function AppData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AppData key.
         * @member {string} key
         * @memberof mcs_proto.AppData
         * @instance
         */
        AppData.prototype.key = "";

        /**
         * AppData value.
         * @member {string} value
         * @memberof mcs_proto.AppData
         * @instance
         */
        AppData.prototype.value = "";

        /**
         * Creates a new AppData instance using the specified properties.
         * @function create
         * @memberof mcs_proto.AppData
         * @static
         * @param {mcs_proto.IAppData=} [properties] Properties to set
         * @returns {mcs_proto.AppData} AppData instance
         */
        AppData.create = function create(properties) {
            return new AppData(properties);
        };

        /**
         * Encodes the specified AppData message. Does not implicitly {@link mcs_proto.AppData.verify|verify} messages.
         * @function encode
         * @memberof mcs_proto.AppData
         * @static
         * @param {mcs_proto.IAppData} message AppData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
            return writer;
        };

        /**
         * Encodes the specified AppData message, length delimited. Does not implicitly {@link mcs_proto.AppData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mcs_proto.AppData
         * @static
         * @param {mcs_proto.IAppData} message AppData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AppData message from the specified reader or buffer.
         * @function decode
         * @memberof mcs_proto.AppData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mcs_proto.AppData} AppData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mcs_proto.AppData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.key = reader.string();
                        break;
                    }
                case 2: {
                        message.value = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("key"))
                throw $util.ProtocolError("missing required 'key'", { instance: message });
            if (!message.hasOwnProperty("value"))
                throw $util.ProtocolError("missing required 'value'", { instance: message });
            return message;
        };

        /**
         * Decodes an AppData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mcs_proto.AppData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mcs_proto.AppData} AppData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AppData message.
         * @function verify
         * @memberof mcs_proto.AppData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AppData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.key))
                return "key: string expected";
            if (!$util.isString(message.value))
                return "value: string expected";
            return null;
        };

        /**
         * Creates an AppData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mcs_proto.AppData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mcs_proto.AppData} AppData
         */
        AppData.fromObject = function fromObject(object) {
            if (object instanceof $root.mcs_proto.AppData)
                return object;
            var message = new $root.mcs_proto.AppData();
            if (object.key != null)
                message.key = String(object.key);
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };

        /**
         * Creates a plain object from an AppData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mcs_proto.AppData
         * @static
         * @param {mcs_proto.AppData} message AppData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AppData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.key = "";
                object.value = "";
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this AppData to JSON.
         * @function toJSON
         * @memberof mcs_proto.AppData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AppData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AppData
         * @function getTypeUrl
         * @memberof mcs_proto.AppData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AppData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mcs_proto.AppData";
        };

        return AppData;
    })();

    mcs_proto.DataMessageStanza = (function() {

        /**
         * Properties of a DataMessageStanza.
         * @memberof mcs_proto
         * @interface IDataMessageStanza
         * @property {string|null} [id] DataMessageStanza id
         * @property {string} from DataMessageStanza from
         * @property {string|null} [to] DataMessageStanza to
         * @property {string} category DataMessageStanza category
         * @property {string|null} [token] DataMessageStanza token
         * @property {Array.<mcs_proto.IAppData>|null} [appData] DataMessageStanza appData
         * @property {boolean|null} [fromTrustedServer] DataMessageStanza fromTrustedServer
         * @property {string|null} [persistentId] DataMessageStanza persistentId
         * @property {number|null} [streamId] DataMessageStanza streamId
         * @property {number|null} [lastStreamIdReceived] DataMessageStanza lastStreamIdReceived
         * @property {string|null} [regId] DataMessageStanza regId
         * @property {Long|null} [deviceUserId] DataMessageStanza deviceUserId
         * @property {number|null} [ttl] DataMessageStanza ttl
         * @property {Long|null} [sent] DataMessageStanza sent
         * @property {number|null} [queued] DataMessageStanza queued
         * @property {Long|null} [status] DataMessageStanza status
         * @property {Uint8Array|null} [rawData] DataMessageStanza rawData
         * @property {boolean|null} [immediateAck] DataMessageStanza immediateAck
         */

        /**
         * Constructs a new DataMessageStanza.
         * @memberof mcs_proto
         * @classdesc TAG: 8
         * @implements IDataMessageStanza
         * @constructor
         * @param {mcs_proto.IDataMessageStanza=} [properties] Properties to set
         */
        function DataMessageStanza(properties) {
            this.appData = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DataMessageStanza id.
         * @member {string} id
         * @memberof mcs_proto.DataMessageStanza
         * @instance
         */
        DataMessageStanza.prototype.id = "";

        /**
         * DataMessageStanza from.
         * @member {string} from
         * @memberof mcs_proto.DataMessageStanza
         * @instance
         */
        DataMessageStanza.prototype.from = "";

        /**
         * DataMessageStanza to.
         * @member {string} to
         * @memberof mcs_proto.DataMessageStanza
         * @instance
         */
        DataMessageStanza.prototype.to = "";

        /**
         * DataMessageStanza category.
         * @member {string} category
         * @memberof mcs_proto.DataMessageStanza
         * @instance
         */
        DataMessageStanza.prototype.category = "";

        /**
         * DataMessageStanza token.
         * @member {string} token
         * @memberof mcs_proto.DataMessageStanza
         * @instance
         */
        DataMessageStanza.prototype.token = "";

        /**
         * DataMessageStanza appData.
         * @member {Array.<mcs_proto.IAppData>} appData
         * @memberof mcs_proto.DataMessageStanza
         * @instance
         */
        DataMessageStanza.prototype.appData = $util.emptyArray;

        /**
         * DataMessageStanza fromTrustedServer.
         * @member {boolean} fromTrustedServer
         * @memberof mcs_proto.DataMessageStanza
         * @instance
         */
        DataMessageStanza.prototype.fromTrustedServer = false;

        /**
         * DataMessageStanza persistentId.
         * @member {string} persistentId
         * @memberof mcs_proto.DataMessageStanza
         * @instance
         */
        DataMessageStanza.prototype.persistentId = "";

        /**
         * DataMessageStanza streamId.
         * @member {number} streamId
         * @memberof mcs_proto.DataMessageStanza
         * @instance
         */
        DataMessageStanza.prototype.streamId = 0;

        /**
         * DataMessageStanza lastStreamIdReceived.
         * @member {number} lastStreamIdReceived
         * @memberof mcs_proto.DataMessageStanza
         * @instance
         */
        DataMessageStanza.prototype.lastStreamIdReceived = 0;

        /**
         * DataMessageStanza regId.
         * @member {string} regId
         * @memberof mcs_proto.DataMessageStanza
         * @instance
         */
        DataMessageStanza.prototype.regId = "";

        /**
         * DataMessageStanza deviceUserId.
         * @member {Long} deviceUserId
         * @memberof mcs_proto.DataMessageStanza
         * @instance
         */
        DataMessageStanza.prototype.deviceUserId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * DataMessageStanza ttl.
         * @member {number} ttl
         * @memberof mcs_proto.DataMessageStanza
         * @instance
         */
        DataMessageStanza.prototype.ttl = 0;

        /**
         * DataMessageStanza sent.
         * @member {Long} sent
         * @memberof mcs_proto.DataMessageStanza
         * @instance
         */
        DataMessageStanza.prototype.sent = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * DataMessageStanza queued.
         * @member {number} queued
         * @memberof mcs_proto.DataMessageStanza
         * @instance
         */
        DataMessageStanza.prototype.queued = 0;

        /**
         * DataMessageStanza status.
         * @member {Long} status
         * @memberof mcs_proto.DataMessageStanza
         * @instance
         */
        DataMessageStanza.prototype.status = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * DataMessageStanza rawData.
         * @member {Uint8Array} rawData
         * @memberof mcs_proto.DataMessageStanza
         * @instance
         */
        DataMessageStanza.prototype.rawData = $util.newBuffer([]);

        /**
         * DataMessageStanza immediateAck.
         * @member {boolean} immediateAck
         * @memberof mcs_proto.DataMessageStanza
         * @instance
         */
        DataMessageStanza.prototype.immediateAck = false;

        /**
         * Creates a new DataMessageStanza instance using the specified properties.
         * @function create
         * @memberof mcs_proto.DataMessageStanza
         * @static
         * @param {mcs_proto.IDataMessageStanza=} [properties] Properties to set
         * @returns {mcs_proto.DataMessageStanza} DataMessageStanza instance
         */
        DataMessageStanza.create = function create(properties) {
            return new DataMessageStanza(properties);
        };

        /**
         * Encodes the specified DataMessageStanza message. Does not implicitly {@link mcs_proto.DataMessageStanza.verify|verify} messages.
         * @function encode
         * @memberof mcs_proto.DataMessageStanza
         * @static
         * @param {mcs_proto.IDataMessageStanza} message DataMessageStanza message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DataMessageStanza.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.id);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.from);
            if (message.to != null && Object.hasOwnProperty.call(message, "to"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.to);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.category);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.token);
            if (message.appData != null && message.appData.length)
                for (var i = 0; i < message.appData.length; ++i)
                    $root.mcs_proto.AppData.encode(message.appData[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.fromTrustedServer != null && Object.hasOwnProperty.call(message, "fromTrustedServer"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.fromTrustedServer);
            if (message.persistentId != null && Object.hasOwnProperty.call(message, "persistentId"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.persistentId);
            if (message.streamId != null && Object.hasOwnProperty.call(message, "streamId"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.streamId);
            if (message.lastStreamIdReceived != null && Object.hasOwnProperty.call(message, "lastStreamIdReceived"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.lastStreamIdReceived);
            if (message.regId != null && Object.hasOwnProperty.call(message, "regId"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.regId);
            if (message.deviceUserId != null && Object.hasOwnProperty.call(message, "deviceUserId"))
                writer.uint32(/* id 16, wireType 0 =*/128).int64(message.deviceUserId);
            if (message.ttl != null && Object.hasOwnProperty.call(message, "ttl"))
                writer.uint32(/* id 17, wireType 0 =*/136).int32(message.ttl);
            if (message.sent != null && Object.hasOwnProperty.call(message, "sent"))
                writer.uint32(/* id 18, wireType 0 =*/144).int64(message.sent);
            if (message.queued != null && Object.hasOwnProperty.call(message, "queued"))
                writer.uint32(/* id 19, wireType 0 =*/152).int32(message.queued);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 20, wireType 0 =*/160).int64(message.status);
            if (message.rawData != null && Object.hasOwnProperty.call(message, "rawData"))
                writer.uint32(/* id 21, wireType 2 =*/170).bytes(message.rawData);
            if (message.immediateAck != null && Object.hasOwnProperty.call(message, "immediateAck"))
                writer.uint32(/* id 24, wireType 0 =*/192).bool(message.immediateAck);
            return writer;
        };

        /**
         * Encodes the specified DataMessageStanza message, length delimited. Does not implicitly {@link mcs_proto.DataMessageStanza.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mcs_proto.DataMessageStanza
         * @static
         * @param {mcs_proto.IDataMessageStanza} message DataMessageStanza message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DataMessageStanza.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DataMessageStanza message from the specified reader or buffer.
         * @function decode
         * @memberof mcs_proto.DataMessageStanza
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mcs_proto.DataMessageStanza} DataMessageStanza
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DataMessageStanza.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mcs_proto.DataMessageStanza();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.id = reader.string();
                        break;
                    }
                case 3: {
                        message.from = reader.string();
                        break;
                    }
                case 4: {
                        message.to = reader.string();
                        break;
                    }
                case 5: {
                        message.category = reader.string();
                        break;
                    }
                case 6: {
                        message.token = reader.string();
                        break;
                    }
                case 7: {
                        if (!(message.appData && message.appData.length))
                            message.appData = [];
                        message.appData.push($root.mcs_proto.AppData.decode(reader, reader.uint32()));
                        break;
                    }
                case 8: {
                        message.fromTrustedServer = reader.bool();
                        break;
                    }
                case 9: {
                        message.persistentId = reader.string();
                        break;
                    }
                case 10: {
                        message.streamId = reader.int32();
                        break;
                    }
                case 11: {
                        message.lastStreamIdReceived = reader.int32();
                        break;
                    }
                case 13: {
                        message.regId = reader.string();
                        break;
                    }
                case 16: {
                        message.deviceUserId = reader.int64();
                        break;
                    }
                case 17: {
                        message.ttl = reader.int32();
                        break;
                    }
                case 18: {
                        message.sent = reader.int64();
                        break;
                    }
                case 19: {
                        message.queued = reader.int32();
                        break;
                    }
                case 20: {
                        message.status = reader.int64();
                        break;
                    }
                case 21: {
                        message.rawData = reader.bytes();
                        break;
                    }
                case 24: {
                        message.immediateAck = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("from"))
                throw $util.ProtocolError("missing required 'from'", { instance: message });
            if (!message.hasOwnProperty("category"))
                throw $util.ProtocolError("missing required 'category'", { instance: message });
            return message;
        };

        /**
         * Decodes a DataMessageStanza message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mcs_proto.DataMessageStanza
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mcs_proto.DataMessageStanza} DataMessageStanza
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DataMessageStanza.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DataMessageStanza message.
         * @function verify
         * @memberof mcs_proto.DataMessageStanza
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DataMessageStanza.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (!$util.isString(message.from))
                return "from: string expected";
            if (message.to != null && message.hasOwnProperty("to"))
                if (!$util.isString(message.to))
                    return "to: string expected";
            if (!$util.isString(message.category))
                return "category: string expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.appData != null && message.hasOwnProperty("appData")) {
                if (!Array.isArray(message.appData))
                    return "appData: array expected";
                for (var i = 0; i < message.appData.length; ++i) {
                    var error = $root.mcs_proto.AppData.verify(message.appData[i]);
                    if (error)
                        return "appData." + error;
                }
            }
            if (message.fromTrustedServer != null && message.hasOwnProperty("fromTrustedServer"))
                if (typeof message.fromTrustedServer !== "boolean")
                    return "fromTrustedServer: boolean expected";
            if (message.persistentId != null && message.hasOwnProperty("persistentId"))
                if (!$util.isString(message.persistentId))
                    return "persistentId: string expected";
            if (message.streamId != null && message.hasOwnProperty("streamId"))
                if (!$util.isInteger(message.streamId))
                    return "streamId: integer expected";
            if (message.lastStreamIdReceived != null && message.hasOwnProperty("lastStreamIdReceived"))
                if (!$util.isInteger(message.lastStreamIdReceived))
                    return "lastStreamIdReceived: integer expected";
            if (message.regId != null && message.hasOwnProperty("regId"))
                if (!$util.isString(message.regId))
                    return "regId: string expected";
            if (message.deviceUserId != null && message.hasOwnProperty("deviceUserId"))
                if (!$util.isInteger(message.deviceUserId) && !(message.deviceUserId && $util.isInteger(message.deviceUserId.low) && $util.isInteger(message.deviceUserId.high)))
                    return "deviceUserId: integer|Long expected";
            if (message.ttl != null && message.hasOwnProperty("ttl"))
                if (!$util.isInteger(message.ttl))
                    return "ttl: integer expected";
            if (message.sent != null && message.hasOwnProperty("sent"))
                if (!$util.isInteger(message.sent) && !(message.sent && $util.isInteger(message.sent.low) && $util.isInteger(message.sent.high)))
                    return "sent: integer|Long expected";
            if (message.queued != null && message.hasOwnProperty("queued"))
                if (!$util.isInteger(message.queued))
                    return "queued: integer expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status) && !(message.status && $util.isInteger(message.status.low) && $util.isInteger(message.status.high)))
                    return "status: integer|Long expected";
            if (message.rawData != null && message.hasOwnProperty("rawData"))
                if (!(message.rawData && typeof message.rawData.length === "number" || $util.isString(message.rawData)))
                    return "rawData: buffer expected";
            if (message.immediateAck != null && message.hasOwnProperty("immediateAck"))
                if (typeof message.immediateAck !== "boolean")
                    return "immediateAck: boolean expected";
            return null;
        };

        /**
         * Creates a DataMessageStanza message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mcs_proto.DataMessageStanza
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mcs_proto.DataMessageStanza} DataMessageStanza
         */
        DataMessageStanza.fromObject = function fromObject(object) {
            if (object instanceof $root.mcs_proto.DataMessageStanza)
                return object;
            var message = new $root.mcs_proto.DataMessageStanza();
            if (object.id != null)
                message.id = String(object.id);
            if (object.from != null)
                message.from = String(object.from);
            if (object.to != null)
                message.to = String(object.to);
            if (object.category != null)
                message.category = String(object.category);
            if (object.token != null)
                message.token = String(object.token);
            if (object.appData) {
                if (!Array.isArray(object.appData))
                    throw TypeError(".mcs_proto.DataMessageStanza.appData: array expected");
                message.appData = [];
                for (var i = 0; i < object.appData.length; ++i) {
                    if (typeof object.appData[i] !== "object")
                        throw TypeError(".mcs_proto.DataMessageStanza.appData: object expected");
                    message.appData[i] = $root.mcs_proto.AppData.fromObject(object.appData[i]);
                }
            }
            if (object.fromTrustedServer != null)
                message.fromTrustedServer = Boolean(object.fromTrustedServer);
            if (object.persistentId != null)
                message.persistentId = String(object.persistentId);
            if (object.streamId != null)
                message.streamId = object.streamId | 0;
            if (object.lastStreamIdReceived != null)
                message.lastStreamIdReceived = object.lastStreamIdReceived | 0;
            if (object.regId != null)
                message.regId = String(object.regId);
            if (object.deviceUserId != null)
                if ($util.Long)
                    (message.deviceUserId = $util.Long.fromValue(object.deviceUserId)).unsigned = false;
                else if (typeof object.deviceUserId === "string")
                    message.deviceUserId = parseInt(object.deviceUserId, 10);
                else if (typeof object.deviceUserId === "number")
                    message.deviceUserId = object.deviceUserId;
                else if (typeof object.deviceUserId === "object")
                    message.deviceUserId = new $util.LongBits(object.deviceUserId.low >>> 0, object.deviceUserId.high >>> 0).toNumber();
            if (object.ttl != null)
                message.ttl = object.ttl | 0;
            if (object.sent != null)
                if ($util.Long)
                    (message.sent = $util.Long.fromValue(object.sent)).unsigned = false;
                else if (typeof object.sent === "string")
                    message.sent = parseInt(object.sent, 10);
                else if (typeof object.sent === "number")
                    message.sent = object.sent;
                else if (typeof object.sent === "object")
                    message.sent = new $util.LongBits(object.sent.low >>> 0, object.sent.high >>> 0).toNumber();
            if (object.queued != null)
                message.queued = object.queued | 0;
            if (object.status != null)
                if ($util.Long)
                    (message.status = $util.Long.fromValue(object.status)).unsigned = false;
                else if (typeof object.status === "string")
                    message.status = parseInt(object.status, 10);
                else if (typeof object.status === "number")
                    message.status = object.status;
                else if (typeof object.status === "object")
                    message.status = new $util.LongBits(object.status.low >>> 0, object.status.high >>> 0).toNumber();
            if (object.rawData != null)
                if (typeof object.rawData === "string")
                    $util.base64.decode(object.rawData, message.rawData = $util.newBuffer($util.base64.length(object.rawData)), 0);
                else if (object.rawData.length >= 0)
                    message.rawData = object.rawData;
            if (object.immediateAck != null)
                message.immediateAck = Boolean(object.immediateAck);
            return message;
        };

        /**
         * Creates a plain object from a DataMessageStanza message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mcs_proto.DataMessageStanza
         * @static
         * @param {mcs_proto.DataMessageStanza} message DataMessageStanza
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DataMessageStanza.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.appData = [];
            if (options.defaults) {
                object.id = "";
                object.from = "";
                object.to = "";
                object.category = "";
                object.token = "";
                object.fromTrustedServer = false;
                object.persistentId = "";
                object.streamId = 0;
                object.lastStreamIdReceived = 0;
                object.regId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.deviceUserId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.deviceUserId = options.longs === String ? "0" : 0;
                object.ttl = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sent = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sent = options.longs === String ? "0" : 0;
                object.queued = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.status = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.status = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.rawData = "";
                else {
                    object.rawData = [];
                    if (options.bytes !== Array)
                        object.rawData = $util.newBuffer(object.rawData);
                }
                object.immediateAck = false;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.from != null && message.hasOwnProperty("from"))
                object.from = message.from;
            if (message.to != null && message.hasOwnProperty("to"))
                object.to = message.to;
            if (message.category != null && message.hasOwnProperty("category"))
                object.category = message.category;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.appData && message.appData.length) {
                object.appData = [];
                for (var j = 0; j < message.appData.length; ++j)
                    object.appData[j] = $root.mcs_proto.AppData.toObject(message.appData[j], options);
            }
            if (message.fromTrustedServer != null && message.hasOwnProperty("fromTrustedServer"))
                object.fromTrustedServer = message.fromTrustedServer;
            if (message.persistentId != null && message.hasOwnProperty("persistentId"))
                object.persistentId = message.persistentId;
            if (message.streamId != null && message.hasOwnProperty("streamId"))
                object.streamId = message.streamId;
            if (message.lastStreamIdReceived != null && message.hasOwnProperty("lastStreamIdReceived"))
                object.lastStreamIdReceived = message.lastStreamIdReceived;
            if (message.regId != null && message.hasOwnProperty("regId"))
                object.regId = message.regId;
            if (message.deviceUserId != null && message.hasOwnProperty("deviceUserId"))
                if (typeof message.deviceUserId === "number")
                    object.deviceUserId = options.longs === String ? String(message.deviceUserId) : message.deviceUserId;
                else
                    object.deviceUserId = options.longs === String ? $util.Long.prototype.toString.call(message.deviceUserId) : options.longs === Number ? new $util.LongBits(message.deviceUserId.low >>> 0, message.deviceUserId.high >>> 0).toNumber() : message.deviceUserId;
            if (message.ttl != null && message.hasOwnProperty("ttl"))
                object.ttl = message.ttl;
            if (message.sent != null && message.hasOwnProperty("sent"))
                if (typeof message.sent === "number")
                    object.sent = options.longs === String ? String(message.sent) : message.sent;
                else
                    object.sent = options.longs === String ? $util.Long.prototype.toString.call(message.sent) : options.longs === Number ? new $util.LongBits(message.sent.low >>> 0, message.sent.high >>> 0).toNumber() : message.sent;
            if (message.queued != null && message.hasOwnProperty("queued"))
                object.queued = message.queued;
            if (message.status != null && message.hasOwnProperty("status"))
                if (typeof message.status === "number")
                    object.status = options.longs === String ? String(message.status) : message.status;
                else
                    object.status = options.longs === String ? $util.Long.prototype.toString.call(message.status) : options.longs === Number ? new $util.LongBits(message.status.low >>> 0, message.status.high >>> 0).toNumber() : message.status;
            if (message.rawData != null && message.hasOwnProperty("rawData"))
                object.rawData = options.bytes === String ? $util.base64.encode(message.rawData, 0, message.rawData.length) : options.bytes === Array ? Array.prototype.slice.call(message.rawData) : message.rawData;
            if (message.immediateAck != null && message.hasOwnProperty("immediateAck"))
                object.immediateAck = message.immediateAck;
            return object;
        };

        /**
         * Converts this DataMessageStanza to JSON.
         * @function toJSON
         * @memberof mcs_proto.DataMessageStanza
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DataMessageStanza.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DataMessageStanza
         * @function getTypeUrl
         * @memberof mcs_proto.DataMessageStanza
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DataMessageStanza.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mcs_proto.DataMessageStanza";
        };

        return DataMessageStanza;
    })();

    mcs_proto.StreamAck = (function() {

        /**
         * Properties of a StreamAck.
         * @memberof mcs_proto
         * @interface IStreamAck
         */

        /**
         * Constructs a new StreamAck.
         * @memberof mcs_proto
         * @classdesc Included in IQ with ID 13, sent from client or server after 10 unconfirmed
         * messages.
         * @implements IStreamAck
         * @constructor
         * @param {mcs_proto.IStreamAck=} [properties] Properties to set
         */
        function StreamAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new StreamAck instance using the specified properties.
         * @function create
         * @memberof mcs_proto.StreamAck
         * @static
         * @param {mcs_proto.IStreamAck=} [properties] Properties to set
         * @returns {mcs_proto.StreamAck} StreamAck instance
         */
        StreamAck.create = function create(properties) {
            return new StreamAck(properties);
        };

        /**
         * Encodes the specified StreamAck message. Does not implicitly {@link mcs_proto.StreamAck.verify|verify} messages.
         * @function encode
         * @memberof mcs_proto.StreamAck
         * @static
         * @param {mcs_proto.IStreamAck} message StreamAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StreamAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified StreamAck message, length delimited. Does not implicitly {@link mcs_proto.StreamAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mcs_proto.StreamAck
         * @static
         * @param {mcs_proto.IStreamAck} message StreamAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StreamAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StreamAck message from the specified reader or buffer.
         * @function decode
         * @memberof mcs_proto.StreamAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mcs_proto.StreamAck} StreamAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StreamAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mcs_proto.StreamAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StreamAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mcs_proto.StreamAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mcs_proto.StreamAck} StreamAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StreamAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StreamAck message.
         * @function verify
         * @memberof mcs_proto.StreamAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StreamAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a StreamAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mcs_proto.StreamAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mcs_proto.StreamAck} StreamAck
         */
        StreamAck.fromObject = function fromObject(object) {
            if (object instanceof $root.mcs_proto.StreamAck)
                return object;
            return new $root.mcs_proto.StreamAck();
        };

        /**
         * Creates a plain object from a StreamAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mcs_proto.StreamAck
         * @static
         * @param {mcs_proto.StreamAck} message StreamAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StreamAck.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this StreamAck to JSON.
         * @function toJSON
         * @memberof mcs_proto.StreamAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StreamAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StreamAck
         * @function getTypeUrl
         * @memberof mcs_proto.StreamAck
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StreamAck.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mcs_proto.StreamAck";
        };

        return StreamAck;
    })();

    mcs_proto.SelectiveAck = (function() {

        /**
         * Properties of a SelectiveAck.
         * @memberof mcs_proto
         * @interface ISelectiveAck
         * @property {Array.<string>|null} [id] SelectiveAck id
         */

        /**
         * Constructs a new SelectiveAck.
         * @memberof mcs_proto
         * @classdesc Included in IQ sent after LoginResponse from server with ID 12.
         * @implements ISelectiveAck
         * @constructor
         * @param {mcs_proto.ISelectiveAck=} [properties] Properties to set
         */
        function SelectiveAck(properties) {
            this.id = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SelectiveAck id.
         * @member {Array.<string>} id
         * @memberof mcs_proto.SelectiveAck
         * @instance
         */
        SelectiveAck.prototype.id = $util.emptyArray;

        /**
         * Creates a new SelectiveAck instance using the specified properties.
         * @function create
         * @memberof mcs_proto.SelectiveAck
         * @static
         * @param {mcs_proto.ISelectiveAck=} [properties] Properties to set
         * @returns {mcs_proto.SelectiveAck} SelectiveAck instance
         */
        SelectiveAck.create = function create(properties) {
            return new SelectiveAck(properties);
        };

        /**
         * Encodes the specified SelectiveAck message. Does not implicitly {@link mcs_proto.SelectiveAck.verify|verify} messages.
         * @function encode
         * @memberof mcs_proto.SelectiveAck
         * @static
         * @param {mcs_proto.ISelectiveAck} message SelectiveAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SelectiveAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.id.length)
                for (var i = 0; i < message.id.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id[i]);
            return writer;
        };

        /**
         * Encodes the specified SelectiveAck message, length delimited. Does not implicitly {@link mcs_proto.SelectiveAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof mcs_proto.SelectiveAck
         * @static
         * @param {mcs_proto.ISelectiveAck} message SelectiveAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SelectiveAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SelectiveAck message from the specified reader or buffer.
         * @function decode
         * @memberof mcs_proto.SelectiveAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {mcs_proto.SelectiveAck} SelectiveAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SelectiveAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mcs_proto.SelectiveAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.id && message.id.length))
                            message.id = [];
                        message.id.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SelectiveAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof mcs_proto.SelectiveAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {mcs_proto.SelectiveAck} SelectiveAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SelectiveAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SelectiveAck message.
         * @function verify
         * @memberof mcs_proto.SelectiveAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SelectiveAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id")) {
                if (!Array.isArray(message.id))
                    return "id: array expected";
                for (var i = 0; i < message.id.length; ++i)
                    if (!$util.isString(message.id[i]))
                        return "id: string[] expected";
            }
            return null;
        };

        /**
         * Creates a SelectiveAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof mcs_proto.SelectiveAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {mcs_proto.SelectiveAck} SelectiveAck
         */
        SelectiveAck.fromObject = function fromObject(object) {
            if (object instanceof $root.mcs_proto.SelectiveAck)
                return object;
            var message = new $root.mcs_proto.SelectiveAck();
            if (object.id) {
                if (!Array.isArray(object.id))
                    throw TypeError(".mcs_proto.SelectiveAck.id: array expected");
                message.id = [];
                for (var i = 0; i < object.id.length; ++i)
                    message.id[i] = String(object.id[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a SelectiveAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof mcs_proto.SelectiveAck
         * @static
         * @param {mcs_proto.SelectiveAck} message SelectiveAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SelectiveAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.id = [];
            if (message.id && message.id.length) {
                object.id = [];
                for (var j = 0; j < message.id.length; ++j)
                    object.id[j] = message.id[j];
            }
            return object;
        };

        /**
         * Converts this SelectiveAck to JSON.
         * @function toJSON
         * @memberof mcs_proto.SelectiveAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SelectiveAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SelectiveAck
         * @function getTypeUrl
         * @memberof mcs_proto.SelectiveAck
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SelectiveAck.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/mcs_proto.SelectiveAck";
        };

        return SelectiveAck;
    })();

    return mcs_proto;
})();

module.exports = $root;
