import { RenderMode, ServerRoute } from '@angular/ssr';
import { Route } from '@angular/router';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
