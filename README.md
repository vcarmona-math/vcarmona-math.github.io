# Página académica estática

Adaptación estática inspirada en **Academic Website Template** de Jialing Wu. Preparada para editar las páginas HTML y publicarlas en GitHub Pages: no necesita Hugo, Jekyll, Node ni otro programa para generar el sitio.

## Contenido

- `index.html`: presentación, foto, enlaces y novedades.
- `background.html`: formación, experiencia y premios.
- `publications.html`: publicaciones agrupadas por año.
- `teaching.html`: asignaturas en listas sencillas.
- `projects.html`: proyectos en listas sencillas.
- `resources.html`: materiales y enlaces.
- `style.css`: colores, tipografía y diseño adaptable. El tema oscuro está activado por defecto.
- `assets/images/`: imagen de perfil y favicon.
- `assets/docs/`: aquí puedes guardar el CV y otros PDF.

## Qué cambiar

1. Abre cada archivo `.html` con un editor de texto (por ejemplo, Bloc de notas o TextEdit en modo texto sin formato).
2. Sustituye los textos de ejemplo por tu información. Para añadir un elemento a una lista, copia una línea `<li>...</li>` y cambia el texto y los enlaces.
3. En `index.html`, sustituye `Nombre Apellidos`, el puesto, correo y perfiles. Para poner una foto, copia `foto.jpg` a `assets/images/` y cambia el bloque del círculo por `<img class="portrait" src="assets/images/foto.jpg" alt="Nombre Apellidos">`.
4. Copia tu CV a `assets/docs/CV.pdf`; el enlace de ejemplo ya apunta a esa ruta.
5. En cada enlace `href="#"`, pega la dirección real del documento o recurso. Si no tienes enlace, puedes borrar el enlace completo.
6. Si quieres cambiar el nombre que aparece en la pestaña del navegador, modifica el texto dentro de `<title>...</title>`.

## Publicarlo en GitHub Pages

Para que la dirección sea `https://vcarmona-math.github.io/`, el repositorio debe llamarse exactamente `vcarmona-math.github.io` y pertenecer a la cuenta `vcarmona-math`.

1. Crea en GitHub un repositorio nuevo llamado `vcarmona-math.github.io`.
2. Descomprime esta carpeta en tu ordenador.
3. Sube **el contenido** de `jialing-static-site` al nivel principal del repositorio: `index.html`, `style.css`, las otras páginas y `assets`. No subas únicamente una carpeta contenedora que esconda el `index.html` un nivel más abajo.
4. En el repositorio, abre **Settings → Pages**. En “Build and deployment”, elige **Deploy from a branch**, selecciona `main` y `/ (root)`, y pulsa **Save**.
5. Espera un par de minutos y abre `https://vcarmona-math.github.io/`.

Cada vez que edites los HTML o añadas archivos, guarda y haz commit/push en GitHub. GitHub Pages publicará los cambios automáticamente.

## Nota de licencia

La estructura original de referencia de Jialing Wu indica licencia MIT y que el crédito no es obligatorio. Esta adaptación es un punto de partida editable; conserva este README si quieres mantener la atribución.
