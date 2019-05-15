import { appTemplate } from './app.template';
import { AppModel } from './app.model';
import { TodoModule } from './todo/todo.module';

export const AppComponent = {

    init() {
        this.appElement = document.querySelector('#app');
        this.initEvents();
        this.render();
    },

    initEvents() {
        this.appElement.addEventListener('click', event => {
            if (event.target.className === 'btn-todo') {
                TodoModule.init();
            }
        });

        document.querySelector('.banner').addEventListener('click', event => {
            event.preventDefault();
            this.render();
        });
    },

    render() {
        this.appElement.innerHTML = appTemplate(AppModel);
    }
};