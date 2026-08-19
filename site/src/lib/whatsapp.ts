const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919373136048";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const waLinks = {
  general: () =>
    waLink("Hey Amar, I'm interested in one of your real estate listings."),
  property: (title: string) =>
    waLink(`Hi Amar, I'd like to know more about "${title}". Is it still available?`),
  requirementMatch: (title: string, id: string) =>
    waLink(
      `Hi Amar, I may have a match for your requirement: "${title}" (Ref: ${id.slice(0, 8)}). Can we discuss?`
    ),
  enquiry: (details: string) => waLink(details),
};
