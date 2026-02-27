export enum ProcessingState {
    // Processing the version, tag, and size packets (assuming minimum length
    // size packet). Only used during the login handshake.
    MCS_VERSION_TAG_AND_SIZE = 0,
    // Processing the tag and size packets (assuming minimum length size
    // packet). Used for normal messages.
    MCS_TAG_AND_SIZE = 1,
    // Processing the size packet alone.
    MCS_SIZE = 2,
    // Processing the protocol buffer bytes (for those messages with non-zero
    // sizes).
    MCS_PROTO_BYTES = 3,
}

export enum Variables {
    // # of bytes a MCS version packet consumes.
    kVersionPacketLen = 1,
    // # of bytes a tag packet consumes.
    kTagPacketLen = 1,
    // Max # of bytes a length packet consumes. A Varint32 can consume up to 5 bytes
    // (the msb in each byte is reserved for denoting whether more bytes follow).
    // Although the protocol only allows for 4KiB payloads currently, and the socket
    // stream buffer is only of size 8KiB, it's possible for certain applications to
    // have larger message sizes. When payload is larger than 4KiB, an temporary
    // in-memory buffer is used instead of the normal in-place socket stream buffer.
    kSizePacketLenMin = 1,
    kSizePacketLenMax = 5,

    // The current MCS protocol version.
    kMCSVersion = 41,
}

// MCS Message tags.
// WARNING: the order of these tags must remain the same, as the tag values
// must be consistent with those used on the server.
export enum MCSProtoTag {
    kHeartbeatPingTag = 0,
    kHeartbeatAckTag = 1,
    kLoginRequestTag = 2,
    kLoginResponseTag = 3,
    kCloseTag = 4,
    kMessageStanzaTag = 5,
    kPresenceStanzaTag = 6,
    kIqStanzaTag = 7,
    kDataMessageStanzaTag = 8,
    kBatchPresenceStanzaTag = 9,
    kStreamErrorStanzaTag = 10,
    kHttpRequestTag = 11,
    kHttpResponseTag = 12,
    kBindAccountRequestTag = 13,
    kBindAccountResponseTag = 14,
    kTalkMetadataTag = 15,
    kNumProtoTypes = 16,
}

export enum GcmRequestConstants {
    kErrorPrefix = "Error=",
    kTokenPrefix = "token=",
    kDeviceRegistrationError = "PHONE_REGISTRATION_ERROR",
    kAuthenticationFailed = "AUTHENTICATION_FAILED",
    kInvalidSender = "INVALID_SENDER",
    kInvalidParameters = "INVALID_PARAMETERS",
    kInternalServerError = "InternalServerError",
    kQuotaExceeded = "QUOTA_EXCEEDED",
    kTooManyRegistrations = "TOO_MANY_REGISTRATIONS",
}

// Taken from `registration_request.h` in Chromium project
export enum GcmRequestStatus {
    SUCCESS,                    // Registration completed successfully.
    INVALID_PARAMETERS,         // One of request paramteres was invalid.
    INVALID_SENDER,             // One of the provided senders was invalid.
    AUTHENTICATION_FAILED,      // Authentication failed.
    DEVICE_REGISTRATION_ERROR,  // Chrome is not properly registered.
    UNKNOWN_ERROR,              // Unknown error.
    URL_FETCHING_FAILED,        // URL fetching failed.
    HTTP_NOT_OK,                // HTTP status was not OK.
    NO_RESPONSE_BODY,           // No response body.
    REACHED_MAX_RETRIES,        // Reached maximum number of retries.
    RESPONSE_PARSING_FAILED,    // Registration response parsing failed.
    INTERNAL_SERVER_ERROR,      // Internal server error during request.
    QUOTA_EXCEEDED,             // Registration quota exceeded.
    TOO_MANY_REGISTRATIONS,     // Max registrations per device exceeded.
    // NOTE: always keep this entry at the end. Add new status types only
    // immediately above this line. Make sure to update the corresponding
    // histogram enum accordingly.
    STATUS_COUNT
}

/**
 * enum values correspond to the type of device.
 * Used in the AndroidCheckinProto and Device proto.
 */
export enum DeviceType {
    /** DEVICE_ANDROID_OS - Android Device */
    DEVICE_ANDROID_OS = 1,
    /** DEVICE_IOS_OS - Apple IOS device */
    DEVICE_IOS_OS = 2,
    /** DEVICE_CHROME_BROWSER - Chrome browser - Not Chrome OS.  No hardware records. */
    DEVICE_CHROME_BROWSER = 3,
    /** DEVICE_CHROME_OS - Chrome OS */
    DEVICE_CHROME_OS = 4,
    UNRECOGNIZED = -1
}

/** Build characteristics unique to the Chrome browser, and Chrome OS */
export interface ChromeBuildProto {
    /** The platform of the device. */
    platform: ChromeBuildProtoPlatform
    /** The Chrome instance's version. */
    chrome_version: string
    /** The Channel (build type) of Chrome. */
    channel: ChromeBuildProtoChannel
}

export enum ChromeBuildProtoPlatform {
    PLATFORM_WIN = 1,
    PLATFORM_MAC = 2,
    PLATFORM_LINUX = 3,
    PLATFORM_CROS = 4,
    PLATFORM_IOS = 5,
    /**
     * PLATFORM_ANDROID - Just a placeholder. Likely don't need it due to the presence of the
     * Android GCM on phone/tablet devices.
     */
    PLATFORM_ANDROID = 6,
    UNRECOGNIZED = -1
}

export enum ChromeBuildProtoChannel {
    CHANNEL_STABLE = 1,
    CHANNEL_BETA = 2,
    CHANNEL_DEV = 3,
    CHANNEL_CANARY = 4,
    /** CHANNEL_UNKNOWN - for tip of tree or custom builds */
    CHANNEL_UNKNOWN = 5,
    UNRECOGNIZED = -1
}
