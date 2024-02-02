import { LanguageDial } from "@/components";

const languages = [
  {
    value: 100,
    text: "Turkish (Native)",
    className: "text-secondary",
  },
  {
    value: 90,
    text: "English (Professional)",
    className: "text-secondary/90",
  },
  {
    value: 70,
    text: "Japanese (Conversational)",
    className: "text-secondary/70",
  },
];

export default function Languages() {
  return (
    <div className="grid grid-cols-3 justify-center gap-1 py-2">
      {languages.map((lang, idx) => (
        <LanguageDial key={idx} {...lang} />
      ))}
    </div>
  );
}
