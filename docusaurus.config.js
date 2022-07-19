// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Docs',
    tagline: 'Aura Network',
    url: 'https://docs.aura.network',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/Aura-logo-6.png',
    organizationName: 'aura-nw', // Usually your GitHub org/user name.
    projectName: 'Documentations', // Usually your repo name.

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/aura-nw/docs/edit/main',
                },
                blog: {
                    path: 'blog',
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/aura-nw/docs/edit/main',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],
    plugins: [
        [
            'docusaurus-plugin-openapi-docs',
            {
                id: "apiDocs",
                docsPluginId: "classic",
                config: {
                    petstore: { // Note: petstore key is treated as the <id> and can be used to specify an API doc instance when using CLI commands
                        specPath: "petstore.yaml", // Path to designated spec file
                        outputDir: "api/petstore", // Output directory for generated .mdx docs
                        sidebarOptions: {
                            groupPathsBy: "tag",
                            categoryLinkSource: "tag"
                        }
                    }
                }
            }
        ]
    ],
    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
        navbar: {
            title: 'Aura.network',
            logo: {
                alt: 'My Site Logo',
                src: 'img/Aura-logo-6.png',
            },
            items: [{
                    type: 'docSidebar',
                    sidebarId: 'overview',
                    position: 'left',
                    label: 'Overview',
                },
				{
                    type: 'docSidebar',
                    sidebarId: 'developer',
                    position: 'left',
                    label: 'Developers',
                },
				{
                    type: 'docSidebar',
                    sidebarId: 'validator',
                    position: 'left',
                    label: 'Validators',
                },
				{
                    type: 'docSidebar',
                    sidebarId: 'product',
                    position: 'left',
                    label: 'Products'
                },
                {
                    to: 'blog', 
                    label: 'Blog', 
                    position: 'left'
                },
                {
                    type: 'localeDropdown',
                    position: 'right',
                },
            ],
        },
        footer: {
            links: [{
                    label: 'Github',
                    href: 'https://github.com/aura-nw',
                },
                {
                    label: 'Discord',
                    href: 'https://discord.gg/4sVePuG4',
                },
                {
                    label: 'Twitter',
                    href: 'https://twitter.com/AuraNetworkHQ',
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Aura Network, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
            additionalLanguages: ['go', 'rust'],
        },
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: false,
            respectPrefersColorScheme: false,
          },
    }),
    
};

module.exports = config;