export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__first_row">
        <div className="page-wrap">
          <div className="footer__grid">
            <div className="footer__col footer__col_contacts">
              <div className="footer__title">КОНТАКТЫ</div>

              <div className="footer__text">
                152903, Россия, Ярославская область,
                <br />
                Рыбинск, ул. Чкалова, д. 93
              </div>

              <a href="mailto:rak.kadr@yandex.ru" className="footer__link">
                rak.kadr@yandex.ru
              </a>

              <a href="tel:+74855275042" className="footer__link">
                +7 (4855) 27-50-42
              </a>

              <div className="footer__text">
                ПН-ПТ: 8:00 - 17:00
                <br />
                СБ: 8:00 - 16:00
              </div>

              <a
                href="https://yandex.ru/maps/org/73328198827"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link footer__map"
              >
                Показать на карте
              </a>
            </div>

            <div className="footer__col footer__col_admission">
              <div className="footer__title">ПРИЁМНАЯ КОМИССИЯ</div>

              <a href="mailto:rak.priem@yandex.ru" className="footer__link">
                rak.priem@yandex.ru
              </a>

              <a href="tel:+74855239787" className="footer__link">
                +7 (4855) 23-97-87
              </a>

              <div className="footer__text">
                ПН-ПТ: 08:30 - 16:30
                <br />
                СБ-ВС: ВЫХОДНОЙ
              </div>
            </div>

            <div className="footer__col footer__col_socials">
              <div className="footer__title">ПРИСОЕДИНЯЙТЕСЬ</div>

              <div className="footer__socials">
                <a
                  href="https://www.youtube.com/channel/UC8Fn8h1Nfj8D50328a_iy1Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social footer__social_youtube"
                  aria-label="YouTube"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23 7.5s-.2-1.7-.8-2.4c-.8-.9-1.6-.9-2-.9C17.4 4 12 4 12 4h-.1s-5.4 0-8.2.2c-.4 0-1.2 0-2 .9C1.1 5.8 1 7.5 1 7.5S1 9.3 1 11v2c0 1.7.1 3.5.1 3.5s.2 1.7.8 2.4c.8.9 1.9.9 2.4 1C6.1 20 12 20 12 20s5.4 0 8.2-.2c.4 0 1.2 0 2-.9.6-.7.8-2.4.8-2.4S23 14.7 23 13v-2c0-1.7-.1-3.5-.1-3.5zM9.8 14.6V8.9l5.6 2.9-5.6 2.8z" />
                  </svg>
                </a>

                <a
                  href="https://vk.com/avia_college"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social footer__social_vk"
                  aria-label="VK"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.785 15.595s.288-.032.435-.195c.136-.149.131-.428.131-.428s-.019-1.307.584-1.5c.594-.19 1.356 1.262 2.166 1.82.613.423 1.078.33 1.078.33l2.165-.03s1.132-.07.595-.962c-.044-.073-.316-.665-1.627-1.881-1.372-1.272-1.188-1.066.464-3.268 1.007-1.341 1.41-2.16 1.284-2.51-.12-.334-.857-.246-.857-.246l-2.438.015s-.181-.025-.315.055c-.131.078-.215.26-.215.26s-.386 1.026-.899 1.9c-1.084 1.845-1.518 1.943-1.695 1.828-.412-.267-.309-1.073-.309-1.646 0-1.789.271-2.535-.528-2.728-.265-.064-.46-.106-1.138-.113-.87-.009-1.605.002-2.021.205-.277.135-.491.435-.36.452.162.021.529.099.723.363.251.341.242 1.106.242 1.106s.143 2.106-.333 2.367c-.326.178-.773-.185-1.735-1.861-.493-.86-.865-1.812-.865-1.812s-.072-.175-.2-.268c-.155-.112-.37-.148-.37-.148l-2.317.015s-.348.01-.476.161c-.113.135-.009.413-.009.413s1.814 4.244 3.869 6.38c1.886 1.959 4.027 1.83 4.027 1.83h.97z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__second_row">
        <div className="page-wrap footer__second_row_inner">
          <div className="footer__copyright">
            © Рыбинский авиационный колледж, 2022-2026
          </div>
        </div>
      </div>
    </footer>
  )
}