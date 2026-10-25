'use strict';

document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

/* Ссылки на мессенджеры. Оставьте пустыми, если ссылки пока нет —
   соответствующие кнопки на сайте будут скрыты. Пример:
   telegram: "https://t.me/adam_i_eva_bot",
   max: "https://max.ru/u/..." */
const STUDIO_LINKS = {
  telegram: '',
  max: '',
};

const CATEGORIES = {
  plasma: {
    title: 'Холодная плазма',
    description: 'Аппаратная методика для работы с рубцами, растяжками, тургором и пигментацией.',
  },
  'face-massage': {
    title: 'Массаж лица',
    description: 'Ручные техники для тонуса, лимфотока и расслабления.',
  },
  'face-care': {
    title: 'Уход за лицом',
    description: 'Чистки, маски и уходовые ритуалы под запрос кожи.',
  },
  hardware: {
    title: 'Аппаратные процедуры',
    description: 'Кавитация, РФ-лифтинг, вакуум и прессотерапия для тела.',
  },
  epilation: {
    title: 'Эпиляция и шугаринг',
    description: 'Деликатное удаление волос с вниманием к коже.',
  },
  courses: {
    title: 'Курсы коррекции фигуры',
    description: 'Программы для системной работы с телом.',
  },
};

const SERVICES = [
  {
    cat: 'plasma',
    title: 'Шлифовка шрамов и рубцов',
    price: null,
    mode: 'custom',
    note: '2 500 ₽ до 3 см², далее +300 ₽ за каждый см²',
    duration: 30,
    description: 'Шлифовка рубцов и шрамов. Стоимость зависит от площади.',
  },
  {
    cat: 'plasma',
    title: 'Живот: растяжки / подтяжка / жиросжигание',
    price: 10000,
    duration: 60,
    featured: 3,
  },
  {
    cat: 'plasma',
    title: 'Бока: растяжки / подтяжка / жиросжигание',
    price: 8000,
    duration: 45,
  },
  {
    cat: 'plasma',
    title: 'Бока + живот',
    price: 15000,
    duration: 90,
  },
  {
    cat: 'plasma',
    title: 'Грудь: растяжки / подтяжка',
    price: 10000,
    mode: 'from',
    duration: 45,
    description: 'Стоимость зависит от объёма работы.',
  },
  {
    cat: 'plasma',
    title: 'Бёдра: растяжки / подтяжка',
    price: 12000,
    mode: 'from',
    duration: 60,
    description: 'Стоимость зависит от объёма работы.',
  },
  {
    cat: 'plasma',
    title: 'Спина полностью',
    price: 15000,
    duration: 90,
  },
  {
    cat: 'plasma',
    title: 'Верх спины',
    price: 8000,
    duration: 45,
  },
  {
    cat: 'plasma',
    title: 'Низ спины',
    price: 8000,
    duration: 45,
  },
  {
    cat: 'plasma',
    title: 'Ягодицы: упругость, омоложение, жиросжигание',
    price: 15000,
    duration: 60,
  },
  {
    cat: 'plasma',
    title: 'Галифе: омоложение, тургор, жиросжигание',
    price: 16000,
    duration: 60,
  },
  {
    cat: 'plasma',
    title: 'Подбородок, брыли: подтяжка, жиросжигание',
    price: 3000,
    duration: 30,
  },
  {
    cat: 'plasma',
    title: 'Интимная подтяжка и отбеливание (жен.)',
    price: 10000,
    duration: 45,
    description: 'Лобок и большие половые губы: улучшение тургора, омоложение кожи.',
  },
  {
    cat: 'plasma',
    title: 'Интимная подтяжка и отбеливание (муж.)',
    price: 10000,
    duration: 45,
    description: 'Ствол и мошонка: улучшение тургора, омоложение кожи.',
  },
  {
    cat: 'plasma',
    title: 'Отбеливание паховой области',
    price: 10000,
    duration: 45,
  },
  {
    cat: 'plasma',
    title: 'Отбеливание межъягодичной складки',
    price: 8000,
    duration: 30,
  },
  {
    cat: 'plasma',
    title: 'Лечение акне, постакне: щёки',
    price: 5000,
    duration: 40,
  },
  {
    cat: 'plasma',
    title: 'Лечение акне, постакне: подбородок',
    price: 3000,
    duration: 30,
  },
  {
    cat: 'plasma',
    title: 'Верхние веки',
    price: 5000,
    duration: 30,
  },
  {
    cat: 'plasma',
    title: 'Нижние веки',
    price: 4000,
    duration: 30,
  },
  {
    cat: 'plasma',
    title: 'Глаза полностью',
    price: 8000,
    duration: 45,
  },
  {
    cat: 'plasma',
    title: 'Гусиные лапки',
    price: 5000,
    duration: 30,
  },
  {
    cat: 'plasma',
    title: 'Нос',
    price: 1500,
    duration: 20,
  },
  {
    cat: 'plasma',
    title: 'Морщины вокруг рта',
    price: 2500,
    duration: 20,
  },
  {
    cat: 'plasma',
    title: 'Околоушные морщины',
    price: 3000,
    duration: 20,
  },
  {
    cat: 'plasma',
    title: 'Линейные морщины на лбу',
    price: 3000,
    duration: 20,
  },
  {
    cat: 'plasma',
    title: 'Межбровье',
    price: 2500,
    duration: 20,
  },
  {
    cat: 'plasma',
    title: 'Зона лба полностью',
    price: 5000,
    duration: 30,
  },
  {
    cat: 'plasma',
    title: 'Носогубные морщины',
    price: 2500,
    duration: 20,
  },
  {
    cat: 'plasma',
    title: 'Лицо без зоны вокруг глаз',
    price: 8000,
    duration: 60,
  },
  {
    cat: 'plasma',
    title: 'Омоложение лица полностью',
    price: 10000,
    duration: 60,
    featured: 1,
  },
  {
    cat: 'plasma',
    title: 'Шлифовка лица и шеи',
    price: 15000,
    duration: 90,
  },
  {
    cat: 'plasma',
    title: 'Шея',
    price: 5000,
    duration: 30,
  },
  {
    cat: 'plasma',
    title: 'Декольте',
    price: 6000,
    duration: 45,
  },
  {
    cat: 'plasma',
    title: 'Омоложение кистей рук',
    price: 5000,
    duration: 30,
  },
  {
    cat: 'plasma',
    title: 'Пигментные пятна',
    price: 1000,
    mode: 'from',
    duration: 30,
    description: 'Стоимость зависит от площади и количества зон.',
  },
  {
    cat: 'plasma',
    title: 'Алопеция',
    price: 2000,
    mode: 'from',
    duration: 40,
    description: 'Стоимость зависит от объёма работы.',
  },
  {
    cat: 'plasma',
    title: 'Вся голова: алопеция',
    price: 6000,
    duration: 60,
  },
  {
    cat: 'plasma',
    title: 'Загущение волос (вся голова)',
    price: 6000,
    duration: 60,
  },
  {
    cat: 'plasma',
    title: 'Обезболивание 1 зоны',
    price: 1000,
    mode: 'from',
    duration: 15,
    description: 'Коленные, локтевые, запястные, голеностопные, тазобедренные суставы. Анестезирующее средство на месте — 1 000 ₽.',
  },
  {
    cat: 'face-massage',
    title: 'Массаж лица «Кобидо»',
    price: 2500,
    duration: 45,
  },
  {
    cat: 'face-massage',
    title: 'Массаж лица «Букальный»',
    price: 3000,
    duration: 45,
    featured: 2,
  },
  {
    cat: 'face-massage',
    title: 'Массаж лица «Классический»',
    price: 2500,
    duration: 40,
  },
  {
    cat: 'face-massage',
    title: 'Массаж лица «Лимфодренажный»',
    price: 2500,
    duration: 40,
  },
  {
    cat: 'face-massage',
    title: 'Массаж лица «Щипковый»',
    price: 2500,
    duration: 40,
  },
  {
    cat: 'face-massage',
    title: 'Массаж головы',
    price: 1500,
    duration: 30,
  },
  {
    cat: 'face-care',
    title: 'Комбинированная чистка лица',
    price: 3500,
    mode: 'from',
    duration: 60,
    featured: 4,
  },
  {
    cat: 'face-care',
    title: 'Маска для лица «Альгинатная»',
    price: 1500,
    duration: 30,
  },
  {
    cat: 'face-care',
    title: 'Маска для лица «Водорослевая»',
    price: 1500,
    duration: 40,
  },
  {
    cat: 'face-care',
    title: 'Маска для лица «Пузырьковая»',
    price: 2000,
    duration: 40,
  },
  {
    cat: 'face-care',
    title: 'Процедура выходного дня «Релакс»',
    price: 4500,
    duration: 90,
    description: 'Массаж лица + гипсовое моделирование.',
    featured: 6,
  },
  {
    cat: 'hardware',
    title: 'Кавитация',
    price: 1500,
    mode: 'from',
    duration: 45,
    featured: 5,
  },
  {
    cat: 'hardware',
    title: 'РФ-лифтинг',
    price: 2000,
    mode: 'from',
    duration: 45,
  },
  {
    cat: 'hardware',
    title: 'Вакуумный массаж',
    price: 1500,
    mode: 'from',
    duration: 40,
  },
  {
    cat: 'hardware',
    title: 'Вибромассаж',
    price: 1200,
    mode: 'from',
    duration: 30,
  },
  {
    cat: 'hardware',
    title: 'Лимфодренажный аппаратный массаж (прессотерапия)',
    price: 1500,
    mode: 'from',
    duration: 45,
  },
  {
    cat: 'epilation',
    title: 'Шугаринг',
    price: 500,
    mode: 'from',
    duration: 30,
  },
  {
    cat: 'epilation',
    title: 'Электроэпиляция',
    price: 1000,
    mode: 'from',
    duration: 30,
  },
  {
    cat: 'courses',
    title: 'Курс «Из гусёнки в бабочку»',
    price: null,
    mode: 'custom',
    note: 'Стоимость курса уточняйте у администратора',
    duration: 60,
    description: 'Кавитация / лазерный липолиз + прессотерапия. Одна процедура в рамках курса.',
  },
  {
    cat: 'courses',
    title: 'Курс «Жиротоп»',
    price: null,
    mode: 'custom',
    note: 'Стоимость курса уточняйте у администратора',
    duration: 60,
    description: 'Кавитация / лазерный липолиз + вибромассаж. Одна процедура в рамках курса.',
  },
];

/* ==========================================================================
   Прайс
   ========================================================================== */

const state = {
  filter: 'featured',
  query: '',
};

const priceGrid = document.querySelector('[data-price-grid]');
const priceCount = document.querySelector('[data-price-count]');
const priceSearch = document.querySelector('[data-price-search]');
const priceChips = Array.from(document.querySelectorAll('[data-filter]'));

const numberFormatter = new Intl.NumberFormat('ru-RU');

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[character]));
}

function formatPrice(value) {
  return numberFormatter.format(value);
}

function priceLabel(service) {
  if (service.mode === 'custom' || !service.price) {
    return 'по запросу';
  }

  if (service.mode === 'from') {
    return `от ${formatPrice(service.price)} ₽`;
  }

  return `${formatPrice(service.price)} ₽`;
}

function serviceDescription(service) {
  return service.description || CATEGORIES[service.cat].description;
}

function matchesQuery(service, query) {
  const haystack = [
    service.title,
    service.description || '',
    CATEGORIES[service.cat].title,
    CATEGORIES[service.cat].description,
  ].join(' ').toLowerCase();

  return haystack.includes(query);
}

function getVisibleServices() {
  const query = state.query.trim().toLowerCase();

  if (query) {
    return SERVICES.filter((service) => matchesQuery(service, query));
  }

  if (state.filter === 'featured') {
    return SERVICES
      .filter((service) => service.featured)
      .sort((first, second) => first.featured - second.featured);
  }

  if (state.filter === 'all') {
    return SERVICES;
  }

  return SERVICES.filter((service) => service.cat === state.filter);
}

function updateCount(visibleCount) {
  if (!priceCount) {
    return;
  }

  if (state.query.trim()) {
    priceCount.textContent = `Найдено: ${visibleCount}`;
    return;
  }

  if (state.filter === 'featured') {
    priceCount.textContent = `Популярные процедуры: ${visibleCount}`;
    return;
  }

  if (state.filter === 'all') {
    priceCount.textContent = `Все процедуры: ${visibleCount}`;
    return;
  }

  priceCount.textContent = `${CATEGORIES[state.filter].title}: ${visibleCount}`;
}

function serviceCard(service) {
  const category = CATEGORIES[service.cat];
  const note = service.note
    ? `<span class="service-card__note">${escapeHtml(service.note)}</span>`
    : '';

  return `
    <article class="service-card">
      <div class="service-card__top">
        <span class="service-card__cat">${escapeHtml(category.title)}</span>
        <span class="service-card__time">
          <svg aria-hidden="true"><use href="#icon-clock"></use></svg>
          ${service.duration} мин
        </span>
      </div>
      <h3>${escapeHtml(service.title)}</h3>
      <p class="service-card__desc">${escapeHtml(serviceDescription(service))}</p>
      <div class="service-card__bottom">
        <span class="service-card__price">${escapeHtml(priceLabel(service))}</span>
        ${note}
      </div>
    </article>
  `;
}

function renderServices() {
  if (!priceGrid) {
    return;
  }

  const services = getVisibleServices();
  updateCount(services.length);

  if (!services.length) {
    priceGrid.innerHTML = `
      <div class="price-empty">
        <strong>Ничего не нашлось</strong>
        <span>Попробуйте другой запрос или позвоните — подскажем подходящую процедуру: <a href="tel:+79886686524">+7 (988) 668-65-24</a>.</span>
      </div>
    `;
    return;
  }

  priceGrid.innerHTML = services.map(serviceCard).join('');
}

function setActiveFilter() {
  const isSearching = state.query.trim().length > 0;

  priceChips.forEach((chip) => {
    const isActive = !isSearching && chip.dataset.filter === state.filter;
    chip.classList.toggle('is-active', isActive);
    chip.setAttribute('aria-pressed', String(isActive));
  });
}

/* ==========================================================================
   Интерфейс
   ========================================================================== */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Ссылки на мессенджеры: показываем только если они заданы выше. */
Object.entries(STUDIO_LINKS).forEach(([name, url]) => {
  if (!url) {
    return;
  }

  document.querySelectorAll(`[data-contact-link="${name}"]`).forEach((link) => {
    link.href = url;
    link.hidden = false;
  });
});

/* Год в подвале */
document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

/* Тень шапки при прокрутке */
const header = document.querySelector('[data-header]');

function updateHeader() {
  if (header) {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }
}

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

/* Мобильное меню */
const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const navBackdrop = document.querySelector('[data-nav-backdrop]');

function setMenu(open, returnFocus = false) {
  if (!navToggle || !nav) {
    return;
  }

  nav.classList.toggle('is-open', open);

  if (navBackdrop) {
    navBackdrop.classList.toggle('is-visible', open);
  }

  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  document.body.classList.toggle('nav-open', open);

  if (open) {
    window.setTimeout(() => {
      const firstLink = nav.querySelector('a');

      if (firstLink) {
        firstLink.focus();
      }
    }, 60);
  } else if (returnFocus) {
    navToggle.focus();
  }
}

if (navToggle) {
  navToggle.addEventListener('click', () => {
    setMenu(navToggle.getAttribute('aria-expanded') !== 'true');
  });
}

if (navBackdrop) {
  navBackdrop.addEventListener('click', () => {
    setMenu(false, true);
  });
}

if (nav) {
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      setMenu(false);
    });
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav && nav.classList.contains('is-open')) {
    setMenu(false, true);
  }
});

const desktopQuery = window.matchMedia('(min-width: 761px)');
const handleDesktopChange = (event) => {
  if (event.matches) {
    setMenu(false);
  }
};

if (desktopQuery.addEventListener) {
  desktopQuery.addEventListener('change', handleDesktopChange);
} else {
  desktopQuery.addListener(handleDesktopChange);
}

/* Фильтры и поиск по прайсу */
priceChips.forEach((chip) => {
  chip.addEventListener('click', () => {
    state.filter = chip.dataset.filter;
    state.query = '';

    if (priceSearch) {
      priceSearch.value = '';
    }

    setActiveFilter();
    renderServices();
  });
});

if (priceSearch) {
  priceSearch.addEventListener('input', (event) => {
    state.query = event.target.value;
    setActiveFilter();
    renderServices();
  });
}

document.querySelectorAll('[data-filter-link]').forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filterLink;

    if (!CATEGORIES[filter]) {
      return;
    }

    state.filter = filter;
    state.query = '';

    if (priceSearch) {
      priceSearch.value = '';
    }

    setActiveFilter();
    renderServices();

    const pricesSection = document.getElementById('prices');

    if (pricesSection) {
      pricesSection.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    }
  });
});

/* Открыт только один вопрос FAQ */
const faqItems = Array.from(document.querySelectorAll('.faq-item'));

faqItems.forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) {
      return;
    }

    faqItems.forEach((other) => {
      if (other !== item) {
        other.open = false;
      }
    });
  });
});

/* Подсветка активного пункта меню */
const navLinks = Array.from(document.querySelectorAll('.nav__link'));
const navTargets = new Map(
  navLinks.map((link) => [link.getAttribute('href').slice(1), link]),
);
const observedSections = Array.from(navTargets.keys())
  .map((id) => document.getElementById(id))
  .filter(Boolean);

if ('IntersectionObserver' in window && observedSections.length) {
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      navLinks.forEach((link) => {
        link.classList.remove('is-active');
        link.removeAttribute('aria-current');
      });

      const activeLink = navTargets.get(entry.target.id);

      if (activeLink) {
        activeLink.classList.add('is-active');
        activeLink.setAttribute('aria-current', 'location');
      }
    });
  }, {
    rootMargin: '-28% 0px -58% 0px',
    threshold: 0,
  });

  observedSections.forEach((section) => navObserver.observe(section));
}

/* Мягкое появление блоков */
const revealItems = Array.from(document.querySelectorAll('.reveal'));

if (!('IntersectionObserver' in window) || prefersReducedMotion) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: '0px 0px -8% 0px',
    threshold: 0.08,
  });

  revealItems.forEach((item) => revealObserver.observe(item));
}

setActiveFilter();
renderServices();




