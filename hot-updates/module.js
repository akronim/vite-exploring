import './submodule-a'
import './submodule-b'

export const message = 'message from module.js';
export default 'default message from module.js';

console.log('log from module.js');

let styles;

function addStylesheet() {
    styles = document.createElement('style');
    styles.innerHTML = 'body { background: indigo; color: white; }';
    document.head.appendChild(styles);
}

function removeStylesheet() {
    styles.remove();
}

addStylesheet();

if (import.meta.hot) {
    import.meta.hot.accept((updatedModule) => {
        if (updatedModule) {
            console.log(updatedModule);
        }
    })

    import.meta.hot.accept(['./submodule-a.js', './submodule-b.js'], ([newSubmoduleA, newSubmoduleB]) => {
        if (newSubmoduleA) {
            console.log(newSubmoduleA);
        }

        if (newSubmoduleB) {
            console.log(newSubmoduleB);
        }
    })

    // to clean-up any persistent side effects created by its updated copy
    import.meta.hot.dispose(() => {
        removeStylesheet();
    })

    import.meta.hot.on('vite:beforeUpdate', (data) => {
        console.log('vite:beforeUpdate', data);
    })

    import.meta.hot.on('vite:afterUpdate', (data) => {
        console.log('vite:afterUpdate', data);
    })

    import.meta.hot.on('vite:error', (data) => {
        console.log('vite:error', data);
    })
}