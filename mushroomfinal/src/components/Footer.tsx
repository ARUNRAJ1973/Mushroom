export default function Footer() {
  return (
    <footer className="mt-16 bg-neutral-100 border-t border-neutral-200">
      <div className="container py-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold">AR Organic Mushroom</h3>
          <p className="mt-2 text-sm text-neutral-700">Organic oyster mushrooms grown with care.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <ul className="mt-2 text-sm text-neutral-700">
            <li>Phone: 9360523173</li>
            <li>Email: arunarunachalam2606@gmail.com</li>
            <li>Address: No 53, School Street, Keelalinjipattu, Reddichavady, Cuddalore 607403</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Follow Us</h4>
          <div className="mt-2 flex items-center gap-4">
            <a className="text-neutral-700 hover:text-forest transition" href="#" aria-label="Instagram">Instagram</a>
            <a className="text-neutral-700 hover:text-forest transition" href="#" aria-label="Facebook">Facebook</a>
            <a className="text-neutral-700 hover:text-forest transition" href="#" aria-label="Twitter">Twitter</a>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-200 py-4 text-center text-xs text-neutral-600">© {new Date().getFullYear()} Mushroom Farm. All rights reserved.</div>
    </footer>
  )
}