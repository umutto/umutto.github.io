import { LanguageDial, SectionHeader } from "@/components";

const languages = [
  {
    value: 100,
    text: "Turkish (Native)",
    className: "text-slate-800",
  },
  {
    value: 90,
    text: "English (Professional)",
    className: "text-slate-600",
  },
  {
    value: 70,
    text: "Japanese (Conversational)",
    className: "text-slate-500",
  },
];

export default function Languages() {
  return (
    <>
      <SectionHeader>Languages</SectionHeader>
      <div className="grid grid-cols-3 justify-center gap-1 py-2">
        {languages.map((lang, idx) => (
          <LanguageDial key={idx} {...lang} />
        ))}
      </div>
    </>
  );
}
