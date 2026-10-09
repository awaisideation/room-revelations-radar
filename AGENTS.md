<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture
- Keep shared editorial navigation and footer in the root shell, with separate content routes, so every page preserves the same website identity.
- Store replica articles and category definitions in a browser-safe content module, with downloaded media referenced through asset pointers, so the replica needs no server or database.
- Article detail pages show previews and link to the original full article; contact submissions must not claim delivery without a connected service.
