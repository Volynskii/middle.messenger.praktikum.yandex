
export const tmpl = `
<section class="container chat-wrapper black-color">
    <section class="sidebar">
        <div class="wrapper-sidebar">
            <h1 class="title">Профиль</h1>

            <input class="input sidebar-input" type="text" placeholder="Поиск">

            <ul class="chat-list">
            {{{userContact}}}
              
            </ul>
        </div>
    </section>
    <section class="main-chat">

        <section class="main-chat__header">
            <ul class="main-chat__user-actions">

                <li>
                    Добавить пользователя
                </li>
                <li>
                    Удалить пользователя
                </li>
            </ul>
        </section>

        <section class="chat">
            <div class="main-chat__date">19июня</div>
           {{{chatMessage}}}
           {{{chatMessage2}}}
        </section>

        <section class="input-bottom">
            <div class="input__upload-button"></div>
            <form class="form input__form">
                <div class="input-container">
                    <input class="input input__message" type="text" id="message" name="message" required placeholder="Сообщение">
                    <input class="input input-submit submit" type="submit" value="">
                </div>
            </form>
        </section>
    </section>
</section>
`;
