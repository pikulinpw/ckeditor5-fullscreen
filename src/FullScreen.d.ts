declare module '@pikulinpw/ckeditor5-fullscreen' {
    import { Plugin } from '@ckeditor/ckeditor5-core';
    import { Editor, PluginConstructor } from "ckeditor5";

    export class FullScreen extends Plugin {
        init(): void;
    }

    export const pikulinpw_ckeditor5_fullscreen: {
        getFullscreenElement(element: HTMLElement): boolean | Element;
        requestFullscreen(element: HTMLElement): void;
        exitFullscreen(element: HTMLElement): void;
    };

    const FullScreenPlugin: string | PluginConstructor<Editor>;
    export default FullScreenPlugin;
}