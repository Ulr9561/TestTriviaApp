export const EMAIL_REGEX: RegExp =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const USER_REGEX: RegExp =
    /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;

export const PWD_REGEX: RegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
