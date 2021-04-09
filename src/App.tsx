import { QueryClient, QueryClientProvider } from 'react-query';
import Quiz from './components/Quiz/Quiz';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Quiz />
    </QueryClientProvider>
  );
}
