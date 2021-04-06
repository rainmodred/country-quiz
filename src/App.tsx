import Quiz from './components/Quiz/Quiz';
// @ts-ignore
import { countries } from './countries';

export default function App() {
  return <Quiz countries={countries} />;
}
