import useSWR from 'swr'
import api from "./api";

export function useFetch<Data = any, Error = any>(slug: string) {
    const { data, error } = useSWR<Data, Error>(`https://api.instabuy.com.br/apiv3/item?subdomain=supermercado&slug=${slug}`, async url => {
      const response = await api.get(url);
      return response.data;
    })
    return { data, error }
  }