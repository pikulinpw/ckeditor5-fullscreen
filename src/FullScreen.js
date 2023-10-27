//Pikulin.PW FullScreen Plugin – https://github.com/pikulinpw/ckeditor5-fullscreen

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export default class FullScreen extends Plugin {
    init() {
        const editor = this.editor,
            fullScreenIcon = '<svg width="800px" height="800px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="0" fill="none" width="20" height="20"/><g><path d="M7 2H2v5l1.8-1.8L6.5 8 8 6.5 5.2 3.8 7 2zm6 0l1.8 1.8L12 6.5 13.5 8l2.7-2.7L18 7V2h-5zm.5 10L12 13.5l2.7 2.7L13 18h5v-5l-1.8 1.8-2.7-2.8zm-7 0l-2.7 2.7L2 13v5h5l-1.8-1.8L8 13.5 6.5 12z"/></g></svg>',
            exitFullScreenIcon = '<svg width="800px" height="800px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="0" fill="none" width="20" height="20"/><g><path d="M3.4 2L2 3.4l2.8 2.8L3 8h5V3L6.2 4.8 3.4 2zm11.8 4.2L18 3.4 16.6 2l-2.8 2.8L12 3v5h5l-1.8-1.8zM4.8 13.8L2 16.6 3.4 18l2.8-2.8L8 17v-5H3l1.8 1.8zM17 12h-5v5l1.8-1.8 2.8 2.8 1.4-1.4-2.8-2.8L17 12z"/></g></svg>',
            css = `
                .ck.fullscreen-mode .ck.ck-content.ck-editor__editable,
                .ck.fullscreen-mode .ck.ck-editor__main {
                    height: 100%;
                }
        `;

        editor.ui.componentFactory.add('fullScreen', locale => {
            const view = new ButtonView(locale);

            view.set({
                label: 'Full Screen',
                icon: fullScreenIcon,
                tooltip: true,
                isToggleable: true
            });

            view.on('execute', () => {
                const editorElement = editor.ui.view.element;

                if (document.fullscreenElement) {
                    document.exitFullscreen();
                    editorElement.classList.remove('fullscreen-mode');
                    view.set({
                        label: 'Full Screen',
                        icon: fullScreenIcon
                    });
                } else {
                    editorElement.requestFullscreen();
                    editorElement.classList.add('fullscreen-mode');
                    view.set({
                        label: 'Exit Full Screen',
                        icon: exitFullScreenIcon
                    });
                }
            });


            return view;
        });

        const head = document.head || document.getElementsByTagName('head')[0];
        const style = document.createElement('style');

        style.type = 'text/css';
        if (style.styleSheet){
            // это для IE
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        head.appendChild(style);
    }
}