import AppRoutes from './routes';
import { GlobalStoreProvider } from "@/hooks/GlobalStore.context";

export default function App() {
  return (
    <GlobalStoreProvider>
      <AppRoutes />
    </GlobalStoreProvider>
  );
}
