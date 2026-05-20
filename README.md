# Calculadora React

Proyecto desarrollado utilizando React y Vite para práctica de componentes, testing, linting y documentación visual con Storybook.

La aplicación consiste en una calculadora con interfaz inspirada en calculadoras móviles modernas, utilizando una estética minimalista en tonos rosado pastel.

---

## Instalación

Clonar el repositorio e instalar dependencias:

```bash
npm install
```

## Ejecutar la aplicación

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en:

```
http://localhost:5173
```

## Ejecutar los tests

Para correr todos los tests:

```bash
npm test
```

## Ejecutar Storybook

Para visualizar los componentes y sus estados:

```bash
npm run storybook
```

Storybook estará disponible en:

```
http://localhost:6006
```

## Ejecutar ESLint

Para validar las reglas de linting del proyecto:

```bash
npm run lint
```

El proyecto incluye reglas personalizadas como:

- prohibición de punto y coma
- máximo de 120 caracteres por línea

## Funcionalidades implementadas (puntos)

- (20 puntos) [Criterio subjetivo] Según qué tan interesante es el diseño de su interfaz.

- (5 puntos) Por cada test que implementen, para un máximo de 25 puntos. Los tests deben no ser triviales.

- (5 puntos) Por cada historia de Storybook que implementen, para un máximo de 25 puntos. Las historias deben representar estados o variaciones distintas de los componentes.

- (10 puntos) Por que su código sea compliant con javascript standard.
Para que cuenten los puntos, deben configurar una regla custom que prohíba puntos y coma.
Por agregar una regla para que no puedan haber más de 120 caracteres por línea.
Deben implementar el script:
lint
para mostrar que no tienen errores, y este debe pasar por todos los js y jsx.

- (5 puntos) Por implementar el punto decimal. El punto cuenta como un carácter dentro del límite de 9, tanto para el ingreso de datos como para los resultados.

- (10 puntos) Por implementar la operación división. Tomen nota que la regla de los 9 caracteres sigue en pie y es un requerimiento. Presten especial atención a resultados continuos o con muchos decimales (ejemplo: 22/7).

- (5 puntos) Por implementar la función "+/-" que convierte el número desplegado en un número negativo. El signo menos cuenta como un carácter dentro del límite de 9 tanto en el ingreso de datos como en los resultados.

- (10 puntos) Por manejar parte de su lógica con un hook hecho por ustedes.

- (5 puntos) Por poner un title y un favicon distinto al default.

## Estructura del proyecto

```
src/
├── components/
├── hooks/
├── stories/
├── tests/
├── utils/
├── App.jsx
├── main.jsx
└── index.css
```

## Tecnologías utilizadas

- React
- Vite
- Vitest
- React Testing Library
- Storybook
- ESLint
