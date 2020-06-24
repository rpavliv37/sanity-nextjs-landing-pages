export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ef325c5cf186b70ac783cbd',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-mkrq2a6q',
                  apiId: '3adb5793-a8e3-437a-a0e3-8cb3a0471e6b'
                },
                {
                  buildHookId: '5ef325c52dc31501eb7c7ec5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-5kh4rgau',
                  apiId: 'd1550840-f249-4c2d-9f8c-a07ee01f0119'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rpavliv37/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-5kh4rgau.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
