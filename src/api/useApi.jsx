import { useState, useEffect } from 'react';

const API_URL = 'http://localhost:3000';

export function useApi(endpoint) {
    const [data, setData] = useState([]);

    const fetchData = async () => {
    const res = await fetch(`${API_URL}/${endpoint}`);
    const json = await res.json();
    setData(json);
    };

    useEffect(() => { fetchData(); }, [endpoint]);

    const create = async (item) => {
    await fetch(`${API_URL}/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
    });
    fetchData();
    };

    const update = async (id, item) => {
    await fetch(`${API_URL}/${endpoint}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
    });
    fetchData();
    };

    const remove = async (id) => {
    await fetch(`${API_URL}/${endpoint}/${id}`, { method: 'DELETE' });
    fetchData();
    };

    return { data, create, update, remove };
}