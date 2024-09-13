/* eslint-disable no-useless-escape */
export const setCookie = (name: string, value: string, seconds: number) => {
    const expires = new Date(Date.now() + seconds * 1000).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
};

export const getCookie = (name: string): string | null => {
    const matches = document.cookie.match(
        new RegExp(
            "(?:^|; )" +
                name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
                "=([^;]*)",
        ),
    );
    return matches ? decodeURIComponent(matches[1]) : null;
};

export const deleteCookie = (name: string) => {
    setCookie(name, "", -1);
    
};
