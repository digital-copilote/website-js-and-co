import configs from "../config.json";

const urlBuilder = (src: string): string => {
    const fullUrl = configs.STRAPI_URL + src;
    return fullUrl;
};

export default urlBuilder;
