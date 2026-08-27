import { Outlet } from "@tanstack/react-router";
import { Footer } from "./footer";
import { Header } from "./header";
import { MobileBottomNavigation } from "./mobile-bottom-navigation";

export function MainLayout() {
	return (
		<>
			<a
				href="#main-content"
				className="fixed left-4 top-3 z-[60] -translate-y-20 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white transition-transform focus:translate-y-0"
			>
				Pular para o conteúdo
			</a>
			<Header />
			<main id="main-content" tabIndex={-1} className="pt-16 outline-none">
				<Outlet />
			</main>
			<Footer />
			<MobileBottomNavigation />
		</>
	);
}
