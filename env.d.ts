declare global {
    namespace NodeJS {
        interface ProcessEnv {
            VATSIM_CORE_API_KEY: string;
        }
    }
}

export {};
