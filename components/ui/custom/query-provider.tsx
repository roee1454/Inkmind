import { QueryClient, QueryClientProvider } from "react-query";

export default function QueryProvider({ children }: any) {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchInterval: false,
        refetchIntervalInBackground: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: 1,
      },
    },
  });
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
