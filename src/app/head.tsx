// app/head.tsx
export default function Head() {
    return (
        <>
            <meta name="theme-color" content="#0D47A1" />

            <meta name="google-adsense-account" content="ca-pub-8678344611307925" />

            <script async src="https://www.googletagmanager.com/gtag/js?id=G-PF3FT0Y480"></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PF3FT0Y480', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
        </>
    );
}
