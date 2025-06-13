import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // {
  //   path: 'absence/justification/:absenceId',
  //   renderMode: RenderMode.Prerender,
  //   // Ajoutez ici la fonction getPrerenderParams
  //   getPrerenderParams: async () => {
  //     // TODO: Retournez un tableau de paramètres à pré-rendre
  //     // Exemple statique :
  //     return [{ absenceId: '6840735758950d04348206f0' }, { absenceId: '6840735558950d04348206dc' }];
  //     // En production, vous pouvez aller chercher la liste des IDs depuis une API ou une base de données
  //   },
  // },
  {
    path: '**',
    renderMode: RenderMode.Client,
  },
];
