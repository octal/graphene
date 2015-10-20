var CKI = require('./wrap/pkcs11t');

function enum_to_string(v) {
	for (var i in this)
		if (this[i] === v) return i;
	return "Unknown enum value (" + v + ")";
}

function enum_has_value(v) {
	for (var i in this)
		if (this[i] === v) return true;
	return false;
}

function extend_enum(e) {
	e.getText = enum_to_string;
	e.hasValue = enum_has_value;
}

var ObjectClass = {
	Data: CKI.CKO_DATA,
	Certificate: CKI.CKO_CERTIFICATE,
	PublicKey: CKI.CKO_PUBLIC_KEY,
	PrivateKey: CKI.CKO_PRIVATE_KEY,
	SecretKey: CKI.CKO_SECRET_KEY,
	HardwareFeature: CKI.CKO_HW_FEATURE,
	DomainParameters: CKI.CKO_DOMAIN_PARAMETERS,
	Mechanism: CKI.CKO_MECHANISM,
	OTPKey: CKI.CKO_OTP_KEY,
	VendorDefined: CKI.CKO_VENDOR_DEFINED
};

extend_enum(ObjectClass)

var UserType = {
	/* Security Officer */
	SO: CKI.CKU_SO,
	/* Normal user */
	User: CKI.CKU_USER,
	/* Context specific (added in v2.20) */
	ContextSpecific: CKI.CKU_CONTEXT_SPECIFIC
};

extend_enum(UserType)

var SessionFlags = {
	/* session is r/w */
	ReadWrite: CKI.CKF_RW_SESSION,
	/* no parallel */
	Serial: CKI.CKF_SERIAL_SESSION,
};

extend_enum(SessionFlags)

var CryptokiResult = {
	OK: CKI.CKR_OK,
	Cancel: CKI.CKR_CANCEL,
	HostMemory: CKI.CKR_HOST_MEMORY,
	SlotIdInvalid: CKI.CKR_SLOT_ID_INVALID,
	/* CKR_FLAGS_INVALID was removed for v2.0 */
	/* CKR_GENERAL_ERROR and CKR_FUNCTION_FAILED are new for v2.0 */
	GeneralError: CKI.CKR_GENERAL_ERROR,
	FunctionFailed: CKI.CKR_FUNCTION_FAILED,

	/* CKR_ARGUMENTS_BAD, CKR_NO_EVENT, CKR_NEED_TO_CREATE_THREADS,
	 * and CKR_CANT_LOCK are new for v2.01 */
	ArgumentsBad: CKI.CKR_ARGUMENTS_BAD,
	NoEvent: CKI.CKR_NO_EVENT,
	NeedToCreateThreads: CKI.CKR_NEED_TO_CREATE_THREADS,
	CantLock: CKI.CKR_CANT_LOCK,

	AttribureReadOnly: CKI.CKR_ATTRIBUTE_READ_ONLY,
	AttributeSensitive: CKI.CKR_ATTRIBUTE_SENSITIVE,
	AttributeTypeInvalid: CKI.CKR_ATTRIBUTE_TYPE_INVALID,
	AttributeValueInvalid: CKI.CKR_ATTRIBUTE_VALUE_INVALID,
	DataInvalid: CKI.CKR_DATA_INVALID,
	DataLenRange: CKI.CKR_DATA_LEN_RANGE,
	DeviceError: CKI.CKR_DEVICE_ERROR,
	DeviceMemory: CKI.CKR_DEVICE_MEMORY, DeviceRemoved: CKI.CKR_DEVICE_REMOVED,
	EncryptedDataInvalid: CKI.CKR_ENCRYPTED_DATA_INVALID,
	EncryptedDataLenRange: CKI.CKR_ENCRYPTED_DATA_LEN_RANGE,
	FunctionCanceled: CKI.CKR_FUNCTION_CANCELED,
	FunctionNotParallel: CKI.CKR_FUNCTION_NOT_PARALLEL,

	/* CKR_FUNCTION_NOT_SUPPORTED is new for v2.0 */
	FunctionNotSupported: CKI.CKR_FUNCTION_NOT_SUPPORTED,

	KeyHandleInvalid: CKI.CKR_KEY_HANDLE_INVALID,

	/* CKR_KEY_SENSITIVE was removed for v2.0 */

	KeySizeRange: CKI.CKR_KEY_SIZE_RANGE,
	KeyTypeInconsistent: CKI.CKR_KEY_TYPE_INCONSISTENT,
	
	/* CKR_KEY_NOT_NEEDED, CKR_KEY_CHANGED, CKR_KEY_NEEDED,
	* CKR_KEY_INDIGESTIBLE, CKR_KEY_FUNCTION_NOT_PERMITTED,
	* CKR_KEY_NOT_WRAPPABLE, and CKR_KEY_UNEXTRACTABLE are new for
	* v2.0 */
	KeyNotNeeded: CKI.CKR_KEY_NOT_NEEDED,
	KeyChanged: CKI.CKR_KEY_CHANGED,
	KeyNeeded: CKI.CKR_KEY_NEEDED,
	KeyIndigestible: CKI.CKR_KEY_INDIGESTIBLE,
	FunctionNotPermited: CKI.CKR_KEY_FUNCTION_NOT_PERMITTED,
	KeyNotWrappable: CKI.CKR_KEY_NOT_WRAPPABLE,
	KeyUnextractable: CKI.CKR_KEY_UNEXTRACTABLE,

	MechanismInvalid: CKI.CKR_MECHANISM_INVALID,
	MechanismParamInvalid: CKI.CKR_MECHANISM_PARAM_INVALID,

	/* CKR_OBJECT_CLASS_INCONSISTENT and CKR_OBJECT_CLASS_INVALID
	 * were removed for v2.0 */
	ObjectHandleInvalid: CKI.CKR_OBJECT_HANDLE_INVALID,
	OperationActive: CKI.CKR_OPERATION_ACTIVE,
	OperationNotInicialized: CKI.CKR_OPERATION_NOT_INITIALIZED,
	PinIncorrect: CKI.CKR_PIN_INCORRECT,
	PinInvalid: CKI.CKR_PIN_INVALID,
	PinLenRange: CKI.CKR_PIN_LEN_RANGE,

	/* CKR_PIN_EXPIRED and CKR_PIN_LOCKED are new for v2.0 */
	PinExpired: CKI.CKR_PIN_EXPIRED,
	PinLocked: CKI.CKR_PIN_LOCKED,

	SessionClosed: CKI.CKR_SESSION_CLOSED,
	SessionCount: CKI.CKR_SESSION_COUNT,
	SessionHandleInvalid: CKI.CKR_SESSION_HANDLE_INVALID,
	SessionPaeallelNotSuported: CKI.CKR_SESSION_PARALLEL_NOT_SUPPORTED,
	SessionReadOnly: CKI.CKR_SESSION_READ_ONLY,
	SsessionExists: CKI.CKR_SESSION_EXISTS,

	/* CKR_SESSION_READ_ONLY_EXISTS and
	 * CKR_SESSION_READ_WRITE_SO_EXISTS are new for v2.0 */
	SessionReadOnlyExists: CKI.CKR_SESSION_READ_ONLY_EXISTS,
	SessionReadWriteSoExists: CKI.CKR_SESSION_READ_WRITE_SO_EXISTS,

	SignatureInvalid: CKI.CKR_SIGNATURE_INVALID,
	SignatureLenRange: CKI.CKR_SIGNATURE_LEN_RANGE,
	TemplateIncomplete: CKI.CKR_TEMPLATE_INCOMPLETE,
	TemplateInconsistent: CKI.CKR_TEMPLATE_INCONSISTENT,
	TokenNotPresent: CKI.CKR_TOKEN_NOT_PRESENT,
	TokenNotRegistered: CKI.CKR_TOKEN_NOT_RECOGNIZED,
	TokenWritrProtected: CKI.CKR_TOKEN_WRITE_PROTECTED,
	UnwrappingKeyHandleInvalid: CKI.CKR_UNWRAPPING_KEY_HANDLE_INVALID,
	UnwrappingKeySizeRange: CKI.CKR_UNWRAPPING_KEY_SIZE_RANGE,
	UnwrappingKeyTypeInconsisten: CKI.CKR_UNWRAPPING_KEY_TYPE_INCONSISTENT,
	UserAlreadyLoggedIn: CKI.CKR_USER_ALREADY_LOGGED_IN,
	UserNotLoggedIn: CKI.CKR_USER_NOT_LOGGED_IN,
	UserPinNotInitialized: CKI.CKR_USER_PIN_NOT_INITIALIZED,
	UserTypeInvalid: CKI.CKR_USER_TYPE_INVALID,

	/* CKR_USER_ANOTHER_ALREADY_LOGGED_IN and CKR_USER_TOO_MANY_TYPES
	 * are new to v2.01 */
	UserAnotherAlreadyLoggedIn: CKI.CKR_USER_ANOTHER_ALREADY_LOGGED_IN,
	UserTooManyTypes: CKI.CKR_USER_TOO_MANY_TYPES,

	WrappedKeyInvalid: CKI.CKR_WRAPPED_KEY_INVALID,
	WrappedKeyLenRange: CKI.CKR_WRAPPED_KEY_LEN_RANGE,
	WrappingKeyHandleInvalid: CKI.CKR_WRAPPING_KEY_HANDLE_INVALID,
	WrappingKeySizeRange: CKI.CKR_WRAPPING_KEY_SIZE_RANGE,
	WrappingKeyTypeInconsistent: CKI.CKR_WRAPPING_KEY_TYPE_INCONSISTENT,
	RandomSeedNotSupported: CKI.CKR_RANDOM_SEED_NOT_SUPPORTED,

	/* These are new to v2.0 */
	RandomNoRNG: CKI.CKR_RANDOM_NO_RNG,

	/* These are new to v2.11 */
	DomainParamsInvalid: CKI.CKR_DOMAIN_PARAMS_INVALID,

	/* These are new to v2.0 */
	BufferTooSmall: CKI.CKR_BUFFER_TOO_SMALL,
	SavedStateInvalid: CKI.CKR_SAVED_STATE_INVALID,
	InformationSensitive: CKI.CKR_INFORMATION_SENSITIVE,
	StateUnsaveable: CKI.CKR_STATE_UNSAVEABLE,

	/* These are new to v2.01 */
	CryptokiNotInicialized: CKI.CKR_CRYPTOKI_NOT_INITIALIZED,
	CryptokiAlreadyInitialized: CKI.CKR_CRYPTOKI_ALREADY_INITIALIZED,
	MutexBad: CKI.CKR_MUTEX_BAD,
	MutexNotLocked: CKI.CKR_MUTEX_NOT_LOCKED,

	/* The following return values are new for PKCS #11 v2.20 amendment 3 */
	NewPinMode: CKI.CKR_NEW_PIN_MODE,
	NextOTP: CKI.CKR_NEXT_OTP,

	/* This is new to v2.20 */
	FunctionRejected: CKI.CKR_FUNCTION_REJECTED,

	VendorDefined: CKI.CKR_VENDOR_DEFINED
}

extend_enum(CryptokiResult);

var CertificateType = {
	/* The following certificate types are defined: */
	/* CKC_X_509_ATTR_CERT is new for v2.10 */
	/* CKC_WTLS is new for v2.20 */
	X509Certificate: CKI.CKC_X_509,
	X509CertificateAttribute: CKI.CKC_X_509_ATTR_CERT,
	WTLS: CKI.CKC_WTLS,
	VendorDefined: CKI.CKC_VENDOR_DEFINED
}

extend_enum(CertificateType);

var CertificateCategory = {
	Unspecified: 0,
	TokenUser: 1,
	Authority: 2,
	OtherEntity: 3,
}

extend_enum(CertificateCategory);

var Attribute = {
	/* The following attribute types are defined: */
	"class": { v: CKI.CKA_CLASS, t: "ulong" },
	token: { v: CKI.CKA_TOKEN, t: "bool" },
	"private": { v: CKI.CKA_PRIVATE, t: "bool" },
	label: { v: CKI.CKA_LABEL, t: "utf8" },
	application: { v: CKI.CKA_APPLICATION, t: "utf8" },
	value: { v: CKI.CKA_VALUE, t: "array" },

	/* CKA_OBJECT_ID is new for v2.10 */
	objectId: { v: CKI.CKA_OBJECT_ID, t: "array" },

	certType: { v: CKI.CKA_CERTIFICATE_TYPE, t: "ulong" },
	issuer: { v: CKI.CKA_ISSUER, t: "array" },
	serial: { v: CKI.CKA_SERIAL_NUMBER, t: "array" },

	/* CKA_AC_ISSUER, CKA_OWNER, and CKA_ATTR_TYPES are new
	 * for v2.10 */
	issuerAC: { v: CKI.CKA_AC_ISSUER, t: "array" },
	owner: { v: CKI.CKA_OWNER, t: "array" },
	attrTypes: { v: CKI.CKA_ATTR_TYPES, t: "array" },

	/* CKA_TRUSTED is new for v2.11 */
	trusted: { v: CKI.CKA_TRUSTED, t: "bool" },

	/* CKA_CERTIFICATE_CATEGORY ...
	 * CKA_CHECK_VALUE are new for v2.20 */
	certCategory: { v: CKI.CKA_CERTIFICATE_CATEGORY, t: "ulong" },
	javaDomain: CKI.CKA_JAVA_MIDP_SECURITY_DOMAIN,
	url: { v: CKI.CKA_URL, t: "ulong" },
	subjectHash: { v: CKI.CKA_HASH_OF_SUBJECT_PUBLIC_KEY, t: "array" },
	issuerHash: { v: CKI.CKA_HASH_OF_ISSUER_PUBLIC_KEY, t: "array" },
	checkValue: { v: CKI.CKA_CHECK_VALUE, t: "array" },

	keyType: { v: CKI.CKA_KEY_TYPE, t: "ulong" },
	subject: { v: CKI.CKA_SUBJECT, t: "array" },
	id: { v: CKI.CKA_ID, t: "array" },
	sensitive: { v: CKI.CKA_SENSITIVE, t: "bool" },
	encrypt: { v: CKI.CKA_ENCRYPT, t: "bool" },
	decrypt: { v: CKI.CKA_DECRYPT, t: "bool" },
	wrap: { v: CKI.CKA_WRAP, t: "bool" },
	unwrap: { v: CKI.CKA_UNWRAP, t: "bool" },
	sign: { v: CKI.CKA_SIGN, t: "bool" },
	signRecover: { v: CKI.CKA_SIGN_RECOVER, t: "bool" },
	verify: { v: CKI.CKA_VERIFY, t: "bool" },
	verifyRecover: { v: CKI.CKA_VERIFY_RECOVER, t: "bool" },
	derive: { v: CKI.CKA_DERIVE, t: "bool" },
	startDate: { v: CKI.CKA_START_DATE, t: "date" },
	endDate: { v: CKI.CKA_END_DATE, t: "date" },
	modulus: { v: CKI.CKA_MODULUS, t: "array" },
	modulusBits: { v: CKI.CKA_MODULUS_BITS, t: "ulong" },
	publicExp: { v: CKI.CKA_PUBLIC_EXPONENT, t: "array" },
	privateExp: { v: CKI.CKA_PRIVATE_EXPONENT, t: "array" },
	prime1: { v: CKI.CKA_PRIME_1, t: "array" },
	prime2: { v: CKI.CKA_PRIME_2, t: "array" },
	exp1: { v: CKI.CKA_EXPONENT_1, t: "array" },
	exp2: { v: CKI.CKA_EXPONENT_2, t: "array" },
	coef: { v: CKI.CKA_COEFFICIENT, t: "array" },
	prime: { v: CKI.CKA_PRIME, t: "array" },
	subprime: { v: CKI.CKA_SUBPRIME, t: "array" },
	base: { v: CKI.CKA_BASE, t: "array" },

	/* CKA_PRIME_BITS and CKA_SUB_PRIME_BITS are new for v2.11 */
	primeBits: { v: CKI.CKA_PRIME_BITS, t: "ulong" },
	subprimeBits: { v: CKI.CKA_SUBPRIME_BITS, t: "ulong" },
	/* (To retain backwards-compatibility) */

	valueBits: { v: CKI.CKA_VALUE_BITS, t: "ulong" },
	valueLen: { v: CKI.CKA_VALUE_LEN, t: "ulong" },

	/* CKA_EXTRACTABLE, CKA_LOCAL, CKA_NEVER_EXTRACTABLE,
	 * CKA_ALWAYS_SENSITIVE, CKA_MODIFIABLE, CKA_ECDSA_PARAMS,
	 * and CKA_EC_POINT are new for v2.0 */
	extractable: { v: CKI.CKA_EXTRACTABLE, t: "bool" },
	local: { v: CKI.CKA_LOCAL, t: "bool" },
	neverExtractable: { v: CKI.CKA_NEVER_EXTRACTABLE, t: "bool" },
	alwaysSensitive: { v: CKI.CKA_ALWAYS_SENSITIVE, t: "bool" },

	/* CKA_KEY_GEN_MECHANISM is new for v2.11 */
	keyGenMechanism: { v: CKI.CKA_KEY_GEN_MECHANISM, t: "array" },

	modifiable: { v: CKI.CKA_MODIFIABLE, t: "bool" },

	/* CKA_ECDSA_PARAMS is deprecated in v2.11,
	 * CKA_EC_PARAMS is preferred. */
	paramsECDSA: { v: CKI.CKA_ECDSA_PARAMS, t: "array" },
	paramsEC: { v: CKI.CKA_EC_PARAMS, t: "array" },

	pointEC: { v: CKI.CKA_EC_POINT, t: "array" },

	/* CKA_SECONDARY_AUTH, CKA_AUTH_PIN_FLAGS,
	 * are new for v2.10. Deprecated in v2.11 and onwards. */
	secondaryAuth: { v: CKI.CKA_SECONDARY_AUTH, t: "bool" },
	AuthPinFlags: { v: CKI.CKA_AUTH_PIN_FLAGS, t: "array" },

	/* CKA_ALWAYS_AUTHENTICATE ...
	 * CKA_UNWRAP_TEMPLATE are new for v2.20 */
	alwaysAuth: CKI.CKA_ALWAYS_AUTHENTICATE,

	WrapWithTrusted: CKI.CKA_WRAP_WITH_TRUSTED,
	WrapTemplate: CKI.CKA_WRAP_TEMPLATE,
	UnwrapTemplate: CKI.CKA_UNWRAP_TEMPLATE,

	/* CKA_OTP... atttributes are new for PKCS #11 v2.20 amendment 3. */
	otpFormat: CKI.CKA_OTP_FORMAT,
	otpLength: CKI.CKA_OTP_LENGTH,
	otpTimeInterval: CKI.CKA_OTP_TIME_INTERVAL,
	otpUserFriendlyMode: CKI.CKA_OTP_USER_FRIENDLY_MODE,
	otpChallengeReq: CKI.CKA_OTP_CHALLENGE_REQUIREMENT,
	otpTimeReq: CKI.CKA_OTP_TIME_REQUIREMENT,
	otpCounterReq: CKI.CKA_OTP_COUNTER_REQUIREMENT,
	otppinReq: CKI.CKA_OTP_PIN_REQUIREMENT,
	otpCounter: CKI.CKA_OTP_COUNTER,
	otpTime: CKI.CKA_OTP_TIME,
	OtpUserId: CKI.CKA_OTP_USER_IDENTIFIER,
	otpServiceId: CKI.CKA_OTP_SERVICE_IDENTIFIER,
	otpServiceLogo: CKI.CKA_OTP_SERVICE_LOGO,
	otpServiceLogoType: CKI.CKA_OTP_SERVICE_LOGO_TYPE,


	/* CKA_HW_FEATURE_TYPE, CKA_RESET_ON_INIT, and CKA_HAS_RESET
	 * are new for v2.10 */
	hwFeatureType: CKI.CKA_HW_FEATURE_TYPE,
	resetOnInit: CKI.CKA_RESET_ON_INIT,
	hasReset: CKI.CKA_HAS_RESET,

	/* The following attributes are new for v2.20 */
	pixelX: CKI.CKA_PIXEL_X,
	pixelY: CKI.CKA_PIXEL_Y,
	resolution: CKI.CKA_RESOLUTION,
	charRows: CKI.CKA_CHAR_ROWS,
	charCols: CKI.CKA_CHAR_COLUMNS,
	color: CKI.CKA_COLOR,
	bitsPerPixel: CKI.CKA_BITS_PER_PIXEL,
	charSets: CKI.CKA_CHAR_SETS,
	encMethod: CKI.CKA_ENCODING_METHODS,
	mimeTypes: CKI.CKA_MIME_TYPES,
	mechanismType: CKI.CKA_MECHANISM_TYPE,
	requiredCmsAttrs: CKI.CKA_REQUIRED_CMS_ATTRIBUTES,
	defaultCmsAttrs: CKI.CKA_DEFAULT_CMS_ATTRIBUTES,
	suportedCmsAttrs: CKI.CKA_SUPPORTED_CMS_ATTRIBUTES,
	allowedMechanisms: CKI.CKA_ALLOWED_MECHANISMS
}
extend_enum(Attribute);

var KeyType = {
	/* the following key types are defined: */
	RSA: CKI.CKK_RSA,
	DSA: CKI.CKK_DSA,
	DH: CKI.CKK_DH,

	/* CKK_ECDSA and CKK_KEA are new for v2.0 */
	/* CKK_ECDSA is deprecated in v2.11, CKK_EC is preferred. */
	ECDSA: CKI.CKK_ECDSA,
	EC: CKI.CKK_EC,
	X9_42_DH: CKI.CKK_X9_42_DH,
	KEA: CKI.CKK_KEA,

	GENERIC_SECRET: CKI.CKK_GENERIC_SECRET,
	RC2: CKI.CKK_RC2,
	RC4: CKI.CKK_RC4,
	DES: CKI.CKK_DES,
	DES2: CKI.CKK_DES2,
	DES3: CKI.CKK_DES3,

	/* all these key types are new for v2.0 */
	CAST: CKI.CKK_CAST,
	CAST3: CKI.CKK_CAST3,
	/* CKK_CAST5 is deprecated in v2.11, CKK_CAST128 is preferred. */
	CAST5: CKI.CKK_CAST5,
	CAST128: CKI.CKK_CAST128,
	RC5: CKI.CKK_RC5,
	IDEA: CKI.CKK_IDEA,
	SKIPJACK: CKI.CKK_SKIPJACK,
	BATON: CKI.CKK_BATON,
	JUNIPER: CKI.CKK_JUNIPER,
	CDMF: CKI.CKK_CDMF,
	AES: CKI.CKK_AES,

	/* BlowFish and TwoFish are new for v2.20 */
	BLOWFISH: CKI.CKK_BLOWFISH,
	TWOFISH: CKI.CKK_TWOFISH,

	/* SecurID, HOTP, and ACTI are new for PKCS #11 v2.20 amendment 1 */
	SECURID: CKI.CKK_SECURID,
	HOTP: CKI.CKK_HOTP,
	ACTI: CKI.CKK_ACTI,
	
	/* GOST KEY TYPES */
	GOSTR3410: CKI.CKK_GOSTR3410,
	GOSTR3411: CKI.CKK_GOSTR3411,
	GOST28147: CKI.CKK_GOST28147,

	/* Camellia is new for PKCS #11 v2.20 amendment 3 */
	CAMELLIA: CKI.CKK_CAMELLIA,
	/* ARIA is new for PKCS #11 v2.20 amendment 3 */
	ARIA: CKI.CKK_ARIA,


	VENDOR_DEFINED: CKI.CKK_VENDOR_DEFINED
}

extend_enum(KeyType);

var MechanismInformationFlags = {
	Hardware: CKI.CKF_HW,
	Encrypt: CKI.CKF_ENCRYPT,
	Decrypt: CKI.CKF_DECRYPT,
	Digest: CKI.CKF_DIGEST,
	Sign: CKI.CKF_SIGN,
	SignRecover: CKI.CKF_SIGN_RECOVER,
	Verify: CKI.CKF_VERIFY,
	VerifyRecover: CKI.CKF_VERIFY_RECOVER,
	Generate: CKI.CKF_GENERATE,
	GenerateKeyPair: CKI.CKF_GENERATE_KEY_PAIR,
	Wrap: CKI.CKF_WRAP,
	Unwrap: CKI.CKF_UNWRAP,
	Derive: CKI.CKF_DERIVE,
	Extension: CKI.CKF_EXTENSION,
}

extend_enum(MechanismInformationFlags);

var Mechanism = {
	/* the following mechanism types are defined: */
	RSA_PKCS_KEY_PAIR_GEN: CKI.CKM_RSA_PKCS_KEY_PAIR_GEN,
	RSA_PKCS: CKI.CKM_RSA_PKCS,
	RSA_9796: CKI.CKM_RSA_9796,
	RSA_X_509: CKI.CKM_RSA_X_509,

	/* CKM_MD2_RSA_PKCS, CKM_MD5_RSA_PKCS, and CKM_SHA1_RSA_PKCS
	 * are new for v2.0.  They are mechanisms which hash and sign */
	MD2_RSA_PKCS: CKI.CKM_MD2_RSA_PKCS,
	MD5_RSA_PKCS: CKI.CKM_MD5_RSA_PKCS,
	SHA1_RSA_PKCS: CKI.CKM_SHA1_RSA_PKCS,

	/* CKM_RIPEMD128_RSA_PKCS, CKM_RIPEMD160_RSA_PKCS, and
	 * CKM_RSA_PKCS_OAEP are new for v2.10 */
	RIPEMD128_RSA_PKCS: CKI.CKM_RIPEMD128_RSA_PKCS,
	RIPEMD160_RSA_PKCS: CKI.CKM_RIPEMD160_RSA_PKCS,
	RSA_PKCS_OAEP: CKI.CKM_RSA_PKCS_OAEP,

	/* CKM_RSA_X9_31_KEY_PAIR_GEN, CKM_RSA_X9_31, CKM_SHA1_RSA_X9_31,
	 * CKM_RSA_PKCS_PSS, and CKM_SHA1_RSA_PKCS_PSS are new for v2.11 */
	RSA_X9_31_KEY_PAIR_GEN: CKI.CKM_RSA_X9_31_KEY_PAIR_GEN,
	RSA_X9_31: CKI.CKM_RSA_X9_31,
	SHA1_RSA_X9_31: CKI.CKM_SHA1_RSA_X9_31,
	RSA_PKCS_PSS: CKI.CKM_RSA_PKCS_PSS,
	SHA1_RSA_PKCS_PSS: CKI.CKM_SHA1_RSA_PKCS_PSS,

	DSA_KEY_PAIR_GEN: CKI.CKM_DSA_KEY_PAIR_GEN,
	DSA: CKI.CKM_DSA,
	DSA_SHA1: CKI.CKM_DSA_SHA1,
	DH_PKCS_KEY_PAIR_GEN: CKI.CKM_DH_PKCS_KEY_PAIR_GEN,
	DH_PKCS_DERIVE: CKI.CKM_DH_PKCS_DERIVE,

	/* CKM_X9_42_DH_KEY_PAIR_GEN, CKM_X9_42_DH_DERIVE,
	 * CKM_X9_42_DH_HYBRID_DERIVE, and CKM_X9_42_MQV_DERIVE are new for
	 * v2.11 */
	X9_42_DH_KEY_PAIR_GEN: CKI.CKM_X9_42_DH_KEY_PAIR_GEN,
	X9_42_DH_DERIVE: CKI.CKM_X9_42_DH_DERIVE,
	X9_42_DH_HYBRID_DERIVE: CKI.CKM_X9_42_DH_HYBRID_DERIVE,
	X9_42_MQV_DERIVE: CKI.CKM_X9_42_MQV_DERIVE,

	/* CKM_SHA256/384/512 are new for v2.20 */
	SHA256_RSA_PKCS: CKI.CKM_SHA256_RSA_PKCS,
	SHA384_RSA_PKCS: CKI.CKM_SHA384_RSA_PKCS,
	SHA512_RSA_PKCS: CKI.CKM_SHA512_RSA_PKCS,
	SHA256_RSA_PKCS_PSS: CKI.CKM_SHA256_RSA_PKCS_PSS,
	SHA384_RSA_PKCS_PSS: CKI.CKM_SHA384_RSA_PKCS_PSS,
	SHA512_RSA_PKCS_PSS: CKI.CKM_SHA512_RSA_PKCS_PSS,

	/* SHA-224 RSA mechanisms are new for PKCS #11 v2.20 amendment 3 */
	SHA224_RSA_PKCS: CKI.CKM_SHA224_RSA_PKCS,
	SHA224_RSA_PKCS_PSS: CKI.CKM_SHA224_RSA_PKCS_PSS,

	RC2_KEY_GEN: CKI.CKM_RC2_KEY_GEN,
	RC2_ECB: CKI.CKM_RC2_ECB,
	RC2_CBC: CKI.CKM_RC2_CBC,
	RC2_MAC: CKI.CKM_RC2_MAC,

	/* CKM_RC2_MAC_GENERAL and CKM_RC2_CBC_PAD are new for v2.0 */
	RC2_MAC_GENERAL: CKI.CKM_RC2_MAC_GENERAL,
	RC2_CBC_PAD: CKI.CKM_RC2_CBC_PAD,

	RC4_KEY_GEN: CKI.CKM_RC4_KEY_GEN,
	RC4: CKI.CKM_RC4,
	DES_KEY_GEN: CKI.CKM_DES_KEY_GEN,
	DES_ECB: CKI.CKM_DES_ECB,
	DES_CBC: CKI.CKM_DES_CBC,
	DES_MAC: CKI.CKM_DES_MAC,

	/* CKM_DES_MAC_GENERAL and CKM_DES_CBC_PAD are new for v2.0 */
	DES_MAC_GENERAL: CKI.CKM_DES_MAC_GENERAL,
	DES_CBC_PAD: CKI.CKM_DES_CBC_PAD,

	DES2_KEY_GEN: CKI.CKM_DES2_KEY_GEN,
	DES3_KEY_GEN: CKI.CKM_DES3_KEY_GEN,
	DES3_ECB: CKI.CKM_DES3_ECB,
	DES3_CBC: CKI.CKM_DES3_CBC,
	DES3_MAC: CKI.CKM_DES3_MAC,

	/* CKM_DES3_MAC_GENERAL, CKM_DES3_CBC_PAD, CKM_CDMF_KEY_GEN,
	 * CKM_CDMF_ECB, CKM_CDMF_CBC, CKM_CDMF_MAC,
	 * CKM_CDMF_MAC_GENERAL, and CKM_CDMF_CBC_PAD are new for v2.0 */
	DES3_MAC_GENERAL: CKI.CKM_DES3_MAC_GENERAL,
	DES3_CBC_PAD: CKI.CKM_DES3_CBC_PAD,
	CDMF_KEY_GEN: CKI.CKM_CDMF_KEY_GEN,
	CDMF_ECB: CKI.CKM_CDMF_ECB,
	CDMF_CBC: CKI.CKM_CDMF_CBC,
	CDMF_MAC: CKI.CKM_CDMF_MAC,
	CDMF_MAC_GENERAL: CKI.CKM_CDMF_MAC_GENERAL,
	CDMF_CBC_PAD: CKI.CKM_CDMF_CBC_PAD,

	/* the following four DES mechanisms are new for v2.20 */
	DES_OFB64: CKI.CKM_DES_OFB64,
	DES_OFB8: CKI.CKM_DES_OFB8,
	DES_CFB64: CKI.CKM_DES_CFB64,
	DES_CFB8: CKI.CKM_DES_CFB8,

	MD2: CKI.CKM_MD2,

	/* CKM_MD2_HMAC and CKM_MD2_HMAC_GENERAL are new for v2.0 */
	MD2_HMAC: CKI.CKM_MD2_HMAC,
	MD2_HMAC_GENERAL: CKI.CKM_MD2_HMAC_GENERAL,

	MD5: CKI.CKM_MD5,

	/* CKM_MD5_HMAC and CKM_MD5_HMAC_GENERAL are new for v2.0 */
	MD5_HMAC: CKI.CKM_MD5_HMAC,
	MD5_HMAC_GENERAL: CKI.CKM_MD5_HMAC_GENERAL,

	SHA1: CKI.CKM_SHA_1,
	SHA: CKI.CKM_SHA_1,
	"SHA-1": CKI.CKM_SHA_1,
	SHA_1: CKI.CKM_SHA_1,

	/* CKM_SHA_1_HMAC and CKM_SHA_1_HMAC_GENERAL are new for v2.0 */
	SHA_1_HMAC: CKI.CKM_SHA_1_HMAC,
	SHA_1_HMAC_GENERAL: CKI.CKM_SHA_1_HMAC_GENERAL,

	/* CKM_RIPEMD128, CKM_RIPEMD128_HMAC,
	 * CKM_RIPEMD128_HMAC_GENERAL, CKM_RIPEMD160, CKM_RIPEMD160_HMAC,
	 * and CKM_RIPEMD160_HMAC_GENERAL are new for v2.10 */
	RIPEMD128: CKI.CKM_RIPEMD128,
	RIPEMD128_HMAC: CKI.CKM_RIPEMD128_HMAC,
	RIPEMD128_HMAC_GENERAL: CKI.CKM_RIPEMD128_HMAC_GENERAL,
	RIPEMD160: CKI.CKM_RIPEMD160,
	RIPEMD160_HMAC: CKI.CKM_RIPEMD160_HMAC,
	RIPEMD160_HMAC_GENERAL: CKI.CKM_RIPEMD160_HMAC_GENERAL,

	/* CKM_SHA256/384/512 are new for v2.20 */
	SHA256: CKI.CKM_SHA256,
	SHA256_HMAC: CKI.CKM_SHA256_HMAC,
	SHA256_HMAC_GENERAL: CKI.CKM_SHA256_HMAC_GENERAL,

	/* SHA-224 is new for PKCS #11 v2.20 amendment 3 */
	SHA224: CKI.CKM_SHA224,
	SHA224_HMAC: CKI.CKM_SHA224_HMAC,
	SHA224_HMAC_GENERAL: CKI.CKM_SHA224_HMAC_GENERAL,

	SHA384: CKI.CKM_SHA384,
	SHA384_HMAC: CKI.CKM_SHA384_HMAC,
	SHA384_HMAC_GENERAL: CKI.CKM_SHA384_HMAC_GENERAL,
	SHA512: CKI.CKM_SHA512,
	SHA512_HMAC: CKI.CKM_SHA512_HMAC,
	SHA512_HMAC_GENERAL: CKI.CKM_SHA512_HMAC_GENERAL,

	/* SecurID is new for PKCS #11 v2.20 amendment 1 */
	SECURID_KEY_GEN: CKI.CKM_SECURID_KEY_GEN,
	SECURID: CKI.CKM_SECURID,

	/* HOTP is new for PKCS #11 v2.20 amendment 1 */
	HOTP_KEY_GEN: CKI.CKM_HOTP_KEY_GEN,
	HOTP: CKI.CKM_HOTP,

	/* ACTI is new for PKCS #11 v2.20 amendment 1 */
	ACTI: CKI.CKM_ACTI,
	ACTI_KEY_GEN: CKI.CKM_ACTI_KEY_GEN,

	/* All of the following mechanisms are new for v2.0 */
	/* Note that CAST128 and CAST5 are the same algorithm */
	CAST_KEY_GEN: CKI.CKM_CAST_KEY_GEN,
	CAST_ECB: CKI.CKM_CAST_ECB,
	CAST_CBC: CKI.CKM_CAST_CBC,
	CAST_MAC: CKI.CKM_CAST_MAC,
	CAST_MAC_GENERAL: CKI.CKM_CAST_MAC_GENERAL,
	CAST_CBC_PAD: CKI.CKM_CAST_CBC_PAD,
	CAST3_KEY_GEN: CKI.CKM_CAST3_KEY_GEN,
	CAST3_ECB: CKI.CKM_CAST3_ECB,
	CAST3_CBC: CKI.CKM_CAST3_CBC,
	CAST3_MAC: CKI.CKM_CAST3_MAC,
	CAST3_MAC_GENERAL: CKI.CKM_CAST3_MAC_GENERAL,
	CAST3_CBC_PAD: CKI.CKM_CAST3_CBC_PAD,
	CAST5_KEY_GEN: CKI.CKM_CAST5_KEY_GEN,
	CAST128_KEY_GEN: CKI.CKM_CAST128_KEY_GEN,
	CAST5_ECB: CKI.CKM_CAST5_ECB,
	CAST128_ECB: CKI.CKM_CAST128_ECB,
	CAST5_CBC: CKI.CKM_CAST5_CBC,
	CAST128_CBC: CKI.CKM_CAST128_CBC,
	CAST5_MAC: CKI.CKM_CAST5_MAC,
	CAST128_MAC: CKI.CKM_CAST128_MAC,
	CAST5_MAC_GENERAL: CKI.CKM_CAST5_MAC_GENERAL,
	CAST128_MAC_GENERAL: CKI.CKM_CAST128_MAC_GENERAL,
	CAST5_CBC_PAD: CKI.CKM_CAST5_CBC_PAD,
	CAST128_CBC_PAD: CKI.CKM_CAST128_CBC_PAD,
	RC5_KEY_GEN: CKI.CKM_RC5_KEY_GEN,
	RC5_ECB: CKI.CKM_RC5_ECB,
	RC5_CBC: CKI.CKM_RC5_CBC,
	RC5_MAC: CKI.CKM_RC5_MAC,
	RC5_MAC_GENERAL: CKI.CKM_RC5_MAC_GENERAL,
	RC5_CBC_PAD: CKI.CKM_RC5_CBC_PAD,
	IDEA_KEY_GEN: CKI.CKM_IDEA_KEY_GEN,
	IDEA_ECB: CKI.CKM_IDEA_ECB,
	IDEA_CBC: CKI.CKM_IDEA_CBC,
	IDEA_MAC: CKI.CKM_IDEA_MAC,
	IDEA_MAC_GENERAL: CKI.CKM_IDEA_MAC_GENERAL,
	IDEA_CBC_PAD: CKI.CKM_IDEA_CBC_PAD,
	GENERIC_SECRET_KEY_GEN: CKI.CKM_GENERIC_SECRET_KEY_GEN,
	CONCATENATE_BASE_AND_KEY: CKI.CKM_CONCATENATE_BASE_AND_KEY,
	CONCATENATE_BASE_AND_DATA: CKI.CKM_CONCATENATE_BASE_AND_DATA,
	CONCATENATE_DATA_AND_BASE: CKI.CKM_CONCATENATE_DATA_AND_BASE,
	XOR_BASE_AND_DATA: CKI.CKM_XOR_BASE_AND_DATA,
	EXTRACT_KEY_FROM_KEY: CKI.CKM_EXTRACT_KEY_FROM_KEY,
	SSL3_PRE_MASTER_KEY_GEN: CKI.CKM_SSL3_PRE_MASTER_KEY_GEN,
	SSL3_MASTER_KEY_DERIVE: CKI.CKM_SSL3_MASTER_KEY_DERIVE,
	SSL3_KEY_AND_MAC_DERIVE: CKI.CKM_SSL3_KEY_AND_MAC_DERIVE,

	/* CKM_SSL3_MASTER_KEY_DERIVE_DH, CKM_TLS_PRE_MASTER_KEY_GEN,
	 * CKM_TLS_MASTER_KEY_DERIVE, CKM_TLS_KEY_AND_MAC_DERIVE, and
	 * CKM_TLS_MASTER_KEY_DERIVE_DH are new for v2.11 */
	SSL3_MASTER_KEY_DERIVE_DH: CKI.CKM_SSL3_MASTER_KEY_DERIVE_DH,
	TLS_PRE_MASTER_KEY_GEN: CKI.CKM_TLS_PRE_MASTER_KEY_GEN,
	TLS_MASTER_KEY_DERIVE: CKI.CKM_TLS_MASTER_KEY_DERIVE,
	TLS_KEY_AND_MAC_DERIVE: CKI.CKM_TLS_KEY_AND_MAC_DERIVE,
	TLS_MASTER_KEY_DERIVE_DH: CKI.CKM_TLS_MASTER_KEY_DERIVE_DH,

	/* CKM_TLS_PRF is new for v2.20 */
	TLS_PRF: CKI.CKM_TLS_PRF,

	SSL3_MD5_MAC: CKI.CKM_SSL3_MD5_MAC,
	SSL3_SHA1_MAC: CKI.CKM_SSL3_SHA1_MAC,
	MD5_KEY_DERIVATION: CKI.CKM_MD5_KEY_DERIVATION,
	MD2_KEY_DERIVATION: CKI.CKM_MD2_KEY_DERIVATION,
	SHA1_KEY_DERIVATION: CKI.CKM_SHA1_KEY_DERIVATION,

	/* CKM_SHA256/384/512 are new for v2.20 */
	SHA256_KEY_DERIVATION: CKI.CKM_SHA256_KEY_DERIVATION,
	SHA384_KEY_DERIVATION: CKI.CKM_SHA384_KEY_DERIVATION,
	SHA512_KEY_DERIVATION: CKI.CKM_SHA512_KEY_DERIVATION,

	/* SHA-224 key derivation is new for PKCS #11 v2.20 amendment 3 */
	SHA224_KEY_DERIVATION: CKI.CKM_SHA224_KEY_DERIVATION,

	PBE_MD2_DES_CBC: CKI.CKM_PBE_MD2_DES_CBC,
	PBE_MD5_DES_CBC: CKI.CKM_PBE_MD5_DES_CBC,
	PBE_MD5_CAST_CBC: CKI.CKM_PBE_MD5_CAST_CBC,
	PBE_MD5_CAST3_CBC: CKI.CKM_PBE_MD5_CAST3_CBC,
	PBE_MD5_CAST5_CBC: CKI.CKM_PBE_MD5_CAST5_CBC,
	PBE_MD5_CAST128_CBC: CKI.CKM_PBE_MD5_CAST128_CBC,
	PBE_SHA1_CAST5_CBC: CKI.CKM_PBE_SHA1_CAST5_CBC,
	PBE_SHA1_CAST128_CBC: CKI.CKM_PBE_SHA1_CAST128_CBC,
	PBE_SHA1_RC4_128: CKI.CKM_PBE_SHA1_RC4_128,
	PBE_SHA1_RC4_40: CKI.CKM_PBE_SHA1_RC4_40,
	PBE_SHA1_DES3_EDE_CBC: CKI.CKM_PBE_SHA1_DES3_EDE_CBC,
	PBE_SHA1_DES2_EDE_CBC: CKI.CKM_PBE_SHA1_DES2_EDE_CBC,
	PBE_SHA1_RC2_128_CBC: CKI.CKM_PBE_SHA1_RC2_128_CBC,
	PBE_SHA1_RC2_40_CBC: CKI.CKM_PBE_SHA1_RC2_40_CBC,

	/* CKM_PKCS5_PBKD2 is new for v2.10 */
	PKCS5_PBKD2: CKI.CKM_PKCS5_PBKD2,

	PBA_SHA1_WITH_SHA1_HMAC: CKI.CKM_PBA_SHA1_WITH_SHA1_HMAC,

	/* WTLS mechanisms are new for v2.20 */
	WTLS_PRE_MASTER_KEY_GEN: CKI.CKM_WTLS_PRE_MASTER_KEY_GEN,
	WTLS_MASTER_KEY_DERIVE: CKI.CKM_WTLS_MASTER_KEY_DERIVE,
	WTLS_MASTER_KEY_DERIVE_DH_ECC: CKI.CKM_WTLS_MASTER_KEY_DERIVE_DH_ECC,
	WTLS_PRF: CKI.CKM_WTLS_PRF,
	WTLS_SERVER_KEY_AND_MAC_DERIVE: CKI.CKM_WTLS_SERVER_KEY_AND_MAC_DERIVE,
	WTLS_CLIENT_KEY_AND_MAC_DERIVE: CKI.CKM_WTLS_CLIENT_KEY_AND_MAC_DERIVE,

	KEY_WRAP_LYNKS: CKI.CKM_KEY_WRAP_LYNKS,
	KEY_WRAP_SET_OAEP: CKI.CKM_KEY_WRAP_SET_OAEP,

	/* CKM_CMS_SIG is new for v2.20 */
	CMS_SIG: CKI.CKM_CMS_SIG,

	/* CKM_KIP mechanisms are new for PKCS #11 v2.20 amendment 2 */
	KIP_DERIVE: CKI.CKM_KIP_DERIVE,
	KIP_WRAP: CKI.CKM_KIP_WRAP,
	KIP_MAC: CKI.CKM_KIP_MAC,

	/* Camellia is new for PKCS #11 v2.20 amendment 3 */
	CAMELLIA_KEY_GEN: CKI.CKM_CAMELLIA_KEY_GEN,
	CAMELLIA_ECB: CKI.CKM_CAMELLIA_ECB,
	CAMELLIA_CBC: CKI.CKM_CAMELLIA_CBC,
	CAMELLIA_MAC: CKI.CKM_CAMELLIA_MAC,
	CAMELLIA_MAC_GENERAL: CKI.CKM_CAMELLIA_MAC_GENERAL,
	CAMELLIA_CBC_PAD: CKI.CKM_CAMELLIA_CBC_PAD,
	CAMELLIA_ECB_ENCRYPT_DATA: CKI.CKM_CAMELLIA_ECB_ENCRYPT_DATA,
	CAMELLIA_CBC_ENCRYPT_DATA: CKI.CKM_CAMELLIA_CBC_ENCRYPT_DATA,
	CAMELLIA_CTR: CKI.CKM_CAMELLIA_CTR,

	/* ARIA is new for PKCS #11 v2.20 amendment 3 */
	ARIA_KEY_GEN: CKI.CKM_ARIA_KEY_GEN,
	ARIA_ECB: CKI.CKM_ARIA_ECB,
	ARIA_CBC: CKI.CKM_ARIA_CBC,
	ARIA_MAC: CKI.CKM_ARIA_MAC,
	ARIA_MAC_GENERAL: CKI.CKM_ARIA_MAC_GENERAL,
	ARIA_CBC_PAD: CKI.CKM_ARIA_CBC_PAD,
	ARIA_ECB_ENCRYPT_DATA: CKI.CKM_ARIA_ECB_ENCRYPT_DATA,
	ARIA_CBC_ENCRYPT_DATA: CKI.CKM_ARIA_CBC_ENCRYPT_DATA,

	/* Fortezza mechanisms */
	SKIPJACK_KEY_GEN: CKI.CKM_SKIPJACK_KEY_GEN,
	SKIPJACK_ECB64: CKI.CKM_SKIPJACK_ECB64,
	SKIPJACK_CBC64: CKI.CKM_SKIPJACK_CBC64,
	SKIPJACK_OFB64: CKI.CKM_SKIPJACK_OFB64,
	SKIPJACK_CFB64: CKI.CKM_SKIPJACK_CFB64,
	SKIPJACK_CFB32: CKI.CKM_SKIPJACK_CFB32,
	SKIPJACK_CFB16: CKI.CKM_SKIPJACK_CFB16,
	SKIPJACK_CFB8: CKI.CKM_SKIPJACK_CFB8,
	SKIPJACK_WRAP: CKI.CKM_SKIPJACK_WRAP,
	SKIPJACK_PRIVATE_WRAP: CKI.CKM_SKIPJACK_PRIVATE_WRAP,
	SKIPJACK_RELAYX: CKI.CKM_SKIPJACK_RELAYX,
	KEA_KEY_PAIR_GEN: CKI.CKM_KEA_KEY_PAIR_GEN,
	KEA_KEY_DERIVE: CKI.CKM_KEA_KEY_DERIVE,
	FORTEZZA_TIMESTAMP: CKI.CKM_FORTEZZA_TIMESTAMP,
	BATON_KEY_GEN: CKI.CKM_BATON_KEY_GEN,
	BATON_ECB128: CKI.CKM_BATON_ECB128,
	BATON_ECB96: CKI.CKM_BATON_ECB96,
	BATON_CBC128: CKI.CKM_BATON_CBC128,
	BATON_COUNTER: CKI.CKM_BATON_COUNTER,
	BATON_SHUFFLE: CKI.CKM_BATON_SHUFFLE,
	BATON_WRAP: CKI.CKM_BATON_WRAP,

	/* CKM_ECDSA_KEY_PAIR_GEN is deprecated in v2.11,
	 * CKM_EC_KEY_PAIR_GEN is preferred */
	ECDSA_KEY_PAIR_GEN: CKI.CKM_ECDSA_KEY_PAIR_GEN,
	EC_KEY_PAIR_GEN: CKI.CKM_EC_KEY_PAIR_GEN,

	ECDSA: CKI.CKM_ECDSA,
	ECDSA_SHA1: CKI.CKM_ECDSA_SHA1,

	ECDSA_SHA224: CKI.CKM_ECDSA_SHA224,
	ECDSA_SHA256: CKI.CKM_ECDSA_SHA256,
	ECDSA_SHA384: CKI.CKM_ECDSA_SHA384,
	ECDSA_SHA512: CKI.CKM_ECDSA_SHA512,

	/* CKM_ECDH1_DERIVE, CKM_ECDH1_COFACTOR_DERIVE, and CKM_ECMQV_DERIVE
	 * are new for v2.11 */
	ECDH1_DERIVE: CKI.CKM_ECDH1_DERIVE,
	ECDH1_COFACTOR_DERIVE: CKI.CKM_ECDH1_COFACTOR_DERIVE,
	ECMQV_DERIVE: CKI.CKM_ECMQV_DERIVE,

	JUNIPER_KEY_GEN: CKI.CKM_JUNIPER_KEY_GEN,
	JUNIPER_ECB128: CKI.CKM_JUNIPER_ECB128,
	JUNIPER_CBC128: CKI.CKM_JUNIPER_CBC128,
	JUNIPER_COUNTER: CKI.CKM_JUNIPER_COUNTER,
	JUNIPER_SHUFFLE: CKI.CKM_JUNIPER_SHUFFLE,
	JUNIPER_WRAP: CKI.CKM_JUNIPER_WRAP,
	FASTHASH: CKI.CKM_FASTHASH,

	/* CKM_AES_KEY_GEN, CKM_AES_ECB, CKM_AES_CBC, CKM_AES_MAC,
	 * CKM_AES_MAC_GENERAL, CKM_AES_CBC_PAD, CKM_DSA_PARAMETER_GEN,
	 * CKM_DH_PKCS_PARAMETER_GEN, and CKM_X9_42_DH_PARAMETER_GEN are
	 * new for v2.11 */
	AES_KEY_GEN: CKI.CKM_AES_KEY_GEN,
	AES_ECB: CKI.CKM_AES_ECB,
	AES_CBC: CKI.CKM_AES_CBC,
	AES_MAC: CKI.CKM_AES_MAC,
	AES_MAC_GENERAL: CKI.CKM_AES_MAC_GENERAL,
	AES_CBC_PAD: CKI.CKM_AES_CBC_PAD,

	/* AES counter mode is new for PKCS #11 v2.20 amendment 3 */
	AES_CTR: CKI.CKM_AES_CTR,

	/* BlowFish and TwoFish are new for v2.20 */
	BLOWFISH_KEY_GEN: CKI.CKM_BLOWFISH_KEY_GEN,
	BLOWFISH_CBC: CKI.CKM_BLOWFISH_CBC,
	TWOFISH_KEY_GEN: CKI.CKM_TWOFISH_KEY_GEN,
	TWOFISH_CBC: CKI.CKM_TWOFISH_CBC,


	/* CKM_xxx_ENCRYPT_DATA mechanisms are new for v2.20 */
	DES_ECB_ENCRYPT_DATA: CKI.CKM_DES_ECB_ENCRYPT_DATA,
	DES_CBC_ENCRYPT_DATA: CKI.CKM_DES_CBC_ENCRYPT_DATA,
	DES3_ECB_ENCRYPT_DATA: CKI.CKM_DES3_ECB_ENCRYPT_DATA,
	DES3_CBC_ENCRYPT_DATA: CKI.CKM_DES3_CBC_ENCRYPT_DATA,
	AES_ECB_ENCRYPT_DATA: CKI.CKM_AES_ECB_ENCRYPT_DATA,
	AES_CBC_ENCRYPT_DATA: CKI.CKM_AES_CBC_ENCRYPT_DATA,
	
	/* CKM_GOST mechanisms */
	GOSTR3410_KEY_PAIR_GEN: CKI.CKM_GOSTR3410_KEY_PAIR_GEN,
	GOSTR3410: CKI.CKM_GOSTR3410,
	GOSTR3410_WITH_GOSTR3411: CKI.CKM_GOSTR3410_WITH_GOSTR3411,
	GOSTR3410_KEY_WRAP: CKI.CKM_GOSTR3410_KEY_WRAP,
	GOSTR3410_DERIVE: CKI.CKM_GOSTR3410_DERIVE,
	GOSTR3411: CKI.CKM_GOSTR3411,
	GOSTR3411_HMAC: CKI.CKM_GOSTR3411_HMAC,
	GOST28147_KEY_GEN: CKI.CKM_GOST28147_KEY_GEN,
	GOST28147_ECB: CKI.CKM_GOST28147_ECB,
	GOST28147: CKI.CKM_GOST28147,
	GOST28147_MAC: CKI.CKM_GOST28147_MAC,
	GOST28147_KEY_WRAP: CKI.CKM_GOST28147_KEY_WRAP,

	DSA_PARAMETER_GEN: CKI.CKM_DSA_PARAMETER_GEN,
	DH_PKCS_PARAMETER_GEN: CKI.CKM_DH_PKCS_PARAMETER_GEN,
	X9_42_DH_PARAMETER_GEN: CKI.CKM_X9_42_DH_PARAMETER_GEN,

	VENDOR_DEFINED: CKI.CKM_VENDOR_DEFINED,

}

extend_enum(Mechanism);

module.exports = {
	ObjectClass: ObjectClass,
	UserType: UserType,
	SessionFlags: SessionFlags,
	CryptokiResult: CryptokiResult,
	CertificateType: CertificateType,
	CertificateCategory: CertificateCategory,
	KeyType: KeyType,
	MechanismInformationFlags: MechanismInformationFlags,
	Mechanism: Mechanism,
	Attribute: Attribute
}