export enum ERROR_MSG {
  OK = 'ok',
  UNKNOWN_ERROR = 'The system has deserted, please try again later',
  INVALID_REQUEST = 'Invalid request',
  INVALID_PARAM = 'Invalid parameter',
  MISSING_PARAM = 'Missing request parameters',
  REQUEST_ENTITY_TOO_LARGE = 'The request content is too long.',
  NO_PERMISSION = 'Unauthorized operation',
  METHOD_NOT_ALLOWED = 'Unsupported request method',
  DB_ERROR = 'Database operation failed.',
  NO_REQUEST_FILES = 'No file uploaded',
  REQUEST_FILES = 'An error occurred while uploading the file.',
  INVALID_TOKEN = 'Invalid token',

  NEED_LOGIN = 'Login required.',
  USER_NOT_FOUND = 'The user does not exist.',
}

export enum API_CODE {
  OK = 0,
  UNKNOWN_ERROR = 10000,
  INVALID_REQUEST = 10001,
  INVALID_PARAM = 10002,
  REQUEST_ENTITY_TOO_LARGE = 10003,
  DB_ERROR = 10005,
  INVALID_TOKEN = 10007,

  NEED_LOGIN = 11000,
  USER_NOT_FOUND = 11001,
}

export enum STATUE_CODE {
  OK = 200,
  MOVED_PERMANENTLY = 301,
  FOUND = 302,
  BAD_REQUEST = 400,
  UNAUTHENTICATED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  REQUEST_ENTITY_TOO_LARGE = 413,
  INTERNAL_SERVER_ERROR = 500,
  BAD_GATEWAY = 502,
}

export enum LOG_TYPE {
  INIT = 'Server Init',
  INIT_ROUTER = 'Server Init Router',
  CONTROLLER_INFO = 'Controller Info',
  CONFIG_ERROR = 'Config Error',
  PARAM_ERROR = 'Param Error',
  REQUEST_TIME = 'Request Time',
  SERVER_WARN = 'Server Warn',
  SERVER_ERROR = 'Server Error',
  RUN_WARN = 'RUN Warn',
  RUN_INFO = 'RUN Info',
}
