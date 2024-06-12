import { FC, Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';



// const Layout = ({ backgroundColor = '#fff', children }: { backgroundColor: string; children: ReactNode }): JSX.Element => (
//   <div style={{ backgroundColor }} className="">
//     {children}
//   </div>
// );

const AppRouter: FC = () => {
  const routes: RouteObject[] = [
    {
      path: '/',

    },

    {
      path: '/',
      element: (
        <Suspense>
     
        </Suspense>
      )
    },
    {
      path: '/user/:username', // Nueva ruta dinámica para el perfil del usuario
      element: (
        <Suspense fallback={<div>Loading...</div>}>
    
        </Suspense>
      )
    },

    {
      path: '/stories/create',  // Declara la nueva ruta
      element: (
        <Suspense>
    
        </Suspense>
      )
    },


    {
      path: '*',
      element: (
        <Suspense>
        
        </Suspense>
      )
    }
  ];

  return useRoutes(routes);
};

export default AppRouter;
