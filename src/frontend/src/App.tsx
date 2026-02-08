import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import { ClassSelectionProvider } from './learning/ClassSelectionContext';
import { GenderThemeProvider } from './theme/GenderThemeContext';
import SiteLayout from './components/site/SiteLayout';
import HomePage from './pages/HomePage';
import LearnPage from './pages/LearnPage';
import RhymesPage from './pages/RhymesPage';
import MathematicsPage from './pages/MathematicsPage';
import GeneralKnowledgePage from './pages/GeneralKnowledgePage';
import SocialStudiesPage from './pages/SocialStudiesPage';
import AlphabetNumbersPage from './pages/AlphabetNumbersPage';
import AdmissionsPage from './pages/AdmissionsPage';
import ContactPage from './pages/ContactPage';

const rootRoute = createRootRoute({
  component: SiteLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const learnRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/learn',
  component: LearnPage,
});

const rhymesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/rhymes',
  component: RhymesPage,
});

const mathematicsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/mathematics',
  component: MathematicsPage,
});

const gkRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/general-knowledge',
  component: GeneralKnowledgePage,
});

const socialStudiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/social-studies',
  component: SocialStudiesPage,
});

const alphabetNumbersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/alphabet-numbers',
  component: AlphabetNumbersPage,
});

const admissionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admissions',
  component: AdmissionsPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  learnRoute,
  rhymesRoute,
  mathematicsRoute,
  gkRoute,
  socialStudiesRoute,
  alphabetNumbersRoute,
  admissionsRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <GenderThemeProvider>
      <ClassSelectionProvider>
        <RouterProvider router={router} />
      </ClassSelectionProvider>
    </GenderThemeProvider>
  );
}
