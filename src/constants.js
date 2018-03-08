module.exports = {
  // enum ProcessingState
  //
  // Processing the version, tag, and size packets (assuming minimum length
  // size packet). Only used during the login handshake.
  MCS_VERSION_TAG_AND_SIZE : 0,
  // Processing the tag and size packets (assuming minimum length size
  // packet). Used for normal messages.
  MCS_TAG_AND_SIZE         : 1,
  // Processing the size packet alone.
  MCS_SIZE                 : 2,
  // Processing the protocol buffer bytes (for those messages with non-zero
  // sizes).
  MCS_PROTO_BYTES          : 3,

  // # of bytes a MCS version packet consumes.
  kVersionPacketLen : 1,
  // # of bytes a tag packet consumes.
  kTagPacketLen     : 1,
  // Max # of bytes a length packet consumes. A Varint32 can consume up to 5 bytes
  // (the msb in each byte is reserved for denoting whether more bytes follow).
  // Although the protocol only allows for 4KiB payloads currently, and the socket
  // stream buffer is only of size 8KiB, it's possible for certain applications to
  // have larger message sizes. When payload is larger than 4KiB, an temporary
  // in-memory buffer is used instead of the normal in-place socket stream buffer.
  kSizePacketLenMin : 1,
  kSizePacketLenMax : 5,

  // The current MCS protocol version.
  kMCSVersion : 41,

  // MCS Message tags.
  // WARNING: the order of these tags must remain the same, as the tag values
  // must be consistent with those used on the server.
  // enum MCSProtoTag {
  kHeartbeatPingTag       : 0,
  kHeartbeatAckTag        : 1,
  kLoginRequestTag        : 2,
  kLoginResponseTag       : 3,
  kCloseTag               : 4,
  kMessageStanzaTag       : 5,
  kPresenceStanzaTag      : 6,
  kIqStanzaTag            : 7,
  kDataMessageStanzaTag   : 8,
  kBatchPresenceStanzaTag : 9,
  kStreamErrorStanzaTag   : 10,
  kHttpRequestTag         : 11,
  kHttpResponseTag        : 12,
  kBindAccountRequestTag  : 13,
  kBindAccountResponseTag : 14,
  kTalkMetadataTag        : 15,
  kNumProtoTypes          : 16,
};
