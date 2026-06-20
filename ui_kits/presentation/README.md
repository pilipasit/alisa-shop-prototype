# Presentation — UI Kit

Simple business-presentation slides (1280×720, 16:9) for internal meetings and reviews.

- **slides.jsx** — `TitleSlide` (bold pink cover with reversed logo) and `ContentSlide` (data slide built from `CategorySign` + `Badge`).
- **title-slide.html / content-slide.html** — each renders one slide; both appear in the Design System tab under "Slides".

Pattern for more slides: cream background for content, pink (or a single accent) for section dividers. Headlines in Fredoka, body in Nunito, one accent color per slide. Reuse `CategorySign`, `Notice`, `PriceTag` to visualize retail data.
