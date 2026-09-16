import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import type { SocialLink } from "#/features/contact/types/contact";

export const contactEmail = "guilhermebuenoreis.contact@gmail.com";

export const contactSubject = encodeURIComponent("Contato pelo portfólio");

export const contactHref = `mailto:${contactEmail}?subject=${contactSubject}`;

export const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${contactEmail}&su=${contactSubject}`;

export const socialLinks: SocialLink[] = [
	{
		icon: Github,
		label: "GitHub",
		href: "https://github.com/GuilhermeBuenoReis",
	},
	{
		icon: Linkedin,
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/guilherme-bueno-reis",
	},
	{
		icon: Mail,
		label: "Email",
		href: contactHref,
	},
];

export const locationMapHref = "https://www.google.com/maps/place/Brasil";
export { Mail as EmailIcon, MapPin as LocationIcon };
