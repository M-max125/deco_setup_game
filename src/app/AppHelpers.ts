


export default class AppHelpers {
    static isDev(): boolean {
        return ['development', 'dev'].indexOf(process.env.NODE_ENV) > -1
    }

    isStaging(): boolean {
        return ['staging'].indexOf(process.env.NODE_ENV) > -1
            || process.env.PUBLIC_URL.indexOf('-staging') >= 0
    }

    isProduction(): boolean {
        return ['production'].indexOf(process.env.NODE_ENV) > -1
    }


}

