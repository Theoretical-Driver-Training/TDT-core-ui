export interface Route {
  label: string;
  path: string;
}

export const APP_ROUTES: Record<string, Route> = {
  HOME: { label: 'Главная', path: '/' },
  PROFILE: { label: 'Профиль', path: '/profile' },
  TEST: { label: 'Тестирование', path: '/test/:id' },
};

export const ROUTES: Record<string, Route> = {
  LOGIN: { label: 'Авторизация', path: '/login' },
  REGISTER: { label: 'Регистрация', path: '/register' },
  ...APP_ROUTES,
} as const;
