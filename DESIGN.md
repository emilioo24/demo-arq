# Design brief — Fernanda Galantini · Arquitecta

Sistema visual extraído del feed de Instagram de la marca. Usalo como fuente de verdad para construir el sitio web.

> Nota: los HEX son estimados a partir de una captura de pantalla. Ajustalos si hay archivos de marca originales.

---

## 1. Concepto

Editorial, cálido y sobrio. Estética de revista de arquitectura: mucho aire, tipografía serif elegante en mayúsculas espaciadas, fotos reales de obra y de la arquitecta, bandas oscuras semitransparentes sobre las fotos para el texto. Tono cercano y en primera persona ("te explico", "Yo sí").

Palabras clave: minimalista · cálido · artesanal · confiable · premium sin ser frío.

---

## 2. Paleta de colores

| Token | HEX | Uso |
|---|---|---|
| `--cream` | `#E6DED4` | Fondo principal (placas de texto, secciones claras) |
| `--paper` | `#F1EEE9` | Fondo alternativo más claro, cards |
| `--ink` | `#2A2420` | Texto principal sobre fondos claros |
| `--brown` | `#6B4733` | Acento principal: números grandes, detalles, links |
| `--cognac` | `#8A5B3F` | Acento secundario (hover, botones) |
| `--sand` | `#B8936C` | Acento terciario, ilustraciones, bordes cálidos |
| `--taupe` | `#8C8279` | Texto secundario, metadatos, líneas |
| `--overlay` | `rgba(38, 31, 27, 0.72)` | Banda oscura sobre fotos |
| `--overlay-solid` | `#2E2723` | Footer / secciones oscuras |
| `--on-dark` | `#F4EFE8` | Texto sobre fondos oscuros u overlays |
| `--line` | `rgba(42, 36, 32, 0.15)` | Separadores hairline |

```css
:root {
  --cream: #E6DED4;
  --paper: #F1EEE9;
  --ink: #2A2420;
  --brown: #6B4733;
  --cognac: #8A5B3F;
  --sand: #B8936C;
  --taupe: #8C8279;
  --overlay: rgba(38, 31, 27, 0.72);
  --overlay-solid: #2E2723;
  --on-dark: #F4EFE8;
  --line: rgba(42, 36, 32, 0.15);
}
```

Regla: nada de colores saturados ni azules. Todo vive en la gama tierra/crema. Contraste alto entre crema y tinta, el marrón se usa con moderación.

---

## 3. Tipografía

Tres familias (Google Fonts):

| Rol | Fuente | Estilo observado |
|---|---|---|
| Display serif | **Cormorant Garamond** (300/400, italic) | Títulos grandes en MAYÚSCULAS con tracking amplio ("RENDER", "LLAVE EN MANO", "SERVICIOS"), números gigantes ("3"), subtítulos en itálica |
| Sans de titulares y cuerpo | **Jost** (400/500/600) | Titulares en mayúscula bold ("¿UN ARQUITECTO ENCARECE TU OBRA?", "HOLA SOY FERNANDA"), frases en minúscula ("señales de que tu obra…"), cuerpo de texto |
| Mono para etiquetas | **DM Mono** (400) | Eyebrows pequeños en mayúscula muy espaciada ("ANTES DE CONSTRUIR", "MITOS DE OBRA", "CÓMO TRABAJO") |

```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Jost:wght@400;500;600&family=DM+Mono&display=swap" rel="stylesheet">
```

```css
--font-display: "Cormorant Garamond", Georgia, serif;
--font-sans: "Jost", system-ui, sans-serif;
--font-mono: "DM Mono", ui-monospace, monospace;
```

### Escala y reglas

| Estilo | Fuente | Tamaño (desktop) | Peso | Tracking | Case |
|---|---|---|---|---|---|
| Hero display | Cormorant | 72–96px | 300 | 0.08em | UPPERCASE |
| Número gigante | Cormorant | 160–200px | 300 | 0 | — color `--brown` |
| H2 sans | Jost | 36–44px | 600 | 0.01em | UPPERCASE |
| H2 editorial | Jost | 36–44px | 400 | -0.01em | Sentence case, line-height 1.1 |
| Subtítulo itálica | Cormorant italic | 22–26px | 400 | 0 | Sentence case |
| Eyebrow | DM Mono | 11–12px | 400 | 0.25em | UPPERCASE, color `--taupe` |
| Firma | Jost | 11px | 500 | 0.3em | "FERNANDA GALANTINI · ARQUITECTA" |
| Body | Jost | 17px | 400 | 0 | line-height 1.6 |

---

## 4. Componentes y patrones visuales

1. **Eyebrow + título**: etiqueta mono chica arriba, título debajo. Se repite en todas las piezas.
2. **Firma de marca**: "FERNANDA GALANTINI · ARQUITECTA" en mayúsculas espaciadas al pie de bloques/secciones (separador `·`).
3. **Foto con banda oscura**: imagen full-bleed, banda inferior (~40% alto) con `--overlay` y texto centrado en `--on-dark`. Patrón para hero y cards de servicio.
4. **Lista numerada editorial**: `01`, `02`, `03` en mono chico + texto, separados por líneas hairline (`--line`). Ej: "Sin legajo técnico / Sin presupuesto por etapas / Sin un solo interlocutor".
5. **Número gigante** en serif marrón como ancla visual de una sección.
6. **Split foto/texto**: placa crema arriba con título, foto abajo (o lado a lado en desktop).
7. **Bloque Render vs. obra real**: comparador antes/después (slider) de render y foto de obra terminada.
8. Botones: rectángulos sin radio o radio mínimo (2px), borde 1px, texto Jost uppercase con tracking 0.15em. Primario: fondo `--brown`, texto `--on-dark`. Secundario: borde `--ink`, fondo transparente.

Sin sombras, sin gradientes llamativos, sin bordes redondeados grandes. Iconos lineales finos si hacen falta.

---

## 5. Fotografía

- Luz natural, tonos cálidos y desaturados (beige, madera, hormigón, cuero).
- Retratos de Fernanda trabajando (planos, notebook, muestras de materiales) con blazer cognac/negro y camisa blanca.
- Detalles táctiles: llaves sobre pared texturada, planos, maquetas.
- Obra real: hormigón visto, ángulos contrapicados.
- Aplicar leve filtro cálido para unificar.

---

## 6. Contenido / arquitectura del sitio sugerida

Marca: **Fernanda Galantini — Arquitecta**. Propuesta: proyectos **llave en mano**, "de la idea a las llaves, con una sola interlocutora".

1. **Hero** — foto de Fernanda + "Hola, soy Fernanda, arquitecta" + CTA de contacto.
2. **Servicios** — "Cómo te puedo acompañar": Obra nueva · Reformas · Interiorismo.
3. **Llave en mano** — explicación del servicio integral, una sola interlocutora.
4. **Cómo trabajo** — proceso por etapas ("Nadie te muestra esta parte del proceso. Yo sí."): relevamiento → anteproyecto → documentación técnica → presupuesto por etapas → dirección de obra → entrega.
5. **Proyectos** — galería con caso destacado "Obra Necochea: render vs. obra real".
6. **Mitos de obra / Antes de construir** — bloque educativo (ej. "¿Un arquitecto encarece tu obra?", "3 señales de que tu obra no está bien documentada"), puede ser blog.
7. **Contacto** — formulario + WhatsApp + Instagram.
8. **Footer** oscuro (`--overlay-solid`) con firma.

---

## 7. Layout

- Contenedor máx. 1200px, gutters 24px mobile / 48px desktop.
- Mucho espacio vertical entre secciones (120–160px desktop).
- Alternar secciones `--cream` / `--paper` / foto full-bleed.
- Mobile-first; las piezas de IG son 4:5, usar esa proporción para cards de proyecto.
- Animaciones sutiles: fade-up al hacer scroll, zoom lento en fotos al hover. Nada rebotador.
