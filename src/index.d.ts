declare module "https://unpkg.com/csz" {
  export default function css(
    ...expressions: (TemplateStringsArray | string)[]
  ): string;
}
