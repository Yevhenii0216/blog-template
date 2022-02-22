import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
    render() {
        return (
            <Html lang="zh-TW" className="scroll-smooth">
                <Head>
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="36x36"
                        href="/static/favicons/android-icon-36x36.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="48x48"
                        href="/static/favicons/android-icon-48x48.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="72x72"
                        href="/static/favicons/android-icon-72x72.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="96x96"
                        href="/static/favicons/android-icon-96x96.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="144x144"
                        href="/static/favicons/android-icon-144x144.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="192x192"
                        href="/static/favicons/android-icon-192x192.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/static/favicons/apple-touch-icon.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="57x57"
                        href="/static/favicons/apple-touch-icon-57x57.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="60x60"
                        href="/static/favicons/apple-touch-icon-60x60.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="72x72"
                        href="/static/favicons/apple-touch-icon-72x72.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="76x76"
                        href="/static/favicons/apple-touch-icon-76x76.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="114x114"
                        href="/static/favicons/apple-touch-icon-114x114.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="120x120"
                        href="/static/favicons/apple-touch-icon-120x120.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="144x144"
                        href="/static/favicons/apple-touch-icon-144x144.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="152x152"
                        href="/static/favicons/apple-touch-icon-152x152.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/static/favicons/apple-touch-icon-180x180.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/static/favicons/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/static/favicons/favicon-16x16.png"
                    />
                    <link
                        rel="mask-icon"
                        href="/static/favicons/safari-pinned-tab.svg"
                        color="#f90606"
                    />
                    <link rel="manifest" href="/static/manifest.json" />
                    <meta
                        name="msapplication-TileImage"
                        content="/static/favicons/mstile-144x144.png"
                    ></meta>
                    <meta name="msapplication-TileColor" content="#f90606" />
                    <meta name="theme-color" content="#f90606" />
                    <link
                        rel="alternate"
                        type="application/rss+xml"
                        href="/feed.xml"
                    />
                </Head>
                <body className="bg-[#f9fafb] text-black antialiased dark:bg-gray-900 dark:text-white">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
