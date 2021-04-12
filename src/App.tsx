import { QueryClient, QueryClientProvider } from 'react-query';
import Quiz from './components/Quiz';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Quiz totalQuestions={10} />
    </QueryClientProvider>
  );
}
