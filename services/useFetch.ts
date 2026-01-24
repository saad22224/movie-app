import { useEffect, useState } from "react";


const useFetch = <t>(fetchFunction: () => Promise<t>, autofetch = true) => {
    const [data, setData] = useState<t | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
        try {

            setLoading(true);
            const result = await fetchFunction();
            setData(result);
        } catch (err) {
            setError(err instanceof Error ? err : new Error('An unknown error occurred'));
        } finally {
            setLoading(false);
        }
    };
    const reset = () => {
        setData(null);
        setError(null);
        setLoading(false);
    }
    useEffect(() => {
        if (autofetch) {
            fetchData();
        }
    }, [autofetch]);

    return { data, loading, error, refetch: fetchData, reset };
};



export default useFetch;