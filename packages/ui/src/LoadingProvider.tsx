import React, { useState, ReactNode } from "react";
import { LoadingContext } from "./LoadingContext";
import LoadingIndicator from "./loading-indicator";

export { useLoading } from "./LoadingContext";

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
    const [loadingCount, setLoadingCount] = useState(0);

    const trackPromise = async <T,>(promise: Promise<T>): Promise<T> => {
        setLoadingCount((prev) => prev + 1);
        try {
            return await promise;
        } finally {
            setLoadingCount((prev) => Math.max(0, prev - 1));
        }
    };

    return (
        <LoadingContext.Provider value={{ isLoading: loadingCount > 0, trackPromise }}>
            {loadingCount > 0 && <LoadingIndicator />}
            {children}
        </LoadingContext.Provider>
    );
};