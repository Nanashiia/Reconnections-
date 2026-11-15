import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { BottomNav } from '../components/BottomNav';
import { BodyPage } from '../features/body/BodyPage';
import { MentalPage } from '../features/mental/MentalPage';
import { ReviewPage } from '../features/review/ReviewPage';
import { TodayPage } from '../features/today/TodayPage';
import { useTheme } from './useTheme';

export function App() {
  useTheme();
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<TodayPage />} />
        <Route path="/mental" element={<MentalPage />} />
        <Route path="/corps" element={<BodyPage />} />
        <Route path="/bilan" element={<ReviewPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <BottomNav />
    </HashRouter>
  );
}
