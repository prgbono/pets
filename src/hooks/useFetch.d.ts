export declare const useFetch: <T = unknown>(url: string | null) => {
    data: T | null;
    isLoading: boolean;
    hasError: string | null;
};
