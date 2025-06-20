"use client"
import React, { createContext, useState, useContext, ReactNode } from "react";

type LoadingContextType = {
    isLoading: boolean;
    trackPromise: <T>(promise: Promise<T>) => Promise<T>;
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error("useLoading must be used within a LoadingProvider");
    }
    return context;
};

export const LoadingContextProvider = ({ 
    children, 
    loadingComponent 
}: { 
    children: ReactNode;
    loadingComponent: React.ReactNode;
}) => {
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
            {loadingCount > 0 && loadingComponent}
            {children}
        </LoadingContext.Provider>
    );
};