import Inspect from 'vite-plugin-inspect';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default {
    plugins: [
        Inspect(),
        handlebars({
            partialDirectory: resolve(__dirname, 'src/components'),
        }),
    ],
    build: {
        outDir: resolve(__dirname, 'dist'),
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                // auth: resolve(
                //     __dirname,
                //     "src/pages/auth/auth.html",
                // ),
                // registration: resolve(
                //     __dirname,
                //     "src/pages/registration/registration.html",
                // ),
                // edit: resolve(
                //     __dirname,
                //     "src/pages/editProfile/editProfile.html",
                // ),
                // chat: resolve(
                //     __dirname,
                //     "src/pages/chat/chat.html",
                // ),
                // notFound: resolve(
                //     __dirname,
                //     "src/pages/404Page/404Page.html",
                // ),
                // serverError: resolve(
                //     __dirname,
                //     "src/pages/500Page/500Page.html",
                // )
            },
        },
    },
    server: {
        port: 3000,
        open: true,
    },
};
