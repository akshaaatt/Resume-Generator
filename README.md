# Resume Generator

[See an example](https://akshat.redalck.com/)

## Technology

- [Next.js](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Vanilla Extract](https://vanilla-extract.style/)
- [Font Awesome 6](https://fontawesome.com/)
- [React-pdf](https://react-pdf.org/)
- [Marked](https://marked.js.org/)
- [Front Matter](https://frontmatter.codes/docs/markdown)
- [OG Impact](https://ogimpact.sh/)
- [Jest](https://jestjs.io/)
- [Testing Library](https://testing-library.com/)
- [Vercel](https://vercel.com/)

## How To Use This Project

The project requires only a few steps to set up your custom config, add content to the internal CMS, and deploy to Vercel!

### Clone and Deploy

It may seem counter-intuitive, but the simplest way to get started is to clone and deploy in one step. Afterwards, you can edit the CMS and template to match your needs.

### Modify Custom Config

Clone the project you just created to your local machine. Open it in your favorite editor, and open up the `edit-me/config/` folder at the root. Here you will find a couple of placeholder images that you can swap out if you want. You can also edit the `manifest.json` and `resumeConfig.ts` to meet your needs. The config file contains the following constants that will be used throughout the project:

- `primaryColor`: `string`. A HEX color that will be used for accents. This color should meet the WCAG guidelines for color accessibility when using white text on top. The default blue color meets AA contrast standards.

### Set Up Your CMS

Next, modify the mock CMS data that is included in `edit-me/cms/`. Each Markdown file uses Front Matter fields that are used to add attributes to the item. These attributes are type safe, so the project won't run if required fields are missing or invalid. The rest of the Markdown file will be rendered as HTML to provide a description of the item.

Although the mock files should be pretty self-explanatory, you can view the [CMS setup document](README-CMS.md) for detailed descriptions of required and optional fields.
