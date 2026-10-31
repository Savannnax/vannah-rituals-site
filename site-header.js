document.querySelectorAll('.site-header').forEach(header => {
    const button = header.querySelector('.site-menu-toggle');
    const navigation = header.querySelector('.site-navigation');
    if (!button || !navigation) return;
    const setOpen = open => {
        header.dataset.menuOpen = String(open);
        button.setAttribute('aria-expanded', String(open));
        button.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    };
    button.addEventListener('click', () => setOpen(header.dataset.menuOpen !== 'true'));
    navigation.addEventListener('click', event => {
        if (event.target.closest('a')) setOpen(false);
    });
    header.addEventListener('keydown', event => {
        if (event.key === 'Escape' && header.dataset.menuOpen === 'true') {
            setOpen(false);
            button.focus();
        }
    });
    document.addEventListener('pointerdown', event => {
        if (!header.contains(event.target)) setOpen(false);
    });
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 860) setOpen(false);
    });
});
