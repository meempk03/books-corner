export default function Footer() {
  return (
    <>
      <footer className="border-t border-border text-center py-6">
        <p className="text-sm text-secondary">
          &copy; {new Date().getFullYear()} Books Corner. All rights reserved.
        </p>
      </footer>
    </>
  );
}
