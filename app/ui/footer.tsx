export default function Footer() {
    return (
        <>
            <footer className="border-t border-moonstone text-center py-6">
                <p className="text-sm text-moonstone">
                    &copy; {new Date().getFullYear()} Books Corner. All rights reserved.
                </p>
            </footer>
        </>
    )
}