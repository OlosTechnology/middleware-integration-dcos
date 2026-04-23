import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
    logo: <span>Integration SDK</span>,
    head: (
        <>
            <title>Integration SDK</title>
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="https://www.olos.com.br/wp-content/uploads/2020/03/cropped-android-icon-192x192-1-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="192x192"
                href="https://www.olos.com.br/wp-content/uploads/2020/03/cropped-android-icon-192x192-1-192x192.png"
            />
        </>
    ),
    search: {
        placeholder: "Buscar...",
    },
    footer: {
        text: "Olos Tecnologia e Sistemas LTDA.",
    },
    toc: {
        title: "Nesta página",
        extraContent: false,
    },
    feedback: {
        content: null,
    },
    editLink: {
        text: null,
    },
    gitTimestamp: null,
    sidebar: {
        defaultMenuCollapseLevel: -1,
    },
    i18n: [
        { locale: "pt-BR", text: "Português BR" },
        { locale: "es", text: "Español" },
        { locale: "us", text: "English" },
    ],
};

export default config;
