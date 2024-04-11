declare global {
    namespace NodeJS {
        interface ProcessEnv {
            VATSIM_CORE_API_KEY: string;
            MAILER_HOST: string;
            MAILER_USER: string;
            MAILER_PASS: string;
        }
    }
}

export {};
