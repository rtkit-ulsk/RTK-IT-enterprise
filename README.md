# Next.js RTK IT Boilerplate
![Project intro image](./project-logo.png)
Добро пожаловать в _RTK IT Boilerplate_, опенсорсный шаблон для интерпрайзных проектов РТК ИТ. Он полон полезных фич, которые помогают создавать высокопроизводительные, поддерживаемые и удобные приложения. Просто склонируй себе этот шаблон и начинай кодить в удовольствие


## 📚 Фичи
С этим шаблоном вы получите все, что вам нужно
- 🏎️ **[Next.js](https://nextjs.org/)** - Быстрый по умолчанию
- ✨ **[ESlint](https://eslint.org/)** и **[Prettier](https://prettier.io/)** - Инструменты качества кода с шаблоном для **[РТК ИТ](https://github.com/rtkit-ulsk/eslint-config-rtkit)**
- ✨ **[StyleLint](https://stylelint.io/)** - Инструменты качества для css 
- 🛠️ **[Максимально строгий TypeScript](https://www.typescriptlang.org/)** - Вместе с [`ts-reset`](https://github.com/total-typescript/ts-reset) библиотекой для увеличения безопасности
- 📊 **[Плагин для анализа билда](https://www.npmjs.com/package/@next/bundle-analyzer)** - Будьте в курсе того, что попадает в ваш бандл
- 🧪 **[Jest](https://jestjs.io/)** и **[React Testing Library](https://testing-library.com/react)** - Для юнит и интеграционных тестов
- 🎭 **[Playwright](https://playwright.dev/)** - Пиши e2e тесты как про
- 📕 **[Storybook](https://storybook.js.org/)** - Создавай, тестируй и показывай свои компоненты
- 🌬️ **Smoke Testing** and **Acceptance Tests** - For confidence in your deployments
 📝 **[Conventional commits git hook](https://www.conventionalcommits.org/)** - Сохраните историю комитов чистой и лаконичной
 - 🎯 **[Абсолютные импорты](https://nextjs.org/docs/advanced-features/module-path-aliases)** - Никаких больше спагетти импортов
 - ⚕️ **[Health checks](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/)** - Kubernetes-совместимая проверка для надежного деплоя
 - 🧩 **[RTK IT UI-KIT](https://design.rt.ru/storybook/?path=/story/documentation-introduction--page)** - Набор UI компонентов для react от дизайн системы РТК
 - 🤖 **[Renovate BOT](https://www.whitesourcesoftware.com/free-developer-tools/renovate)** - Автообнавление зависимостей
 - 🩹 **[Patch-package](https://www.npmjs.com/package/patch-package)** - Чиним внешние зависимости не отвлекаясь от работы
 - 📈 **Взаимосвязь компонентов и график зависимостей** - Инструмент для управления взаимоотношениями компонентов
- 🚀 **[GitHub Actions](https://github.com/features/actions)** - Предустановленные экшены для гитхаба (TODO: переделать на gitlab CI)
- 🤖🧠 **[Автоматическое ревью кода с помощью ChatGPT](https://openai.com/chatgpt)** - **Используйте силу AI для улучшения качества работы!**
- 💯 **Идельный Lighthouse счет** - Потому что производительность это важно
- 🚢 **[Semantic Release](https://github.com/semantic-release/semantic-release)** - Для автоматических чейнджлогов
- 💻 **[T3 Env](https://env.t3.gg/)** - Легкое управление ENV переменными




## Оглавление

- [Next.js RTK IT Boilerplate](#nextjs-enterprise-boilerplate)
  - [📚 Фичи](#-features)
  - [Оглавление](#table-of-contents)
  - [🎯 Начало работы](#-getting-started)
  - [🚀 Деплой](#-deployment)
  - [📃 Scripts Overview](#-scripts-overview)
  - [🔗 Coupling Graph](#-coupling-graph)
  - [🧪 Testing](#-testing)
    - [Running Tests](#running-tests)
    - [Acceptance Tests](#acceptance-tests)
    - [Smoke Testing](#smoke-testing)
  - [🎨 Styling and Design System](#-styling-and-design-system)
    - [CVA - A New Approach to Variants](#cva---a-new-approach-to-variants)
  - [💾 State Management](#-state-management)
    - [Zustand](#zustand)
    - [Jotai](#jotai)
    - [Recoil](#recoil)
  - [🤖 ChatGPT Code Review](#-chatgpt-code-review)
  - [💻 Environment Variables handling](#-environment-variables-handling)
  - [🤝 Contribution](#-contribution)
  - [💌 Support](#support)
  - [📜 License](#-license)
  - [Contributors](#contributors)

## 🎯 Начало работы

Для начала работы с шаблоном следуйте следующим шагам:

1. Форкните или склонируйте репозиторий:

```bash
git clone git@github.com:rtkit-ulsk/RTK-IT-enterprise.git
```

2. Установите зависимости:

```bash
yarn install --frozen-lockfile
```

3. Запустите дев сервер:

```bash
yarn dev
```

4. Откройте [http://localhost:3000](http://localhost:3000) в броузере чтобы увидеть результат

5. Этот проект использует [conventional commits](https://github.com/qoomon/git-conventional-commits) для обеспечения однотипности коммитов. Для установки хуков выполните эту команду в корнеевой директории проекта:

```sh
brew install pre-commit
pre-commit install -t commit-msg
```

## 🚀 Деплой

Easily deploy your Next.js app with [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=github&utm_campaign=next-enterprise) by clicking the button below:

[![Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/Blazity/next-enterprise)

## 📃 Обзор скриптов

Следующие скрипты доступны в `package.json`:

- `dev`: Стартует дев сервер с цветным выводом в консоль
- `build`: Билдит приложение для продакшена
- `start`: Стартует продакшен сервер
- `lint`: Линтит код
- `lint:fix`: Автоматически исправляет ошибки с помощью линтера
- `analyze`: Анализирует размер бандла для клиента и сревера
- `storybook`: Стартует Storybook сервер
- `build-storybook`: Билдит Storybook для деплоя
- `test`: Запускает юнит и интеграционные тесты
- `e2e:headless`: Запускает end-to-end тесты в хедлес режиме
- `e2e:ui`: Запускает end-to-end tests с интерфейсом
- `postinstall`: Применяет патчи для сторонних пакетов
- `preinstall`: Проверяет установлен ли проект с помощью yarn
- `coupling-graph`: **Генерирует граф зависимостей**

## 🔗 Граф зависимостей

Скрипт `coupling-graph` полезный инструмент который позволяет визуализировать зависимости внутренних модулей проекта. Он строится используя библиотеку [Madge](https://github.com/pahen/madge). Для получения графика, просто запустите команду:

```bash
yarn coupling-graph
```

Это создаст файл `graph.svg`, который содержит графическое представление зависимостей ваших компонентов. Файл можно открыть любым SVG просмотрщиком, например броузером

![graph](https://user-images.githubusercontent.com/28964599/233662744-3ba89713-8466-49cd-9be7-e6fb38191f58.png)

## 🧪 Testing

This boilerplate comes with various testing setups to ensure your application's reliability and robustness.

### Running Tests

- **Unit and integration tests**: Run Jest tests using `yarn test`
- **End-to-end tests (headless mode)**: Run Playwright tests in headless mode with `yarn e2e:headless`
- **End-to-end tests (UI mode)**: Run Playwright tests with UI using `yarn e2e:ui`

<img width="1392" alt="image" src="https://user-images.githubusercontent.com/28964599/233666655-93b7d08b-2fd8-406a-b43c-44d4d96cf387.png">

### Acceptance Tests

To write acceptance tests, we leverage Storybook's [`play` function](https://storybook.js.org/docs/react/writing-stories/play-function#writing-stories-with-the-play-function). This allows you to interact with your components and test various user flows within Storybook.

```ts
/*
 * See https://storybook.js.org/docs/react/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const emailInput = canvas.getByLabelText("email", {
      selector: "input",
    })

    await userEvent.type(emailInput, "example-email@email.com", {
      delay: 100,
    })

    const passwordInput = canvas.getByLabelText("password", {
      selector: "input",
    })

    await userEvent.type(passwordInput, "ExamplePassword", {
      delay: 100,
    })
    // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    const submitButton = canvas.getByRole("button")

    await userEvent.click(submitButton)
  },
}
```

### Smoke Testing

In this boilerplate, we use Storybook's out-of-the-box support for smoke testing to verify that components render correctly without any errors. Just run `yarn test-storybook` to perform smoke testing. Remember to write stories in JSX or TSX format only. Smoke testing and a lot of other functionalities dont work well with MDX stories.

## 🎨 Styling and Design System

This boilerplate uses Tailwind CSS for styling and CVA for creating a powerful, easy-to-use design system. If you want to learn more about the setup, check out this fantastic video by Vercel:

[![Styling and Design System](https://img.youtube.com/vi/T-Zv73yZ_QI/0.jpg)](https://www.youtube.com/watch?v=T-Zv73yZ_QI&ab_channel=Vercel)

### CVA - A New Approach to Variants

While CSS-in-TS libraries such as [Stitches](https://stitches.dev/) and [Vanilla Extract](https://vanilla-extract.style/) are great for building type-safe UI components, they might not be the perfect fit for everyone. You may prefer more control over your stylesheets, need to use a framework like Tailwind CSS, or simply enjoy writing your own CSS.

Creating variants using traditional CSS can be a tedious task, requiring you to manually match classes to props and add types. CVA is here to take that pain away, allowing you to focus on the enjoyable aspects of UI development. By providing an easy and type-safe way to create variants, CVA simplifies the process and helps you create powerful design systems without compromising on the flexibility and control of CSS.

## 💾 State Management

While this boilerplate doesn't include a specific state management library, we believe it's essential for you to choose the one that best suits your project's needs. Here are some libraries we recommend for state management:

### Zustand

[Zustand](https://github.com/pmndrs/zustand) is a small, fast, and scalable state management library. It's designed to be simple and intuitive, making it a great choice for small to medium-sized projects. It's also optimized for bundle size, ensuring minimal impact on your app's performance.

### Jotai

[Jotai](https://github.com/pmndrs/jotai) is an atom-based state management library for React that focuses on providing a minimal and straightforward API. Its atom-based approach allows you to manage your state in a granular way while still being highly optimized for bundle size.

### Recoil

[Recoil](https://recoiljs.org/) is a state management library developed by Facebook, specifically designed for React applications. By utilizing atoms and selectors, Recoil allows you to efficiently manage state and derived state. Its key benefit is the ability to update components only when the state they're subscribed to changes, reducing unnecessary re-renders and keeping your application fast and efficient. Recoil also offers great developer experience with built-in debugging tools.

Choose the library that best fits your requirements and project structure to ensure an efficient state management solution for your application.

## 🤖 ChatGPT Code Review

We've integrated the innovative [ChatGPT Code Review](https://github.com/anc95/ChatGPT-CodeReview) for AI-powered, automated code reviews. This feature provides real-time feedback on your code, helping improve code quality and catch potential issues.

To use ChatGPT Code Review, add an `OPENAI_API_KEY` environment variable with an appropriate key from the OpenAI platform. For setup details, refer to the [Using GitHub Actions](https://github.com/anc95/ChatGPT-CodeReview#using-github-actions) section in the documentation.

![image](https://user-images.githubusercontent.com/28964599/233685071-e1371edf-6359-41c3-a989-335d6ee09cb7.png)

## 💻 Environment Variables handling

[T3 Env](https://env.t3.gg/) is a library that provides environmental variables checking at build time, type validation and transforming. It ensures that your application is using the correct environment variables and their values are of the expected type. You’ll never again struggle with runtime errors caused by incorrect environment variable usage.

Config file is located at `env.mjs`. Simply set your client and server variables and import `env` from any file in your project.

```ts
export const env = createEnv({
  server: {
    // Server variables
    SECRET_KEY: z.string(),
  },
  client: {
    // Client variables
    API_URL: z.string().url(),
  },
  runtimeEnv: {
    // Assign runtime variables
    SECRET_KEY: process.env.SECRET_KEY,
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
})
```

If the required environment variables are not set, you'll get an error message:

```sh
  ❌ Invalid environment variables: { SECRET_KEY: [ 'Required' ] }
```

## 🤝 Contribution

Contributions are always welcome! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch with a descriptive name.
3. Make your changes, and commit them using the [Conventional Commits](https://www.conventionalcommits.org/) format.
4. Push your changes to the forked repository.
5. Create a pull request, and we'll review your changes.

## Support

If you're looking for help or simply want to share your thoughts about the project, we encourage you to join our Discord community. Here's the link: [https://blazity.com/discord](https://blazity.com/discord). It's a space where we exchange ideas and help one another. Everyone's input is appreciated, and we look forward to welcoming you.

## 📜 License

This project is licensed under the MIT License. For more information, see the [LICENSE](./LICENSE) file.

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://bstefanski.com/"><img src="https://avatars.githubusercontent.com/u/28964599?v=4?s=100" width="100px;" alt="Bart Stefanski"/><br /><sub><b>Bart Stefanski</b></sub></a><br /><a href="https://github.com/Blazity/next-enterprise/commits?author=bmstefanski" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jjablonski-it"><img src="https://avatars.githubusercontent.com/u/51968772?v=4?s=100" width="100px;" alt="Jakub Jabłoński"/><br /><sub><b>Jakub Jabłoński</b></sub></a><br /><a href="#infra-jjablonski-it" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td align="center" size="13px" colspan="7">
        <img src="https://raw.githubusercontent.com/all-contributors/all-contributors-cli/1b8533af435da9854653492b1327a23a4dbd0a10/assets/logo-small.svg">
          <a href="https://all-contributors.js.org/docs/en/bot/usage">Add your contributions</a>
        </img>
      </td>
    </tr>
  </tfoot>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
