### [PORTFOLIO] Обновление портфолио — год и резюме

**Статус:** ✅ Completed
**Приоритет:** Medium

#### 📝 Суть (Контекст)

В футере захардкожен год — это приведёт к устареванию без обновления кода. Резюме тоже содержит год в имени файла, который нужно менять вручную каждый год. Оба места надо сделать динамическими.

#### 📍 Локация (Где менять)

- **Footer (год):** `src/ui/components/Footer.tsx` — строка `© 2025 Jakov`
- **Резюме (ссылки в локалях):**
  - `src/application/providers/locales/en.json` — `links.resume` → `/resume/Resume_Iakov_Yakovlev_EN_2025.pdf`
  - `src/application/providers/locales/ru.json` — `links.resume` → `/resume/Resume_Iakov_Yakovlev_RU_2025.pdf`
  - `src/application/providers/locales/lv.json` — `links.resume` → `/resume/Resume_Iakov_Yakovlev_LV_2025.pdf`
- **Резюме (файлы):** `public/resume/` — три PDF-файла с суффиксом `_2025`

#### 🛠 Что нужно сделать (Checklist)

**Год в футере:**

- [x] В `Footer.tsx` заменить хардкод `© 2025 Jakov` на динамическое значение:
  ```tsx
  const year = new Date().getFullYear();
  // ...
  <p className='font-semibold text-text-base'>© {year} Jakov</p>;
  ```

**Резюме:**

- [x] Просмотреть все три версии резюме (EN / RU / LV) и внести правки:
  - [x] Обновить ссылку на GitHub (проверить актуальность)
  - [x] Добавить / выделить главный проект
  - [x] Проверить и актуализировать места работы
- [x] Подготовить итоговые PDF-файлы резюме (EN / RU / LV) с актуальным содержимым
- [x] Положить файлы в `public/resume/` с именем без года, например `Resume_Iakov_Yakovlev_EN.pdf`, чтобы не менять пути каждый год
- [x] Обновить пути в `en.json`, `ru.json`, `lv.json` убрав суффикс `_YYYY`
- [x] Удалить старые PDF-файлы `_2025` из `public/resume/`

#### 🔗 Связи и Ресурсы

- Компонент, использующий ссылку на резюме: `src/ui/pages/Home/Home.tsx` (строка 38)
- Footer: `src/ui/components/Footer.tsx`

---

🧊 Backlog — когда-нибудь потом.

⏳ Planned — в следующей итерации.

🏗️ In Progress — прямо сейчас.
