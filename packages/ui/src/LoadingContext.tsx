import React, { createContext, useContext } from 'react';

type LoadingContextType = {
    isLoading: boolean;
    trackPromise: <T>(promise: Promise<T>) => Promise<T>;
};

export const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error("useLoading must be used within a LoadingProvider");
    }
    return context;
};