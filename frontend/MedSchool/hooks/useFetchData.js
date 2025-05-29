import {useState, useEffect} from 'react';

// fetch data from API
const useFetchData = (endpoint) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        if (!endpoint) return; // stops execution if undefined or empty endpoint

      const fetchData = async () => {
        try {
          const response = await fetch(endpoint);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error('Error fetching data: ', error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, [endpoint]);
  
    return { data, loading };
};


export default useFetchData;